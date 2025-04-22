import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "インバウンド特化の民泊・旅館運営代行サービス一覧 | CleanNest Hokkaido",
  description: "札幌・北海道でインバウンド需要に特化した民泊・旅館運営代行のサービス一覧。外国人観光客向け多言語対応、清掃、ゲスト対応などの運営代行サービスを提供し、オーナー様の収益を最大化します。",
  openGraph: {
    title: "インバウンド特化の民泊・旅館運営代行サービス | CleanNest Hokkaido",
    description: "札幌・北海道でインバウンド需要に特化した民泊・旅館運営代行のサービス一覧。外国人観光客対応の運営代行サービスをご紹介。",
    images: [
      {
        url: "/images/sapporo-modern-bedroom.png",
        width: 1200,
        height: 630,
        alt: "CleanNest Hokkaido - 札幌・北海道のインバウンド特化型民泊運営代行サービス",
      },
    ],
  },
}

// Custom page layout for the redesigned services page
interface LuxuryPageLayoutProps {
  children: ReactNode;
}

function LuxuryPageLayout({ children }: LuxuryPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Split Layout */}
      <div className="min-h-[70vh] lg:min-h-[90vh] bg-white relative">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
            {/* Mobile image (shown only on small screens) */}
            <div className="lg:hidden relative h-[40vh] mb-8">
              <Image
                src="/images/sapporo-modern-bedroom.png"
                alt="札幌の高級感ある民泊物件の一例"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-center py-8 lg:py-20 pr-0 lg:pr-12">
              <nav className="flex mb-12" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 text-xs tracking-widest whitespace-nowrap">
                  <li className="inline-flex items-center">
                    <Link
                      href="/"
                      className="font-normal text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      ホーム
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <span className="mx-1 text-gray-400">/</span>
                      <span className="text-sm font-normal text-gray-900">サービス</span>
                    </div>
                  </li>
                </ol>
              </nav>
              
              <div className="relative mb-6">
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-[80px] bg-gold-500 opacity-80"></div>
                <div>
                  <span className="text-xs tracking-widest uppercase font-medium text-gold-600">
                    インバウンドに特化した
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extralight text-gray-900 tracking-tight leading-tight mt-2">
                    民泊と旅館の<span className="text-gold-600">運営代行</span>
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 font-light mb-10 max-w-[36ch]">
                CleanNest Hokkaidoでは、住宅宿泊業・旅館業の運営代行サービスを提供しています。
                お客様のニーズに合わせて、最適なサービスをご提案いたします。
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-gold-600" />
                  </div>
                  <p className="text-gray-600 ml-3 text-sm font-normal">Airbnb・Booking.comの2つの予約サイト対応</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-gold-600" />
                  </div>
                  <p className="text-gray-600 ml-3 text-sm font-normal">世界中24時間対応の宿泊予約</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-gold-600" />
                  </div>
                  <p className="text-gray-600 ml-3 text-sm font-normal">ホテル並みのリネン付き清掃サービス</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-gold-600" />
                  </div>
                  <p className="text-gray-600 ml-3 text-sm font-normal">日本語と英語のゲストコミュニケーション</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-gold-600" />
                  </div>
                  <p className="text-gray-600 ml-3 text-sm font-normal">トラブル対応・レポート作成</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-gold-600" />
                  </div>
                  <p className="text-gray-600 ml-3 text-sm font-normal">料金最適化・収益分析サービス</p>
                </div>
              </div>
              
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="flex w-full sm:inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-white rounded-md shadow-md hover:shadow-lg transition-all group"
                >
                  <span>無料相談を予約する</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 -right-[30%] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"></div>
                <Image
                  src="/images/sapporo-modern-bedroom.png"
                  alt="札幌の高級感ある民泊物件の一例"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements - desktop only */}
        <div className="hidden lg:block absolute bottom-12 left-12 w-32 h-32 border border-gold-200 opacity-50"></div>
        <div className="hidden lg:block absolute bottom-32 left-32 w-16 h-16 border border-gold-300 opacity-30"></div>
      </div>
      
      {children}
    </div>
  )
}

// Luxury section component
interface LuxurySectionProps {
  title?: string | React.ReactNode;
  subtitle?: string | null;
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  subtitleColor?: string;
  dividerColor?: string;
}

function LuxurySection({ 
  title, 
  subtitle = null, 
  children, 
  backgroundColor = "bg-white", 
  textColor = "text-gray-900",
  subtitleColor = "text-gold-600",
  dividerColor = "bg-gold-600"
}: LuxurySectionProps) {
  return (
    <section className={`py-12 lg:py-24 ${backgroundColor}`}>
      <div className="container mx-auto">
        {subtitle && (
          <div className="mb-2">
            <span className={`text-xs tracking-widest uppercase font-medium ${subtitleColor}`}>
              {subtitle}
            </span>
          </div>
        )}
        {title && (
          <div className="mb-16">
            <h2 className={`text-3xl md:text-4xl font-light ${textColor} mb-4`}>{title}</h2>
            <div className={`w-16 h-px ${dividerColor}`}></div>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

// Comparison item component
interface ComparisonItemProps {
  item: string | ReactNode;
  minpaku: string | boolean;
  ryokan: string | boolean;
}

function ComparisonItem({ item, minpaku, ryokan }: ComparisonItemProps) {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="text-gray-900 mb-4 text-lg">{item}</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {typeof minpaku === 'boolean' ? (
                minpaku ? (
                  <Check className="h-5 w-5 text-gold-600 inline mr-2" />
                ) : (
                  <Minus className="h-5 w-5 text-gray-300 inline mr-2" />
                )
              ) : null}
            </div>
            <div>
              <div className="text-sm text-gray-500">民泊業</div>
              <div className="text-gray-700">
                {typeof minpaku === 'boolean' ? (minpaku ? '対応' : '非対応') : minpaku}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {typeof ryokan === 'boolean' ? (
                ryokan ? (
                  <Check className="h-5 w-5 text-gold-600 inline mr-2" />
                ) : (
                  <Minus className="h-5 w-5 text-gray-300 inline mr-2" />
                )
              ) : null}
            </div>
            <div>
              <div className="text-sm text-gray-500">旅館業</div>
              <div className="text-gray-700">
                {typeof ryokan === 'boolean' ? (ryokan ? '対応' : '非対応') : ryokan}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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

// サービスデータ - サービス内容
const serviceContents = [
  {
    id: "cleaning",
    title: "民泊清掃",
    description:
      "安さだけではなく、スピードと品質にもこだわった民泊清掃を是非ご利用ください。プロのスタッフによる徹底的な清掃サービスを提供します。",
    image: "/images/clean.png",
    href: "/services/cleaning",
  },
  {
    id: "hotel-linen",
    title: "ホテルレベルのリネンサービス",
    description:
      "高級ホテル品質の寝具とタオルを提供し、宿泊者の満足度を向上。定期的な交換と品質管理で清潔で上質な環境を維持します。リピーター獲得にも効果的です。",
    image: "/images/cleaning-service.png",
    href: "/services/hotel-linen",
  },
  {
    id: "waste-collection",
    title: "事業ゴミ回収サービス",
    description:
      "民泊運営時の大きな悩みであるゴミ処理を完全代行。自治体の分別ルールに沿った適切な処理で、近隣トラブルを防止し、オーナー様の手間を削減します。",
    image: "/images/gomi.png",
    href: "/services/waste-collection",
  },
]

// サービスデータ - プロフェッショナルサポート
const professionalServices = [
  {
    id: "permits",
    title: "各種申請許可サポート",
    description:
      "民泊営業に必要な各種許認可の申請をサポート。住宅宿泊事業法（民泊新法）の届出、旅館業法の許可申請など、複雑な手続きをサポートします。",
    image: "/images/permit-application-support.png",
    href: "/services/permits",
  },
]

// 民泊と旅館の比較データ
const comparisonData = [
  { item: "運営コスト", minpaku: "比較的低い", ryokan: "比較的高い" },
  { 
    item: <span>年間営業日数<span className="text-xs block text-gold-600">OPERATION DAYS</span></span>,
    minpaku: "180日以内",
    ryokan: "制限なし"
  },
  { 
    item: <span>収益性<span className="text-xs block text-gold-600">PROFITABILITY</span></span>,
    minpaku: "限定的",
    ryokan: "高い"
  },
  { item: "法律", minpaku: "住宅宿泊事業法", ryokan: "旅館業法" },
  { item: "住居専用地域での営業", minpaku: "可能", ryokan: "不可" },
  { item: "フロント設置義務", minpaku: false, ryokan: true },
  { item: "宿泊者名簿の作成", minpaku: true, ryokan: true }
]

export default function ServicesPage() {
  return (
    <LuxuryPageLayout>
      {/* 民泊と旅館業の比較セクション */}
      <LuxurySection 
        title="民泊業と旅館業の比較" 
        subtitle="BUSINESS MODELS"
      >
        {/* スタイリッシュな縦並び特徴セクション */}
        <div className="max-w-5xl mx-auto mb-12 lg:mb-20">
          <div className="border-b border-gray-100 py-8 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <h3 className="text-2xl md:text-3xl font-light md:w-1/3">民泊業の特徴</h3>
              <div className="md:w-2/3 relative">
                <div className="absolute top-0 left-0 w-1 h-12 bg-gold-600"></div>
                <p className="text-gray-600 pl-6 max-w-[36ch]">
                  住宅宿泊事業法に基づき運営され、年間180日以内の営業制限がありますが、
                  住居専用地域でも営業が可能で、比較的少ない初期投資で始められるのが特徴です。
                  外国人観光客を中心としたインバウンド需要の取り込みに適しています。
                </p>
              </div>
            </div>
            <div className="text-right">
              <Link 
                href="/services/minpaku" 
                className="inline-flex items-center text-gold-600 border-b border-gold-600 pb-1 hover:text-gold-700 hover:border-gold-700 transition-colors"
              >
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="py-8 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <h3 className="text-2xl md:text-3xl font-light md:w-1/3">旅館業の特徴</h3>
              <div className="md:w-2/3 relative">
                <div className="absolute top-0 left-0 w-1 h-12 bg-gold-600"></div>
                <p className="text-gray-600 pl-6 max-w-[36ch]">
                  旅館業法に基づき運営され、営業日数の制限はありませんが、
                  住居専用地域での営業はできず、設備基準も厳しいため初期投資が比較的高額になります。
                  安定した収益が見込め、日本人観光客やビジネス客など幅広い層にアプローチできます。
                </p>
              </div>
            </div>
            <div className="text-right">
              <Link 
                href="/services/ryokan" 
                className="inline-flex items-center text-gold-600 border-b border-gold-600 pb-1 hover:text-gold-700 hover:border-gold-700 transition-colors"
              >
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mb-20 max-w-5xl mx-auto">
          {/* Comparison Content */}
          <div className="space-y-6">
            {comparisonData.map((item, index) => (
              <ComparisonItem 
                key={index}
                item={item.item}
                minpaku={item.minpaku}
                ryokan={item.ryokan}
              />
            ))}
          </div>
          
          {/* Table Footer */}
          <div className="mt-12 bg-gold-50 rounded-lg p-8 text-center">
            <p className="text-gray-700 mb-6 text-lg">
              お客様の目的や状況に合わせて、最適なビジネスモデルをご提案いたします。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gold-600 text-white rounded-md hover:bg-gold-700 transition-colors"
            >
              無料相談を予約する
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </LuxurySection>

      {/* サービス内容セクション */}
      <LuxurySection
        title="サービス内容"
        subtitle="SERVICE CONTENTS"
        backgroundColor="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceContents.map((service) => (
            <div key={service.id} className="bg-white border border-gray-100 group hover:border-gold-200 transition-colors">
              <div className="relative h-40 overflow-hidden">
               <Image
                 src={service.image || "/placeholder.svg"}
                 alt={service.title}
                 fill
                 className="object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-105"
               />
             </div>
             <div className="p-5">
                <h3 className="text-xl font-light mb-4">{service.title}</h3>
                <div className="w-10 h-px bg-gold-600 mb-4"></div>
                <p className="text-gray-600 text-sm mb-6 max-w-[36ch] line-clamp-3">{service.description}</p>
                <Link 
                  href={service.href} 
                  className="text-sm inline-flex items-center text-gold-600 border-b border-gold-600 pb-1 group-hover:text-gold-700 group-hover:border-gold-700 transition-colors"
                >
                  詳細を見る
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </LuxurySection>

      {/* プロフェッショナルサポートサービスセクション */}
      <LuxurySection
        title={
          <>
            プロフェッショナル
            <br className="md:hidden" />
            サポートサービス
          </>
        }
        subtitle="PROFESSIONAL SUPPORT"
        backgroundColor="bg-gray-50"
      >
        <div className="grid grid-cols-1 px-4 md:px-0 max-w-4xl mx-auto">
          {professionalServices.map((service) => (
            <div key={service.id} className="bg-white border border-gray-100 group hover:border-gold-200 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 relative h-full min-h-[160px] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-2 p-5 md:p-8">
                  <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                  <div className="w-10 h-px bg-gold-600 mb-4"></div>
                  <p className="text-gray-600 mb-6 max-w-[36ch]">{service.description}</p>
                  <Link 
                    href={service.href} 
                    className="inline-flex items-center text-gold-600 border-b border-gold-600 pb-1 group-hover:text-gold-700 group-hover:border-gold-700 transition-colors"
                  >
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LuxurySection>

      {/* CTA セクション */}
      <LuxurySection backgroundColor="bg-black" textColor="text-white" dividerColor="bg-gold-600">
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            サービスに関する
            <br className="md:hidden" />
            お問い合わせ
          </h2>
          <div className="w-16 h-px bg-gold-600 mx-auto mb-8"></div>
          <p className="text-gray-400 mb-10 hidden md:block">
            各サービスの詳細や料金、導入方法についてのご質問は、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
          <p className="text-gray-400 mb-10 md:hidden">
            サービスの詳細や料金について、専門スタッフが丁寧にご対応いたします。
          </p>
          <Link
            href="/contact"
            className="fixed md:static bottom-4 left-4 right-4 md:inline-block bg-gold-600 md:bg-transparent text-white md:text-gold-600 px-10 py-4 border border-gold-600 hover:bg-transparent md:hover:bg-gold-600 hover:text-gold-600 md:hover:text-white transition-colors duration-300 z-50"
          >
            お問い合わせをする
          </Link>
        </div>
      </LuxurySection>
    </LuxuryPageLayout>
  )
}

