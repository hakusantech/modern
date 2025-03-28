import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import PricingSimulator from "./pricing-simulator"
import { PricingTable } from "./pricing-table"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PlansPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <div className="container py-2 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              ホーム
            </Link>
            <span>•</span>
            <span>プラン説明</span>
          </div>
        </div>

        {/* Hero Section - スタイリッシュなデザインに変更 */}
        <section className="bg-darkgray-900 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="ice" className="mb-4 px-3 py-1">
                CleanNest Hokkaido プラン
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-snow-50 leading-tight">
                あなたに<span className="text-ice-400">最適な</span>プランを
              </h1>
              <p className="text-xl text-snow-300 mb-8 max-w-2xl mx-auto">
                目的に合わせたカスタマイズプランで、北海道での滞在を最高の体験に。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-ice-600 hover:bg-ice-700 text-white" asChild>
                  <Link href="#plans">
                    プランを見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-snow-100 border-darkgray-700 hover:bg-darkgray-800"
                  asChild
                >
                  <Link href="#simulator">料金シミュレーション</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* プラン説明セクション */}
        <section id="plans" className="py-16 bg-darkgray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-snow-50">料金プラン</h2>
              <p className="text-snow-300 max-w-2xl mx-auto">
                お客様のニーズに合わせた最適なプランをご用意しています。 各プランの詳細をご確認ください。
              </p>
            </div>

            <div className="mb-16">
              <PricingTable />
            </div>

            <div className="mt-16 text-center">
              <Card className="bg-darkgray-800 border-darkgray-700 p-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-4 text-snow-50">カスタムプランも承ります</h3>
                <p className="text-snow-300 mb-6">
                  お客様の特別なニーズに合わせたカスタムプランをご提案いたします。
                  長期滞在、グループ旅行、特別なイベントなど、どんなご要望もお気軽にご相談ください。
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-snow-100 border-darkgray-600 hover:bg-darkgray-700"
                  asChild
                >
                  <Link href="/contact">
                    カスタムプランのご相談
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Simulator Section - 視認性を高めたデザイン */}
        <section id="simulator" className="py-20 bg-darkgray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <Badge variant="ice" className="mb-4 px-3 py-1">
                料金計算
              </Badge>
              <h2 className="text-3xl font-bold mb-3 text-snow-50">料金シミュレーション</h2>
              <p className="text-snow-300 max-w-xl mx-auto">
                ステップに沿って選択するだけで、簡単に料金を計算できます。
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <PricingSimulator />
            </div>
          </div>
        </section>

        {/* CTA Section - スタイリッシュなデザインに変更 */}
        <section className="py-16 bg-darkgray-950">
          <div className="container">
            <Card className="bg-gradient-to-br from-darkgray-800 to-darkgray-900 border-none shadow-xl overflow-hidden max-w-4xl mx-auto">
              <div className="absolute top-0 right-0 w-64 h-64 bg-ice-600/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-snow-50">プランに関するお問い合わせ</h2>
                  <p className="text-snow-300 max-w-xl mx-auto mb-8">
                    各プランの詳細や料金、カスタマイズについてのご質問は、お気軽にお問い合わせください。
                    専門スタッフがお客様のニーズに合わせた最適なプランをご提案いたします。
                  </p>
                  <Button size="lg" className="bg-ice-600 hover:bg-ice-700 text-white px-8" asChild>
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
      </main>
    </div>
  )
}

