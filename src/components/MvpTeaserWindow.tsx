'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lightbulb } from 'lucide-react';

export const MvpTeaserWindow = () => {
const [visible, setVisible] = useState(false);

useEffect(() => {
const t = setTimeout(() => setVisible(true), 4500);
return () => clearTimeout(t);
}, []);

// Handle keyboard navigation
useEffect(() => {
const handleKeyDown = (event: KeyboardEvent) => {
if (event.key === 'Escape' && visible) {
setVisible(false);
}
};

if (visible) {
document.addEventListener('keydown', handleKeyDown);
return () => document.removeEventListener('keydown', handleKeyDown);
}
}, [visible]);
return (
<AnimatePresence>
{visible && (
<motion.div
className="mvp-teaser-window"
initial={{ opacity: 0, y: 50, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: 50, scale: 0.95 }}
transition={{ type: 'spring', stiffness: 220, damping: 22 }}
>
<button 
  onClick={() => setVisible(false)} 
  className="mvp-teaser-window__dismiss"
  aria-label="Закрыть окно"
>
  <X size={16} />
</button>
<div className="mvp-teaser-window__content">
  <div className="mvp-teaser-window__icon"><Lightbulb size={20} /></div>
  <div className="mvp-teaser-window__text">
    <h4>MVP за 7 дней бесплатно — если идея зайдёт</h4>
    <p>Опишите бизнес-проблему в 3 предложениях. Соберём прототип и покажем эффект на видео. Понравится — доработаем; не зайдёт — дадим инсайты.</p>
    <small>3 слота в месяц - Результат через 5–7 дней - Коммерческое использование после оплаты</small>
  </div>
</div>
<a href="#consultation-form" className="mvp-teaser-window__button" onClick={() => setVisible(false)}>
  Предложить идею
</a>
</motion.div>
)}
</AnimatePresence>
);
};
