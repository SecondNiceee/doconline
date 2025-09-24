import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "@Doconline24_bot - Профессиональный генератор документов | Создание документов онлайн",
  description:
    "Создавайте юридические документы, договоры, заявления, жалобы и резюме за 3-5 минут через Telegram бота @Doconline24_bot. Актуальные шаблоны, форматы PDF и Word. Без регистрации!",
  keywords: [
    "генератор документов",
    "создание документов онлайн",
    "telegram бот документы",
    "юридические документы",
    "договоры онлайн",
    "заявления",
    "жалобы",
    "резюме",
    "доверенности",
    "шаблоны документов",
    "PDF документы",
    "Word документы",
    "Doconline24_bot",
    "документы через телеграм",
    "быстрое создание документов",
  ],
  authors: [{ name: "@Doconline24_bot" }],
  creator: "@Doconline24_bot",
  publisher: "@Doconline24_bot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://doconlinebotlanding.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "@Doconline24_bot - Профессиональный генератор документов",
    description:
      "Создавайте юридические документы, договоры, заявления за 3-5 минут через Telegram бота. Актуальные шаблоны, форматы PDF и Word.",
    url: "https://doconlinebotlanding.vercel.app",
    siteName: "@Doconline24_bot",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Профессиональный генератор документов @Doconline24_bot - создание документов через Telegram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "@Doconline24_bot - Генератор документов",
    description: "Создавайте документы за 3-5 минут через Telegram бота. Актуальные шаблоны, PDF и Word форматы.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "@Doconline24_bot",
              description:
                "Профессиональный генератор документов через Telegram бота. Создание юридических документов, договоров, заявлений за 3-5 минут.",
              url: "https://doconlinebotlanding.vercel.app",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Telegram",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
                description: "Бесплатное создание документов",
              },
              provider: {
                "@type": "Organization",
                name: "@Doconline24_bot",
                url: "https://t.me/Doconline24_bot",
              },
              featureList: [
                "Создание документов за 3-5 минут",
                "Форматы PDF и Word",
                "Актуальные шаблоны",
                "Без регистрации",
                "24/7 доступность",
              ],
              screenshot: "/images/bot-interface.png",
            }),
          }}
        />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="@Doconline24_bot" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
