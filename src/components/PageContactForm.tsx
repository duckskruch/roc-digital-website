'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const PageContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="section-wrapper" style={{ marginTop: '40px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '16px', textAlign: 'left' }}>
          Обсудим ваш проект?
        </h2>
        <p className="section-subtitle" style={{ marginBottom: '32px' }}>
          Оставьте заявку и получите бесплатную консультацию
        </p>
        
        <form onSubmit={handleSubmit} className="consultation-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ padding: '16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--border-radius-small)', fontFamily: 'inherit' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ padding: '16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--border-radius-small)', fontFamily: 'inherit' }}
            />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ padding: '16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--border-radius-small)', fontFamily: 'inherit' }}
            />
            <input
              type="text"
              name="company"
              placeholder="Компания"
              value={formData.company}
              onChange={handleChange}
              style={{ padding: '16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--border-radius-small)', fontFamily: 'inherit' }}
            />
          </div>
          
          <textarea
            name="message"
            placeholder="Расскажите о вашем проекте"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            style={{ padding: '16px', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--border-radius-small)', fontFamily: 'inherit', resize: 'vertical' }}
          />
          
          <button type="submit" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'center' }}>
            Отправить заявку
            <ArrowUpRight size={18} />
          </button>
        </form>
        
        <p className="privacy-note" style={{ marginTop: '16px' }}>
          Нажимая кнопку, вы соглашаетесь с <Link href="/privacy" style={{ color: 'var(--color-blue-accent)' }}>политикой конфиденциальности</Link>
        </p>
      </div>
    </div>
  );
};
