import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, FileText, CheckCircle, Clock, DollarSign, Shield, Zap, Presentation, FileCheck } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';

export default function SalesMaterialsPage() {
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
                <FileText size={32} />
              </div>
              <div>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                  Автоматизация создания коммерческих материалов
                </h1>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '18px' }}>
                  Генерация КП/презентаций, лендинги под бренд, PDF и подписи. Ускоряем создание КП в 50 раз и повышаем конверсию на 20%.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <Clock size={24} style={{ color: 'var(--color-blue-accent)', marginBottom: '8px' }} />
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>Срок</div>
                <div style={{ color: 'var(--color-gray-600)' }}>от 7 дней</div>
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
                  Полный цикл создания материалов
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Автоматическая генерация коммерческих предложений на основе шаблонов',
                    'Создание презентаций с брендингом и анимациями',
                    'Генерация лендингов под конкретные продукты и услуги',
                    'Автоматическое создание PDF-документов с подписями',
                    'Интеграция с CRM для персонализации материалов',
                    'A/B тестирование и оптимизация конверсии'
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
                  AI-технологии для контента
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                  {['GPT-4', 'DALL-E 3', 'Claude 3', 'Python', 'React', 'Node.js', 'MongoDB', 'PDF-lib'].map((tech) => (
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
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>50x</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>быстрее КП</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>+20%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>конверсия</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>90%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>автоматизация</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>ROI 300%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>за 3 месяца</div>
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
            
            {/* Material Types */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: 'var(--color-gray-900)' }}>
                Типы материалов, которые мы создаем
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <FileText size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Коммерческие предложения</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Автоматическая генерация КП</li>
                    <li>• Персонализация под клиента</li>
                    <li>• Брендинг и дизайн</li>
                    <li>• Расчет стоимости</li>
                    <li>• PDF с подписями</li>
                  </ul>
                </div>
                
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Presentation size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Презентации</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Интерактивные слайды</li>
                    <li>• Анимации и переходы</li>
                    <li>• Корпоративный стиль</li>
                    <li>• Адаптация под аудиторию</li>
                    <li>• Экспорт в разные форматы</li>
                  </ul>
                </div>
                
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <FileCheck size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Лендинги</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Адаптивный дизайн</li>
                    <li>• SEO-оптимизация</li>
                    <li>• Формы захвата лидов</li>
                    <li>• Интеграция с CRM</li>
                    <li>• A/B тестирование</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div style={{ background: 'var(--color-gray-50)', padding: '40px', borderRadius: '16px', marginTop: '60px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', textAlign: 'center', color: 'var(--color-gray-900)' }}>
                Почему выбирают нашу автоматизацию материалов?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    ⚡ Скорость в 50 раз
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    От идеи до готового КП за 5 минут вместо 2 часов. 
                    Автоматизация рутинных задач освобождает время для продаж.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    🎯 Персонализация
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Каждый материал адаптируется под конкретного клиента. 
                    AI анализирует потребности и создает релевантный контент.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    📈 Рост конверсии
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Персонализированные материалы показывают на 20% выше конверсию. 
                    A/B тестирование помогает найти оптимальные варианты.
                  </p>
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Заказать автоматизацию материалов
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