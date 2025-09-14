'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const CreativesRow = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.3; // еще больше замедлил

    const animate = () => {
      position += speed;
      track.style.transform = `translateX(-${position}px)`;
      
      // Сбрасываем позицию когда прошли весь первый набор элементов
      const singleSetWidth = track.scrollWidth / 2;
      if (position >= singleSetWidth) {
        position = 0;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Ждем загрузки изображений
    const startAnimation = () => {
      setTimeout(() => {
        animate();
      }, 100);
    };

    startAnimation();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

// Перемешанные креативы для лучшего визуального разнообразия
const creatives = [
{ id: 1, src: '/creatives/20250425_1537_Futuristic AI Implementation_simple_compose_01jspf6cjxe6vtfamym4s25nba.png', title: 'Futuristic AI Implementation', format: 'square' },
{ id: 15, src: '/creatives-3x2/health-wrist.png', title: 'Здоровье на запястье', format: 'wide', isPlaceholder: false },
{ id: 3, src: '/creatives/20250607_2138_Свобода От Долгов_simple_compose_01jx5ty6bdfy5ty7yx3j48bx9r.png', title: 'Свобода От Долгов', format: 'square' },
{ id: 5, src: '/creatives/20250607_2356_Идеи на Сверхскорости_simple_compose_01jx62thwcerka31cnwx14dvys.png', title: 'Идеи на Сверхскорости', format: 'square' },
{ id: 16, src: '/creatives-3x2/online-event-ai.png', title: 'Онлайн-ивент AI', format: 'wide', isPlaceholder: false },
{ id: 7, src: '/creatives/20250607_2359_Пятничный цветочный сюрприз_simple_compose_01jx62zgxfeggbgcmym7sz6ttj.png', title: 'Пятничный цветочный сюрприз', format: 'square' },
{ id: 2, src: '/creatives/20250605_0214_Глобус и Искусственный Интеллект_simple_compose_01jwykg90rekm9z88j6pqjj3hp.png', title: 'Глобус и Искусственный Интеллект', format: 'square' },
{ id: 9, src: '/creatives/20250608_0752_Детский мобильный банк_simple_compose_01jx6y3db5fz8bmyd5ejma9s8y.png', title: 'Детский мобильный банк', format: 'square' },
{ id: 4, src: '/creatives/20250607_2241_Ночной кэшбэк_simple_compose_01jx5yh1sbedf9shxvd4srky30.png', title: 'Ночной кэшбэк', format: 'square' },
{ id: 11, src: '/creatives/20250702_0238_Конструктор Прибыли_simple_compose_01jz45mjxmerpb02pd98tdg8mq.png', title: 'Конструктор Прибыли', format: 'square' },
{ id: 6, src: '/creatives/20250607_2356_Неуловимая скорость_simple_compose_01jx62tjwmenk8m56es1ztv12f.png', title: 'Неуловимая скорость', format: 'square' },
{ id: 8, src: '/creatives/20250607_2359_Интерактивный Учебный Инструмент_simple_compose_01jx62zqr1e1ptmvh5demtz1mh.png', title: 'Интерактивный Учебный Инструмент', format: 'square' },
{ id: 12, src: '/creatives/20250906_0014_Утренний Кофе со Скидкой_simple_compose_01k4dvn0kdfn3ty3q5aptbhkb5.png', title: 'Утренний Кофе со Скидкой', format: 'square' },
{ id: 10, src: '/creatives/20250608_0752_Запуск мечты_simple_compose_01jx6y3gjyen5b1nj4sjst1dtn.png', title: 'Запуск мечты', format: 'square' },
{ id: 13, src: '/creatives/20250906_0111_Складская Автоматизация_simple_compose_01k4dywtwgfzhvptwq3m2ec4bh.png', title: 'Складская Автоматизация', format: 'square' },
{ id: 14, src: '/creatives/20250906_1610_Онлайн-ивент AI_simple_compose_01k4fjabvyf019e0z3fph1xkdx.png', title: 'Онлайн-ивент AI', format: 'wide' },
];
return (
<div className="section-wrapper">
<div className="section-header-left">
        <h2 className="section-title">Креативы, сгенерированные AI в ROC</h2>
</div>
<section className="creatives-section">
<div className="creatives-row">
<div className="creatives-row__track" ref={trackRef}>
{[...creatives, ...creatives].map((c, idx) => (
<div key={idx} className={`creatives-row__item-wrapper ${c.format === 'wide' ? 'creatives-row__item-wrapper--wide' : ''}`}>
<div className={`creatives-row__item ${c.format === 'wide' ? 'creatives-row__item--wide' : ''} ${c.isPlaceholder ? 'creatives-row__item--placeholder' : ''}`}>
{c.isPlaceholder ? (
  <div className="creatives-row__placeholder">
    <span className="creatives-row__placeholder-text">{c.title}</span>
  </div>
) : (
  <Image 
    src={c.src} 
    alt={c.title || `Креатив ${c.id}`} 
    width={c.format === 'wide' ? 450 : 300}
    height={c.format === 'wide' ? 300 : 300}
    loading="lazy"
    className="creatives-row__image"
  />
)}
<div className="creatives-row__overlay">
<span className="creatives-row__caption">Сгенерировано AI в ROC</span>
</div>
</div>
</div>
))}
</div>
</div>
</section>
</div>
);
};
