import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Clock, Star, Shield, Sparkles, Share2, ShieldCheck, Camera, Droplet, BedDouble, PackagePlus, ArchiveRestore, ShoppingBag, ShieldAlert, TrendingUp, Award, CheckSquare, FileCheck, MessageSquare, Handshake } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "民泊・ホテル清掃サポートサービス | CleanNest Hokkaido",
  description: "札幌・北海道でインバウンド対応の民泊・ホテル清掃サービスを提供。徹底した衛生管理と高品質なサービスでゲストの満足度を高め、高評価レビューの獲得に貢献します。ホテルライクなリネンサプライや水回りの徹底清掃など、専門スタッフがサポートします。",
  keywords: "民泊清掃,ホテル清掃,Airbnb清掃,インバウンド,外国人観光客,札幌,北海道,清掃サポート,ターンオーバー,リネン交換,アメニティ補充",
  openGraph: {
    title: "インバウンド対応の高品質民泊・ホテル清掃サービス | CleanNest Hokkaido",
    description: "札幌・北海道で外国人観光客向け民泊・ホテル施設の高品質清掃サービスを提供。5つ星評価獲得のための徹底的な清掃で、オーナー様の運営をサポートします。",
    images: [
      {
        url: "/images/cleaning-service.png",
        width: 1200,
        height: 630,
        alt: "CleanNest Hokkaido - インバウンド対応の民泊・ホテル清掃サービス",
      },
    ],
  },
}

export default function CleaningPage() {
  return (
    <div className="pt-16 bg-white antialiased">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gold-50/30 overflow-hidden">
        {/* ミニマルな装飾 */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-gold-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-gold-300 rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* 左側：テキストコンテンツ */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="inline-block">
                    <span className="text-sm uppercase tracking-[0.3em] text-gray-400 font-light">Cleaning Service</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-gray-900 leading-[0.9] tracking-tight">
                    <span className="block">Excellence in</span>
                    <span className="block text-gold-500 font-light">Hospitality</span>
                    <span className="block">Cleaning</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-light leading-relaxed tracking-wide">
                    5つ星レビューを獲得するための<br className="hidden sm:block" />
                    徹底した清掃とホスピタリティ
                  </p>
                </div>
                
                {/* ミニマルなCTA */}
                <div className="pt-8">
                  <Button 
                    className="bg-black text-white hover:bg-gray-800 px-12 py-4 h-auto text-base font-light tracking-wide transition-all duration-300 rounded-none border-none" 
                    asChild
                  >
                    <Link href="/contact">
                      無料相談を予約する
                      <ArrowRight className="ml-3 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* 右側：画像 */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-none overflow-hidden bg-gray-100">
                  <Image
                    src="/images/cleaning-service.png"
                    alt="プロフェッショナルな民泊清掃サービス"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01. サービス概要 */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* セクション番号とタイトル */}
            <div className="flex items-start gap-16 mb-20">
              <div className="flex-shrink-0">
                <span className="text-8xl md:text-9xl font-extralight text-gray-100 leading-none">01</span>
              </div>
              <div className="pt-4">
                <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6 tracking-tight">
                  Our Commitment
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
                  私たちのこだわりは、単なる清掃を超えた<br />
                  ホスピタリティの表現です。
                </p>
              </div>
            </div>
            
            {/* 2カラムグリッド */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* ホテルライクなリネンサプライ */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-0.5 h-full bg-gradient-to-b from-gold-400 via-gold-300 to-transparent"></div>
                  <div className="pl-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                        <Star className="h-5 w-5 text-gold-500" />
                      </div>
                      <h3 className="text-xl font-light text-gray-900 tracking-wide">ホテルライクなリネンサプライ</h3>
                    </div>
                    <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                      <p>専門のリネン業者と連携し、すべての寝具をホテル品質に厳選。</p>
                      <p>常に清潔な状態を保つため、新品または高品質なクリーニング済みリネンを使用。</p>
                      <p>インバウンド旅行者に、ホテルと同等の快適さを提供。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 徹底した清掃管理 */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-0.5 h-full bg-gradient-to-b from-gold-400 via-gold-300 to-transparent"></div>
                  <div className="pl-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-gold-500" />
                      </div>
                      <h3 className="text-xl font-light text-gray-900 tracking-wide">徹底した清掃管理</h3>
                    </div>
                    <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                      <p>民泊専用の清掃業者と連携し、施設の細部にまで配慮した清掃を実施。</p>
                      <p>清掃後のチェックリストと現場確認を徹底し、常に高い衛生基準を維持。</p>
                      <p>迅速な報告体制により、清掃の不備があればすぐに対応可能。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. システム管理 */}
      <section className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* セクション番号とタイトル */}
            <div className="flex items-start gap-16 mb-20">
              <div className="flex-shrink-0">
                <span className="text-8xl md:text-9xl font-extralight text-gray-200 leading-none">02</span>
              </div>
              <div className="pt-4">
                <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6 tracking-tight">
                  Digital Management
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
                  デジタル技術による<br />
                  効率的で透明性の高い管理システム
                </p>
              </div>
            </div>
            
            {/* 3カラムグリッド */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm mx-auto flex items-center justify-center">
                  <Clock className="h-6 w-6 text-gold-500" />
                </div>
                <h4 className="text-lg font-light text-gray-900 tracking-wide">一元管理システム</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  各施設のスケジュール、清掃箇所、担当者の配置をデジタルで一元管理
                </p>
              </div>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm mx-auto flex items-center justify-center">
                  <Share2 className="h-6 w-6 text-gold-500" />
                </div>
                <h4 className="text-lg font-light text-gray-900 tracking-wide">リアルタイム共有</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  清掃業者と情報をリアルタイムに共有し、清掃忘れや遅延を未然に防止
                </p>
              </div>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm mx-auto flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-gold-500" />
                </div>
                <h4 className="text-lg font-light text-gray-900 tracking-wide">予防的メンテナンス</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  点検項目を管理し、問題発生前に対応することで清潔な状態をキープ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. 清掃内容 */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* セクション番号とタイトル */}
            <div className="flex items-start gap-16 mb-20">
              <div className="flex-shrink-0">
                <span className="text-8xl md:text-9xl font-extralight text-gray-100 leading-none">03</span>
              </div>
              <div className="pt-4">
                <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6 tracking-tight">
                  Service Details
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
                  細部に宿る美しさによって決まる<br />
                  洗練された滞在体験の演出
                </p>
              </div>
            </div>
            
            {/* 6つのサービス項目 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: Camera,
                  title: "写真記録管理",
                  description: "清掃前後の写真を撮影し、透明性の確保と品質の可視化を実現"
                },
                {
                  icon: Sparkles,
                  title: "空間清掃",
                  description: "フロア・テーブル等の汚れやホコリを除去し、整理整頓された状態に"
                },
                {
                  icon: Droplet,
                  title: "水回り徹底清掃",
                  description: "キッチン、洗面所、トイレ、バスルーム等を重点的にクリーニング"
                },
                {
                  icon: BedDouble,
                  title: "ベッドメイキング",
                  description: "ホテルライクなリネンに交換し、プロの技術で美しく整備"
                },
                {
                  icon: PackagePlus,
                  title: "消耗品補充",
                  description: "トイレットペーパー、洗剤、アメニティ等を欠品前に補充"
                },
                {
                  icon: ArchiveRestore,
                  title: "整理整頓",
                  description: "リモコン、カトラリー等を定位置に戻し、整然とした環境を維持"
                }
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="relative p-8 bg-gray-50/50 hover:bg-gray-50 transition-all duration-300">
                    {/* 装飾的な要素 */}
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm mb-6 flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                        <service.icon className="h-5 w-5 text-gold-500" />
                      </div>
                      <h4 className="text-lg font-light text-gray-900 mb-4 tracking-wide">{service.title}</h4>
                      <p className="text-gray-600 font-light leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. トラブル対応 */}
      <section className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* セクション番号とタイトル */}
            <div className="flex items-start gap-16 mb-20">
              <div className="flex-shrink-0">
                <span className="text-8xl md:text-9xl font-extralight text-gray-200 leading-none">04</span>
              </div>
              <div className="pt-4">
                <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6 tracking-tight">
                  Emergency Response
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
                  万が一の事態にも迅速かつ丁寧に対応し<br />
                  オーナー様とゲストの安心を守ります
                </p>
              </div>
            </div>
            
            {/* 2カラムグリッド */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-0.5 h-full bg-gradient-to-b from-gold-400 via-gold-300 to-transparent"></div>
                <div className="pl-8">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex-shrink-0 flex items-center justify-center">
                      <ShoppingBag className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">ゲストの忘れ物</h3>
                      <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                        <p>発見次第、速やかにホスト様へ連絡し、大切に保管</p>
                        <p>ホスト様の指示に従い、ゲストへの連絡体制を確立</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-0 w-0.5 h-full bg-gradient-to-b from-gold-400 via-gold-300 to-transparent"></div>
                <div className="pl-8">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex-shrink-0 flex items-center justify-center">
                      <ShieldAlert className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">設備・備品の破損</h3>
                      <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                        <p>状況を写真撮影の上、速やかにホスト様へ報告</p>
                        <p>ゲストへの請求や保険適用など、迅速な修復・補償対応をサポート</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. 価値提案 */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* セクション番号とタイトル */}
            <div className="flex items-start gap-16 mb-20">
              <div className="flex-shrink-0">
                <span className="text-8xl md:text-9xl font-extralight text-gray-100 leading-none">05</span>
              </div>
              <div className="pt-4">
                <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-6 tracking-tight">
                  Business Value
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
                  卓越した清潔さが生み出す<br />
                  ビジネスの持続的な成長
                </p>
              </div>
            </div>
            
            {/* 3カラムグリッド */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-gray-50 mx-auto flex items-center justify-center">
                  <Star className="h-6 w-6 text-gold-500" />
                </div>
                <h4 className="text-lg font-light text-gray-900 tracking-wide">高評価レビュー獲得</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  クリーンな施設は高いレビューを生み、AirbnbやBooking.comでの評価向上に直結
                </p>
              </div>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-gray-50 mx-auto flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-gold-500" />
                </div>
                <h4 className="text-lg font-light text-gray-900 tracking-wide">持続的成長</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  高い清掃品質の維持が、予約件数の増加と収益向上、安定経営へと繋がる
                </p>
              </div>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-gray-50 mx-auto flex items-center justify-center">
                  <Award className="h-6 w-6 text-gold-500" />
                </div>
                <h4 className="text-lg font-light text-gray-900 tracking-wide">競争力強化</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  高評価レビューは競合物件との差別化を促進し、インバウンド旅行客からの支持を獲得
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* ミニマルな装飾 */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-gold-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-gold-300 rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight">
                <span className="block">始めませんか、</span>
                <span className="block text-gold-400">新しいスタンダード</span>
              </h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                CleanNest Hokkaidoの清掃サービスで<br className="hidden sm:block" />
                インバウンド旅行客からの支持を獲得し<br className="hidden sm:block" />
                ビジネスを次のレベルへ
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="bg-white text-black hover:bg-gray-100 px-12 py-4 h-auto text-base font-light tracking-wide transition-all duration-300 rounded-none border-none" 
                asChild
              >
                <Link href="/contact">
                  無料相談を予約する
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-12 py-4 h-auto text-base font-light tracking-wide transition-all duration-300 rounded-none" 
                asChild
              >
                <Link href="/services">
                  他のサービスを見る
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

