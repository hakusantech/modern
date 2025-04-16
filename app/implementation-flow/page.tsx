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
  description: "CleanNest Hokkaidoの民泊運営代行サービス導入プロセスをご紹介。初回相談から運営開始まで、わかりやすく8ステップでサポートします。専門コンサルタントが伴走し、スムーズな導入をお約束します。",
}

// 導入フローの各ステップ
const implementationSteps = [
  {
    step: "01",
    title: "無料相談",
    description: "お客様から寄せられる立地や物件、賃貸物件か所有物件かをヒアリングして最適なプランをご提案いたします。弊社（札幌市）まで来られなくてもオンラインでのビデオミーティングも可能です。",
    icon: Phone,
    color: "gold",
  },
  {
    step: "02",
    title: "企画決定",
    description: "賃貸物件または所有物件、実際のけま出しまたは出張宿泊などから企画を決定します。弊社とご用意したオプションから最適なプランをお選びいただけます。",
    icon: CheckCircle,
    color: "gold",
  },
  {
    step: "03",
    title: "現地調査",
    description: "周辺のゲスト宿泊者の予約状況や稼働率など、総合施設などとの関連調査を行います。この調査における「立地力」と「物件力」が大きく集客に影響を与えます。",
    icon: Building,
    color: "gold",
  },
  {
    step: "04",
    title: "申請準備",
    description: "消防法令や保健所（旅館業申請）または北海道庁局（住宅宿泊申請）など、各行政機関や窓場所における所有または貸出の申請に必要な「書類」や「書面」などについて調査を行い、申請の準備を進めます。",
    icon: FileText,
    color: "gold",
  },
  {
    step: "05",
    title: "契約手続き",
    description: "民泊営業（旅館業等）に必要な家具や条件を満たすことが確認できたら、いよいよ契約手続きの準備を行います。契約締結後はスムーズにオープンに向けて動き出します。",
    icon: User,
    color: "gold",
  },
  {
    step: "06",
    title: "申請手続き",
    description: "各行政機関に必要書類を提出し、許可（届け出）するために必要な防災設備等を施設に設置します。順番としては、消防設備の設置が先で、その設備確認書をもとに保健所や道庁の許可申請を行います。このタイミングで、消防設備などのメンテナンスコストについても説明します。",
    icon: Calendar,
    color: "gold",
  },
  {
    step: "07",
    title: "設備導入",
    description: "民泊営業（旅館業等）に必要な家具や条件を満たすための設備を導入します。同時に、インターネット回線の開通やスマートロック、タブレット用の管理システムのセットアップ、スマートキーとの連携など設備の設置を行います。",
    icon: Settings,
    color: "gold",
  },
  {
    step: "08",
    title: "運営開始",
    description: "施設に必要なすべての設備が整ったら、安心しておまかせください。開設に必要な高品質な写真の撮影、OTA等（airbnb, Booking.com）に登録し、予約受付を開始します。宿泊ゲストの予約からチェックイン/チェックアウトまでをサポートする運営が始まります。",
    icon: Clock,
    color: "gold",
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
              <span className="block text-2xl sm:text-3xl mt-2 text-gold-600">実績豊富な専門家がサポート</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              初回相談から運営開始まで、わかりやすく8ステップでサポート。<br />
              専門コンサルタントが事業開始から運営開始までを全面的にサポートします。
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

      {/* 導入フロー概要 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              スムーズな導入プロセス
            </h2>
            <p className="text-lg text-gray-600">
              CleanNest Hokkaidoでは、民泊運営の立ち上げから運営までをトータルでサポート。<br />
              未経験のオーナー様でも安心してスタートできる体制を整えています。
            </p>
          </div>
          
          {/* 導入ステップのタイムライン */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* 中央の線 - PCのみ表示 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gold-200 hidden md:block"></div>
              
              {/* 各ステップ */}
              <div className="space-y-24">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* ステップ番号と中央丸マーク - PCのみ表示 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 bg-gold-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold hidden md:flex">
                      {step.step}
                    </div>
                    
                    {/* コンテンツエリア */}
                    <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                      <div className={`mb-8 md:mb-0 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                          {/* モバイルでのみ表示するステップ番号 */}
                          <div className="flex items-center mb-4 md:hidden">
                            <div className="bg-gold-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                              {step.step}
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                          </div>
                          
                          {/* PCでのみ表示するタイトル */}
                          <h3 className="text-xl font-medium text-gray-900 mb-4 hidden md:block">{step.title}</h3>
                          
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`${index % 2 === 1 ? 'md:order-1 text-right' : 'text-left'}`}>
                        <div className={`inline-block rounded-full p-6 ${index % 2 === 0 ? 'bg-gold-50' : 'bg-gray-50'}`}>
                          <step.icon className={`h-16 w-16 ${index % 2 === 0 ? 'text-gold-500' : 'text-gray-400'}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

