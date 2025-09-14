'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Send } from 'lucide-react';

export const FAQWithChat = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);
const [inputValue, setInputValue] = useState('');
const [messages, setMessages] = useState([
  { id: 1, text: 'Здравствуйте! Готов помочь с вопросами по технологиям, ценам и срокам. Могу помочь заполнить бриф за 60 секунд или записать на консультацию.', isBot: true }
]);
const [isTyping, setIsTyping] = useState(false);
const chatHistoryRef = useRef<HTMLDivElement>(null);

// Автоскролл к последнему сообщению только внутри чата
const scrollToBottom = () => {
  if (chatHistoryRef.current) {
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  }
};

useEffect(() => {
  // Небольшая задержка для корректного скролла
  const timer = setTimeout(() => {
    scrollToBottom();
  }, 100);
  return () => clearTimeout(timer);
}, [messages, isTyping]);

const faqs = [
  {
    q: 'Сколько это стоит и как считается цена?',
    a: 'Стоимость проектов начинается от 150 тыс. руб. и зависит от сложности. Типовые решения: AI-ассистент (от 150 тыс.), автоматизация контента (от 150 тыс.), автоматизация бизнес-процессов и аналитика (от 300 тыс.). Финальную цену считаем после детального брифа.'
  },
  {
    q: 'Как быстро окупится и какие гарантии?',
    a: 'Средняя окупаемость 3–8 месяцев. Перед стартом согласуем KPI. MVP на ваших данных — оцениваете эффект без рисков. Гарантируем работоспособность и соответствие ТЗ.'
  },
  {
    q: 'Безопасно ли это для наших данных?',
    a: 'Да. Работаем в вашем контуре, self‑hosted, VPN, NDA. 152‑ФЗ. Возможен деплой на ваших серверах. Логи только у вас.'
  },
  {
    q: 'А если наш бизнес очень специфичный?',
    a: 'Специфика — наша специализация. Изучаем процессы 2–3 дня, делаем MVP. При необходимости обучаем кастомные модели.'
  },
  {
    q: 'Что если не получится или не понравится?',
    a: 'Начинаем с 5‑минутного видео‑разбора. Потом MVP за 7 дней. Если не убеждает — платите только за анализ. Если задача не решается AI — честно скажем.'
  },
  {
    q: 'Этот сайт сгенерирован нейросетью?',
    a: 'Да, сгенерирован нейросетью за 4 часа.'
  },
];

const handleSend = async () => {
  if (!inputValue.trim()) return;

  const userMessage = { id: Date.now(), text: inputValue, isBot: false };
  const newMessages = [...messages, userMessage];
  
  setMessages(newMessages);
  setInputValue('');
  setIsTyping(true);
  
  try {
    const recentMessages = newMessages.slice(-10).map(msg => ({
      role: msg.isBot ? 'assistant' : 'user',
      content: msg.text
    }));

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: recentMessages }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response');
    }

    const data = await response.json();
    
    if (data.message) {
      const botMessage = { id: Date.now() + 1, text: data.message, isBot: true };
      setMessages(prev => [...prev, botMessage]);
    } else {
      throw new Error('No message in response');
    }
  } catch (error) {
    console.error('Chat error:', error);
    let errorMessage = 'Извините, произошла ошибка. Попробуйте еще раз или свяжитесь с нами напрямую.';
    
    // Пытаемся получить более детальную информацию об ошибке
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Проблема с подключением. Проверьте интернет-соединение.';
      } else if (error.message.includes('API key')) {
        errorMessage = 'Проблема с настройками сервера. Обратитесь к администратору.';
      }
    }
    
    const fallbackMessage = { 
      id: Date.now() + 1, 
      text: errorMessage, 
      isBot: true 
    };
    setMessages(prev => [...prev, fallbackMessage]);
  } finally {
    setIsTyping(false);
  }
};

return (
  <div className="section-wrapper" id="assistant">
    <section className="faq-chat-section">
      <div className="faq-chat__container">
        <div className="faq-chat__faq-side">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Ответы на частые вопросы</h2>
          <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: 16 }}>
            Или спросите что угодно у нашего AI-ассистента — он знает всё с этой страницы
          </p>
          <div className="faq-accordion">
            {faqs.map((item, index) => (
              <div key={index} className="faq-accordion__item">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} aria-expanded={openIndex === index}>
                  <span>{item.q}</span>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-accordion__answer"
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-chat__chat-side">
          <div className="chat-widget">
            <div className="chat-widget__header">
              <div className="chat-widget__avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="currentColor"/>
                  <circle cx="8" cy="12" r="1" fill="currentColor"/>
                  <circle cx="16" cy="12" r="1" fill="currentColor"/>
                  <path d="M8 15H16V17H8V15Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="chat-widget__header-text">
                <h4>AI-ассистент</h4>
                <p>{isTyping ? 'Печатает...' : 'Онлайн'}</p>
              </div>
            </div>
            <div className="chat-widget__history" ref={chatHistoryRef}>
              {messages.map((message) => (
                <div key={message.id} className={`chat-widget__message ${message.isBot ? 'chat-widget__message--bot' : 'chat-widget__message--user'}`}>
                  <div className="message-bubble">
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="chat-widget__message chat-widget__message--bot">
                  <div className="chat-widget__typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
            <div className="chat-widget__input-wrapper">
              <input
                type="text"
                placeholder="Спросите что-нибудь..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button aria-label="Отправить вопрос" onClick={handleSend}><Send size={20} /></button>
            </div>
            <small className="chat-disclaimer">AI может ошибаться в деталях. Для сложных вопросов подключим эксперта.</small>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};
