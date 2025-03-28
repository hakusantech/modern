import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, ArrowRight, Tag } from "lucide-react"

interface SidebarProps {
  children?: React.ReactNode
  showContact?: boolean
  showCategories?: boolean
  categories?: Array<{ name: string; href: string; count?: number }>
  showRelatedArticles?: boolean
  relatedArticles?: Array<{ title: string; href: string; date?: string }>
  customContent?: React.ReactNode
}

export function Sidebar({
  children,
  showContact = true,
  showCategories = false,
  categories = [],
  showRelatedArticles = false,
  relatedArticles = [],
  customContent,
}: SidebarProps) {
  return (
    <div className="space-y-6 sticky top-32">
      {children}

      {showContact && (
        <Card>
          <CardHeader className="bg-gold-600 text-white rounded-t-lg">
            <CardTitle className="text-lg">お問い合わせ</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gold-600 mt-0.5" />
              <div>
                <div className="text-sm text-muted-foreground">お電話</div>
                <div className="font-medium">000-0000-0000</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-gold-600 mt-0.5" />
              <div>
                <div className="text-sm text-muted-foreground">メール</div>
                <div className="font-medium">info@cleannest-hokkaido.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gold-600 mt-0.5" />
              <div>
                <div className="text-sm text-muted-foreground">所在地</div>
                <div className="font-medium">北海道札幌市〇〇区〇〇町0-0</div>
              </div>
            </div>
            <Button variant="gold" className="w-full text-white mt-2" asChild>
              <Link href="/contact">
                お問い合わせをする
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {showCategories && categories.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">カテゴリー</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.href}
                    className="flex items-center justify-between group hover:text-gold-600 transition-colors"
                  >
                    <span className="flex items-center">
                      <Tag className="h-4 w-4 mr-2 text-muted-foreground group-hover:text-gold-600 transition-colors" />
                      {category.name}
                    </span>
                    {category.count !== undefined && (
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {showRelatedArticles && relatedArticles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">関連記事</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <ul className="space-y-4">
              {relatedArticles.map((article, index) => (
                <li key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <Link href={article.href} className="group">
                    <h4 className="text-sm font-medium group-hover:text-gold-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    {article.date && <p className="text-xs text-muted-foreground mt-1">{article.date}</p>}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {customContent}
    </div>
  )
}

