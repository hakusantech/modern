import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tag } from "lucide-react"
import { PropertyFilter } from "@/components/property-filter"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { Sidebar } from "@/components/sidebar"
import { CardGrid, CardItem } from "@/components/card-grid"

// 物件データ
const properties = [
  {
    id: 1,
    date: "2022.08.31",
    title: "【For lease】Otaru great location street store tenant",
    image: "/placeholder.svg?height=400&width=600",
    blogNumber: 3,
    slug: "otaru-street-store",
    area: "小樽",
  },
  {
    id: 2,
    date: "2022.07.12",
    title: "北海道ニセコ・倶知安・ルスツ地域の土地買取専門 - 地域発展をサポートするワールドワイドベース",
    image: "/placeholder.svg?height=400&width=600",
    blogNumber: 4,
    slug: "niseko-land",
    area: "ニセコ",
  },
  {
    id: 3,
    date: "2022.04.25",
    title: "【賃貸物件】小樽運河沿い 歴史的建造物の1階テナント",
    image: "/placeholder.svg?height=400&width=600",
    blogNumber: 5,
    slug: "otaru-canal-tenant",
    area: "小樽",
  },
  {
    id: 4,
    date: "2022.04.19",
    title: "【売買物件】ニセコビュープロパティ - 羊蹄山が見える別荘用地",
    image: "/placeholder.svg?height=400&width=600",
    blogNumber: 6,
    slug: "niseko-view-property",
    area: "ニセコ",
  },
  {
    id: 5,
    date: "2022.03.15",
    title: "【賃貸物件】札幌市中央区の広々1LDK - 民泊営業可能物件",
    image: "/placeholder.svg?height=400&width=600",
    blogNumber: 7,
    slug: "sapporo-central-1ldk",
    area: "札幌",
  },
  {
    id: 6,
    date: "2022.02.10",
    title: "【売買物件】洞爺湖近くの温泉付き戸建て - インバウンド需要高い地域",
    image: "/placeholder.svg?height=400&width=600",
    blogNumber: 8,
    slug: "toya-onsen-house",
    area: "洞爺",
  },
]

// エリアデータ
const areas = [
  { id: "niseko", name: "ニセコ", count: 2 },
  { id: "otaru", name: "小樽", count: 2 },
  { id: "sapporo", name: "札幌", count: 1 },
  { id: "toya", name: "洞爺", count: 1 },
]

export default function PropertyIntroductionPage() {
  // サイドバーのカテゴリーデータを作成
  const categories = areas.map((area) => ({
    name: area.name,
    href: `/property-introduction?area=${area.id}`,
    count: area.count,
  }))

  return (
    <PageLayout
      title="民泊物件紹介"
      subtitle="PROPERTY INTRODUCTION"
      description="札幌エリアを中心に、インバウンド対応に最適な民泊物件をご紹介します。高収益が期待できる厳選物件をお探しの方はぜひご覧ください。"
      heroImage="/placeholder.svg?height=800&width=1600"
      heroImageAlt="札幌の民泊物件紹介"
      breadcrumbs={[{ label: "民泊物件紹介" }]}
      hasSidebar={true}
      background="darkgray-950"
      sidebar={
        <Sidebar
          showContact={true}
          showCategories={true}
          categories={categories}
          customContent={
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">物件タイプ</h3>
              <PropertyFilter />
            </div>
          }
        />
      }
    >
      <Section background="darkgray-900">
        <CardGrid columns={2} gap="large">
          {properties.map((property) => (
            <CardItem
              key={property.id}
              className="group overflow-hidden"
              content={
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* BLOG番号 */}
                    <div className="absolute left-0 top-8 writing-mode-vertical bg-black bg-opacity-70 text-white py-2 px-1">
                      <div className="flex flex-col items-center">
                        <span className="text-xs">BLOG</span>
                        <span className="text-lg font-bold">{property.blogNumber}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">{property.date}</div>
                      <div className="flex items-center">
                        <Tag className="h-3.5 w-3.5 mr-1 text-gold-600" />
                        <span className="text-sm text-gray-500">{property.area}</span>
                      </div>
                    </div>
                    <Link href={`/property-introduction/${property.slug}`} className="block mt-2">
                      <h2 className="text-lg font-medium hover:text-gold-600 transition-colors line-clamp-2">
                        {property.title}
                      </h2>
                    </Link>
                  </div>
                </div>
              }
              footer={
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/property-introduction/${property.slug}`}>詳細を見る</Link>
                </Button>
              }
            />
          ))}
        </CardGrid>

        {/* ページネーション */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              前へ
            </Button>
            <Button variant="gold" size="sm" className="text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              次へ
            </Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

