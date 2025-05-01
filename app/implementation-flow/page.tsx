import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react"

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
    icon: "consultation",
  },
  {
    step: "02",
    title: "物件調査・市場分析・企画決定",
    description: "物件の立地や特性を踏まえ、周辺市場（予約状況、稼働率など）を分析。ターゲット層や価格設定を明確にし、収益性の高い運営計画（FEP/WSPなど）と収支シミュレーションをご提案、企画を決定します。",
    phase: "before",
    icon: "analysis",
  },
  {
    step: "03",
    title: "契約締結",
    description: "プランとシミュレーションにご納得いただけましたら、運営代行契約を締結。契約内容や運営方針を丁寧にご説明し、双方の理解を深めます。",
    phase: "before",
    icon: "contract",
  },
  {
    step: "04",
    title: "許認可申請サポート（申請準備・手続き）",
    description: "民泊運営に必要な各種許認可（住宅宿泊事業法/旅館業法、消防法など）の申請準備から手続きまで、経験豊富なスタッフが代行・サポート。保健所や消防署との連携もスムーズに進め、迅速な開業を実現します。",
    phase: "before",
    icon: "license",
  },
  {
    step: "05",
    title: "内装・設備コーディネート＆導入",
    description: "ターゲット層に合わせた内装デザインや家具・家電選定をご提案。快適で魅力的な空間を創出します。インターネット回線、スマートロック、管理システム等の必要な設備導入・設定も行います。",
    phase: "before",
    icon: "interior",
  },
  {
    step: "06",
    title: "OTA登録・ページ作成",
    description: "AirbnbやBooking.com等、主要OTAへの登録を代行。物件写真や周辺写真、魅力的な観光情報などを掲載して決定力を向上させるリスティングページを作成します。",
    phase: "before",
    icon: "registration",
  },
  {
    step: "07",
    title: "運営開始準備・最終確認",
    description: "全ての準備が整ったら、運営開始に向けて最終確認を行います。高品質な写真撮影や備品チェックなどを実施し、スムーズなスタートを保証します。",
    phase: "before",
    icon: "preparation",
  },
  // --- Operation Start (Transition Point) ---
  {
    step: "08",
    title: "運営開始",
    description: "いよいよ運営開始。予約受付からゲスト対応、清掃、レポートまで、CleanNest Hokkaidoが責任を持って運営を代行。オーナー様は安心して運営をお任せいただけます。",
    phase: "start",
    icon: "launch",
  },
  // --- After Operation --- (Blue Theme)
  {
    step: "09",
    title: "予約管理・ゲスト対応",
    description: "予約の受付からチェックイン・チェックアウト対応、ゲストからの問い合わせ対応まで、24時間体制でサポートします。多言語対応も可能で、海外からのゲストにも安心してご利用いただけます。",
    phase: "after",
    icon: "reservation",
  },
  {
    step: "10",
    title: "清掃・メンテナンス",
    description: "専門の清掃スタッフが、ゲストの入れ替わりごとに徹底した清掃を実施。消耗品の補充や設備の点検・修繕も行い、常に最適な状態を維持します。",
    phase: "after",
    icon: "cleaning",
  },
  {
    step: "11",
    title: "収益レポートの提供",
    description: "月次で収益レポートを作成し、運営状況を可視化。収益の推移や稼働率など、詳細なデータを共有し、今後の運営戦略に役立てます。",
    phase: "after",
    icon: "report",
  },
  {
    step: "12",
    title: "価格調整・プロモーション戦略",
    description: "市場の動向や季節要因を考慮し、宿泊料金の最適化を図ります。閑散期・繁忙期に応じたプロモーションやキャンペーンを実施し、稼働率の向上を目指します。",
    phase: "after",
    icon: "pricing",
  },
  {
    step: "13",
    title: "定期的な運営改善提案",
    description: "ゲストからのフィードバックや最新の市場トレンドを基に、運営方法の改善提案を行います。オーナー様と連携しながら、より良いサービス提供と収益向上を追求します。",
    phase: "after",
    icon: "improvement",
  },
  {
    step: "14",
    title: "緊急時対応",
    description: "設備の故障やゲストからの緊急連絡など、予期せぬトラブルにも迅速に対応。24時間体制でサポートし、オーナー様とゲスト双方の安心・安全を確保します。",
    phase: "after",
    icon: "emergency",
  },
]

export default function ImplementationFlowPage() {
  // Helper function to get steps by phase
  const getStepsByPhase = (phase: 'before' | 'start' | 'after') => {
    return implementationFlow.filter(step => step.phase === phase);
  }

  const beforeSteps = getStepsByPhase('before');
  const startStep = getStepsByPhase('start')[0];
  const afterSteps = getStepsByPhase('after');

  return (
    <main className="min-h-screen pb-24 bg-white antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gold-50 to-white py-24 md:py-32 border-b border-gray-200 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-gold-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gold-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gold-200 rounded-full opacity-40 blur-md"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gold-300 rounded-full opacity-20 blur-lg"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 bg-gold-100 text-gold-800 rounded-full mb-6 text-sm font-medium">
              <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
              CleanNest Hokkaido 導入プロセス
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              導入の<span className="relative inline-block">
                <span className="relative z-10">流れ</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-200 opacity-70 -z-10 transform -rotate-1"></span>
              </span>
              <span className="block text-2xl sm:text-3xl mt-4 text-gold-600 font-normal">一人ひとりに寄り添う専門サポート</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              初回相談から運営開始後のフォローまで、CleanNest Hokkaidoが
              オーナー様の民泊事業を責任を持ってサポートいたします。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gold-500 hover:bg-gold-600 text-white rounded-full shadow-md h-12 px-6" asChild>
                <Link href="/contact">
                  無料相談を予約する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-gold-500 text-gold-700 hover:bg-gold-50 rounded-full h-12 px-6" asChild>
                <Link href="/plans">
                  料金プランを見る
                </Link>
              </Button>
            </div>
            
            {/* Scroll indicator */}
            <div className="hidden md:flex flex-col items-center mt-16 animate-bounce">
              <span className="text-sm text-gray-500 mb-2">詳細を見る</span>
              <ArrowDown className="h-5 w-5 text-gold-500" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              民泊運営開始までの<span className="text-gold-600 font-medium">3つのフェーズ</span>
            </h2>
            <p className="text-lg text-gray-600">
              CleanNest Hokkaidoでは、初回相談から運営開始後のサポートまで、
              一貫した体制でオーナー様の民泊ビジネスをトータルサポート。
              経験豊富な専門スタッフが、お客様のニーズや物件に合わせた最適な運営をご提案します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {/* Phase 1 */}
            <div className="bg-gradient-to-br from-gold-50 to-amber-50 rounded-2xl shadow-md p-8 border border-gold-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-12 -mr-12 bg-gold-200 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <span className="inline-block px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm mb-4">準備フェーズ</span>
              <h3 className="text-2xl font-medium text-gray-900 mb-3 relative z-10">開業前準備</h3>
              <p className="text-gray-700 mb-4 relative z-10">相談から許認可申請、内装設計、設備導入まで、開業に向けた準備を徹底サポート。</p>
              <span className="absolute right-4 bottom-4 text-7xl font-bold text-gold-200 opacity-60">1</span>
            </div>
            
            {/* Phase 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl shadow-md p-8 border border-amber-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-12 -mr-12 bg-amber-200 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-4">移行フェーズ</span>
              <h3 className="text-2xl font-medium text-gray-900 mb-3 relative z-10">運営開始</h3>
              <p className="text-gray-700 mb-4 relative z-10">万全の準備を整え、スムーズに運営を開始。予約受付・ゲスト対応を一括代行します。</p>
              <span className="absolute right-4 bottom-4 text-7xl font-bold text-amber-200 opacity-60">2</span>
            </div>
            
            {/* Phase 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md p-8 border border-blue-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-12 -mr-12 bg-blue-200 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">運営フェーズ</span>
              <h3 className="text-2xl font-medium text-gray-900 mb-3 relative z-10">運営サポート</h3>
              <p className="text-gray-700 mb-4 relative z-10">清掃、予約管理、収益報告、改善提案まで、継続的な運営をプロフェッショナルがサポート。</p>
              <span className="absolute right-4 bottom-4 text-7xl font-bold text-blue-200 opacity-60">3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Flow Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Phase 1: Preparation Phase */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-16">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-white text-2xl font-bold mb-6">1</span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                <span className="text-gold-600 font-medium">準備フェーズ</span>
              </h2>
              <div className="w-24 h-1 bg-gold-400 mx-auto mt-4"></div>
            </div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-0">
              {/* Timeline line */}
              <div className="absolute left-7 top-0 bottom-0 w-1 bg-gold-200 hidden lg:block"></div>
              
              {beforeSteps.map((step, index) => (
                <div key={`before-${index}`} className={`lg:col-span-7 group ${index !== 0 ? 'mt-8 lg:mt-0' : ''}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 relative">
                    {/* Step number - visible on large screens */}
                    <div className="hidden lg:flex items-start justify-end pr-8 relative col-span-2">
                      <div className="relative">
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 translate-x-3.5 w-8 h-1 bg-gold-300"></div>
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md border-2 border-gold-400 text-gold-600 text-xl font-bold transition-all group-hover:bg-gold-500 group-hover:text-white">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="col-span-5 bg-white rounded-xl shadow-md p-6 border border-gold-200 hover:border-gold-400 transition-all lg:group-hover:translate-x-2 duration-300 relative">
                      {/* Step number - visible on small screens */}
                      <div className="lg:hidden absolute -left-3 -top-3 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border-2 border-gold-400 text-gold-600 text-lg font-bold">
                        {step.step}
                      </div>
                      
                      <div className="lg:ml-0 ml-10">
                        <h3 className="text-xl font-medium text-gold-700 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                      
                      <div className="absolute top-6 right-6 opacity-10 text-gold-600">
                        <span className="text-6xl font-bold">{step.step}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
          {/* Transition Step */}
          <div className="max-w-5xl mx-auto mb-24 relative">
            <div className="absolute left-7 top-0 h-24 w-1 bg-gradient-to-b from-gold-300 to-blue-300 hidden lg:block"></div>
            
            <div className="py-12 px-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl shadow-lg text-white text-center mx-4 sm:mx-12 lg:mx-24 relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-amber-600 text-2xl font-bold mb-6">
                  {startStep.step}
                </span>
                <h2 className="text-3xl font-medium mb-4">{startStep.title}</h2>
                <p className="text-lg text-amber-50 max-w-2xl mx-auto">
                  {startStep.description}
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay transform translate-x-1/2 translate-y-1/2"></div>
              </div>
            </div>
          </div>
          
          {/* Phase 3: Operation Phase */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-2xl font-bold mb-6">3</span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                <span className="text-blue-600 font-medium">運営フェーズ</span>
              </h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto mt-4"></div>
            </div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-0">
              {/* Timeline line */}
              <div className="absolute left-7 top-0 bottom-0 w-1 bg-blue-200 hidden lg:block"></div>
              
              {afterSteps.map((step, index) => (
                <div key={`after-${index}`} className={`lg:col-span-7 group ${index !== 0 ? 'mt-8 lg:mt-0' : ''}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 relative">
                    {/* Step number - visible on large screens */}
                    <div className="hidden lg:flex items-start justify-end pr-8 relative col-span-2">
                      <div className="relative">
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 translate-x-3.5 w-8 h-1 bg-blue-300"></div>
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md border-2 border-blue-400 text-blue-600 text-xl font-bold transition-all group-hover:bg-blue-500 group-hover:text-white">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="col-span-5 bg-white rounded-xl shadow-md p-6 border border-blue-200 hover:border-blue-400 transition-all lg:group-hover:translate-x-2 duration-300 relative">
                      {/* Step number - visible on small screens */}
                      <div className="lg:hidden absolute -left-3 -top-3 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border-2 border-blue-400 text-blue-600 text-lg font-bold">
                        {step.step}
                      </div>
                      
                      <div className="lg:ml-0 ml-10">
                        <h3 className="text-xl font-medium text-blue-700 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                      
                      <div className="absolute top-6 right-6 opacity-10 text-blue-600">
                        <span className="text-6xl font-bold">{step.step}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              CleanNest Hokkaidoの<span className="text-gold-600 font-medium">導入メリット</span>
            </h2>
            <p className="text-lg text-gray-600">
              豊富な経験と専門知識を活かしたトータルサポートで、
              オーナー様の手間を省きながら収益を最大化します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-8 border border-gray-200 hover:border-gold-300 transition-all duration-300 hover:shadow-lg group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">ワンストップサービス</h3>
              <p className="text-gray-600">
                開業準備から運営まで一貫して対応。複数の業者と連携する手間がなく、スムーズな立ち上げが可能です。
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-8 border border-gray-200 hover:border-gold-300 transition-all duration-300 hover:shadow-lg group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">専門知識の活用</h3>
              <p className="text-gray-600">
                許認可申請や市場分析など専門的な知識が必要な領域もお任せいただけます。スピーディーかつ確実な対応が可能です。
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-8 border border-gray-200 hover:border-gold-300 transition-all duration-300 hover:shadow-lg group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">収益性の向上</h3>
              <p className="text-gray-600">
                市場動向に合わせた価格調整や効果的なプロモーション戦略により、稼働率と収益を最大化します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-amber-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">
                あなたの物件の可能性を<br className="hidden sm:inline" />最大限に引き出します
              </h2>
              <p className="text-lg text-amber-50 mb-8">
                まずは無料相談で、あなたの物件に最適な運営プランをご提案します。
                豊富な経験と専門知識を持ったスタッフが、丁寧にヒアリングいたします。
              </p>
            </div>
            
            <div className="flex-shrink-0 w-full lg:w-auto">
              <Button className="w-full lg:w-auto bg-white hover:bg-gray-100 text-gold-600 rounded-full shadow-lg h-14 px-8 text-lg" asChild>
                <Link href="/contact">
                  無料相談を予約する
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Link to Related Services */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">関連サービス</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Link href="/services/cleaning" className="block group">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-gold-300 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">清掃サポート</h3>
                  <p className="text-gray-600 mb-4">ホテル品質の清掃サービスで、ゲストに清潔で快適な滞在を</p>
                  <span className="inline-flex items-center text-gold-600 group-hover:translate-x-1 transition-transform">
                    詳細を見る
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
              
              <Link href="/plans" className="block group">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-gold-300 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">料金プラン</h3>
                  <p className="text-gray-600 mb-4">あなたの物件に最適な運営プランと料金詳細</p>
                  <span className="inline-flex items-center text-gold-600 group-hover:translate-x-1 transition-transform">
                    詳細を見る
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
              
              <Link href="/owner-recruitment" className="block group">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-gold-300 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">オーナー募集</h3>
                  <p className="text-gray-600 mb-4">あなたの物件を民泊として活用し収益を最大化</p>
                  <span className="inline-flex items-center text-gold-600 group-hover:translate-x-1 transition-transform">
                    詳細を見る
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

