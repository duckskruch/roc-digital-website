'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyUs = () => {
const title = 'Не ставим ботов — решаем бизнес-задачи';
const subtitle = 'Глубокая интеграция с вашими процессами даёт 100% эффективности, когда шаблоны теряют до 70%';
const points = [
{
h: 'Глубокая интеграция',
p: 'Не «бот ради бота», а связка с CRM, календарями, базами и логикой. Решение работает как часть команды',
vs: 'Шаблоны: поверхностная настройка без интеграций'
},
{
h: 'Работа в вашем контуре',
p: 'Self-hosted модели, приватные данные, NDA. Ваша информация остаётся у вас',
vs: 'Облако: данные уходят к провайдерам'
},
{
h: 'Промпт-инжиниринг под задачу',
p: 'Точная настройка моделей под ваш контекст. Качество 95%+ vs 60% у общих решений',
vs: 'Готовые боты: универсальные ответы'
},
{
h: 'SLA поддержка и развитие',
p: 'Мониторинг 24/7, обновления моделей, масштабирование. Аптайм 99.7%',
vs: 'Купили и забыли: нет развития'
},
];
return (
<div className="section-wrapper">
<section className="why-us-section">
<h2 className="section-title" style={{ textAlign: 'left' }}>{title}</h2>
<p className="section-subtitle">{subtitle}</p>
<div className="why-us__list">
{points.map((pt, idx) => (
<div key={idx} className="why-us__item">
<CheckCircle2 size={20} />
<div>
<h4>{pt.h}</h4>
<p>{pt.p}</p>
<small className="why-us-vs">vs: {pt.vs}</small>
</div>
</div>
))}
</div>
<p className="why-us-proof">Интеграция даёт ×3–5 больше эффекта, чем изолированные решения</p>
</section>
</div>
);
};
