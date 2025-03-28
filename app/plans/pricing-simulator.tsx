"use client"

import { CardFooter } from "@/components/ui/card"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { HelpCircle, Check, ChevronRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// 料金データ
const pricingData = {
  basicFees: [
    {
      id: "planning",
      name: "企画料",
      description:
        "・宿泊施設となる部屋の企画設計料\n・独自の取材データをもとにしたインバウンドに最適な宿泊施設をデザイン",
      required: true,
      prices: {
        fe: {
          minpaku: 150000,
          ryokan: 200000,
        },
        ws: {
          minpaku: 100000,
          ryokan: 150000,
        },
      },
    },
    {
      id: "research",
      name: "調査代行料",
      description:
        "・住宅宿泊事業者に必要な申請事項および申請書類等の調査料\n・民泊業または旅館業、および付随する消防法や関連法令に基づきます",
      required: false,
      prices: {
        fe: {
          minpaku: 100000,
          ryokan: 100000,
        },
        ws: {
          minpaku: 100000,
          ryokan: 100000,
        },
      },
    },
    {
      id: "management",
      name: "運営代行料",
      description:
        "・住宅宿泊管理業者として宿泊施設を管理運用する運営代行料\n・宿泊売上代金に対して一律20％を申し受けます（※OTA費用は別途必要）",
      required: true,
      isPercentage: true,
      prices: {
        fe: {
          minpaku: 20,
          ryokan: 20,
        },
        ws: {
          minpaku: 20,
          ryokan: 20,
        },
      },
    },
    {
      id: "furniture",
      name: "家具家電販売",
      description:
        "・指定業者より企画に適合する家具や家電を弊社が仕入・設置\n・企画に合わせた家電と家具を一括まとめて仕入れて設置まで行います",
      required: true,
      prices: {
        fe: {
          minpaku: 1000000,
          ryokan: "別途見積",
        },
        ws: {
          minpaku: "別途見積",
          ryokan: "別途見積",
        },
      },
    },
    {
      id: "supplies",
      name: "消耗品販売",
      description:
        "・事業用ゴミ袋、トイレットペーパー、調理油などの消耗品を弊社が補充・交換\n・企画に合わせた家電と家具を一括まとめて仕入れて設置まで行います",
      required: true,
      prices: {
        fe: {
          minpaku: 10000,
          ryokan: "別途見積",
        },
        ws: {
          minpaku: "別途見積",
          ryokan: "別途見積",
        },
      },
    },
  ],
  systemFees: [
    {
      id: "initial",
      name: "初期費用",
      description: "・アカウント初期セットアップ料金\n・各オンラインシステムの連携および初期設定（SC/PMS/OTA）",
      required: true,
      prices: {
        fe: {
          minpaku: 10000,
          ryokan: 10000,
        },
        ws: {
          minpaku: 10000,
          ryokan: 10000,
        },
      },
    },
    {
      id: "tablet",
      name: "タブレット",
      description:
        "・ゲストが利用するタブレット料（端末セットアップ込）\n・Lenovo9インチ（※KEEYLSの場合のみ11インチ対応可）",
      required: false,
      prices: {
        fe: {
          minpaku: 45000,
          ryokan: 45000,
        },
        ws: {
          minpaku: 45000,
          ryokan: 45000,
        },
      },
    },
    {
      id: "smartlock",
      name: "IoTスマートロック連携キー",
      description:
        "・システムと自動連携できるゲスト用キー（複数選択可）\n・民泊営業の場合と旅館営業の場合でシステムとキーが異なります",
      required: true,
      prices: {
        fe: {
          minpaku: 30000,
          ryokan: "別途見積",
        },
        ws: {
          minpaku: "別途見積",
          ryokan: "別途見積",
        },
      },
    },
  ],
  runningCosts: [
    {
      id: "airhost-hms",
      name: "AirHost HMS",
      description: "・SC＋PMS（Wブッキング防止、予約情報自動連携）\n・ダイナミックプライシング機能、レポート機能",
      required: true,
      monthly: true,
      prices: {
        fe: {
          minpaku: 3000,
          ryokan: 3000,
        },
        ws: {
          minpaku: 3000,
          ryokan: 3000,
        },
      },
    },
    {
      id: "airhost-one",
      name: "AirHost ONE",
      description:
        "・自動チェックイン/アウトシステム\n・セルフチェックイン機能、本人確認機能、アップセル機能（時間予約・レンタル）",
      required: true,
      monthly: true,
      prices: {
        fe: {
          minpaku: 2000,
          ryokan: 2000,
        },
        ws: {
          minpaku: 2000,
          ryokan: 2000,
        },
      },
    },
    {
      id: "video-call",
      name: "ビデオ通話",
      description: "・ゲストのチェックイン時ビデオ通話による本人確認",
      required: false,
      monthly: true,
      prices: {
        fe: {
          minpaku: 6000,
          ryokan: 0,
        },
        ws: {
          minpaku: 6000,
          ryokan: 0,
        },
      },
      requiredFor: {
        fe: {
          minpaku: false,
          ryokan: false,
        },
        ws: {
          minpaku: false,
          ryokan: false,
        },
      },
    },
    {
      id: "smartlock-monthly",
      name: "IoTスマートロック連携",
      description:
        "・システムと自動連携させた場合の月額利用料\n・AirHostのスマートロックを連携させた場合は部屋ごとに必要です",
      required: false,
      monthly: true,
      prices: {
        fe: {
          minpaku: 300,
          ryokan: 300,
        },
        ws: {
          minpaku: 300,
          ryokan: 300,
        },
      },
    },
  ],
  optionalCosts: [
    {
      id: "booking-engine-1",
      name: "ブッキングエンジン①",
      description:
        "・自社サイトでの宿泊予約機能搭載・連携に必要な基本料金\n・OTAを介さず自社サイトによる宿泊予約から決済までを実現します",
      required: false,
      monthly: true,
      prices: {
        fe: {
          minpaku: 5000,
          ryokan: 5000,
        },
        ws: {
          minpaku: 5000,
          ryokan: 5000,
        },
      },
    },
    {
      id: "booking-engine-2",
      name: "ブッキングエンジン②",
      description:
        "・自社サイトでの宿泊予約機能搭載・連携に必要な月額料金\n・部屋ごとに毎月発生するランニングコストになります",
      required: false,
      monthly: true,
      perRoom: true,
      prices: {
        fe: {
          minpaku: 100,
          ryokan: 100,
        },
        ws: {
          minpaku: 100,
          ryokan: 100,
        },
      },
    },
    {
      id: "payment-integration",
      name: "決済連携機能③",
      description:
        "・ブッキングエンジン搭載した場合に必要な決済連携料金\n・部屋ごとに毎月発生するランニングコストになります",
      required: false,
      monthly: true,
      perRoom: true,
      prices: {
        fe: {
          minpaku: 300,
          ryokan: 300,
        },
        ws: {
          minpaku: 300,
          ryokan: 300,
        },
      },
    },
  ],
}

// プランの選択肢
const planOptions = [
  {
    id: "fe",
    name: "ファミリー・エクスペリエンス・プラン",
    description:
      "家族での思い出作りに最適なプラン。北海道の自然や文化を体験できるアクティビティと快適な宿泊施設を組み合わせました。",
    color: "blue",
  },
  {
    id: "ws",
    name: "ワーケーション・スマート・プラン",
    description:
      "仕事と休暇を両立させる新しいライフスタイル「ワーケーション」に最適なプラン。快適な作業環境と北海道の自然を満喫できます。",
    color: "amber",
  },
]

// 営業タイプの選択肢
const businessTypeOptions = [
  {
    id: "minpaku",
    name: "民泊営業",
    description: "住宅宿泊事業法（民泊新法）に基づく営業形態です。年間提供日数の上限は180日となります。",
    icon: "🏠",
  },
  {
    id: "ryokan",
    name: "旅館営業",
    description:
      "旅館業法に基づく営業形態です。年間提供日数の制限はありませんが、より厳格な基準を満たす必要があります。",
    icon: "🏮",
  },
]

export default function PricingSimulator() {
  // ステップ管理
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  // 選択内容
  const [plan, setPlan] = useState<"fe" | "ws">("fe")
  const [businessType, setBusinessType] = useState<"minpaku" | "ryokan">("minpaku")
  const [roomCount, setRoomCount] = useState<number>(1)
  const [estimatedMonthlyRevenue, setEstimatedMonthlyRevenue] = useState<number>(300000)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>({})

  // 計算結果
  const [initialCost, setInitialCost] = useState<number>(0)
  const [monthlyCost, setMonthlyCost] = useState<number>(0)
  const [percentageCost, setPercentageCost] = useState<number>(0)
  const [monthlyCommission, setMonthlyCommission] = useState<number>(0)
  const [totalMonthlyCost, setTotalMonthlyCost] = useState<number>(0)

  // 初期選択状態を設定
  useEffect(() => {
    const initialOptions: Record<string, boolean> = {}

    // 必須項目を選択状態に
    ;[
      ...pricingData.basicFees,
      ...pricingData.systemFees,
      ...pricingData.runningCosts,
      ...pricingData.optionalCosts,
    ].forEach((item) => {
      if (item.required) {
        initialOptions[item.id] = true
      } else if (item.requiredFor && item.requiredFor[plan][businessType]) {
        initialOptions[item.id] = true
      } else {
        initialOptions[item.id] = false
      }
    })

    setSelectedOptions(initialOptions)
  }, [plan, businessType])

  // 料金計算
  useEffect(() => {
    let initial = 0
    let monthly = 0
    let percentage = 0

    // 基本料金
    pricingData.basicFees.forEach((fee) => {
      if (selectedOptions[fee.id]) {
        const price = fee.prices[plan][businessType]
        if (typeof price === "number") {
          if (fee.isPercentage) {
            percentage += price
          } else {
            initial += price
          }
        }
      }
    })

    // システム料金
    pricingData.systemFees.forEach((fee) => {
      if (selectedOptions[fee.id]) {
        const price = fee.prices[plan][businessType]
        if (typeof price === "number") {
          initial += price
        }
      }
    })

    // ランニングコスト
    pricingData.runningCosts.forEach((fee) => {
      if (selectedOptions[fee.id]) {
        const price = fee.prices[plan][businessType]
        if (typeof price === "number") {
          if (fee.perRoom) {
            monthly += price * roomCount
          } else {
            monthly += price
          }
        }
      }
    })

    // オプションコスト
    pricingData.optionalCosts.forEach((fee) => {
      if (selectedOptions[fee.id]) {
        const price = fee.prices[plan][businessType]
        if (typeof price === "number") {
          if (fee.perRoom) {
            monthly += price * roomCount
          } else {
            monthly += price
          }
        }
      }
    })

    const commission = Math.round(estimatedMonthlyRevenue * (percentage / 100))

    setInitialCost(initial)
    setMonthlyCost(monthly)
    setPercentageCost(percentage)
    setMonthlyCommission(commission)
    setTotalMonthlyCost(monthly + commission)
  }, [selectedOptions, plan, businessType, roomCount, estimatedMonthlyRevenue])

  const handleOptionChange = (id: string, checked: boolean) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  const formatPrice = (price: number | string) => {
    if (typeof price === "number") {
      return new Intl.NumberFormat("ja-JP").format(price) + "円"
    }
    return price
  }

  // 次のステップへ進む
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  // 前のステップへ戻る
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // 最初からやり直す
  const resetSimulator = () => {
    setCurrentStep(1)
    setPlan("fe")
    setBusinessType("minpaku")
    setRoomCount(1)
    setEstimatedMonthlyRevenue(300000)
  }

  return (
    <TooltipProvider>
      <div className="w-full">
        <Card className="bg-darkgray-800 border-darkgray-700 overflow-hidden">
          {/* ステッププログレスバー */}
          <div className="relative h-2 bg-darkgray-700">
            <div
              className="absolute top-0 left-0 h-full bg-ice-600 transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>

          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-snow-50">料金シミュレーション</CardTitle>
                <CardDescription className="text-snow-300">
                  ステップに沿って選択するだけで、簡単に料金を計算できます。
                </CardDescription>
              </div>
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                      currentStep > index + 1
                        ? "bg-ice-600 text-white"
                        : currentStep === index + 1
                          ? "bg-ice-600/20 text-ice-400 border border-ice-600"
                          : "bg-darkgray-700 text-snow-400",
                    )}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* ステップ1: プラン選択 */}
            {currentStep === 1 && (
              <div className="p-6 space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-snow-50">ステップ1: プラン選択</h3>
                  <p className="text-snow-300 mt-2">目的に合わせたプランをお選びください</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {planOptions.map((option) => (
                    <div
                      key={option.id}
                      className={cn(
                        "relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1",
                        plan === option.id
                          ? `border-2 border-${option.color}-500 shadow-lg`
                          : "border border-darkgray-700 hover:border-darkgray-600",
                      )}
                      onClick={() => setPlan(option.id as "fe" | "ws")}
                    >
                      {plan === option.id && (
                        <div
                          className={`absolute top-3 right-3 w-6 h-6 rounded-full bg-${option.color}-500 flex items-center justify-center`}
                        >
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <div className={`h-2 bg-${option.color}-500`}></div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-snow-50 mb-2">{option.name}</h4>
                        <p className="text-sm text-snow-300">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ステップ2: 営業タイプ選択 */}
            {currentStep === 2 && (
              <div className="p-6 space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-snow-50">ステップ2: 営業タイプ選択</h3>
                  <p className="text-snow-300 mt-2">営業形態をお選びください</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {businessTypeOptions.map((option) => (
                    <div
                      key={option.id}
                      className={cn(
                        "relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1",
                        businessType === option.id
                          ? "border-2 border-ice-500 shadow-lg"
                          : "border border-darkgray-700 hover:border-darkgray-600",
                      )}
                      onClick={() => setBusinessType(option.id as "minpaku" | "ryokan")}
                    >
                      {businessType === option.id && (
                        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-ice-500 flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-2">{option.icon}</span>
                          <h4 className="text-lg font-bold text-snow-50">{option.name}</h4>
                        </div>
                        <p className="text-sm text-snow-300">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ステップ3: 部屋数と予想売上 */}
            {currentStep === 3 && (
              <div className="p-6 space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-snow-50">ステップ3: 部屋数と予想売上</h3>
                  <p className="text-snow-300 mt-2">運営する部屋数と予想される月間売上を入力してください</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="bg-darkgray-700/30 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-snow-50 mb-4">部屋数</h4>
                    <p className="text-sm text-snow-300 mb-4">
                      運営する部屋の数を選択してください。部屋数によって一部の料金が変動します。
                    </p>

                    <div className="flex items-center justify-center mt-6">
                      <button
                        className="w-10 h-10 rounded-l-lg bg-darkgray-700 text-snow-100 flex items-center justify-center hover:bg-darkgray-600 transition-colors"
                        onClick={() => setRoomCount(Math.max(1, roomCount - 1))}
                      >
                        -
                      </button>
                      <div className="w-20 h-10 bg-darkgray-800 flex items-center justify-center text-xl font-bold text-snow-50">
                        {roomCount}
                      </div>
                      <button
                        className="w-10 h-10 rounded-r-lg bg-darkgray-700 text-snow-100 flex items-center justify-center hover:bg-darkgray-600 transition-colors"
                        onClick={() => setRoomCount(roomCount + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-center text-sm text-snow-400 mt-2">部屋</p>
                  </div>

                  <div className="bg-darkgray-700/30 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-snow-50 mb-4">予想月間売上</h4>
                    <p className="text-sm text-snow-300 mb-4">
                      月間の予想売上を入力してください。運営代行料（売上の20%）の計算に使用されます。
                    </p>

                    <div className="mt-6">
                      <input
                        type="range"
                        min="100000"
                        max="1000000"
                        step="10000"
                        value={estimatedMonthlyRevenue}
                        onChange={(e) => setEstimatedMonthlyRevenue(Number(e.target.value))}
                        className="w-full h-2 bg-darkgray-600 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-snow-400 mt-1">
                        <span>10万円</span>
                        <span>100万円</span>
                      </div>
                      <div className="text-center mt-4">
                        <span className="text-2xl font-bold text-ice-400">
                          {new Intl.NumberFormat("ja-JP").format(estimatedMonthlyRevenue)}
                        </span>
                        <span className="text-snow-300 ml-1">円/月</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ステップ4: オプション選択 */}
            {currentStep === 4 && (
              <div className="p-6 space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-snow-50">ステップ4: オプション選択</h3>
                  <p className="text-snow-300 mt-2">必要なオプションを選択してください</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-darkgray-700/30 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-snow-50 mb-4">必須項目</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[...pricingData.basicFees, ...pricingData.systemFees, ...pricingData.runningCosts]
                        .filter((item) => item.required)
                        .map((item) => (
                          <div key={item.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={item.id}
                              checked={true}
                              disabled={true}
                              className="mt-1 border-darkgray-600 data-[state=checked]:bg-ice-600 data-[state=checked]:border-ice-600"
                            />
                            <div className="grid gap-1.5">
                              <label htmlFor={item.id} className="font-medium text-snow-200 flex items-center">
                                {item.name}
                                <Badge className="ml-2 bg-ice-600/20 text-ice-400 border-none">必須</Badge>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button className="ml-1 text-snow-400 hover:text-snow-200">
                                      <HelpCircle className="h-4 w-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs bg-darkgray-800 border-darkgray-700">
                                    <p className="text-snow-200 whitespace-pre-line">{item.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </label>
                              <p className="text-sm text-snow-400">
                                {typeof item.prices[plan][businessType] === "number"
                                  ? new Intl.NumberFormat("ja-JP").format(item.prices[plan][businessType] as number) +
                                    "円"
                                  : item.prices[plan][businessType]}
                                {item.isPercentage ? "%" : ""}
                                {item.monthly ? "/月" : ""}
                                {item.perRoom ? " × 部屋数" : ""}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="bg-darkgray-700/30 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-snow-50 mb-4">オプション項目</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        ...pricingData.basicFees,
                        ...pricingData.systemFees,
                        ...pricingData.runningCosts,
                        ...pricingData.optionalCosts,
                      ]
                        .filter((item) => !item.required)
                        .map((item) => (
                          <div key={item.id} className="flex items-start space-x-2">
                            <Checkbox
                              id={item.id}
                              checked={selectedOptions[item.id] || false}
                              onCheckedChange={(checked) => handleOptionChange(item.id, checked as boolean)}
                              className="mt-1 border-darkgray-600 data-[state=checked]:bg-ice-600 data-[state=checked]:border-ice-600"
                            />
                            <div className="grid gap-1.5">
                              <label htmlFor={item.id} className="font-medium text-snow-200 flex items-center">
                                {item.name}
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button className="ml-1 text-snow-400 hover:text-snow-200">
                                      <HelpCircle className="h-4 w-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs bg-darkgray-800 border-darkgray-700">
                                    <p className="text-snow-200 whitespace-pre-line">{item.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </label>
                              <p className="text-sm text-snow-400">
                                {typeof item.prices[plan][businessType] === "number"
                                  ? new Intl.NumberFormat("ja-JP").format(item.prices[plan][businessType] as number) +
                                    "円"
                                  : item.prices[plan][businessType]}
                                {item.isPercentage ? "%" : ""}
                                {item.monthly ? "/月" : ""}
                                {item.perRoom ? " × 部屋数" : ""}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ステップ5: 結果表示 */}
            {currentStep === 5 && (
              <div className="p-6 space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-snow-50">シミュレーション結果</h3>
                  <p className="text-snow-300 mt-2">選択内容に基づく料金シミュレーション結果です</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-darkgray-700/30 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-snow-50 mb-4">選択内容</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-snow-400">プラン</p>
                        <p className="text-snow-100">{planOptions.find((p) => p.id === plan)?.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-snow-400">営業タイプ</p>
                        <p className="text-snow-100">{businessTypeOptions.find((b) => b.id === businessType)?.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-snow-400">部屋数</p>
                        <p className="text-snow-100">{roomCount}部屋</p>
                      </div>
                      <div>
                        <p className="text-sm text-snow-400">予想月間売上</p>
                        <p className="text-snow-100">{formatPrice(estimatedMonthlyRevenue)}/月</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-darkgray-700/30 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-snow-50 mb-4">費用内訳</h4>

                    <div className="space-y-4">
                      <div className="bg-darkgray-800 rounded-lg p-4">
                        <h5 className="font-medium text-snow-100 mb-2">初期費用（一回のみ）</h5>
                        <div className="space-y-2">
                          {[...pricingData.basicFees, ...pricingData.systemFees]
                            .filter(
                              (item) =>
                                selectedOptions[item.id] &&
                                !item.isPercentage &&
                                typeof item.prices[plan][businessType] === "number",
                            )
                            .map((item) => (
                              <div key={item.id} className="flex justify-between text-sm">
                                <span className="text-snow-300">{item.name}</span>
                                <span className="text-snow-100">
                                  {formatPrice(item.prices[plan][businessType] as number)}
                                </span>
                              </div>
                            ))}
                          <Separator className="my-2 bg-darkgray-600" />
                          <div className="flex justify-between font-medium">
                            <span className="text-snow-100">初期費用合計</span>
                            <span className="text-ice-400">{formatPrice(initialCost)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-darkgray-800 rounded-lg p-4">
                        <h5 className="font-medium text-snow-100 mb-2">月額費用</h5>
                        <div className="space-y-2">
                          {[...pricingData.runningCosts, ...pricingData.optionalCosts]
                            .filter(
                              (item) => selectedOptions[item.id] && typeof item.prices[plan][businessType] === "number",
                            )
                            .map((item) => (
                              <div key={item.id} className="flex justify-between text-sm">
                                <span className="text-snow-300">{item.name}</span>
                                <span className="text-snow-100">
                                  {formatPrice(
                                    (item.prices[plan][businessType] as number) * (item.perRoom ? roomCount : 1),
                                  )}
                                  /月
                                </span>
                              </div>
                            ))}
                          <div className="flex justify-between text-sm">
                            <span className="text-snow-300">運営代行料（売上の{percentageCost}%）</span>
                            <span className="text-snow-100">{formatPrice(monthlyCommission)}/月</span>
                          </div>
                          <Separator className="my-2 bg-darkgray-600" />
                          <div className="flex justify-between font-medium">
                            <span className="text-snow-100">月額費用合計</span>
                            <span className="text-ice-400">{formatPrice(totalMonthlyCost)}/月</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-ice-600/20 border border-ice-600/30 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-ice-400 mb-2">総費用</h4>
                        <p className="text-snow-300 text-sm mb-4 md:mb-0">初期費用と月額費用の合計です</p>
                      </div>
                      <div className="text-right">
                        <div className="mb-1">
                          <span className="text-snow-300 text-sm">初期費用（一回のみ）:</span>
                          <span className="text-snow-100 font-bold ml-2">{formatPrice(initialCost)}</span>
                        </div>
                        <div>
                          <span className="text-snow-300 text-sm">月額費用:</span>
                          <span className="text-ice-400 text-2xl font-bold ml-2">
                            {formatPrice(totalMonthlyCost)}/月
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between p-6 bg-darkgray-700/30 border-t border-darkgray-700">
            {currentStep > 1 ? (
              <Button
                variant="outline"
                onClick={prevStep}
                className="text-snow-100 border-darkgray-600 hover:bg-darkgray-700"
              >
                戻る
              </Button>
            ) : (
              <div></div>
            )}

            {currentStep < totalSteps ? (
              <Button onClick={nextStep} className="bg-ice-600 hover:bg-ice-700 text-white">
                次へ
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={resetSimulator} className="bg-ice-600 hover:bg-ice-700 text-white">
                最初からやり直す
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </TooltipProvider>
  )
}

