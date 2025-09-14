import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROC Digital - AI решения для бизнеса",
  description: "Внедряем AI-решения с гарантией результата. Автоматизация документооборота, AI-ассистенты, генерация контента, предиктивная аналитика. Проекты от 200 тыс руб.",
  keywords: "AI, искусственный интеллект, автоматизация, документооборот, чат-бот, генерация контента, аналитика",
  authors: [{ name: "ROC Digital" }],
  creator: "ROC Digital",
  publisher: "ROC Digital",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    title: "ROC Digital - AI решения для бизнеса",
    description: "Внедряем AI-решения с гарантией результата. Автоматизация документооборота, AI-ассистенты, генерация контента, предиктивная аналитика.",
    type: "website",
    locale: "ru_RU",
    siteName: "ROC Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROC Digital - AI решения для бизнеса",
    description: "Внедряем AI-решения с гарантией результата. Автоматизация документооборота, AI-ассистенты, генерация контента, предиктивная аналитика.",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
