"use client"

import { memo } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface PriceOption {
  id: string;
  name: string;
  description: string;
  required: boolean;
  prices: {
    fe: {
      minpaku: number | string;
      ryokan: number | string;
    };
    ws: {
      minpaku: number | string;
      ryokan: number | string;
    };
  };
  isPercentage?: boolean;
  monthly?: boolean;
  perRoom?: boolean;
  requiredFor?: {
    fe: {
      minpaku: boolean;
      ryokan: boolean;
    };
    ws: {
      minpaku: boolean;
      ryokan: boolean;
    };
  };
}

interface OptionSelectorProps {
  basicFees: PriceOption[]
  systemFees: PriceOption[]
  runningCosts: PriceOption[]
  optionalCosts: PriceOption[]
  selectedOptions: { [key: string]: boolean }
  plan: string
  businessType: string
  handleOptionChange: (id: string, checked: boolean) => void
}

const formatPrice = (price: number | string) => {
  if (typeof price === "number") {
    return new Intl.NumberFormat("ja-JP").format(price) + "円"
  }
  return price
}

const OptionSelector = memo(({
  basicFees,
  systemFees,
  runningCosts,
  optionalCosts,
  selectedOptions,
  plan,
  businessType,
  handleOptionChange
}: OptionSelectorProps) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-4 bg-gradient-to-r from-gold-50 to-yellow-50">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-gold-600 font-semibold">💰</span>
            </div>
            基本料金
          </CardTitle>
          <CardDescription className="text-gray-600 ml-11">
            初期費用と基本サービス料金
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {basicFees.map((fee) => (
            <div key={fee.id} className="flex items-start p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <Checkbox
                id={`basic-${fee.id}`}
                checked={fee.required || selectedOptions[fee.id]}
                onCheckedChange={(checked) =>
                  handleOptionChange(fee.id, checked as boolean)
                }
                disabled={fee.required}
                className={cn(
                  "mt-1 h-5 w-5",
                  fee.required 
                    ? "border-gray-400 data-[state=checked]:bg-gray-400 data-[state=checked]:border-gray-400" 
                    : "data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                )}
              />
              <div className="ml-4 flex-1">
                <label
                  htmlFor={`basic-${fee.id}`}
                  className={cn(
                    "text-base font-medium cursor-pointer block",
                    fee.required ? "text-gray-600" : "text-gray-900"
                  )}
                >
                  {fee.name}
                  {fee.required && (
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">必須</span>
                  )}
                </label>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed whitespace-pre-line">
                  {fee.description}
                </p>
                <p className="text-base font-semibold text-blue-600 mt-2">
                  料金: {formatPrice(fee.prices[plan as "fe" | "ws"][businessType as "minpaku" | "ryokan"])}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-4 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-green-600 font-semibold">🔧</span>
            </div>
            システム関連費用
          </CardTitle>
          <CardDescription className="text-gray-600 ml-11">
            システム連携とハードウェア関連費用
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {systemFees.map((fee) => (
            <div key={fee.id} className="flex items-start p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <Checkbox
                id={`system-${fee.id}`}
                checked={fee.required || selectedOptions[fee.id]}
                onCheckedChange={(checked) =>
                  handleOptionChange(fee.id, checked as boolean)
                }
                disabled={fee.required}
                className={cn(
                  "mt-1 h-5 w-5",
                  fee.required 
                    ? "border-gray-400 data-[state=checked]:bg-gray-400 data-[state=checked]:border-gray-400" 
                    : "data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                )}
              />
              <div className="ml-4 flex-1">
                <label
                  htmlFor={`system-${fee.id}`}
                  className={cn(
                    "text-base font-medium cursor-pointer block",
                    fee.required ? "text-gray-600" : "text-gray-900"
                  )}
                >
                  {fee.name}
                  {fee.required && (
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">必須</span>
                  )}
                </label>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed whitespace-pre-line">
                  {fee.description}
                </p>
                <p className="text-base font-semibold text-blue-600 mt-2">
                  料金: {formatPrice(fee.prices[plan as "fe" | "ws"][businessType as "minpaku" | "ryokan"])}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-4 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">🔄</span>
            </div>
            ランニングコスト
          </CardTitle>
          <CardDescription className="text-gray-600 ml-11">
            月額で発生する運営費用
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {runningCosts.map((fee) => (
            <div key={fee.id} className="flex items-start p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <Checkbox
                id={`running-${fee.id}`}
                checked={fee.required || selectedOptions[fee.id]}
                onCheckedChange={(checked) =>
                  handleOptionChange(fee.id, checked as boolean)
                }
                disabled={fee.required}
                className={cn(
                  "mt-1 h-5 w-5",
                  fee.required 
                    ? "border-gray-400 data-[state=checked]:bg-gray-400 data-[state=checked]:border-gray-400" 
                    : "data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                )}
              />
              <div className="ml-4 flex-1">
                <label
                  htmlFor={`running-${fee.id}`}
                  className={cn(
                    "text-base font-medium cursor-pointer block",
                    fee.required ? "text-gray-600" : "text-gray-900"
                  )}
                >
                  {fee.name}
                  {fee.required && (
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">必須</span>
                  )}
                </label>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed whitespace-pre-line">
                  {fee.description}
                </p>
                <p className="text-base font-semibold text-blue-600 mt-2">
                  料金: {formatPrice(fee.prices[plan as "fe" | "ws"][businessType as "minpaku" | "ryokan"])}
                  {fee.perRoom ? " (部屋あたり)" : ""}
                  {fee.monthly ? "/月" : ""}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border border-gray-200 shadow-sm">
        <CardHeader className="pb-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-purple-600 font-semibold">⭐</span>
            </div>
            オプション機能
          </CardTitle>
          <CardDescription className="text-gray-600 ml-11">
            必要に応じて追加できるオプション
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {optionalCosts.map((fee) => (
            <div key={fee.id} className="flex items-start p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <Checkbox
                id={`optional-${fee.id}`}
                checked={fee.required || selectedOptions[fee.id]}
                onCheckedChange={(checked) =>
                  handleOptionChange(fee.id, checked as boolean)
                }
                disabled={fee.required}
                className={cn(
                  "mt-1 h-5 w-5",
                  fee.required 
                    ? "border-gray-400 data-[state=checked]:bg-gray-400 data-[state=checked]:border-gray-400" 
                    : "data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                )}
              />
              <div className="ml-4 flex-1">
                <label
                  htmlFor={`optional-${fee.id}`}
                  className={cn(
                    "text-base font-medium cursor-pointer block",
                    fee.required ? "text-gray-600" : "text-gray-900"
                  )}
                >
                  {fee.name}
                  {fee.required && (
                    <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">必須</span>
                  )}
                </label>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed whitespace-pre-line">
                  {fee.description}
                </p>
                <p className="text-base font-semibold text-blue-600 mt-2">
                  料金: {formatPrice(fee.prices[plan as "fe" | "ws"][businessType as "minpaku" | "ryokan"])}
                  {fee.perRoom ? " (部屋あたり)" : ""}
                  {fee.monthly ? "/月" : ""}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
})

OptionSelector.displayName = "OptionSelector"

export default OptionSelector