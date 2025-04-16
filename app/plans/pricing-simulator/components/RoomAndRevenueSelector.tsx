"use client";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface RoomAndRevenueSelectorProps {
  roomCount: number;
  onRoomCountChange: (count: number) => void;
  estimatedMonthlyRevenue: number;
  onRevenueChange: (revenue: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function RoomAndRevenueSelector({
  roomCount,
  onRoomCountChange,
  estimatedMonthlyRevenue,
  onRevenueChange,
  onNext,
  onPrev,
}: RoomAndRevenueSelectorProps) {
  return (
    <div>
      <h4 className="text-xl font-medium text-gray-800 mb-6">ステップ3: 規模と売上予想</h4>
      
      <div className="space-y-6">
        <Card className="border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-800">
              部屋数を選択
            </CardTitle>
            <CardDescription className="text-gray-600">
              運営する部屋数を選択してください
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">部屋数: {roomCount}室</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 flex items-center justify-center border-gray-300"
                    onClick={() => onRoomCountChange(Math.max(1, roomCount - 1))}
                  >
                    -
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 flex items-center justify-center border-gray-300"
                    onClick={() => onRoomCountChange(roomCount + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-800">
              予想月間売上
            </CardTitle>
            <CardDescription className="text-gray-600">
              全部屋の合計の月間予想売上を選択してください（運営手数料の計算に使用されます）
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-gold-700 mb-2 block">
                  予想月間売上: {new Intl.NumberFormat('ja-JP').format(estimatedMonthlyRevenue)}円/月
                </span>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="50000"
                  value={estimatedMonthlyRevenue}
                  onChange={(e) => onRevenueChange(parseInt(e.target.value))}
                  className="w-full accent-gold-600"
                />
                <div className="flex justify-between text-xs text-gold-500 mt-1">
                  <span>10万円</span>
                  <span>100万円</span>
                  <span>200万円</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={onPrev}
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          戻る
        </Button>
        <Button
          onClick={onNext}
          className="bg-gold-600 hover:bg-gold-700 text-white px-6"
        >
          次へ
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 