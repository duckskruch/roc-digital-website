import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { PageContactForm } from '@/components/PageContactForm';

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader />
      <div className="page-background">
        {children}
        <PageContactForm />
      </div>
    </>
  );
}
