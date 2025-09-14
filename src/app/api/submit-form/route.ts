import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8245451263:AAHbZuvrTtauSPuLrHTQzK9ikRDgo6DtBEE';
const TELEGRAM_ACCOUNT_ID = process.env.TELEGRAM_ACCOUNT_ID || '5241289583';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, serviceType } = body;
    
    console.log('Received form data:', { name, email, phone, company, message, serviceType });
    console.log('Environment check:', { 
      hasToken: !!TELEGRAM_BOT_TOKEN, 
      hasAccountId: !!TELEGRAM_ACCOUNT_ID,
      tokenLength: TELEGRAM_BOT_TOKEN?.length || 0
    });

    // Валидация обязательных полей
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Пожалуйста, заполните все обязательные поля' },
        { status: 400 }
      );
    }

    // Проверяем наличие токена бота
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_ACCOUNT_ID) {
      console.error('Telegram bot token or account ID not configured');
      console.log('Form data received:', { name, email, company, message, serviceType });
      
      // Временно возвращаем успех без отправки в Telegram
      return NextResponse.json({
        success: true,
        message: 'Заявка получена! Мы свяжемся с вами в ближайшее время. (Telegram не настроен)'
      });
    }

    // Формируем сообщение для Telegram
    const telegramMessage = `
🆕 *Новая заявка с сайта ROC Digital*

👤 *Контактная информация:*
• Имя: ${name}
• Контакт: ${email}
${company ? `• Компания: ${company}` : ''}

📋 *Детали заявки:*
${serviceType ? `• Тип услуги: ${serviceType}` : ''}
${message ? `• Сообщение: ${message}` : ''}
${phone ? `• Дополнительная информация: ${phone}` : ''}

⏰ *Время:* ${new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })}

🌐 *Источник:* ROC Digital Website
    `.trim();

    // Отправляем сообщение в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_ACCOUNT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.text();
      console.error('Telegram API error:', errorData);
      console.error('Response status:', telegramResponse.status);
      console.error('Response headers:', telegramResponse.headers);
      
      // Возвращаем более детальную ошибку для отладки
      return NextResponse.json(
        { error: `Ошибка отправки в Telegram: ${telegramResponse.status} - ${errorData}` },
        { status: 500 }
      );
    }

    // Логируем успешную отправку
    console.log('Form submitted successfully:', { name, email, phone });

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    
    // В случае ошибки все равно логируем данные формы
    try {
      const body = await request.json();
      console.log('Form data that failed:', body);
    } catch (e) {
      console.log('Could not parse request body');
    }
    
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заявки. Попробуйте еще раз или свяжитесь с нами напрямую.' },
      { status: 500 }
    );
  }
}
