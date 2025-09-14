import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle, Clock, DollarSign, Shield, Image, Video, FileText } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';

export default function ContentGenerationPage() {
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
                <Sparkles size={32} />
              </div>
              <div>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                  Автоматизация создания медиа-контента
                </h1>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '18px' }}>
                  Генерируем контент в бренд-стиле, автопостинг и аналитика, контент-планы. Повышаем вовлечение на 40% и экономим 70% времени на создание контента.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                <Clock size={24} style={{ color: 'var(--color-blue-accent)', marginBottom: '8px' }} />
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>Срок</div>
                <div style={{ color: 'var(--color-gray-600)' }}>от 10 дней</div>
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
                  Полный цикл создания контента
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Генерация текстов для постов, статей, email-рассылок в бренд-стиле',
                    'Создание изображений и видео с помощью AI (DALL-E, Midjourney, Runway)',
                    'Автоматическое планирование контента на основе трендов и аналитики',
                    'Автопостинг в социальные сети с оптимальным временем публикации',
                    'A/B тестирование контента и автоматическая оптимизация',
                    'Детальная аналитика эффективности и ROI контента'
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
                  {['GPT-4', 'DALL-E 3', 'Midjourney', 'Runway Gen-4', 'Claude 3', 'Python', 'Node.js', 'MongoDB'].map((tech) => (
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
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>+40%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>рост вовлечения</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>-70%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>время на создание</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>3x</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>больше контента</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>ROI 250%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>за 4 месяца</div>
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
            
            {/* Content Types */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: 'var(--color-gray-900)' }}>
                Типы контента, которые мы создаем
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <FileText size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Текстовый контент</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Посты для соцсетей</li>
                    <li>• Статьи для блога</li>
                    <li>• Email-рассылки</li>
                    <li>• Описания товаров</li>
                    <li>• SEO-тексты</li>
                  </ul>
                </div>
                
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Image size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Визуальный контент</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Изображения для постов</li>
                    <li>• Инфографика</li>
                    <li>• Баннеры и обложки</li>
                    <li>• Логотипы и иконки</li>
                    <li>• Презентации</li>
                  </ul>
                </div>
                
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Video size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Видео контент</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Короткие видео для соцсетей</li>
                    <li>• Анимированные ролики</li>
                    <li>• Видео-инструкции</li>
                    <li>• Презентационные видео</li>
                    <li>• Рекламные ролики</li>
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
                  { day: 'День 1-2', title: 'Анализ бренда', desc: 'Изучаем ваш стиль, тональность и целевую аудиторию' },
                  { day: 'День 3-5', title: 'Настройка AI', desc: 'Обучаем модели на ваших данных и настраиваем генерацию' },
                  { day: 'День 6-8', title: 'Создание контента', desc: 'Генерируем первые образцы и тестируем качество' },
                  { day: 'День 9-10', title: 'Автоматизация', desc: 'Настраиваем автопостинг и аналитику' }
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
                Почему выбирают нашу автоматизацию контента?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    🎨 Уникальный стиль
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    AI изучает ваш бренд и создает контент в едином стиле. 
                    Каждый пост, изображение и видео соответствует вашей айдентике.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    📈 Умная аналитика
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Отслеживаем эффективность каждого типа контента. 
                    Автоматически оптимизируем стратегию на основе данных.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    ⚡ Масштабируемость
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Создаем контент для всех ваших каналов одновременно. 
                    От одного бриф-листа получаем 10+ вариантов контента.
                  </p>
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Заказать автоматизацию контента
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