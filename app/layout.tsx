import type { Metadata } from "next"
import Script from 'next/script'
import { M_PLUS_1p, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster"
import { NoisePattern } from "@/components/noise-pattern"
import { BackgroundEffects } from "@/components/background-effects"

// Noto Sans JP フォント
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
})

// M PLUS 1p フォント
const mPlus = M_PLUS_1p({
  subsets: ["latin"],
  variable: "--font-mplus",
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "札幌のインバウンド専門民泊運営代行業者「CleanNest Hokkaido」 | 住宅寿泊施設の管理委託はすべておまかせ",
  description:
    "札幌の民泊運営代行は「CleanNest Hokkaido」におまかせ！市内を中心にインバウンド旅行客に特化した民泊業と旅館業を企画から運用までフルサポートしています。",
  keywords: [
    "札幌,民泊,運営代行,インバウンド,外国人観光客,Airbnb,Booking.com,管理,清掃,民泊代行,民泊管理,北海道,多言語対応,ゲストハウス,旅館業,スマートロック,収益最大化",
  ].join(","),
  authors: [
    {
      name: "CleanNest Hokkaido",
      url: "https://cleannest-hokkaido.com",
    },
  ],
  creator: "CleanNest Hokkaido",
  publisher: "CleanNest Hokkaido",
  robots: "index, follow",
  alternates: {
    canonical: "https://cleannest-hokkaido.com",
  },
  metadataBase: new URL("https://cleannest-hokkaido.com"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US", "zh_CN", "ko_KR"],
    url: "https://cleannest-hokkaido.com",
    siteName: "CleanNest Hokkaido",
    title: "札幌のインバウンド専門民泊運営代行業者「CleanNest Hokkaido」 | 住宅寿泊施設の管理委託はすべておまかせ",
    description: "札幌の民泊運営代行は「CleanNest Hokkaido」におまかせ！市内を中心にインバウンド旅行客に特化した民泊業と旅館業を企画から運用までフルサポートしています。",
    images: [
      {
        url: "/images/ogp-image.jpg",
        width: 1200,
        height: 630,
        alt: "CleanNest Hokkaido - インバウンド特化型民泊運営代行",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "札幌のインバウンド専門民泊運営代行業者「CleanNest Hokkaido」 | 住宅寿泊施設の管理委託はすべておまかせ",
    description: "札幌の民泊運営代行は「CleanNest Hokkaido」におまかせ！市内を中心にインバウンド旅行客に特化した民泊業と旅館業を企画から運用までフルサポートしています。",
    images: ["/images/ogp-image.jpg"],
    site: "@cleannesthokkaido",
    creator: "@cleannesthokkaido",
  },
  icons: {
    icon: [
      { url: "/images/snowflake-logo.png", type: "image/png" },
    ],
    shortcut: ['/images/snowflake-logo.png'],
    apple: [
      { url: "/images/snowflake-logo.png", type: "image/png" },
    ],
    other: [
    ]
  },
  verification: {
    google: "7wjuzirx-E_57wKdFQm1AvCVc1p10USoBq671o5r2HM",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={cn(
        "antialiased",
        notoSansJP.variable,
        mPlus.variable
      )}
    >
      {/* Google Analytics タグ */}
      <Script 
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4D2CDLLMZE"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4D2CDLLMZE', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body className="min-h-screen font-sans text-text-DEFAULT bg-base-500 overflow-x-hidden selection:bg-primary-500/30 selection:text-white">
        {/* クライアントコンポーネント */}
        <BackgroundEffects />
        <NoisePattern />
        
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}

import './globals.css'