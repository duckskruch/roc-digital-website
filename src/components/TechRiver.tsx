'use client';

import React, { useState, useEffect } from 'react';

// Один компонент для технологии
const TechChip = ({ tech, onMouseEnter, onMouseMove, onMouseLeave }: { tech: { name: string; desc: string }, onMouseEnter: (e: React.MouseEvent<HTMLDivElement>, tech: { name: string; desc: string }) => void, onMouseMove: (e: React.MouseEvent<HTMLDivElement>, tech: { name: string; desc: string }) => void, onMouseLeave: () => void }) => (
  <div
    className="tech-river__chip-wrapper"
    onMouseEnter={(e) => onMouseEnter(e, tech)}
    onMouseMove={(e) => onMouseMove(e, tech)}
    onMouseLeave={onMouseLeave}
  >
    <div className="tech-river__chip">{tech.name}</div>
  </div>
);

// Компонент для одной строки
const TechRow = ({ technologies, reverse = false, onMouseEnter, onMouseMove, onMouseLeave }: { technologies: { name: string; desc: string }[]; reverse?: boolean; onMouseEnter: (e: React.MouseEvent<HTMLDivElement>, tech: { name: string; desc: string }) => void; onMouseMove: (e: React.MouseEvent<HTMLDivElement>, tech: { name: string; desc: string }) => void; onMouseLeave: () => void; }) => {
  const extendedTechnologies = [...technologies, ...technologies];

  return (
    <div className="tech-river__track-container">
      <div className={`tech-river__track ${reverse ? 'tech-river__track--reverse' : ''}`}>
        {extendedTechnologies.map((tech, i) => (
          <TechChip
            key={`${tech.name}-${i}`}
            tech={tech}
            onMouseEnter={onMouseEnter}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};


export const TechRiver = () => {
  const title = 'Стек технологий под задачу, а не наоборот';
  const subtitle = 'Выбираем из 40+ инструментов оптимальную связку для вашего контура и бюджета';
  const [activeTooltip, setActiveTooltip] = useState<{tech: { name: string; desc: string }, x: number, y: number, element: HTMLElement} | null>(null);

  const technologies = [
    // Оставляем 25 технологий, как вы просили
    { name: 'GPT-5 API', desc: 'Последняя версия OpenAI для максимального качества' },
    { name: 'Gemini 2.5 Pro', desc: 'Мощная модель Google для сложных задач' },
    { name: 'Claude 4 Sonnet', desc: 'Модель Anthropic для анализа и творчества' },
    { name: 'Qwen 2.5', desc: 'Китайская модель Alibaba для мультиязычности' },
    { name: 'DeepSeek-V3', desc: 'Модель для кодирования и анализа данных' },
    { name: 'Sora', desc: 'Генерация видео от OpenAI для создания контента' },
    { name: 'RAG', desc: 'Подключение к вашим данным, ответы по базе знаний' },
    { name: 'Vector DB', desc: 'Pinecone/Chroma для семантического поиска' },
    { name: 'OCR', desc: 'Распознавание документов и сканов' },
    { name: 'Computer Vision', desc: 'Анализ изображений и видео' },
    { name: 'TTS', desc: 'Синтез речи для голосовых ассистентов' },
    { name: 'STT', desc: 'Распознавание речи в текст' },
    { name: 'Runway Gen-4', desc: 'Генерация видео контента' },
    { name: 'Veo', desc: 'AI для создания видео от Google' },
    { name: 'SDXL+LoRA', desc: 'Генерация изображений с кастомными стилями' },
    { name: 'D-ID/HeyGen', desc: 'Создание говорящих аватаров' },
    { name: 'Telegram Bot API', desc: 'Интеграция с мессенджерами' },
    { name: 'Google Calendar API', desc: 'Работа с календарями' },
    { name: 'CRM интеграции', desc: 'Подключение к системам управления' },
    { name: 'ERP системы', desc: 'Интеграция с корпоративными системами' },
    { name: 'Док-генерация', desc: 'Автоматическое создание документов' },
    { name: 'Python', desc: 'Основной язык для AI-разработки' },
    { name: 'Node.js', desc: 'Серверная разработка и API' },
    { name: 'React', desc: 'Современные пользовательские интерфейсы' },
    { name: 'PostgreSQL', desc: 'Надежная база данных для AI-систем' },
  ];
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, tech: { name: string; desc: string }) => {
    if (e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      setActiveTooltip({
        tech,
        x: rect.left + rect.width / 2,
        y: rect.top,
        element: e.currentTarget,
      });
    }
  };

  const handleMouseMove = (_e: React.MouseEvent<HTMLDivElement>, _tech: { name: string; desc: string }) => {
    // Не нужно ничего делать в onMouseMove, позиция обновляется через requestAnimationFrame
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  // Отслеживаем позицию элемента в реальном времени
  useEffect(() => {
    if (!activeTooltip) return;

    let animationId: number;

    const updatePosition = () => {
      if (activeTooltip.element) {
        const rect = activeTooltip.element.getBoundingClientRect();
        setActiveTooltip(prev => prev ? {
          ...prev,
          x: rect.left + rect.width / 2,
          y: rect.top,
        } : null);
      }
      animationId = requestAnimationFrame(updatePosition);
    };

    // Запускаем анимацию обновления позиции
    animationId = requestAnimationFrame(updatePosition);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [activeTooltip]);

  return (
    <div className="section-wrapper tech-river-wrapper">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
      <TechRow
        technologies={technologies}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <TechRow
        technologies={technologies}
        reverse
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      
      {activeTooltip && (
        <div 
          className="tech-river__tooltip tech-river__tooltip--active"
          style={{
            position: 'fixed',
            left: activeTooltip.x,
            top: activeTooltip.y,
            transform: 'translateX(-50%) translateY(calc(-100% - 10px))',
          }}
        >
          <strong>{activeTooltip.tech.name}</strong>
          <p>{activeTooltip.tech.desc}</p>
        </div>
      )}
    </div>
  );
};