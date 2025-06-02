import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { PricingTable } from "./pricing-table"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PenTool, Search, Settings, HomeIcon, ShoppingBag, Server, Tablet, Lock, Video, CalendarDays, CreditCard, Phone } from "lucide-react"
import PricingSimulator from "./price-simulator"

// アイコンマッピング
const iconMap = {
  planning: <PenTool className="h-5 w-5" />,
  research: <Search className="h-5 w-5" />,
  operation: <Settings className="h-5 w-5" />,
  furniture: <HomeIcon className="h-5 w-5" />,
  consumables: <ShoppingBag className="h-5 w-5" />,
  accountSetup: <Server className="h-5 w-5" />,
  tablet: <Tablet className="h-5 w-5" />,
  smartLock: <Lock className="h-5 w-5" />,
  systemIntegration: <Settings className="h-5 w-5" />,
  hostSystem: <Server className="h-5 w-5" />,
  guestSystem: <Phone className="h-5 w-5" />,
  videoCall: <Video className="h-5 w-5" />,
  smartLockMonthly: <Lock className="h-5 w-5" />,
  bookingEngine: <CalendarDays className="h-5 w-5" />,
  bookingEngine1: <CalendarDays className="h-5 w-5" />,
  bookingEngine2: <CalendarDays className="h-5 w-5" />,
  paymentIntegration: <CreditCard className="h-5 w-5" />,
}

// ツールチップテキスト
const tooltipText = {
  planning: "宿泊施設の設計・インバウンド最適化のための企画料金です",
  research: "申請要件調査・消防法確認などの調査代行サービスです",
  operation: "宿泊施設の運営代行サービスです。OTA費用は別途かかります",
  furniture: "家具家電の仕入・設置サービスです",
  consumables: "消耗品の提供・交換サービスです",
  accountSetup: "アカウント作成、SC/PMS連携設定のセットアップ料金です",
  tablet: "チェックイン用端末（Lenovo 9〜11インチ）の提供です",
  smartLock: "ゲスト用連携キー（営業形態で異なる）の提供です",
  systemIntegration: "旅館の場合に必要なシステム連携費用です（施設単位）",
  hostSystem: "SCやPMS、各種管理機能やレポート機能などのシステム利用料です",
  guestSystem: "自動チェックイン/アウト、セルフチェックイン機能、本人確認機能などのシステム利用料です",
  videoCall: "本人確認のためのビデオ通話サービスです（旅館のみ必須）",
  smartLockMonthly: "AirHostとの連携利用料（OPELO）です",
  bookingEngine: "自社サイトなどに宿泊予約機能を搭載しOTAを介さず予約から決済まで行えるサービスです",
}

export default function PlansPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <div className="container py-2 text-sm">
          <div className="flex items-center gap-1 text-gray-500">
            <Link href="/" className="hover:text-gold-600 transition-colors">
              ホーム
            </Link>
            <span>•</span>
            <span>プラン説明</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-white py-20 overflow-hidden border-b border-gray-100">
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="ice" className="mb-4">
                CleanNest Hokkaido プラン
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 leading-tight">
                あなたに<span className="text-gold-600">最適な</span>プランを
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
                目的に合わせたカスタマイズプランで、北海道での滞在を最高の体験に。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white shadow-md" asChild>
                  <Link href="#plans">
                    プランを見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 追加サービス情報セクション */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 清掃・消耗品補充費 */}
              <Card className="bg-white border-gold-200 shadow-lg hover:border-gold-300 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-gold-500 mr-2"></span>
                    清掃・消耗品補充費（別途）
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-gold-500">•</span>
                      <span>清掃・補充費は、施設規模や稼働状況に応じて個別見積もりをいたします。</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gold-500">•</span>
                      <span>清掃は提携業者によるプロ仕様。リネン・タオル類もホテル品質で安心です。</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* 全プラン共通の標準サービス */}
              <Card className="bg-white border-gold-200 shadow-lg hover:border-gold-300 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-gold-500 mr-2"></span>
                    全プラン共通の標準サービス
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-gold-500">•</span>
                      <span>OTAアカウント運用（Airbnb / Booking.comなど）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gold-500">•</span>
                      <span>価格調整・最適化</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gold-500">•</span>
                      <span>ゲスト対応（多言語対応）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gold-500">•</span>
                      <span>スマートロック・無人チェックイン設定支援</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gold-500">•</span>
                      <span>予約管理・レビュー返信・問い合わせ対応</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gold-500">•</span>
                      <span>月次レポート提出（売上・稼働状況）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-gold-500">•</span>
                      <span>緊急時のトラブル対応（24時間対応）</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* プラン説明セクション */}
        <section id="plans" className="py-20 bg-white relative overflow-hidden">
          <div className="container relative">
            <div className="text-center mb-12">
              <Badge variant="ice" className="mb-4">料金プラン</Badge>
              <h2 className="text-3xl font-light mb-3 text-gray-900">料金プラン</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                お客様のニーズに合わせた最適なプランをご用意しています。 各プランの詳細をご確認ください。
              </p>
            </div>

            <div className="mb-16">
              <PricingTable />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container relative">
            <Card className="bg-white border-gold-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-900">プランに関するお問い合わせ</h2>
                  <p className="text-gray-600 max-w-xl mx-auto mb-8">
                    各プランの詳細や料金、カスタマイズについてのご質問は、お気軽にお問い合わせください。
                    専門スタッフがお客様のニーズに合わせた最適なプランをご提案いたします。
                  </p>
                  <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8 shadow-md" asChild>
                    <Link href="/contact">
                      お問い合わせをする
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 料金シミュレーターセクション */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <Badge variant="ice" className="mb-4">料金シミュレーション</Badge>
              <h2 className="text-3xl font-light mb-3 text-gray-900">料金シミュレーター</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                プランと営業形態による費用をシミュレーションできます
              </p>
              <PricingSimulator />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

