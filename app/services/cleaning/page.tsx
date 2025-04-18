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
      <section className="relative py-32 bg-gradient-to-b from-gold-50 via-white to-white overflow-hidden">
        {/* 装飾: 右上の円 */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gold-100 rounded-full opacity-30 blur-3xl"></div>
        {/* 装飾: 左下の円 */}
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-gold-100 rounded-full opacity-20 blur-3xl"></div>

        {/* デコレーション要素 */}
        {/* <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div> */}
        {/* <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div> */}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <div className="relative">
                    <span className="inline-block w-16 h-px bg-gold-400"></span>
                    <span className="inline-block w-3 h-3 rounded-full bg-gold-400 -mt-1 ml-1"></span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                  <span className="text-gold-500 font-normal">5つ星レビュー</span>を獲得する<br />民泊・ホテル清掃サービス
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl font-light leading-relaxed">
                  ゲスト満足度を最大化する徹底清掃。<br />ホテル品質のリネンと細やかな気配りで、最高の滞在体験を提供し、高評価レビュー獲得を強力にサポートします。
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">ホテルライクなリネンサプライ</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">清掃予定のシステム管理</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">ビフォー・アフター写真の撮影</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">消耗品補充</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">ゲストの忘れ物チェック</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-normal px-8 py-6 h-auto text-lg shadow-lg shadow-gold-300/20 hover:shadow-xl hover:shadow-gold-300/30 transition-all duration-300 border-none" asChild>
                  <Link href="/#contact">
                    無料相談を予約する
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl border border-gold-100">
              <Image
                src="/images/cleaning-service.png"
                alt="プロフェッショナルな民泊清掃スタッフによるベッドメイキング"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-gold-100">
                <h3 className="text-xl font-light text-gray-900">高評価レビューに<span className="text-gold-500">直結する</span>清掃</h3>
                <p className="text-sm text-gray-600">ゲストの満足度と予約数の向上につながる徹底したサービス</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- CleanNest Hokkaidoのこだわり Start ----- */}
      <section className="py-24 bg-gray-50 animate-fade-in-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              CleanNest Hokkaidoの<span className="text-gold-500 font-normal">こだわり</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              徹底した衛生管理と高品質なサービスを実現することで、ゲストの安心・満足を追求し、5つ星レビューを獲得します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* 1-1. ホテルライクなリネンサプライ */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gold-100 hover:shadow-xl smooth-transition transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gold-50 p-3 rounded-full ring-4 ring-gold-100">
                  <Star className="h-7 w-7 text-gold-500" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">1-1. ホテルライクなリネンサプライ</h3>
              </div>
              <div className="space-y-6 pl-4 border-l-2 border-gold-200 ml-5">
                <div className="relative pl-8">
                  <CheckSquare className="absolute left-0 top-1 h-5 w-5 text-gold-400" />
                  <h4 className="font-medium text-gray-800 mb-1">高品質リネンの提供</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">専門のリネン業者と連携し、布団、ベッドリネン、枕カバーなどすべての寝具をホテル品質に厳選。</p>
                </div>
                <div className="relative pl-8">
                  <ShieldCheck className="absolute left-0 top-1 h-5 w-5 text-gold-400" />
                  <h4 className="font-medium text-gray-800 mb-1">衛生管理の徹底</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">民泊施設でありがちな再利用洗濯ではなく、常に清潔な状態を保つため、新品または高品質なクリーニング済みリネンを使用。</p>
                </div>
                <div className="relative pl-8">
                  <BedDouble className="absolute left-0 top-1 h-5 w-5 text-gold-400" />
                  <h4 className="font-medium text-gray-800 mb-1">快適な睡眠環境の実現</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">インバウンド旅行者に、ホテルと同等の快適さを提供し、口コミ評価の向上に直結させます。</p>
                </div>
              </div>
            </div>

            {/* 1-2. 徹底した清掃管理 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gold-100 hover:shadow-xl smooth-transition transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gold-50 p-3 rounded-full ring-4 ring-gold-100">
                  <Sparkles className="h-7 w-7 text-gold-500" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">1-2. 徹底した清掃管理</h3>
              </div>
              <div className="space-y-6 pl-4 border-l-2 border-gold-200 ml-5">
                 <div className="relative pl-8">
                   <Handshake className="absolute left-0 top-1 h-5 w-5 text-gold-400" />
                  <h4 className="font-medium text-gray-800 mb-1">専門業者との連携</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">民泊専用の清掃業者と手を組み、施設の細部にまで目を配った清掃を実施。</p>
                </div>
                <div className="relative pl-8">
                   <FileCheck className="absolute left-0 top-1 h-5 w-5 text-gold-400" />
                  <h4 className="font-medium text-gray-800 mb-1">定期メンテナンスと品質チェック</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">清掃後のチェックリストと現場確認を徹底することで、常に高い衛生基準を維持。</p>
                </div>
                <div className="relative pl-8">
                   <MessageSquare className="absolute left-0 top-1 h-5 w-5 text-gold-400" />
                  <h4 className="font-medium text-gray-800 mb-1">リアルタイムなフィードバック</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">迅速な報告体制により、清掃の不備や改善点があればすぐに対応可能にしています。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----- CleanNest Hokkaidoのこだわり End ----- */}

      {/* ----- 清掃予定のシステム管理 Start ----- */}
      <section className="py-24 bg-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              2. <span className="text-gold-500 font-normal">清掃予定のシステム管理</span>
            </h2>
            {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              デジタル管理で効率化と信頼性を確保します。
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 2-1 */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                  <Clock className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3 text-lg">一元管理システム</h4>
              <p className="text-gray-600 text-sm leading-relaxed">各施設のスケジュール、清掃箇所、担当清掃員の配置などすべてをデジタルで管理。</p>
            </div>
            {/* Card 2-2 */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-center mb-4">
                 <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                  <Share2 className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3 text-lg">自動スケジュール共有</h4>
              <p className="text-gray-600 text-sm leading-relaxed">清掃業者と情報をリアルタイムに共有することで、清掃忘れや遅延を未然に防止。</p>
            </div>
            {/* Card 2-3 */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center" style={{ animationDelay: '0.2s' }}>
               <div className="flex justify-center mb-4">
                 <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                  <ShieldCheck className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3 text-lg">予防的メンテナンス</h4>
              <p className="text-gray-600 text-sm leading-relaxed">システム上で点検項目を管理し、問題が発生する前に対応することで、常に清潔な状態をキープ。</p>
            </div>
          </div>
        </div>
      </section>
      {/* ----- 清掃予定のシステム管理 End ----- */}

      {/* ----- 民泊清掃の基本内容 Start ----- */}
      <section className="py-24 bg-gray-50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              3. <span className="text-gold-500 font-normal">民泊清掃の基本内容</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              ゲストが体験する空間の質は、細部に宿る美しさによって決まります。私たちの清掃は、単なる清潔さを超え、洗練された滞在体験を演出するための基盤です。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 3-1 */}
            <div className="p-6 bg-white rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center">
               <div className="flex justify-center mb-4">
                 <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                  <Camera className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3 text-lg">ビフォー・アフター写真</h4>
              <ul className="list-none space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><span className="font-semibold text-gold-700 block">透明性の確保:</span> 清掃前後の写真を撮影し、LINEグループ等でホストへ随時報告。</li>
                <li><span className="font-semibold text-gold-700 block">信頼の可視化:</span> 変化が一目で分かり、清掃品質を客観的に確認可能に。</li>
              </ul>
            </div>
            {/* Card 3-2 */}
            <div className="p-6 bg-white rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center" style={{ animationDelay: '0.1s' }}>
               <div className="flex justify-center mb-4">
                 <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                  <Sparkles className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3 text-lg">施設内清掃</h4>
              <ul className="list-none space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><span className="font-semibold text-gold-700 block">フロア・テーブル等:</span> 掃除機、ウェットシート等を活用し、汚れやホコリを除去。</li>
                <li><span className="font-semibold text-gold-700 block">整理整頓:</span> ゴミや物品を仕分け、整頓された状態に。</li>
              </ul>
            </div>
             {/* Card 3-3 */}
            <div className="p-6 bg-white rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center" style={{ animationDelay: '0.2s' }}>
               <div className="flex justify-center mb-4">
                 <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                  <Droplet className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3 text-lg">水回り徹底清掃</h4>
              <ul className="list-none space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><span className="font-semibold text-gold-700 block">細部クリーニング:</span> キッチン、洗面所、トイレ、バスルーム等を重点的に清掃。</li>
                <li><span className="font-semibold text-gold-700 block">衛生面の強化:</span> 体毛、洗剤残り、カビ発生を予防し、清潔な状態を維持。</li>
              </ul>
            </div>
             {/* Card 3-4 */}
            <div className="p-6 bg-white rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center" style={{ animationDelay: '0.3s' }}>
               <div className="flex justify-center mb-4">
                 <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                  <BedDouble className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3 text-lg">ベッドメイク</h4>
              <ul className="list-none space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><span className="font-semibold text-gold-700 block">整然とした寝室:</span> ホテルライクなリネンに交換し、プロの技術で美しく整えます。</li>
                <li><span className="font-semibold text-gold-700 block">細部へのこだわり:</span> 枕の配置やシワ取りなど、見た目も機能も追求。</li>
              </ul>
            </div>
             {/* Card 3-5 */}
            <div className="p-6 bg-white rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center" style={{ animationDelay: '0.4s' }}>
               <div className="flex justify-center mb-4">
                 <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                  <PackagePlus className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3 text-lg">消耗品補充</h4>
              <ul className="list-none space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><span className="font-semibold text-gold-700 block">定期チェック・補充:</span> トイレットペーパー、洗剤、アメニティ等を欠品前に補充。</li>
                <li><span className="font-semibold text-gold-700 block">安全な運用:</span> 予備も準備し、ゲストの不便を未然に防止。</li>
              </ul>
                  </div>
             {/* Card 3-6 */}
            <div className="p-6 bg-white rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center" style={{ animationDelay: '0.5s' }}>
               <div className="flex justify-center mb-4">
                 <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                  <ArchiveRestore className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3 text-lg">整理整頓</h4>
              <ul className="list-none space-y-2 text-gray-600 text-sm leading-relaxed">
                <li><span className="font-semibold text-gold-700 block">設備・備品の管理:</span> リモコン、カトラリー等を定位置に戻し、整然とした環境を維持。</li>
                </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ----- 民泊清掃の基本内容 End ----- */}

      {/* ----- トラブルへの対応 Start ----- */}
      <section className="py-24 bg-white animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              4. <span className="text-gold-500 font-normal">トラブルへの対応</span>
            </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              万が一の事態にも、迅速かつ丁寧に対応し、オーナー様とゲストの安心を守ります。
            </p>
          </div>
          {/* Card 4-1, 4-2 */} 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-gray-50 rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1">
                   <div className="flex items-start gap-4">
                    <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100 flex-shrink-0 mt-1">
                      <ShoppingBag className="h-6 w-6 text-gold-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-xl mb-3">ゲストの忘れ物</h4>
                      <ul className="list-none space-y-2 text-gray-600 text-sm leading-relaxed">
                        <li><span className="font-semibold text-gold-700">迅速な報告・保管:</span> 発見次第、速やかにホスト様へ連絡し、大切に保管します。</li>
                        <li><span className="font-semibold text-gold-700">安全な引渡し:</span> ホスト様の指示に従い、ゲストへの連絡体制を確立します。</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gray-50 rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
                   <div className="flex items-start gap-4">
                     <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100 flex-shrink-0 mt-1">
                      <ShieldAlert className="h-6 w-6 text-gold-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-xl mb-3">設備・備品の破損</h4>
                      <ul className="list-none space-y-2 text-gray-600 text-sm leading-relaxed">
                        <li><span className="font-semibold text-gold-700">発見時の即時対応:</span> 状況を写真撮影の上、速やかにホスト様へ報告します。</li>
                        <li><span className="font-semibold text-gold-700">補償サポート:</span> ゲストへの請求や保険適用など、迅速な修復・補償対応をサポートします。</li>
                </ul>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
      {/* ----- トラブルへの対応 End ----- */}

      {/* ----- 清掃品質がもたらす価値 Start ----- */}
      <section className="py-24 bg-gray-50 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              5. <span className="text-gold-500 font-normal">清掃品質がもたらす価値</span>
            </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              卓越した清潔さは、ゲスト満足度を高め、ビジネスの持続的な成長を加速させます。
            </p>
          </div>
           {/* Card 5-1, 5-2, 5-3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center">
                   <div className="flex justify-center mb-4">
                     <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                      <Star className="h-6 w-6 text-gold-600" />
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-3 text-lg">高評価レビュー獲得</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">クリーンな施設は高いレビューを生み、OTAでの評価や検索順位向上に直結します。</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center" style={{ animationDelay: '0.1s' }}>
                   <div className="flex justify-center mb-4">
                     <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                      <TrendingUp className="h-6 w-6 text-gold-600" />
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-3 text-lg">ビジネスの持続的成長</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">高い清掃品質の維持が、予約件数の増加と収益向上、安定経営へと繋がります。</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gold-100 shadow-md hover:shadow-lg smooth-transition transform hover:-translate-y-1 text-center" style={{ animationDelay: '0.2s' }}>
                   <div className="flex justify-center mb-4">
                     <div className="bg-gold-50 p-3 rounded-full ring-2 ring-gold-100">
                      <Award className="h-6 w-6 text-gold-600" />
              </div>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-3 text-lg">競争力の強化</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">高評価レビューは競合物件との差別化を促進し、インバウンド旅行客からの支持を獲得します。</p>
                </div>
              </div>
        </div>
      </section>
      {/* ----- 清掃品質がもたらす価値 End ----- */}

      {/* 民泊清掃のこだわりセクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">民泊清掃へのこだわり</h2>
            <p className="text-lg text-gray-600">
              清掃業務にこだわりを持ち、品質の高いクリーニングサービスを提供することで、
              ゲストの満足度を向上させます。
            </p>
              </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">清掃の基本理念</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">清潔で安全な空間の提供</p>
                    <p className="text-gray-600 text-sm mt-1">
                      ゲストに清潔で安全な空間を提供することで、快適な滞在と高評価を実現します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckSquare className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">細部へのこだわり</p>
                    <p className="text-gray-600 text-sm mt-1">
                      小さな汚れや傷も見逃さない細部へのこだわりが、高品質な清掃サービスの基本です。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">プロフェッショナリズム</p>
                    <p className="text-gray-600 text-sm mt-1">
                      専門的な知識と経験を持つスタッフによる、一貫した高品質のサービスを提供します。
                    </p>
                  </div>
                </div>
                </div>
              </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">清掃のプロセス</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Camera className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">ビフォー・アフター記録</p>
                    <p className="text-gray-600 text-sm mt-1">
                      清掃の前後で写真を撮影し、清掃品質の確認と透明性の確保を行います。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileCheck className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">チェックリストの活用</p>
                    <p className="text-gray-600 text-sm mt-1">
                      詳細なチェックリストに基づいて清掃を実施し、漏れのない徹底した清掃を実現します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">フィードバックの反映</p>
                    <p className="text-gray-600 text-sm mt-1">
                      オーナーやゲストからのフィードバックを積極的に取り入れ、サービス品質の向上に努めます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-24 bg-gradient-to-b from-white to-gold-50 relative animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gold-100">
            <div className="p-10 sm:p-12 relative">
              {/* 装飾 */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-50 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-50 rounded-tr-full"></div>
              
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-light mb-6 text-gray-900">
                  高品質な<span className="text-gold-500">清掃サービス</span>で<br />予約件数を増やしませんか？
                </h2>
                <p className="text-gray-600 mb-10 text-lg">
                  清潔な施設は高いレビューを生み、予約数と収益の向上につながります。<br />
                  CleanNest Hokkaidoの清掃サービスで、インバウンド旅行客からの支持を獲得しましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-normal px-8 py-6 h-auto text-lg shadow-lg shadow-gold-300/20 hover:shadow-xl hover:shadow-gold-300/30 transition-all duration-300 border-none" asChild>
                    <Link href="/#contact">
                      無料相談を予約する
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-gold-200 text-gray-700 hover:bg-gold-50 font-normal px-8 py-6 h-auto text-lg" asChild>
                    <Link href="/services">
                      他のサービスを見る
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

