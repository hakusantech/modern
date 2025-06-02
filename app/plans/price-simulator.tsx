"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InfoIcon, ArrowRightIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

// 営業タイプの型定義
type BusinessType = "minpaku" | "ryokan"
// プランタイプの型定義
type PlanType = "fe" | "ws"

export default function PricingSimulator() {
  // プラン選択
  const [planType, setPlanType] = useState<PlanType>("fe") // fe または ws

  // 入力値
  const [roomCount, setRoomCount] = useState(1)
  const [estimatedRevenue, setEstimatedRevenue] = useState(100000)

  // オプション選択状態（任意項目）
  const [options, setOptions] = useState({
    // 共通オプション
    surveyService: false,
    tablet: false,
    smartLock: true, // デフォルトで必要なものはtrueに
    bookingEngine: false,
    paymentIntegration: false,
    // 別途見積もり項目のカスタム金額
    customFurnitureAmount: {
      minpaku: 1000000,
      ryokan: 1500000,
    },
    customConsumablesAmount: {
      minpaku: 10000,
      ryokan: 20000,
    },
  } as {
    surveyService: boolean;
    tablet: boolean;
    smartLock: boolean;
    bookingEngine: boolean;
    paymentIntegration: boolean;
    customFurnitureAmount: Record<BusinessType, number>;
    customConsumablesAmount: Record<BusinessType, number>;
    [key: string]: boolean | Record<BusinessType, number>;
  })

  // 計算結果（民泊と旅館の両方）
  const [results, setResults] = useState({
    minpaku: {
      initialCost: 0,
      monthlyCost: 0,
      managementFee: 0,
      totalMonthlyCost: 0, // 運営代行料を含む月額費用
      yearlyCost: 0,
      estimatedProfit: 0,
      yearlyEstimatedProfit: 0, // 追加
    },
    ryokan: {
      initialCost: 0,
      monthlyCost: 0,
      managementFee: 0,
      totalMonthlyCost: 0, // 運営代行料を含む月額費用
      yearlyCost: 0,
      estimatedProfit: 0,
      yearlyEstimatedProfit: 0, // 追加
    },
  })

  // 料金データ（プランと営業タイプごとに定義）
  const pricingData: Record<PlanType, Record<BusinessType, {
    initial: {
      planningFee: number;
      licenseFee?: number;
      surveyFee: number;
      furnitureSetup: number;
      consumables: number;
      accountSetup: number;
      systemIntegration?: number;
      tablet: number;
      smartLock: number;
      minpaku: number;
    };
    monthly: {
      hostSystem: number;
      guestSystem: number;
      keyManagement: number;
      checkInSystem: number;
      videoCall: number;
      smartLockMonthly: number;
      bookingEngine: number;
      paymentIntegration: number;
    };
    managementFeeRate: number;
  }>> = {
    fe: {
      minpaku: {
        initial: {
          planningFee: 150000,
          licenseFee: 70000,
          surveyFee: 100000,
          furnitureSetup: 1000000,
          consumables: 10000,
          accountSetup: 10000,
          tablet: 45000,
          smartLock: 30000,
          minpaku: 1000000,
        },
        monthly: {
          hostSystem: 3000,
          guestSystem: 2000,
          keyManagement: 1000,
          checkInSystem: 2000,
          videoCall: 3000,
          smartLockMonthly: 300, // 部屋数ごと
          bookingEngine: 5000, // + 100円/部屋
          paymentIntegration: 300, // 部屋数ごと
        },
        managementFeeRate: 0.2, // 売上の20%
      },
      ryokan: {
        initial: {
          planningFee: 300000,
          surveyFee: 100000,
          furnitureSetup: 1500000, // 別途見積もりの代わりに仮の金額
          consumables: 20000, // 別途見積もりの代わりに仮の金額
          accountSetup: 10000,
          systemIntegration: 50000,
          tablet: 45000,
          smartLock: 30000,
          minpaku: 1500000,
        },
        monthly: {
          hostSystem: 3000,
          guestSystem: 2000,
          keyManagement: 1000,
          checkInSystem: 2000,
          videoCall: 3000,
          smartLockMonthly: 300, // 部屋数ごと
          bookingEngine: 5000, // + 100円/部屋
          paymentIntegration: 300, // 部屋数ごと
        },
        managementFeeRate: 0.2, // 売上の20%
      },
    },
    ws: {
      minpaku: {
        initial: {
          planningFee: 100000,
          licenseFee: 70000,
          surveyFee: 100000,
          furnitureSetup: 800000, // 別途見積もりの代わりに仮の金額
          consumables: 10000, // 別途見積もりの代わりに仮の金額
          accountSetup: 10000,
          tablet: 45000,
          smartLock: 30000,
          minpaku: 800000,
        },
        monthly: {
          hostSystem: 3000,
          guestSystem: 2000,
          keyManagement: 1000,
          checkInSystem: 2000,
          videoCall: 3000,
          smartLockMonthly: 300, // 部屋数ごと
          bookingEngine: 5000, // + 100円/部屋
          paymentIntegration: 300, // 部屋数ごと
        },
        managementFeeRate: 0.2, // 売上の20%
      },
      ryokan: {
        initial: {
          planningFee: 250000,
          surveyFee: 100000,
          furnitureSetup: 1200000, // 別途見積もりの代わりに仮の金額
          consumables: 15000, // 別途見積もりの代わりに仮の金額
          accountSetup: 10000,
          systemIntegration: 50000,
          tablet: 45000,
          smartLock: 30000,
          minpaku: 1200000,
        },
        monthly: {
          hostSystem: 3000,
          guestSystem: 2000,
          keyManagement: 1000,
          checkInSystem: 2000,
          videoCall: 3000,
          smartLockMonthly: 300, // 部屋数ごと
          bookingEngine: 5000, // + 100円/部屋
          paymentIntegration: 300, // 部屋数ごと
        },
        managementFeeRate: 0.2, // 売上の20%
      },
    },
  }

  // 予約エンジンと決済機能の依存関係を処理
  useEffect(() => {
    if (!options.bookingEngine && options.paymentIntegration) {
      setOptions((prev) => ({
        ...prev,
        paymentIntegration: false,
      }))
    }
  }, [options.bookingEngine])

  // 入力値が変わるたびに計算を実行
  useEffect(() => {
    calculateCosts()
  }, [planType, roomCount, estimatedRevenue, options])

  // 特定の機能が必要かどうかを判定する関数
  const hasKeyManagement = (businessType: BusinessType): boolean => {
    return businessType === "ryokan" || (planType === "fe" && businessType === "minpaku")
  }

  // 料金計算ロジック（民泊と旅館の両方を計算）
  const calculateCosts = () => {
    const businessTypes: BusinessType[] = ["minpaku", "ryokan"]
    const newResults = {
      minpaku: { initialCost: 0, monthlyCost: 0, managementFee: 0, totalMonthlyCost: 0, yearlyCost: 0, estimatedProfit: 0, yearlyEstimatedProfit: 0 },
      ryokan: { initialCost: 0, monthlyCost: 0, managementFee: 0, totalMonthlyCost: 0, yearlyCost: 0, estimatedProfit: 0, yearlyEstimatedProfit: 0 },
    }

    businessTypes.forEach((businessType) => {
      const currentPlan = pricingData[planType][businessType]
      if (currentPlan && typeof currentPlan.initial === 'object') {
        let initialCost = 0
        let monthlyCost = 0

        // 初期費用の計算
        initialCost += currentPlan.initial.planningFee

        if (businessType === "minpaku" && currentPlan.initial.licenseFee !== undefined) {
          initialCost += currentPlan.initial.licenseFee
        }

        if (options.surveyService) {
          initialCost += currentPlan.initial.surveyFee
        }

        // 別途見積もり項目のカスタム金額を使用
        initialCost += options.customFurnitureAmount[businessType]
        initialCost += options.customConsumablesAmount[businessType]

        initialCost += currentPlan.initial.accountSetup

        if (businessType === "ryokan" && currentPlan.initial.systemIntegration !== undefined) {
          initialCost += currentPlan.initial.systemIntegration
        }

        if (options.tablet) {
          initialCost += currentPlan.initial.tablet
        }

        if (options.smartLock) {
          initialCost += currentPlan.initial.smartLock
        }

        // 月額費用の計算
        monthlyCost += currentPlan.monthly.hostSystem
        monthlyCost += currentPlan.monthly.guestSystem

        // 鍵管理、チェックイン、ビデオ通話は条件によって異なる
        if (hasKeyManagement(businessType)) {
          monthlyCost += currentPlan.monthly.keyManagement
          monthlyCost += currentPlan.monthly.checkInSystem
          monthlyCost += currentPlan.monthly.videoCall
        }

        if (options.smartLock) {
          monthlyCost += currentPlan.monthly.smartLockMonthly * roomCount
        }

        if (options.bookingEngine) {
          monthlyCost += currentPlan.monthly.bookingEngine + 100 * roomCount

          if (options.paymentIntegration) {
            monthlyCost += currentPlan.monthly.paymentIntegration * roomCount
          }
        }

        // 運営代行料の計算
        const managementFee = estimatedRevenue * currentPlan.managementFeeRate
        const currentTotalMonthlyCost = monthlyCost + managementFee;
        const currentYearlyCost = initialCost + currentTotalMonthlyCost * 12;
        const yearlyRevenue = estimatedRevenue * 12;

        // 運営代行料を含む月額費用
        newResults[businessType] = {
          initialCost,
          monthlyCost,
          managementFee,
          totalMonthlyCost: currentTotalMonthlyCost,
          yearlyCost: currentYearlyCost,
          estimatedProfit: estimatedRevenue - currentTotalMonthlyCost,
          yearlyEstimatedProfit: yearlyRevenue - currentYearlyCost,
        }
      } else {
        throw new Error(`Plan type ${planType} or business type ${businessType} is not defined or initial is not an object`)
      }
    })

    setResults(newResults)
  }

  // 数値をカンマ区切りの金額表示に変換
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("ja-JP")
  }

  // プラン名の表示用
  const getPlanName = () => {
    if (planType === "fe") {
      return "ファミリー・エクスペリエンス"
    } else {
      return "ワーカーズ・スマート"
    }
  }

  // オプション変更ハンドラー
  const handleOptionChange = (optionName: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionName]: !prev[optionName],
    }))
  }

  // カスタム金額変更ハンドラー
  const handleCustomAmountChange = (field: string, businessType: BusinessType, value: number) => {
    setOptions((prev) => ({
      ...prev,
      [field]: {
        ...(typeof prev[field] === 'object' ? prev[field] : { minpaku: 0, ryokan: 0 }),
        [businessType]: value,
      },
    }))
  }

  // 差額計算
  const calculateDifference = (ryokanValue: number, minpakuValue: number) => {
    const diff = ryokanValue - minpakuValue
    return diff > 0 ? `+${formatCurrency(diff)}` : formatCurrency(diff)
  }

  // Ensure correct indexing with BusinessType
  const getPricingData = (planType: PlanType, businessType: BusinessType) => {
    const planData = pricingData[planType];
    if (businessType in planData) {
      return planData[businessType];
    }
    throw new Error(`Invalid business type: ${businessType}`);
  };

  // Ensure correct handling of possibly undefined variables
  const getCurrentPlan = (planType: PlanType): Record<BusinessType, { initial: { planningFee: number; licenseFee?: number; surveyFee: number; furnitureSetup: number; consumables: number; accountSetup: number; systemIntegration?: number; tablet: number; smartLock: number; minpaku: number; }; monthly: { hostSystem: number; guestSystem: number; keyManagement: number; checkInSystem: number; videoCall: number; smartLockMonthly: number; bookingEngine: number; paymentIntegration: number; }; managementFeeRate: number; }> | undefined => {
    return pricingData[planType];
  };

  const someFunction = (planType: PlanType) => {
    const currentPlan = getCurrentPlan(planType);
    if (currentPlan) {
      const initial = currentPlan.minpaku.initial; // Accessing 'minpaku' as an example
      const spreadObject = { ...initial };
      // ... use spreadObject safely ...
    } else {
      throw new Error(`Plan type ${planType} is not defined`);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <TooltipProvider>
        <Tabs
          defaultValue="fe"
          value={planType}
          onValueChange={(value) => setPlanType(value as PlanType)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-8">
            <TabsTrigger 
              value="fe" 
              className="data-[state=active]:bg-gold-600 data-[state=active]:text-white font-semibold text-xs sm:text-sm md:text-base py-2 px-1 sm:px-2 md:px-4 truncate"
            >
              <span className="hidden sm:inline">FEプラン（</span>ファミリー・エクスペリエンス<span className="hidden sm:inline">）</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ws" 
              className="data-[state=active]:bg-blue-700 data-[state=active]:text-white font-semibold text-xs sm:text-sm md:text-base py-2 px-1 sm:px-2 md:px-4 truncate"
            >
              <span className="hidden sm:inline">WSプラン（</span>ワーカーズ・スマート<span className="hidden sm:inline">）</span>
            </TabsTrigger>
          </TabsList>

          {/* FEプラン */}
          <TabsContent value="fe">
            <SimulatorContent
              planType={planType}
              roomCount={roomCount}
              setRoomCount={setRoomCount}
              estimatedRevenue={estimatedRevenue}
              setEstimatedRevenue={setEstimatedRevenue}
              options={options}
              handleOptionChange={handleOptionChange}
              handleCustomAmountChange={handleCustomAmountChange}
              results={results}
              formatCurrency={formatCurrency}
              getPlanName={getPlanName}
              calculateDifference={calculateDifference}
              accentColor="gold"
            />
          </TabsContent>

          {/* WSプラン */}
          <TabsContent value="ws">
            <SimulatorContent
              planType={planType}
              roomCount={roomCount}
              setRoomCount={setRoomCount}
              estimatedRevenue={estimatedRevenue}
              setEstimatedRevenue={setEstimatedRevenue}
              options={options}
              handleOptionChange={handleOptionChange}
              handleCustomAmountChange={handleCustomAmountChange}
              results={results}
              formatCurrency={formatCurrency}
              getPlanName={getPlanName}
              calculateDifference={calculateDifference}
              accentColor="blue"
            />
          </TabsContent>
        </Tabs>
      </TooltipProvider>
    </div>
  )
}

function SimulatorContent({
  planType,
  roomCount,
  setRoomCount,
  estimatedRevenue,
  setEstimatedRevenue,
  options,
  handleOptionChange,
  handleCustomAmountChange,
  results,
  formatCurrency,
  getPlanName,
  calculateDifference,
  accentColor,
}: {
  planType: PlanType,
  roomCount: number,
  setRoomCount: (value: number) => void,
  estimatedRevenue: number,
  setEstimatedRevenue: (value: number) => void,
  options: {
    surveyService: boolean,
    tablet: boolean,
    smartLock: boolean,
    bookingEngine: boolean,
    paymentIntegration: boolean,
    customFurnitureAmount: Record<BusinessType, number>,
    customConsumablesAmount: Record<BusinessType, number>,
    [key: string]: boolean | Record<BusinessType, number>,
  },
  handleOptionChange: (optionName: string) => void,
  handleCustomAmountChange: (field: string, businessType: BusinessType, value: number) => void,
  results: Record<string, {
    initialCost: number,
    monthlyCost: number,
    managementFee: number,
    totalMonthlyCost: number,
    yearlyCost: number,
    estimatedProfit: number,
    yearlyEstimatedProfit: number, // 追加
  }>,
  formatCurrency: (amount: number) => string,
  getPlanName: () => string,
  calculateDifference: (ryokanValue: number, minpakuValue: number) => string,
  accentColor: string,
}) {
  // accentColorに基づいて適切なクラスを選択
  const accentBgLight = accentColor === "gold" ? "bg-gold-100" : "bg-blue-100";
  const accentBgMedium = accentColor === "gold" ? "bg-gold-200" : "bg-blue-200";
  const accentBgDark = accentColor === "gold" ? "bg-gold-600" : "bg-blue-700";
  const accentText = accentColor === "gold" ? "text-gold-700" : "text-blue-800";
  const accentBorder = accentColor === "gold" ? "border-gold-300" : "border-blue-300";
  const accentRing = accentColor === "gold" ? "focus:ring-gold-500" : "focus:ring-blue-500";

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 入力フォーム */}
      <Card className={`bg-white ${accentBorder} shadow-lg`}>
        <CardHeader className="pb-3 sm:pb-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <Badge className={`mb-2 ${accentBgLight} ${accentText} hover:${accentBgMedium} border-none font-medium text-sm sm:text-base px-3 py-1`}>
                {getPlanName()}
              </Badge>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-bold">料金シミュレーター</CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 font-normal leading-relaxed">
                必要な情報を入力して、民泊営業と旅館営業の費用を比較します
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-5 sm:space-y-7 px-4 sm:px-6">
          {/* 部屋数と想定売上 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="roomCount" className="text-gray-800 font-bold text-sm sm:text-base md:text-lg">部屋数を入力してください</Label>
              <Input
                id="roomCount"
                type="number"
                min="1"
                value={roomCount}
                onChange={(e) => { const val = parseInt(e.target.value, 10); setRoomCount(isNaN(val) || val < 1 ? 1 : val); }}
                placeholder="例: 3"
                className={`border-2 ${accentBorder} ${accentRing} focus:ring-2 focus:ring-offset-1 bg-white text-black font-medium text-lg sm:text-xl h-11 sm:h-14`}
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="revenue" className="text-gray-800 font-bold text-sm sm:text-base md:text-lg">月間想定売上を入力してください（円）</Label>
              <Input
                id="revenue"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={estimatedRevenue}
                onChange={(e) => { 
                  const val = e.target.value === '' ? 0 : parseInt(e.target.value.replace(/[^0-9]/g, ''), 10); 
                  setEstimatedRevenue(isNaN(val) ? 0 : val); 
                }}
                placeholder="例: 300000"
                className={`border-2 ${accentBorder} ${accentRing} focus:ring-2 focus:ring-offset-1 bg-white text-black font-medium text-lg sm:text-xl h-11 sm:h-14`}
              />
            </div>
          </div>

          {/* オプション選択 */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">任意オプション</h3>
            <div className="space-y-2 sm:space-y-2.5">
              <div className="flex items-center space-x-2.5">
                <Checkbox
                  id="surveyService"
                  checked={options.surveyService}
                  onCheckedChange={() => handleOptionChange("surveyService")}
                  className="border-gray-400 h-5 w-5 sm:h-5 sm:w-5 data-[state=checked]:bg-black bg-white"
                />
                <Label htmlFor="surveyService" className="text-gray-800 font-medium text-sm sm:text-base">
                  調査代行料（申請要件調査・消防法確認など）
                </Label>
              </div>
              <div className="flex items-center space-x-2.5">
                <Checkbox 
                  id="tablet" 
                  checked={options.tablet} 
                  onCheckedChange={() => handleOptionChange("tablet")} 
                  className="border-gray-400 h-5 w-5 sm:h-5 sm:w-5 data-[state=checked]:bg-black bg-white"
                />
                <Label htmlFor="tablet" className="text-gray-800 font-medium text-sm sm:text-base">
                  チェックイン用タブレット
                </Label>
              </div>
              <div className="flex items-center space-x-2.5">
                <Checkbox
                  id="smartLock"
                  checked={options.smartLock}
                  onCheckedChange={() => handleOptionChange("smartLock")}
                  className="border-gray-400 h-5 w-5 sm:h-5 sm:w-5 data-[state=checked]:bg-black bg-white"
                />
                <Label htmlFor="smartLock" className="text-gray-800 font-medium text-sm sm:text-base">
                  スマートロック連携キー
                </Label>
              </div>
              <div className="flex items-center space-x-2.5">
                <Checkbox
                  id="bookingEngine"
                  checked={options.bookingEngine}
                  onCheckedChange={() => handleOptionChange("bookingEngine")}
                  className="border-gray-400 h-5 w-5 sm:h-5 sm:w-5 data-[state=checked]:bg-black bg-white"
                />
                <Label htmlFor="bookingEngine" className="text-gray-800 font-medium text-sm sm:text-base">
                  自社予約エンジン
                </Label>
              </div>
              {options.bookingEngine && (
                <div className="flex items-center space-x-2.5 ml-5 sm:ml-7">
                  <Checkbox
                    id="paymentIntegration"
                    checked={options.paymentIntegration}
                    onCheckedChange={() => handleOptionChange("paymentIntegration")}
                    className="border-gray-400 h-5 w-5 sm:h-5 sm:w-5 data-[state=checked]:bg-black bg-white"
                  />
                  <Label htmlFor="paymentIntegration" className="text-gray-800 font-medium text-sm sm:text-base">
                    決済連携機能
                  </Label>
                </div>
              )}
            </div>
          </div>

          {/* 別途見積もり項目のカスタム金額入力 */}
          <div className="space-y-2.5 sm:space-y-3.5">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">別途見積もり項目のカスタム金額</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className={`p-3.5 sm:p-4 ${accentBgLight} rounded-lg border ${accentBorder}`}>
                <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-2.5 text-gray-900">民泊営業</h4>
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="space-y-1">
                    <Label htmlFor="furniture-minpaku" className="text-gray-800 font-medium text-xs sm:text-sm md:text-base">
                      家具家電・什器備品の設置費用を入力してください
                    </Label>
                    <Input
                      id="furniture-minpaku"
                      type="number"
                      min="0"
                      value={options.customFurnitureAmount.minpaku}
                      onChange={(e) =>
                        handleCustomAmountChange(
                          "customFurnitureAmount",
                          "minpaku",
                          Number.parseInt(e.target.value) || 0,
                        )
                      }
                      placeholder="例: 1000000"
                      className={`border-gray-400 focus:ring-1 focus:ring-offset-0 ${accentRing} bg-white h-9 sm:h-11 text-base sm:text-lg`}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="consumables-minpaku" className="text-gray-800 font-medium text-xs sm:text-sm md:text-base">
                      消耗品の提供・交換費用を入力してください
                    </Label>
                    <Input
                      id="consumables-minpaku"
                      type="number"
                      min="0"
                      value={options.customConsumablesAmount.minpaku}
                      onChange={(e) =>
                        handleCustomAmountChange(
                          "customConsumablesAmount",
                          "minpaku",
                          Number.parseInt(e.target.value) || 0,
                        )
                      }
                      placeholder="例: 10000"
                      className={`border-gray-400 focus:ring-1 focus:ring-offset-0 ${accentRing} bg-white h-9 sm:h-11 text-base sm:text-lg`}
                    />
                  </div>
                </div>
              </div>
              <div className={`p-3.5 sm:p-4 ${accentBgLight} rounded-lg border ${accentBorder}`}>
                <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-2.5 text-gray-900">旅館営業</h4>
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="space-y-1">
                    <Label htmlFor="furniture-ryokan" className="text-gray-800 font-medium text-xs sm:text-sm md:text-base">
                      家具家電・什器備品の設置費用を入力してください
                    </Label>
                    <Input
                      id="furniture-ryokan"
                      type="number"
                      min="0"
                      value={options.customFurnitureAmount.ryokan}
                      onChange={(e) =>
                        handleCustomAmountChange(
                          "customFurnitureAmount",
                          "ryokan",
                          Number.parseInt(e.target.value) || 0,
                        )
                      }
                      placeholder="例: 1500000"
                      className={`border-gray-400 focus:ring-1 focus:ring-offset-0 ${accentRing} bg-white h-9 sm:h-11 text-base sm:text-lg`}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="consumables-ryokan" className="text-gray-800 font-medium text-xs sm:text-sm md:text-base">
                      消耗品の提供・交換費用を入力してください
                    </Label>
                    <Input
                      id="consumables-ryokan"
                      type="number"
                      min="0"
                      value={options.customConsumablesAmount.ryokan}
                      onChange={(e) =>
                        handleCustomAmountChange(
                          "customConsumablesAmount",
                          "ryokan",
                          Number.parseInt(e.target.value) || 0,
                        )
                      }
                      placeholder="例: 20000"
                      className={`border-gray-400 focus:ring-1 focus:ring-offset-0 ${accentRing} bg-white h-9 sm:h-11 text-base sm:text-lg`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 計算結果の比較表示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* 民泊営業の結果 */}
        <Card className={`${accentBorder} ${accentBgLight} shadow-lg`}>
          <CardHeader className={`pb-2.5 sm:pb-3 border-b ${accentBorder} px-4 sm:px-6 py-3 sm:py-4`}>
            <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">民泊営業</CardTitle>
            <CardDescription className={`${accentText} font-medium text-sm sm:text-base`}>{getPlanName()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3.5 sm:space-y-4 pt-3.5 sm:pt-4 px-4 sm:px-6">
            <div className="space-y-2 sm:space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-700 font-medium">初期費用合計</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">{formatCurrency(results.minpaku.initialCost)}円</span>
              </div>
              <Separator className={`${accentBorder}`} />
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-700 font-medium">月額費用（システム等）</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">{formatCurrency(results.minpaku.monthlyCost)}円/月</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm sm:text-base text-gray-700 font-medium">運営代行料（月額）</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InfoIcon className="h-4 w-4 sm:h-4 sm:w-4 text-gray-500 ml-1.5 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-gray-800 border-gray-300 text-xs sm:text-sm">
                      <p className="font-medium">売上の20%として計算</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">{formatCurrency(results.minpaku.managementFee)}円/月</span>
              </div>
              <Separator className={`${accentBorder}`} />
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-900 font-bold">月額費用合計</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">{formatCurrency(results.minpaku.totalMonthlyCost)}円/月</span>
              </div>
              <Separator className={`${accentBorder}`} />
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-green-600 font-bold">月間想定利益</span>
                <span className={`text-xl sm:text-2xl font-bold ${results.minpaku.estimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'} font-mono`}>
                  {formatCurrency(results.minpaku.estimatedProfit)}円
                </span>
              </div>
            </div>

            <div className={`p-4 sm:p-5 ${accentBgMedium} rounded-lg mt-3 sm:mt-5 border ${accentBorder}`}>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-base sm:text-lg">年間総コスト（概算）</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-mono">{formatCurrency(results.minpaku.yearlyCost)}円</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1.5 sm:mt-2">※ 初期費用 + (月額費用合計 × 12ヶ月)</p>
              <Separator className={`my-2 sm:my-3 ${accentBorder}`} />
              <div className="flex justify-between items-center">
                <span className={`font-bold text-base sm:text-lg ${results.minpaku.yearlyEstimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>年間想定利益</span>
                <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold ${results.minpaku.yearlyEstimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'} font-mono`}>
                  {formatCurrency(results.minpaku.yearlyEstimatedProfit)}円
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 旅館営業の結果 */}
        <Card className={`${accentBorder} ${accentBgLight} shadow-lg`}>
          <CardHeader className={`pb-2.5 sm:pb-3 border-b ${accentBorder} px-4 sm:px-6 py-3 sm:py-4`}>
            <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">旅館営業</CardTitle>
            <CardDescription className={`${accentText} font-medium text-sm sm:text-base`}>{getPlanName()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3.5 sm:space-y-4 pt-3.5 sm:pt-4 px-4 sm:px-6">
            <div className="space-y-2 sm:space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-700 font-medium">初期費用合計</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">{formatCurrency(results.ryokan.initialCost)}円</span>
              </div>
              <Separator className={`${accentBorder}`} />
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-700 font-medium">月額費用（システム等）</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">{formatCurrency(results.ryokan.monthlyCost)}円/月</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-sm sm:text-base text-gray-700 font-medium">運営代行料（月額）</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InfoIcon className="h-4 w-4 sm:h-4 sm:w-4 text-gray-500 ml-1.5 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-gray-800 border-gray-300 text-xs sm:text-sm">
                      <p className="font-medium">売上の20%として計算</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">{formatCurrency(results.ryokan.managementFee)}円/月</span>
              </div>
              <Separator className={`${accentBorder}`} />
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-900 font-bold">月額費用合計</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 font-mono">{formatCurrency(results.ryokan.totalMonthlyCost)}円/月</span>
              </div>
              <Separator className={`${accentBorder}`} />
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-green-600 font-bold">月間想定利益</span>
                <span className={`text-xl sm:text-2xl font-bold ${results.ryokan.estimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'} font-mono`}>
                  {formatCurrency(results.ryokan.estimatedProfit)}円
                </span>
              </div>
            </div>

            <div className={`p-4 sm:p-5 ${accentBgMedium} rounded-lg mt-3 sm:mt-5 border ${accentBorder}`}>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-base sm:text-lg">年間総コスト（概算）</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-mono">{formatCurrency(results.ryokan.yearlyCost)}円</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-1.5 sm:mt-2">※ 初期費用 + (月額費用合計 × 12ヶ月)</p>
              <Separator className={`my-2 sm:my-3 ${accentBorder}`} />
              <div className="flex justify-between items-center">
                <span className={`font-bold text-base sm:text-lg ${results.ryokan.yearlyEstimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>年間想定利益</span>
                <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold ${results.ryokan.yearlyEstimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'} font-mono`}>
                  {formatCurrency(results.ryokan.yearlyEstimatedProfit)}円
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 比較サマリー */}
      <Card className={`bg-white ${accentBorder} shadow-lg`}>
        <CardHeader className={`pb-2.5 sm:pb-3 border-b ${accentBorder} px-4 sm:px-6 py-3 sm:py-4`}>
          <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">民泊営業と旅館営業の比較</CardTitle>
        </CardHeader>
        <CardContent className="pt-3.5 sm:pt-4 px-4 sm:px-6">
          <div className="overflow-x-auto -mx-4 sm:-mx-6">
            <div className="inline-block min-w-full align-middle px-4 sm:px-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className={`border-b ${accentBorder}`}>
                    <th scope="col" className="text-left py-2.5 sm:py-3 text-sm sm:text-base text-gray-800 font-semibold whitespace-nowrap">項目</th>
                    <th scope="col" className="text-left py-2.5 sm:py-3 text-sm sm:text-base text-gray-800 font-semibold whitespace-nowrap px-1.5 sm:px-2">民泊営業</th>
                    <th scope="col" className="text-center py-2.5 sm:py-3 px-1.5 sm:px-2 w-7 sm:w-9">
                      <ArrowRightIcon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${accentText} mx-auto`} />
                    </th>
                    <th scope="col" className="text-left py-2.5 sm:py-3 text-sm sm:text-base text-gray-800 font-semibold whitespace-nowrap px-1.5 sm:px-2">旅館営業</th>
                    <th scope="col" className="text-left py-2.5 sm:py-3 text-sm sm:text-base text-gray-800 font-semibold whitespace-nowrap px-1.5 sm:px-2">差額</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className={`border-b border-gray-200 hover:${accentBgLight}`}>
                    <td className="py-2 sm:py-2.5 text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">初期費用</td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>{formatCurrency(results.minpaku.initialCost)}円</td>
                    <td></td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>{formatCurrency(results.ryokan.initialCost)}円</td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>
                      {calculateDifference(results.ryokan.initialCost, results.minpaku.initialCost)}円
                    </td>
                  </tr>
                  <tr className={`border-b border-gray-200 hover:${accentBgLight}`}>
                    <td className="py-2 sm:py-2.5 text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">月額費用（システム等）</td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>{formatCurrency(results.minpaku.monthlyCost)}円</td>
                    <td></td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>{formatCurrency(results.ryokan.monthlyCost)}円</td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>
                      {calculateDifference(results.ryokan.monthlyCost, results.minpaku.monthlyCost)}円
                    </td>
                  </tr>
                  <tr className={`border-b border-gray-200 hover:${accentBgLight}`}>
                    <td className="py-2 sm:py-2.5 text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">運営代行料（月額）</td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>{formatCurrency(results.minpaku.managementFee)}円</td>
                    <td></td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>{formatCurrency(results.ryokan.managementFee)}円</td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>
                      {calculateDifference(results.ryokan.managementFee, results.minpaku.managementFee)}円
                    </td>
                  </tr>
                  <tr className={`border-b border-gray-200 hover:${accentBgLight}`}>
                    <td className="py-2 sm:py-2.5 text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">月額費用合計</td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>{formatCurrency(results.minpaku.totalMonthlyCost)}円</td>
                    <td></td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>{formatCurrency(results.ryokan.totalMonthlyCost)}円</td>
                    <td className={`text-left text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap`}>
                      {calculateDifference(results.ryokan.totalMonthlyCost, results.minpaku.totalMonthlyCost)}円
                    </td>
                  </tr>
                  <tr className={`border-b border-gray-200 hover:${accentBgLight}`}>
                    <td className="py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-green-600 whitespace-nowrap">月間想定利益</td>
                    <td className={`text-left text-sm sm:text-base font-semibold ${results.minpaku.estimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'} whitespace-nowrap`}>{formatCurrency(results.minpaku.estimatedProfit)}円</td>
                    <td></td>
                    <td className={`text-left text-sm sm:text-base font-semibold ${results.ryokan.estimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'} whitespace-nowrap`}>{formatCurrency(results.ryokan.estimatedProfit)}円</td>
                    <td className={`text-left text-sm sm:text-base font-semibold whitespace-nowrap`}>
                      {calculateDifference(results.ryokan.estimatedProfit, results.minpaku.estimatedProfit)}円
                    </td>
                  </tr>
                  <tr className={`border-b-0 hover:${accentBgLight}`}>
                    <td className="py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-gray-900 whitespace-nowrap">年間総コスト</td>
                    <td className={`text-left text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap`}>{formatCurrency(results.minpaku.yearlyCost)}円</td>
                    <td></td>
                    <td className={`text-left text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap`}>{formatCurrency(results.ryokan.yearlyCost)}円</td>
                    <td className={`text-left text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap`}>
                      {calculateDifference(results.ryokan.yearlyCost, results.minpaku.yearlyCost)}円
                    </td>
                  </tr>
                  <tr className={`border-b-0 hover:${accentBgLight}`}>
                    <td className="py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-green-600 whitespace-nowrap">年間想定利益</td>
                    <td className={`text-left text-sm sm:text-base font-semibold ${results.minpaku.yearlyEstimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'} whitespace-nowrap`}>{formatCurrency(results.minpaku.yearlyEstimatedProfit)}円</td>
                    <td></td>
                    <td className={`text-left text-sm sm:text-base font-semibold ${results.ryokan.yearlyEstimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'} whitespace-nowrap`}>{formatCurrency(results.ryokan.yearlyEstimatedProfit)}円</td>
                    <td className={`text-left text-sm sm:text-base font-semibold whitespace-nowrap`}>
                      {calculateDifference(results.ryokan.yearlyEstimatedProfit, results.minpaku.yearlyEstimatedProfit)}円
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={`text-sm sm:text-base text-gray-800 mt-4 sm:mt-5 p-3 sm:p-4 ${accentBgLight} rounded-lg border ${accentBorder}`}>
            <p className="font-medium text-left leading-relaxed">※ 表示価格はすべて税抜きです。別途消費税がかかります。</p>
            <p className="font-medium text-left leading-relaxed">※ 運営代行料は最低利用料金が設定される場合があります。</p>
            <p className="font-medium text-left leading-relaxed">※ 実際の費用は物件状況により変動します。詳細はお問合せください。</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 