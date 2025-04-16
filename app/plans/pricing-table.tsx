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
            <TabsTrigger value="fe-minpaku" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
              FEプラン
              <br />
              (民泊営業)
            </TabsTrigger>
            <TabsTrigger value="fe-ryokan" className="data-[state=active]:bg-gold-500 data-[state=active]:text-white">
              FEプラン
              <br />
              (旅館営業)
            </TabsTrigger>
            <TabsTrigger value="ws-minpaku" className="data-[state=active]:bg-gold-600 data-[state=active]:text-white">
              WSプラン
              <br />
              (民泊営業)
            </TabsTrigger>
            <TabsTrigger value="ws-ryokan" className="data-[state=active]:bg-gold-600 data-[state=active]:text-white">
              WSプラン
              <br />
              (旅館営業)
            </TabsTrigger>
          </TabsList>

          {/* FEプラン（民泊営業） */}
          <TabsContent value="fe-minpaku">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-gold-100 text-gold-600 hover:bg-gold-200 border-none">
                      ファミリー・エクスペリエンス
                    </Badge>
                    <CardTitle className="text-2xl text-gray-900 font-light">民泊営業プラン</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる民泊施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-4 text-left text-gray-900 font-medium">説明</th>
                        <th className="py-3 px-4 text-right text-gray-900 font-medium">料金</th>
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
                        title="企画料"
                        description="宿泊施設の設計・インバウンド最適化"
                        price="150,000円"
                        required={true}
                      />
                      <PricingRow
                        title="調査代行料"
                        description="申請要件調査・消防法確認"
                        price="100,000円"
                        required={false}
                      />
                      <PricingRow
                        title="運営代行料"
                        description="宿泊売上の20%（OTA費別）"
                        price="20%"
                        required={true}
                      />
                      <PricingRow
                        title="家具家電販売"
                        description="家具家電の仕入・設置"
                        price="1,000,000円"
                        required={true}
                      />
                      <PricingRow
                        title="消耗品販売"
                        description="消耗品の提供・交換"
                        price="10,000円"
                        required={true}
                      />

                      {/* 初期システム費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          初期システム費用
                        </td>
                      </tr>
                      <PricingRow
                        title="アカウントセットアップ料金"
                        description="アカウント作成、SC/PMS連携設定"
                        price="10,000円"
                        required={true}
                      />
                      <PricingRow
                        title="タブレット"
                        description="チェックイン用端末（Lenovo 9〜11インチ）"
                        price="45,000円"
                        required={true}
                      />
                      <PricingRow
                        title="IoTスマートロック連携キー"
                        description="ゲスト用連携キー（営業形態で異なる）"
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
                        description="SCやPMS、各種管理機能やレポート機能など"
                        price="3,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ゲスト用管理システム"
                        description="自動チェックイン/アウト、セルフチェックイン機能、本人確認機能など"
                        price="2,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ビデオ通話"
                        description="本人確認のためのビデオ通話"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携"
                        description="システムとの連携利用料（OPELO）"
                        price="300円/月/部屋"
                        required={true}
                      />

                      {/* オプション費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          オプション費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="ブッキングエンジン①"
                        description="自社サイトなどに宿泊予約機能を搭載しOTAを介さず予約から決済まで"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="ブッキングエンジン②"
                        description="部屋ごとに①利用分に発生する月額ランニングコスト"
                        price="100円/月/部屋"
                        required={false}
                      />
                      <PricingRow
                        title="決済連携機能③"
                        description="ブッキングエンジン搭載した場合に必要な決済連携機能で部屋ごとに発生する月額ランニングコスト"
                        price="300円/月/部屋"
                        required={false}
                      />
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
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
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-gold-100 text-gold-600 hover:bg-gold-200 border-none">
                      ファミリー・エクスペリエンス
                    </Badge>
                    <CardTitle className="text-2xl text-gray-900 font-light">旅館営業プラン</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる旅館施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-4 text-left text-gray-900 font-medium">説明</th>
                        <th className="py-3 px-4 text-right text-gray-900 font-medium">料金</th>
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
                        title="企画料"
                        description="宿泊施設の設計・インバウンド最適化"
                        price="200,000円"
                        required={true}
                      />
                      <PricingRow
                        title="調査代行料"
                        description="申請要件調査・消防法確認"
                        price="100,000円"
                        required={false}
                      />
                      <PricingRow
                        title="運営代行料"
                        description="宿泊売上の20%（OTA費別）"
                        price="20%"
                        required={true}
                      />
                      <PricingRow
                        title="家具家電販売"
                        description="家具家電の仕入・設置"
                        price="別途見積"
                        required={true}
                      />
                      <PricingRow
                        title="消耗品販売"
                        description="消耗品の提供・交換"
                        price="別途見積"
                        required={true}
                      />

                      {/* 初期システム費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          初期システム費用
                        </td>
                      </tr>
                      <PricingRow
                        title="アカウントセットアップ料金"
                        description="アカウント作成、SC/PMS連携設定"
                        price="10,000円"
                        required={true}
                      />
                      <PricingRow
                        title="タブレット"
                        description="チェックイン用端末（Lenovo 9〜11インチ）"
                        price="45,000円"
                        required={true}
                      />
                      <PricingRow
                        title="IoTスマートロック連携キー"
                        description="ゲスト用連携キー（営業形態で異なる）"
                        price="別途見積"
                        required={true}
                      />
                      <PricingRow
                        title="システム連携費"
                        description="旅館の場合に必要なシステム連携（※施設単位）"
                        price="50,000円"
                        required={false}
                      />

                      {/* ランニング費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          ランニング費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="ホスト用管理システム"
                        description="SCやPMS、各種管理機能やレポート機能など"
                        price="3,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ゲスト用管理システム"
                        description="自動チェックイン/アウト、セルフチェックイン機能、本人確認機能など"
                        price="2,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ビデオ通話"
                        description="本人確認のためのビデオ通話"
                        price="5,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="IoTスマートロック連携"
                        description="システムとの連携利用料（OPELO）"
                        price="300円/月/部屋"
                        required={true}
                      />

                      {/* オプション費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          オプション費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="ブッキングエンジン①"
                        description="自社サイトなどに宿泊予約機能を搭載しOTAを介さず予約から決済まで"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="ブッキングエンジン②"
                        description="部屋ごとに①利用分に発生する月額ランニングコスト"
                        price="100円/月/部屋"
                        required={false}
                      />
                      <PricingRow
                        title="決済連携機能③"
                        description="ブッキングエンジン搭載した場合に必要な決済連携機能で部屋ごとに発生する月額ランニングコスト"
                        price="300円/月/部屋"
                        required={false}
                      />
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
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
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-gold-100 text-gold-600 hover:bg-gold-200 border-none">
                      ワーカー・ステイ
                    </Badge>
                    <CardTitle className="text-2xl text-gray-900 font-light">民泊営業プラン</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      ビジネス利用に最適なプラン。長期滞在のワーカーや出張者向けの民泊施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-4 text-left text-gray-900 font-medium">説明</th>
                        <th className="py-3 px-4 text-right text-gray-900 font-medium">料金</th>
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
                        title="企画料"
                        description="宿泊施設の設計・インバウンド最適化"
                        price="100,000円"
                        required={true}
                      />
                      <PricingRow
                        title="調査代行料"
                        description="申請要件調査・消防法確認"
                        price="100,000円"
                        required={false}
                      />
                      <PricingRow
                        title="運営代行料"
                        description="宿泊売上の20%（OTA費別）"
                        price="20%"
                        required={true}
                      />
                      <PricingRow
                        title="家具家電販売"
                        description="家具家電の仕入・設置"
                        price="別途見積"
                        required={true}
                      />
                      <PricingRow
                        title="消耗品販売"
                        description="消耗品の提供・交換"
                        price="別途見積"
                        required={true}
                      />

                      {/* 初期システム費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          初期システム費用
                        </td>
                      </tr>
                      <PricingRow
                        title="アカウントセットアップ料金"
                        description="アカウント作成、SC/PMS連携設定"
                        price="10,000円"
                        required={true}
                      />
                      <PricingRow
                        title="タブレット"
                        description="チェックイン用端末（Lenovo 9〜11インチ）"
                        price="45,000円"
                        required={true}
                      />
                      <PricingRow
                        title="IoTスマートロック連携キー"
                        description="ゲスト用連携キー（営業形態で異なる）"
                        price="別途見積"
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
                        description="SCやPMS、各種管理機能やレポート機能など"
                        price="3,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ゲスト用管理システム"
                        description="自動チェックイン/アウト、セルフチェックイン機能、本人確認機能など"
                        price="2,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ビデオ通話"
                        description="本人確認のためのビデオ通話"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="IoTスマートロック連携"
                        description="システムとの連携利用料（OPELO）"
                        price="300円/月/部屋"
                        required={true}
                      />

                      {/* オプション費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          オプション費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="ブッキングエンジン①"
                        description="自社サイトなどに宿泊予約機能を搭載しOTAを介さず予約から決済まで"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="ブッキングエンジン②"
                        description="部屋ごとに①利用分に発生する月額ランニングコスト"
                        price="100円/月/部屋"
                        required={false}
                      />
                      <PricingRow
                        title="決済連携機能③"
                        description="ブッキングエンジン搭載した場合に必要な決済連携機能で部屋ごとに発生する月額ランニングコスト"
                        price="300円/月/部屋"
                        required={false}
                      />
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
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
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2 bg-gold-100 text-gold-600 hover:bg-gold-200 border-none">
                      ワーカー・ステイ
                    </Badge>
                    <CardTitle className="text-2xl text-gray-900 font-light">旅館営業プラン</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      ビジネス利用に最適なプラン。長期滞在のワーカーや出張者向けの旅館施設の運営をサポートします。
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-gray-900 font-medium">プラン内容</th>
                        <th className="py-3 px-4 text-left text-gray-900 font-medium">説明</th>
                        <th className="py-3 px-4 text-right text-gray-900 font-medium">料金</th>
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
                        title="企画料"
                        description="宿泊施設の設計・インバウンド最適化"
                        price="150,000円"
                        required={true}
                      />
                      <PricingRow
                        title="調査代行料"
                        description="申請要件調査・消防法確認"
                        price="100,000円"
                        required={false}
                      />
                      <PricingRow
                        title="運営代行料"
                        description="宿泊売上の20%（OTA費別）"
                        price="20%"
                        required={true}
                      />
                      <PricingRow
                        title="家具家電販売"
                        description="家具家電の仕入・設置"
                        price="別途見積"
                        required={true}
                      />
                      <PricingRow
                        title="消耗品販売"
                        description="消耗品の提供・交換"
                        price="別途見積"
                        required={true}
                      />

                      {/* 初期システム費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          初期システム費用
                        </td>
                      </tr>
                      <PricingRow
                        title="アカウントセットアップ料金"
                        description="アカウント作成、SC/PMS連携設定"
                        price="10,000円"
                        required={true}
                      />
                      <PricingRow
                        title="タブレット"
                        description="チェックイン用端末（Lenovo 9〜11インチ）"
                        price="45,000円"
                        required={true}
                      />
                      <PricingRow
                        title="IoTスマートロック連携キー"
                        description="ゲスト用連携キー（営業形態で異なる）"
                        price="別途見積"
                        required={true}
                      />
                      <PricingRow
                        title="システム連携費"
                        description="旅館の場合に必要なシステム連携（※施設単位）"
                        price="50,000円"
                        required={false}
                      />

                      {/* ランニング費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          ランニング費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="ホスト用管理システム"
                        description="SCやPMS、各種管理機能やレポート機能など"
                        price="3,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ゲスト用管理システム"
                        description="自動チェックイン/アウト、セルフチェックイン機能、本人確認機能など"
                        price="2,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="ビデオ通話"
                        description="本人確認のためのビデオ通話"
                        price="5,000円/月"
                        required={true}
                      />
                      <PricingRow
                        title="IoTスマートロック連携"
                        description="システムとの連携利用料（OPELO）"
                        price="300円/月/部屋"
                        required={true}
                      />

                      {/* オプション費用セクション */}
                      <tr className="bg-gray-50">
                        <td colSpan={3} className="py-2 px-4 font-medium text-gold-600">
                          オプション費用（月額）
                        </td>
                      </tr>
                      <PricingRow
                        title="ブッキングエンジン①"
                        description="自社サイトなどに宿泊予約機能を搭載しOTAを介さず予約から決済まで"
                        price="5,000円/月"
                        required={false}
                      />
                      <PricingRow
                        title="ブッキングエンジン②"
                        description="部屋ごとに①利用分に発生する月額ランニングコスト"
                        price="100円/月/部屋"
                        required={false}
                      />
                      <PricingRow
                        title="決済連携機能③"
                        description="ブッキングエンジン搭載した場合に必要な決済連携機能で部屋ごとに発生する月額ランニングコスト"
                        price="300円/月/部屋"
                        required={false}
                      />
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
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
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-900">{title}</span>
          {required && (
            <Badge variant="outline" className="text-xs border-gold-200 text-gold-600">
              必須
            </Badge>
          )}
        </div>
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center gap-1">
          <span className="text-gray-600 text-sm">{description}</span>
          <Tooltip>
            <TooltipTrigger>
              <HelpCircle className="h-4 w-4 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs text-sm">{description}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </td>
      <td className="py-3 px-4 text-right">
        <span className="text-gray-900">{price}</span>
      </td>
    </tr>
  )
}

