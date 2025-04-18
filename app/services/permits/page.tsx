/* =============================================================
 *  PermitsPage.tsx  –  CleanNest Hokkaido
 *  -------------------------------------------------------------
 *  ✓ 無料相談カードの横ズレを修正（flex → CSS Grid）
 *  ✓ アイコン列を固定幅化（flex-none + md:w-20）
 *  ✓ 既存 UI/スタイルはそのまま維持
 * ============================================================ */

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  FileText,
  Building2,
  Calendar,
  Shield,
} from "lucide-react";

/* ---------- メタデータ ---------- */
export const metadata = {
  title: "許認可申請サポート | CleanNest Hokkaido",
  description:
    "札幌・北海道の住宅宿泊事業法(民泊)、旅館業法の許認可申請をサポート。手続きの煩雑さからオーナー様を解放し、スムーズな開業をサポートします。",
};

/* ---------- タイムライン定義 ---------- */
const steps = [
  {
    title: "無料相談",
    description:
      "申請内容について専門スタッフが丁寧にヒアリングします。必要書類や手続きの流れをご説明します。",
    points: [
      "物件の用途や立地条件の確認",
      "申請に必要な書類の説明",
      "法律上の制約事項の説明",
      "申請から許可までの流れ",
    ],
    icon: FileText,
    duration: "約30分〜1時間",
  },
  {
    title: "現地調査",
    description:
      "物件の状況を確認し、法律上の要件を満たすための調査を行います。必要に応じて改修プランをご提案します。",
    points: [
      "物件の現状確認と撮影",
      "法的要件との適合性チェック",
      "必要な改修箇所の洗い出し",
      "周辺環境の確認",
    ],
    icon: Building2,
    duration: "約1〜2時間",
  },
  {
    title: "書類作成サポート",
    description:
      "申請に必要な書類を専門スタッフが作成サポートします。申請書類の記入から添付書類の準備まで、すべてサポートします。",
    points: [
      "申請書の作成と記入サポート",
      "平面図や配置図の作成サポート",
      "各種証明書類の取得サポート",
      "添付書類の収集と整理サポート",
    ],
    icon: FileText,
    duration: "約1〜2週間",
  },
  {
    title: "申請・許可取得サポート",
    description:
      "行政機関への申請手続きをサポートします。申請後も進捗状況を随時報告し、許可取得までフォローします。",
    points: [
      "行政機関への申請手続きサポート",
      "追加資料の提出対応",
      "申請状況の進捗報告",
      "許可証の受け取りサポート",
    ],
    icon: Shield,
    duration: "約1〜3ヶ月",
  },
] as const;

/* =============================================================
 *  許認可申請サポートページ
 * ============================================================ */
export const PermitsPage = () => (
  <div className="pt-16 bg-white">
    {/* ==================== Hero Section ==================== */}
    <section className="relative py-24 bg-white overflow-hidden">
      {/* 上下のデコライン */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* -------- コピー -------- */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <div className="relative">
                  <span className="inline-block w-16 h-px bg-gold-400" />
                  <span className="inline-block w-3 h-3 rounded-full bg-gold-400 -mt-1 ml-1" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                各種<span className="text-gold-500 font-normal">申請許可</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl font-light">
                複雑な申請手続きをプロフェッショナルが代行。住宅宿泊事業法（民泊新法）
                や旅館業法の許認可申請を確実にサポートし、スムーズな開業をお手伝いします。
              </p>
            </div>

            <div className="space-y-4">
              {[
                "住宅宿泊事業法の申請サポート",
                "旅館業法の許可申請サポート",
                "必要書類の作成・収集サポート",
                "申請から許可取得までの完全サポート",
              ].map((txt) => (
                <div key={txt} className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{txt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-normal px-8 py-6 h-auto text-lg shadow-lg shadow-gold-300/20 hover:shadow-xl hover:shadow-gold-300/30 transition-all duration-300 border-none"
              >
                <Link href="/#contact">
                  無料相談を予約する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* -------- 画像 -------- */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl border border-gold-100">
            <Image
              src="/images/permit-application-support.png"
              alt="各種申請許可サポート"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-gold-100">
              <h3 className="text-xl font-light text-gray-900">
                法的手続きを<span className="text-gold-500">スムーズに</span>
              </h3>
              <p className="text-sm text-gray-600">
                専門知識を持つプロフェッショナルが申請をサポート
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==================== Application Type Section ==================== */}
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            申請<span className="text-gold-500 font-normal">種類</span>
          </h2>
          <p className="text-gray-600">
            宿泊施設を運営するためには、物件の種類や運営形態によって異なる法律に基づく申請が必要です。
            専門知識を持つ私たちが、最適な申請方法をご提案します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* === Card 1 === */}
          <Card className="relative bg-white border border-gold-100 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden pt-1">
            {/* 装飾ライン */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500" />
            <CardHeader>
              <CardTitle className="text-xl font-light text-gray-900">
                住宅宿泊事業法（民泊新法）
              </CardTitle>
              <CardDescription className="text-gray-600">
                年間提供日数180日以内の住宅を活用した宿泊サービス
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                2018年6月に施行された住宅宿泊事業法に基づく民泊の申請をサポートします。
                住宅宿泊事業者（ホスト）としての登録に必要な手続きをサポートします。
              </p>
              <div className="space-y-3">
                {[
                  "都道府県知事等への届出サポート",
                  "安全措置・衛生措置の確認",
                  "近隣住民への説明資料作成",
                  "法令に基づく書類作成・提出",
                ].map((txt) => (
                  <div key={txt} className="flex items-start">
                    <Check className="h-4 w-4 text-gold-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{txt}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* === Card 2 === */}
          <Card className="relative bg-white border border-gold-100 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden pt-1">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500" />
            <CardHeader>
              <CardTitle className="text-xl font-light text-gray-900">
                旅館業法
              </CardTitle>
              <CardDescription className="text-gray-600">
                年間を通じて営業可能な宿泊施設の許可申請
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                旅館業法に基づく簡易宿所や旅館・ホテルの営業許可申請をサポートします。
                年間を通じて営業したい方に適した申請方法です。
              </p>
              <div className="space-y-3">
                {[
                  "保健所への許可申請サポート",
                  "構造設備の基準適合確認",
                  "消防法に基づく設備確認",
                  "営業開始までの完全サポート",
                ].map((txt) => (
                  <div key={txt} className="flex items-start">
                    <Check className="h-4 w-4 text-gold-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{txt}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* ==================== Process Section (Grid 修正版) ==================== */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            申請サポート<span className="text-gold-500 font-normal">プロセス</span>
          </h2>
          <p className="text-gray-600">
            申請から許可取得まで、専門スタッフが一貫してサポートします。
            複雑な手続きをわかりやすく説明し、スムーズな開業をお手伝いします。
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative md:grid md:grid-cols-[auto,1fr] md:gap-8 ${
                index < steps.length - 1 ? "pb-16" : ""
              }`}
            >
              {/* 縦ライン（最後以外） */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-10 bottom-16 w-px bg-gold-200" />
              )}

              {/* -------- アイコン列 -------- */}
              <div className="flex flex-col items-center flex-none md:w-20">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 flex items-center justify-center shadow-lg shadow-gold-300/20 z-10">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="mt-4 flex items-center gap-2 w-full">
                  <Calendar className="h-5 w-5 text-gold-500 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-600 whitespace-nowrap">{step.duration}</span>
                </div>
              </div>

              {/* -------- カード本体 -------- */}
              <div className="bg-white rounded-lg shadow-md border border-gold-100 p-6 md:p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {step.points.map((point) => (
                    <div key={point} className="flex items-start">
                      <Check className="h-4 w-4 text-gold-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ==================== CTA Section ==================== */}
    <section className="py-24 bg-gray-50 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gold-100">
          <div className="p-10 sm:p-12 relative">
            {/* デコ丸 */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold-50 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-50 rounded-tr-full" />

            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-light mb-6 text-gray-900">
                複雑な申請手続きは<span className="text-gold-500">プロ</span>にお任せください
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                法律や規制を熟知した専門スタッフが、申請から許可取得までをトータルサポート。
                あなたの大切な時間とエネルギーを本来の事業に集中できます。
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-normal px-8 py-6 h-auto text-lg shadow-lg shadow-gold-300/20 hover:shadow-xl hover:shadow-gold-300/30 transition-all duration-300 border-none"
                >
                  <Link href="/#contact">
                    無料相談を予約する
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
);

export default PermitsPage;