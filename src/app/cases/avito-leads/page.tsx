import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Clock, TrendingUp, Users, Zap, CheckCircle, BarChart3, MessageSquare, Bot } from 'lucide-react';

export default function AvitoLeadsCase() {
  return (
    <div style={{ background: 'var(--color-white)', margin: '0', borderRadius: '0', padding: '80px 20px', boxShadow: 'none', minHeight: '100vh' }}>
      <Link href="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
        <ArrowLeft size={16} />
        Назад на главную
      </Link>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              AI-квалификация лидов с Авито 24/7
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--color-gray-600)', marginBottom: '32px', lineHeight: '1.6' }}>
              Автоматическая обработка лидов с Авито в режиме реального времени. 
              Сократили время ответа с 4 часов до 3 минут и повысили конверсию на 35%.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '32px' }}>
              <div style={{ padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Clock size={20} style={{ color: 'var(--color-blue-accent)' }} />
                  <span style={{ fontWeight: '600' }}>Время ответа</span>
                </div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>4ч → 3мин</div>
                <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>в 80 раз быстрее</div>
              </div>
              <div style={{ padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <TrendingUp size={20} style={{ color: 'var(--color-blue-accent)' }} />
                  <span style={{ fontWeight: '600' }}>Конверсия</span>
                </div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>12% → 16.2%</div>
                <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>+35% рост</div>
              </div>
            </div>
            
            <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Заказать похожий проект
              <ArrowUpRight size={18} />
            </Link>
          </div>
          
          <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden' }}>
            <Image
              src="/cases/avito-leads.png"
              alt="AI-квалификация лидов с Авито 24/7"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Problem & Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: 'var(--color-gray-900)' }}>
              Проблема клиента
            </h2>
            <div style={{ padding: '24px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-700)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-red-500)', borderRadius: '50%' }}></div>
                  <span>Потеря 40% лидов ночью и в выходные</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-red-500)', borderRadius: '50%' }}></div>
                  <span>50-80 обращений в день перегружали менеджеров</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-red-500)', borderRadius: '50%' }}></div>
                  <span>Время ответа 4 часа снижало конверсию</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-red-500)', borderRadius: '50%' }}></div>
                  <span>Высокая текучесть менеджеров из-за рутины</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: 'var(--color-gray-900)' }}>
              Наше решение
            </h2>
            <div style={{ padding: '24px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-700)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-green-500)' }} />
                  <span>AI-чат для первичной квалификации 24/7</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-green-500)' }} />
                  <span>Интеграция с Авито API для автоматического получения лидов</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-green-500)' }} />
                  <span>Синхронизация с amoCRM для передачи квалифицированных лидов</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-green-500)' }} />
                  <span>Telegram уведомления для менеджеров</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '40px', textAlign: 'center', color: 'var(--color-gray-900)' }}>
            Результаты внедрения
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--color-gray-50)', borderRadius: '16px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>+35%</div>
              <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>конверсия лидов</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>12% → 16.2%</div>
            </div>
            <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--color-gray-50)', borderRadius: '16px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>-60%</div>
              <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>нагрузка на менеджеров</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>80 → 32 обращения/день</div>
            </div>
            <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--color-gray-50)', borderRadius: '16px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>3 мин</div>
              <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>время ответа</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>вместо 4 часов</div>
            </div>
            <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--color-gray-50)', borderRadius: '16px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>0.4</div>
              <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>месяца окупаемость</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>ROI 400%</div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '40px', textAlign: 'center', color: 'var(--color-gray-900)' }}>
            Технологический стек
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                🤖 AI-обработка
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                <li>• GPT‑4 для обработки запросов</li>
                <li>• RAG для базы знаний</li>
                <li>• NLP для анализа намерений</li>
                <li>• Обучение на 500+ диалогах</li>
              </ul>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                🔗 Интеграции
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                <li>• Avito API для получения лидов</li>
                <li>• amoCRM API для синхронизации</li>
                <li>• Telegram Bot API</li>
                <li>• Webhook системы</li>
              </ul>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                📊 Аналитика
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                <li>• Real-time мониторинг</li>
                <li>• Метрики конверсии</li>
                <li>• A/B тестирование сценариев</li>
                <li>• Автоматические отчеты</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '40px', textAlign: 'center', color: 'var(--color-gray-900)' }}>
            Этапы внедрения
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-blue-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'white', fontWeight: '700' }}>1</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Дни 1–3</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Обучение на 500+ диалогах</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-blue-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'white', fontWeight: '700' }}>2</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Дни 4–7</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Настройка интеграций</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-blue-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'white', fontWeight: '700' }}>3</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Дни 8–10</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Создание сценариев</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-blue-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'white', fontWeight: '700' }}>4</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Дни 11–14</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Тестирование и оптимизация</p>
            </div>
          </div>
        </div>

        {/* ROI Calculation */}
        <div style={{ background: 'var(--color-gray-50)', padding: '40px', borderRadius: '16px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '32px', textAlign: 'center', color: 'var(--color-gray-900)' }}>
            Расчет окупаемости
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-green-600)', marginBottom: '8px' }}>+875 тыс/мес</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Рост продаж (+35% × 2.5 млн)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-green-600)', marginBottom: '8px' }}>120 тыс/мес</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Экономия на персонале</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-gray-600)', marginBottom: '8px' }}>400 тыс руб</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Стоимость внедрения</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>0.4 месяца</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Окупаемость</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '40px', background: 'var(--color-blue-accent)', borderRadius: '16px', color: 'white' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '16px' }}>
            Хотите автоматизировать обработку лидов?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>
            Настроим AI-систему для вашей сферы за 14 дней
          </p>
          <Link href="/#consultation-form" className="cta-button" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            background: 'white',
            color: 'var(--color-blue-accent)'
          }}>
            Обсудить проект
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
