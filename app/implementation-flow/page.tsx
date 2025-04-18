import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "導入の流れ｜CleanNest Hokkaido",
  description: "CleanNest Hokkaidoの民泊運営代行サービス導入プロセス。初回相談から運営開始、運営中のサポートまで、専門スタッフがトータルでサポートします。",
}

// Flow steps data
const implementationFlow = [
  // --- Before Operation --- (Gold Theme)
  {
    step: "01",
    title: "無料相談・ヒアリング",
    description: "まずはオーナー様のご希望や物件の状況（立地、賃貸/所有など）を詳しくヒアリング。収益目標や運営スタイル等のニーズを共有いただき、最適なプランをご提案します。オンライン相談も可能です。",
    phase: "before",
  },
  {
    step: "02",
    title: "物件調査・市場分析・企画決定",
    description: "物件の立地や特性を踏まえ、周辺市場（予約状況、稼働率など）を分析。ターゲット層や価格設定を明確にし、収益性の高い運営計画（FEP/WSPなど）と収支シミュレーションをご提案、企画を決定します。",
    phase: "before",
  },
  {
    step: "03",
    title: "契約締結",
    description: "プランとシミュレーションにご納得いただけましたら、運営代行契約を締結。契約内容や運営方針を丁寧にご説明し、双方の理解を深めます。",
    phase: "before",
  },
  {
    step: "04",
    title: "許認可申請サポート（申請準備・手続き）",
    description: "民泊運営に必要な各種許認可（住宅宿泊事業法/旅館業法、消防法など）の申請準備から手続きまで、経験豊富なスタッフが代行・サポート。保健所や消防署との連携もスムーズに進め、迅速な開業を実現します。",
    phase: "before",
  },
  {
    step: "05",
    title: "内装・設備コーディネート＆導入",
    description: "ターゲット層に合わせた内装デザインや家具・家電選定をご提案。快適で魅力的な空間を創出します。インターネット回線、スマートロック、管理システム等の必要な設備導入・設定も行います。",
    phase: "before",
  },
  {
    step: "06",
    title: "OTA登録・ページ作成",
    description: "AirbnbやBooking.com等、主要OTAへの登録を代行。物件写真や周辺写真、魅力的な観光情報などを掲載して決定力を向上させるリスティングページを作成します。",
    phase: "before",
  },
  {
    step: "07",
    title: "運営開始準備・最終確認",
    description: "全ての準備が整ったら、運営開始に向けて最終確認を行います。高品質な写真撮影や備品チェックなどを実施し、スムーズなスタートを保証します。",
    phase: "before",
  },
  // --- Operation Start (Transition Point) ---
  {
    step: "08",
    title: "運営開始",
    description: "いよいよ運営開始。予約受付からゲスト対応、清掃、レポートまで、CleanNest Hokkaidoが責任を持って運営を代行。オーナー様は安心して運営をお任せいただけます。",
    phase: "start",
  },
  // --- After Operation --- (Blue Theme)
  {
    step: "09",
    title: "予約管理・ゲスト対応",
    description: "予約の受付からチェックイン・チェックアウト対応、ゲストからの問い合わせ対応まで、24時間体制でサポートします。多言語対応も可能で、海外からのゲストにも安心してご利用いただけます。",
    phase: "after",
  },
  {
    step: "10",
    title: "清掃・メンテナンス",
    description: "専門の清掃スタッフが、ゲストの入れ替わりごとに徹底した清掃を実施。消耗品の補充や設備の点検・修繕も行い、常に最適な状態を維持します。",
    phase: "after",
  },
  {
    step: "11",
    title: "収益レポートの提供",
    description: "月次で収益レポートを作成し、運営状況を可視化。収益の推移や稼働率など、詳細なデータを共有し、今後の運営戦略に役立てます。",
    phase: "after",
  },
  {
    step: "12",
    title: "価格調整・プロモーション戦略",
    description: "市場の動向や季節要因を考慮し、宿泊料金の最適化を図ります。閑散期・繁忙期に応じたプロモーションやキャンペーンを実施し、稼働率の向上を目指します。",
    phase: "after",
  },
  {
    step: "13",
    title: "定期的な運営改善提案",
    description: "ゲストからのフィードバックや最新の市場トレンドを基に、運営方法の改善提案を行います。オーナー様と連携しながら、より良いサービス提供と収益向上を追求します。",
    phase: "after",
  },
  {
    step: "14",
    title: "緊急時対応",
    description: "設備の故障やゲストからの緊急連絡など、予期せぬトラブルにも迅速に対応。24時間体制でサポートし、オーナー様とゲスト双方の安心・安全を確保します。",
    phase: "after",
  },
]

export default function ImplementationFlowPage() {
  return (
    <main className="min-h-screen pb-24 bg-white antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gold-50 via-white to-white py-24 border-b border-gray-200 overflow-hidden">
        {/* 装飾: 右上の円 */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gold-100 rounded-full opacity-30 blur-3xl"></div>
        {/* 装飾: 左下の円 */}
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-gold-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
              導入の流れ
              <span className="block text-2xl sm:text-3xl mt-2 text-gold-500">専門スタッフがトータルサポート</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              初回相談から運営開始後のフォローまで、CleanNest Hokkaidoが<br />
              オーナー様の民泊事業を責任を持ってサポートいたします。
            </p>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical connecting line (visible on medium screens and up) */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gray-300 hidden md:block"></div>

            {implementationFlow.map((step, index) => {
              const isStart = step.phase === 'start';
              const isAfter = step.phase === 'after';
              const isLast = index === implementationFlow.length - 1;

              // Determine colors based on phase
              const circleBorderColor = isAfter ? 'border-blue-400' : 'border-gold-400';
              const circleBgColor = isAfter ? 'bg-blue-50' : 'bg-gold-50';
              const circleTextColor = isAfter ? 'text-blue-600' : 'text-gold-600';
              const titleColor = isAfter ? 'text-blue-700' : 'text-gold-700';
              const connectorColor = isAfter ? 'bg-blue-300' : 'bg-gold-300';

              return (
                <div key={index} className="relative pl-16 md:pl-20 pb-12 group">
                  {/* Step Circle */}
                  <div className={`absolute left-0 top-0 flex items-center justify-center w-16 h-16 rounded-full border-2 ${circleBorderColor} ${circleBgColor} shadow-sm`}>
                    <span className={`text-xl font-semibold ${circleTextColor}`}>
                      {step.step}
                    </span>
                  </div>

                  {/* Step Connector (visible on medium screens and up, hidden for the last item) */}
                  {!isLast && (
                     <div className={`absolute left-[31px] top-16 h-12 w-px ${connectorColor} hidden md:block`}></div>
                  )}
                  
                  {/* Content Card */}
                  <div className={`ml-4 relative ${isStart ? 'border-l-4 border-gray-500 pl-6 py-4 -ml-1' : ''}`}>
                     {/* Highlight for the 'start' phase */}
                     {isStart && (
                      <div className="absolute -left-[10px] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-500 rounded-full border-2 border-white shadow"></div>
                    )}
                    <h3 className={`text-xl font-medium ${titleColor} mb-2`}>{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Link to Minpaku Service */}
      <section className="py-16 bg-gray-50 mt-16 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-light text-gray-900 mb-4">民泊運営もCleanNestにおまかせ！</h2>
            <p className="text-gray-600 mb-8 leading-relaxed font-light">
              面倒な許認可申請、日々の予約管理やゲスト対応はすべてプロにお任せ。<br />
              オーナー様は手間なく、安心して民泊運営を始められます。
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

