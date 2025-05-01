import Link from "next/link"
import Image from "next/image"
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
  Plus,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function OwnerRecruitmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section - Full screen, minimal */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/sapporo-modern-bedroom.png"
            alt="Sophisticated interior design"
            fill
            priority
            className="object-cover opacity-90"
          />
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <div className="inline-block px-6 py-2 bg-gold-500 text-white rounded-md mb-6">
                  <p className="text-sm uppercase tracking-[0.2em] font-medium">民泊オーナー募集中</p>
                </div>
                <h1 className="text-6xl md:text-7xl font-light text-black leading-tight tracking-tight">
                  不動産資産を<br />
                  <span className="font-semibold relative">
                    最上級の投資に
                    <span className="absolute -bottom-3 left-0 w-full h-1 bg-gold-500"></span>
                  </span>
                </h1>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 border-l-4 border-gold-500 shadow-lg max-w-lg">
                <p className="text-xl text-gray-800 font-medium mb-2">所有不動産を民泊オーナーに転貸しませんか？</p>
                <p className="text-lg text-gray-700">-戸建てやアパートを貸し出して賃料UP-</p>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-md">
                空室リスクを減らし、収益を向上させる革新的な不動産活用法。
                一般賃貸・民泊・マンスリーを組み合わせた三位一体の運用で、安定した高収益を実現します。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600" asChild>
                  <Link href="/contact#contact-form">
                    無料相談を予約する
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-24">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">OUR PHILOSOPHY</p>
            <h2 className="text-4xl font-light text-black mb-6 leading-tight">
              収益を高める、<br />革新的な<span className="font-semibold">三位一体の運用モデル</span>
            </h2>
            <div className="w-20 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="aspect-square relative overflow-hidden">
                <Image 
                  src="/images/sapporo-modern-bedroom.png" 
                  alt="Modern living space for long-term rental"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-light">一般賃貸</h3>
                <div className="w-10 h-px bg-black"></div>
                <p className="text-gray-700">
                  安定した収入源として、一部の物件は従来通りの長期賃貸契約で運用。
                  基本的な収益基盤を確保しながら、リスク分散を図ります。
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-square relative overflow-hidden">
                <Image 
                  src="/images/kimono-experience.png" 
                  alt="Luxury hotel-like experience for vacation rentals"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-light">民泊（ホテル営業）</h3>
                <div className="w-10 h-px bg-black"></div>
                <p className="text-gray-700">
                  観光シーズンや繁忙期には民泊として運用し、高単価での宿泊提供が可能。
                  一般賃貸の2〜3倍の収益を見込めるケースも多く、収益の最大化を図ります。
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-square relative overflow-hidden">
                <Image 
                  src="/images/sapporo-tv-tower-illumination.jpg" 
                  alt="Executive suite for monthly contracts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-light">マンスリー契約</h3>
                <div className="w-10 h-px bg-black"></div>
                <p className="text-gray-700">
                  ビジネス利用や中期滞在者向けにマンスリー契約を提供。
                  一般賃貸より高単価で、民泊より安定した収入を確保できる中間的な選択肢です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-24">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">PREMIUM SERVICES</p>
            <h2 className="text-4xl font-light text-black mb-6 leading-tight">
              <span className="font-semibold">高品質なサービス</span>で差別化
            </h2>
            <p className="text-gray-700">
              CleanNest Hokkaidoのサービスは、宿泊者体験と収益性を高めるための細部までこだわっています。
            </p>
            <div className="w-20 h-px bg-black mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="border border-black p-8">
              <div className="flex items-start space-x-6 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black flex items-center justify-center">
                  <Image 
                    src="/placeholder.svg" 
                    width={24} 
                    height={24} 
                    alt="Hotel quality linen" 
                    className="opacity-80"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">ホテルレベルのリネンサービス</h3>
                  <div className="w-10 h-px bg-black mb-4"></div>
                  <p className="text-gray-700">
                    高級ホテル品質の寝具とタオルを提供し、宿泊者の滞在体験を向上させます。
                    定期的な交換と徹底した品質管理で、常に清潔で上質な環境を維持します。高品質なリネンは
                    宿泊施設の評価を大きく左右する要素であり、リピーターの増加にも繋がります。
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      高級コットン100%タオル・シーツ
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      定期的な品質チェックと交換
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      季節に応じた寝具の入れ替え
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-black p-8">
              <div className="flex items-start space-x-6 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black flex items-center justify-center">
                  <Image 
                    src="/placeholder.svg" 
                    width={24} 
                    height={24} 
                    alt="Business waste collection" 
                    className="opacity-80"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-2">事業ゴミ回収サービス</h3>
                  <div className="w-10 h-px bg-black mb-4"></div>
                  <p className="text-gray-700">
                    民泊・宿泊施設運営時の大きな悩みの一つであるゴミ処理を完全代行します。
                    自治体の分別ルールに沿った適切な処理で、近隣トラブルを防止し、
                    オーナー様の手間を大幅に削減します。持続可能な運営のための
                    環境に配慮したゴミ処理も実施しています。
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      定期的な回収スケジュール
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      適正な分別と処理
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      自治体ルールに完全準拠
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              これらのプレミアムサービスは、宿泊者の満足度向上と同時に、運営の効率化、
              そして物件の収益最大化を実現します。すべてのサービスが三位一体運用の一部として包括的に提供されます。
            </p>
            <Link 
              href="/services"
              className="inline-flex items-center text-black border-b-2 border-black pb-1 text-lg group transition-all hover:border-gray-500 hover:text-gray-700"
            >
              すべてのサービスを見る
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ section - Elegant design */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-24">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">QUESTIONS & ANSWERS</p>
            <h2 className="text-4xl font-light text-black mb-6 leading-tight">
              よくある<span className="font-semibold">ご質問</span>
            </h2>
            <div className="w-20 h-px bg-black mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium mb-4">どのような物件が三位一体運用に適していますか？</h3>
              <p className="text-gray-700 leading-relaxed">
                立地条件が良く、観光地やビジネス街に近い物件が最適です。特に、札幌市中心部や観光地周辺、
                交通アクセスの良い場所にある物件は三位一体運用の効果が高くなります。
                また、設備が整っていて、内装が魅力的な物件ほど、民泊やマンスリー利用での高単価が期待できます。
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium mb-4">運営の手間はどれくらいかかりますか？</h3>
              <p className="text-gray-700 leading-relaxed">
                CleanNest Hokkaidoでは、運営のすべてを代行するサービスを提供しています。
                予約管理、ゲスト対応、清掃、メンテナンスなど、すべての業務を当社が担当しますので、
                オーナー様は収益の報告を受け取るだけで済みます。
                手間をかけずに収益を最大化したいオーナー様に最適なサービスです。
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium mb-4">法的な制約はありますか？</h3>
              <p className="text-gray-700 leading-relaxed">
                民泊運営には住宅宿泊事業法（民泊新法）や旅館業法に基づく許可が必要です。
                また、マンションの場合は管理規約で民泊が禁止されている場合もあります。
                当社では、これらの法的手続きもサポートしており、適切な許可を取得した上で
                合法的に運営できるようにいたします。詳細は個別にご相談ください。
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-medium mb-4">費用はどれくらいかかりますか？</h3>
              <p className="text-gray-700 leading-relaxed">
                初期費用として、内装や設備の整備、写真撮影、リスティング作成などがあります。
                運営費用は、売上の一定割合（通常15〜25%）をいただく成果報酬型です。
                具体的な費用は物件の状況や必要なリノベーションの程度によって異なりますので、
                まずは無料相談で詳細をお聞かせください。収益シミュレーションを作成し、
                投資回収期間も含めた具体的なプランをご提案いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section - Minimal, elegant */}
      <section className="py-32 bg-black text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">START TODAY</p>
                <h2 className="text-4xl font-light leading-tight">
                  不動産収益の<br /><span className="font-medium">最大化に向けた第一歩</span>
                </h2>
              </div>
              <div className="w-16 h-px bg-white"></div>
              <p className="text-gray-300 leading-relaxed">
                あなたの物件の可能性を最大限に引き出すための無料相談を実施中。
                物件の状況をお聞かせいただき、最適な運用プランをご提案します。
              </p>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <Link 
                  href="/contact#contact-form"
                  className="inline-block w-full py-4 px-6 border border-white text-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  無料相談を予約する
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

