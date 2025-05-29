"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface RoomAndRevenueSelectorProps {
  roomCount: number
  setRoomCount: (count: number) => void
  estimatedMonthlyRevenue: number
  setEstimatedMonthlyRevenue: (amount: number) => void
}

const RoomAndRevenueSelector = memo(({
  roomCount,
  setRoomCount,
  estimatedMonthlyRevenue,
  setEstimatedMonthlyRevenue
}: RoomAndRevenueSelectorProps) => {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* 部屋数選択 */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">1</span>
            </div>
            部屋数を選択
          </CardTitle>
          <CardDescription className="text-gray-600 ml-11">
            運営する部屋数を選択してください
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">部屋数: {roomCount}室</span>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 w-10 p-0 rounded-lg border-gray-300 hover:bg-gray-100"
                  onClick={() => setRoomCount(Math.max(1, roomCount - 1))}
                >
                  -
                </Button>
                <span className="text-2xl font-bold text-blue-600 min-w-[3rem] text-center">{roomCount}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 w-10 p-0 rounded-lg border-gray-300 hover:bg-gray-100"
                  onClick={() => setRoomCount(roomCount + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Button
                  key={num}
                  variant="outline"
                  size="sm"
                  className={cn(
                    "h-12 text-base transition-all duration-200",
                    roomCount === num
                      ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                      : "border-gray-300 hover:bg-gray-100"
                  )}
                  onClick={() => setRoomCount(num)}
                >
                  {num}室
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 予想月間売上 */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">2</span>
            </div>
            予想月間売上
          </CardTitle>
          <CardDescription className="text-gray-600 ml-11">
            全部屋の合計の月間予想売上を選択してください（運営手数料の計算に使用されます）
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {new Intl.NumberFormat('ja-JP').format(estimatedMonthlyRevenue)}円
              </div>
              <div className="text-sm text-gray-600">予想月間売上</div>
            </div>
            
            <div className="space-y-4">
              <div>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="50000"
                  value={estimatedMonthlyRevenue}
                  onChange={(e) => setEstimatedMonthlyRevenue(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((estimatedMonthlyRevenue - 100000) / (2000000 - 100000)) * 100}%, #e5e7eb ${((estimatedMonthlyRevenue - 100000) / (2000000 - 100000)) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>10万円</span>
                  <span>100万円</span>
                  <span>200万円</span>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  直接入力（円）:
                </label>
                <input
                  type="number"
                  min="100000"
                  max="2000000"
                  step="10000"
                  value={estimatedMonthlyRevenue}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    if (value >= 100000 && value <= 2000000) {
                      setEstimatedMonthlyRevenue(value);
                    }
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-medium"
                  placeholder="100000"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
})

RoomAndRevenueSelector.displayName = "RoomAndRevenueSelector"

export default RoomAndRevenueSelector