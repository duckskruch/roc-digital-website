import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_ACCOUNT_ID = process.env.TELEGRAM_ACCOUNT_ID;

export async function GET() {
  try {
    console.log('Testing Telegram configuration...');
    console.log('Token exists:', !!TELEGRAM_BOT_TOKEN);
    console.log('Account ID exists:', !!TELEGRAM_ACCOUNT_ID);
    console.log('Token length:', TELEGRAM_BOT_TOKEN?.length || 0);
    console.log('Account ID:', TELEGRAM_ACCOUNT_ID);

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_ACCOUNT_ID) {
      return NextResponse.json({
        error: 'Telegram configuration missing',
        hasToken: !!TELEGRAM_BOT_TOKEN,
        hasAccountId: !!TELEGRAM_ACCOUNT_ID
      }, { status: 500 });
    }

    // Тестируем отправку простого сообщения
    const testMessage = `🧪 Тестовое сообщение от ROC Digital
Время: ${new Date().toLocaleString('ru-RU')}
Статус: API работает корректно`;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_ACCOUNT_ID,
          text: testMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    const responseData = await response.text();
    console.log('Telegram API response:', response.status, responseData);

    if (!response.ok) {
      return NextResponse.json({
        error: 'Telegram API error',
        status: response.status,
        response: responseData
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Telegram test successful',
      response: JSON.parse(responseData)
    });

  } catch (error) {
    console.error('Test error:', error);
    return NextResponse.json({
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
