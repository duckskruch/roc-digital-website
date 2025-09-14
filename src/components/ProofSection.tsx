'use client';

import React from 'react';
import { ShieldCheck, Award, Users, TrendingUp, CheckCircle, FileText } from 'lucide-react';

export const ProofSection = () => {
  return (
    <div className="section-wrapper">
      <section className="proof-section">
        <div className="proof-section__container">
          <h2 className="section-title">Наши достижения и гарантии</h2>
          <p className="section-subtitle">
            Подтвержденные результаты и сертификаты качества
          </p>
          
          <div className="proof-grid">
            <div className="proof-card">
              <div className="proof-card__icon">
                <TrendingUp size={32} />
              </div>
              <h3>ROI 180%</h3>
              <p>Средняя окупаемость за 6 месяцев</p>
              <a href="/cases" className="proof-link">
                Посмотреть кейсы
              </a>
            </div>
            
            <div className="proof-card">
              <div className="proof-card__icon">
                <Users size={32} />
              </div>
              <h3>50+ проектов</h3>
              <p>Успешно реализованных решений</p>
              <a href="/cases" className="proof-link">
                Все кейсы
              </a>
            </div>
            
            <div className="proof-card">
              <div className="proof-card__icon">
                <Award size={32} />
              </div>
              <h3>NDA</h3>
              <p>Соглашение о неразглашении</p>
              <a href="/documents/nda-template.pdf" target="_blank" rel="noopener noreferrer" className="proof-link">
                Шаблон NDA
              </a>
            </div>
            
            <div className="proof-card">
              <div className="proof-card__icon">
                <CheckCircle size={32} />
              </div>
              <h3>Гарантия качества</h3>
              <p>Соответствие всем требованиям безопасности</p>
              <a href="/privacy" className="proof-link">
                Политика конфиденциальности
              </a>
            </div>
          </div>
          
          <div className="proof-stats">
            <div className="proof-stats__item">
              <div className="proof-stats__number">98%</div>
              <div className="proof-stats__label">Довольных клиентов</div>
            </div>
            <div className="proof-stats__item">
              <div className="proof-stats__number">24/7</div>
              <div className="proof-stats__label">Техподдержка</div>
            </div>
            <div className="proof-stats__item">
              <div className="proof-stats__number">5 лет</div>
              <div className="proof-stats__label">Опыт работы</div>
            </div>
            <div className="proof-stats__item">
              <div className="proof-stats__number">40+</div>
              <div className="proof-stats__label">Технологий</div>
            </div>
          </div>
          
          <div className="proof-partners">
            <h3>Нам доверяют</h3>
            <div className="proof-partners__grid">
              <div className="proof-partners__item">
                <img src="/partners/company1.png" alt="Партнер 1" />
              </div>
              <div className="proof-partners__item">
                <img src="/partners/company2.png" alt="Партнер 2" />
              </div>
              <div className="proof-partners__item">
                <img src="/partners/company3.png" alt="Партнер 3" />
              </div>
              <div className="proof-partners__item">
                <img src="/partners/company4.png" alt="Партнер 4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
