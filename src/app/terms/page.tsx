import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Пользовательское соглашение - ROC Digital',
  description: 'Пользовательское соглашение ROC Digital. Условия использования сайта, права и обязанности сторон.',
  keywords: 'пользовательское соглашение, условия использования, права, обязанности',
  openGraph: {
    title: 'Пользовательское соглашение - ROC Digital',
    description: 'Пользовательское соглашение ROC Digital. Условия использования сайта, права и обязанности сторон.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Пользовательское соглашение - ROC Digital',
    description: 'Пользовательское соглашение ROC Digital. Условия использования сайта, права и обязанности сторон.',
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader />
      <div className="page-background">
        <div className="section-wrapper">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: 'var(--color-blue-accent)', textDecoration: 'none' }}>
            <ArrowLeft size={16} />
            Назад на главную
          </Link>
          
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
            Пользовательское соглашение
          </h1>
          
          <div style={{ color: 'var(--color-gray-600)', lineHeight: '1.6' }}>
            <p style={{ marginBottom: '16px' }}>
              <strong>Дата последнего обновления:</strong> {new Date().toLocaleDateString('ru-RU')}
            </p>
            
            <p style={{ marginBottom: '16px' }}>
              Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между ИП Клецков Георгий Сергеевич (далее Roc digital или Администрация) с одной стороны и пользователем сайта с другой.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Сайт Roc digital не является средством массовой информации.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Используя сайт, Вы соглашаетесь с условиями данного соглашения.
            </p>
            <p style={{ marginBottom: '32px', fontWeight: '600', color: 'var(--color-red-600)' }}>
              Если Вы не согласны с условиями данного соглашения, не используйте сайт Roc digital!
            </p>
            
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px', color: 'var(--color-gray-900)' }}>
              Предмет соглашения
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Администрация предоставляет пользователю право на размещение на сайте следующей информации:
            </p>
            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Текстовой информации</li>
              <li style={{ marginBottom: '8px' }}>Видеоматериалов</li>
              <li style={{ marginBottom: '8px' }}>Фотоматериалов</li>
              <li style={{ marginBottom: '8px' }}>Ссылок на материалы, размещенные на других сайтах</li>
            </ul>
            
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px', color: 'var(--color-gray-900)' }}>
              Права и обязанности сторон
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', marginTop: '24px', color: 'var(--color-gray-800)' }}>
              Пользователь имеет право:
            </h3>
            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>осуществлять поиск информации на сайте</li>
              <li style={{ marginBottom: '8px' }}>получать информацию на сайте</li>
              <li style={{ marginBottom: '8px' }}>использовать информацию сайта в личных некоммерческих целях</li>
            </ul>
            
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', marginTop: '24px', color: 'var(--color-gray-800)' }}>
              Администрация имеет право:
            </h3>
            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>по своему усмотрению и необходимости создавать, изменять, отменять правила</li>
              <li style={{ marginBottom: '8px' }}>ограничивать доступ к любой информации на сайте</li>
              <li style={{ marginBottom: '8px' }}>создавать, изменять, удалять информацию</li>
            </ul>
            
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', marginTop: '24px', color: 'var(--color-gray-800)' }}>
              Пользователь обязуется:
            </h3>
            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>не нарушать работоспособность сайта</li>
              <li style={{ marginBottom: '8px' }}>не совершать действия, направленные на введение других Пользователей в заблуждение</li>
              <li style={{ marginBottom: '8px' }}>не размещать материалы рекламного, эротического, порнографического или оскорбительного характера, а также иную информацию, размещение которой запрещено или противоречит нормам действующего законодательства РФ</li>
              <li style={{ marginBottom: '8px' }}>не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами</li>
            </ul>
            
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', marginTop: '24px', color: 'var(--color-gray-800)' }}>
              Администрация обязуется:
            </h3>
            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам.</li>
            </ul>
            
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px', color: 'var(--color-gray-900)' }}>
              Ответственность сторон
            </h2>
            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>пользователь лично несет полную ответственность за распространяемую им информацию</li>
              <li style={{ marginBottom: '8px' }}>администрация не несет никакой ответственности за достоверность информации, скопированной из других источников</li>
              <li style={{ marginBottom: '8px' }}>администрация не несёт ответственность за несовпадение ожидаемых Пользователем и реально полученных услуг</li>
              <li style={{ marginBottom: '8px' }}>администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами</li>
              <li style={{ marginBottom: '8px' }}>в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой Пользователем, а также бесперебойную работу информационного ресурса</li>
            </ul>
            
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px', color: 'var(--color-gray-900)' }}>
              Условия действия Соглашения
            </h2>
            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Данное Соглашение вступает в силу при любом использовании данного сайта.</li>
              <li style={{ marginBottom: '8px' }}>Соглашение перестает действовать при появлении его новой версии.</li>
              <li style={{ marginBottom: '8px' }}>Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.</li>
              <li style={{ marginBottom: '8px' }}>Администрация не оповещает пользователей об изменении в Соглашении.</li>
            </ul>
          </div>
        </div>
        </div>
        <PageContactForm />
      </div>
    </>
  );
}
