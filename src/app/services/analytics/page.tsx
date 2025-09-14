import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BarChart3, CheckCircle, Clock, DollarSign, Shield, TrendingUp, Database, Brain } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader />
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
                <BarChart3 size={32} />
              </div>
              <div>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                  Анализ данных и RAG
                </h1>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '18px' }}>
                  Прогноз спроса, отток клиентов, оптимизация запасов. Повышаем точность прогнозов на 35% и снижаем остатки на 20% с помощью машинного обучения.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <Clock size={24} style={{ color: 'var(--color-blue-accent)', marginBottom: '8px' }} />
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>Срок</div>
                <div style={{ color: 'var(--color-gray-600)' }}>от 14 дней</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <DollarSign size={24} style={{ color: 'var(--color-blue-accent)', marginBottom: '8px' }} />
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>Цена</div>
                <div style={{ color: 'var(--color-gray-600)' }}>От 300 тыс руб</div>
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
                  AI-аналитика для бизнеса
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Прогнозирование спроса с точностью 95% на основе исторических данных',
                    'Выявление клиентов с высоким риском оттока за 30 дней до ухода',
                    'Оптимизация складских запасов и снижение издержек на хранение',
                    'Анализ эффективности маркетинговых кампаний и ROI',
                    'Сегментация клиентов для персонализированных предложений',
                    'Автоматические отчеты и дашборды в реальном времени'
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
                  Технологии машинного обучения
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                  {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'PostgreSQL', 'Apache Spark'].map((tech) => (
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
                    Результаты внедрения
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>+35%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>точность прогнозов</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>-20%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>остатки на складе</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>90%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>точность прогноза оттока</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>ROI 400%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>за 8 месяцев</div>
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
            
            {/* Analytics Solutions */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: 'var(--color-gray-900)' }}>
                Решения для разных отраслей
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <TrendingUp size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Ритейл и E-commerce</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Прогноз спроса по товарам</li>
                    <li>• Оптимизация ассортимента</li>
                    <li>• Динамическое ценообразование</li>
                    <li>• Анализ корзины покупок</li>
                    <li>• Прогноз оттока клиентов</li>
                  </ul>
                </div>
                
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Database size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Финансы и банкинг</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Оценка кредитных рисков</li>
                    <li>• Обнаружение мошенничества</li>
                    <li>• Прогноз дефолтов</li>
                    <li>• Оптимизация портфеля</li>
                    <li>• Анализ транзакций</li>
                  </ul>
                </div>
                
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Brain size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Производство</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Предиктивное обслуживание</li>
                    <li>• Контроль качества</li>
                    <li>• Оптимизация производства</li>
                    <li>• Прогноз сбоев оборудования</li>
                    <li>• Управление запасами</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: 'var(--color-gray-900)' }}>
                Этапы работы
              </h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  { day: 'День 1-3', title: 'Анализ данных', desc: 'Изучаем ваши данные, выявляем паттерны и аномалии' },
                  { day: 'День 4-7', title: 'Подготовка данных', desc: 'Очищаем, нормализуем и структурируем данные для ML' },
                  { day: 'День 8-11', title: 'Обучение моделей', desc: 'Создаем и обучаем модели машинного обучения' },
                  { day: 'День 12-14', title: 'Внедрение', desc: 'Интегрируем решения в ваши системы и тестируем' }
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
                Почему выбирают нашу AI-аналитику?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    🎯 Высокая точность
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Используем передовые алгоритмы машинного обучения. 
                    Наши модели показывают точность прогнозов до 95%.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    📊 Готовые дашборды
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Создаем интуитивные дашборды с ключевыми метриками. 
                    Все данные обновляются в реальном времени.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    🔄 Постоянное улучшение
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Модели автоматически переобучаются на новых данных. 
                    Точность прогнозов растет с каждым месяцем.
                  </p>
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
              <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Получить консультацию по аналитике
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