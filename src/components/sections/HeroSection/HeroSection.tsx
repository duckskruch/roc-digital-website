import React from 'react';
import { Bot, Sparkles, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__video-background">
        <video autoPlay loop muted playsInline preload="none" poster="/hero-video-poster.jpg">
          <source src="/hero-video-optimized.webm" type="video/webm" />
          <source src="/hero-video-optimized.mp4" type="video/mp4" />
        </video>
        <div className="hero-section__video-overlay hero-section__video-overlay--strong"></div>
      </div>
      <div className="hero-section__container">
        <div className="hero-section__glass-panel hero--transparent">
          <h1>AI, который экономит время и деньги — покажем на вашем кейсе за 5 минут</h1>
          <p>Внедряем в ваш контур с NDA и гарантией окупаемости. Используем 40+ технологий для глубокой интеграции с вашими процессами</p>
          <div className="hero-cta-row">
            <a href="#consultation-form" className="hero-cta-main">Получить 5-минутный разбор</a>
            <span className="hero-cta-note">Подготовим разбор в течение 24 часов</span>
          </div>
          <div className="hero-stats">
            <span><strong>17+</strong> успешных внедрений</span>
            <span>Средняя экономия: 3–6 часов/день</span>
            <span>ROI от 180% за 6 месяцев</span>
          </div>
          <div className="hero-trust">
            <div className="hero-trust__item">
              <ShieldCheck size={16} /> Безопасность данных
            </div>
            <div className="hero-trust__item">
              <Bot size={16} /> Работаем в вашем контуре
            </div>
            <div className="hero-trust__item">
              <Sparkles size={16} /> NDA по запросу
            </div>
            <div className="hero-trust__price">Проекты от 100 тыс руб</div>
          </div>
        </div>
      </div>
    </section>
  );
};
