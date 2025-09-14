import { NextRequest, NextResponse } from 'next/server';
import { SYSTEM_PROMPT, OPENROUTER_CONFIG } from '@/lib/chat-prompt';

export async function POST(request: NextRequest) {
  try {
    // Проверяем наличие API ключа
    if (!process.env.OPENROUTER_API_KEY) {
      console.error('OPENROUTER_API_KEY is not set');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    // Добавляем системный промпт к сообщениям
    const chatMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    console.log('Sending request to OpenRouter with model:', OPENROUTER_CONFIG.model);

    const response = await fetch(OPENROUTER_CONFIG.apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        ...OPENROUTER_CONFIG.headers,
      },
      body: JSON.stringify({
        model: OPENROUTER_CONFIG.model,
        messages: chatMessages,
        max_tokens: OPENROUTER_CONFIG.maxTokens,
        temperature: OPENROUTER_CONFIG.temperature,
        stream: false,
      }),
    });

    console.log('OpenRouter response status:', response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenRouter API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      return NextResponse.json(
        { 
          error: 'Failed to get response from AI',
          details: errorData,
          status: response.status
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('OpenRouter response data:', data);
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Invalid response format:', data);
      return NextResponse.json(
        { error: 'Invalid response format from AI', response: data },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: data.choices[0].message.content,
      usage: data.usage
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
