import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, FileText, ClipboardCheck, Shield, Clock } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PermitsPage() {
  return (
    <PageLayout
      title="各種申請許可サポート"
      subtitle="PERMIT SUPPORT"
      description="民泊営業に必要な各種許認可の申請をサポート。住宅宿泊事業法（民泊新法）の届出、旅館業法の許可申請など、複雑な手続きをサポートします。"
      breadcrumbs={[{ label: "サービス", href: "/services" }, { label: "各種申請許可サポート" }]}
    >
      {/* ヒーローセクション */}
      <Section background="darkgray-900" className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="ice" className="mb-2">
              CleanNest Hokkaido
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-snow-50">複雑な申請手続きを専門家がサポート</h2>
            <p className="text-snow-300">
              民泊や旅館業を始めるには、様々な許認可や申請が必要です。法律や条例の理解、複雑な書類作成、行政機関とのやり取りなど、
              専門知識が求められる手続きを、経験豊富な専門スタッフが完全サポートします。
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-snow-300">住宅宿泊事業法（民泊新法）の届出</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-snow-300">旅館業法の許可申請</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-snow-300">消防法・建築基準法関連の手続き</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-snow-300">保健所への届出・許可申請</span>
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
              src="/images/permit-application-support.png"
              alt="申請書類の手続きをサポートする専門スタッフ"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkgray-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-darkgray-900/80 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-xl font-bold text-snow-50">専門知識で安心サポート</h3>
              <p className="text-sm text-snow-300">複雑な申請手続きを経験豊富なスタッフがトータルサポート</p>
            </div>
          </div>
        </div>
      </Section>

      {/* サービス内容セクション */}
      <Section title="申請サポートサービス" subtitle="SERVICES" background="darkgray-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all">
            <div className="h-2 bg-gradient-to-r from-ice-500 to-ice-400"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-ice-600/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-ice-400" />
                </div>
                <CardTitle className="text-snow-50">民泊新法届出サポート</CardTitle>
              </div>
              <CardDescription className="text-snow-300">
                住宅宿泊事業法（民泊新法）に基づく届出を完全サポート。必要書類の作成から提出まで代行します。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">届出書類の作成・提出</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">安全措置の確認・対応</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">近隣住民への説明サポート</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all">
            <div className="h-2 bg-gradient-to-r from-ice-500 to-ice-400"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-ice-600/10 p-3 rounded-lg">
                  <ClipboardCheck className="h-6 w-6 text-ice-400" />
                </div>
                <CardTitle className="text-snow-50">旅館業許可申請サポート</CardTitle>
              </div>
              <CardDescription className="text-snow-300">
                旅館業法に基づく許可申請を完全サポート。簡易宿所、旅館・ホテル営業の許可取得をサポートします。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">許可申請書類の作成・提出</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">構造設備基準の確認・対応</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">保健所との調整・立会い</span>
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
                <CardTitle className="text-snow-50">消防・建築関連手続き</CardTitle>
              </div>
              <CardDescription className="text-snow-300">
                消防法・建築基準法に基づく各種手続きをサポート。安全基準を満たすための対応を支援します。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">消防設備の確認・届出</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">用途変更手続きのサポート</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-snow-300">消防署・建築課との調整</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 申請プロセスセクション */}
      <Section title="申請サポートの流れ" subtitle="PROCESS" background="darkgray-900">
        <div className="relative">
          {/* 背景ライン */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-darkgray-800 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-ice-600/10 border-4 border-darkgray-900 flex items-center justify-center mb-4 z-10">
                  <span className="text-3xl font-bold text-ice-400">01</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-snow-50">無料相談</h3>
                <p className="text-sm text-center text-snow-300">
                  物件の状況や営業形態をヒアリングし、必要な許認可を特定します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-ice-600/10 border-4 border-darkgray-900 flex items-center justify-center mb-4 z-10">
                  <span className="text-3xl font-bold text-ice-400">02</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-snow-50">現地調査</h3>
                <p className="text-sm text-center text-snow-300">
                  物件を実際に確認し、法的要件を満たすための課題を特定します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-ice-600/10 border-4 border-darkgray-900 flex items-center justify-center mb-4 z-10">
                  <span className="text-3xl font-bold text-ice-400">03</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-snow-50">書類作成・提出</h3>
                <p className="text-sm text-center text-snow-300">必要な申請書類を作成し、行政機関へ提出します。</p>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-ice-600/10 border-4 border-darkgray-900 flex items-center justify-center mb-4 z-10">
                  <span className="text-3xl font-bold text-ice-400">04</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-snow-50">許可取得</h3>
                <p className="text-sm text-center text-snow-300">
                  行政機関の審査・検査に立ち会い、許可取得までサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* タブセクション */}
      <Section title="申請サポートの詳細" subtitle="DETAILS" background="darkgray-950">
        <Tabs defaultValue="minpaku" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="minpaku">民泊新法</TabsTrigger>
            <TabsTrigger value="ryokan">旅館業法</TabsTrigger>
            <TabsTrigger value="other">その他の申請</TabsTrigger>
          </TabsList>
          <TabsContent value="minpaku" className="space-y-6">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader>
                <CardTitle className="text-snow-50">住宅宿泊事業法（民泊新法）について</CardTitle>
                <CardDescription className="text-snow-300">
                  2018年6月に施行された住宅宿泊事業法（民泊新法）に基づく届出と運営について
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-snow-100 mb-2">届出の流れ</h4>
                  <p className="text-snow-300">
                    住宅宿泊事業を行うには、都道府県知事（または政令市長・特別区長）への届出が必要です。届出には様々な書類や要件確認が必要となり、専門的な知識が求められます。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-snow-100 mb-2">必要書類</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">住宅宿泊事業届出書</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">住宅の図面</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">登記事項証明書</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">住宅の写真</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">欠格事由に該当しない誓約書</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-snow-100 mb-2">運営上の義務</h4>
                  <p className="text-snow-300">
                    届出後も、宿泊者名簿の作成・備付け、外国人宿泊者の本人確認、標識の掲示、近隣住民とのトラブル防止措置など、様々な義務があります。これらの対応もサポートします。
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ryokan" className="space-y-6">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader>
                <CardTitle className="text-snow-50">旅館業法について</CardTitle>
                <CardDescription className="text-snow-300">
                  旅館業法に基づく旅館・ホテル営業、簡易宿所営業の許可申請について
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-snow-100 mb-2">許可申請の流れ</h4>
                  <p className="text-snow-300">
                    旅館業を営むには、保健所を通じて都道府県知事（または政令市長・特別区長）の許可が必要です。申請には構造設備基準や環境衛生基準など、様々な要件を満たす必要があります。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-snow-100 mb-2">営業種別</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">旅館・ホテル営業：客室数や床面積などの要件あり</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">簡易宿所営業：比較的要件が緩和されている</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-snow-100 mb-2">必要書類</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">営業許可申請書</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">施設の平面図</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">設備の概要</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-ice-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-snow-300">付近の見取図</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="other" className="space-y-6">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader>
                <CardTitle className="text-snow-50">その他の申請手続き</CardTitle>
                <CardDescription className="text-snow-300">
                  民泊・旅館業に関連するその他の申請手続きについて
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-snow-100 mb-2">消防法関連</h4>
                  <p className="text-snow-300">
                    宿泊施設には消防法に基づく様々な設備設置や届出が必要です。消防用設備等（自動火災報知設備、誘導灯など）の設置や防火管理者の選任など、安全に関わる重要な手続きをサポートします。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-snow-100 mb-2">建築基準法関連</h4>
                  <p className="text-snow-300">
                    住宅を宿泊施設として使用する場合、建築基準法上の用途変更が必要になることがあります。特に簡易宿所や旅館・ホテル営業の場合は、用途変更手続きが必要なケースが多く、専門的な対応が求められます。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-snow-100 mb-2">食品衛生法関連</h4>
                  <p className="text-snow-300">
                    宿泊者に食事を提供する場合は、食品衛生法に基づく飲食店営業許可が必要です。厨房設備や手洗い設備など、保健所の基準に適合した設備が求められます。
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* メリットセクション */}
      <Section title="申請サポートのメリット" background="darkgray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-ice-400 mb-4" />
                <CardTitle className="text-snow-50">時間と労力の節約</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-snow-300">
                複雑な申請手続きを専門家に任せることで、オーナー様の貴重な時間と労力を節約できます。
                書類作成や行政機関とのやり取りなど、煩雑な作業から解放されます。
              </p>
            </CardContent>
          </Card>

          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-ice-400 mb-4" />
                <CardTitle className="text-snow-50">確実な許可取得</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-snow-300">
                経験豊富な専門スタッフが対応することで、申請の不備や不足を防ぎ、スムーズな許可取得が可能になります。
                法改正にも常に対応し、最新の情報に基づいたサポートを提供します。
              </p>
            </CardContent>
          </Card>

          <Card className="bg-darkgray-800 border-darkgray-700 hover:border-ice-600/30 transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <div className="flex flex-col items-center text-center">
                <FileText className="h-12 w-12 text-ice-400 mb-4" />
                <CardTitle className="text-snow-50">トータルサポート</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-snow-300">
                申請手続きだけでなく、運営開始後の各種届出や報告義務など、継続的なコンプライアンス対応もサポート。
                安心して事業に集中できる環境を整えます。
              </p>
            </CardContent>
          </Card>
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
                <h2 className="text-2xl font-bold mb-2 text-snow-50">申請サポートのお問い合わせ</h2>
                <p className="text-snow-300">
                  サービスの詳細や料金、申請に必要な条件などについてのご質問は、お気軽にお問い合わせください。
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

