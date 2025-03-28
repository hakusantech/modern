"use client"

import type React from "react"

import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users, Building, Wrench } from "lucide-react"

export function ServiceCards() {
  return (
    <div className="container py-12 md:py-16" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">サービス一覧</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          CleanNest Hokkaidoでは、民泊・旅館運営に関する様々なサービスを提供しています。
          お客様のニーズに合わせて、最適なサービスをご提案いたします。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 旅館運営代行 */}
        <ServiceCard
          icon={<Building className="h-5 w-5 text-primary" />}
          title="旅館運営代行"
          description="伝統的な旅館の運営をトータルサポート。予約管理、接客対応、清掃、設備管理、料理の手配まで、旅館運営に必要なすべてのサービスを提供します。"
          link="/services/ryokan-management"
        />

        {/* 民泊運営代行 */}
        <ServiceCard
          icon={<Building className="h-5 w-5 text-primary" />}
          title="民泊運営代行"
          description="Airbnbなどの民泊物件の運営を完全代行。リスティング作成、予約管理、ゲスト対応、清掃、メンテナンスまで、民泊運営に必要なすべてのサービスを提供します。"
          link="/services/minpaku-management"
        />

        {/* 民泊清掃 */}
        <ServiceCard
          icon={<Wrench className="h-5 w-5 text-primary" />}
          title="民泊清掃"
          description="プロのスタッフによる徹底的な清掃サービスを提供します。チェックアウト後の清掃からリネン交換、アメニティの補充まで、ゲストに最高の印象を与える清掃サービスを提供します。"
          link="/services/cleaning"
        />

        {/* 各種申請許可 */}
        <ServiceCard
          icon={<FileText className="h-5 w-5 text-primary" />}
          title="各種申請許可サポート"
          description="民泊営業に必要な各種許認可の申請をサポート。住宅宿泊事業法（民泊新法）の届出、旅館業法の許可申請など、複雑な手続きを代行します。"
          link="/services/permits"
        />

        {/* プラン説明 */}
        <ServiceCard
          icon={<Users className="h-5 w-5 text-primary" />}
          title="プラン説明"
          description="お客様のニーズに合わせた最適なプランをご提案します。ファミリー・エクスペリエンス・プランやワーケーション・スマート・プランなど、目的に応じたプランをご用意しています。"
          link="/plans"
        />
      </div>

      <div className="text-center mt-12 space-y-6">
        {/* すべてのサービスを見るボタン */}
        <Button size="lg" asChild>
          <Link href="/services">
            すべてのサービスを見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

// 共通カードコンポーネントにまとめることで保守性UP
const ServiceCard = ({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3 mb-2">
        <div className="rounded-full bg-primary/10 p-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button variant="outline" className="w-full group" asChild>
        <Link href={link}>
          詳細を見る
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </CardFooter>
  </Card>
)

