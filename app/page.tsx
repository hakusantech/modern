import { HeroSlideshow } from "@/components/hero-slideshow"
import { ServiceCards } from "@/components/service-cards"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  // サイトマップに基づいたメインセクション
  const mainSections = [
    {
      id: "plans",
      title: "料金プラン",
      description: "札幌の民泊オーナー様のニーズに合わせた最適なプランをご提案",
      link: "/plans",
      priority: 1,
    },
    {
      id: "services",
      title: "インバウンド対応民泊代行",
      description: "札幌を訪れる外国人観光客向けの民泊運営を完全サポート",
      link: "/services",
      priority: 2,
    },
    {
      id: "rental",
      title: "札幌の民泊物件",
      description: "インバウンド需要の高い札幌エリアの民泊物件をご紹介",
      link: "/rental-properties",
      priority: 3,
    },
    {
      id: "introduction",
      title: "民泊物件紹介",
      description: "札幌でインバウンド対応の民泊運営に最適な物件をご紹介",
      link: "/property-introduction",
      priority: 4,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション（スライドショー） */}
      <HeroSlideshow />

      {/* サービスカード */}
      <ServiceCards />

      {/* CTA Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 border bg-card rounded-lg">
            <div>
              <h2 className="text-2xl font-bold mb-2">札幌の民泊代行サービスについてお気軽にお問い合わせください</h2>
              <p className="text-muted-foreground">
                インバウンド対応や運営代行の詳細、料金プランについてのご質問は、お気軽にお問い合わせください。
              </p>
            </div>
            <Button variant="gold" size="lg" className="text-white" asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

