import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { newsData } from '@/lib/news-data';
import { SEOHead, StructuredData } from '@/components/seo';

// This function can be uncommented if you need to generate metadata dynamically
/*
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = newsData.find(item => item.id.toString() === params.id);
  if (!article) {
    return {
      title: "Новость не найдена",
    }
  }
 
  return {
    title: `${article.title} | Новости ROC Digital`,
    description: article.excerpt,
  }
}
*/

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = newsData.find(item => item.id.toString() === id);
  
  if (!article) {
    notFound();
  }

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.excerpt}
        keywords={`${article.category}, AI, искусственный интеллект, ${article.title.toLowerCase()}`}
        image={article.image}
        url={`/news/${id}`}
        type="article"
        publishedTime={article.date}
        modifiedTime={article.date}
        author="ROC Digital"
        section={article.category}
        tags={[article.category, 'AI', 'искусственный интеллект']}
      />
      <StructuredData
        type="Article"
        data={{
          headline: article.title,
          description: article.excerpt,
          image: article.image,
          datePublished: article.date,
          dateModified: article.date
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Главная', url: 'https://roc-digital.ru' },
            { name: 'Новости', url: 'https://roc-digital.ru/news' },
            { name: article.title, url: `https://roc-digital.ru/news/${id}` }
          ]
        }}
      />
      <div className="article-page">
        <header className="article-hero" style={{backgroundImage: `url(${article.image})`}}>
          <div className="article-hero__overlay"></div>
          <div className="article-hero__content">
            <Link href="/news" className="article-hero__back-link">
              <ArrowLeft size={18} />
              <span>Все новости</span>
            </Link>
          <div className="article-hero__meta-top">
            <span className="article-hero__category">{article.category}</span>
              </div>
          <h1 className="article-hero__title">{article.title}</h1>
          <div className="article-hero__meta-bottom">
            <div className="article-hero__meta-item">
              <Calendar size={16} />
              <span>{new Date(article.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="article-hero__meta-item">
              <Clock size={16} />
              <span>{article.readTime} на чтение</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="article-main">
        <article 
          className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
      </main>
      </div>
    </>
  );
}
