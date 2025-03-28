import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Clock, Star, Shield, Sparkles } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CleaningPage() {
  return (
    <PageLayout
      title="民泊清掃"
      subtitle="MINPAKU CLEANING"
      description="プロのスタッフによる徹底的な清掃サービス。チェックアウトからチェックインまでの短時間で、高品質な清掃を実現します。"
      breadcrumbs={[{ label: "サービス", href: "/services" }, { label: "民泊清掃" }]}
    >
      {/* ヒーローセクション */}
      <Section background="darkgray-900" className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="ice" className="mb-2">
              CleanNest Hokkaido
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-snow-50">プロフェッショナルな民泊清掃サービス</h2>
            <p className="text-snow-300">
              民泊の成功には、清潔さが最も重要です。CleanNest Hokkaidoの清掃サービスは、単なる掃除ではなく、
              ゲストに最高の印象を与えるための総合的なサービスです。経験豊富なプロのスタッフが、
              細部まで徹底的に清掃し、次のゲストを迎える準備を整えます。
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-snow-300">チェックアウト後の徹底清掃</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-snow-300">リネン交換・ベッドメイキング</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-snow-300">アメニティの補充・整理</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-snow-300">設備点検・トラブル報告</span>
              </div>
            </div>
            <div className="pt-4">
              <Button variant="gold" size="lg" className="text-white" asChild>
                <Link href="/#contact">
                  無料相談を予約する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/cleaning-service.png"
              alt="プロフェッショナルな民泊清掃スタッフによるベッドメイキング"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkgray-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-darkgray-900/80 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-xl font-bold text-snow-50">プロの技術で清潔な空間を</h3>
              <p className="text-sm text-snow-300">ゲストに最高の印象を与える徹底的な清掃サービス</p>
            </div>
          </div>
        </div>
      </Section>

      {/* サービス内容セクション */}
      <Section title="清掃サービス内容" subtitle="SERVICES" background="darkgray-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all">
            <div className="h-2 bg-gradient-to-r from-ice-500 to-ice-400"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-ice-600/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-ice-400" />
                </div>
                <CardTitle className="text-snow-50">ターンオーバー清掃</CardTitle>
              </div>
              <CardDescription className="text-snow-300">
                チェックアウト後からチェックインまでの短時間で、徹底的な清掃を行います。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">全室の掃除機がけ・拭き掃除</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">バスルーム・トイレの清掃・除菌</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">キッチン・調理器具の清掃</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">ゴミの回収・分別</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all">
            <div className="h-2 bg-gradient-to-r from-ice-500 to-ice-400"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-ice-600/10 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-ice-400" />
                </div>
                <CardTitle className="text-snow-50">リネン・アメニティ</CardTitle>
              </div>
              <CardDescription className="text-snow-300">
                清潔なリネンの交換とアメニティの補充・整理を行います。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">ベッドリネンの交換・ベッドメイキング</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">タオル類の交換・補充</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">アメニティの補充・整理</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">消耗品のチェック・補充</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all">
            <div className="h-2 bg-gradient-to-r from-ice-500 to-ice-400"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-ice-600/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-ice-400" />
                </div>
                <CardTitle className="text-snow-50">設備点検・報告</CardTitle>
              </div>
              <CardDescription className="text-snow-300">
                清掃と同時に設備の点検を行い、問題があれば報告します。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">電化製品の動作確認</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">水回り設備の点検</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">破損・故障の報告</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">忘れ物の確認・報告</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 清掃プロセスセクション */}
      <Section title="清掃プロセス" subtitle="PROCESS" background="darkgray-900">
        <div className="relative">
          {/* 背景ライン */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-darkgray-800 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-ice-600/10 border-4 border-darkgray-900 flex items-center justify-center mb-4 z-10">
                  <span className="text-3xl font-bold text-ice-400">01</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-snow-50">チェックアウト確認</h3>
                <p className="text-sm text-center text-snow-300">
                  ゲストのチェックアウト後、清掃スタッフが物件に到着します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-ice-600/10 border-4 border-darkgray-900 flex items-center justify-center mb-4 z-10">
                  <span className="text-3xl font-bold text-ice-400">02</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-snow-50">徹底清掃</h3>
                <p className="text-sm text-center text-snow-300">
                  専用のチェックリストに沿って、全ての部屋を徹底的に清掃します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-ice-600/10 border-4 border-darkgray-900 flex items-center justify-center mb-4 z-10">
                  <span className="text-3xl font-bold text-ice-400">03</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-snow-50">リネン交換・準備</h3>
                <p className="text-sm text-center text-snow-300">
                  ベッドリネンの交換、タオル類の補充、アメニティの整理を行います。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-ice-600/10 border-4 border-darkgray-900 flex items-center justify-center mb-4 z-10">
                  <span className="text-3xl font-bold text-ice-400">04</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-snow-50">最終確認・報告</h3>
                <p className="text-sm text-center text-snow-300">
                  清掃完了後、最終確認を行い、オーナー様に報告します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 特徴セクション */}
      <Section title="清掃サービスの特徴" subtitle="FEATURES" background="darkgray-950">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-darkgray-800 border-darkgray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-ice-600/10 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-ice-400" />
                </div>
                <CardTitle className="text-snow-50">高品質な清掃</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-snow-300 mb-4">
                経験豊富なプロのスタッフが、専用のチェックリストに沿って徹底的に清掃します。
                一般的な清掃だけでなく、民泊特有のポイントを熟知したスタッフが、
                ゲストに最高の印象を与える清潔な空間を作り上げます。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">専用の清掃マニュアルに基づく徹底清掃</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">プロの技術による効率的かつ丁寧な清掃</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">高評価につながる清潔さの実現</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-darkgray-800 border-darkgray-700">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-ice-600/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-ice-400" />
                </div>
                <CardTitle className="text-snow-50">迅速かつ柔軟な対応</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-snow-300 mb-4">
                チェックアウトからチェックインまでの短時間で、高品質な清掃を実現します。
                急な予約や変更にも柔軟に対応し、オーナー様の運営をサポートします。
                24時間対応のスタッフ配置で、緊急時にも安心です。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">短時間での効率的な清掃</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">急な予約変更にも柔軟に対応</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">24時間対応の緊急清掃サービス</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 料金セクション */}
      <Section title="清掃料金" subtitle="PRICING" background="darkgray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="h-2 bg-gradient-to-r from-ice-500 to-ice-400"></div>
            <CardHeader>
              <CardTitle className="text-snow-50">スタンダードプラン</CardTitle>
              <div className="mt-2">
                <span className="text-2xl font-bold text-snow-50">¥8,000</span>
                <span className="text-sm text-snow-400"> / 回〜</span>
              </div>
              <CardDescription className="text-snow-300 mt-2">1LDK程度の物件向け基本清掃プラン</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">全室の基本清掃</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">リネン交換</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">アメニティ補充</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">ゴミ回収</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full text-snow-100 border-darkgray-700 hover:bg-darkgray-800"
                asChild
              >
                <Link href="/#contact">
                  詳細を問い合わせる
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="h-2 bg-gradient-to-r from-ice-500 to-ice-400"></div>
            <CardHeader>
              <CardTitle className="text-snow-50">プレミアムプラン</CardTitle>
              <div className="mt-2">
                <span className="text-2xl font-bold text-snow-50">¥12,000</span>
                <span className="text-sm text-snow-400"> / 回〜</span>
              </div>
              <CardDescription className="text-snow-300 mt-2">2LDK〜3LDK程度の物件向け高品質清掃プラン</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">スタンダードプランの全内容</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">キッチン設備の徹底清掃</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">バスルーム特別清掃</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">設備点検・報告</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full text-snow-100 border-darkgray-700 hover:bg-darkgray-800"
                asChild
              >
                <Link href="/#contact">
                  詳細を問い合わせる
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="h-2 bg-gradient-to-r from-ice-500 to-ice-400"></div>
            <CardHeader>
              <CardTitle className="text-snow-50">カスタムプラン</CardTitle>
              <div className="mt-2">
                <span className="text-2xl font-bold text-snow-50">要相談</span>
              </div>
              <CardDescription className="text-snow-300 mt-2">
                物件の規模や特性に合わせたカスタマイズプラン
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">物件に合わせたカスタム清掃</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">定期契約割引</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">特別リクエスト対応</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">緊急清掃サービス</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="gold" className="w-full text-white" asChild>
                <Link href="/#contact">
                  お見積りを依頼する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-8 text-center text-sm text-snow-400">
          ※ 料金は物件の広さや状態、オプションによって異なります。詳細はお問い合わせください。
        </div>
      </Section>

      {/* CTA セクション */}
      <Section background="darkgray-800" className="rounded-xl">
        <Card className="bg-gradient-to-br from-darkgray-800 to-darkgray-900 border-none shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ice-600/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <CardContent className="p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-snow-50">清掃サービスのお問い合わせ</h2>
                <p className="text-snow-300">
                  サービスの詳細や料金、導入方法についてのご質問は、お気軽にお問い合わせください。
                  専門スタッフが丁寧にご説明いたします。
                </p>
              </div>
              <div>
                <Button variant="gold" size="lg" className="text-white whitespace-nowrap" asChild>
                  <Link href="/#contact">
                    お問い合わせをする
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>
    </PageLayout>
  )
}

