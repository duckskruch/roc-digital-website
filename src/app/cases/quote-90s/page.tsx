import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Clock, TrendingUp, FileText, Zap, CheckCircle, BarChart3, Calculator, Download } from 'lucide-react';

export default function Quote90sCase() {
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
              КП за 90 секунд вместо 2 часов
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--color-gray-600)', marginBottom: '32px', lineHeight: '1.6' }}>
              Автоматическая генерация коммерческих предложений с AI. 
              Ускорили создание КП в 80 раз и снизили ошибки с 15% до 0.7%.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '32px' }}>
              <div style={{ padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Clock size={20} style={{ color: 'var(--color-blue-accent)' }} />
                  <span style={{ fontWeight: '600' }}>Время создания</span>
                </div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>2ч → 90с</div>
                <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>в 80 раз быстрее</div>
              </div>
              <div style={{ padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <TrendingUp size={20} style={{ color: 'var(--color-blue-accent)' }} />
                  <span style={{ fontWeight: '600' }}>Ошибки</span>
                </div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>15% → 0.7%</div>
                <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>-95% ошибок</div>
              </div>
            </div>
            
            <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Заказать похожий проект
              <ArrowUpRight size={18} />
            </Link>
          </div>
          
          <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden' }}>
            <Image
              src="/cases/quote-90s.png"
              alt="КП за 90 секунд вместо 2 часов"
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
                  <span>2 часа на создание одного КП</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-red-500)', borderRadius: '50%' }}></div>
                  <span>10 КП в день перегружали менеджеров</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-red-500)', borderRadius: '50%' }}></div>
                  <span>15% ошибок в расчетах и текстах</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-red-500)', borderRadius: '50%' }}></div>
                  <span>Потеря скорости в конкурентной борьбе</span>
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
                  <span>AI-генератор КП с автоматическими расчетами</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-green-500)' }} />
                  <span>Автодизайн PDF с брендингом</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-green-500)' }} />
                  <span>Интеграция с прайс-листами и базами</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-green-500)' }} />
                  <span>Автоматическая отправка клиентам</span>
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
              <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>80x</div>
              <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>быстрее КП</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>2 часа → 90 секунд</div>
            </div>
            <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--color-gray-50)', borderRadius: '16px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>-95%</div>
              <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>ошибок</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>15% → 0.7%</div>
            </div>
            <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--color-gray-50)', borderRadius: '16px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>-3 дня</div>
              <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>к циклу продаж</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>быстрее закрытие сделок</div>
            </div>
            <div style={{ textAlign: 'center', padding: '32px 20px', background: 'var(--color-gray-50)', borderRadius: '16px' }}>
              <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>4 дня</div>
              <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>окупаемость</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>ROI 500%</div>
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
                🤖 AI-генерация
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                <li>• GPT‑4 для генерации текстов</li>
                <li>• Шаблоны для разных типов КП</li>
                <li>• Персонализация под клиента</li>
                <li>• Автоматическая адаптация тона</li>
              </ul>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                🧮 Расчеты
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                <li>• Python для автоматических расчетов</li>
                <li>• Интеграция с прайс-листами</li>
                <li>• Скидки и специальные условия</li>
                <li>• Проверка корректности расчетов</li>
              </ul>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                📄 PDF-генерация
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                <li>• jsPDF для создания PDF</li>
                <li>• Автоматический дизайн</li>
                <li>• Корпоративный брендинг</li>
                <li>• SMTP для отправки</li>
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
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>День 1</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Оцифровка прайсов и услуг</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-blue-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'white', fontWeight: '700' }}>2</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Дни 2–3</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Создание бота для сбора ТЗ</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-blue-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'white', fontWeight: '700' }}>3</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Дни 4–5</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Разработка расчетной логики</p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-blue-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'white', fontWeight: '700' }}>4</div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Дни 6–7</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Генерация PDF и тестирование</p>
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
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-green-600)', marginBottom: '8px' }}>1 083 000 руб/мес</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Экономия времени</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-green-600)', marginBottom: '8px' }}>+400 тыс руб</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Рост конверсии (+20%)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-gray-600)', marginBottom: '8px' }}>200 тыс руб</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Стоимость внедрения</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>4 дня</div>
              <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>Окупаемость</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '40px', background: 'var(--color-blue-accent)', borderRadius: '16px', color: 'white' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '16px' }}>
            Хотите автоматизировать создание КП?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>
            Настроим AI-генератор для вашей сферы за 7 дней
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
