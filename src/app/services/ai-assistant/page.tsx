import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Bot, CheckCircle, Clock, DollarSign, Shield, MessageCircle, Zap } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';
import { ServiceNavigation } from '@/components/ServiceNavigation';

export default function AiAssistantPage() {
  return (
    <>
      <PageHeader />
      <ServiceNavigation currentService="ai-assistant" />
      <div className="page-background">
        <div style={{ background: 'var(--color-white)', margin: '0', borderRadius: '0', padding: '80px 20px', boxShadow: 'none', minHeight: '100vh' }}>
          <Link href="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
            <ArrowLeft size={16} />
            Назад на главную
          </Link>
          
          <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ 
                color: 'var(--color-blue-accent)', 
                background: 'rgba(37, 99, 235, 0.1)', 
                padding: '16px', 
                borderRadius: '16px' 
              }}>
                <Bot size={32} />
              </div>
              <div>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                  AI-ассистент для клиентов 24/7
                </h1>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '18px' }}>
                  Умный чат-бот на базе GPT-4, который знает ваш продукт, отвечает на вопросы клиентов и помогает с продажами. 
                  Обрабатывает 100% обращений, повышает CSAT на 25% и снижает нагрузку на поддержку на 60%.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <Clock size={24} style={{ color: 'var(--color-blue-accent)', marginBottom: '8px' }} />
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>Срок</div>
                <div style={{ color: 'var(--color-gray-600)' }}>от 5 дней</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <DollarSign size={24} style={{ color: 'var(--color-blue-accent)', marginBottom: '8px' }} />
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>Цена</div>
                <div style={{ color: 'var(--color-gray-600)' }}>От 150 тыс руб</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <CheckCircle size={24} style={{ color: 'var(--color-blue-accent)', marginBottom: '8px' }} />
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>Гарантия</div>
                <div style={{ color: 'var(--color-gray-600)' }}>100% результат</div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '40px' }}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: 'var(--color-gray-900)' }}>
                  Интеллектуальные возможности ассистента
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Обработка 100% клиентских обращений 24/7 без выходных',
                    'Понимание контекста и ведение многошаговых диалогов',
                    'Автоматическая интеграция с CRM, календарями и платежными системами',
                    'Персонализированные рекомендации на основе истории клиента',
                    'Обработка заказов, бронирований и возвратов',
                    'Поддержка 50+ языков с сохранением контекста'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                      <CheckCircle size={20} style={{ color: 'var(--color-blue-accent)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: 'var(--color-gray-900)' }}>
                  Передовые технологии ИИ
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                  {['GPT-4 Turbo', 'RAG System', 'Vector DB', 'LangChain', 'WebSocket', 'Node.js', 'PostgreSQL', 'Redis'].map((tech) => (
                    <span key={tech} style={{
                      background: 'var(--color-blue-accent)',
                      color: 'var(--color-white)',
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ background: 'var(--color-gray-50)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    Измеримые результаты
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>100%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>обработка обращений</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>+25%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>рост CSAT</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>-60%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>нагрузка на поддержку</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>2 сек</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>время ответа</div>
                    </div>
                  </div>
                </div>
                
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                  Преимущества
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Работаем в вашем контуре',
                    'NDA по запросу',
                    'Безопасность данных',
                    'Гарантия окупаемости'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                      <Shield size={16} style={{ color: 'var(--color-blue-accent)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: 'var(--color-gray-900)' }}>
                Этапы работы
              </h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  { day: 'День 1-2', title: 'Обучение на данных', desc: 'Изучаем ваши диалоги и настраиваем модель' },
                  { day: 'День 3-4', title: 'Интеграция', desc: 'Подключаем к вашим системам и каналам' },
                  { day: 'День 5', title: 'Тестирование', desc: 'Проводим тесты и настраиваем сценарии' }
                ].map((step, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    gap: '16px', 
                    padding: '20px', 
                    background: 'var(--color-gray-50)', 
                    borderRadius: '12px' 
                  }}>
                    <div style={{ 
                      background: 'var(--color-blue-accent)', 
                      color: 'var(--color-white)', 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontWeight: '600',
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', marginBottom: '4px' }}>{step.day}: {step.title}</div>
                      <div style={{ color: 'var(--color-gray-600)' }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: 'var(--color-gray-50)', padding: '40px', borderRadius: '16px', marginTop: '60px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', textAlign: 'center', color: 'var(--color-gray-900)' }}>
                Как работает наш AI-ассистент?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    🧠 Обучение на ваших данных
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Ассистент изучает вашу базу знаний, FAQ, документацию и историю диалогов. 
                    Понимает специфику вашего бизнеса и говорит на языке ваших клиентов.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    🔄 Умная эскалация
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Автоматически передает сложные вопросы человеку-оператору. 
                    Сохраняет контекст диалога для плавного перехода.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    📊 Аналитика и улучшения
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Детальная аналитика диалогов, выявление пробелов в знаниях. 
                    Постоянное улучшение ответов на основе обратной связи.
                  </p>
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Заказать AI-ассистента для вашего бизнеса
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <PageContactForm />
      </div>
    </>
  );
}
