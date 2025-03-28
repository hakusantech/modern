import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Building,
  Users,
  Calendar,
  PieChart,
  Percent,
  HelpCircle,
  ChevronDown,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OwnerRecruitmentPage() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-darkgray-950">
      {/* ヒーローセクション */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-darkgray-900 to-darkgray-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="ice" className="mb-4">
              オーナー様向け
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-snow-50 leading-tight">
              不動産収益を<span className="text-ice-400">最大化</span>する新しい選択肢
            </h1>
            <p className="text-xl text-snow-300 mb-8">
              空室リスクを減らし、収益を向上させる革新的な不動産活用法。
              一般賃貸・民泊・マンスリーを組み合わせた三位一体の運用で、安定した高収益を実現します。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-ice-600 hover:bg-ice-700 text-white" asChild>
                <Link href="/contact">
                  無料相談を予約する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-snow-100 border-darkgray-700 hover:bg-darkgray-800">
                資料をダウンロード
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 課題セクション */}
      <section className="py-16 bg-darkgray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-snow-50">オーナー様が直面する課題</h2>
            <p className="text-snow-300">
              多くの不動産オーナー様が直面している課題に、私たちは革新的な解決策を提案します。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="h-2 bg-gradient-to-r from-red-500 to-red-400"></div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-red-500/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-red-400" />
                  </div>
                  <CardTitle className="text-snow-50">入居者確保の難しさ</CardTitle>
                </div>
                <CardDescription className="text-snow-300">
                  人口減少や競合物件の増加により、長期入居者の確保が年々難しくなっています。
                  空室期間が長引くと、大きな収益損失につながります。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-400"></div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-amber-400" />
                  </div>
                  <CardTitle className="text-snow-50">家賃上昇の限界</CardTitle>
                </div>
                <CardDescription className="text-snow-300">
                  物価や管理コストは上昇しているにも関わらず、競争激化により家賃を上げることが難しく、
                  利益率が低下しています。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-400"></div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Building className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-snow-50">資産活用の非効率性</CardTitle>
                </div>
                <CardDescription className="text-snow-300">
                  従来の賃貸経営では、不動産資産の潜在的な収益力を最大限に引き出せていない可能性があります。
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* ソリューションセクション */}
      <section className="py-16 bg-darkgray-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-snow-50">三位一体の運用で収益最大化</h2>
            <p className="text-snow-300">
              一般賃貸・民泊・マンスリーを組み合わせた革新的な運用方法で、 リスクを最小化しながら収益を最大化します。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <Building className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-snow-50">一般賃貸</CardTitle>
                </div>
                <CardDescription className="text-center text-snow-300">
                  安定した収入源として、一部の物件は従来通りの長期賃貸契約で運用。
                  基本的な収益基盤を確保しながら、リスク分散を図ります。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-snow-200">安定性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-snow-200">収益性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-snow-50">民泊（ホテル営業）</CardTitle>
                </div>
                <CardDescription className="text-center text-snow-300">
                  観光シーズンや繁忙期には民泊として運用し、高単価での宿泊提供が可能。
                  一般賃貸の2〜3倍の収益を見込めるケースも多く、収益の最大化を図ります。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-snow-200">安定性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-snow-200">収益性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-snow-50">マンスリー契約</CardTitle>
                </div>
                <CardDescription className="text-center text-snow-300">
                  ビジネス利用や中期滞在者向けにマンスリー契約を提供。
                  一般賃貸より高単価で、民泊より安定した収入を確保できる中間的な選択肢です。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-snow-200">安定性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-snow-200">収益性</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-ice-500"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                      <span className="w-3 h-3 rounded-full bg-darkgray-700"></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader>
                <CardTitle className="text-snow-50 text-center">三位一体運用のメリット</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-ice-500/10 rounded-full flex items-center justify-center mb-3">
                      <TrendingUp className="h-6 w-6 text-ice-400" />
                    </div>
                    <h3 className="text-lg font-medium text-snow-100 mb-1">収益の最大化</h3>
                    <p className="text-sm text-snow-300">需要と市場状況に応じて最適な運用方法を選択し、収益を最大化</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-ice-500/10 rounded-full flex items-center justify-center mb-3">
                      <Shield className="h-6 w-6 text-ice-400" />
                    </div>
                    <h3 className="text-lg font-medium text-snow-100 mb-1">リスクの分散</h3>
                    <p className="text-sm text-snow-300">複数の運用方法を組み合わせることで、市場変動のリスクを分散</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-ice-500/10 rounded-full flex items-center justify-center mb-3">
                      <Calendar className="h-6 w-6 text-ice-400" />
                    </div>
                    <h3 className="text-lg font-medium text-snow-100 mb-1">柔軟な対応力</h3>
                    <p className="text-sm text-snow-300">季節や需要の変化に応じて運用方法を柔軟に切り替え可能</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 収益シミュレーション */}
      <section className="py-16 bg-darkgray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-snow-50">収益シミュレーション</h2>
            <p className="text-snow-300">
              従来の賃貸経営と三位一体運用の収益比較をご覧ください。
              実際の物件条件によって異なりますが、収益向上の可能性を示しています。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-red-500/10 p-3 rounded-lg">
                    <PieChart className="h-6 w-6 text-red-400" />
                  </div>
                  <CardTitle className="text-snow-50">従来の賃貸経営</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">月額家賃</span>
                    <span className="text-snow-100 font-medium">80,000円</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">年間収入</span>
                    <span className="text-snow-100 font-medium">960,000円</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">空室率</span>
                    <span className="text-snow-100 font-medium">10%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">実質年間収入</span>
                    <span className="text-snow-100 font-medium">864,000円</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">管理コスト</span>
                    <span className="text-snow-100 font-medium">-86,400円</span>
                  </div>
                  <div className="pt-4 border-t border-darkgray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-snow-100 font-bold">年間純収益</span>
                      <span className="text-xl text-red-400 font-bold">777,600円</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <PieChart className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-snow-50">三位一体運用</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">民泊収入（年間120日）</span>
                    <span className="text-snow-100 font-medium">720,000円</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">マンスリー収入（年間120日）</span>
                    <span className="text-snow-100 font-medium">400,000円</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">一般賃貸収入（年間120日）</span>
                    <span className="text-snow-100 font-medium">240,000円</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">年間総収入</span>
                    <span className="text-snow-100 font-medium">1,360,000円</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-snow-300">運営コスト</span>
                    <span className="text-snow-100 font-medium">-272,000円</span>
                  </div>
                  <div className="pt-4 border-t border-darkgray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-snow-100 font-bold">年間純収益</span>
                      <span className="text-xl text-green-400 font-bold">1,088,000円</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <Card className="bg-ice-600/10 border-ice-600/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-ice-500/20 p-3 rounded-full">
                    <Percent className="h-6 w-6 text-ice-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ice-400">収益向上率: 約40%</h3>
                    <p className="text-snow-300">
                      三位一体運用により、従来の賃貸経営と比較して年間収益が約40%向上する可能性があります。
                      実際の収益は物件の立地や条件によって異なります。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-16 bg-darkgray-950">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-snow-50">よくある質問</h2>
            <p className="text-snow-300">
              オーナー様からよくいただくご質問とその回答をまとめました。
              さらに詳しい情報は、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-ice-400" />
                    <CardTitle className="text-lg text-snow-50">
                      どのような物件が三位一体運用に適していますか？
                    </CardTitle>
                  </div>
                  <ChevronDown className="h-5 w-5 text-snow-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-snow-300">
                  立地条件が良く、観光地やビジネス街に近い物件が最適です。特に、札幌市中心部や観光地周辺、
                  交通アクセスの良い場所にある物件は三位一体運用の効果が高くなります。
                  また、設備が整っていて、内装が魅力的な物件ほど、民泊やマンスリー利用での高単価が期待できます。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-ice-400" />
                    <CardTitle className="text-lg text-snow-50">運営の手間はどれくらいかかりますか？</CardTitle>
                  </div>
                  <ChevronDown className="h-5 w-5 text-snow-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-snow-300">
                  CleanNest Hokkaidoでは、運営のすべてを代行するサービスを提供しています。
                  予約管理、ゲスト対応、清掃、メンテナンスなど、すべての業務を当社が担当しますので、
                  オーナー様は収益の報告を受け取るだけで済みます。
                  手間をかけずに収益を最大化したいオーナー様に最適なサービスです。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-ice-400" />
                    <CardTitle className="text-lg text-snow-50">法的な制約はありますか？</CardTitle>
                  </div>
                  <ChevronDown className="h-5 w-5 text-snow-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-snow-300">
                  民泊運営には住宅宿泊事業法（民泊新法）や旅館業法に基づく許可が必要です。
                  また、マンションの場合は管理規約で民泊が禁止されている場合もあります。
                  当社では、これらの法的手続きもサポートしており、適切な許可を取得した上で
                  合法的に運営できるようにいたします。詳細は個別にご相談ください。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-ice-400" />
                    <CardTitle className="text-lg text-snow-50">費用はどれくらいかかりますか？</CardTitle>
                  </div>
                  <ChevronDown className="h-5 w-5 text-snow-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-snow-300">
                  初期費用として、内装や設備の整備、写真撮影、リスティング作成などがあります。
                  運営費用は、売上の一定割合（通常15〜25%）をいただく成果報酬型です。
                  具体的な費用は物件の状況や必要なリノベーションの程度によって異なりますので、
                  まずは無料相談で詳細をお聞かせください。収益シミュレーションを作成し、
                  投資回収期間も含めた具体的なプランをご提案いたします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-16 bg-darkgray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-ice-900/50 to-darkgray-900 border-ice-700/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-ice-600/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-snow-50">不動産収益の最大化に向けた第一歩</h2>
                  <p className="text-snow-300 max-w-xl mx-auto mb-8">
                    あなたの物件の可能性を最大限に引き出すための無料相談を実施中。
                    物件の状況をお聞かせいただき、最適な運用プランをご提案します。
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-ice-600 hover:bg-ice-700 text-white" asChild>
                      <Link href="/contact">
                        無料相談を予約する
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-snow-100 border-ice-700/50 hover:bg-darkgray-800"
                    >
                      資料をダウンロード
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

