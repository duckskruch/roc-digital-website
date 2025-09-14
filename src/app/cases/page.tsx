import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';

export default function CasesPage() {
  const cases = [
    {
      slug: 'smm-autopilot',
      title: 'SMM-автопилот для интернет-магазина',
      img: '/cases/smm-autopilot.png',
      front: {
        problem: '6 часов в день на контент, низкое вовлечение',
        solution: 'AI-генерация + автопостинг + аналитика',
        result: '−80% времени, +40% ER, +15% органика',
        metrics: '6ч → 1.2ч; ER 2.3% → 3.8%'
      },
      back: {
        challenge: 'Ручное создание 15–20 постов/неделю тормозило маркетинг',
        tech: ['GPT-4', 'DALL‑E 3 + LoRA', 'Telegram Bot', 'Автопостинг IG/VK/TG', 'GA4 аналитика'],
        rollout: ['Д1–2: дообучение на 200+ постах', 'Д3–4: бот и интеграции', 'Д5–7: тест и голос', 'Запуск: 5 команд в боте'],
        roi: ['Экономия: 330 тыс/мес', 'Рост продаж: +180 тыс/мес', 'Цена: 250 тыс', 'Окупаемость: 0.5 мес'],
      }
    },
    {
      slug: 'avito-leads',
      title: 'AI-квалификация лидов с Авито 24/7',
      img: '/cases/avito-leads.png',
      front: {
        problem: 'Потеря 40% лидов ночью/в выходные',
        solution: 'AI-чат + Авито + CRM + уведомления',
        result: '+35% конверсия, −60% нагрузка',
        metrics: 'CR 12% → 16.2%; ответ 4ч → 3м'
      },
      back: {
        challenge: 'Нехватка ресурсов для 50–80 обращений/день',
        tech: ['GPT‑4', 'RAG', 'Avito API', 'amoCRM API', 'Telegram notifications'],
        rollout: ['Д1–3: обучение на 500+ диалогах', 'Д4–7: интеграции', 'Д8–10: сценарии', 'Д11–14: тесты и оптим'],
        roi: ['+35% × 2.5 млн = +875 тыс/мес', 'Экономия: 120 тыс/мес', 'Цена: 400 тыс', 'Окупаемость: 0.4 мес'],
      }
    },
    {
      slug: 'quote-90s',
      title: 'КП за 90 секунд вместо 2 часов',
      img: '/cases/quote-90s.png',
      front: {
        problem: '2 часа на КП, ошибки, потеря скорости',
        solution: 'AI-генератор КП + прайсы + автодизайн',
        result: '×80 быстрее, −95% ошибок, −3 дня к циклу',
        metrics: '90 сек vs 2 часа; ошибки 15% → 0.7%'
      },
      back: {
        challenge: '10 КП/день перегружали менеджеров',
        tech: ['GPT‑4', 'Python расчеты', 'jsPDF', 'SMTP', 'Google Sheets API'],
        rollout: ['Д1: оцифровка прайсов', 'Д2–3: бот для ТЗ', 'Д4–5: расчетная логика', 'Д6–7: PDF и тест'],
        roi: ['Экономия 1 083 000 руб/мес', '+20% конверсия (+400 тыс)', 'Цена: 200 тыс', 'Окупаемость: 4 дня'],
      }
    },
    {
      slug: 'salon-booking',
      title: 'Умная запись в премиум-салоны',
      img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      front: {
        problem: 'Звонки вне режима, 40% времени на запись',
        solution: 'AI + календари мастеров + SMS',
        result: '+40% CSAT, −90% нагрузка, +25% загрузка',
        metrics: 'CSAT 7.2 → 10.1; 8м → 2м'
      },
      back: {
        challenge: 'Админ не успевал при 8 мастерах',
        tech: ['GPT‑4', 'Google Calendar API', 'Telegram Bot API', 'SMS-шлюз', 'PostgreSQL'],
        rollout: ['Д1–2: календари/услуги', 'Д3–5: обучение на диалогах', 'Д6–8: SMS и нотификации', 'Д9–10: тест и запуск'],
        roi: ['+200 тыс/мес загрузка', 'Экономия 45 тыс/мес', 'Цена: 350 тыс', 'Окупаемость: 1.4 мес'],
      }
    },
    {
      slug: 'ecommerce-chatbot',
      title: 'AI-консультант для интернет-магазина',
      img: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200',
      front: {
        problem: 'Много вопросов о товарах, низкая конверсия',
        solution: 'AI-чат с каталогом + рекомендации',
        result: '+25% конверсия, −70% нагрузка на поддержку',
        metrics: 'CR 3.2% → 4.0%; время ответа 2ч → 30с'
      },
      back: {
        challenge: 'Поддержка не справлялась с объемом вопросов',
        tech: ['GPT-4', 'RAG с каталогом', 'Webhook API', 'Аналитика диалогов'],
        rollout: ['Д1–3: обучение на FAQ', 'Д4–6: интеграция с каталогом', 'Д7–9: тестирование', 'Д10: запуск'],
        roi: ['+25% × 5 млн = +1.25 млн/мес', 'Экономия: 80 тыс/мес', 'Цена: 300 тыс', 'Окупаемость: 0.2 мес'],
      }
    },
    {
      slug: 'hr-screening',
      title: 'AI-скрининг резюме и собеседования',
      img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      front: {
        problem: '500+ резюме в неделю, долгий отбор',
        solution: 'AI-анализ резюме + видео-собеседования',
        result: '×10 быстрее отбор, +30% качество найма',
        metrics: '500 резюме/нед → 50; время отбора 2дн → 2ч'
      },
      back: {
        challenge: 'HR не успевал обрабатывать поток резюме',
        tech: ['GPT-4', 'CV парсинг', 'Video AI анализ', 'ATS интеграция'],
        rollout: ['Д1–2: настройка критериев', 'Д3–5: обучение на данных', 'Д6–8: интеграция ATS', 'Д9–10: тест'],
        roi: ['Экономия 200 тыс/мес HR', 'Лучший найм +15% продуктивность', 'Цена: 400 тыс', 'Окупаемость: 2 мес'],
      }
    }
  ];

  return (
    <>
      <PageHeader />
      <div className="page-background">
        <div className="section-wrapper">
        <Link href="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
          <ArrowLeft size={16} />
          Назад на главную
        </Link>
        
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
          Все реализованные проекты
        </h1>
        <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '40px' }}>
          Полный портфель наших AI-решений для бизнеса
        </p>
        
        <div className="case-cards__grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {cases.map((c) => (
            <Link key={c.slug} href={`/cases/${c.slug}`} className="case-card-link">
              <div className="case-card-image">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="case-card-text-wrapper">
                  <h3>{c.title}</h3>
                  <p>{c.front.result}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/#consultation-form" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Обсудить ваш проект
            <ArrowUpRight size={18} />
          </Link>
        </div>
        </div>
        <PageContactForm />
      </div>
    </>
  );
}
