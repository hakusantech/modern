import Image from "next/image"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Calendar,
  Users,
  ClipboardCheck,
  Briefcase,
  Settings,
  LineChart,
  Clock,
  Utensils,
  Sparkles,
  History,
  Globe,
  Award,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// サービスデータ
const services = {
  "ryokan-management": {
    title: "旅館運営代行",
    subtitle: "RYOKAN MANAGEMENT",
    description:
      "旅館業法に基づく旅館の運営をトータルサポート。予約管理、接客対応、清掃、設備管理、料理の手配まで、旅館運営に必要なすべてのサービスを提供します。",
    heroImage: "/images/traditional-ryokan.png",
    benefits: [
      {
        icon: <History className="h-10 w-10 text-ice-400" />,
        title: "伝統の継承",
        description: "日本の伝統的なおもてなしの心を大切にしながら、現代のニーズに合わせたサービスを提供します",
      },
      {
        icon: <Globe className="h-10 w-10 text-ice-400" />,
        title: "インバウンド対応",
        description: "多言語対応と文化的配慮で、世界中からのゲストに最高のおもてなしを提供します",
      },
      {
        icon: <LineChart className="h-10 w-10 text-ice-400" />,
        title: "収益の最大化",
        description: "最適な価格設定と効率的な運営で、旅館の収益を最大限に引き出します",
      },
      {
        icon: <Clock className="h-10 w-10 text-ice-400" />,
        title: "時間の節約",
        description: "運営業務をすべて代行することで、オーナー様の貴重な時間を節約します",
      },
    ],
    services: [
      {
        icon: <Calendar className="h-6 w-6 text-ice-400" />,
        title: "予約管理",
        description: "複数の予約チャネルを一元管理し、ダブルブッキングを防止。最適な料金設定で収益を最大化します。",
      },
      {
        icon: <Users className="h-6 w-6 text-ice-400" />,
        title: "接客対応",
        description:
          "日本語、英語、中国語など多言語での接客対応。日本の伝統的なおもてなしの心を大切にしたサービスを提供します。",
      },
      {
        icon: <Utensils className="h-6 w-6 text-ice-400" />,
        title: "料理手配",
        description: "地元の食材を活かした季節感あふれる料理の企画・手配。特別な食事体験を提供します。",
      },
      {
        icon: <ClipboardCheck className="h-6 w-6 text-ice-400" />,
        title: "清掃・メンテナンス",
        description: "プロの清掃スタッフによる高品質な清掃と、定期的な設備点検・メンテナンスを実施します。",
      },
      {
        icon: <Sparkles className="h-6 w-6 text-ice-400" />,
        title: "体験プログラム企画",
        description: "地域の文化や自然を活かした体験プログラムを企画。ゲストの滞在を特別なものにします。",
      },
      {
        icon: <Briefcase className="h-6 w-6 text-ice-400" />,
        title: "経営サポート",
        description: "収支レポート作成、税務サポート、経営アドバイスなど、事業としての成功をバックアップします。",
      },
    ],
    process: [
      {
        number: "01",
        title: "無料相談",
        description: "旅館の現状や課題、目標などをヒアリングし、最適なプランをご提案します。",
      },
      {
        number: "02",
        title: "現地調査・分析",
        description: "旅館の設備、立地、サービス内容などを詳細に分析し、改善点を洗い出します。",
      },
      {
        number: "03",
        title: "運営計画策定",
        description: "分析結果をもとに、具体的な運営計画と収益シミュレーションを作成します。",
      },
      {
        number: "04",
        title: "契約・準備",
        description: "契約後、スタッフ教育や予約システム導入など、運営開始の準備を行います。",
      },
      {
        number: "05",
        title: "運営開始",
        description: "予約管理、接客、清掃など、すべての運営業務を代行します。",
      },
    ],
    faq: [
      {
        question: "どのような旅館が運営代行に適していますか？",
        answer:
          "小規模な旅館から大規模な温泉旅館まで、様々な規模の旅館に対応しています。特に、後継者不足や人手不足でお悩みの旅館、インバウンド対応を強化したい旅館に適しています。",
      },
      {
        question: "運営代行の費用はどのくらいかかりますか？",
        answer:
          "基本的には売上の一定割合（通常15〜25%）をいただく成果報酬型です。旅館の規模やサービス内容によって異なりますので、詳細は個別にご相談ください。",
      },
      {
        question: "伝統的なおもてなしの質は維持できますか？",
        answer:
          "はい、日本の伝統的なおもてなしの心を大切にしながら、現代のニーズに合わせたサービスを提供します。経験豊富なスタッフが、旅館の伝統と価値を理解した上でサービスを提供します。",
      },
      {
        question: "インバウンド対応はどのように行いますか？",
        answer:
          "多言語対応スタッフの配置、多言語案内の作成、文化的配慮を含めたサービス提供など、外国人ゲストに配慮したおもてなしを実現します。",
      },
      {
        question: "既存のスタッフはどうなりますか？",
        answer:
          "既存のスタッフと協力して運営することも可能です。スタッフ教育や業務効率化のサポートも行い、より良いサービス提供を実現します。",
      },
    ],
    caseStudies: [
      {
        title: "北海道小樽の老舗旅館",
        description:
          "後継者不足で廃業を検討していた創業100年の老舗旅館。運営代行により、伝統を守りながらも現代のニーズに合わせたサービスを提供し、稼働率が40%から85%に向上。特に外国人観光客からの高評価を獲得し、年間売上が2倍に増加しました。",
        image: "/placeholder.svg?height=400&width=600",
        result: "稼働率 40% → 85%",
      },
      {
        title: "札幌市内の温泉旅館",
        description:
          "人手不足で運営に苦労していた温泉旅館。運営代行により、効率的なスタッフ配置と予約システムの導入で業務を効率化。地元食材を活かした料理プランの開発や体験プログラムの充実により、リピーター率が向上し、客単価が30%アップしました。",
        image: "/placeholder.svg?height=400&width=600",
        result: "客単価 30%アップ",
      },
    ],
    content: [
      {
        title: "旅館運営の課題を解決",
        description:
          "旅館経営は、伝統と現代のニーズのバランスが求められる難しいビジネスです。人手不足、言語対応、オンライン予約管理など、様々な課題に直面しています。CleanNest Hokkaidoは、これらの課題を解決し、旅館の魅力を最大限に引き出すサポートを提供します。",
      },
      {
        title: "包括的な運営サポート",
        description:
          "予約管理からゲスト対応、清掃、設備管理まで、旅館運営に必要なすべてのサービスをワンストップで提供します。特に外国人観光客対応に強みを持ち、多言語対応や文化的な配慮も含めた質の高いサービスを実現します。",
      },
      {
        title: "伝統と革新の融合",
        description:
          "日本の伝統的なおもてなしの心を大切にしながら、最新のテクノロジーやマーケティング手法を取り入れ、旅館の魅力を国内外に発信します。伝統を守りながらも、時代のニーズに合わせた革新的なサービスを提供することで、旅館の価値を高めます。",
      },
    ],
  },
  "minpaku-management": {
    title: "民泊運営代行",
    subtitle: "MINPAKU MANAGEMENT",
    description:
      "住宅宿泊業法に基づく民泊の運営を完全代行。予約管理、ゲスト対応、清掃、メンテナンスまで、すべてのプロセスをプロフェッショナルが担当します。",
    content: [
      {
        title: "民泊運営代行とは？",
        description:
          "民泊運営代行とは、収益物件の仲介から、リフォーム工事、清掃業務に至るまで、民泊運営に必要なすべての業務を専門業者が一括して担うサービスです。\n\n運営代行業者は、物件の運用設計、行政への届出・登記手続き、室内のインテリアセットアップ、OTA（オンライン旅行予約サイト）への掲載・最適化、予約管理、清掃手配、ゲスト対応やトラブル処理など、宿泊事業に関わる幅広い業務を包括的にサポートします。\n\n民泊運営のプロフェッショナルに依頼することで、外国人旅行者のニーズや近隣物件の価格動向、過去データと将来予測に基づいた料金戦略を立てることができ、収益性の高い運営が可能になります。",
      },
      {
        title: "民泊運営の完全代行",
        description:
          "物件の登録から予約管理、ゲスト対応、清掃、メンテナンスまで、民泊運営に関するすべての業務を代行します。オーナー様は煩わしい運営業務から解放され、安定した収益を得ることができます。",
      },
      {
        title: "高い稼働率の実現",
        description:
          "適切な価格設定、魅力的な物件紹介、迅速な予約対応など、稼働率を高めるための様々な施策を実施します。季節やイベントに合わせた柔軟な価格戦略により、年間を通じて安定した収益を確保します。",
      },
      {
        title: "ゲスト満足度の向上",
        description:
          "丁寧な清掃、きめ細やかなゲスト対応、迅速なトラブル解決など、ゲスト満足度を高めるサービスを提供します。高評価レビューの獲得により、物件の価値と予約率の向上につなげます。",
      },
    ],
  },
  cleaning: {
    title: "民泊清掃",
    subtitle: "MINPAKU CLEANING",
    description:
      "プロのスタッフによる徹底的な清掃サービス。チェックアウトからチェックインまでの短時間で、高品質な清掃を実現します。",
    content: [
      {
        title: "プロフェッショナルな清掃サービス",
        description:
          "経験豊富な清掃スタッフが、民泊に特化した清掃サービスを提供します。一般的な清掃だけでなく、民泊特有の清掃ポイントを熟知したスタッフが、隅々まで丁寧に清掃します。",
      },
      {
        title: "迅速かつ柔軟な対応",
        description:
          "チェックアウトからチェックインまでの短時間で、高品質な清掃を実現します。急な予約や変更にも柔軟に対応し、オーナー様の運営をサポートします。",
      },
      {
        title: "高評価につながる清潔さ",
        description:
          "清潔さは宿泊施設の評価において最も重要な要素の一つです。当社の徹底した清掃サービスにより、ゲストからの高評価を獲得し、予約率の向上につなげます。",
      },
    ],
  },
  permits: {
    title: "各種申請許可サポート",
    subtitle: "PERMIT SUPPORT",
    description:
      "民泊営業に必要な各種許認可の申請をサポート。住宅宿泊事業法（民泊新法）の届出、旅館業法の許可申請など、複雑な手続きをサポートします。",
    content: [
      {
        title: "法的手続きの完全サポート",
        description:
          "民泊営業に必要な住宅宿泊事業法（民泊新法）の届出や旅館業法の許可申請など、複雑な法的手続きを完全にサポートします。法改正にも常に対応し、最新の情報に基づいたアドバイスを提供します。",
      },
      {
        title: "スムーズな申請プロセス",
        description:
          "必要書類の作成から申請、行政とのやり取りまで、申請プロセス全体をサポートします。経験豊富なスタッフが対応することで、スムーズな申請と許可取得を実現します。",
      },
      {
        title: "コンプライアンスの徹底",
        description:
          "法令遵守は民泊ビジネスの基本です。消防法、建築基準法など関連法規への対応も含め、コンプライアンスを徹底したサポートを提供します。安心して営業を続けられる環境を整えます。",
      },
    ],
  },
  consulting: {
    title: "民泊運営企画・相談",
    subtitle: "MINPAKU CONSULTING",
    description:
      "民泊ビジネスの立ち上げから運営まで、経験豊富なコンサルタントがサポート。収益計画、マーケティング戦略、運営効率化など、あらゆる相談に対応します。",
    content: [
      {
        title: "ビジネス立ち上げ支援",
        description:
          "物件選びから収益計画、マーケティング戦略まで、民泊ビジネスの立ち上げを総合的にサポートします。初期投資の最適化と早期の収益化を実現するための具体的なアドバイスを提供します。",
      },
      {
        title: "運営効率化コンサルティング",
        description:
          "既存の民泊ビジネスの運営効率化をサポートします。予約管理システムの導入、清掃・メンテナンスの最適化、コスト削減など、収益性を高めるための具体的な施策を提案します。",
      },
      {
        title: "マーケティング戦略の策定",
        description:
          "競争が激化する民泊市場で差別化を図るためのマーケティング戦略を策定します。ターゲット設定、価格戦略、プロモーション施策など、物件の特性を活かした効果的な戦略を提案します。",
      },
    ],
  },
  "property-intro": {
    title: "民泊物件紹介",
    subtitle: "PROPERTY INTRODUCTION",
    description:
      "民泊運営に最適な物件をご紹介。立地条件、設備、収益性などを考慮し、お客様のニーズに合った物件をご提案します。",
    content: [
      {
        title: "最適な物件選びをサポート",
        description:
          "民泊運営に適した物件の条件は、一般的な居住用物件とは異なります。立地、間取り、設備など、民泊に特化した視点で物件を厳選し、お客様のニーズに合った最適な物件をご紹介します。",
      },
      {
        title: "収益性の高い物件提案",
        description:
          "過去の運営データや市場分析に基づき、収益性の高い物件をご提案します。初期投資と予想収益のバランスを考慮し、投資効率の高い物件選びをサポートします。",
      },
      {
        title: "物件の民泊適正診断",
        description:
          "お持ちの物件や検討中の物件が民泊運営に適しているかを診断します。法的制約、周辺環境、設備状況など多角的に分析し、必要な改修や設備投資についてもアドバイスします。",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({ service }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service as keyof typeof services]

  if (!service) {
    notFound()
  }

  // 民泊運営代行ページへのアクセスを制限
  if (params.service === "minpaku-management") {
    notFound() // 404ページにリダイレクト
  }

  // 旅館運営代行ページの特別レイアウト
  if (params.service === "ryokan-management") {
    return (
      <PageLayout
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        breadcrumbs={[{ label: "サービス", href: "/services" }, { label: service.title }]}
      >
        {/* ヒーローセクション */}
        <Section background="darkgray-900" className="pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-ice-600/20 rounded-full text-sm font-medium text-ice-400">
                CleanNest Hokkaido
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-snow-50">伝統と革新が融合する旅館運営代行</h2>
              <p className="text-snow-300">
                旅館経営は、伝統と現代のニーズのバランスが求められる難しいビジネスです。人手不足、言語対応、オンライン予約管理など、様々な課題に直面しています。
              </p>
              <p className="text-snow-300">
                CleanNest
                Hokkaidoは、これらの課題を解決し、旅館の魅力を最大限に引き出すサポートを提供します。日本の伝統的なおもてなしの心を大切にしながら、最新のテクノロジーやマーケティング手法を取り入れ、旅館の価値を高めます。
              </p>
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
                src={service.heroImage || "/images/traditional-ryokan.png"}
                alt="伝統的な旅館のイメージ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkgray-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-darkgray-900/80 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-xl font-bold text-snow-50">伝統を守り、未来へつなぐ</h3>
                <p className="text-sm text-snow-300">日本の旅館文化を次世代に継承するための運営サポート</p>
              </div>
            </div>
          </div>
        </Section>

        {/* メリットセクション */}
        <Section title="旅館運営代行のメリット" background="darkgray-950">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits?.map((benefit, index) => (
              <div
                key={index}
                className="bg-darkgray-800 border border-darkgray-700 rounded-xl p-6 hover:border-ice-600/50 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-snow-50">{benefit.title}</h3>
                  <p className="text-snow-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* サービス内容セクション */}
        <Section title="提供サービス" subtitle="SERVICES" background="darkgray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.services?.map((item, index) => (
              <div
                key={index}
                className="bg-darkgray-800 border border-darkgray-700 rounded-xl p-6 hover:border-ice-600/30 transition-all"
              >
                <div className="flex items-start">
                  <div className="bg-ice-600/10 p-3 rounded-lg mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-snow-50">{item.title}</h3>
                    <p className="text-sm text-snow-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 導入プロセスセクション */}
        <Section title="導入プロセス" subtitle="PROCESS" background="darkgray-950">
          <div className="relative">
            {/* 背景ライン */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-darkgray-800 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {service.process?.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-ice-600/10 border-4 border-darkgray-950 flex items-center justify-center mb-4 z-10">
                      <span className="text-3xl font-bold text-ice-400">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center text-snow-50">{step.title}</h3>
                    <p className="text-sm text-center text-snow-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* タブセクション */}
        <Section title="旅館運営代行の詳細" subtitle="DETAILS" background="darkgray-900">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">概要</TabsTrigger>
              <TabsTrigger value="features">特徴</TabsTrigger>
              <TabsTrigger value="faq">よくある質問</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-snow-50">包括的な運営サポート</h3>
                  <p className="text-snow-300 mb-4">
                    予約管理からゲスト対応、清掃、設備管理まで、旅館運営に必要なすべてのサービスをワンストップで提供します。特に外国人観光客対応に強みを持ち、多言語対応や文化的な配慮も含めた質の高いサービスを実現します。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">予約管理・カレンダー同期</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">多言語対応のゲスト対応</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">清掃・メンテナンス管理</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">料理の企画・手配</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">体験プログラムの企画・運営</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-snow-50">伝統と革新の融合</h3>
                  <p className="text-snow-300 mb-4">
                    日本の伝統的なおもてなしの心を大切にしながら、最新のテクノロジーやマーケティング手法を取り入れ、旅館の魅力を国内外に発信します。伝統を守りながらも、時代のニーズに合わせた革新的なサービスを提供することで、旅館の価値を高めます。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">伝統的なおもてなしの継承</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">最新テクノロジーの導入</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">SNSやWebを活用した情報発信</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">地域資源を活かした体験プログラム</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ice-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-snow-300">現代のニーズに合わせたサービス改善</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-darkgray-800 border border-darkgray-700 rounded-xl p-6">
                  <div className="flex flex-col items-center text-center">
                    <Award className="h-12 w-12 text-ice-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-snow-50">日本の伝統文化</h3>
                    <p className="text-snow-300">
                      日本の伝統的な旅館文化を大切にし、本物のおもてなしを提供。外国人ゲストにも日本の魅力を伝えます。
                    </p>
                  </div>
                </div>
                <div className="bg-darkgray-800 border border-darkgray-700 rounded-xl p-6">
                  <div className="flex flex-col items-center text-center">
                    <Globe className="h-12 w-12 text-ice-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-snow-50">グローバル対応</h3>
                    <p className="text-snow-300">
                      多言語対応と文化的配慮で、世界中からのゲストに最高のおもてなしを提供します。
                    </p>
                  </div>
                </div>
                <div className="bg-darkgray-800 border border-darkgray-700 rounded-xl p-6">
                  <div className="flex flex-col items-center text-center">
                    <Settings className="h-12 w-12 text-ice-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-snow-50">効率的な運営</h3>
                    <p className="text-snow-300">
                      最新のシステムと効率的な運営手法で、コスト削減と収益最大化を実現します。
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="faq">
              <div className="space-y-4">
                {service.faq?.map((item, index) => (
                  <div key={index} className="bg-darkgray-800 border border-darkgray-700 rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-2 text-snow-50">{item.question}</h3>
                    <p className="text-snow-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Section>

        {/* 事例セクション */}
        <Section title="成功事例" subtitle="CASE STUDIES" background="darkgray-950">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.caseStudies?.map((caseStudy, index) => (
              <div key={index} className="bg-darkgray-800 border border-darkgray-700 rounded-xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={caseStudy.image || "/placeholder.svg?height=400&width=600"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkgray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-ice-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.result}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-snow-50">{caseStudy.title}</h3>
                  <p className="text-snow-300 mb-4">{caseStudy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA セクション */}
        <Section background="darkgray-800" className="rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{service.title}のお問い合わせ</h2>
              <p className="text-paleblue-100">
                サービスの詳細や料金、導入方法についてのご質問は、お気軽にお問い合わせください。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="text-white" asChild>
                <Link href="/#contact">
                  お問い合わせをする
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </PageLayout>
    )
  }

  // 他のサービスページは通常のレイアウト
  return (
    <PageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      breadcrumbs={[{ label: "サービス", href: "/services" }, { label: service.title }]}
    >
      {service.content.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          background={index % 2 === 0 ? "darkgray-900" : "darkgray-950"}
        />
      ))}

      {/* CTA セクション */}
      <Section background="darkgray-800" className="rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{service.title}のお問い合わせ</h2>
            <p className="text-paleblue-100">
              サービスの詳細や料金、導入方法についてのご質問は、お気軽にお問い合わせください。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold-600 hover:bg-gold-700"
            >
              お問い合わせをする
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

