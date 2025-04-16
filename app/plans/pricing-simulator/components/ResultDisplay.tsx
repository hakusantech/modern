"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ResultOption } from "../types";
import { formatPrice } from "../utils";

interface ResultDisplayProps {
  initialCost: number;
  monthlyCost: number;
  percentageCost: number;
  monthlyCommission: number;
  totalMonthlyCost: number;
  resultOptions: ResultOption[];
  onReset: () => void;
  onPrev: () => void;
}

export default function ResultDisplay({
  initialCost,
  monthlyCost,
  percentageCost,
  monthlyCommission,
  totalMonthlyCost,
  resultOptions,
  onReset,
  onPrev,
}: ResultDisplayProps) {
  const initialFees = resultOptions.filter((option) => !option.monthly);
  const monthlyFees = resultOptions.filter((option) => option.monthly);

  return (
    <div>
      <h4 className="text-xl font-medium text-gray-800 mb-6">ステップ5: 料金シミュレーション結果</h4>

      <div className="space-y-6">
        <Card className="border-gold-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gold-800">初期費用</CardTitle>
            <CardDescription className="text-gold-600">
              導入時に必要となる費用
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {initialFees.map((option) => (
                <div key={option.id} className="flex justify-between items-center">
                  <span className="text-gold-700">{option.name}</span>
                  <span className="font-medium text-gold-800">
                    {formatPrice(option.price)}
                  </span>
                </div>
              ))}

              <div className="flex justify-between items-center py-1 text-gold-600">
                <span>売上に対する手数料</span>
                <span>{percentageCost}%</span>
              </div>

              <Separator className="my-2 bg-gold-100" />

              <div className="flex justify-between items-center py-1">
                <span className="font-medium text-gold-800">初期費用合計</span>
                <span className="font-bold text-gold-800">
                  {formatPrice(initialCost)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gold-800">月額費用</CardTitle>
            <CardDescription className="text-gold-600">
              運営にかかる月額費用と手数料
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {monthlyFees.map((option) => (
                <div key={option.id} className="flex justify-between items-center">
                  <span className="text-gold-700">{option.name}</span>
                  <span className="font-medium text-gold-800">
                    {formatPrice(option.price)} / 月
                  </span>
                </div>
              ))}

              <div className="flex justify-between items-center py-1 text-gold-600">
                <span>売上に対する手数料 ({percentageCost}%)</span>
                <span>{formatPrice(monthlyCommission)} / 月</span>
              </div>

              <Separator className="my-2 bg-gold-100" />

              <div className="flex justify-between items-center py-1">
                <span className="font-medium text-gold-800">月額費用合計</span>
                <span className="font-bold text-gold-800">
                  {formatPrice(totalMonthlyCost)} / 月
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-gold-50 border border-gold-100 rounded-lg p-4">
        <p className="text-gold-700 text-sm">
          上記はあくまで概算です。実際の料金はお客様の状況により異なる場合があります。
          詳しい見積もりをご希望の方は、お問い合わせください。
        </p>
      </div>

      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={onPrev}
          className="border-gold-300 text-gold-700 hover:bg-gold-50"
        >
          戻る
        </Button>
        <Button
          onClick={onReset}
          className="bg-gold-600 hover:bg-gold-700 text-white px-6"
        >
          もう一度やり直す
        </Button>
      </div>
    </div>
  );
} 