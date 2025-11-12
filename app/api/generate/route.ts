import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'

// 设置API路由超时时间为5分钟
export const maxDuration = 300 // 5分钟

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000",
    "X-Title": "Nano Banana",
  },
  timeout: 300000, // 5分钟超时 (300秒)
})

export async function POST(request: NextRequest) {
  try {
    console.log('API Generate: Starting request processing')

    const { prompt, imageUrl } = await request.json()
    console.log('API Generate: Received prompt:', prompt?.substring(0, 100) + '...')
    console.log('API Generate: Image URL type:', typeof imageUrl, imageUrl?.substring(0, 50) + '...')

    if (!prompt || !imageUrl) {
      console.error('API Generate: Missing required fields', { hasPrompt: !!prompt, hasImageUrl: !!imageUrl })
      return NextResponse.json(
        { error: 'Missing prompt or image URL' },
        { status: 400 }
      )
    }

    if (!process.env.OPENROUTER_API_KEY) {
      console.error('API Generate: Missing OpenRouter API key')
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    console.log('API Generate: Calling OpenRouter API...')
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.5-flash-image",
      messages: [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": `Please analyze this image and respond to: ${prompt}`
            },
            {
              "type": "image_url",
              "image_url": {
                "url": imageUrl
              }
            }
          ]
        }
      ]
    })

    console.log('API Generate: Full OpenRouter response:', JSON.stringify(completion, null, 2))

    // 更详细的响应检查
    console.log('API Generate: Response structure check:')
    console.log('- Has choices?', !!completion.choices)
    console.log('- Choices length:', completion.choices?.length)
    console.log('- First choice:', completion.choices?.[0])
    console.log('- First choice message:', completion.choices?.[0]?.message)
    console.log('- Content:', completion.choices?.[0]?.message?.content)

    const result = completion.choices[0]?.message?.content

    if (!result) {
      console.error('API Generate: No content in response choices:', completion.choices)
      console.error('API Generate: Full completion object:', completion)

      // 检查是否有其他可用的响应数据
      if (completion.choices && completion.choices.length > 0) {
        const choice = completion.choices[0]
        if (choice.message) {
          console.log('API Generate: Message object exists but no content:', choice.message)

          // 尝试返回任何可用的信息
          if (choice.finish_reason) {
            return NextResponse.json({
              error: `AI finished with reason: ${choice.finish_reason}`,
              debug: completion
            }, { status: 500 })
          }
        }
      }

      return NextResponse.json(
        {
          error: 'No response from AI - empty content',
          debug: completion
        },
        { status: 500 }
      )
    }

    console.log('API Generate: Success, returning result')
    return NextResponse.json({ result })
  } catch (error) {
    console.error('API Generate: Error processing image:', error)
    return NextResponse.json(
      { error: 'Failed to process image: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    )
  }
}