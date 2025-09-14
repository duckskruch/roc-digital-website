'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const CaseFlipCards = () => {
const cases = [
{
slug: 'smm-autopilot',
title: 'SMM-автопилот для интернет-магазина',
img: '/cases/smm-autopilot.webp',
front: {
problem: '6 часов в день на создание контента, низкое вовлечение аудитории',
solution: 'AI-генерация постов + автопостинг + аналитика эффективности',
result: '−80% времени на контент, +40% engagement rate, +15% органический трафик',
metrics: '6ч → 1.2ч в день; ER 2.3% → 3.8%; органический трафик +15%'
},
back: {
challenge: 'Ручное создание 15–20 постов в неделю тормозило развитие маркетинга',
tech: ['GPT-4 для генерации текстов', 'DALL‑E 3 + LoRA для изображений', 'Telegram Bot для управления', 'Автопостинг в Instagram/VK/Telegram', 'Google Analytics 4 для аналитики'],
rollout: ['Дни 1–2: дообучение модели на 200+ постах', 'Дни 3–4: настройка бота и интеграций', 'Дни 5–7: тестирование и настройка голоса', 'Запуск: 5 команд в боте для управления'],
roi: ['Экономия времени: 330 тыс руб/мес', 'Рост продаж: +180 тыс руб/мес', 'Стоимость внедрения: 250 тыс руб', 'Окупаемость: 0.5 месяца'],
}
},
{
slug: 'avito-leads',
title: 'AI-квалификация лидов с Авито 24/7',
img: '/cases/avito-leads.webp',
front: {
problem: 'Потеря 40% лидов ночью и в выходные дни',
solution: 'AI-чат для первичной квалификации + интеграция с Авито + CRM + уведомления',
result: '+35% конверсия лидов, −60% нагрузка на менеджеров',
metrics: 'Конверсия 12% → 16.2%; время ответа 4ч → 3мин'
},
back: {
challenge: 'Нехватка ресурсов для обработки 50–80 обращений в день',
tech: ['GPT‑4 для обработки запросов', 'RAG для базы знаний', 'Avito API для интеграции', 'amoCRM API для синхронизации', 'Telegram notifications для менеджеров'],
rollout: ['Дни 1–3: обучение на 500+ диалогах', 'Дни 4–7: настройка интеграций', 'Дни 8–10: создание сценариев', 'Дни 11–14: тестирование и оптимизация'],
roi: ['Рост продаж: +35% × 2.5 млн = +875 тыс/мес', 'Экономия на персонале: 120 тыс/мес', 'Стоимость внедрения: 400 тыс руб', 'Окупаемость: 0.4 месяца'],
}
},
{
slug: 'quote-90s',
title: 'КП за 90 секунд вместо 2 часов',
img: '/cases/quote-90s.webp',
front: {
problem: '2 часа на создание коммерческого предложения, ошибки в расчетах, потеря скорости',
solution: 'AI-генератор КП + автоматические расчеты + автодизайн PDF',
result: '×80 быстрее создание КП, −95% ошибок, −3 дня к циклу продаж',
metrics: '90 сек vs 2 часа; ошибки 15% → 0.7%'
},
back: {
challenge: '10 коммерческих предложений в день перегружали менеджеров',
tech: ['GPT‑4 для генерации текстов', 'Python для расчетов', 'jsPDF для создания PDF', 'SMTP для отправки', 'Google Sheets API для прайсов'],
rollout: ['День 1: оцифровка прайсов и услуг', 'Дни 2–3: создание бота для сбора ТЗ', 'Дни 4–5: разработка расчетной логики', 'Дни 6–7: генерация PDF и тестирование'],
roi: ['Экономия времени: 1 083 000 руб/мес', 'Рост конверсии: +20% (+400 тыс руб)', 'Стоимость внедрения: 200 тыс руб', 'Окупаемость: 4 дня'],
}
}
];

const BackList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="case-back-list">
    <h5>{title}</h5>
    <ul>{items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
  </div>
);

return (
  <div className="section-wrapper" id="cases">
    <div className="case-cards__header">
        <h2 className="section-title" style={{ textAlign: 'left' }}>Реализованные проекты</h2>
    </div>
    <div className="case-cards__grid">
        {cases.slice(0, 3).map((c) => (
          <Link key={c.slug} href={`/cases/${c.slug}`} className="case-card-link">
            <div className="case-card-image">
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="case-card-text-wrapper">
                <h3>{c.title}</h3>
                <p>{c.front.result}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  </div>
);
};
