import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, CheckCircle2, XCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function PricingTable() {
  return (
    <div className="w-full">
      <TooltipProvider>
        <Tabs defaultValue="fe-minpaku" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
            <TabsTrigger value="fe-minpaku" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white text-xs sm:text-sm">
              FEプラン (民泊)
            </TabsTrigger>
            <TabsTrigger value="fe-ryokan" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white text-xs sm:text-sm">
              FEプラン (旅館)
            </TabsTrigger>
            <TabsTrigger value="ws-minpaku" className="data-[state=active]:bg-gold-600 data-[state=active]:text-white text-xs sm:text-sm">
              WSプラン (民泊)
            </TabsTrigger>
            <TabsTrigger value="ws-ryokan" className="data-[state=active]:bg-gold-600 data-[state=active]:text-white text-xs sm:text-sm">
              WSプラン (旅館)
            </TabsTrigger>
          </TabsList>

          {/* FEプラン（民泊営業） */}
          <TabsContent value="fe-minpaku">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-gold-100 text-gold-600 hover:bg-gold-200 border-none">
                      ファミリー・エクスペリエンス
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 font-light">民泊営業プラン</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                      家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる民泊施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-2 sm:px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-2 sm:px-4 text-center text-gray-900 font-medium w-16">必須</th>
                        <th className="py-3 px-2 sm:px-4 text-center text-gray-900 font-medium w-16">任意</th>
                        <th className="py-3 px-2 sm:px-4 text-right text-gray-900 font-medium">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 基本料金セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={4} className="py-2 px-4 font-medium text-gold-600">
                          基本料金
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
                        tooltip="行政書士による申請代行費用です。事案により変動する場合があります。必要な場合のみ。"
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
                        tooltip="物件規模やコンセプトにより変動します。ご予算に応じた提案も可能です。"
                      />
                      <PricingRow
                        title="消耗品 提供・交換"
                        description="運営に必要な消耗品（シャンプー、タオル等）の初期設置・定期補充"
                        price="10,000円"
                        required={true}
                        tooltip="施設の規模や稼働状況に応じて変動します。"
                      />

                      {/* 初期システム費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={4} className="py-2 px-4 font-medium text-gold-600">
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
                      <tr className="bg-gray-50">
                        <td colSpan={4} className="py-2 px-4 font-medium text-gold-600">
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
                      <tr className="bg-gray-50">
                        <td colSpan={4} className="py-2 px-4 font-medium text-gold-600">
                          オプション費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="自社予約エンジン"
                        description="自社HP等で直接予約・決済を受ける機能（初期設定費別途）"
                        price="5,000円 + 100円/部屋"
                        required={false}
                        tooltip="ブッキングエンジン①(5000円)と②(100円/部屋)の合算です。"
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
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs sm:text-sm">
                  <p className="text-gray-600">
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

          {/* FEプラン（旅館営業） */}
          <TabsContent value="fe-ryokan">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-gold-100 text-gold-600 hover:bg-gold-200 border-none">
                      ファミリー・エクスペリエンス
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 font-light">旅館営業プラン</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                      家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる旅館施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-2 sm:px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-2 sm:px-4 text-center text-gray-900 font-medium w-16">必須</th>
                        <th className="py-3 px-2 sm:px-4 text-center text-gray-900 font-medium w-16">任意</th>
                        <th className="py-3 px-2 sm:px-4 text-right text-gray-900 font-medium">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 基本料金セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          基本料金
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
                        tooltip="物件規模やコンセプトにより変動します。ご予算に応じた提案も可能です。"
                      />
                      <PricingRow
                        title="消耗品 提供・交換"
                        description="運営に必要な消耗品（シャンプー、タオル等）の初期設置・定期補充"
                        price="別途見積"
                        required={true}
                        tooltip="施設の規模や稼働状況に応じて変動します。"
                      />

                      {/* 初期システム費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
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
                        tooltip="旅館業営業に必要な帳簿管理システム等との連携設定です。"
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
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
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
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          オプション費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="自社予約エンジン"
                        description="自社HP等で直接予約・決済を受ける機能（初期設定費別途）"
                        price="5,000円 + 100円/部屋"
                        required={false}
                        tooltip="ブッキングエンジン①(5000円)と②(100円/部屋)の合算です。"
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
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs sm:text-sm">
                  <p className="text-gray-600">
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

          {/* WSプラン（民泊営業） */}
          <TabsContent value="ws-minpaku">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200 border-none">
                      ワーカーズ・スマート
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 font-light">民泊営業プラン</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                      ビジネス利用やワーケーションに最適化。高速Wi-Fi、ワークスペースを備えたスマートな運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-2 sm:px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-2 sm:px-4 text-center text-gray-900 font-medium w-16">必須</th>
                        <th className="py-3 px-2 sm:px-4 text-center text-gray-900 font-medium w-16">任意</th>
                        <th className="py-3 px-2 sm:px-4 text-right text-gray-900 font-medium">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 基本料金 */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-blue-600">
                          基本料金
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
                        tooltip="行政書士による申請代行費用です。事案により変動する場合があります。"
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
                        tooltip="ワーク環境に必要な設備により変動します。"
                      />
                      <PricingRow
                        title="消耗品 提供・交換"
                        description="運営に必要な消耗品の初期設置・定期補充"
                        price="別途見積"
                        required={true}
                        tooltip="施設の規模や稼働状況に応じて変動します。"
                      />

                      {/* 初期システム費用 */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-blue-600">
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
                        price="別途見積"
                        required={true}
                      />

                      {/* ランニング費用 */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-blue-600">
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
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-blue-600">
                          オプション費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="自社予約エンジン"
                        description="自社HP等で直接予約・決済を受ける機能（初期設定費別途）"
                        price="5,000円 + 100円/部屋"
                        required={false}
                        tooltip="ブッキングエンジン①(5000円)と②(100円/部屋)の合算です。"
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
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs sm:text-sm">
                  <p className="text-gray-600">
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

          {/* WSプラン（旅館営業） */}
          <TabsContent value="ws-ryokan">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-blue-100 text-blue-600 hover:bg-blue-200 border-none">
                      ワーカーズ・スマート
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 font-light">旅館営業プラン</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-2">
                      ビジネス利用やワーケーションに最適化。高速Wi-Fi、ワークスペースを備えたスマートな旅館施設の運営をサポート。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-2 sm:px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-2 sm:px-4 text-center text-gray-900 font-medium w-16">必須</th>
                        <th className="py-3 px-2 sm:px-4 text-center text-gray-900 font-medium w-16">任意</th>
                        <th className="py-3 px-2 sm:px-4 text-right text-gray-900 font-medium">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 基本料金 */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-blue-600">
                          基本料金
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
                        tooltip="ワーク環境に必要な設備により変動します。"
                      />
                      <PricingRow
                        title="消耗品 提供・交換"
                        description="運営に必要な消耗品の初期設置・定期補充"
                        price="別途見積"
                        required={true}
                        tooltip="施設の規模や稼働状況に応じて変動します。"
                      />

                      {/* 初期システム費用 */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-blue-600">
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
                        tooltip="旅館業営業に必要な帳簿管理システム等との連携設定です。"
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

                      {/* ランニング費用 */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-blue-600">
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
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-blue-600">
                          オプション費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="自社予約エンジン"
                        description="自社HP等で直接予約・決済を受ける機能（初期設定費別途）"
                        price="5,000円 + 100円/部屋"
                        required={false}
                        tooltip="ブッキングエンジン①(5000円)と②(100円/部屋)の合算です。"
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
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs sm:text-sm">
                  <p className="text-gray-600">
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

function PricingRow({
  title,
  description,
  price,
  required,
  tooltip,
}: {
  title: string
  description: string
  price: string
  required?: boolean
  tooltip?: string
}) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50/50">
      <td className="py-3 px-2 sm:px-4">
        <div className="flex items-center">
          <span className="text-gray-800 font-medium">{title}</span>
          {tooltip && (
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-gray-400 ml-1.5 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-0.5 hidden md:block">{description}</p>
      </td>
      <td className="py-3 px-2 sm:px-4 text-center">
        {required === true && <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />}
      </td>
      <td className="py-3 px-2 sm:px-4 text-center">
        {required === false && <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />}
      </td>
      <td className="py-3 px-2 sm:px-4 text-right font-medium text-gray-700">{price}</td>
    </tr>
  )
}

