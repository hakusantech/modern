import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Bath, BedDouble, Square, Phone, Mail } from "lucide-react"

// サンプル物件データ
const properties = [
  {
    id: 1,
    title: "札幌市中央区の広々1LDK",
    type: "マンション",
    price: "75,000",
    address: "北海道札幌市中央区南1条西5丁目",
    area: "45",
    bedrooms: 1,
    bathrooms: 1,
    features: ["駅徒歩5分", "家具付き", "インターネット無料", "民泊許可物件"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "小樽運河近くの戸建て",
    type: "戸建て",
    price: "120,000",
    address: "北海道小樽市色内1丁目",
    area: "85",
    bedrooms: 2,
    bathrooms: 1,
    features: ["観光地近く", "リノベーション済み", "駐車場あり", "民泊許可物件"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "函館山が見える2LDK",
    type: "アパート",
    price: "85,000",
    address: "北海道函館市元町",
    area: "60",
    bedrooms: 2,
    bathrooms: 1,
    features: ["景観良好", "温泉付き", "外国人観光客に人気", "民泊許可物件"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "ニセコ高原の別荘タイプ",
    type: "戸建て",
    price: "180,000",
    address: "北海道虻田郡ニセコ町",
    area: "120",
    bedrooms: 3,
    bathrooms: 2,
    features: ["スキー場近く", "外国人需要高い", "高級仕様", "民泊許可物件"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "旭川駅前の便利な1DK",
    type: "マンション",
    price: "65,000",
    address: "北海道旭川市宮下通",
    area: "35",
    bedrooms: 1,
    bathrooms: 1,
    features: ["駅前立地", "コンビニ隣接", "家電付き", "民泊許可物件"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "富良野の一軒家",
    type: "戸建て",
    price: "95,000",
    address: "北海道富良野市朝日町",
    area: "75",
    bedrooms: 2,
    bathrooms: 1,
    features: ["ラベンダー畑近く", "観光シーズン需要高", "駐車場2台分", "民泊許可物件"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function RentalPropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-darkgray-950 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                民泊物件用の賃貸物件募集
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                CleanNest Hokkaidoがおすすめする、民泊運営に最適なアパート・マンション・戸建ての物件情報をご紹介します。
                すべての物件は民泊営業が可能で、高い収益が期待できる立地条件を備えています。
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="w-full py-8 border-b border-darkgray-800 bg-darkgray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="物件タイプ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="apartment">アパート</SelectItem>
                    <SelectItem value="mansion">マンション</SelectItem>
                    <SelectItem value="house">戸建て</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="エリア" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="sapporo">札幌市</SelectItem>
                    <SelectItem value="otaru">小樽市</SelectItem>
                    <SelectItem value="hakodate">函館市</SelectItem>
                    <SelectItem value="niseko">ニセコ</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="価格帯" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="under70000">〜7万円</SelectItem>
                    <SelectItem value="70000-100000">7万円〜10万円</SelectItem>
                    <SelectItem value="100000-150000">10万円〜15万円</SelectItem>
                    <SelectItem value="over150000">15万円〜</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button className="w-full">検索</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Property Listings */}
        <section className="w-full py-12 bg-darkgray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="group overflow-hidden rounded-lg border border-darkgray-800 bg-darkgray-800 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                      {property.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{property.title}</h3>
                    <p className="text-2xl font-bold mt-1">
                      ¥{property.price}
                      <span className="text-sm font-normal text-muted-foreground">/月</span>
                    </p>
                    <div className="flex items-center mt-2 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.address}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="flex items-center text-sm">
                        <Square className="h-4 w-4 mr-1" />
                        <span>{property.area}㎡</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BedDouble className="h-4 w-4 mr-1" />
                        <span>{property.bedrooms}部屋</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{property.bathrooms}浴室</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-1">
                        {property.features.map((feature, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button className="w-full">詳細を見る</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 bg-darkgray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">物件に関するお問い合わせ</h2>
              <p className="max-w-[700px] text-muted-foreground">
                掲載されている物件についてのお問い合わせや、民泊運営に関するご相談は下記までお気軽にご連絡ください。
                物件の内見や民泊運営のサポートについても詳しくご説明いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <span>000-0000-0000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <span>info@cleannest-hokkaido.jp</span>
                </div>
              </div>
              <Button size="lg" className="mt-4">
                お問い合わせフォーム
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

