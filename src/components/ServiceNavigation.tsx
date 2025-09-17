'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Home, Grid3X3 } from 'lucide-react';

interface ServiceNavigationProps {
  currentService: string;
}

export const ServiceNavigation = ({ currentService }: ServiceNavigationProps) => {
  const services = [
    { id: 'ai-assistant', name: 'AI-ассистенты', href: '/services/ai-assistant' },
    { id: 'automation', name: 'Автоматизация', href: '/services/automation' },
    { id: 'content-generation', name: 'Медиа-контент', href: '/services/content-generation' },
    { id: 'data-analytics', name: 'Анализ данных', href: '/services/data-analytics' },
    { id: 'business-processes', name: 'Бизнес-процессы', href: '/services/business-processes' },
    { id: 'recruitment', name: 'HR-автоматизация', href: '/services/recruitment' },
    { id: 'sales-materials', name: 'Продажи', href: '/services/sales-materials' },
    { id: 'analytics', name: 'Аналитика', href: '/services/analytics' },
  ];

  const currentIndex = services.findIndex(service => service.id === currentService);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <div className="service-navigation">
      <div className="service-navigation__container">
        <div className="service-navigation__main">
          <Link href="/" className="service-navigation__link service-navigation__link--home">
            <Home size={16} />
            Главная
          </Link>
          
          <Link href="/services" className="service-navigation__link service-navigation__link--services">
            <Grid3X3 size={16} />
            Все услуги
          </Link>
        </div>
        
        <div className="service-navigation__pagination">
          {prevService && (
            <Link href={prevService.href} className="service-navigation__link service-navigation__link--prev">
              <ArrowLeft size={16} />
              {prevService.name}
            </Link>
          )}
          
          {nextService && (
            <Link href={nextService.href} className="service-navigation__link service-navigation__link--next">
              {nextService.name}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};


