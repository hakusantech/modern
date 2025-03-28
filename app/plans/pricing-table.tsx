import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function PricingTable() {
  return (
    <div className="w-full">
      <TooltipProvider>
        <Tabs defaultValue="fe-minpaku" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="fe-minpaku" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              FEプラン
              <br />
              (民泊営業)
            </TabsTrigger>
            <TabsTrigger value="fe-ryokan" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              FEプラン
              <br />
              (旅館営業)
            </TabsTrigger>
            <TabsTrigger value="ws-minpaku" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              WSプラン
              <br />
              (民泊営業)
            </TabsTrigger>
            <TabsTrigger value="ws-ryokan" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              WSプラン
              <br />
              (旅館営業)
            </TabsTrigger>
          </TabsList>

          {/* FEプラン（民泊営業） */}
          <TabsContent value="fe-minpaku">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-none">
                      ファミリー・エクスペリエンス
                    </Badge>
                    <CardTitle className="text-2xl text-snow-50">民泊営業プラン</CardTitle>
                    <CardDescription className="text-snow-300 mt-2">
                      家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる民泊施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-darkgray-600">
                        <th className="py-3 px-4 text-left text-snow-50">プラン内容</th>
                        <th className="py-3 px-4 text-left text-snow-50">説明</th>
                        <th className="py-3 px-4 text-right text-snow-50">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 初期費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          初期費用
                        </td>
                      </tr>
                      <PricingRow
                        title="企画料"
                        description="宿泊施設となる部屋の企画設計料。独自の取材データをもとにしたインバウンドに最適な宿泊施設をデザイン。"
                        price="150,000円"
                        required={true}
                      />
                      <PricingRow
                        title="調査代行料"
                        description="住宅宿泊事業者に必要な申請事項および申請書類の調査料。消防法等の関連法令を含む。"
                        price="100,000円"
                        required={false}
                      />
                      <PricingRow
                        title="運営代行料"
                        description="宿泊施設の運営代行料。宿泊売上代金の20％（OTA費用別）。"
                        price="20%"
                        required={true}
                      />
                      <PricingRow
                        title="家具家電販売"
                        description="企画に適合する家具や家電を指定業者より仕入れ・設置。"
                        price="1,000,000円"
                        required={true}
                      />
                      <PricingRow
                        title="消耗品販売"
                        description="事業用ゴミ袋やトイレットペーパーなどの消耗品を補充・交換。"
                        price="10,000円"
                        required={true}
                      />

                      {/* システム費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          システム費用
                        </td>
                      </tr>
                      <PricingRow
                        title="初期費用"
                        description="アカウント初期セットアップ、各システム（SC/PMS/OTA）の連携設定。"
                        price="10,000円"
                        required={true}
                      />
                      <PricingRow
                        title="タブレット"
                        description="ゲスト用タブレット（Lenovo 9インチ）セットアップ込。"
                        price="45,000円"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携キー"
                        description="システムと自動連携できるゲスト用キー（営業形態により異なる）。"
                        price="30,000円"
                        required={true}
                      />

                      {/* 月額費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          月額費用
                        </td>
                      </tr>
                      <PricingRow
                        title="AirHost HMS（Premium）"
                        description="SC+PMS機能（予約情報連携、レポートなど）。"
                        price="3,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="AirHost ONE（Premium）"
                        description="自動チェックイン/アウト、アップセル機能。"
                        price="2,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ビデオ通話"
                        description="チェックイン時のビデオ通話による本人確認。"
                        price="6,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携"
                        description="スマートロック連携時の月額利用料（部屋ごとに必要）。"
                        price="300円/月"
                        required={false}
                      />

                      {/* オプション費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          オプション費用
                        </td>
                      </tr>
                      <PricingRow
                        title="ブッキングエンジン①"
                        description="自社予約サイトの基本予約機能導入。"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="ブッキングエンジン②"
                        description="自社予約サイトの月額利用料（部屋ごと）。"
                        price="100円/月/部屋"
                        required={false}
                      />
                      <PricingRow
                        title="決済連携機能③"
                        description="決済連携料金（部屋ごとの月額費用）。"
                        price="300円/月/部屋"
                        required={false}
                      />
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-darkgray-700/30 rounded-lg">
                  <p className="text-sm text-snow-300">
                    ※ 表示価格はすべて税抜きです。別途消費税がかかります。
                    <br />※
                    「別途見積」と表示されている項目は、物件の状況や要件によって異なります。詳細はお問い合わせください。
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FEプラン（旅館営業） */}
          <TabsContent value="fe-ryokan">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-none">
                      ファミリー・エクスペリエンス
                    </Badge>
                    <CardTitle className="text-2xl text-snow-50">旅館営業プラン</CardTitle>
                    <CardDescription className="text-snow-300 mt-2">
                      家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる旅館施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-darkgray-600">
                        <th className="py-3 px-4 text-left text-snow-50">プラン内容</th>
                        <th className="py-3 px-4 text-left text-snow-50">説明</th>
                        <th className="py-3 px-4 text-right text-snow-50">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 初期費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          初期費用
                        </td>
                      </tr>
                      <PricingRow
                        title="企画料"
                        description="宿泊施設となる部屋の企画設計料。独自の取材データをもとにしたインバウンドに最適な宿泊施設をデザイン。"
                        price="200,000円"
                        required={true}
                      />
                      <PricingRow
                        title="調査代行料"
                        description="住宅宿泊事業者に必要な申請事項および申請書類の調査料。消防法等の関連法令を含む。"
                        price="100,000円"
                        required={false}
                      />
                      <PricingRow
                        title="運営代行料"
                        description="宿泊施設の運営代行料。宿泊売上代金の20％（OTA費用別）。"
                        price="20%"
                        required={true}
                      />
                      <PricingRow
                        title="家具家電販売"
                        description="企画に適合する家具や家電を指定業者より仕入れ・設置。"
                        price="別途見積"
                        required={true}
                      />
                      <PricingRow
                        title="消耗品販売"
                        description="事業用ゴミ袋やトイレットペーパーなどの消耗品を補充・交換。"
                        price="別途見積"
                        required={true}
                      />

                      {/* システム費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          システム費用
                        </td>
                      </tr>
                      <PricingRow
                        title="初期費用"
                        description="アカウント初期セットアップ、各システム（SC/PMS/OTA）の連携設定。"
                        price="10,000円"
                        required={true}
                      />
                      <PricingRow
                        title="タブレット"
                        description="ゲスト用タブレット（Lenovo 9インチ）セットアップ込。"
                        price="45,000円"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携キー"
                        description="システムと自動連携できるゲスト用キー（営業形態により異なる）。"
                        price="別途見積"
                        required={true}
                      />

                      {/* 月額費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          月額費用
                        </td>
                      </tr>
                      <PricingRow
                        title="AirHost HMS（Premium）"
                        description="SC+PMS機能（予約情報連携、レポートなど）。"
                        price="3,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="AirHost ONE（Premium）"
                        description="自動チェックイン/アウト、アップセル機能。"
                        price="2,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ビデオ通話"
                        description="チェックイン時のビデオ通話による本人確認。"
                        price="-"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携"
                        description="スマートロック連携時の月額利用料（部屋ごとに必要）。"
                        price="300円/月"
                        required={false}
                      />

                      {/* オプション費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          オプション費用
                        </td>
                      </tr>
                      <PricingRow
                        title="ブッキングエンジン①"
                        description="自社予約サイトの基本予約機能導入。"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="ブッキングエンジン②"
                        description="自社予約サイトの月額利用料（部屋ごと）。"
                        price="100円/月/部屋"
                        required={false}
                      />
                      <PricingRow
                        title="決済連携機能③"
                        description="決済連携料金（部屋ごとの月額費用）。"
                        price="300円/月/部屋"
                        required={false}
                      />
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-darkgray-700/30 rounded-lg">
                  <p className="text-sm text-snow-300">
                    ※ 表示価格はすべて税抜きです。別途消費税がかかります。
                    <br />※
                    「別途見積」と表示されている項目は、物件の状況や要件によって異なります。詳細はお問い合わせください。
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* WSプラン（民泊営業） */}
          <TabsContent value="ws-minpaku">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border-none">
                      ワーケーション・スマート
                    </Badge>
                    <CardTitle className="text-2xl text-snow-50">民泊営業プラン</CardTitle>
                    <CardDescription className="text-snow-300 mt-2">
                      仕事と休暇を両立させる新しいライフスタイル「ワーケーション」に最適なプラン。快適な作業環境と北海道の自然を満喫できる民泊施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-darkgray-600">
                        <th className="py-3 px-4 text-left text-snow-50">プラン内容</th>
                        <th className="py-3 px-4 text-left text-snow-50">説明</th>
                        <th className="py-3 px-4 text-right text-snow-50">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 初期費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          初期費用
                        </td>
                      </tr>
                      <PricingRow
                        title="企画料"
                        description="宿泊施設となる部屋の企画設計料。独自の取材データをもとにしたインバウンドに最適な宿泊施設をデザイン。"
                        price="100,000円"
                        required={true}
                      />
                      <PricingRow
                        title="調査代行料"
                        description="住宅宿泊事業者に必要な申請事項および申請書類の調査料。消防法等の関連法令を含む。"
                        price="100,000円"
                        required={false}
                      />
                      <PricingRow
                        title="運営代行料"
                        description="宿泊施設の運営代行料。宿泊売上代金の20％（OTA費用別）。"
                        price="20%"
                        required={true}
                      />
                      <PricingRow
                        title="家具家電販売"
                        description="企画に適合する家具や家電を指定業者より仕入れ・設置。"
                        price="別途見積"
                        required={true}
                      />
                      <PricingRow
                        title="消耗品販売"
                        description="事業用ゴミ袋やトイレットペーパーなどの消耗品を補充・交換。"
                        price="別途見積"
                        required={true}
                      />

                      {/* システム費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          システム費用
                        </td>
                      </tr>
                      <PricingRow
                        title="初期費用"
                        description="アカウント初期セットアップ、各システム（SC/PMS/OTA）の連携設定。"
                        price="10,000円"
                        required={true}
                      />
                      <PricingRow
                        title="タブレット"
                        description="ゲスト用タブレット（Lenovo 9インチ）セットアップ込。"
                        price="45,000円"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携キー"
                        description="システムと自動連携できるゲスト用キー（営業形態により異なる）。"
                        price="別途見積"
                        required={true}
                      />

                      {/* 月額費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          月額費用
                        </td>
                      </tr>
                      <PricingRow
                        title="AirHost HMS（Premium）"
                        description="SC+PMS機能（予約情報連携、レポートなど）。"
                        price="3,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="AirHost ONE（Premium）"
                        description="自動チェックイン/アウト、アップセル機能。"
                        price="2,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ビデオ通話"
                        description="チェックイン時のビデオ通話による本人確認。"
                        price="6,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携"
                        description="スマートロック連携時の月額利用料（部屋ごとに必要）。"
                        price="300円/月"
                        required={false}
                      />

                      {/* オプション費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          オプション費用
                        </td>
                      </tr>
                      <PricingRow
                        title="ブッキングエンジン①"
                        description="自社予約サイトの基本予約機能導入。"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="ブッキングエンジン②"
                        description="自社予約サイトの月額利用料（部屋ごと）。"
                        price="100円/月/部屋"
                        required={false}
                      />
                      <PricingRow
                        title="決済連携機能③"
                        description="決済連携料金（部屋ごとの月額費用）。"
                        price="300円/月/部屋"
                        required={false}
                      />
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-darkgray-700/30 rounded-lg">
                  <p className="text-sm text-snow-300">
                    ※ 表示価格はすべて税抜きです。別途消費税がかかります。
                    <br />※
                    「別途見積」と表示されている項目は、物件の状況や要件によって異なります。詳細はお問い合わせください。
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* WSプラン（旅館営業） */}
          <TabsContent value="ws-ryokan">
            <Card className="bg-darkgray-800 border-darkgray-700">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border-none">
                      ワーケーション・スマート
                    </Badge>
                    <CardTitle className="text-2xl text-snow-50">旅館営業プラン</CardTitle>
                    <CardDescription className="text-snow-300 mt-2">
                      仕事と休暇を両立させる新しいライフスタイル「ワーケーション」に最適なプラン。快適な作業環境と北海道の自然を満喫できる旅館施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-darkgray-600">
                        <th className="py-3 px-4 text-left text-snow-50">プラン内容</th>
                        <th className="py-3 px-4 text-left text-snow-50">説明</th>
                        <th className="py-3 px-4 text-right text-snow-50">料金</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 初期費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          初期費用
                        </td>
                      </tr>
                      <PricingRow
                        title="企画料"
                        description="宿泊施設となる部屋の企画設計料。独自の取材データをもとにしたインバウンドに最適な宿泊施設をデザイン。"
                        price="150,000円"
                        required={true}
                      />
                      <PricingRow
                        title="調査代行料"
                        description="住宅宿泊事業者に必要な申請事項および申請書類の調査料。消防法等の関連法令を含む。"
                        price="100,000円"
                        required={false}
                      />
                      <PricingRow
                        title="運営代行料"
                        description="宿泊施設の運営代行料。宿泊売上代金の20％（OTA費用別）。"
                        price="20%"
                        required={true}
                      />
                      <PricingRow
                        title="家具家電販売"
                        description="企画に適合する家具や家電を指定業者より仕入れ・設置。"
                        price="別途見積"
                        required={true}
                      />
                      <PricingRow
                        title="消耗品販売"
                        description="事業用ゴミ袋やトイレットペーパーなどの消耗品を補充・交換。"
                        price="別途見積"
                        required={true}
                      />

                      {/* システム費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          システム費用
                        </td>
                      </tr>
                      <PricingRow
                        title="初期費用"
                        description="アカウント初期セットアップ、各システム（SC/PMS/OTA）の連携設定。"
                        description="アカウント初期セットアップ、各システム（SC/PMS/OTA）の連携設定。"
                        price="10,000円"
                        required={true}
                      />
                      <PricingRow
                        title="タブレット"
                        description="ゲスト用タブレット（Lenovo 9インチ）セットアップ込。"
                        price="45,000円"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携キー"
                        description="システムと自動連携できるゲスト用キー（営業形態により異なる）。"
                        price="別途見積"
                        required={true}
                      />

                      {/* 月額費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          月額費用
                        </td>
                      </tr>
                      <PricingRow
                        title="AirHost HMS（Premium）"
                        description="SC+PMS機能（予約情報連携、レポートなど）。"
                        price="3,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="AirHost ONE（Premium）"
                        description="自動チェックイン/アウト、アップセル機能。"
                        price="2,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ビデオ通話"
                        description="チェックイン時のビデオ通話による本人確認。"
                        price="-"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携"
                        description="スマートロック連携時の月額利用料（部屋ごとに必要）。"
                        price="300円/月"
                        required={false}
                      />

                      {/* オプション費用セクション */}
                      <tr className="bg-darkgray-700/30">
                        <td colSpan={3} className="py-2 px-4 font-medium text-ice-400">
                          オプション費用
                        </td>
                      </tr>
                      <PricingRow
                        title="ブッキングエンジン①"
                        description="自社予約サイトの基本予約機能導入。"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="ブッキングエンジン②"
                        description="自社予約サイトの月額利用料（部屋ごと）。"
                        price="100円/月/部屋"
                        required={false}
                      />
                      <PricingRow
                        title="決済連携機能③"
                        description="決済連携料金（部屋ごとの月額費用）。"
                        price="300円/月/部屋"
                        required={false}
                      />
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-darkgray-700/30 rounded-lg">
                  <p className="text-sm text-snow-300">
                    ※ 表示価格はすべて税抜きです。別途消費税がかかります。
                    <br />※
                    「別途見積」と表示されている項目は、物件の状況や要件によって異なります。詳細はお問い合わせください。
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

// 料金行コンポーネント
function PricingRow({
  title,
  description,
  price,
  required,
}: {
  title: string
  description: string
  price: string
  required: boolean
}) {
  return (
    <tr className="border-b border-darkgray-600/50 hover:bg-darkgray-700/10">
      <td className="py-3 px-4">
        <div className="flex items-center">
          <span className="font-medium text-snow-100">{title}</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="ml-1 text-snow-400 hover:text-snow-200">
                <HelpCircle className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-darkgray-800 border-darkgray-700">
              <p className="text-snow-200">{description}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        {required && <span className="text-xs text-ice-400 mt-1 inline-block">必須</span>}
      </td>
      <td className="py-3 px-4 text-sm text-snow-300 hidden md:table-cell">{description}</td>
      <td className="py-3 px-4 text-right font-medium text-snow-100">{price}</td>
    </tr>
  )
}

