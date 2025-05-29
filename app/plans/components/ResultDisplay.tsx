"use client"

import { memo } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"

interface ResultOption {
  id: string
  name: string
  price: number | string
  selected: boolean
  monthly?: boolean
  isPercentage?: boolean
  perRoom?: boolean
}

interface ResultDisplayProps {
  plan: string
  businessType: string
  roomCount: number
  estimatedMonthlyRevenue: number
  initialCost: number
  monthlyCost: number
  percentageCost: number
  monthlyCommission: number
  totalMonthlyCost: number
  resultOptions: ResultOption[]
}

const formatPrice = (price: number | string) => {
  if (typeof price === "number") {
    return new Intl.NumberFormat("ja-JP").format(price) + "円"
  }
  return price
}

const ResultDisplay = memo(({
  plan,
  businessType,
  roomCount,
  estimatedMonthlyRevenue,
  initialCost,
  monthlyCost,
  percentageCost,
  monthlyCommission,
  totalMonthlyCost,
  resultOptions
}: ResultDisplayProps) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card className="border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">📋</span>
            </div>
            選択したプラン
          </CardTitle>
          <div className="ml-11 space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                {plan === "fe" ? "ファミリー・エクスペリエンス" : "ワーケーション・ステイ"}
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-green-200">
                {businessType === "minpaku" ? "民泊営業" : "旅館営業"}
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                {roomCount}部屋
              </Badge>
            </div>
            <p className="text-gray-600">
              予想月売上: <span className="font-semibold text-blue-600">{formatPrice(estimatedMonthlyRevenue)}</span>
            </p>
          </div>
        </CardHeader>
      </Card>

      <Card className="border border-gray-200 shadow-lg">
        <CardHeader className="pb-4 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-green-600 font-semibold">💰</span>
            </div>
            初期費用
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {resultOptions
              .filter(option => option.selected && !option.monthly && !option.isPercentage)
              .map(option => (
                <div key={`${option.id}-initial`} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700 font-medium">{option.name}</span>
                  <span className="font-semibold text-gray-900 text-lg">
                    {formatPrice(option.price)}
                  </span>
                </div>
              ))}

            <div className="flex justify-between items-center py-4 bg-green-50 rounded-lg px-4 mt-4">
              <span className="font-semibold text-green-800 text-lg">初期費用合計</span>
              <span className="font-bold text-green-800 text-xl">
                {resultOptions.some(option => option.selected && !option.monthly && !option.isPercentage && option.price === "別途見積")
                  ? "一部別途見積"
                  : `${initialCost.toLocaleString()}円`}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-gray-200 shadow-lg">
        <CardHeader className="pb-4 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">📅</span>
            </div>
            月額費用
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {resultOptions
              .filter(option => option.selected && option.monthly && !option.isPercentage)
              .map(option => (
                <div key={`${option.id}-monthly`} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">{option.name}</span>
                  <span className="font-semibold text-gray-900">
                    {typeof option.price === "number"
                      ? `${(option.perRoom ? option.price * roomCount : option.price).toLocaleString()}円/月`
                      : option.price}
                    {option.perRoom && typeof option.price === 'number' && ` (${option.price.toLocaleString()}円/部屋)`}
                  </span>
                </div>
             ))}

             {resultOptions.filter(option => option.selected && option.isPercentage).length > 0 && (
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700 font-medium">
                  運営代行料（売上{formatPrice(estimatedMonthlyRevenue)}に対して）
                </span>
                <span className="font-semibold text-gray-900">
                  {formatPrice(monthlyCommission)}/月 ({percentageCost}%)
                </span>
              </div>
             )}

            <div className="flex justify-between items-center py-4 bg-blue-50 rounded-lg px-4 mt-4">
              <span className="font-semibold text-blue-800 text-lg">月額費用合計（概算）</span>
              <span className="font-bold text-blue-800 text-xl">
                {`${(monthlyCost + monthlyCommission).toLocaleString()}円/月`}
              </span>
            </div>
            
            <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mt-3">
              内訳: 固定費 {monthlyCost.toLocaleString()}円 + 成果報酬 {monthlyCommission.toLocaleString()}円
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">重要な注記事項</p>
            <ul className="space-y-1 text-xs">
              <li>• 表示価格はすべて税抜きです。別途消費税がかかります。</li>
              <li>• こちらはシミュレーション結果であり、実際の料金は物件の状況や詳細な要件によって異なる場合があります。</li>
              <li>• 詳細なお見積りについては、お問い合わせください。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
})

ResultDisplay.displayName = "ResultDisplay"

export default ResultDisplay