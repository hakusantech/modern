import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, CheckCircle2, XCircle, AlertCircle, ChevronDown } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// ヘルパーコンポーネント - チェックコラムの意味を説明するツールチップ
function ColumnHelperTooltip({ children, text }: { children: React.ReactNode, text: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="inline-flex items-center cursor-help">
          {children}
          <AlertCircle className="h-3 w-3 ml-1 text-gray-400" />
        </div>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs p-2 text-xs bg-white text-gray-800 border border-gray-300">
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  )
}

// Define PricingRow component first
function PricingRow({
  title,
  description,
  price,
  required,
}: {
  title: string
  description: string
  price: string
  required?: boolean
}) {
  return (
    <tr className="border-t first:border-t-0 border-gray-100">
      <td className="py-2 sm:py-3 px-3 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="font-medium text-gray-900">{title}</div>
          {required !== undefined && (
            <Badge
              className={`ml-1 ${required 
                ? "bg-red-50 text-red-700 hover:bg-red-100" 
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
              } border-none`}
            >
              {required ? "必須" : "任意"}
            </Badge>
          )}
        </div>
        <div className="text-gray-600 text-xs mt-1">{description}</div>
      </td>
      <td className="py-2 sm:py-3 px-3 sm:px-4 text-right border-l border-gray-100 align-top">
        <div className="font-medium text-gray-900">{price}</div>
      </td>
    </tr>
  )
}

// 料金セクションをアコーディオン化するコンポーネント
function PricingSection({ title, children, defaultOpen = false, variant = "gold" }: { 
  title: string, 
  children: React.ReactNode,
  defaultOpen?: boolean,
  variant?: "gold" | "blue"
}) {
  const bgColor = variant === "gold" ? "from-gold-50 to-white" : "from-blue-50 to-white";
  const textColor = variant === "gold" ? "text-gold-600" : "text-blue-600";
  
  return (
    <tr className="border-b border-gray-200">
      <td colSpan={2} className="p-0">
        <Accordion type="single" collapsible defaultValue={defaultOpen ? title : undefined} className="w-full">
          <AccordionItem value={title} className="border-0">
            <AccordionTrigger className={`py-2 px-4 font-medium ${textColor} bg-gradient-to-r ${bgColor} flex items-center hover:no-underline w-full`}>
              {title}
            </AccordionTrigger>
            <AccordionContent>
              <table className="w-full border-collapse">
                <tbody>
                  {children}
                </tbody>
              </table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </td>
    </tr>
  );
}

export function PricingTable() {
  return (
    <div className="w-full">
      <TooltipProvider>
        <Tabs defaultValue="fe-180" className="w-full">
          {/* 説明テキスト - モダンなデザイン */}
          <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 p-6 mb-8 rounded-lg text-sm text-gray-700 border border-gray-100 shadow-sm">
            <div className="font-medium mb-3 text-gray-900 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              料金表の見方
            </div>
            <ul className="text-xs space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                </span>
                <span className="inline-flex items-center">
                  <span className="mr-1.5 text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full font-medium">必須</span>
                  のラベルが付いている項目は各プランで必要な項目です
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                </span>
                <span className="inline-flex items-center">
                  <span className="mr-1.5 text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">任意</span>
                  のラベルが付いている項目はオプションとなります
                </span>
              </li>
            </ul>
          </div>
          
          {/* タブリスト - 洗練されたラグジュアリーデザイン */}
          <div className="mb-24">
            <div className="flex flex-col items-center">
              <div className="mb-6 text-center">
                <p className="text-sm text-gray-500 mb-2 tracking-wide uppercase">お選びください</p>
                <div className="w-12 h-[2px] bg-gold-300 mx-auto"></div>
              </div>
              
              <div className="w-full max-w-4xl px-4 mx-auto">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                  <TabsTrigger 
                    value="fe-180" 
                    className="relative z-10 w-full text-gray-700 text-sm rounded-lg h-auto py-4 px-4 transition-colors duration-200 border border-gray-300 hover:bg-gold-100 hover:text-gold-700 hover:border-gold-300 data-[state=active]:bg-gold-500 data-[state=active]:text-white data-[state=active]:border-gold-500"
                  >
                    <div className="text-center">
                      <span className="block font-semibold mb-1 text-base">FEプラン</span>
                      <span className="block text-xs">最大180日</span>
                    </div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="fe-365" 
                    className="relative z-10 w-full text-gray-700 text-sm rounded-lg h-auto py-4 px-4 transition-colors duration-200 border border-gray-300 hover:bg-gold-100 hover:text-gold-700 hover:border-gold-300 data-[state=active]:bg-gold-500 data-[state=active]:text-white data-[state=active]:border-gold-500"
                  >
                    <div className="text-center">
                      <span className="block font-semibold mb-1 text-base">FEプラン</span>
                      <span className="block text-xs">最大365日</span>
                    </div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="ws-180" 
                    className="relative z-10 w-full text-gray-700 text-sm rounded-lg h-auto py-4 px-4 transition-colors duration-200 border border-gray-300 hover:bg-gold-100 hover:text-gold-700 hover:border-gold-300 data-[state=active]:bg-gold-500 data-[state=active]:text-white data-[state=active]:border-gold-500"
                  >
                    <div className="text-center">
                      <span className="block font-semibold mb-1 text-base">WSプラン</span>
                      <span className="block text-xs">最大180日</span>
                    </div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="ws-365" 
                    className="relative z-10 w-full text-gray-700 text-sm rounded-lg h-auto py-4 px-4 transition-colors duration-200 border border-gray-300 hover:bg-gold-100 hover:text-gold-700 hover:border-gold-300 data-[state=active]:bg-gold-500 data-[state=active]:text-white data-[state=active]:border-gold-500"
                  >
                    <div className="text-center">
                      <span className="block font-semibold mb-1 text-base">WSプラン</span>
                      <span className="block text-xs">最大365日</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>

          {/* FEプラン（最大180日） */}
          <TabsContent value="fe-180" className="mt-24">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-gold-100 text-gold-600 hover:bg-gold-200 border-none">
                      ファミリー・エクスペリエンス
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 font-light">最大180日営業プラン</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                      家族での思い出作りに最適。北海道の自然や文化を体験できる施設の運営をサポートします。（年間最大180日まで）
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-3 sm:px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-3 sm:px-4 text-right text-gray-900 font-medium border-l border-gray-200 min-w-[100px] w-28 sm:w-32">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 基本料金セクション */}
                      <PricingSection title="基本料金" defaultOpen={true}>
                        <PricingRow
                          title="企画料*"
                          description="宿泊施設の設計・インバウンド最適化・コンセプト立案"
                          price="150,000円"
                          required={true}
                        />
                        <PricingRow
                          title="許認可申請サポート"
                          description="旅館業法に関する申請"
                          price="70,000円〜"
                          required={true}
                        />
                        <PricingRow
                          title="調査代行料"
                          description="申請要件調査・消防法確認など"
                          price="100,000円"
                          required={false}
                        />
                        <PricingRow
                          title="運営代行料"
                          description="住宅宿泊管理業者として宿泊施設を管理運用する運営代行料。宿泊売上代金に対して一律20％を申し受けます（※OTA費用は別途必要）"
                          price="売上の20%"
                          required={true}
                        />
                        <PricingRow
                          title="家具家電・什器備品 設置"
                          description="コンセプトに合わせた家具家電・什器備品の選定・購入・設置（設置コスト含む）"
                          price="100万円"
                          required={true}
                        />
                        <PricingRow
                          title="消耗品 提供・交換"
                          description="運営に必要な消耗品（シャンプー、タオル等）の初期設置・定期補充"
                          price="10,000円"
                          required={true}
                        />
                      </PricingSection>

                      {/* 初期システム費用セクション */}
                      <PricingSection title="初期システム費用">
                        <PricingRow
                          title="アカウントセットアップ"
                          description="OTAアカウント作成、サイトコントローラー/PMS連携設定"
                          price="10,000円"
                          required={true}
                        />
                        <PricingRow
                          title="チェックイン用タブレット"
                          description="セルフチェックイン用端末（Lenovo推奨、9〜11インチ）"
                          price="45,000円"
                          required={false}
                        />
                        <PricingRow
                          title="スマートロック連携キー"
                          description="ゲスト用スマートロック連携デバイス（物理キー不要、キーステーション利用にも対応）"
                          price="30,000円"
                          required={true}
                        />
                      </PricingSection>

                      {/* ランニング費用セクション */}
                      <PricingSection title="ランニング費用（月額）">
                        <PricingRow
                          title="ホスト用管理システム"
                          description="予約管理(PMS)、サイトコントローラー(SC)、レポート機能など"
                          price="3,000円"
                          required={true}
                        />
                        <PricingRow
                          title="ゲスト用システム"
                          description="自動チェックイン/アウト、本人確認（写真・パスポート）、ウェルカムメッセージ等"
                          price="2,000円"
                          required={true}
                        />
                        <PricingRow
                          title="鍵管理システム"
                          description="スマートロックおよび物理鍵の管理システム"
                          price="1,000円"
                          required={true}
                        />
                        <PricingRow
                          title="自動チェックインシステム"
                          description="ゲスト向け自動チェックインおよび施設案内システム"
                          price="2,000円"
                          required={true}
                        />
                        <PricingRow
                          title="ビデオ通話"
                          description="リモートチェックインおよびゲストサポート用ビデオ通話システム"
                          price="3,000円"
                          required={true}
                        />
                        <PricingRow
                          title="スマートロックシステム連携"
                          description="スマートロックシステム(OPELO等)の月額利用料"
                          price="300円/部屋"
                          required={false}
                        />
                      </PricingSection>

                      {/* オプション費用セクション */}
                      <PricingSection title="オプション費用（月額）">
                        <PricingRow
                          title="自社予約エンジン"
                          description="自社HP等で直接予約・決済を受ける機能（初期設定費別途）"
                          price="5,000円 + 100円/部屋"
                          required={false}
                        />
                        <PricingRow
                          title="決済連携機能"
                          description="自社予約エンジン利用時の決済システム連携費用"
                          price="300円/部屋"
                          required={false}
                        />
                      </PricingSection>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg text-xs sm:text-sm">
                  <p className="text-gray-600 leading-relaxed text-left">
                    ※ 表示価格はすべて税抜きです。別途消費税がかかります。
                    <br />※
                    運営代行料は最低利用料金が設定される場合があります。
                    <br />※
                    「別途見積」項目は物件状況により変動。詳細はお問合せ下さい。
                    <br/>※ *企画料には、許認可申請サポート（行政書士）費用の一部が含まれます。
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FEプラン（最大365日） */}
          <TabsContent value="fe-365" className="mt-24">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-gold-100 text-gold-600 hover:bg-gold-200 border-none">
                      ファミリー・エクスペリエンス
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 font-light">最大365日営業プラン</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                      家族での思い出作りに最適。北海道の自然や文化を体験できる施設の運営をサポートします。（旅館業許可）
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-3 sm:px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-3 sm:px-4 text-right text-gray-900 font-medium border-l border-gray-200 min-w-[100px] w-28 sm:w-32">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 基本料金セクション */}
                      <PricingSection title="基本料金" defaultOpen={true}>
                        <PricingRow
                          title="企画料*"
                          description="宿泊施設の設計・インバウンド最適化・コンセプト立案"
                          price="300,000円"
                          required={true}
                        />
                        
                        <PricingRow
                          title="調査代行料"
                          description="申請要件調査・消防法確認など"
                          price="100,000円"
                          required={false}
                        />
                        <PricingRow
                          title="運営代行料"
                          description="宿泊売上の20%（OTA手数料別途）"
                          price="売上の20%"
                          required={true}
                        />
                        <PricingRow
                          title="家具家電・什器備品 設置"
                          description="コンセプトに合わせた家具家電・什器備品の選定・購入・設置（設置コスト含む）"
                          price="別途見積"
                          required={true}
                        />
                        <PricingRow
                          title="消耗品 提供・交換"
                          description="運営に必要な消耗品（シャンプー、タオル等）の初期設置・定期補充"
                          price="別途見積"
                          required={true}
                        />
                      </PricingSection>

                      {/* 初期システム費用セクション */}
                      <PricingSection title="初期システム費用">
                        <PricingRow
                          title="アカウントセットアップ"
                          description="OTAアカウント作成、サイトコントローラー/PMS連携設定"
                          price="10,000円"
                          required={true}
                        />
                        <PricingRow
                          title="システム連携設定"
                          description="旅館業法対応のための追加システム連携（施設単位）"
                          price="50,000円"
                          required={true}
                        />
                        <PricingRow
                          title="チェックイン用タブレット"
                          description="セルフチェックイン用端末（Lenovo推奨、9〜11インチ）"
                          price="45,000円"
                        />
                        <PricingRow
                          title="スマートロック連携キー"
                          description="ゲスト用スマートロック連携デバイス（物理キー不要、キーステーション利用にも対応）"
                          price="30,000円"
                          required={true}
                        />
                      </PricingSection>

                      {/* ランニング費用セクション */}
                      <PricingSection title="ランニング費用（月額）">
                        <PricingRow
                          title="ホスト用管理システム"
                          description="予約管理(PMS)、サイトコントローラー(SC)、レポート機能など"
                          price="3,000円"
                          required={true}
                        />
                        <PricingRow
                          title="ゲスト用システム"
                          description="自動チェックイン/アウト、本人確認（写真・パスポート）、ウェルカムメッセージ等"
                          price="2,000円"
                          required={true}
                        />
                        <PricingRow
                          title="鍵管理システム"
                          description="スマートロックおよび物理鍵の管理システム"
                          price="1,000円"
                          required={true}
                        />
                        <PricingRow
                          title="自動チェックインシステム"
                          description="ゲスト向け自動チェックインおよび施設案内システム"
                          price="2,000円"
                          required={true}
                        />
                        <PricingRow
                          title="ビデオ通話"
                          description="リモートチェックインおよびゲストサポート用ビデオ通話システム"
                          price="3,000円"
                          required={true}
                        />
                        <PricingRow
                          title="スマートロックシステム連携"
                          description="スマートロックシステム(OPELO等)の月額利用料"
                          price="300円/部屋"
                          required={false}
                        />
                      </PricingSection>

                      {/* オプション費用セクション */}
                      <PricingSection title="オプション費用（月額）">
                        <PricingRow
                          title="自社予約エンジン"
                          description="自社HP等で直接予約・決済を受ける機能（初期設定費別途）"
                          price="5,000円 + 100円/部屋"
                          required={false}
                        />
                        <PricingRow
                          title="決済連携機能"
                          description="自社予約エンジン利用時の決済システム連携費用"
                          price="300円/部屋"
                          required={false}
                        />
                      </PricingSection>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg text-xs sm:text-sm">
                  <p className="text-gray-600 leading-relaxed text-left">
                    ※ 表示価格はすべて税抜きです。別途消費税がかかります。
                    <br />※
                    運営代行料は最低利用料金が設定される場合があります。
                    <br />※
                    「別途見積」項目は物件状況により変動。詳細はお問合せ下さい。
                    <br />※ 旅館業法許可施設の場合、規模に応じて別途施設管理費（例: 1,000円～3,000円/月）が発生する場合があります。
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* WSプラン（最大180日） */}
          <TabsContent value="ws-180" className="mt-24">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200 border-none">
                      ワーカーズ・スマート
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 font-light">最大180日営業プラン</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                      ビジネス利用やワーケーションに最適化。スマートな運営をサポートします。（年間最大180日まで）
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-3 sm:px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-3 sm:px-4 text-right text-gray-900 font-medium border-l border-gray-200 min-w-[100px] w-28 sm:w-32">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 基本料金 */}
                      <PricingSection title="基本料金" defaultOpen={true} variant="blue">
                        <PricingRow
                          title="企画料*"
                          description="ワークスペース設計・ビジネス利用最適化"
                          price="100,000円"
                          required={true}
                        />
                        <PricingRow
                          title="許認可申請サポート"
                          description="住宅宿泊事業法に関する申請を行政書士がサポート（民泊運営には許認可が必須です）"
                          price="70,000円〜"
                          required={true}
                        />
                        <PricingRow
                          title="調査代行料"
                          description="申請要件調査・消防法確認など"
                          price="100,000円"
                          required={false}
                        />
                        <PricingRow
                          title="家具家電・什器備品 設置"
                          description="家具家電・什器備品の選定・購入・設置"
                          price="別途見積"
                          required={true}
                        />
                        <PricingRow
                          title="消耗品 提供・交換"
                          description="運営に必要な消耗品の初期設置・定期補充"
                          price="別途見積"
                          required={true}
                        />
                      </PricingSection>

                      {/* 初期システム費用 */}
                      <PricingSection title="初期システム費用" variant="blue">
                        <PricingRow
                          title="アカウントセットアップ"
                          description="OTAアカウント作成、サイトコントローラー/PMS連携設定"
                          price="10,000円"
                          required={true}
                        />
                        <PricingRow
                          title="チェックイン用タブレット"
                          description="セルフチェックイン用端末（Lenovo推奨、9〜11インチ）"
                          price="45,000円"
                        />
                        <PricingRow
                          title="スマートロック連携キー"
                          description="ゲスト用スマートロック連携デバイス（物理キー不要、キーステーション利用にも対応）"
                          price="別途見積"
                          required={true}
                        />
                      </PricingSection>

                      {/* ランニング費用 */}
                      <PricingSection title="ランニング費用（月額）" variant="blue">
                        <PricingRow
                          title="ホスト用管理システム"
                          description="予約管理(PMS)、サイトコントローラー(SC)、レポート機能など"
                          price="3,000円"
                          required={true}
                        />
                        <PricingRow
                          title="ゲスト用システム"
                          description="自動チェックイン/アウト、本人確認（写真・パスポート）、ウェルカムメッセージ等"
                          price="2,000円"
                          required={true}
                        />
                        <PricingRow
                          title="スマートロックシステム連携"
                          description="スマートロックシステム(OPELO等)の月額利用料"
                          price="300円/部屋"
                          required={false}
                        />
                      </PricingSection>

                      {/* オプション費用 */}
                      <PricingSection title="オプション費用（月額）" variant="blue">
                        <PricingRow
                          title="自社予約エンジン"
                          description="自社HP等で直接予約・決済を受ける機能（初期設定費別途）"
                          price="5,000円 + 100円/部屋"
                          required={false}
                        />
                        <PricingRow
                          title="決済連携機能"
                          description="自社予約エンジン利用時の決済システム連携費用"
                          price="300円/部屋"
                          required={false}
                        />
                      </PricingSection>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg text-xs sm:text-sm">
                  <p className="text-gray-600 leading-relaxed text-left">
                    ※ 表示価格はすべて税抜きです。別途消費税がかかります。
                    <br />※
                    運営代行料は最低利用料金が設定される場合があります。
                    <br />※
                    「別途見積」項目は物件状況により変動。詳細はお問合せ下さい。
                    <br/>※ *企画料には、許認可申請サポート（行政書士）費用の一部が含まれます。
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* WSプラン（最大365日） */}
          <TabsContent value="ws-365" className="mt-24">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200 border-none">
                      ワーカーズ・スマート
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 font-light">最大365日営業プラン</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                      ビジネス利用やワーケーションに最適化。スマートな施設の運営をサポートします。（旅館業許可）
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-3 sm:px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-3 sm:px-4 text-right text-gray-900 font-medium border-l border-gray-200 min-w-[100px] w-28 sm:w-32">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 基本料金 */}
                      <PricingSection title="基本料金" defaultOpen={true} variant="blue">
                        <PricingRow
                          title="企画料*"
                          description="ワークスペース設計・ビジネス利用最適化"
                          price="250,000円"
                          required={true}
                        />
                        
                        <PricingRow
                          title="調査代行料"
                          description="申請要件調査・消防法確認など"
                          price="100,000円"
                          required={false}
                        />
                        <PricingRow
                          title="運営代行料"
                          description="宿泊売上の20%（OTA手数料別途）"
                          price="売上の20%"
                          required={true}
                        />
                        <PricingRow
                          title="家具家電・什器備品 設置"
                          description="家具家電・什器備品の選定・購入・設置"
                          price="別途見積"
                          required={true}
                        />
                        <PricingRow
                          title="消耗品 提供・交換"
                          description="運営に必要な消耗品の初期設置・定期補充"
                          price="別途見積"
                          required={true}
                        />
                      </PricingSection>

                      {/* 初期システム費用 */}
                      <PricingSection title="初期システム費用" variant="blue">
                        <PricingRow
                          title="アカウントセットアップ"
                          description="OTAアカウント作成、サイトコントローラー/PMS連携設定"
                          price="10,000円"
                          required={true}
                        />
                        <PricingRow
                          title="システム連携設定"
                          description="旅館業法対応のための追加システム連携（施設単位）"
                          price="50,000円"
                          required={true}
                        />
                        <PricingRow
                          title="チェックイン用タブレット"
                          description="セルフチェックイン用端末（Lenovo推奨、9〜11インチ）"
                          price="45,000円"
                        />
                        <PricingRow
                          title="スマートロック連携キー"
                          description="ゲスト用スマートロック連携デバイス（物理キー不要、キーステーション利用にも対応）"
                          price="30,000円"
                          required={true}
                        />
                      </PricingSection>

                      {/* ランニング費用 */}
                      <PricingSection title="ランニング費用（月額）" variant="blue">
                        <PricingRow
                          title="ホスト用管理システム"
                          description="予約管理(PMS)、サイトコントローラー(SC)、レポート機能など"
                          price="3,000円"
                          required={true}
                        />
                        <PricingRow
                          title="ゲスト用システム"
                          description="自動チェックイン/アウト、本人確認（写真・パスポート）、ウェルカムメッセージ等"
                          price="2,000円"
                          required={true}
                        />
                        <PricingRow
                          title="鍵管理システム"
                          description="スマートロックおよび物理鍵の管理システム"
                          price="1,000円"
                          required={true}
                        />
                        <PricingRow
                          title="自動チェックインシステム"
                          description="ゲスト向け自動チェックインおよび施設案内システム"
                          price="2,000円"
                          required={true}
                        />
                        <PricingRow
                          title="ビデオ通話"
                          description="リモートチェックインおよびゲストサポート用ビデオ通話システム"
                          price="3,000円"
                          required={true}
                        />
                        <PricingRow
                          title="スマートロックシステム連携"
                          description="スマートロックシステム(OPELO等)の月額利用料"
                          price="300円/部屋"
                          required={false}
                        />
                      </PricingSection>

                      {/* オプション費用 */}
                      <PricingSection title="オプション費用（月額）" variant="blue">
                        <PricingRow
                          title="自社予約エンジン"
                          description="自社HP等で直接予約・決済を受ける機能（初期設定費別途）"
                          price="5,000円 + 100円/部屋"
                          required={false}
                        />
                        <PricingRow
                          title="決済連携機能"
                          description="自社予約エンジン利用時の決済システム連携費用"
                          price="300円/部屋"
                          required={false}
                        />
                      </PricingSection>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg text-xs sm:text-sm">
                  <p className="text-gray-600 leading-relaxed text-left">
                    ※ 表示価格はすべて税抜きです。別途消費税がかかります。
                    <br />※
                    運営代行料は最低利用料金が設定される場合があります。
                    <br />※
                    「別途見積」項目は物件状況により変動。詳細はお問合せ下さい。
                    <br />※ 旅館業法許可施設の場合、規模に応じて別途施設管理費（例: 1,000円～3,000円/月）が発生する場合があります。
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </TooltipProvider>
    </div>
  )
} 