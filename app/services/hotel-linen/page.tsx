import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Smile, RefreshCw, Sparkles, Leaf } from "lucide-react"

export const metadata = {
  title: "ホテルレベルのリネンサービス | CleanNest Hokkaido",
  description: "札幌・北海道の民泊・宿泊施設向けに高品質なホテルレベルのリネンサービスを提供。高級コットン100%のタオル・シーツで宿泊者満足度を向上させ、リピーター獲得に貢献します。",
}

const features = [
  {
    title: "高品質な素材",
    description: "厳選された高級コットン100%の素材を使用し、柔らかな肌触りと吸水性に優れたリネンを提供します。宿泊者に最高の睡眠体験をお届けします。",
    points: [
      "高級コットン100%タオル・シーツ",
      "肌触りの良い上質な素材",
      "耐久性と洗濯に強い特殊加工",
      "季節に合わせた素材選び"
    ],
    icon: Sparkles,
  },
  {
    title: "定期的な交換サービス",
    description: "予約状況に合わせた最適なタイミングでリネンを交換。常に清潔で快適な環境を維持し、宿泊者の満足度を向上させます。",
    points: [
      "予約状況に合わせた交換スケジュール",
      "迅速な交換作業",
      "使用済みリネンの回収",
      "緊急時の対応サービス"
    ],
    icon: RefreshCw,
  },
  {
    title: "ゲスト満足度向上",
    description: "高品質なリネンは宿泊体験の重要な要素。口コミ評価の向上やリピーターの増加につながり、施設の評価と収益を向上させます。",
    points: [
      "宿泊評価の向上",
      "リピーター獲得支援",
      "高級感のある宿泊体験の提供",
      "差別化要素としての活用"
    ],
    icon: Smile,
  },
  {
    title: "環境に配慮",
    description: "環境に優しい洗剤の使用や効率的な洗濯方法の採用など、環境負荷を低減した運用を心がけています。",
    points: [
      "環境に優しい洗剤の使用",
      "効率的な洗濯・乾燥工程",
      "長期使用可能な耐久性",
      "適切な廃棄・リサイクル"
    ],
    icon: Leaf,
  },
]

const packages = [
  {
    title: "スタンダードプラン",
    description: "基本的なリネンセットの提供と定期交換",
    price: "¥2,500〜",
    period: "1宿泊あたり",
    includes: [
      "ホテル品質タオルセット",
      "ベッドシーツ一式",
      "客室あたりの料金設定",
      "交換サービス（宿泊者入れ替え時）"
    ],
  },
  {
    title: "プレミアムプラン",
    description: "高級リネンの提供と柔軟な交換サービス",
    price: "¥3,500〜",
    period: "1宿泊あたり",
    includes: [
      "最高級コットン100%タオルセット",
      "高級ベッドリネン一式",
      "枕カバー・掛け布団カバー",
      "交換サービス（長期滞在対応）",
      "緊急時の追加交換対応"
    ],
    recommended: true,
  },
  {
    title: "カスタムプラン",
    description: "お客様のニーズに合わせたプラン",
    price: "要相談",
    period: "プロパティ規模による",
    includes: [
      "カスタマイズ可能なリネンセット",
      "ブランドロゴ入り対応（別途費用）",
      "季節に合わせたリネン交換",
      "複数物件の一括管理",
      "在庫管理サービス"
    ],
  },
]

export default function HotelLinenPage() {
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
                  ホテルレベルの<span className="text-gold-500 font-normal">リネンサービス</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl font-light">
                  高級ホテル品質の寝具とタオルを提供し、宿泊者の滞在体験を向上。定期的な交換と徹底した品質管理で、常に清潔で上質な環境を維持します。
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">高級コットン100%タオル・シーツ</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">定期的な品質チェックと交換</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">季節に応じた寝具の入れ替え</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">環境に配慮した素材選定と洗濯方法</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-normal px-8 py-6 h-auto text-lg shadow-lg shadow-gold-300/20 hover:shadow-xl hover:shadow-gold-300/30 transition-all duration-300 border-none" asChild>
                  <Link href="/#contact">
                    無料見積もりを依頼する
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl border border-gold-100">
              <Image
                src="/images/cleaning-service.png"
                alt="ホテルレベルのリネンサービス"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-gold-100">
                <h3 className="text-xl font-light text-gray-900">宿泊体験を<span className="text-gold-500">格上げ</span>する</h3>
                <p className="text-sm text-gray-600">高品質なリネンで差別化し、リピーター獲得につなげる</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* サービス特徴セクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              サービスの<span className="text-gold-500 font-normal">特徴</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              宿泊施設の評価を大きく左右するリネンサービス。
              高品質な素材と徹底した管理体制で、宿泊者の満足度向上をサポートします。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border border-gold-100 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-gold-400 to-gold-500"></div>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 flex items-center justify-center shadow-lg shadow-gold-300/20">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-light text-gray-900">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{feature.description}</p>
                  <div className="grid grid-cols-1 gap-3">
                    {feature.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-gold-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* 料金プランセクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              料金<span className="text-gold-500 font-normal">プラン</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              物件の規模やニーズに合わせた柔軟な料金プラン。
              必要なサービスだけを選んで、コストパフォーマンスの高いリネンサービスを実現します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`
                  bg-white rounded-lg overflow-hidden transition-all duration-300
                  ${pkg.recommended 
                    ? 'border-2 border-gold-400 shadow-xl scale-105 z-10' 
                    : 'border border-gray-200 shadow-lg hover:shadow-xl'
                  }
                `}
              >
                {pkg.recommended && (
                  <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-white text-sm text-center py-1 font-medium">
                    おすすめプラン
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-light text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 text-sm ml-2">{pkg.period}</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    {pkg.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-gold-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${
                      pkg.recommended 
                        ? 'bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white shadow-lg shadow-gold-300/20' 
                        : 'bg-white border border-gold-400 text-gold-500 hover:bg-gold-50'
                    }`}
                    asChild
                  >
                    <Link href="/#contact">
                      詳細を問い合わせる
                    </Link>
                  </Button>
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
                  宿泊体験を<span className="text-gold-500">一段上</span>にランクアップ
                </h2>
                <p className="text-gray-600 mb-10 text-lg">
                  高品質なリネンサービスで宿泊者の満足度を向上させ、<br />口コミ評価とリピーター率のアップにつなげましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-normal px-8 py-6 h-auto text-lg shadow-lg shadow-gold-300/20 hover:shadow-xl hover:shadow-gold-300/30 transition-all duration-300 border-none" asChild>
                    <Link href="/#contact">
                      無料見積もりを依頼する
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