import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight, Clock, Shield, Users, Calendar, TrendingUp, Building, PieChart, Percent } from "lucide-react"
import { Metadata } from "next"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "CleanNest Hokkaido｜札幌・北海道のインバウンド特化型民泊運営代行",
  description: "札幌・北海道でインバウンド需要に特化した民泊運営の完全代行サービス。外国人観光客向け物件の多言語対応、清掃、24時間対応のゲストサポートで、オーナー様の収益を最大化します。北海道ナンバーワンを目指す民泊運営代行サービス。",
  openGraph: {
    title: "インバウンド特化型民泊運営代行 | CleanNest Hokkaido",
    description: "札幌・北海道でインバウンド需要に特化した民泊運営の完全代行サービス。外国人観光客向け運営代行で収益最大化。",
    images: [
      {
        url: "/images/sapporo-tv-tower-illumination.jpg",
        width: 1200,
        height: 630,
        alt: "CleanNest Hokkaido - 札幌・北海道のインバウンド特化型民泊運営代行",
      },
    ],
  },
  verification: {
    google: "7wjuzirx-E_57wKdFQm1AvCVc1p10USoBq671o5r2HM",
  },
}

// 自動化サービスの特徴
const automationFeatures = [
  {
    title: "自動チェックイン/アウト",
    icon: Clock,
    description: "24時間いつでもスマートにチェックイン/アウト可能",
  },
  {
    title: "AI本人確認認証",
    icon: Shield,
    description: "最新技術による安全で迅速な本人確認プロセス",
  },
  {
    title: "スマートロック",
    icon: Building,
    description: "鍵の受け渡し不要のセキュアなアクセス管理",
  },
  {
    title: "自動集客＆予約",
    icon: Users,
    description: "世界中からの予約を自動で一元管理",
  },
  {
    title: "リネン付き清掃代行",
    icon: Calendar,
    description: "ホテル品質の清掃サービスを自動スケジューリング",
  },
  {
    title: "レポートの定期送付",
    icon: PieChart,
    description: "収益と稼働率の詳細分析レポートを定期配信",
  }
];

// サービス項目を詳細な説明付きで定義
const serviceItems = [
  {
    title: "宿泊予約管理",
    description: "複数予約サイトを一元管理し、予約状況を最適化。料金設定の自動調整で収益を最大化します。",
    icon: Calendar
  },
  {
    title: "施設清掃",
    description: "ホテル品質の清掃サービスを提供。リネン交換からアメニティ補充まで、ゲスト満足度向上を徹底します。",
    icon: Users
  },
  {
    title: "物件企画",
    description: "物件のコンセプト設計から内装デザイン、備品選定まで、集客力の高い魅力的な空間づくりをサポート。",
    icon: Building
  },
  {
    title: "リノベーション",
    description: "民泊に最適な間取りや設備へのリノベーション提案。コストと収益性を考慮した効果的な改修プランをご提案。",
    icon: TrendingUp
  },
  {
    title: "コンサルティング",
    description: "運営戦略の立案から収益シミュレーション、税務相談まで、専門家による総合的なコンサルティングを提供。",
    icon: PieChart
  },
  {
    title: "シミュレーション",
    description: "地域特性や季節変動を考慮した精緻な収支シミュレーション。投資判断や運営計画の策定を強力にサポート。",
    icon: Percent
  },
  {
    title: "物件売買＆賃貸契約",
    description: "民泊運営に適した物件の売買・賃貸仲介。法的リスクを回避し、安全な契約締結までトータルサポート。",
    icon: Building
  }
];

// 選ばれる4つの魅力
const advantages = [
  {
    title: "即対応",
    description: "お客様の時間を最優先し、電話・対面で迅速な対応を実施",
    icon: Clock
  },
  {
    title: "分析力",
    description: "市場調査やアンケート調査によってリスクとリターンを数値化",
    icon: TrendingUp
  },
  {
    title: "企画力",
    description: "ターゲットとなるインバウンド市場に合わせた規格化と複数プランの提案",
    icon: PieChart
  },
  {
    title: "拡張性",
    description: "ICTを活用した豊富な拡張性と自社サイトでのダイレクト予約システム",
    icon: Percent
  }
];

// 利用の流れ
const process = [
  {
    step: "01",
    title: "無料相談",
    description: "お客様のニーズや物件の状況をヒアリングし、最適なプランをご提案します。"
  },
  {
    step: "02",
    title: "プラン選定",
    description: "FEPとWSPの中から、お客様の物件と目標に最適なプランをお選びいただきます。"
  },
  {
    step: "03",
    title: "準備・設定",
    description: "物件の写真撮影、リスティング作成、システム設定など、運営に必要な準備を行います。"
  },
  {
    step: "04",
    title: "オープン",
    description: "予約受付開始。最適な価格設定と世界中からの集客でスムーズなスタートを支援します。"
  }
];

// ニュース記事
const news = [
  {
    date: "2025.04.20",
    title: "民泊運営代行サービス『CleanNest Hokkaido』はじめました。",
    link: "/news/service-launch" // 仮のリンク
  },
  {
    date: "2025.04.21",
    title: "新規住宅宿泊事業者（民泊オーナー）を募集開始します。",
    link: "/news/owner-recruitment-start" // 仮のリンク
  },
  {
    date: "2025.04.21",
    title: "空室対策として民泊転貸可の不動産物件を募集します。",
    link: "/news/property-recruitment-start" // 仮のリンク
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. スライダー（キャッチーなバナー） - 高級感あるデザイン */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Image Slider - Static version for now, would need a client component for actual slider */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sapporo-tv-tower-illumination.jpg"
            alt="Premium vacation rental management in Hokkaido"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl mx-auto sm:mx-0">
            <div className="inline-block px-4 py-1 bg-gold-500/20 border border-gold-400 rounded-full text-gold-300 mb-6">
              <p className="text-xs sm:text-sm tracking-wide">地域貢献と収益性の両立を実現</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6">
              インバウンド専門民泊<br />
              <span className="relative inline-block font-normal">
                運営代行
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-px bg-gold-500"></span>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white font-light mb-6 leading-relaxed">
              眠っている不動産資産を<span className="text-gold-400 font-normal">北海道の魅力を伝える拠点</span>に。
              <span className="hidden md:inline">
                {" "}投資としての合理性と地域への貢献を両立させる、新しい不動産活用の形をご提案します。
              </span>
            </p>
            
            <ul className="mb-8 space-y-2 text-sm sm:text-base">
              <li className="flex items-center text-white/90">
                <div className="w-5 h-5 rounded-full border border-gold-400 flex-shrink-0 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                </div>
                <span>空き家の有効活用で地域活性化に貢献</span>
              </li>
              <li className="flex items-center text-white/90">
                <div className="w-5 h-5 rounded-full border border-gold-400 flex-shrink-0 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                </div>
                <span>安定した収益で資産価値を最大化</span>
              </li>
              <li className="flex items-center text-white/90">
                <div className="w-5 h-5 rounded-full border border-gold-400 flex-shrink-0 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                </div>
                <span>管理の手間なく北海道の魅力を世界に発信</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg tracking-wide"
              >
                無料相談はこちら
              </Link>
              
              <Link 
                href="/about"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 text-base sm:text-lg tracking-wide"
              >
                私たちの想い
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/10 to-transparent z-0 pointer-events-none hidden sm:block"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-0 pointer-events-none"></div>
      </section>

      {/* 2. CleanNestの想いとコンセプト */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500 mb-3">OUR PHILOSOPHY</p>
              <h2 className="text-4xl font-light text-gray-900 mb-10 leading-tight">
                CleanNest Hokkaidoが目指す<br />
                <span className="font-medium">3つのコアバリュー</span>
          </h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center mr-6">
                    <span className="text-gold-500 font-medium">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">不動産収益の「最大化」と価値「向上」</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="hidden md:inline">単なる賃貸収入を超え、民泊運営による<span className="font-semibold text-gray-800">高収益化</span>と、将来的な<span className="font-semibold text-gray-800">不動産価値の向上</span>を実現します。データに基づいた戦略で、オーナー様の資産を最大限に活かします。</span>
                      <span className="md:hidden text-base">民泊運営で収益を最大化し、不動産価値の向上を実現。</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center mr-6">
                    <span className="text-gold-500 font-medium">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">北海道の魅力を「世界に発信」</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="hidden md:inline">オーナー様の物件が、世界中のゲストにとって北海道の魅力を体験する<span className="font-semibold text-gray-800">特別な拠点</span>となります。最高の滞在体験を提供し、良い口コミを通じて北海道ブランドを高めます。</span>
                      <span className="md:hidden text-base">世界中のゲストに北海道の魅力を伝える特別な拠点を構築。</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center mr-6">
                    <span className="text-gold-500 font-medium">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">インバウンド客を通じた「地方創生」</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="hidden md:inline">物件の活用が、インバウンド旅行客の誘致と<span className="font-semibold text-gray-800">地域経済の活性化</span>に直結します。オーナー様と共に、北海道の持続可能な未来と発展に貢献します。</span>
                      <span className="md:hidden text-base">インバウンド観光客の誘致で地域経済の活性化を実現。</span>
          </p>
        </div>
                </div>
              </div>
              
              <div className="mt-12">
                <Link 
                  href="/about"
                  className="inline-flex items-center text-black border-b border-gold-500 pb-1 hover:border-gold-600 transition-colors group"
                >
                  CleanNest Hokkaidoについて詳しく見る
                  <ArrowRight className="ml-2 h-4 w-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px]">
              {/* 画像コンテナ - 3つの画像を配置 */}
              {/* 画像1: 富良野 (メイン、背面) */}
              <div className="absolute inset-0 overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src="/images/hurano.png"
                  alt="北海道 富良野の美しい風景"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* 画像2と3はmd以上で表示 */}
              <div className="hidden md:block">
                {/* 画像2: スキー (前面、右下) */}
                <div className="absolute bottom-8 right-8 lg:bottom-[-5%] lg:right-[-5%] w-7/12 overflow-hidden rounded-lg shadow-lg border-4 border-white z-10 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/images/ski.png"
                      alt="北海道でのスキー体験"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* 画像3: 着物 (前面、左下) */}
                <div className="absolute bottom-16 left-8 lg:bottom-[-8%] lg:left-[-3%] w-5/12 overflow-hidden rounded-lg shadow-lg border-4 border-white z-20 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/kimono-experience.png"
                      alt="北海道での着物文化体験"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              
              {/* 装飾的な要素 */}
              {/* <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold-400 rounded-sm z-10"></div> */}
              {/* <div className="absolute -top-3 -left-3 w-24 h-24 bg-gold-50 rounded-sm z-0"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* 3. 新着情報（NEWS） */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full px-4 sm:w-[90%] md:w-[80%] mx-auto">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500 mb-2">LATEST NEWS</p>
              <h2 className="text-4xl font-light text-gray-900">News</h2>
            </div>

            {news.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                {news.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <Link href={item.link} className="block p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <time className="text-sm text-gray-500 sm:w-32 flex-shrink-0">
                          {item.date}
                        </time>
                        <h3 className="text-lg font-medium text-gray-900 hover:text-gold-600 transition-colors break-words">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 px-6 bg-white rounded-lg shadow-md border border-gray-200">
                <p className="text-gray-500">ニュース・お知らせは現在準備中です。今しばらくお待ちください。</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. 民泊・旅館業に関するワンストップ相談サービス */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500 mb-3">SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              民泊・旅館業に関する<br />
              <span className="font-medium">ワンストップ相談サービス</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              CleanNest Hokkaidoでは、民泊・旅館業に関するあらゆるご相談に対応する
              総合サポート体制を整えています。初めての方でも安心してご利用いただけます。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-16">
            {serviceItems.map((service, index) => (
              <div key={index} className="group bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-gold-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gold-50 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-gold-100 transition-colors">
                    <service.icon className="h-10 w-10 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gold-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <div className="max-w-3xl mx-auto mb-10 border-t border-gray-200 pt-10">
              <p className="text-gray-600 mb-10">
                独自のノウハウと専門的な知識で、オーナー様の課題を解決します。<br />
                まずはご相談ください。
              </p>
            </div>
            <Link 
              href="/services"
              className="inline-block px-10 py-4 bg-gold-500 text-white hover:bg-gold-600 transition-colors text-lg shadow-md"
            >
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 5. アイコン＆テキストで伝える自動化サービス */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-400 mb-3">AUTOMATION</p>
            <h2 className="text-4xl font-light mb-8">
              完全自動化された<br />
              <span className="font-medium">次世代の民泊運営</span>
            </h2>
            <p className="text-gray-300">
              最新のテクノロジーを駆使し、チェックインからチェックアウトまで
              完全に自動化された民泊運営を実現します。オーナー様の手間を最小限に、
              収益を最大限に。
            </p>
              </div>
              
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center mr-5">
                  <feature.icon className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CleanNest Hokkaidoが選ばれる4つの魅力 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500 mb-3">WHY CHOOSE US</p>
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              CleanNest Hokkaidoが<br />
              <span className="font-medium">選ばれる4つの魅力</span>
            </h2>
                </div>
                
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="border border-gray-200 p-6 md:p-8 hover:border-gold-500 transition-colors text-center">
                <div className="flex justify-center mb-6">
                  <advantage.icon className="h-12 w-12 text-gold-500" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ご利用までの流れ */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500 mb-3">PROCESS</p>
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              ご利用までの流れ
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              <span className="hidden md:inline">
                初回相談から民泊オープンまで、スムーズなプロセスでサポートいたします。
                各ステップをプロフェッショナルチームが丁寧にガイドします。
              </span>
              <span className="md:hidden">
                初回相談から民泊オープンまで、専門家が丁寧にガイドします。
              </span>
            </p>
          </div>
          
          {/* プロセスカード - 新デザイン */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative mb-8 md:mb-0">
                  {/* 次のステップへの矢印 - モバイルでは表示しない */}
                  {index < process.length - 1 && (
                    <div className="absolute top-24 -right-4 w-8 h-8 transform rotate-45 border-t-2 border-r-2 border-gold-200 z-10 hidden md:block"></div>
                  )}
                  
                  {/* ステップカード */}
                  <div className={`bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-md border-t-4 ${index === 0 ? 'border-gold-500' : index === 1 ? 'border-gold-400' : index === 2 ? 'border-gold-300' : 'border-gold-200'} h-full transition-transform hover:translate-y-[-5px] relative`}>
                    {/* ステップ番号バッジ */}
                    <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold-500 flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-md">
                      {step.step}
                    </div>
                    
                    {/* ステップ内容 */}
                    <div className="text-center mt-3 space-y-4">
                      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mt-2">{step.title}</h3>
                      
                      {/* ステップアイコン */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gold-50 rounded-full flex items-center justify-center">
                        {index === 0 ? (
                          <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gold-500" />
                        ) : index === 1 ? (
                          <PieChart className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gold-500" />
                        ) : index === 2 ? (
                          <Building className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gold-500" />
                        ) : (
                          <Calendar className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gold-500" />
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-20">
            <div className="inline-flex items-center px-6 py-3 bg-gold-50 rounded-full mb-8">
              <Clock className="h-5 w-5 text-gold-500 mr-2" />
              <span className="text-gray-700">平均導入期間: 約2〜4週間</span>
            </div>
            <div className="block">
              <Link 
                href="/implementation-flow"
                className="inline-flex items-center text-black border-b border-gold-500 pb-1 hover:border-gold-600 transition-colors group"
              >
                導入プロセスの詳細を見る
                <ArrowRight className="ml-2 h-4 w-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
              </Link>
              </div>
            </div>
          </div>
        </section>

      {/* 8. 料金プラン（FEP＆WSPプラン）紹介 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500 mb-3">PRICING</p>
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              料金プラン
            </h2>
            <p className="text-gray-600">
              ニーズに合わせた2つのプランをご用意しています。
              初期費用から運用コストまで、わかりやすく透明性のある料金体系です。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border border-gray-200 p-6 md:p-10 lg:p-12 hover:border-gold-500 transition-all group">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                  <span className="md:hidden">
                    ファミリー・エクスペリエンス・<br />プラン
                  </span>
                  <span className="hidden md:inline">
                    ファミリー・エクスペリエンス・プラン
                  </span>
                </h3>
                <p className="text-xl text-gold-500 font-medium">FEP</p>
              </div>
              
              <div className="space-y-4 mb-8 md:mb-12">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <p className="text-gray-700">家族連れや長期滞在のゲストに最適</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <p className="text-gray-700">快適性と体験を重視した運営スタイル</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <p className="text-gray-700">安定した高い口コミ評価を実現</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <p className="text-gray-700">収益率と顧客満足度のバランスを重視</p>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/plans"
                  className="inline-block px-8 py-3 md:px-10 md:py-4 border border-gray-900 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 text-base md:text-lg w-full md:w-auto"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 md:p-10 lg:p-12 hover:border-gold-500 transition-all group">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                  ワーカー・スマート・プラン
                </h3>
                <p className="text-xl text-gold-500 font-medium">WSP</p>
              </div>
              
              <div className="space-y-4 mb-8 md:mb-12">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <p className="text-gray-700">ビジネス利用や短期滞在者向け</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <p className="text-gray-700">効率性と収益最大化を重視</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <p className="text-gray-700">自動化システムを最大限に活用</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                  </div>
                  <p className="text-gray-700">高稼働率・高単価を実現する戦略的な運営</p>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/plans"
                  className="inline-block px-8 py-3 md:px-10 md:py-4 border border-gray-900 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 text-base md:text-lg w-full md:w-auto"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border border-gold-200 p-6 md:p-10 lg:p-12 hover:border-gold-500 transition-all group bg-white shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block px-4 py-1 bg-gold-50 text-gold-600 rounded-full mb-4 font-medium">新プラン</div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
                ファミリー・エクスペリエンス<br/>旅館営業プラン
              </h3>
              <p className="text-xl text-gold-500 font-medium">初期費用 ¥300,000〜</p>
            </div>
            
            <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
              家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる旅館施設の運営をサポートします。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gold-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-4 text-center">プラン特徴</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-gray-700">伝統的な旅館スタイルの民泊運営</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-gray-700">日本文化体験プログラムの提供</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-gray-700">家族向けアクティビティの企画</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-gray-700">多言語対応サービス</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gold-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-4 text-center">サポート内容</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-gray-700">旅館業法許可取得サポート</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-gray-700">和風インテリアデザイン＆設置</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-gray-700">地域体験プログラムの開発</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-gray-700">専門チームによる継続サポート</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/plans/ryokan"
                className="inline-block px-8 py-3 md:px-10 md:py-4 bg-gold-500 text-white hover:bg-gold-600 transition-all duration-300 text-base md:text-lg shadow-md"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-8">
              まずは無料相談から<br />
              <span className="font-medium">お気軽にお問い合わせください</span>
          </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              民泊運営のプロフェッショナルが、お客様の物件に最適な
              運営プランをご提案いたします。
          </p>
          
          <Link 
            href="/contact"
              className="inline-block px-12 py-5 bg-gold-500 text-white hover:bg-gold-600 transition-colors text-xl tracking-wide shadow-lg"
          >
              無料相談を予約する
          </Link>
          </div>
        </div>
      </section>

      {/* オーナー募集リンク */}
      <div className="fixed bottom-24 right-8 z-50 hidden md:block">
        <Link 
          href="/owner-recruitment/"
          className="block p-4 bg-black text-white rounded-md shadow-lg hover:bg-gray-900 transition-colors transform hover:-translate-y-1 duration-300"
        >
          <p className="text-sm font-bold mb-1">所有不動産を民泊オーナーに転貸しませんか？</p>
          <p className="text-xs">-戸建てやアパートを貸し出して賃料UP-</p>
        </Link>
      </div>
    </main>
  )
}

