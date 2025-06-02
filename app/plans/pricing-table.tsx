import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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
  // 行の背景色を必須項目の場合は少し強調する
  const rowBgClass = required === true 
    ? "border-b border-gray-100 hover:bg-gray-50 bg-gray-50" 
    : "border-b border-gray-100 hover:bg-gray-50";
  
  return (
    <tr className={rowBgClass}>
      <td className="py-3 px-3 sm:px-4 align-top">
        <div className="flex flex-wrap items-center">
          <span className="font-medium text-gray-800">{title}</span>
          {required === true && (
            <span className="ml-1 sm:ml-2 text-xs bg-red-100 text-red-700 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">必須</span>
          )}
          {required === false && (
            <span className="ml-1 sm:ml-2 text-xs bg-blue-50 text-blue-600 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">任意</span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed hidden sm:block">{description}</p>
      </td>
      <td className="py-3 px-3 sm:px-4 text-right align-middle font-medium text-gray-700 border-l border-gray-200 min-w-[100px]">{price}</td>
    </tr>
  )
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
          
          {/* タブリスト - 改善されたデザイン */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">プランを選択してください</h3>
              <p className="text-sm text-gray-600">営業日数とプランタイプを組み合わせてお選びいただけます</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-transparent gap-4 h-auto p-0">
                <TabsTrigger 
                  value="fe-180" 
                  className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:border-gold-400 data-[state=active]:border-2 bg-white border border-gray-200 rounded-xl p-6 h-auto transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer"
                >
                  <div className="text-center space-y-2">
                    <div className="text-gold-600 font-semibold text-base">FEプラン</div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">最大180日</div>
                    <div className="text-xs text-gray-600 leading-relaxed">ファミリー・エクスペリエンス<br/>家族向け体験重視</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="fe-365" 
                  className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:border-gold-400 data-[state=active]:border-2 bg-white border border-gray-200 rounded-xl p-6 h-auto transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer"
                >
                  <div className="text-center space-y-2">
                    <div className="text-gold-600 font-semibold text-base">FEプラン</div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">最大365日</div>
                    <div className="text-xs text-gray-600 leading-relaxed">ファミリー・エクスペリエンス<br/>家族向け体験重視</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="ws-180" 
                  className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:border-blue-400 data-[state=active]:border-2 bg-white border border-gray-200 rounded-xl p-6 h-auto transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer"
                >
                  <div className="text-center space-y-2">
                    <div className="text-blue-600 font-semibold text-base">WSプラン</div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">最大180日</div>
                    <div className="text-xs text-gray-600 leading-relaxed">ワーケーション・ステイ<br/>長期滞在・仕事重視</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="ws-365" 
                  className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:border-blue-400 data-[state=active]:border-2 bg-white border border-gray-200 rounded-xl p-6 h-auto transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer"
                >
                  <div className="text-center space-y-2">
                    <div className="text-blue-600 font-semibold text-base">WSプラン</div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">最大365日</div>
                    <div className="text-xs text-gray-600 leading-relaxed">ワーケーション・ステイ<br/>長期滞在・仕事重視</div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* プランの説明 */}
            <div className="mt-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gradient-to-r from-gold-50 to-orange-50 p-4 rounded-lg border border-gold-200">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-gold-500 rounded-full mr-2"></div>
                    <span className="font-medium text-gold-700">FEプラン（ファミリー・エクスペリエンス）</span>
                  </div>
                  <p className="text-gray-600 text-xs">家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる宿泊施設の運営をサポートします。</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="font-medium text-blue-700">WSプラン（ワーケーション・ステイ）</span>
                  </div>
                  <p className="text-gray-600 text-xs">ワーケーションや長期滞在のビジネス利用に最適なプラン。快適な仕事環境と滞在空間を提供します。</p>
                </div>
              </div>
            </div>
          </div>

          {/* FEプラン（最大180日） */}
          <TabsContent value="fe-180">
            <Card className="bg-white border-gray-200 shadow-lg">
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
                      {/* 初期費用セクション */}
                      <tr className="bg-gradient-to-r from-gold-100 to-gold-50 border-l-4 border-gold-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-gold-700 text-sm sm:text-base">
                          初期費用（家具家電・什器備品設置費等を含む）
                        </td>
                      </tr>
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

                      {/* 初期システム費用セクション */}
                      <tr className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-blue-700 text-sm sm:text-base">
                          初期システム費用
                        </td>
                      </tr>
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

                      {/* ランニング費用セクション */}
                      <tr className="bg-gradient-to-r from-green-100 to-green-50 border-l-4 border-green-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-green-700 text-sm sm:text-base">
                          ランニング費用（月額）
                        </td>
                      </tr>
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

                      {/* オプション費用セクション */}
                      <tr className="bg-gradient-to-r from-purple-100 to-purple-50 border-l-4 border-purple-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-purple-700 text-sm sm:text-base">
                          オプション費用（月額）
                        </td>
                      </tr>
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
          <TabsContent value="fe-365">
            <Card className="bg-white border-gray-200 shadow-lg">
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
                      {/* 初期費用セクション */}
                      <tr className="bg-gradient-to-r from-gold-100 to-gold-50 border-l-4 border-gold-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-gold-700 text-sm sm:text-base">
                          初期費用（家具家電・什器備品設置費等を含む）
                        </td>
                      </tr>
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

                      {/* 初期システム費用セクション */}
                      <tr className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-blue-700 text-sm sm:text-base">
                          初期システム費用
                        </td>
                      </tr>
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

                      {/* ランニング費用セクション */}
                      <tr className="bg-gradient-to-r from-green-100 to-green-50 border-l-4 border-green-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-green-700 text-sm sm:text-base">
                          ランニング費用（月額）
                        </td>
                      </tr>
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

                      {/* オプション費用セクション */}
                      <tr className="bg-gradient-to-r from-purple-100 to-purple-50 border-l-4 border-purple-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-purple-700 text-sm sm:text-base">
                          オプション費用（月額）
                        </td>
                      </tr>
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
          <TabsContent value="ws-180">
            <Card className="bg-white border-gray-200 shadow-lg">
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
                      {/* 初期費用 */}
                      <tr className="bg-gradient-to-r from-gold-100 to-gold-50 border-l-4 border-gold-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-gold-700 text-sm sm:text-base">
                          初期費用（家具家電・什器備品設置費等を含む）
                        </td>
                      </tr>
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

                      {/* 初期システム費用 */}
                      <tr className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-blue-700 text-sm sm:text-base">
                          初期システム費用
                        </td>
                      </tr>
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

                      {/* ランニング費用 */}
                      <tr className="bg-gradient-to-r from-green-100 to-green-50 border-l-4 border-green-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-green-700 text-sm sm:text-base">
                          ランニング費用（月額）
                        </td>
                      </tr>
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

                      {/* オプション費用 */}
                      <tr className="bg-gradient-to-r from-purple-100 to-purple-50 border-l-4 border-purple-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-purple-700 text-sm sm:text-base">
                          オプション費用（月額）
                        </td>
                      </tr>
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
          <TabsContent value="ws-365">
            <Card className="bg-white border-gray-200 shadow-lg">
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
                      {/* 初期費用 */}
                      <tr className="bg-gradient-to-r from-gold-100 to-gold-50 border-l-4 border-gold-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-gold-700 text-sm sm:text-base">
                          初期費用（家具家電・什器備品設置費等を含む）
                        </td>
                      </tr>
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

                      {/* 初期システム費用 */}
                      <tr className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-blue-700 text-sm sm:text-base">
                          初期システム費用
                        </td>
                      </tr>
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

                      {/* ランニング費用 */}
                      <tr className="bg-gradient-to-r from-green-100 to-green-50 border-l-4 border-green-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-green-700 text-sm sm:text-base">
                          ランニング費用（月額）
                        </td>
                      </tr>
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

                      {/* オプション費用 */}
                      <tr className="bg-gradient-to-r from-purple-100 to-purple-50 border-l-4 border-purple-500">
                        <td colSpan={2} className="py-3 px-4 font-semibold text-purple-700 text-sm sm:text-base">
                          オプション費用（月額）
                        </td>
                      </tr>
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