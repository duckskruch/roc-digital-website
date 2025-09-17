import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GPT-5 от OpenAI: "единую систему" запустили 7 августа - ROC Digital',
  description: 'OpenAI представила GPT-5 с встроенным "мышлением", роутером задач и заметным ростом качества на кодинге, математике, мультимодальности.',
  keywords: 'GPT-5, OpenAI, искусственный интеллект, автоматизация, бизнес',
  openGraph: {
    title: 'GPT-5 от OpenAI: "единую систему" запустили 7 августа',
    description: 'OpenAI представила GPT-5 с встроенным "мышлением", роутером задач и заметным ростом качества.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPT-5 от OpenAI: "единую систему" запустили 7 августа',
    description: 'OpenAI представила GPT-5 с встроенным "мышлением", роутером задач и заметным ростом качества.',
  },
};

export default function GPT5LaunchPage() {
  return (
    <>
      <PageHeader />
      <div className="page-background">
        <div className="section-wrapper">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/news" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
              <ArrowLeft size={16} />
              Назад к новостям
            </Link>
            
            <article className="news-article">
              <header className="news-article__header">
                <div className="news-article__meta">
                  <span className="news-article__category">Технологии</span>
                  <div className="news-article__details">
                    <span><Calendar size={16} /> 7 августа 2025</span>
                    <span><Clock size={16} /> 7 мин чтения</span>
                    <span><User size={16} /> ROC Digital</span>
                  </div>
                </div>
                
                <h1 className="news-article__title">
                  GPT-5 от OpenAI: "единую систему" запустили 7 августа
                </h1>
                
                <p className="news-article__excerpt">
                  OpenAI представила GPT-5 с встроенным "мышлением", роутером задач и заметным ростом качества на кодинге, математике, мультимодальности и "экономически важных задачах".
                </p>
              </header>
              
              <div className="news-article__content">
                <h2>Что нового в GPT-5</h2>
                
                <p>
                  OpenAI представила GPT-5 с встроенным "мышлением", роутером задач и заметным ростом качества на кодинге, математике, мультимодальности и "экономически важных задачах". Доступ ширится от Free/Plus до Enterprise.
                </p>
                
                <h3>Ключевые улучшения</h3>
                <ul>
                  <li><strong>Встроенное "мышление"</strong> — модель теперь может "думать" перед ответом, что снижает галлюцинации</li>
                  <li><strong>Роутер задач</strong> — автоматическое распределение сложных задач между специализированными модулями</li>
                  <li><strong>Улучшенное кодирование</strong> — SOTA результаты на SWE-bench и других бенчмарках</li>
                  <li><strong>Математические способности</strong> — значительный прогресс в решении сложных задач</li>
                  <li><strong>Мультимодальность</strong> — лучшая обработка текста, изображений и аудио</li>
                </ul>
                
                <h3>Бизнес-влияние</h3>
                <p>
                  Ниже галлюцинации, лучше следование инструкциям и более честные ответы — критично для автоматизации продаж, финансов и сервисных процессов.
                </p>
                
                <div className="news-highlight">
                  <h4>Что сделать ROC Digital:</h4>
                  <p>Обновить "Sales Copilot" и ассистентов поддержки до GPT-5 для повышения точности, ускорения time-to-value и снижения риска ошибок в ценообразовании и ответах.</p>
                </div>
                
                <h3>Бенчмарки и честность</h3>
                <p>
                  GPT-5 снижает галлюцинации и "угодливость", улучшает инструкции и показывает SOTA-результаты на AIME/SWE-bench/MMMU и экономически важных задачах.
                </p>
                
                <h3>Практические применения</h3>
                <ul>
                  <li><strong>Автоматизация продаж</strong> — более точные ответы клиентам и корректное ценообразование</li>
                  <li><strong>Финансовые процессы</strong> — снижение риска ошибок в расчетах и отчетности</li>
                  <li><strong>Сервисные процессы</strong> — улучшенное качество поддержки клиентов</li>
                  <li><strong>Разработка</strong> — более качественный код и меньше багов</li>
                </ul>
                
                <div className="news-cta">
                  <h3>Готовы обновить ваши AI-решения до GPT-5?</h3>
                  <p>Мы поможем интегрировать GPT-5 в ваши бизнес-процессы и получить максимальную выгоду от новых возможностей.</p>
                  <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Получить консультацию
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
        <PageContactForm />
      </div>
    </>
  );
}


