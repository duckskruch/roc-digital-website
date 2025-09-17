'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => (
  <footer className="footer-full">
    <div className="footer-transition"></div>
    <div className="footer-container">
      <div className="footer-column footer-column--main">
        <Link href="/">
          <Image src="/logo.svg" alt="ROC Digital" width={160} height={32} />
        </Link>
        <p>Внедряем AI-решения с гарантией окупаемости. Трансформируем ваш бизнес с помощью передовых технологий.</p>
        <div className="footer-lang">🇷🇺 RU | 🇺🇸 EN</div>
      </div>
      <div className="footer-column">
        <h4>Направления</h4>
        <Link href="/services/ai-assistant">AI-Ассистенты</Link>
        <Link href="/services/automation">Автоматизация</Link>
        <Link href="/services/content-generation">Медиа-контент</Link>
        <Link href="/services/data-analytics">Анализ данных</Link>
      </div>
      <div className="footer-column">
        <h4>Компания</h4>
        <Link href="/cases">Кейсы</Link>
        <Link href="/#consultation-form">Контакты</Link>
        <Link href="/privacy">Приватность</Link>
        <Link href="/terms">Условия</Link>
      </div>
      <div className="footer-column">
        <h4>Связаться</h4>
        <a href="https://t.me/roc_digital" target="_blank" rel="noopener noreferrer">Telegram: @roc_digital</a>
        <a href="mailto:roc.digital@mail.ru">Email: roc.digital@mail.ru</a>
        <a href="https://wa.me/79999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 ROC Digital. Все права защищены.</p>
    </div>

    {/* Mobile bottom contact bar */}
    <div className="contact-bottom-bar" aria-label="Контакты: Telegram, WhatsApp, Email">
      <a href="https://t.me/roc_digital" target="_blank" rel="noopener noreferrer" className="contact-bottom-bar__btn contact-bottom-bar__btn--tg">TG</a>
      <a href="https://wa.me/79999999999" target="_blank" rel="noopener noreferrer" className="contact-bottom-bar__btn contact-bottom-bar__btn--wa">WA</a>
      <a href="mailto:roc.digital@mail.ru" className="contact-bottom-bar__btn contact-bottom-bar__btn--mail">Mail</a>
    </div>
  </footer>
);
