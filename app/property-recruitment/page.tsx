import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, Building, Users, Calendar } from "lucide-react"

export default function PropertyRecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                不動産収益を最大化する革新的な運用方法
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                CleanNest北海道の三位一体運用で、あなたの不動産の可能性を最大限に引き出します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600">
                  無料相談を予約する
                </Button>
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-50">
                  資料をダウンロード
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-6">
                  不動産オーナーが直面する課題
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-2 mt-1">
                      <span className="text-amber-600">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">収益の不安定さ</h3>
                      <p className="text-gray-600">
                        一般賃貸だけでは収益が限られ、空室リスクも高くなります。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-2 mt-1">
                      <span className="text-amber-600">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">家賃上昇の限界</h3>
                      <p className="text-gray-600">
                        物価や管理コストは上昇しているにも関わらず、競争激化により家賃を上げることが難しく、利益率が低下しています。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-2 mt-1">
                      <span className="text-amber-600">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">資産活用の非効率性</h3>
                      <p className="text-gray-600">
                        従来の賃貸経営では、不動産資産の潜在的な収益力を最大限に引き出せていない可能性があります。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Challenges"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                三位一体運用で収益を最大化
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                民泊・マンスリー・一般賃貸を組み合わせた革新的な運用方法で、
                不動産収益を最大限に引き出します。
              </p>
            </div>

            <div className="mt-12 p-6 border border-amber-200 rounded-xl bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">三位一体運用のメリット</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-50 p-2 mt-1">
                    <TrendingUp className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">収益の最大化</h4>
                    <p className="text-sm text-gray-600">
                      需要と市場状況に応じて最適な運用方法を選択し、収益を最大化
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-50 p-2 mt-1">
                    <Shield className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">リスクの分散</h4>
                    <p className="text-sm text-gray-600">
                      複数の運用方法を組み合わせることで、市場変動のリスクを分散
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-50 p-2 mt-1">
                    <Calendar className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">柔軟な対応力</h4>
                    <p className="text-sm text-gray-600">
                      季節や需要の変化に応じて運用方法を柔軟に切り替え可能
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="w-full py-8 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="p-6 border border-amber-200 rounded-xl bg-white">
              <h3 className="text-lg font-bold mb-2 text-gray-900">重要なお知らせ</h3>
              <p className="text-sm text-gray-600">
                民泊（ホテル営業）は、用途地域や建物の構造によって実施できない場合があります。
                また、各自治体の条例や規制に従う必要があります。詳細については、個別にご相談ください。
                当社では、法令に準拠した適切な運用方法をご提案いたします。
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">成功事例</h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl">
                実際に三位一体の運用方法を導入し、収益改善に成功したオーナー様の事例をご紹介します。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="border border-amber-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="札幌市中央区のマンション"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">札幌市中央区のマンション</h3>
                  <p className="text-gray-600 mb-4">
                    以前は一般賃貸のみで月収8万円だった物件が、三位一体運用により月平均15万円の収益に向上。
                    観光シーズンには民泊として運用し、オフシーズンはマンスリーと一般賃貸を組み合わせることで、
                    年間を通じて安定した高収益を実現しています。
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">収益向上率</span>
                    <span className="text-amber-600 font-bold">+87.5%</span>
                  </div>
                </div>
              </div>

              <div className="border border-amber-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="小樽市の戸建て"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">小樽市の戸建て</h3>
                  <p className="text-gray-600 mb-4">
                    空き家だった戸建てを民泊として活用。観光シーズンには1泊3万円で提供し、
                    オフシーズンはマンスリー契約で安定収入を確保。年間平均で月20万円の収益を
                    生み出す資産に生まれ変わりました。
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">遊休資産の活性化</span>
                    <span className="text-amber-600 font-bold">月収20万円の創出</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-amber-500 to-yellow-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">あなたの物件の可能性を最大限に</h2>
              <p className="max-w-[700px] text-white/90 md:text-xl">
                不動産収益の最大化に向けた無料相談を実施中。
                あなたの物件に最適な運用方法をプロフェッショナルがご提案します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                  無料相談を予約する
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  資料をダウンロード
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

