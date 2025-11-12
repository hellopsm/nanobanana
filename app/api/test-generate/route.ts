import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "https://nanobanana.ai",
    "X-Title": "Nano Banana",
  },
})

export async function POST(request: NextRequest) {
  try {
    console.log('API Test Generate: Starting simple text generation test')

    const { prompt } = await request.json()
    console.log('API Test Generate: Received prompt:', prompt?.substring(0, 100) + '...')

    if (!prompt) {
      return NextResponse.json(
        { error: 'Missing prompt' },
        { status: 400 }
      )
    }

    if (!process.env.OPENROUTER_API_KEY) {
      console.error('API Test Generate: Missing OpenRouter API key')
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    console.log('API Test Generate: Calling OpenRouter with simple text model...')
    const completion = await openai.chat.completions.create({
      model: "meta-llama/llama-3.2-3b-instruct:free",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 500,
    })

    console.log('API Test Generate: Full response:', JSON.stringify(completion, null, 2))
    const result = completion.choices[0]?.message?.content

    if (!result) {
      console.error('API Test Generate: No content in response')
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      )
    }

    console.log('API Test Generate: Success')
    return NextResponse.json({ result, model: "meta-llama/llama-3.2-3b-instruct:free" })
  } catch (error) {
    console.error('API Test Generate: Error:', error)
    return NextResponse.json(
      { error: 'Failed to process: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    )
  }
}