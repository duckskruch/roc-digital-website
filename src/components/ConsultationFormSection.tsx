'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const ConsultationFormSection = () => {
const [type, setType] = useState<'consultation' | 'audit' | 'mvp'>('audit');
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const [submitMessage, setSubmitMessage] = useState('');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get('name') as string,
    email: formData.get('contact') as string,
    phone: formData.get('contact') as string, // Используем contact как phone
    company: formData.get('company') as string,
    message: formData.get('task') as string,
    serviceType: type,
    file: formData.get('file') as string,
  };

  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      setSubmitStatus('success');
      setSubmitMessage(result.message);
      // Очищаем форму
      (e.target as HTMLFormElement).reset();
      // Показываем всплывающее окно вместо перехода на другую страницу
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
    } else {
      setSubmitStatus('error');
      setSubmitMessage(result.error || 'Произошла ошибка при отправке заявки');
    }
  } catch (error) {
    setSubmitStatus('error');
    setSubmitMessage('Произошла ошибка при отправке заявки');
  } finally {
    setIsSubmitting(false);
  }
};

return (
  <div className="section-wrapper">
    <section id="consultation-form" className="consultation-section">
      <div className="consultation-container">
        <div className="consultation-form-side">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Заявка на консультацию</h2>
          <p>Заполните форму и мы свяжемся с вами в течение 24 часов</p>
          
          {/* Type selection - always visible */}
          <div className="consultation-type-selection">
            <h3>Выберите тип консультации</h3>
            <div className="consultation-type-buttons">
              <button 
                type="button"
                className={type === 'consultation' ? 'active' : ''} 
                onClick={() => setType('consultation')}
              >
                <h4>Консультация</h4>
                <p>Обсуждение задач и возможностей AI</p>
              </button>
              <button 
                type="button"
                className={type === 'audit' ? 'active' : ''} 
                onClick={() => setType('audit')}
              >
                <h4>Видеоразбор</h4>
                <p>5-минутный разбор вашего кейса с цифрами</p>
              </button>
              <button 
                type="button"
                className={type === 'mvp' ? 'active' : ''} 
                onClick={() => setType('mvp')}
              >
                <h4>Идея на MVP</h4>
                <p>Предложить идею на бесплатное MVP</p>
              </button>
            </div>
          </div>

          <form className="consultation-form" onSubmit={handleSubmit}>
            <input type="hidden" name="type" value={type} />
            <input name="name" required placeholder="Ваше имя — Как к вам обращаться" />
            <input name="contact" required placeholder="Telegram или Email — @username или email@company.ru" />
            <input name="company" placeholder="Компания — название и сфера (опционально)" />
            <textarea name="task" required rows={6} placeholder="Задача (2–3 предложения) — какая рутина мешает или что тормозит бизнес"></textarea>
            <input name="file" placeholder="Ссылка на ТЗ/пример (опционально)" />
            
            {submitStatus === 'success' && (
              <div className="form-status form-status--success">
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
                <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
                  Заявка отправлена!
                </div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>
                  Мы свяжемся с вами в ближайшее время
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-status form-status--error">
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✕</div>
                <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
                  Ошибка отправки
                </div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>
                  {submitMessage}
                </div>
              </div>
            )}
            
            <button 
              type="submit" 
              className="cta-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
            </button>
            <small className="privacy-note">Отправляя форму, соглашаетесь с <Link href="/privacy" style={{ color: 'var(--color-blue-accent)' }}>политикой конфиденциальности</Link>. Ответим тем же каналом в течение 24 часов.</small>
          </form>
        </div>
      </div>
    </section>
  </div>
);
};
