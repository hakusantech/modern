import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Clock,
  FileText,
  Building,
  ShoppingCart,
  Smartphone,
  Users,
  Wrench,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowDown,
  Frown,
  Smile,
} from "lucide-react"

export default function ImplementationFlowPage() {
  return (
    <div className="flex flex-col min-h-screen bg-darkgray-950 text-snow-100">
      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <div className="container py-4 text-sm">
          <div className="flex items-center gap-1 text-snow-400">
            <Link href="/" className="hover:text-ice-400">
              ホーム
            </Link>
            <span>•</span>
            <span>導入の流れ</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-darkgray-950 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-snow-50">民泊・旅館運営の導入フロー</h1>
              <p className="text-xl text-snow-300 mb-8">
                民泊や旅館の運営を始めるには、多くの手続きや準備が必要です。
                一人で全てを行うのは大変な作業です。CleanNest Hokkaidoなら、
                その負担を大幅に軽減し、スムーズな運営をサポートします。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-ice-600 hover:bg-ice-700 text-white" asChild>
                  <Link href="#solution">
                    CleanNestのソリューションを見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-snow-100 border-darkgray-700 hover:bg-darkgray-800"
                  asChild
                >
                  <Link href="/#contact">無料相談を予約する</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* DIY Flow Section */}
        <section className="py-16 md:py-24 bg-darkgray-950">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/30 mb-4">
                <Frown className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-snow-50">一人で全てを行う場合</h2>
              <p className="text-xl text-snow-300">
                民泊や旅館の運営を一人で始めようとすると、多くの課題に直面します。
                時間、専門知識、人脈など、様々なリソースが必要となります。
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-darkgray-800"></div>

              {/* Step 1 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center mb-8">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-3 text-snow-50">物件選定と調査</h3>
                    <p className="text-snow-300 mb-4">
                      民泊や旅館に適した物件を見つけ、法規制や条例を調査する必要があります。
                      地域によって異なる規制や、建物の構造上の制約など、専門的な知識が必要です。
                    </p>
                    <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-red-400">課題</h4>
                          <ul className="text-sm text-red-300 space-y-1 mt-1">
                            <li>• 地域ごとに異なる法規制の理解</li>
                            <li>• 物件の適性評価に専門知識が必要</li>
                            <li>• 収益性の正確な予測が困難</li>
                            <li>• 調査に膨大な時間がかかる</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex items-center justify-center">
                    <Building className="h-24 w-24 text-red-500/50" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center mb-8">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2">
                    <h3 className="text-2xl font-bold mb-3 text-snow-50">許認可申請と書類準備</h3>
                    <p className="text-snow-300 mb-4">
                      民泊新法（住宅宿泊事業法）や旅館業法に基づく申請手続きは複雑です。
                      消防法や建築基準法など、関連する法令への対応も必要となります。
                    </p>
                    <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-red-400">課題</h4>
                          <ul className="text-sm text-red-300 space-y-1 mt-1">
                            <li>• 複雑な申請書類の作成</li>
                            <li>• 行政機関とのやり取りに時間がかかる</li>
                            <li>• 申請が却下されるリスク</li>
                            <li>• 法改正への対応</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <FileText className="h-24 w-24 text-red-500/50" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center mb-8">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-3 text-snow-50">内装設計と家具調達</h3>
                    <p className="text-snow-300 mb-4">
                      ゲストに喜ばれる内装設計と、適切な家具・家電の選定が必要です。
                      コストと品質のバランスを考慮しながら、魅力的な空間を作る必要があります。
                    </p>
                    <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-red-400">課題</h4>
                          <ul className="text-sm text-red-300 space-y-1 mt-1">
                            <li>• デザインセンスが必要</li>
                            <li>• 家具・家電の選定と調達に時間がかかる</li>
                            <li>• 予算管理が難しい</li>
                            <li>• 搬入・設置の手配</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex items-center justify-center">
                    <ShoppingCart className="h-24 w-24 text-red-500/50" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center mb-8">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2">
                    <h3 className="text-2xl font-bold mb-3 text-snow-50">予約システム構築</h3>
                    <p className="text-snow-300 mb-4">
                      Airbnbなどの予約サイトへの登録や、自社サイトの構築、予約管理システムの導入など、
                      ITシステムの構築が必要です。
                    </p>
                    <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-red-400">課題</h4>
                          <ul className="text-sm text-red-300 space-y-1 mt-1">
                            <li>• 複数の予約サイトの管理が煩雑</li>
                            <li>• システム連携の技術的知識が必要</li>
                            <li>• ダブルブッキングのリスク</li>
                            <li>• 料金設定の最適化が難しい</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Smartphone className="h-24 w-24 text-red-500/50" />
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center mb-8">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold">
                    5
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-3 text-snow-50">スタッフ採用と教育</h3>
                    <p className="text-snow-300 mb-4">
                      清掃スタッフやフロントスタッフの採用、教育が必要です。
                      特に外国人ゲスト対応のための語学力や、おもてなしの心を育てることが重要です。
                    </p>
                    <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-red-400">課題</h4>
                          <ul className="text-sm text-red-300 space-y-1 mt-1">
                            <li>• 良質なスタッフの確保が難しい</li>
                            <li>• 教育・研修に時間がかかる</li>
                            <li>• シフト管理が煩雑</li>
                            <li>• 人件費の負担</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 flex items-center justify-center">
                    <Users className="h-24 w-24 text-red-500/50" />
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center mb-8">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold">
                    6
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2">
                    <h3 className="text-2xl font-bold mb-3 text-snow-50">運営と保守管理</h3>
                    <p className="text-snow-300 mb-4">
                      日々の運営や、設備の保守管理、トラブル対応など、継続的な業務が発生します。
                      24時間365日の対応が求められることもあります。
                    </p>
                    <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-red-400">課題</h4>
                          <ul className="text-sm text-red-300 space-y-1 mt-1">
                            <li>• 24時間対応の負担</li>
                            <li>• 設備トラブルへの迅速な対応</li>
                            <li>• 清掃品質の維持</li>
                            <li>• クレーム対応のストレス</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Wrench className="h-24 w-24 text-red-500/50" />
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white">
                    <XCircle className="h-6 w-6" />
                  </div>
                </div>
                <div className="max-w-2xl mx-auto bg-red-900/20 border border-red-900/30 rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">一人で行う場合の結果</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col items-center p-4 bg-darkgray-800 rounded-lg shadow-sm">
                      <Clock className="h-8 w-8 text-red-500 mb-2" />
                      <p className="text-sm font-medium text-snow-100">膨大な時間</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-darkgray-800 rounded-lg shadow-sm">
                      <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
                      <p className="text-sm font-medium text-snow-100">高いリスク</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-darkgray-800 rounded-lg shadow-sm">
                      <FileText className="h-8 w-8 text-red-500 mb-2" />
                      <p className="text-sm font-medium text-snow-100">複雑な手続き</p>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-darkgray-800 rounded-lg shadow-sm md:col-span-3 md:max-w-xs md:mx-auto">
                      <Frown className="h-8 w-8 text-red-500 mb-2" />
                      <p className="text-sm font-medium text-snow-100">精神的負担</p>
                    </div>
                  </div>
                  <p className="text-red-300">
                    一人で全てを行うと、多くの時間と労力、専門知識が必要となり、
                    本来の目的である「収益を上げること」に集中できなくなります。
                  </p>
                </div>
              </div>

              {/* Transition Arrow */}
              <div className="flex justify-center my-16">
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-12 w-12 text-ice-400 animate-bounce" />
                  <p className="mt-4 text-xl font-medium text-ice-400">CleanNest Hokkaidoなら</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-16 md:py-24 bg-darkgray-950">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 mb-4">
                <Smile className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-snow-50">CleanNest Hokkaidoのソリューション</h2>
              <p className="text-xl text-snow-300">
                CleanNest Hokkaidoなら、民泊・旅館運営の複雑なプロセスを シンプルな3ステップで実現できます。
              </p>
            </div>

            {/* 3 Steps Solution */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <div className="bg-darkgray-900 border border-darkgray-800 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-ice-600 text-white p-4 text-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-white text-ice-600 font-bold text-lg leading-8">
                    1
                  </span>
                  <h3 className="text-xl font-bold mt-2">無料相談</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center h-24 mb-4">
                    <FileText className="h-16 w-16 text-ice-400/50" />
                  </div>
                  <p className="text-snow-300 mb-4">
                    お客様のニーズや物件の状況をヒアリングし、最適なプランをご提案します。
                    収益シミュレーションや必要な手続きについても詳しくご説明します。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-snow-200">物件の収益性診断</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-snow-200">法規制の確認</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-snow-200">最適なプランの提案</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-darkgray-900 border border-darkgray-800 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-ice-600 text-white p-4 text-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-white text-ice-600 font-bold text-lg leading-8">
                    2
                  </span>
                  <h3 className="text-xl font-bold mt-2">契約・準備</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center h-24 mb-4">
                    <Building className="h-16 w-16 text-ice-400/50" />
                  </div>
                  <p className="text-snow-300 mb-4">
                    契約後、弊社が全ての準備を代行します。許認可申請、内装設計、家具調達、
                    システム構築など、開業に必要な全ての準備を一括で行います。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-snow-200">許認可申請の代行</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-snow-200">内装設計と家具調達</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-snow-200">予約システムの構築</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-darkgray-900 border border-darkgray-800 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-ice-600 text-white p-4 text-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-white text-ice-600 font-bold text-lg leading-8">
                    3
                  </span>
                  <h3 className="text-xl font-bold mt-2">運営開始</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center h-24 mb-4">
                    <Smartphone className="h-16 w-16 text-ice-400/50" />
                  </div>
                  <p className="text-snow-300 mb-4">
                    開業後は、予約管理、ゲスト対応、清掃、メンテナンスなど、
                    全ての運営業務を弊社が代行します。オーナー様は収益だけを受け取るだけです。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-snow-200">予約・ゲスト対応</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-snow-200">清掃・メンテナンス</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-snow-200">収益レポートの提供</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-green-900/20 border border-green-900/30 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-4">CleanNest Hokkaidoを選ぶメリット</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-4 bg-darkgray-800 rounded-lg shadow-sm">
                    <Clock className="h-8 w-8 text-green-500 mb-2" />
                    <p className="text-sm font-medium text-snow-100">時間の節約</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-darkgray-800 rounded-lg shadow-sm">
                    <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                    <p className="text-sm font-medium text-snow-100">リスク軽減</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-darkgray-800 rounded-lg shadow-sm">
                    <ClipboardList className="h-8 w-8 text-green-500 mb-2" />
                    <p className="text-sm font-medium text-snow-100">手続き代行</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-darkgray-800 rounded-lg shadow-sm">
                    <Smile className="h-8 w-8 text-green-500 mb-2" />
                    <p className="text-sm font-medium text-snow-100">精神的余裕</p>
                  </div>
                </div>
                <p className="text-green-300">
                  CleanNest Hokkaidoにお任せいただくことで、オーナー様は煩雑な業務から解放され、
                  本来の目的である「収益を上げること」に集中できます。
                  専門知識と経験を持つプロフェッショナルが、最高品質のサービスを提供します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 md:py-24 bg-darkgray-950">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-snow-50">自己運営 vs CleanNest Hokkaido</h2>
              <p className="text-snow-300">自己運営とCleanNest Hokkaidoのサービスを比較してみましょう。</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-darkgray-800 border border-darkgray-700 text-snow-100">項目</th>
                    <th className="p-4 text-center bg-red-900/20 border border-darkgray-700 text-snow-100">自己運営</th>
                    <th className="p-4 text-center bg-green-900/20 border border-darkgray-700 text-snow-100">
                      CleanNest Hokkaido
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-darkgray-700 font-medium text-snow-100">初期準備期間</td>
                    <td className="p-4 text-center border border-darkgray-700 bg-red-900/20 text-red-300">3〜6ヶ月</td>
                    <td className="p-4 text-center border border-darkgray-700 bg-green-900/20 text-green-300">
                      1〜2ヶ月
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-darkgray-700 font-medium text-snow-100">必要な専門知識</td>
                    <td className="p-4 text-center border border-darkgray-700 bg-red-900/20 text-red-300">
                      多岐にわたる知識が必要
                    </td>
                    <td className="p-4 text-center border border-darkgray-700 bg-green-900/20 text-green-300">
                      不要（すべてお任せ）
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-darkgray-700 font-medium text-snow-100">オーナーの時間的負担</td>
                    <td className="p-4 text-center border border-darkgray-700 bg-red-900/20 text-red-300">
                      大きい（24時間対応）
                    </td>
                    <td className="p-4 text-center border border-darkgray-700 bg-green-900/20 text-green-300">
                      最小限（収益確認のみ）
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-darkgray-700 font-medium text-snow-100">トラブル対応</td>
                    <td className="p-4 text-center border border-darkgray-700 bg-red-900/20 text-red-300">自己対応</td>
                    <td className="p-4 text-center border border-darkgray-700 bg-green-900/20 text-green-300">
                      すべて代行
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-darkgray-700 font-medium text-snow-100">収益最大化</td>
                    <td className="p-4 text-center border border-darkgray-700 bg-red-900/20 text-red-300">
                      知識と経験による
                    </td>
                    <td className="p-4 text-center border border-darkgray-700 bg-green-900/20 text-green-300">
                      プロによる最適化
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-darkgray-700 font-medium text-snow-100">初期投資リスク</td>
                    <td className="p-4 text-center border border-darkgray-700 bg-red-900/20 text-red-300">高い</td>
                    <td className="p-4 text-center border border-darkgray-700 bg-green-900/20 text-green-300">低い</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-darkgray-900">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-darkgray-900 text-white rounded-xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4 text-snow-50">まずは無料相談から</h2>
                <p className="mb-6 text-snow-300">
                  民泊・旅館運営に関するお悩みや疑問点を、お気軽にご相談ください。
                  経験豊富なコンサルタントが、最適なプランをご提案いたします。
                </p>
                <Button size="lg" className="bg-ice-600 hover:bg-ice-700 text-white" asChild>
                  <Link href="/#contact">
                    無料相談を予約する
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

