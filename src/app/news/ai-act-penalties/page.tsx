import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, AlertTriangle } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ЕС: с 2 августа вступили в силу штрафы и требования для GPAI - ROC Digital',
  description: 'С 2 августа 2025 действует следующий блок положений AI Act — штрафы, требования к GPAI и запуск органов управления.',
  keywords: 'AI Act, ЕС, регулирование, GPAI, штрафы, соответствие',
  openGraph: {
    title: 'ЕС: с 2 августа вступили в силу штрафы и требования для GPAI',
    description: 'С 2 августа 2025 действует следующий блок положений AI Act — штрафы, требования к GPAI и запуск органов управления.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ЕС: с 2 августа вступили в силу штрафы и требования для GPAI',
    description: 'С 2 августа 2025 действует следующий блок положений AI Act — штрафы, требования к GPAI и запуск органов управления.',
  },
};

export default function AIActPenaltiesPage() {
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
                  <span className="news-article__category">Регулирование</span>
                  <div className="news-article__details">
                    <span><Calendar size={16} /> 2 августа 2025</span>
                    <span><Clock size={16} /> 8 мин чтения</span>
                    <span><User size={16} /> ROC Digital</span>
                  </div>
                </div>
                
                <h1 className="news-article__title">
                  ЕС: с 2 августа вступили в силу штрафы и требования для GPAI
                </h1>
                
                <p className="news-article__excerpt">
                  С 2 августа 2025 действует следующий блок положений AI Act — штрафы, требования к GPAI и запуск органов управления (AI Office/AI Board).
                </p>
              </header>
              
              <div className="news-article__content">
                <div className="news-warning">
                  <AlertTriangle size={24} />
                  <h3>Важно для бизнеса</h3>
                  <p>Риск штрафов до 35 млн евро или 7% оборота за запрещённые практики и несоблюдение требований.</p>
                </div>
                
                <h2>Что изменилось с 2 августа</h2>
                
                <p>
                  С 2 августа 2025 действует следующий блок положений AI Act — штрафы, требования к GPAI и запуск органов управления (AI Office/AI Board).
                </p>
                
                <h3>Новые требования к GPAI</h3>
                <ul>
                  <li><strong>Обязательная оценка рисков</strong> — для всех систем общего назначения</li>
                  <li><strong>Документирование процессов</strong> — детальная отчетность о разработке и тестировании</li>
                  <li><strong>Соблюдение гардрейлов</strong> — защита от генерации вредоносного контента</li>
                  <li><strong>Прозрачность данных</strong> — отчетность об источниках обучающих данных</li>
                </ul>
                
                <h3>Штрафы и санкции</h3>
                <div className="penalty-grid">
                  <div className="penalty-item">
                    <h4>Запрещенные практики</h4>
                    <p><strong>До 35 млн евро</strong> или <strong>7% оборота</strong></p>
                  </div>
                  <div className="penalty-item">
                    <h4>Нарушение требований GPAI</h4>
                    <p><strong>До 15 млн евро</strong> или <strong>3% оборота</strong></p>
                  </div>
                  <div className="penalty-item">
                    <h4>Предоставление ложной информации</h4>
                    <p><strong>До 7.5 млн евро</strong> или <strong>1% оборота</strong></p>
                  </div>
                </div>
                
                <h3>Кто попадает под действие</h3>
                <ul>
                  <li><strong>Поставщики AI-систем</strong> — компании, разрабатывающие и продающие AI-решения</li>
                  <li><strong>Пользователи AI-систем</strong> — организации, использующие AI в высокорисковых сферах</li>
                  <li><strong>Импортеры и дистрибьюторы</strong> — компании, ввозящие AI-системы в ЕС</li>
                </ul>
                
                <h3>Бизнес-влияние</h3>
                <p>
                  Риск штрафов до 35 млн евро или 7% оборота за запрещённые практики и несоблюдение требований; важно для экспорта в ЕС и работы с европейскими клиентами.
                </p>
                
                <div className="news-highlight">
                  <h4>Что сделать ROC Digital:</h4>
                  <p>Ввести "AI Compliance Fast‑Track" — аудит ассистентов и генеративных пайплайнов на соответствие GPAI/гардрейлам, с отчётами и политиками использования.</p>
                </div>
                
                <h3>Чек-лист соответствия</h3>
                <div className="compliance-checklist">
                  <h4>Для существующих AI-систем:</h4>
                  <ul>
                    <li>✅ Провести аудит на соответствие требованиям GPAI</li>
                    <li>✅ Документировать процессы разработки и тестирования</li>
                    <li>✅ Внедрить гардрейлы против вредоносного контента</li>
                    <li>✅ Создать политики использования AI</li>
                    <li>✅ Подготовить отчетность для регуляторов</li>
                  </ul>
                </div>
                
                <h3>Новые органы управления</h3>
                <ul>
                  <li><strong>AI Office</strong> — центральный орган по надзору за соблюдением AI Act</li>
                  <li><strong>AI Board</strong> — консультативный орган с представителями всех стран ЕС</li>
                  <li><strong>Национальные органы</strong> — в каждой стране ЕС создаются местные органы надзора</li>
                </ul>
                
                <div className="news-cta">
                  <h3>Нужна помощь с соответствием AI Act?</h3>
                  <p>Мы проведем аудит ваших AI-систем и поможем привести их в соответствие с требованиями ЕС.</p>
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


