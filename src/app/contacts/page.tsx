import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты - ROC Digital',
  description: 'Свяжитесь с нами для обсуждения вашего AI-проекта. Консультации, техническая поддержка, партнерство. Ответим в течение 24 часов.',
  keywords: 'контакты, связь, консультация, поддержка, AI, автоматизация',
  openGraph: {
    title: 'Контакты - ROC Digital',
    description: 'Свяжитесь с нами для обсуждения вашего AI-проекта. Консультации, техническая поддержка, партнерство.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Контакты - ROC Digital',
    description: 'Свяжитесь с нами для обсуждения вашего AI-проекта. Консультации, техническая поддержка, партнерство.',
  },
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader />
      <div className="page-background">
        <div className="section-wrapper">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
              <ArrowLeft size={16} />
              Назад на главную
            </Link>
            
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Контакты
            </h1>
            
            <div style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
              <p style={{ marginBottom: '32px', fontSize: '18px' }}>
                Свяжитесь с нами для обсуждения вашего проекта. Мы готовы ответить на все вопросы и предложить оптимальное решение.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '48px' }}>
                <div style={{ backgroundColor: 'var(--color-white)', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Mail size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Email</h3>
                  </div>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Общие вопросы:</strong><br />
                    <a href="mailto:info@roc.digital" style={{ color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
                      info@roc.digital
                    </a>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Техническая поддержка:</strong><br />
                    <a href="mailto:support@roc.digital" style={{ color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
                      support@roc.digital
                    </a>
                  </p>
                  <p>
                    <strong>Партнерство:</strong><br />
                    <a href="mailto:partners@roc.digital" style={{ color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
                      partners@roc.digital
                    </a>
                  </p>
                </div>
                
                <div style={{ backgroundColor: 'var(--color-white)', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Phone size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Телефон</h3>
                  </div>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Основной:</strong><br />
                    <a href="tel:+7-XXX-XXX-XX-XX" style={{ color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
                      +7 (XXX) XXX-XX-XX
                    </a>
                  </p>
                  <p>
                    <strong>WhatsApp/Telegram:</strong><br />
                    <a href="https://wa.me/7XXXXXXXXXX" style={{ color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
                      +7 (XXX) XXX-XX-XX
                    </a>
                  </p>
                </div>
                
                <div style={{ backgroundColor: 'var(--color-white)', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <MapPin size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Адрес</h3>
                  </div>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Офис:</strong><br />
                    г. Москва, ул. Примерная, д. 123<br />
                    БЦ "Примерный", офис 456
                  </p>
                  <p>
                    <strong>Почтовый адрес:</strong><br />
                    123456, г. Москва<br />
                    а/я 789
                  </p>
                </div>
                
                <div style={{ backgroundColor: 'var(--color-white)', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Clock size={24} style={{ color: 'var(--color-blue-accent)' }} />
                    <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--color-gray-900)' }}>Время работы</h3>
                  </div>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Пн-Пт:</strong> 9:00 - 18:00 (МСК)
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Сб:</strong> 10:00 - 16:00 (МСК)
                  </p>
                  <p>
                    <strong>Вс:</strong> Выходной
                  </p>
                </div>
              </div>
              
              <div style={{ backgroundColor: 'var(--color-blue-50)', padding: '24px', borderRadius: '12px', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--color-gray-900)', marginBottom: '16px' }}>
                  Как мы работаем
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>1. Консультация</h4>
                    <p style={{ fontSize: '14px' }}>Бесплатная консультация по вашему проекту</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>2. Анализ</h4>
                    <p style={{ fontSize: '14px' }}>Детальный анализ требований и возможностей</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>3. Предложение</h4>
                    <p style={{ fontSize: '14px' }}>Техническое решение и коммерческое предложение</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-blue-accent)', marginBottom: '8px' }}>4. Реализация</h4>
                    <p style={{ fontSize: '14px' }}>Разработка и внедрение решения</p>
                  </div>
                </div>
              </div>
              
              <div style={{ backgroundColor: 'var(--color-white)', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--color-gray-900)', marginBottom: '16px' }}>
                  Часто задаваемые вопросы
                </h3>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-gray-800)', marginBottom: '8px' }}>
                      Сколько времени занимает разработка?
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>
                      Сроки зависят от сложности проекта. Простые решения - от 2 недель, сложные системы - до 6 месяцев.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-gray-800)', marginBottom: '8px' }}>
                      Предоставляете ли вы техническую поддержку?
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>
                      Да, мы предоставляем техническую поддержку и сопровождение всех наших решений.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-gray-800)', marginBottom: '8px' }}>
                      Можно ли получить демо-версию?
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-gray-600)' }}>
                      Конечно! Мы можем подготовить демо-версию для демонстрации возможностей решения.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageContactForm />
      </div>
    </>
  );
}
