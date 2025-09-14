'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { newsData } from '@/lib/news-data';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { SEOHead, StructuredData } from '@/components/seo';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const allCategories = newsData.map(article => article.category);
    return ['Все', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredNews = useMemo(() => {
    const sorted = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    let filtered = sorted;

    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(lowercasedQuery) ||
        article.excerpt.toLowerCase().includes(lowercasedQuery)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredArticle = filteredNews[0];
  const otherArticles = filteredNews.slice(1);

  return (
    <>
      <SEOHead
        title="Новости и инсайты AI - ROC Digital"
        description="Аналитика, обзоры технологий и кейсы из мира AI от экспертов ROC Digital. Актуальные новости искусственного интеллекта, автоматизации и внедрения AI-решений."
        keywords="новости AI, искусственный интеллект новости, AI аналитика, автоматизация бизнеса, внедрение AI, кейсы AI, ROC Digital новости"
        url="/news"
        type="website"
      />
      <StructuredData
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Главная', url: 'https://roc-digital.ru' },
            { name: 'Новости', url: 'https://roc-digital.ru/news' }
          ]
        }}
      />
      <div className="news-list-page">
        <header className="news-list-header">
          <div className="section-wrapper">
            <Link href="/" className="news-list-back-link">
              <ArrowLeft size={18} />
              <span>На главную</span>
          </Link>
            <h1 className="news-list-title">Новости и инсайты</h1>
            <p className="news-list-subtitle">
              Аналитика, обзоры технологий и кейсы из мира AI от экспертов ROC Digital.
              </p>
            </div>
        </header>

      <div className="section-wrapper">
        <div className="news-filters">
          <div className="news-filters__search">
            <Search size={20} className="news-filters__search-icon" />
                <input
                  type="text"
                  placeholder="Поиск по новостям..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              className="news-filters__search-input"
                />
              </div>
          <div className="news-filters__categories">
            <Filter size={16} className="news-filters__categories-icon" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                className={`news-filters__category-btn ${selectedCategory === category ? 'active' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
      </div>

      <main className="section-wrapper news-list-main">
        {filteredNews.length > 0 ? (
          <>
            {featuredArticle && (
              <Link href={`/news/${featuredArticle.id}`} className="news-featured-card">
                <div className="news-featured-card__image-container">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="news-featured-card__content">
                  <span className="news-card-simplified__category">{featuredArticle.category}</span>
                  <h2 className="news-featured-card__title">{featuredArticle.title}</h2>
                  <p className="news-featured-card__excerpt">{featuredArticle.excerpt}</p>
                  <div className="news-featured-card__meta">
                    <span>{new Date(featuredArticle.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</span>
                    <span>·</span>
                    <span>{featuredArticle.readTime} на чтение</span>
                  </div>
                </div>
              </Link>
            )}
            
            {otherArticles.length > 0 && (
              <div className="news-grid-simplified">
                {otherArticles.map((article) => (
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
            )}
          </>
        ) : (
          <div className="news-list-empty">
            <h3>Новости не найдены</h3>
            <p>Попробуйте изменить поисковый запрос или сбросить фильтры.</p>
          </div>
        )}
      </main>
      </div>
    </>
  );
}