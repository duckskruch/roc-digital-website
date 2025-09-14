'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Import new components
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { SEOHead, StructuredData } from '@/components/seo';

// Lazy load heavy components with loading states
import { TechRiver } from '@/components/TechRiver';
import { ServicesBento } from '@/components/ServicesBento';
import { CaseFlipCards } from '@/components/CaseFlipCards';
import { WhyUs } from '@/components/WhyUs';
import { CreativesRow } from '@/components/CreativesRow';
import { FAQWithChat } from '@/components/FAQWithChat';
import { ConsultationFormSection } from '@/components/ConsultationFormSection';
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), { 
  ssr: false, 
  loading: () => <LoadingSpinner />
});
const MvpTeaserWindow = dynamic(() => import('@/components/MvpTeaserWindow').then(mod => ({ default: mod.MvpTeaserWindow })), { 
  ssr: false, 
  loading: () => <LoadingSpinner />
});
const CookieSmileBanner = dynamic(() => import('@/components/CookieSmileBanner').then(mod => ({ default: mod.CookieSmileBanner })), { 
  ssr: false, 
  loading: () => <LoadingSpinner />
});

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="ROC Digital - AI решения для бизнеса с гарантией окупаемости"
        description="Внедряем AI-решения в ваш бизнес с NDA и гарантией окупаемости. Используем 40+ технологий для глубокой интеграции с вашими процессами. ROI от 180% за 6 месяцев."
        keywords="AI, искусственный интеллект, автоматизация бизнеса, внедрение AI, ROI, окупаемость, NDA, интеграция, 40+ технологий"
        url="/"
        type="website"
      />
      <StructuredData
        type="Organization"
        data={{
          name: 'ROC Digital',
          description: 'Внедряем AI-решения в ваш бизнес с гарантией окупаемости',
          url: 'https://roc-digital.ru',
          logo: 'https://roc-digital.ru/logo.svg'
        }}
      />
      <div className="page-background">
        <Header />
        <main>
          <HeroSection />
          <TechRiver />
          <ServicesBento />
          <CaseFlipCards />
          <CreativesRow />
          <WhyUs />
          <FAQWithChat />
          <ConsultationFormSection />
          {/* <NewsSection /> */}
        </main>
        <Footer />
        <MvpTeaserWindow />
        <CookieSmileBanner />
      </div>
    </>
  );
}