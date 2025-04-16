import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Recycle, Clock, Truck, Shield, AlertTriangle, FileText } from "lucide-react"

export const metadata = {
  title: "事業ゴミ回収サービス | CleanNest Hokkaido",
  description: "札幌・北海道の民泊施設向け事業系ゴミ回収サービス。民泊で出るゴミは「事業系一般廃棄物」として適切に処理する必要があります。不法投棄を防止し、法令を遵守した安心・安全なゴミ処理サービスを提供します。",
}

const services = [
  {
    title: "定期回収",
    description: "曜日・頻度・時間帯を指定して定期収集。深夜・早朝対応も可能です。宿泊予約状況に合わせた最適な回収スケジュールを設定し、ゴミが溜まる心配がありません。",
    icon: Clock,
  },
  {
    title: "分別サポート",
    description: "ゴミの種類ごとに分別ガイド作成。外国語対応も可能です。地域の規則に準拠した正確な分別を実施し、不適切な処理による近隣トラブルや自治体からの指導を防止します。",
    icon: Recycle,
  },
  {
    title: "許可証明",
    description: "回収はすべて地方自治体から許可を得た正規業者が対応。回収証明書・契約書の発行も可能です。法令を遵守した回収で安心・安全なゴミ処理をご提供します。",
    icon: FileText,
  },
  {
    title: "スポット回収",
    description: "大掃除後や繁忙期などの臨時ゴミも対応可能。迅速かつ確実な回収サービスで、宿泊者の入れ替え時もスムーズに対応できます。",
    icon: Truck,
  },
  {
    title: "清掃サービス連携",
    description: "民泊清掃業者との連携でゴミ処理もスムーズに。チェックアウト後の清掃と連携した効率的な運用が可能です。",
    icon: Shield,
  },
]

const concerns = [
  "民泊で出るゴミって、普通に捨てちゃダメなの？",
  "ゲストの分別が甘くて、ゴミ出しが面倒…",
  "正しい処理方法が分からず不安",
  "委託業者の許可ってどう確認するの？"
]

const faqs = [
  {
    question: "民泊で出るゴミも家庭ゴミとして出していいのでは？",
    answer: `いいえ。民泊は営利活動としての"事業"に分類されるため、家庭ゴミとして出すと法律違反になります。`
  },
  {
    question: "ゴミの分別ルールが複雑で、ゲストが守ってくれるか不安です。",
    answer: "英語・中国語・韓国語など、多言語対応のルール表を提供可能。室内掲示用テンプレートもご用意しています。"
  }
]

export default function WasteCollectionPage() {
  return (
    <div className="pt-16 bg-white">
      {/* ヒーローセクション */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* デコレーション要素 */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <div className="relative">
                    <span className="inline-block w-16 h-px bg-gold-400"></span>
                    <span className="inline-block w-3 h-3 rounded-full bg-gold-400 -mt-1 ml-1"></span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                  <span>事業</span><span className="text-gold-500 font-normal">ゴミ回収</span><span>サービス</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl font-light">
                  民泊運営で出たゴミ、それ"家庭ゴミ"じゃありません。民泊のゴミは「事業系ゴミ」として適切に処理しましょう。
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <p className="font-medium">重要なお知らせ</p>
                </div>
                <p className="text-sm">
                  民泊で出たゴミは「事業系一般廃棄物」に分類され、家庭ゴミとは全く異なる処理ルールが適用されます。
                  知らずに家庭ゴミ集積所へ出してしまうと、<strong>廃棄物処理法違反（不法投棄）</strong>として罰せられることもあります。
                </p>
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
                src="/images/gomi.png"
                alt="事業ゴミ回収サービス"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-gold-100">
                <h3 className="text-xl font-light text-gray-900">法律<span className="text-gold-500">違反</span>を防止</h3>
                <p className="text-sm text-gray-600">安心・安全な事業系ゴミ回収サービスで適切に処理</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* お悩みセクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              こんな<span className="text-gold-500 font-normal">お悩み</span>ありませんか？
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              観光需要が戻り、再び注目を集めている民泊ビジネス。
              しかし、意外と見落とされがちなのが<strong>「ゴミの処理」</strong>です。
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {concerns.map((concern, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gold-100 hover:border-gold-300 transition-colors">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 font-medium mr-3">
                      <span role="img" aria-label="衝突">💥</span>
                    </span>
                    <p className="text-gray-700">{concern}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* サービス内容セクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              私たちが<span className="text-gold-500 font-normal">解決</span>します
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              事業系ゴミ専門の回収サービスで、民泊運営に最適な回収プランをご用意しています。
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-light text-center mb-10">
              <span role="img" aria-label="パッケージ">📦</span> サービス内容
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white border border-gold-100 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-gold-400 to-gold-500"></div>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 flex items-center justify-center shadow-lg shadow-gold-300/20">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-light text-gray-900">
                        <span role="img" aria-label="青い菱形">🔹</span> {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 安心・安全セクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gold-100">
            <div className="p-10 sm:p-12 relative">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  <span role="img" aria-label="鍵">🔒</span> <span className="text-gold-500">安心・安全</span>のために
                </h2>
                <div className="w-16 h-px bg-gold-400 mx-auto mb-8"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">法令を遵守した回収（一般廃棄物／産業廃棄物 両方に対応）</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">回収証明書・契約書の発行可能</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">不法投棄ゼロで地域との信頼関係も維持</p>
                </div>
              </div>
              
              <div className="mt-12 bg-gold-50 p-6 rounded-lg border border-gold-100">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  <span role="img" aria-label="メガホン">📢</span> 民泊ホスト様へのお願い
                </h3>
                <p className="text-gray-700 mb-6">
                  民泊で発生したゴミは、家庭ゴミと混ぜずに正しいルールで処理する必要があります。
                </p>
                <p className="text-gray-700">
                  もし不安がある方は、まずは無料相談からどうぞ。
                  当社スタッフが現地の事情や条例に応じて、最適な回収プランをご提案いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* よくある質問セクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              よくある<span className="text-gold-500 font-normal">質問</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-8 bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-medium text-gray-900">Q. {faq.question}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">→ {faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="py-24 bg-gray-50 relative">
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
                  法律違反の<span className="text-gold-500">リスク</span>から解放される
                </h2>
                <p className="text-gray-600 mb-10 text-lg">
                  ゴミ処理の手間と時間を削減し、本来の業務に集中できる環境を提供します。<br />
                  法令を遵守した適切な処理で、ご安心いただけます。
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