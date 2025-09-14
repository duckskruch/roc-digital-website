'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="page-background">
      <main style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        padding: '20px'
      }}>
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '600px',
          padding: '60px 40px',
          background: 'var(--color-white)',
          borderRadius: '16px',
          border: '1px solid var(--color-gray-200)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            fontSize: '120px', 
            fontWeight: '700', 
            color: 'var(--color-blue-accent)',
            marginBottom: '24px',
            lineHeight: '1'
          }}>
            404
          </div>
          
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: '600', 
            marginBottom: '16px',
            color: 'var(--color-gray-800)'
          }}>
            Страница не найдена
          </h1>
          
          <p style={{ 
            fontSize: '18px', 
            color: 'var(--color-gray-600)', 
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              href="/" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--color-blue-accent)',
                color: 'var(--color-white)',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              <Home size={18} />
              На главную
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--color-gray-100)',
                color: 'var(--color-gray-700)',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ArrowLeft size={18} />
              Назад
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
