"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight, Clock, Shield, Users, Calendar, TrendingUp, Building, PieChart, Percent } from "lucide-react"
import { cn } from "@/lib/utils"
import { SakuraEffect } from "@/components/effects/sakura"
import { useState, useEffect } from "react"

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const heroImages = [
    {
      src: "/images/aoiike.webp",
      alt: "北海道 青い池の美しい風景 - CleanNest Hokkaido",
      title: "美瑛町の青い池",
      description: "神秘的な青い水面が魅力"
    },
    {
      src: "/images/yakei.webp", 
      alt: "北海道の美しい夜景 - CleanNest Hokkaido",
      title: "札幌の夜景",
      description: "きらめく街の明かり"
    },
    {
      src: "/images/rabender.webp",
      alt: "北海道 ラベンダー畑の風景 - CleanNest Hokkaido",
      title: "富良野のラベンダー畑",
      description: "紫の絨毯が広がる絶景"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 6000); // 6秒に延長

    return () => clearInterval(interval);
  }, [heroImages.length, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % heroImages.length
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. スライダー（キャッチーなバナー） - 高級感あるデザイン */}
      <section 
        className="relative h-screen flex items-center overflow-hidden group"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* リアルな桜エフェクトをヒーローセクションに適用 */}
        {/* <SakuraEffect /> */}
        
        {/* Enhanced background images with slide and parallax effects - すべてのデバイスで表示 */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={cn(
                "absolute inset-0 transition-all duration-1000 ease-in-out",
                index === currentImageIndex 
                  ? "opacity-100 scale-100" 
                  : index === (currentImageIndex - 1 + heroImages.length) % heroImages.length
                    ? "opacity-0 scale-105 -translate-x-full"
                    : "opacity-0 scale-95 translate-x-full"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
              
              {/* Image overlay info - PC/タブレットのみ表示 */}
              <div className={cn(
                "absolute bottom-20 left-8 text-white transition-all duration-700 delay-300 hidden md:block",
                index === currentImageIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <h3 className="text-xl font-medium mb-1">{image.title}</h3>
                <p className="text-sm text-white/80">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* スマホ用の追加オーバーレイ - より強いグラデーション */}
        <div className="absolute inset-0 z-5 md:hidden bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Enhanced image indicators - PC/タブレット */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative transition-all duration-500 ease-out",
                index === currentImageIndex 
                  ? "w-8 h-2" 
                  : "w-2 h-2 hover:w-4"
              )}
            >
              <div 
                className={cn(
                  "absolute inset-0 rounded-full transition-all duration-500",
                  index === currentImageIndex 
                    ? "bg-gold-400 shadow-lg shadow-gold-400/50" 
                    : "bg-white/50 hover:bg-white/70"
                )}
              />
              {index === currentImageIndex && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 animate-pulse" />
              )}
            </button>
          ))}
          
          {/* Play/Pause toggle */}
          <div className="ml-4 w-px h-4 bg-white/30" />
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-2 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isPlaying ? (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile image indicators - スマホ用 */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 md:hidden flex items-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "transition-all duration-300",
                index === currentImageIndex 
                  ? "w-6 h-2 bg-white rounded-full" 
                  : "w-2 h-2 bg-white/50 rounded-full"
              )}
            />
          ))}
        </div>

        {/* Mobile swipe area for navigation - スマホ用スワイプエリア */}
        <div className="absolute inset-0 z-20 md:hidden flex">
          <button
            onClick={prevSlide}
            className="flex-1 opacity-0"
            aria-label="前の画像"
          />
          <button
            onClick={nextSlide}
            className="flex-1 opacity-0"
            aria-label="次の画像"
          />
        </div>

        {/* Content Container - Full width with right-aligned content */}
        <div className="container relative z-10 mx-auto h-full flex justify-end items-center px-4 sm:px-6 lg:px-8">
          {/* Right-aligned content box */}
          <div className="w-full max-w-xl bg-black/30 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-md border-l-4 border-gold-500">
            <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-6 sm:w-8 h-[1px] bg-gold-400"></div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-gold-300 font-light">Innovation × Luxury</p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-none tracking-tight mb-4 sm:mb-6">
              <span className="block">インバウンド</span>
              <span className="block font-normal text-gold-300">民泊運営代行</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light mb-6 sm:mb-8 leading-relaxed">
              眠っている不動産資産を<span className="text-gold-300 font-normal">北海道の魅力を伝える拠点</span>に。
              <span className="hidden sm:inline">
                {" "}投資としての合理性と地域への貢献を両立させる新しい不動産活用の形。
              </span>
            </p>
            
            <div className="mb-8 sm:mb-10 space-y-2 sm:space-y-3">
              <div className="flex items-center text-white">
                <div className="w-1 h-1 bg-gold-400 rounded-full mr-3"></div>
                <span className="text-xs sm:text-sm text-white">空き家の有効活用で地域活性化に貢献</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-1 h-1 bg-gold-400 rounded-full mr-3"></div>
                <span className="text-xs sm:text-sm text-white">安定した収益で資産価値を最大化</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-1 h-1 bg-gold-400 rounded-full mr-3"></div>
                <span className="text-xs sm:text-sm text-white">管理の手間なく北海道の魅力を世界に発信</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href="/contact"
                className="group px-6 py-3 bg-gold-500 text-white hover:bg-gold-600 transition-all duration-300 text-sm font-medium tracking-wide flex items-center justify-center rounded-md shadow-md btn-mobile"
              >
                無料相談はこちら
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/about"
                className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 text-sm font-medium tracking-wide flex items-center justify-center rounded-md shadow-md border border-white/20 btn-mobile"
              >
                私たちの想い
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Left Decorative Element */}
        <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent to-transparent pointer-events-none">
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
            <div className="h-64 w-1 bg-gold-400/20"></div>
          </div>
        </div>
      </section>

      {/* 2. CleanNestの想いとコンセプト */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-500 mb-2 sm:mb-3">OUR PHILOSOPHY</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6 sm:mb-8 md:mb-10 leading-tight">
                CleanNest Hokkaidoが目指す<br />
                <span className="font-medium">3つのコアバリュー</span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-500 flex items-center justify-center mr-4 sm:mr-6">
                    <span className="text-gold-500 font-medium text-sm sm:text-base">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1 sm:mb-2">不動産収益の「最大化」と価値「向上」</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      <span className="md:hidden">民泊運営で収益を最大化し、不動産価値の向上を実現。</span>
                      <span className="hidden md:inline">単なる賃貸収入を超え、民泊運営による<span className="font-semibold text-gray-800">高収益化</span>と、将来的な<span className="font-semibold text-gray-800">不動産価値の向上</span>を実現します。データに基づいた戦略で、オーナー様の資産を最大限に活かします。</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-500 flex items-center justify-center mr-4 sm:mr-6">
                    <span className="text-gold-500 font-medium text-sm sm:text-base">02</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1 sm:mb-2">北海道の魅力を「世界に発信」</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      <span className="md:hidden">世界中のゲストに北海道の魅力を伝える特別な拠点を構築。</span>
                      <span className="hidden md:inline">オーナー様の物件が、世界中のゲストにとって北海道の魅力を体験する<span className="font-semibold text-gray-800">特別な拠点</span>となります。最高の滞在体験を提供し、良い口コミを通じて北海道ブランドを高めます。</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-500 flex items-center justify-center mr-4 sm:mr-6">
                    <span className="text-gold-500 font-medium text-sm sm:text-base">03</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1 sm:mb-2">インバウンド客を通じた「地方創生」</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      <span className="md:hidden">インバウンド観光客の誘致で地域経済の活性化を実現。</span>
                      <span className="hidden md:inline">物件の活用が、インバウンド旅行客の誘致と<span className="font-semibold text-gray-800">地域経済の活性化</span>に直結します。オーナー様と共に、北海道の持続可能な未来と発展に貢献します。</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-12">
                <Link 
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-gold-500 text-white hover:bg-gold-600 transition-all duration-300 rounded-md shadow-md group btn-mobile text-sm sm:text-base"
                >
                  CleanNest Hokkaidoについて詳しく見る
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] md:h-[600px] hidden lg:block">
              {/* 画像コンテナ - 3つの画像を配置 */}
              {/* 画像1: 富良野 (メイン、背面) */}
              <div className="absolute inset-0 overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src="/images/hurano.webp"
                  alt="北海道 富良野の美しい風景"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* 画像2と3はsm以上で表示 */}
              <div className="hidden sm:block">
                {/* 画像2: スキー (前面、右下) */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-[-5%] lg:right-[-5%] w-6/12 sm:w-7/12 overflow-hidden rounded-lg shadow-lg border-2 sm:border-4 border-white z-10 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="/images/ski.webp"
                      alt="北海道でのスキー体験"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* 画像3: 着物 (前面、左下) */}
                <div className="absolute bottom-12 left-6 sm:bottom-16 sm:left-8 lg:bottom-[-8%] lg:left-[-3%] w-4/12 sm:w-5/12 overflow-hidden rounded-lg shadow-lg border-2 sm:border-4 border-white z-20 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/kimono-experience.webp"
                      alt="北海道での着物文化体験"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 固定フローティングバナー */}
      <div className="fixed bottom-4 right-4 z-50 hidden md:block">
        <Link 
          href="/owner-recruitment"
          className="group block"
        >
          <div className="bg-white rounded-lg shadow-xl border-2 border-gold-300 p-4 hover:shadow-2xl transition-all duration-300 hover:scale-105 max-w-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wide text-gold-600 font-semibold bg-gold-100 px-2 py-1 rounded">OWNER募集</span>
              <Building className="w-5 h-5 text-gold-500" />
            </div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">
              所有不動産を<span className="text-gold-600">民泊転貸</span>
            </h4>
            <p className="text-xs text-gray-600 mb-3">
              賃料UP・空室リスク軽減
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <TrendingUp className="w-3 h-3 text-gold-500" />
                <Shield className="w-3 h-3 text-gold-500" />
                <Building className="w-3 h-3 text-gold-500" />
              </div>
              <div className="bg-gold-500 text-white px-3 py-1 rounded text-xs group-hover:bg-gold-600 transition-colors flex items-center">
                詳細
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* スマホ用フローティングバナー */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Link 
          href="/owner-recruitment"
          className="group block"
        >
          <div className="bg-gold-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              <span className="text-sm font-medium">OWNER募集</span>
            </div>
          </div>
        </Link>
      </div>

      {/* スマホ用クイックアクションメニュー */}
      <div className="fixed bottom-4 left-4 z-50 md:hidden">
        <div className="flex flex-col gap-3">
          {/* 電話ボタン */}
          <a 
            href="tel:011-827-7441"
            className="group flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>

          {/* メールボタン */}
          <a 
            href="mailto:info@cleannest-hokkaido.com"
            className="group flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          </a>

          {/* ホームボタン */}
          <Link 
            href="/"
            className="group flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </Link>

          {/* お問い合わせボタン */}
          <Link 
            href="/contact"
            className="group flex items-center justify-center w-12 h-12 bg-gold-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* 3. 新着情報（NEWS） */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full px-4 sm:w-[90%] md:w-[80%] mx-auto">
            <div className="mb-8 sm:mb-12">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-500 mb-1 sm:mb-2">LATEST NEWS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">News</h2>
            </div>

            {news.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                {news.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 last:border-b-0 p-4 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <time className="text-xs sm:text-sm text-gray-500 sm:w-32 flex-shrink-0 font-medium">
                        {item.date}
                      </time>
                      <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 break-words leading-relaxed">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12 px-4 sm:px-6 bg-white rounded-lg shadow-md border border-gray-200">
                <p className="text-sm sm:text-base text-gray-500">ニュース・お知らせは現在準備中です。今しばらくお待ちください。</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. 民泊・旅館業に関するワンストップ相談サービス */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-500 mb-2 sm:mb-3">SERVICES</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
              民泊・旅館業に関する<br />
              <span className="font-medium">ワンストップ相談サービス</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              CleanNest Hokkaidoでは、民泊・旅館業に関するあらゆるご相談に対応する
              総合サポート体制を整えています。初めての方でも安心してご利用いただけます。
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-y-12 lg:gap-y-16">
            {serviceItems.map((service, index) => (
              <div key={index} className="group bg-white rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-gold-300">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold-50 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:bg-gold-100 transition-colors">
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-gold-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3 sm:mb-4 group-hover:text-gold-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16 md:mt-20">
            <div className="max-w-3xl mx-auto mb-6 sm:mb-10 border-t border-gray-200 pt-6 sm:pt-10">
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-10">
                独自のノウハウと専門的な知識で、オーナー様の課題を解決します。<br className="hidden sm:block" />
                まずはご相談ください。
              </p>
            </div>
            <Link 
              href="/services"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gold-500 text-white hover:bg-gold-600 transition-colors text-base sm:text-lg shadow-md btn-mobile"
            >
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 5. アイコン＆テキストで伝える自動化サービス */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-500 mb-2 sm:mb-3">AUTOMATION</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-gray-900">
              完全自動化された<br />
              <span className="font-medium text-gold-500">次世代の民泊運営</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              最新のテクノロジーを駆使し、チェックインからチェックアウトまで
              完全に自動化された民泊運営を実現します。オーナー様の手間を最小限に、
              収益を最大限に。
            </p>
          </div>
              
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-500 flex items-center justify-center mr-4 sm:mr-5">
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CleanNest Hokkaidoが選ばれる4つの魅力 */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-500 mb-2 sm:mb-3">WHY CHOOSE US</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6 sm:mb-8">
              CleanNest Hokkaidoが<br />
              <span className="font-medium">選ばれる4つの魅力</span>
            </h2>
          </div>
                
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="border border-gray-200 p-4 sm:p-6 md:p-8 hover:border-gold-500 transition-colors text-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <advantage.icon className="h-10 w-10 sm:h-12 sm:w-12 text-gold-500" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-3 sm:mb-4">{advantage.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ご利用までの流れ */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-500 mb-2 sm:mb-3">PROCESS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6 sm:mb-8">
              ご利用までの流れ
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-10">
              <span className="md:hidden">
                初回相談から民泊オープンまで、スムーズにサポートします。
              </span>
              <span className="hidden md:inline">
                初回相談から民泊オープンまで、スムーズなプロセスでサポートいたします。
                各ステップをプロフェッショナルチームが丁寧にガイドします。
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md border-2 border-gray-100 hover:border-gold-300 transition-colors">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* 矢印（最後の要素以外） */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-gold-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white transition-all duration-300 rounded-lg shadow-lg shadow-gold-400/30 hover:shadow-xl hover:shadow-gold-400/40 group btn-mobile text-base sm:text-lg font-medium"
            >
              まずは無料相談から始める
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. 料金プラン（FEP＆WSPプラン）紹介 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-base sm:text-lg uppercase tracking-[0.2em] text-gold-500 mb-3">PRICING</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8">
              料金プラン
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              お客様のニーズに合わせた最適なプランをご用意しています。<br />
              各プランの詳細をご確認ください。
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {/* FEPプラン */}
            <div className="flex-1 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col">
              {/* プランヘッダー */}
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-8 text-center">
                <h3 className="text-2xl md:text-3xl font-medium mb-3">
                  ファミリー・エクスペリエンス
                </h3>
                <p className="text-xl font-bold">FEPプラン</p>
              </div>
              
              {/* プラン特徴 */}
              <div className="px-6 py-8 flex-grow hidden md:block">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700">家族連れや長期滞在のゲストに最適な運営スタイル</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700">快適性と体験価値を重視した設備とサービス</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700">安定した高評価レビューによるブランド構築</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700">長期的な収益と資産価値向上を重視</p>
                  </li>
                </ul>
              </div>
              
              {/* フッターとCTAボタン */}
              <div className="px-6 py-6 bg-gray-50 text-center">
                <Link 
                  href="/plans#plans"
                  className="inline-block px-8 py-3 bg-gold-500 text-white hover:bg-gold-600 transition-all duration-300 rounded shadow-md w-full font-medium text-lg"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            
            {/* WSPプラン */}
            <div className="flex-1 bg-white rounded-lg shadow-lg border-2 border-blue-400 overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col relative">
              {/* プランヘッダー */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-8 text-center">
                <h3 className="text-2xl md:text-3xl font-medium mb-3">
                  ワーカー・スマート
                </h3>
                <p className="text-xl font-bold">WSPプラン</p>
              </div>
              
              {/* プラン特徴 */}
              <div className="px-6 py-8 flex-grow bg-white hidden md:block">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-800 font-medium">ビジネス利用や短期滞在者向けの効率的な運営</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-800 font-medium">最大限の自動化システムで運営コストを最適化</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-800 font-medium">高稼働率と収益最大化を重視した運営戦略</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-800 font-medium">スマートロック活用で遠隔チェックイン対応</p>
                  </li>
                </ul>
              </div>
              
              {/* フッターとCTAボタン */}
              <div className="px-6 py-6 bg-blue-100 text-center">
                <Link 
                  href="/plans#plans"
                  className="inline-block px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded shadow-md w-full font-medium text-lg"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>
          
          {/* 料金シミュレーター案内 */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto mb-6 p-8 bg-gray-50 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">料金シミュレーターで概算費用を確認</h3>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                お持ちの物件の部屋数・運営スタイルに合わせた料金プランの概算費用を
                シミュレーションで確認できます。
              </p>
              <Link 
                href="/plans#simulator"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 rounded shadow-md font-medium text-lg"
              >
                料金シミュレーターを使う
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* 問い合わせCTA */}
          <div className="mt-8 text-center">
            <Link 
              href="/contact#contact-form"
              className="inline-flex items-center text-gray-900 hover:text-gold-600 transition-colors group text-lg md:text-xl"
            >
              詳しい料金についてはお問い合わせください
              <ChevronRight className="ml-1 h-4 w-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* オーナー募集セクション */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-500 mb-2 sm:mb-3">OWNER RECRUITMENT</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-gray-900">
                所有不動産を民泊オーナーに<br />
                <span className="font-medium text-gold-500">転貸しませんか？</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                戸建てやアパートを貸し出して賃料UP。空室リスクを軽減し、
                <span className="text-gold-500 font-medium">安定した収益</span>を実現します。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-gold-300 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-gold-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-900">賃料収入UP</h3>
                <p className="text-sm sm:text-base text-gray-600">通常の賃貸より高い収益が期待できます</p>
              </div>
              
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-gold-300 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-gold-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-900">空室リスク軽減</h3>
                <p className="text-sm sm:text-base text-gray-600">安定した入居者確保でリスクを最小化</p>
              </div>
              
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-gold-300 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Building className="h-6 w-6 sm:h-8 sm:w-8 text-gold-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-gray-900">管理不要</h3>
                <p className="text-sm sm:text-base text-gray-600">運営・管理は全てお任せください</p>
              </div>
            </div>
            
            <Link 
              href="/owner-recruitment"
              className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-medium transition-all duration-300 rounded-lg shadow-lg shadow-gold-400/30 hover:shadow-xl hover:shadow-gold-400/40 group btn-mobile text-base sm:text-lg"
            >
              オーナー募集の詳細を見る
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
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
            href="/contact#contact-form"
            className="inline-block px-12 py-5 bg-gold-500 text-white hover:bg-gold-600 transition-colors text-xl tracking-wide shadow-lg rounded-md"
          >
              無料相談を予約する
          </Link>
          </div>
        </div>
      </section>
    </main>
  )
}