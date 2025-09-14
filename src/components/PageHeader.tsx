'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const PageHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="header-island"
      animate={isScrolled ? 'scrolled' : 'top'}
      variants={{ top: { height: '72px' }, scrolled: { height: '60px' } }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
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
        <div className="site-badge-ai">
          <span>Сайт сгенерирован ИИ</span>
        </div>
      </div>
      <nav className="header-island__nav">
        <Link href="/presentation.pdf" download className="header-island__button">
          <Download size={16} />
          <span>AI Презентация</span>
        </Link>
        <button onClick={() => document.getElementById('assistant')?.scrollIntoView({ behavior: 'smooth' })} className="header-island__button">
          <Send size={16} />
          <span>AI Ассистент</span>
        </button>
      </nav>
    </motion.header>
  );
};
