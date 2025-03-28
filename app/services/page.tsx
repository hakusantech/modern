import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { CardGrid, CardItem } from "@/components/card-grid"

// サービスデータ - ビジネスサポート
const businessSupportServices = [
  {
    id: "ryokan-management",
    title: "旅館運営代行",
    description:
      "伝統的な旅館の運営をトータルサポート。予約管理、接客対応、清掃、設備管理、料理の手配まで、旅館運営に必要なすべてのサービスを提供します。",
    image: "/images/traditional-ryokan.png",
    href: "/services/ryokan-management",
  },
  {
    id: "property-intro",
    title: "民泊物件紹介",
    description:
      "民泊運営に最適な物件をご紹介。立地条件、設備、収益性などを考慮し、お客様のニーズに合った物件をご提案します。",
    image: "/images/sapporo-modern-bedroom.png",
    href: "/services/property-intro",
  },
]

// サービスデータ - プロフェッショナルサポート
const professionalServices = [
  {
    id: "cleaning",
    title: "民泊清掃",
    description:
      "安さだけではなく、スピードと品質にもこだわっているプレイスの民泊清掃を是非ご利用ください。プロのスタッフによる徹底的な清掃サービスを提供します。",
    image: "/images/cleaning-service.png",
    href: "/services/cleaning",
  },
  {
    id: "consulting",
    title: "民泊運営企画・相談",
    description:
      "民泊ビジネスの立ち上げから運営まで、経験豊富なコンサルタントがサポート。収益計画、マーケティング戦略、運営効率化など、あらゆる相談に対応します。",
    image: "/images/consultation-couple.png",
    href: "/services/consulting",
  },
  {
    id: "permits",
    title: "各種申請許可サポート",
    description:
      "民泊営業に必要な各種許認可の申請をサポート。住宅宿泊事業法（民泊新法）の届出、旅館業法の許可申請など、複雑な手続きをサポートします。",
    image: "/images/permit-application-support.png",
    href: "/services/permits",
  },
]

export default function ServicesPage() {
  return (
    <PageLayout
      title="民泊運営代行"
      subtitle="MINPAKU MANAGEMENT"
      description="CleanNest Hokkaidoでは、民泊・旅館運営に関する様々なサービスを提供しています。お客様のニーズに合わせて、最適なサービスをご提案いたします。"
      breadcrumbs={[{ label: "民泊運営代行" }]}
    >
      {/* 民泊運営代行の特徴セクション */}
      <Section
        title="札幌で選ばれる民泊運営代行サービス"
        subtitle="一気痛感で支援"
        description="CleanNest Hokkaidoは札幌エリアに特化した民泊運営代行サービスを提供しています。インバウンド対応から清掃まで、すべてを一括管理します。"
        background="darkgray-950"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/sapporo-modern-bedroom.png"
              alt="札幌の高級感ある民泊物件の一例"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkgray-900/50 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">高品質な民泊運営をトータルサポート</h3>
            <p className="text-paleblue-100">
              札幌の観光地や主要施設へのアクセスが良い立地の物件を中心に、高品質な民泊運営をサポートします。外国人観光客にも対応した多言語サービスで、オーナー様の収益最大化を実現します。
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-400 mr-2 mt-1 flex-shrink-0" />
                <p className="text-paleblue-100">24時間対応の予約・問い合わせ管理</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-400 mr-2 mt-1 flex-shrink-0" />
                <p className="text-paleblue-100">プロによる徹底的な清掃サービス</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-400 mr-2 mt-1 flex-shrink-0" />
                <p className="text-paleblue-100">多言語対応のゲストコミュニケーション</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-400 mr-2 mt-1 flex-shrink-0" />
                <p className="text-paleblue-100">Airbnb・Booking.comなど複数プラットフォーム対応</p>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-gold-400 mr-2 mt-1 flex-shrink-0" />
                <p className="text-paleblue-100">収益最大化のための価格設定と運営戦略</p>
              </div>
            </div>
            <Button variant="gold" className="text-white mt-4" asChild>
              <Link href="/services">
                詳しいサービス内容を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* ビジネスサポートサービスセクション */}
      <Section
        title="オーナー様のビジネスを強力にサポート"
        subtitle="BUSINESS SUPPORT"
        description="旅館・民泊オーナー様の収益最大化と業務効率化を実現するための包括的なサービスを提供します。運営代行から物件紹介まで、ビジネスの成長に必要なすべてのサポートをワンストップで提供します。"
        background="darkgray-950"
        className="text-white"
      >
        <CardGrid columns={3}>
          {businessSupportServices.map((service) => (
            <CardItem
              key={service.id}
              title={service.title}
              description={service.description}
              content={
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkgray-900/90 to-darkgray-900/30"></div>
                </div>
              }
              footer={
                <Button variant="gold" className="w-full group text-white" asChild>
                  <Link href={service.href}>
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              }
            />
          ))}
        </CardGrid>
      </Section>

      {/* プロフェッショナルサポートサービスセクション */}
      <Section
        title="プロフェッショナルによる安心サポート"
        subtitle="PROFESSIONAL SUPPORT"
        description="経験豊富なプロフェッショナルチームが、旅館・民泊運営に関するあらゆる課題を解決します。清掃から許認可申請まで、専門知識と経験を活かした高品質なサービスで、オーナー様に安心をお届けします。"
        background="darkgray-950"
        className="text-white"
      >
        <CardGrid columns={3}>
          {professionalServices.map((service) => (
            <CardItem
              key={service.id}
              title={service.title}
              description={service.description}
              content={
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkgray-900/90 to-darkgray-900/30"></div>
                </div>
              }
              footer={
                <Button variant="gold" className="w-full group text-white" asChild>
                  <Link href={service.href}>
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              }
            />
          ))}
        </CardGrid>
      </Section>

      {/* CTA セクション */}
      <Section background="darkgray-950" className="rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">サービスに関するお問い合わせ</h2>
            <p className="text-paleblue-100">
              各サービスの詳細や料金、導入方法についてのご質問は、お気軽にお問い合わせください。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" className="text-white" asChild>
              <Link href="/#contact">
                お問い合わせをする
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

