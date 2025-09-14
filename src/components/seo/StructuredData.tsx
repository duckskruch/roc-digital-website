import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'Article' | 'Service' | 'BreadcrumbList';
  data: Record<string, unknown>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: 'ROC Digital',
          url: 'https://roc-digital.ru',
          logo: 'https://roc-digital.ru/logo.svg',
          description: 'Внедряем AI-решения в ваш бизнес с гарантией окупаемости. Глубокая интеграция с вашими процессами.',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'RU',
            addressLocality: 'Москва'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+7-XXX-XXX-XX-XX',
            contactType: 'customer service',
            availableLanguage: 'Russian'
          },
          sameAs: [
            'https://t.me/roc_digital',
            'https://vk.com/roc_digital'
          ]
        };

      case 'Article':
        return {
          ...baseData,
          '@type': 'Article',
          headline: data.headline,
          description: data.description,
          image: data.image,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          author: {
            '@type': 'Organization',
            name: 'ROC Digital'
          },
          publisher: {
            '@type': 'Organization',
            name: 'ROC Digital',
            logo: {
              '@type': 'ImageObject',
              url: 'https://roc-digital.ru/logo.svg'
            }
          }
        };

      case 'Service':
        return {
          ...baseData,
          '@type': 'Service',
          name: data.name,
          description: data.description,
          provider: {
            '@type': 'Organization',
            name: 'ROC Digital'
          },
          areaServed: 'RU',
          availableLanguage: 'Russian'
        };

      case 'BreadcrumbList':
        return {
          ...baseData,
          '@type': 'BreadcrumbList',
          itemListElement: (data.items as Array<{name: string, url: string}>).map((item, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
};
