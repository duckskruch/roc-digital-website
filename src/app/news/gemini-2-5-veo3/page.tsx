import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Gemini 2.5: GA релизы и Veo 3 для видео - ROC Digital',
  description: 'В июле–августе вышли стабильные Gemini 2.5 Pro/Flash/Flash‑Lite, батч‑режим, новый embeddings и новые возможности Veo 3.',
  keywords: 'Gemini 2.5, Veo 3, Google, AI, видео, генерация контента',
  openGraph: {
    title: 'Google Gemini 2.5: GA релизы и Veo 3 для видео',
    description: 'В июле–августе вышли стабильные Gemini 2.5 Pro/Flash/Flash‑Lite, батч‑режим, новый embeddings и новые возможности Veo 3.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Gemini 2.5: GA релизы и Veo 3 для видео',
    description: 'В июле–августе вышли стабильные Gemini 2.5 Pro/Flash/Flash‑Lite, батч‑режим, новый embeddings и новые возможности Veo 3.',
  },
};

export default function Gemini25Veo3Page() {
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
                    <span><Calendar size={16} /> 26 августа 2025</span>
                    <span><Clock size={16} /> 6 мин чтения</span>
                    <span><User size={16} /> ROC Digital</span>
                  </div>
                </div>
                
                <h1 className="news-article__title">
                  Google Gemini 2.5: GA релизы и Veo 3 для видео
                </h1>
                
                <p className="news-article__excerpt">
                  В июле–августе вышли стабильные Gemini 2.5 Pro/Flash/Flash‑Lite, батч‑режим, новый embeddings и новые возможности Veo 3 (видео с аудио, image‑to‑video).
                </p>
              </header>
              
              <div className="news-article__content">
                <h2>Что нового в Gemini 2.5</h2>
                
                <p>
                  В июле–августе вышли стабильные Gemini 2.5 Pro/Flash/Flash‑Lite, батч‑режим, новый embeddings и новые возможности Veo 3 (видео с аудио, image‑to‑video), а 26 августа — Gemini 2.5 Image Preview.
                </p>
                
                <h3>Новые модели Gemini 2.5</h3>
                <ul>
                  <li><strong>Gemini 2.5 Pro</strong> — флагманская модель для сложных задач</li>
                  <li><strong>Gemini 2.5 Flash</strong> — быстрая модель для повседневных задач</li>
                  <li><strong>Gemini 2.5 Flash-Lite</strong> — облегченная версия для массовых сценариев</li>
                  <li><strong>Gemini 2.5 Image Preview</strong> — специализированная модель для работы с изображениями</li>
                </ul>
                
                <h3>Veo 3: революция в генерации видео</h3>
                <p>
                  Veo 3 представляет новые возможности для создания видео-контента:
                </p>
                <ul>
                  <li><strong>Видео с аудио</strong> — генерация видео с синхронизированным звуком</li>
                  <li><strong>Image-to-video</strong> — создание видео из статичных изображений</li>
                  <li><strong>Быстрые превью-модели</strong> — ускоренная генерация для тестирования идей</li>
                </ul>
                
                <h3>Бизнес-влияние</h3>
                <p>
                  Снижаются задержки и стоимость для массовых сценариев (Flash/Flash‑Lite), а Veo 3 упрощает производство видео‑контента и рекламных креативов.
                </p>
                
                <div className="news-highlight">
                  <h4>Что сделать ROC Digital:</h4>
                  <p>Использовать Flash‑Lite для дешёвых high‑volume задач (классификация/суммаризация) и Veo 3 для "перформанс‑креатива" с авто‑версионированием и A/B‑тестированием.</p>
                </div>
                
                <h3>Imagen 4 и Gemini 2.5 Image Preview</h3>
                <p>
                  14 августа GA Imagen 4 (Ultra/Standard/Fast) и 26 августа — Gemini 2.5 Image Preview — свежие опции для генерации и редактирования визуалов.
                </p>
                
                <h3>Практические применения</h3>
                <ul>
                  <li><strong>SMM-автопилоты</strong> — автоматическая генерация видео-контента для социальных сетей</li>
                  <li><strong>Перформанс-реклама</strong> — создание персонализированных видео-офферов</li>
                  <li><strong>Массовая обработка</strong> — классификация и суммаризация больших объемов данных</li>
                  <li><strong>Бренд-визуал</strong> — автоматическая генерация контента в соответствии с гайдлайнами</li>
                </ul>
                
                <div className="news-cta">
                  <h3>Готовы использовать новые возможности Gemini 2.5 и Veo 3?</h3>
                  <p>Мы поможем интегрировать эти технологии в ваши бизнес-процессы и создать эффективные системы генерации контента.</p>
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


