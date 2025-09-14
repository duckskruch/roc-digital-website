'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const ServicesBento = () => {
const services = [
    {
      slug: 'ai-assistant',
      title: 'AI-ассистент для клиентов 24/7',
      result: '100% обращений, +25% CSAT, −60% нагрузка',
      theses: ['Доступ к базе знаний', 'Интеграция с CRM, календарями', 'Эскалация сложных вопросов'],
      time: 'от 5 дней',
      price: 'От 150 тыс руб',
    },
    {
      slug: 'sales-materials',
      title: 'Автоматизация создания коммерческих материалов',
      result: '×50 быстрее КП, +20% конверсия',
      theses: ['Генерация КП/презентаций', 'Лендинги под бренд', 'PDF и подписи'],
      time: 'от 7 дней',
      price: 'От 150 тыс руб',
    },
    {
      slug: 'content-generation',
      title: 'Автоматизация создания медиа-контента',
      result: '+40% вовлечения, −70% времени',
      theses: ['Генерация контента в бренд-стиле', 'Автопостинг и аналитика', 'Контент-планы'],
      time: 'от 10 дней',
      price: 'От 150 тыс руб',
    },
    {
      slug: 'automation',
      title: 'Автоматизация бизнес-процессов',
      result: '−80% времени, −90% ошибок ввода',
      theses: ['OCR + NLP для счетов и договоров', 'Автозаполнение CRM/ERP', 'Компьютерное зрение для анализа документов'],
      time: 'от 7 дней',
      price: 'От 300 тыс руб',
    },
    {
      slug: 'data-analytics',
      title: 'Анализ данных и RAG',
      result: '+35% точность, −20% остатки',
      theses: ['Прогноз спроса', 'Отток клиентов', 'Оптимизация запасов'],
      time: 'от 14 дней',
      price: 'От 300 тыс руб',
    },
];

return (
  <div className="section-wrapper" id="services">
    <section className="services-bento-section">
      <h2 className="section-title" style={{ textAlign: 'left' }}>5 направлений автоматизации с измеримым эффектом</h2>
      <p className="section-subtitle">От диагностики до внедрения за 7–30 дней в зависимости от сложности интеграций</p>
      <div className="services-bento-grid">
        {services.map((s, idx) => (
          <Link key={idx} href={`/services/${s.slug}`} className="bento-link-item-original">
            <ArrowUpRight className="bento-item__arrow-icon" size={24} />
            <h3>{s.title}</h3>
            <ul>
              {s.theses.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <p className="bento-item__result-text"><strong>Результат:</strong> {s.result}</p>
            <div className="bento-info-row">
              <span>Срок: {s.time}</span>
              <span>Цена: {s.price}</span>
            </div>
          </Link>
        ))}
        <Link href="/#consultation-form" className="bento-link-item-original bento-item--cta-original">
          <h3>Есть другая задача?</h3>
          <p>Расскажите нам о ней, и мы найдем решение.</p>
          <ArrowUpRight className="bento-item__arrow-icon--cta" size={32} />
        </Link>
      </div>
    </section>
  </div>
);
};
