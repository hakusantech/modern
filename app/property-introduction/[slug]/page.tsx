import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Home, Calendar, Tag, Phone, Mail } from "lucide-react"

// 物件詳細データ（実際の実装ではデータベースやAPIから取得）
const propertyDetails = {
  "otaru-street-store": {
    id: 1,
    date: "2022.08.31",
    title: "【For lease】Otaru great location street store tenant",
    description:
      "小樽の中心地に位置する歴史的建造物の1階テナント。観光客の多いエリアで、飲食店や小売店に最適な立地です。民泊としての利用も可能で、インバウンド需要が見込めます。",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    details: {
      type: "賃貸物件",
      size: "80㎡",
      price: "150,000円/月",
      location: "北海道小樽市堺町1-2-3",
      features: ["歴史的建造物", "観光地", "飲食店可", "小売店可", "民泊利用可"],
    },
    blogNumber: 3,
    area: "小樽",
  },
  "niseko-land": {
    id: 2,
    date: "2022.07.12",
    title: "北海道ニセコ・倶知安・ルスツ地域の土地買取専門 - 地域発展をサポートするワールドワイドベース",
    description:
      "ニセコ・倶知安・ルスツ地域の土地を専門に買取しています。世界中から注目を集めるリゾートエリアで、インバウンド需要が高く、投資価値の高い土地です。民泊施設やホテル建設に最適な土地をご紹介します。",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    details: {
      type: "土地",
      size: "500㎡〜",
      price: "お問い合わせください",
      location: "北海道虻田郡倶知安町・ニセコ町周辺",
      features: ["リゾートエリア", "インバウンド需要", "投資価値高", "開発可能"],
    },
    blogNumber: 4,
    area: "ニセコ",
  },
  // 他の物件データも同様に定義
}

export function generateStaticParams() {
  return Object.keys(propertyDetails).map((slug) => ({
    slug: slug,
  }))
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = propertyDetails[params.slug as keyof typeof propertyDetails]

  if (!property) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="mb-6">
        <Link
          href="/property-introduction"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          物件一覧に戻る
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar size={16} />
              <span>{property.date}</span>
              <span className="mx-2">|</span>
              <Tag size={16} />
              <span>{property.area}</span>
            </div>
            <h1 className="text-3xl font-bold">{property.title}</h1>
          </div>

          {/* メイン画像 */}
          <div className="relative aspect-[4/3] mb-6">
            <Image
              src={property.images[0] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover rounded-lg"
            />

            {/* BLOG番号 */}
            <div className="absolute left-0 top-8 writing-mode-vertical bg-black bg-opacity-70 text-white py-2 px-1">
              <div className="flex flex-col items-center">
                <span className="text-xs">BLOG</span>
                <span className="text-lg font-bold">{property.blogNumber}</span>
              </div>
            </div>
          </div>

          {/* サブ画像 */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-[4/3]">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.title} - 画像 ${index + 2}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* 物件説明 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">物件説明</h2>
            <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
          </div>

          {/* 物件詳細 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">物件詳細</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-muted">種別</th>
                    <td className="py-3 px-4">{property.details.type}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-muted">面積</th>
                    <td className="py-3 px-4">{property.details.size}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-muted">価格</th>
                    <td className="py-3 px-4">{property.details.price}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left bg-muted">所在地</th>
                    <td className="py-3 px-4">{property.details.location}</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 text-left bg-muted">特徴</th>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-2">
                        {property.details.features.map((feature, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* サイドバー */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {/* お問い合わせカード */}
            <div className="border rounded-lg overflow-hidden mb-6">
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="text-lg font-bold">この物件に問い合わせる</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">お電話</div>
                    <div className="font-bold">000-0000-0000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">メール</div>
                    <div className="font-bold">info@cleannest-hokkaido.jp</div>
                  </div>
                </div>
                <Button className="w-full">お問い合わせフォーム</Button>
              </div>
            </div>

            {/* 物件所在地 */}
            <div className="border rounded-lg overflow-hidden mb-6">
              <div className="bg-muted p-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  物件所在地
                </h3>
              </div>
              <div className="p-4">
                <div className="relative aspect-video mb-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.2105498236546!2d141.34456867692078!3d43.06420447104607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2974d2c3f903%3A0xa5e2b18cdd4a47a5!2z5pyt5bmM5biC6LGK5bmz5Yy65bmz5bKp5LiJ5p2h!5e0!3m2!1sja!2sjp!4v1709456924980!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                <p className="text-sm text-muted-foreground">{property.details.location}</p>
              </div>
            </div>

            {/* 関連物件 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="text-lg font-bold">関連物件</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="関連物件"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium line-clamp-2">
                      【賃貸物件】小樽運河沿い 歴史的建造物の1階テナント
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">小樽</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="関連物件"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium line-clamp-2">
                      【売買物件】ニセコビュープロパティ - 羊蹄山が見える別荘用地
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">ニセコ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

