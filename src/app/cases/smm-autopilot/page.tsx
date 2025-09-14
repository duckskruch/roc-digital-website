import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';
import { ArrowLeft, ArrowUpRight, Clock, TrendingUp, Users, Zap, CheckCircle, BarChart3, MessageSquare, Bot, Star, Award, Target, Rocket } from 'lucide-react';

export const metadata = {
  title: 'SMM-автопилот для интернет-магазина | ROC Digital - AI автоматизация контента',
  description: 'Автоматизация SMM для интернет-магазина электроники. AI генерирует посты, создает изображения и публикует контент 24/7. Результат: -80% времени, +40% engagement, +15% трафик.',
  keywords: 'SMM автоматизация, AI контент, интернет-магазин, социальные сети, маркетинг, ROC Digital',
  openGraph: {
    title: 'SMM-автопилот для интернет-магазина | ROC Digital',
    description: 'Автоматизация SMM для интернет-магазина электроники. AI генерирует посты, создает изображения и публикует контент 24/7.',
    images: ['/cases/smm-autopilot.png'],
  },
};

export default function SMMAutopilotCase() {
  return (
    <>
      <PageHeader />
      <div className="page-background">
        {/* Hero Section */}
        <div className="case-hero">
          <div className="case-hero__background">
            <div className="case-hero__gradient"></div>
          </div>
          <div className="case-hero__container">
            <Link href="/cases" className="case-hero__back">
              <ArrowLeft size={20} />
              <span>Все кейсы</span>
            </Link>
            
            <div className="case-hero__content">
              <div className="case-hero__badge">
                <Award size={16} />
                <span>Кейс успеха</span>
              </div>
              
              <h1 className="case-hero__title">
                SMM-автопилот для интернет-магазина
              </h1>
              
              <p className="case-hero__subtitle">
                Полная автоматизация контент-маркетинга для интернет-магазина электроники. 
                AI-система генерирует посты, создает изображения и публикует контент в социальных сетях 24/7.
              </p>
              
              <div className="case-hero__stats">
                <div className="case-hero__stat">
                  <div className="case-hero__stat-icon">
                    <Clock size={24} />
                  </div>
                  <div className="case-hero__stat-content">
                    <div className="case-hero__stat-value">6ч → 1.2ч</div>
                    <div className="case-hero__stat-label">время в день</div>
                  </div>
                </div>
                <div className="case-hero__stat">
                  <div className="case-hero__stat-icon">
                    <TrendingUp size={24} />
                  </div>
                  <div className="case-hero__stat-content">
                    <div className="case-hero__stat-value">2.3% → 3.8%</div>
                    <div className="case-hero__stat-label">engagement rate</div>
                  </div>
                </div>
                <div className="case-hero__stat">
                  <div className="case-hero__stat-icon">
                    <Rocket size={24} />
                  </div>
                  <div className="case-hero__stat-content">
                    <div className="case-hero__stat-value">+15%</div>
                    <div className="case-hero__stat-label">органический трафик</div>
                  </div>
                </div>
              </div>
              
              <div className="case-hero__cta">
                <Link href="/#consultation-form" className="case-hero__button">
                  <span>Заказать похожий проект</span>
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
            
            <div className="case-hero__image">
              <div className="case-hero__image-wrapper">
                <Image
                  src="/cases/smm-autopilot.png"
                  alt="SMM-автопилот для интернет-магазина - автоматизация контента с AI"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="case-hero__image-overlay">
                  <div className="case-hero__image-badge">
                    <Star size={16} />
                    <span>Результат проекта</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Remainder of the page content */}
        <div className="section-wrapper">
          {/* Problem & Solution Section */}
          <div className="case-problem-solution">
            <div className="case-problem-solution__container">
              <div className="case-problem-solution__grid">
                <div className="case-problem-solution__card case-problem-solution__card--problem">
                  <div className="case-problem-solution__card-header">
                    <div className="case-problem-solution__card-icon">
                      <Target size={24} />
                    </div>
                    <h2 className="case-problem-solution__card-title">Проблема клиента</h2>
                  </div>
                  <div className="case-problem-solution__card-content">
                    <ul className="case-problem-solution__list">
                      <li className="case-problem-solution__list-item">
                        <div className="case-problem-solution__list-icon">
                          <div className="case-problem-solution__list-dot"></div>
                        </div>
                        <span>6 часов ежедневно на создание контента для 3 соцсетей</span>
                      </li>
                      <li className="case-problem-solution__list-item">
                        <div className="case-problem-solution__list-icon">
                          <div className="case-problem-solution__list-dot"></div>
                        </div>
                        <span>Engagement rate всего 2.3% из-за некачественного контента</span>
                      </li>
                      <li className="case-problem-solution__list-item">
                        <div className="case-problem-solution__list-icon">
                          <div className="case-problem-solution__list-dot"></div>
                        </div>
                        <span>15-20 постов в неделю создавались вручную</span>
                      </li>
                      <li className="case-problem-solution__list-item">
                        <div className="case-problem-solution__list-icon">
                          <div className="case-problem-solution__list-dot"></div>
                        </div>
                        <span>Высокие затраты на дизайнера и копирайтера</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="case-problem-solution__card case-problem-solution__card--solution">
                  <div className="case-problem-solution__card-header">
                    <div className="case-problem-solution__card-icon">
                      <Zap size={24} />
                    </div>
                    <h2 className="case-problem-solution__card-title">Наше решение</h2>
                  </div>
                  <div className="case-problem-solution__card-content">
                    <ul className="case-problem-solution__list">
                      <li className="case-problem-solution__list-item">
                        <div className="case-problem-solution__list-icon">
                          <CheckCircle size={16} />
                        </div>
                        <span>AI-генерация текстов на основе каталога товаров</span>
                      </li>
                      <li className="case-problem-solution__list-item">
                        <div className="case-problem-solution__list-icon">
                          <CheckCircle size={16} />
                        </div>
                        <span>Автоматическое создание изображений с товарами</span>
                      </li>
                      <li className="case-problem-solution__list-item">
                        <div className="case-problem-solution__list-icon">
                          <CheckCircle size={16} />
                        </div>
                        <span>Автопостинг в Instagram, VK и Telegram</span>
                      </li>
                      <li className="case-problem-solution__list-item">
                        <div className="case-problem-solution__list-icon">
                          <CheckCircle size={16} />
                        </div>
                        <span>Аналитика эффективности и A/B тестирование</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-wrapper">
          {/* Results Section */}
          <div className="case-results">
            <div className="case-results__container">
              <div className="case-results__header">
                <h2 className="section-title">Результаты внедрения</h2>
                <p className="section-subtitle">
                  Измеримые улучшения показателей через 3 месяца после запуска
                </p>
              </div>
              
              <div className="case-results__grid">
                <div className="case-results__card">
                  <div className="case-results__card-icon">
                    <Clock size={32} />
                  </div>
                  <div className="case-results__card-content">
                    <div className="case-results__card-value">-80%</div>
                    <div className="case-results__card-label">время на контент</div>
                    <div className="case-results__card-detail">6ч → 1.2ч в день</div>
                  </div>
                </div>
                
                <div className="case-results__card">
                  <div className="case-results__card-icon">
                    <TrendingUp size={32} />
                  </div>
                  <div className="case-results__card-content">
                    <div className="case-results__card-value">+40%</div>
                    <div className="case-results__card-label">engagement rate</div>
                    <div className="case-results__card-detail">2.3% → 3.8%</div>
                  </div>
                </div>
                
                <div className="case-results__card">
                  <div className="case-results__card-icon">
                    <Rocket size={32} />
                  </div>
                  <div className="case-results__card-content">
                    <div className="case-results__card-value">+15%</div>
                    <div className="case-results__card-label">органический трафик</div>
                    <div className="case-results__card-detail">рост без рекламы</div>
                  </div>
                </div>
                
                <div className="case-results__card">
                  <div className="case-results__card-icon">
                    <Award size={32} />
                  </div>
                  <div className="case-results__card-content">
                    <div className="case-results__card-value">0.5</div>
                    <div className="case-results__card-label">месяца окупаемость</div>
                    <div className="case-results__card-detail">ROI 400%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-wrapper">
          {/* Technology Stack Section */}
          <div className="case-tech">
            <div className="case-tech__container">
              <div className="case-tech__header">
                <h2 className="section-title">Технологический стек</h2>
                <p className="section-subtitle">
                  Современные AI-технологии для максимальной эффективности
                </p>
              </div>
              
              <div className="case-tech__grid">
                <div className="case-tech__card">
                  <div className="case-tech__card-icon">
                    <Bot size={32} />
                  </div>
                  <h3 className="case-tech__card-title">AI-генерация</h3>
                  <ul className="case-tech__card-list">
                    <li>GPT-4 для генерации текстов</li>
                    <li>DALL‑E 3 + LoRA для изображений</li>
                    <li>Дообучение на 200+ постах</li>
                  </ul>
                </div>
                
                <div className="case-tech__card">
                  <div className="case-tech__card-icon">
                    <MessageSquare size={32} />
                  </div>
                  <h3 className="case-tech__card-title">Автопостинг</h3>
                  <ul className="case-tech__card-list">
                    <li>Telegram Bot для управления</li>
                    <li>Instagram API интеграция</li>
                    <li>VK API для ВКонтакте</li>
                    <li>Telegram канал автопостинг</li>
                  </ul>
                </div>
                
                <div className="case-tech__card">
                  <div className="case-tech__card-icon">
                    <BarChart3 size={32} />
                  </div>
                  <h3 className="case-tech__card-title">Аналитика</h3>
                  <ul className="case-tech__card-list">
                    <li>Google Analytics 4</li>
                    <li>Метрики социальных сетей</li>
                    <li>Автоматические отчеты</li>
                    <li>A/B тестирование контента</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-wrapper">
          {/* Implementation Timeline */}
          <div className="case-timeline">
            <div className="case-timeline__container">
              <div className="case-timeline__header">
                <h2 className="section-title">Этапы внедрения</h2>
                <p className="section-subtitle">
                  Пошаговый план реализации проекта за 7 дней
                </p>
              </div>
              
              <div className="case-timeline__steps">
                <div className="case-timeline__step">
                  <div className="case-timeline__step-number">1</div>
                  <div className="case-timeline__step-content">
                    <h3 className="case-timeline__step-title">Дни 1–2</h3>
                    <p className="case-timeline__step-description">Дообучение модели на 200+ постах</p>
                  </div>
                </div>
                
                <div className="case-timeline__step">
                  <div className="case-timeline__step-number">2</div>
                  <div className="case-timeline__step-content">
                    <h3 className="case-timeline__step-title">Дни 3–4</h3>
                    <p className="case-timeline__step-description">Настройка бота и интеграций</p>
                  </div>
                </div>
                
                <div className="case-timeline__step">
                  <div className="case-timeline__step-number">3</div>
                  <div className="case-timeline__step-content">
                    <h3 className="case-timeline__step-title">Дни 5–7</h3>
                    <p className="case-timeline__step-description">Тестирование и настройка голоса</p>
                  </div>
                </div>
                
                <div className="case-timeline__step">
                  <div className="case-timeline__step-number">4</div>
                  <div className="case-timeline__step-content">
                    <h3 className="case-timeline__step-title">Запуск</h3>
                    <p className="case-timeline__step-description">5 команд в боте для управления</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-wrapper">
          {/* ROI Section */}
          <div className="case-roi">
            <div className="case-roi__container">
              <div className="case-roi__header">
                <h2 className="section-title">Расчет окупаемости</h2>
                <p className="section-subtitle">
                  Детальный анализ экономической эффективности проекта
                </p>
              </div>
              
              <div className="case-roi__grid">
                <div className="case-roi__card">
                  <div className="case-roi__card-value">330 тыс руб/мес</div>
                  <div className="case-roi__card-label">Экономия времени</div>
                </div>
                <div className="case-roi__card">
                  <div className="case-roi__card-value">+180 тыс руб/мес</div>
                  <div className="case-roi__card-label">Рост продаж</div>
                </div>
                <div className="case-roi__card">
                  <div className="case-roi__card-value">250 тыс руб</div>
                  <div className="case-roi__card-label">Стоимость внедрения</div>
                </div>
                <div className="case-roi__card">
                  <div className="case-roi__card-value">0.5 месяца</div>
                  <div className="case-roi__card-label">Окупаемость</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="case-cta">
          <div className="case-cta__container">
            <div className="case-cta__content">
              <h2 className="case-cta__title">Хотите такой же результат?</h2>
              <p className="case-cta__subtitle">
                Автоматизируем ваш контент-маркетинг за 7 дней
              </p>
              <Link href="/#consultation-form" className="case-cta__button">
                <span>Обсудить проект</span>
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        <PageContactForm />
      </div>
    </>
  );
}