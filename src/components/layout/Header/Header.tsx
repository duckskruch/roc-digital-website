'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Send } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
    // Хедер всегда виден
    setIsVisible(true);
  });

  return (
    <motion.header
      className="header-island header-island--wide"
      animate={{ 
        y: isVisible ? 0 : -100,
        height: isScrolled ? '60px' : '72px'
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="header-left">
        <Link href="/" className="site-logo" aria-label="ROC Digital — На главную">
          <Image
            src="/logo.svg"
            alt="ROC Digital"
            className="site-logo__img"
            width={160}
            height={32}
            priority
          />
        </Link>
        <div className="site-badge-ai" title="Да, сгенерирован нейросетью за 4 часа. Полное оформление и доработка сайта. Плюсы: любые правки, изменения, редактирование сайта можно делать за 5 минут, новые страницы и тд">
          <span>Сайт сгенерирован ИИ</span>
        </div>
      </div>
      <nav className="header-island__nav">
        <a href="/presentation.pdf" download className="header-island__button">
          <Download size={16} />
          <span>AI Презентация</span>
        </a>
        <button 
          onClick={() => document.getElementById('assistant')?.scrollIntoView({ behavior: 'smooth' })} 
          className="header-island__button"
        >
          <Send size={16} />
          <span>AI Ассистент</span>
        </button>
      </nav>
    </motion.header>
  );
};
