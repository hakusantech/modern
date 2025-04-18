import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Clock,
  ChevronDown,
  MessageCircle,
  ClipboardCheck,
  Settings,
  Users,
  Calendar,
  ChevronRight,
  Building,
  FileText,
  User,
  CheckCircle,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "導入の流れ｜CleanNest Hokkaido",
  description: "CleanNest Hokkaidoの民泊運営代行サービス導入プロセス。初回相談から運営開始、運営中のサポートまで、専門スタッフがトータルでサポートします。",
}

// 導入前の流れ (Enriched Steps based on original 8 + new details)
const beforeImplementationSteps = [
  {
    step: "01",
    title: "無料相談・ヒアリング",
    description: "まずはオーナー様のご希望や物件の状況（立地、賃貸/所有など）を詳しくヒアリング。収益目標や運営スタイル等のニーズを共有いただき、最適なプランをご提案します。オンライン相談も可能です。",
  },
  {
    step: "02",
    title: "物件調査・市場分析・企画決定",
    description: "物件の立地や特性を踏まえ、周辺市場（予約状況、稼働率など）を分析。ターゲット層や価格設定を明確にし、収益性の高い運営計画（FEP/WSPなど）と収支シミュレーションをご提案、企画を決定します。",
  },
  // Merged original step 3 into 2
  {
    step: "03", // Renumbered
    title: "契約締結",
    description: "プランとシミュレーションにご納得いただけましたら、運営代行契約を締結。契約内容や運営方針を丁寧にご説明し、双方の理解を深めます。",
  },
  {
    step: "04", // Renumbered
    title: "許認可申請サポート（申請準備・手続き）",
    description: "民泊運営に必要な各種許認可（住宅宿泊事業法/旅館業法、消防法など）の申請準備から手続きまで、経験豊富なスタッフが代行・サポート。保健所や消防署との連携もスムーズに進め、迅速な開業を実現します。",
  },
  // Merged original steps 4 and 6
  {
    step: "05", // Renumbered
    title: "内装・設備コーディネート＆導入",
    description: "ターゲット層に合わせた内装デザインや家具・家電選定をご提案。快適で魅力的な空間を創出します。インターネット回線、スマートロック、管理システム等の必要な設備導入・設定も行います。",
  },
  // Merged original step 7
  {
    step: "06", // Renumbered
    title: "OTA登録・ページ作成",
    description: "AirbnbやBooking.com等、主要OTAへの登録を代行。プロ撮影の写真や魅力的な紹介文で、集客力の高いリスティングページを作成します。",
  },
  {
    step: "07", // Renumbered
    title: "運営開始準備・最終確認",
    description: "全ての準備が整ったら、運営開始に向けて最終確認を行います。高品質な写真撮影や備品チェックなどを実施し、スムーズなスタートを保証します。",
  },
  {
    step: "08",
    title: "運営開始",
    description: "いよいよ運営開始。予約受付からゲスト対応、清掃、レポートまで、CleanNest Hokkaidoが責任を持って運営を代行。オーナー様は安心して運営をお任せいただけます。",
  },
]

// 導入後の流れ (From new user input)
const afterImplementationSteps = [
  {
    title: "予約管理・ゲスト対応",
    description: "予約の受付からチェックイン・チェックアウト対応、ゲストからの問い合わせ対応まで、24時間体制でサポートします。多言語対応も可能で、海外からのゲストにも安心してご利用いただけます。",
  },
  {
    title: "清掃・メンテナンス",
    description: "専門の清掃スタッフが、ゲストの入れ替わりごとに徹底した清掃を実施。消耗品の補充や設備の点検・修繕も行い、常に最適な状態を維持します。",
  },
  {
    title: "収益レポートの提供",
    description: "月次で収益レポートを作成し、運営状況を可視化。収益の推移や稼働率など、詳細なデータを共有し、今後の運営戦略に役立てます。",
  },
  {
    title: "価格調整・プロモーション戦略",
    description: "市場の動向や季節要因を考慮し、宿泊料金の最適化を図ります。閑散期・繁忙期に応じたプロモーションやキャンペーンを実施し、稼働率の向上を目指します。",
  },
  {
    title: "定期的な運営改善提案",
    description: "ゲストからのフィードバックや最新の市場トレンドを基に、運営方法の改善提案を行います。オーナー様と連携しながら、より良いサービス提供と収益向上を追求します。",
  },
  {
    title: "緊急時対応",
    description: "設備の故障やゲストからの緊急連絡など、予期せぬトラブルにも迅速に対応。24時間体制でサポートし、オーナー様とゲスト双方の安心・安全を確保します。",
  },
]

export default function ImplementationFlowPage() {
  return (
    <main className="min-h-screen pb-24">
      {/* ヒーローセクション */}
      <section className="bg-gray-50 py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
              導入の流れ
              <span className="block text-2xl sm:text-3xl mt-2 text-gold-600">専門スタッフがトータルサポート</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              初回相談から運営開始後のフォローまで、CleanNest Hokkaidoが<br />
              オーナー様の民泊事業を責任を持ってサポートいたします。
            </p>
            
            <div className="flex justify-center">
              <div className="inline-flex items-center text-sm text-gray-500">
                <Link href="/" className="hover:text-gold-600 transition-colors">
                  ホーム
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-gray-900">導入の流れ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入内容セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Removed overall title "導入内容" as the sections are self-explanatory */}
            {/* <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">導入内容</h2> */}

            {/* 導入前の流れ */}
            <div className="mb-16">
              <h3 className="flex items-center text-2xl font-medium text-gold-600 mb-8">
                <span className="bg-gold-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg">①</span>
                運営開始までの流れ
              </h3>
              <ol className="space-y-8 border-l-2 border-gold-200 pl-8 ml-4">
                {beforeImplementationSteps.map((item, index) => (
                  <li key={index} className="relative pl-4">
                    <span className="absolute -left-10 top-1 bg-gold-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">{item.step || index + 1}</span>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* 導入後の流れ */}
            <div>
              <h3 className="flex items-center text-2xl font-medium text-blue-600 mb-8">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg">②</span>
                運営開始後のサポート
              </h3>
              <ol className="space-y-8 border-l-2 border-blue-200 pl-8 ml-4">
                {afterImplementationSteps.map((item, index) => (
                  <li key={index} className="relative pl-4">
                    <span className="absolute -left-10 top-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">{index + 1}</span>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gray-50 mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              スムーズな民泊運営を始めてみませんか？
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              「どこから始めたらいいのかわからない」という方も、
              まずはお気軽にご相談ください。民泊のプロフェッショナルが
              あなたの物件の可能性を最大限に引き出します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact"
                className="inline-block px-8 py-4 bg-gold-500 text-white hover:bg-gold-600 transition-colors text-lg tracking-wide shadow-md rounded-md"
              >
                無料相談を予約する
              </Link>
              
              <Link 
                href="/services"
                className="inline-block px-8 py-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors text-lg tracking-wide shadow-sm rounded-md"
              >
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

