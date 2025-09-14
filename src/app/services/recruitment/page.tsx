import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Users, CheckCircle, Clock, DollarSign, Shield, Search, FileText, Brain } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';

export default function RecruitmentPage() {
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
                <Users size={32} />
              </div>
              <div>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                  AI-рекрутмент и подбор персонала
                </h1>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '18px' }}>
                  Автоматизируем поиск, отбор и оценку кандидатов с помощью ИИ. Сокращаем время подбора в 3 раза, повышаем качество найма на 40% и снижаем стоимость найма на 60%.
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
                <div style={{ color: 'var(--color-gray-600)' }}>От 200 тыс руб</div>
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
                  Полный цикл AI-рекрутмента
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Автоматический поиск кандидатов по 50+ источникам (HH, SuperJob, LinkedIn)',
                    'AI-анализ резюме и оценка соответствия требованиям с точностью 95%',
                    'Автоматическое проведение первичных интервью через чат-бота',
                    'Психометрическое тестирование и оценка soft skills',
                    'Ранжирование кандидатов по вероятности успешного найма',
                    'Интеграция с ATS и автоматическое ведение кандидатов'
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
                  Технологии ИИ для рекрутмента
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                  {['GPT-4', 'BERT', 'NLP', 'Computer Vision', 'Python', 'TensorFlow', 'PostgreSQL', 'FastAPI'].map((tech) => (
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
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>3x</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>быстрее подбор</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>+40%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>качество найма</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>-60%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>стоимость найма</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>95%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>точность оценки</div>
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
            
            {/* Recruitment Features */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', color: 'var(--color-gray-900)' }}>
                Возможности AI-рекрутмента
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Search size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Умный поиск</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Поиск по 50+ источникам</li>
                    <li>• Семантический анализ вакансий</li>
                    <li>• Поиск пассивных кандидатов</li>
                    <li>• Автоматическое обновление базы</li>
                    <li>• Рекомендации похожих кандидатов</li>
                  </ul>
                </div>
                
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <FileText size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Анализ резюме</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Извлечение ключевых навыков</li>
                    <li>• Оценка соответствия требованиям</li>
                    <li>• Анализ карьерного роста</li>
                    <li>• Выявление красных флагов</li>
                    <li>• Ранжирование по релевантности</li>
                  </ul>
                </div>
                
                <div style={{ padding: '24px', background: 'var(--color-gray-50)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Brain size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Оценка кандидатов</h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-gray-600)' }}>
                    <li>• Психометрическое тестирование</li>
                    <li>• Оценка soft skills</li>
                    <li>• Анализ мотивации</li>
                    <li>• Прогноз успешности</li>
                    <li>• Рекомендации по развитию</li>
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
                  { day: 'День 1-2', title: 'Анализ требований', desc: 'Изучаем ваши требования к кандидатам и процессы найма' },
                  { day: 'День 3-5', title: 'Настройка AI', desc: 'Обучаем модели на ваших данных и настраиваем поиск' },
                  { day: 'День 6-8', title: 'Интеграция', desc: 'Подключаем к ATS и источникам кандидатов' },
                  { day: 'День 9-10', title: 'Тестирование', desc: 'Проводим тесты и настраиваем процессы' }
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
                Почему выбирают наш AI-рекрутмент?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    🎯 Точность 95%
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    AI анализирует тысячи параметров кандидата и предсказывает успешность найма. 
                    Наши алгоритмы постоянно обучаются на результатах работы.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    ⚡ Скорость в 3 раза
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Автоматизируем рутинные задачи рекрутеров. 
                    Время от публикации вакансии до найма сокращается в 3 раза.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    💰 Экономия 60%
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Снижаем стоимость найма за счет автоматизации и повышения качества отбора. 
                    ROI от внедрения составляет 300% за 6 месяцев.
                  </p>
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Заказать AI-рекрутмент
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