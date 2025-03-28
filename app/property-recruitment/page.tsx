import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, Building, Users, Calendar } from "lucide-react"

export default function PropertyRecruitmentPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-darkgray-950 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    不動産収益を最大化する新しい選択肢
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    空室リスクを減らし、収益を向上させる革新的な不動産活用法。
                    一般賃貸・民泊・マンスリーを組み合わせた三位一体の運用で、 安定した高収益を実現します。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-[#1a365d] hover:bg-gray-200">
                    無料相談を予約する
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    詳細資料をダウンロード
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="不動産活用イメージ"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="w-full py-12 md:py-24 bg-darkgray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">オーナー様が直面する課題</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                多くの不動産オーナー様が直面している課題に、私たちは革新的な解決策を提案します。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 border rounded-xl bg-darkgray-800 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">入居者確保の難しさ</h3>
                <p className="text-muted-foreground">
                  人口減少や競合物件の増加により、長期入居者の確保が年々難しくなっています。空室期間が長引くと、大きな収益損失につながります。
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border rounded-xl bg-darkgray-800 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">家賃上昇の限界</h3>
                <p className="text-muted-foreground">
                  物価や管理コストは上昇しているにも関わらず、競争激化により家賃を上げることが難しく、利益率が低下しています。
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border rounded-xl bg-darkgray-800 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">資産活用の非効率性</h3>
                <p className="text-muted-foreground">
                  従来の賃貸経営では、不動産資産の潜在的な収益力を最大限に引き出せていない可能性があります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="w-full py-12 md:py-24 bg-darkgray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">三位一体の運用で収益最大化</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                一般賃貸・民泊・マンスリーを組み合わせた革新的な運用方法で、リスクを最小化しながら収益を最大化します。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col h-full border rounded-xl overflow-hidden bg-darkgray-800 shadow-sm">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=300&width=400" alt="一般賃貸" fill className="object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-4">一般賃貸</h3>
                  <p className="text-muted-foreground flex-1">
                    安定した収入源として、一部の物件は従来通りの長期賃貸契約で運用。
                    基本的な収益基盤を確保しながら、リスク分散を図ります。
                  </p>
                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <span className="font-medium">安定性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-medium">収益性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-full border rounded-xl overflow-hidden bg-darkgray-800 shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="民泊（ホテル営業）"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-4">民泊（ホテル営業）</h3>
                  <p className="text-muted-foreground flex-1">
                    観光シーズンや繁忙期には民泊として運用し、高単価での宿泊提供が可能。
                    一般賃貸の2〜3倍の収益を見込めるケースも多く、収益の最大化を図ります。
                  </p>
                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <span className="font-medium">安定性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-medium">収益性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-full border rounded-xl overflow-hidden bg-darkgray-800 shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="マンスリー契約"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-4">マンスリー契約</h3>
                  <p className="text-muted-foreground flex-1">
                    ビジネス利用や中期滞在者向けにマンスリー契約を提供。
                    一般賃貸より高単価で、民泊より安定した収入を確保できる中間的な選択肢です。
                  </p>
                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <span className="font-medium">安定性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-medium">収益性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-primary"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                      <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border rounded-xl bg-darkgray-800 shadow-sm">
              <h3 className="text-xl font-bold mb-4">三位一体運用のメリット</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">収益の最大化</h4>
                    <p className="text-sm text-muted-foreground">
                      需要と市場状況に応じて最適な運用方法を選択し、収益を最大化
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">リスクの分散</h4>
                    <p className="text-sm text-muted-foreground">
                      複数の運用方法を組み合わせることで、市場変動のリスクを分散
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">柔軟な対応力</h4>
                    <p className="text-sm text-muted-foreground">
                      季節や需要の変化に応じて運用方法を柔軟に切り替え可能
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="w-full py-8 bg-darkgray-900">
          <div className="container px-4 md:px-6">
            <div className="p-6 border border-yellow-200 rounded-xl bg-yellow-50">
              <h3 className="text-lg font-bold mb-2 text-yellow-800">重要なお知らせ</h3>
              <p className="text-sm text-yellow-700">
                民泊（ホテル営業）は、用途地域や建物の構造によって実施できない場合があります。
                また、各自治体の条例や規制に従う必要があります。詳細については、個別にご相談ください。
                当社では、法令に準拠した適切な運用方法をご提案いたします。
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="w-full py-12 md:py-24 bg-darkgray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">成功事例</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                実際に三位一体の運用方法を導入し、収益改善に成功したオーナー様の事例をご紹介します。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="border rounded-xl overflow-hidden bg-darkgray-800 shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="札幌市中央区のマンション"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">札幌市中央区のマンション</h3>
                  <p className="text-muted-foreground mb-4">
                    以前は一般賃貸のみで月収8万円だった物件が、三位一体運用により月平均15万円の収益に向上。
                    観光シーズンには民泊として運用し、オフシーズンはマンスリーと一般賃貸を組み合わせることで、
                    年間を通じて安定した高収益を実現しています。
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">収益向上率</span>
                    <span className="text-primary font-bold">+87.5%</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl overflow-hidden bg-darkgray-800 shadow-sm">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="小樽市の戸建て"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">小樽市の戸建て</h3>
                  <p className="text-muted-foreground mb-4">
                    空き家だった戸建てを民泊として活用。観光シーズンには1泊3万円で提供し、
                    オフシーズンはマンスリー契約で安定収入を確保。年間平均で月20万円の収益を
                    生み出す資産に生まれ変わりました。
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">遊休資産の活性化</span>
                    <span className="text-primary font-bold">月収20万円の創出</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-darkgray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">あなたの物件の可能性を最大限に</h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                不動産収益の最大化に向けた無料相談を実施中。
                あなたの物件に最適な運用方法をプロフェッショナルがご提案します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="bg-white text-[#1a365d] hover:bg-gray-200">
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

