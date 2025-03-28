import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageLayoutProps {
  title: string
  subtitle?: string
  description?: string
  heroImage?: string
  heroImageAlt?: string
  breadcrumbs?: BreadcrumbItem[]
  children: React.ReactNode
  hasSidebar?: boolean
  sidebar?: React.ReactNode
  background?: "white" | "muted" | "primary" | "gold" | "darkgray-950"
}

export function PageLayout({
  title,
  subtitle,
  description,
  heroImage,
  heroImageAlt,
  breadcrumbs,
  children,
  hasSidebar = false,
  sidebar,
  background = "white",
}: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* ヘッダー部分 - 背景画像なし */}
      <div className={`bg-gradient-to-b from-darkgray-950 to-darkgray-900 text-white`}>
        <div className="container py-12 md:py-16">
          {/* パンくずリスト */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="mb-6">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link
                      href="/"
                      className="inline-flex items-center text-sm font-medium text-snow-300 hover:text-snow-100"
                    >
                      ホーム
                    </Link>
                  </li>
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index}>
                      <div className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-snow-400" />
                        {crumb.href ? (
                          <Link
                            href={crumb.href}
                            className="ml-1 text-sm font-medium text-snow-300 hover:text-snow-100 md:ml-2"
                          >
                            {crumb.label}
                          </Link>
                        ) : (
                          <span className="ml-1 text-sm font-medium text-snow-100 md:ml-2">{crumb.label}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          )}

          {/* タイトルとサブタイトル */}
          <div className="text-center max-w-3xl mx-auto">
            {subtitle && <p className="text-ice-400 font-medium mb-2">{subtitle}</p>}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-noto-serif">{title}</h1>
            {description && <p className="text-snow-200 text-lg max-w-2xl mx-auto">{description}</p>}
          </div>
        </div>
      </div>

      {/* コンテンツ部分 */}
      <div className={`py-12 ${background}`}>
        <div className="container">
          {hasSidebar ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">{children}</div>
              <aside className="lg:col-span-1">{sidebar}</aside>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  )
}

export default PageLayout

