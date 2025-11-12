import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'API working',
    hasApiKey: !!process.env.OPENROUTER_API_KEY,
    timestamp: new Date().toISOString()
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Test API received:', body)

    return NextResponse.json({
      status: 'POST working',
      received: body,
      hasApiKey: !!process.env.OPENROUTER_API_KEY
    })
  } catch (error) {
    console.error('Test API error:', error)
    return NextResponse.json({
      error: 'Test API failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}