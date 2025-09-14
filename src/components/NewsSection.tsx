'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const NewsSection = () => {
  const news = [
    {
      id: 'gpt-5-and-new-automation-economy',
      title: 'GPT‑5 и новая экономика автоматизации: что меняется для бизнеса',
      category: 'Технологии',
      image: '/images/news/gpt-5-economy.jpg',
    },
    {
      id: 'gemini-2-5-and-veo-3-visual-generation',
      title: 'Gemini 2.5 и Veo 3: массовая генерация визуала и видео',
      category: 'Маркетинг',
      image: '/images/news/gemini-2-5-veo-3.jpg',
    },
    {
      id: 'ai-act-compliance-2025',
      title: 'AI Act в ЕС: что нужно сделать бизнесу до конца 2025 года',
      category: 'Законодательство',
      image: '/images/news/ai-act-compliance.jpg',
    },
    // Keep older articles available for routing but not shown on homepage
    {
      id: 'genai-industry-matures',
      title: 'GenAI-индустрия взрослеет: почему энтузиазм уступает место прагматике',
      category: 'Аналитика рынка',
      image: '/images/news/genai-slowdown-cover.jpg',
    },
    {
      id: 'openai-parental-controls',
      title: 'OpenAI добавит родитель­ский контроль в ChatGPT',
      category: 'Технологии',
      image: '/images/news/openai-parental-controls.jpg',
    },
    {
      id: 'apple-iphone-17-event',
      title: 'Все анонсы с презен­тации Apple: тонкий iPhone Air и экраны на 120 Гц',
      category: 'Техника',
      image: '/images/news/apple-iphone-17-event.jpg',
    },
    {
      id: 'claude-sonnet-4-1m-token-window',
      title: 'Claude Sonnet 4: анализ целых баз кода и договоров за один запрос',
      category: 'Разработка',
      image: '/images/news/claude-sonnet-4.jpg',
    },
    {
      id: 'nvidia-blackwell-tco-calculator',
      title: 'Калькулятор Blackwell: как NVIDIA меняет экономику ИИ-инфраструктуры',
      category: 'Инфраструктура',
      image: '/images/news/nvidia-blackwell.jpg',
    },
  ];

  return (
    <div className="section-wrapper">
      <section className="news-section">
        <div className="news-section__header">
          <h2 className="section-title" style={{ textAlign: 'left' }}>Последние новости</h2>
          <Link href="/news" className="news-section__view-all">
            Все новости <ArrowUpRight size={18} />
          </Link>
        </div>
        
        <div className="news-grid-simplified">
          {news.slice(0, 3).map((article) => (
            <Link key={article.id} href={`/news/${article.id}`} className="news-card-simplified">
              <div className="news-card-simplified__image-container">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="news-card-simplified__content">
                <span className="news-card-simplified__category">{article.category}</span>
                <h3 className="news-card-simplified__title">
                    {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
