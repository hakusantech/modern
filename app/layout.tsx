import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import "./globals.css"
import { UnifiedHeader } from "@/components/unified-header"
import { Footer } from "@/components/footer"

// フォントの設定を変更
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
})

// 日本語のスタイリッシュなフォント
const notoSans = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
})

const notoSerif = Noto_Serif_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
})

export const metadata: Metadata = {
  title: "札幌の民泊代行サービス | インバウンド対応 | CleanNest Hokkaido",
  description:
    "札幌エリアの民泊代行サービス。インバウンド対応に特化し、予約管理から清掃まで一括サポート。外国人観光客向け運営を徹底的にバックアップします。",
  keywords: "民泊代行, インバウンド, 札幌, 民泊運営, 外国人観光客, 民泊清掃, 札幌市, 北海道",
  openGraph: {
    title: "札幌の民泊代行サービス | インバウンド対応 | CleanNest Hokkaido",
    description: "札幌エリアの民泊代行サービス。インバウンド対応に特化し、予約管理から清掃まで一括サポート。",
    url: "https://cleannest-hokkaido.com",
    siteName: "CleanNest Hokkaido",
    images: [
      {
        url: "https://cleannest-hokkaido.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "札幌の民泊代行サービス - インバウンド対応のCleanNest Hokkaido",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "札幌の民泊代行サービス | インバウンド対応 | CleanNest Hokkaido",
    description: "札幌エリアの民泊代行サービス。インバウンド対応に特化し、予約管理から清掃まで一括サポート。",
    images: ["https://cleannest-hokkaido.com/images/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${playfair.variable} ${notoSans.variable} ${notoSerif.variable}`}>
      <body className={inter.className}>
        <UnifiedHeader />
        {/* Adjust padding for the unified header */}
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'