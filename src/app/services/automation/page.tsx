import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Zap, CheckCircle, Clock, DollarSign, Shield, Bot, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';

export default function AutomationPage() {
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
                <Zap size={32} />
              </div>
              <div>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                  Автоматизация бизнес-процессов с помощью ИИ
                </h1>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '18px' }}>
                  Внедряем OCR + NLP для счетов и договоров, автозаполнение CRM/ERP, компьютерное зрение для анализа документов. Снижаем ошибки на 90% и ускоряем процессы в 5 раз.
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
                  Комплексная автоматизация документооборота
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'OCR-распознавание счетов, накладных, договоров с точностью 99.5%',
                    'Автоматическое извлечение ключевых данных (суммы, даты, контрагенты)',
                    'Интеграция с 1С, SAP, CRM и другими корпоративными системами',
                    'Умная классификация документов по типам и приоритетам',
                    'Автоматическая валидация данных и выявление несоответствий',
                    'Создание электронного архива с возможностью поиска по содержимому'
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
                  Современные технологии ИИ
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                  {['GPT-4 Vision', 'Tesseract OCR', 'OpenCV', 'Python', 'PostgreSQL', 'FastAPI', 'Docker', 'Kubernetes'].map((tech) => (
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
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>95%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>снижение ошибок</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>5x</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>ускорение процессов</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>80%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>экономия времени</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-blue-accent)' }}>ROI 300%</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>за 6 месяцев</div>
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
                  { day: 'День 1-2', title: 'Анализ документов', desc: 'Изучаем структуру ваших документов и требования' },
                  { day: 'День 3-4', title: 'Настройка OCR', desc: 'Настраиваем распознавание текста под ваши форматы' },
                  { day: 'День 5-6', title: 'Интеграция', desc: 'Подключаем к вашим системам и тестируем' },
                  { day: 'День 7', title: 'Запуск', desc: 'Финальное тестирование и передача в эксплуатацию' }
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
                Почему выбирают нашу автоматизацию бизнес-процессов?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    🎯 Точность 99.5%
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Используем передовые алгоритмы машинного обучения для распознавания документов любой сложности. 
                    Наша система обучается на ваших данных и постоянно улучшает точность.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    ⚡ Интеграция за 7 дней
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Готовые модули для популярных CRM и ERP систем. Подключаемся к 1С, SAP, 
                    Битрикс24, AmoCRM без изменения вашей инфраструктуры.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--color-gray-900)' }}>
                    🔒 Безопасность данных
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
                    Работаем в вашем контуре, соблюдаем требования 152-ФЗ. 
                    NDA по запросу, аудит безопасности, соответствие требованиям.
                  </p>
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Получить консультацию по автоматизации
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
