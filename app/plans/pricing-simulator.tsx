"use client"

import { CardFooter } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight } from "lucide-react" // Removed HelpCircle as it wasn't used
// Removed Tooltip imports as they weren't used
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Pricing data remains the same
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
      description: "・ゲストが利用するタブレット料（端末セットアップ込）\n・Lenovo9インチ（※KEEYLSの場合のみ11インチ対応可）",
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
      description: "・システムと自動連携できるゲスト用キー（複数選択可）\n・民泊営業の場合と旅館営業の場合でシステムとキーが異なります",
      required: true,
      prices: {
        fe: {
          minpaku: 30000,
          ryokan: "別途見積",
        },
        ws: {
          minpaku: 30000,
          ryokan: "別途見積",
        },
      },
    },
    {
      id: "keeyls-integration",
      name: "予約システム連携費用",
      description: "・複数の予約システム間の連携機能\n・施設単位で必要（※部屋単位ではない）",
      required: false,
      prices: {
        fe: {
          minpaku: 0,
          ryokan: 50000,
        },
        ws: {
          minpaku: 0,
          ryokan: 50000,
        },
      },
    },
  ],
  runningCosts: [
    {
      id: "airhost-hms",
      name: "ホスト管理システム（Premium）",
      description: "・SC+PMS機能（予約情報連携、レポートなど）",
      required: true,
      monthly: true,
      perRoom: false,
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
      requiredFor: {
        fe: {
          minpaku: true,
          ryokan: true,
        },
        ws: {
          minpaku: true,
          ryokan: true,
        },
      }
    },
    {
      id: "airhost-one",
      name: "ゲスト管理システム（Premium）",
      description: "・自動チェックイン/アウト、アップセル機能",
      required: true,
      monthly: true,
      perRoom: false,
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
      requiredFor: {
        fe: {
          minpaku: true,
          ryokan: true,
        },
        ws: {
          minpaku: true,
          ryokan: true,
        },
      }
    },
    {
      id: "video-call",
      name: "ビデオ通話",
      description: "・ゲストのチェックイン時ビデオ通話による本人確認",
      required: false,
      monthly: true,
      perRoom: false,
      prices: {
        fe: {
          minpaku: 0,
          ryokan: 5000,
        },
        ws: {
          minpaku: 0,
          ryokan: 5000,
        },
      },
      requiredFor: {
        fe: {
          minpaku: false,
          ryokan: true,
        },
        ws: {
          minpaku: false,
          ryokan: true,
        },
      }
    },
    {
      id: "smartlock-monthly",
      name: "IoTスマートロック連携",
      description: "・システムと自動連携させた場合の月額利用料\n・スマートロックを連携させた場合は部屋ごとに必要です",
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
      requiredFor: {
        fe: {
          minpaku: false,
          ryokan: false,
        },
        ws: {
          minpaku: false,
          ryokan: false,
        },
      }
    },
  ],
  optionalCosts: [
    {
      id: "booking-engine-1",
      name: "ブッキングエンジン①",
      description: "・自社サイトでの宿泊予約機能搭載・連携に必要な基本料金\n・OTAを介さず自社サイトによる宿泊予約から決済までを実現します",
      required: false,
      monthly: true,
      perRoom: false,
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
      requiredFor: {
        fe: {
          minpaku: false,
          ryokan: false,
        },
        ws: {
          minpaku: false,
          ryokan: false,
        },
      }
    },
    {
      id: "booking-engine-2",
      name: "ブッキングエンジン②",
      description: "・自社サイトでの宿泊予約機能搭載・連携に必要な月額料金\n・部屋ごとに毎月発生するランニングコストになります",
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
      requiredFor: {
        fe: {
          minpaku: false,
          ryokan: false,
        },
        ws: {
          minpaku: false,
          ryokan: false,
        },
      }
    },
    {
      id: "payment-integration",
      name: "決済連携機能③",
      description: "・ブッキングエンジン搭載した場合に必要な決済連携料金\n・部屋ごとに毎月発生するランニングコストになります",
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
      requiredFor: {
        fe: {
          minpaku: false,
          ryokan: false,
        },
        ws: {
          minpaku: false,
          ryokan: false,
        },
      }
    },
  ],
}

// Plan options remain the same (data only)
const planOptions = [
  {
    id: "fe",
    name: "ファミリー・エクスペリエンス・プラン",
    description:
      "家族での思い出作りに最適なプラン。北海道の自然や文化を体験できるアクティビティと快適な宿泊施設を組み合わせました。",
  },
  {
    id: "ws",
    name: "ワーケーション・スマート・プラン",
    description:
      "仕事と休暇を両立させる新しいライフスタイル「ワーケーション」に最適なプラン。快適な作業環境と北海道の自然を満喫できます。",
  },
]

// Business type options remain the same (data only)
const businessTypeOptions = [
  {
    id: "minpaku",
    name: "民泊営業",
    description: "住宅宿泊事業法（民泊新法）に基づく営業形態です。年間提供日数の上限は180日となります。",
  },
  {
    id: "ryokan",
    name: "旅館営業",
    description:
      "旅館業法に基づく営業形態です。年間提供日数の制限はありませんが、より厳格な基準を満たす必要があります。",
  },
]

// Interfaces remain the same
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

interface SelectedOptions {
  [key: string]: boolean;
}

interface ResultOption {
  id: string;
  name: string;
  price: number | string;
  selected: boolean;
  monthly?: boolean;
  isPercentage?: boolean;
}

export default function PricingSimulator() {
  // State and core logic remain the same
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5
  const [plan, setPlan] = useState<"fe" | "ws">("fe")
  const [businessType, setBusinessType] = useState<"minpaku" | "ryokan">("minpaku")
  const [roomCount, setRoomCount] = useState<number>(1)
  const [estimatedMonthlyRevenue, setEstimatedMonthlyRevenue] = useState<number>(300000)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})
  const [initialCost, setInitialCost] = useState<number>(0)
  const [monthlyCost, setMonthlyCost] = useState<number>(0)
  const [percentageCost, setPercentageCost] = useState<number>(0)
  const [monthlyCommission, setMonthlyCommission] = useState<number>(0)
  const [totalMonthlyCost, setTotalMonthlyCost] = useState<number>(0)
  const [resultOptions, setResultOptions] = useState<ResultOption[]>([])

  useEffect(() => {
    const initialOptions: SelectedOptions = {}
    ;[
      ...pricingData.basicFees,
      ...pricingData.systemFees,
      ...pricingData.runningCosts,
      ...pricingData.optionalCosts,
    ].forEach((item: PriceOption) => {
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

  useEffect(() => {
    let initial = 0
    let monthly = 0
    let percentage = 0
    const results: ResultOption[] = []
    ;[
      ...pricingData.basicFees,
      ...pricingData.systemFees,
      ...pricingData.runningCosts,
      ...pricingData.optionalCosts,
    ].forEach((fee) => {
      if (selectedOptions[fee.id]) {
        const price = fee.prices[plan][businessType]
        if (typeof price === "number") {
          if (fee.isPercentage) {
            percentage += price
          } else if (fee.monthly) {
            if (fee.perRoom) {
              monthly += price * roomCount;
            } else {
              monthly += price;
            }
          } else {
             initial += price;
          }
        }
        results.push({
          id: fee.id,
          name: fee.name,
          price: price,
          selected: true,
          monthly: fee.monthly,
          isPercentage: fee.isPercentage,
        });
      }
    })

    const commission = Math.round(estimatedMonthlyRevenue * (percentage / 100))
    setInitialCost(initial)
    setMonthlyCost(monthly)
    setPercentageCost(percentage)
    setMonthlyCommission(commission)
    setTotalMonthlyCost(monthly + commission) // Keep calculation consistent
    setResultOptions(results)
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

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetSimulator = () => {
    setCurrentStep(1)
    setPlan("fe")
    setBusinessType("minpaku")
    setRoomCount(1)
    setEstimatedMonthlyRevenue(300000)
  }

  // JSX with updated class names for black/white/gray theme
  return (
    // Simplified border and kept white background
    <div className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden">
      {/* Simplified header border and text colors */}
      <div className="px-6 py-6 border-b border-gray-300">
        <h3 className="text-2xl font-light text-black mb-2">料金シミュレーター</h3>
        <p className="text-gray-700">
          お客様の条件に合わせた概算料金をシミュレーションできます。
        </p>
      </div>

      <div className="p-6">
        {/* Step 1: プランタイプ選択 */}
        <div className={`${currentStep === 1 ? "block" : "hidden"}`}>
          <h4 className="text-xl font-medium text-black mb-6">ステップ1: プランタイプを選択</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Styling Updated */}
            <Card
              className={cn(
                "cursor-pointer transition-all duration-200 hover:shadow-md",
                plan === "fe"
                  ? "border-black bg-gray-100" // Selected: Black border, light gray bg
                  : "border-gray-300 hover:border-gray-400" // Default: Gray border
              )}
              onClick={() => setPlan("fe")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  {/* Badge Styling Updated */}
                  <Badge variant="secondary" className="border border-gray-300">
                    ファミリー・エクスペリエンス
                  </Badge>
                  {plan === "fe" && (
                    // Checkmark Styling Updated
                    <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                {/* Text colors simplified */}
                <h5 className="text-lg font-medium text-black mb-2">家族向け体験プラン</h5>
                <p className="text-gray-600 text-sm">
                  家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる宿泊施設の運営をサポートします。
                </p>
              </CardContent>
            </Card>

            <Card
              className={cn(
                "cursor-pointer transition-all duration-200 hover:shadow-md",
                plan === "ws"
                  ? "border-black bg-gray-100" // Selected
                  : "border-gray-300 hover:border-gray-400" // Default
              )}
              onClick={() => setPlan("ws")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary" className="border border-gray-300">
                    ワーケーション・ステイ
                  </Badge>
                  {plan === "ws" && (
                    <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <h5 className="text-lg font-medium text-black mb-2">ワーケーション向けプラン</h5>
                <p className="text-gray-600 text-sm">
                  ワーケーションや長期滞在のビジネス利用に最適なプラン。快適な仕事環境と滞在空間を提供します。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex justify-end">
            {/* Button Styling Updated */}
            <Button
              onClick={nextStep}
              disabled={!plan}
              className={cn(
                "px-6",
                plan
                  ? "bg-black hover:bg-gray-800 text-white" // Enabled: Black bg
                  : "bg-gray-200 text-gray-400 cursor-not-allowed" // Disabled: Default gray
              )}
            >
              次へ
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Step 2: 営業タイプ選択 */}
        <div className={`${currentStep === 2 ? "block" : "hidden"}`}>
          <h4 className="text-xl font-medium text-black mb-6">ステップ2: 営業タイプを選択</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Apply similar card/badge/checkmark style updates as Step 1 */}
            <Card
              className={cn(
                "cursor-pointer transition-all duration-200 hover:shadow-md",
                businessType === "minpaku"
                  ? "border-black bg-gray-100"
                  : "border-gray-300 hover:border-gray-400"
              )}
              onClick={() => setBusinessType("minpaku")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary" className="border border-gray-300">
                    民泊営業
                  </Badge>
                  {businessType === "minpaku" && (
                    <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <h5 className="text-lg font-medium text-black mb-2">住宅宿泊事業法（民泊）</h5>
                <p className="text-gray-600 text-sm">
                  住宅宿泊事業法に基づく民泊営業。年間提供日数の上限があり、手続きが比較的簡単です。
                </p>
              </CardContent>
            </Card>

            <Card
              className={cn(
                "cursor-pointer transition-all duration-200 hover:shadow-md",
                businessType === "ryokan"
                  ? "border-black bg-gray-100"
                  : "border-gray-300 hover:border-gray-400"
              )}
              onClick={() => setBusinessType("ryokan")}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary" className="border border-gray-300">
                    旅館営業
                  </Badge>
                  {businessType === "ryokan" && (
                    <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <h5 className="text-lg font-medium text-black mb-2">旅館業法（簡易宿所）</h5>
                <p className="text-gray-600 text-sm">
                  旅館業法に基づく営業。年間日数制限がなく、法人・個人を問わず営業が可能です。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex justify-between">
            {/* Back button kept as outline */}
            <Button
              variant="outline"
              onClick={prevStep}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              戻る
            </Button>
            {/* Next button style updated */}
            <Button
              onClick={nextStep}
              disabled={!businessType}
              className={cn(
                "px-6",
                businessType
                  ? "bg-black hover:bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              次へ
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Step 3: 部屋数と売上予想 */}
        <div className={`${currentStep === 3 ? "block" : "hidden"}`}>
          <h4 className="text-xl font-medium text-black mb-6">ステップ3: 規模と売上予想</h4>

          <div className="space-y-6">
            {/* Card border simplified */}
            <Card className="border-gray-300">
              <CardHeader className="pb-2">
                {/* Text colors simplified */}
                <CardTitle className="text-lg font-medium text-black">
                  部屋数を選択
                </CardTitle>
                <CardDescription className="text-gray-600">
                  運営する部屋数を選択してください
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Text color simplified */}
                    <span className="text-sm font-medium text-gray-700">部屋数: {roomCount}室</span>
                    <div className="flex items-center space-x-2">
                      {/* +/- Buttons kept as outline */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 flex items-center justify-center border-gray-300"
                        onClick={() => setRoomCount(Math.max(1, roomCount - 1))}
                      >
                        -
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 flex items-center justify-center border-gray-300"
                        onClick={() => setRoomCount(roomCount + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-black">
                  予想月間売上
                </CardTitle>
                <CardDescription className="text-gray-600">
                  全部屋の合計の月間予想売上を選択してください（運営手数料の計算に使用されます）
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    {/* Text colors simplified */}
                    <span className="text-sm font-medium text-gray-700 mb-2 block">
                      予想月間売上: {new Intl.NumberFormat('ja-JP').format(estimatedMonthlyRevenue)}円/月
                    </span>
                    {/* Range input accent color updated */}
                    <input
                      type="range"
                      min="100000"
                      max="2000000"
                      step="50000"
                      value={estimatedMonthlyRevenue}
                      onChange={(e) => setEstimatedMonthlyRevenue(parseInt(e.target.value))}
                      className="w-full accent-black" // Changed accent color
                    />
                    {/* Text colors simplified */}
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
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
              onClick={prevStep}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              戻る
            </Button>
            {/* Next button style updated */}
            <Button
              onClick={nextStep}
              className="bg-black hover:bg-gray-800 text-white px-6"
            >
              次へ
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Step 4: オプション選択 */}
        <div className={`${currentStep === 4 ? "block" : "hidden"}`}>
          <h4 className="text-xl font-medium text-black mb-6">ステップ4: オプションを選択</h4>

          <div className="space-y-6">
            {/* Card border and text colors simplified */}
            <Card className="border-gray-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-black">
                  基本料金
                </CardTitle>
                <CardDescription className="text-gray-600">
                  初期費用と基本サービス料金
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pricingData.basicFees.map((fee) => (
                  <div key={fee.id} className="flex items-start">
                    {/* Checkbox Styling Updated */}
                    <Checkbox
                      id={`basic-${fee.id}`}
                      checked={fee.required || selectedOptions[fee.id]}
                      onCheckedChange={(checked) =>
                        handleOptionChange(fee.id, checked as boolean)
                      }
                      disabled={fee.required}
                      // Updated checked/disabled styles
                      className={cn(
                        "data-[state=checked]:bg-black data-[state=checked]:border-black", // Checked: black bg/border
                        fee.required ? "border-gray-400 data-[state=checked]:bg-gray-300 data-[state=checked]:border-gray-300" : "" // Disabled: gray border/checked bg
                      )}
                    />
                    <div className="ml-3">
                      {/* Text colors simplified */}
                      <label
                        htmlFor={`basic-${fee.id}`}
                        className={cn("text-sm font-medium cursor-pointer", fee.required ? "text-gray-500" : "text-black")}
                      >
                        {fee.name}{" "}
                        {fee.required && (
                          <span className="text-xs text-gray-500 ml-1">必須</span>
                        )}
                      </label>
                      <p className="text-xs text-gray-600 mt-1 whitespace-pre-line">
                        {fee.description}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        料金:{" "}
                        <span className="font-medium">
                          {formatPrice(
                            fee.prices[plan][businessType]
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Repeat simplification for System Fees, Running Costs, Optional Costs cards */}
            <Card className="border-gray-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-black">
                  システム費用
                </CardTitle>
                <CardDescription className="text-gray-600">
                  予約・管理システムの初期費用
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pricingData.systemFees.map((fee) => (
                  <div key={fee.id} className="flex items-start">
                    <Checkbox
                      id={`system-${fee.id}`}
                      checked={fee.required || selectedOptions[fee.id]}
                      onCheckedChange={(checked) =>
                        handleOptionChange(fee.id, checked as boolean)
                      }
                      disabled={fee.required}
                       className={cn(
                        "data-[state=checked]:bg-black data-[state=checked]:border-black",
                        fee.required ? "border-gray-400 data-[state=checked]:bg-gray-300 data-[state=checked]:border-gray-300" : ""
                      )}
                    />
                    <div className="ml-3">
                       <label
                        htmlFor={`system-${fee.id}`}
                        className={cn("text-sm font-medium cursor-pointer", fee.required ? "text-gray-500" : "text-black")}
                      >
                        {fee.name}{" "}
                        {fee.required && (
                          <span className="text-xs text-gray-500 ml-1">必須</span>
                        )}
                      </label>
                      <p className="text-xs text-gray-600 mt-1 whitespace-pre-line">
                        {fee.description}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        料金:{" "}
                        <span className="font-medium">
                          {formatPrice(
                            fee.prices[plan][businessType]
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-gray-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-black">
                  月額費用
                </CardTitle>
                <CardDescription className="text-gray-600">
                  継続的な運営に必要な月額費用
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pricingData.runningCosts.map((fee) => (
                  <div key={fee.id} className="flex items-start">
                    <Checkbox
                      id={`running-${fee.id}`}
                      checked={fee.required || (fee.requiredFor && fee.requiredFor[plan][businessType]) || selectedOptions[fee.id]}
                      onCheckedChange={(checked) =>
                        handleOptionChange(fee.id, checked as boolean)
                      }
                      disabled={fee.required || (fee.requiredFor && fee.requiredFor[plan][businessType])}
                      className={cn(
                        "data-[state=checked]:bg-black data-[state=checked]:border-black",
                        (fee.required || (fee.requiredFor && fee.requiredFor[plan][businessType])) ? "border-gray-400 data-[state=checked]:bg-gray-300 data-[state=checked]:border-gray-300" : ""
                      )}
                    />
                    <div className="ml-3">
                       <label
                        htmlFor={`running-${fee.id}`}
                        className={cn("text-sm font-medium cursor-pointer", (fee.required || (fee.requiredFor && fee.requiredFor[plan][businessType])) ? "text-gray-500" : "text-black")}
                      >
                        {fee.name}{" "}
                        {(fee.required || (fee.requiredFor && fee.requiredFor[plan][businessType])) && (
                          <span className="text-xs text-gray-500 ml-1">必須</span>
                        )}
                      </label>
                      <p className="text-xs text-gray-600 mt-1 whitespace-pre-line">
                        {fee.description}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        料金:{" "}
                        <span className="font-medium">
                          {formatPrice(
                            fee.prices[plan][businessType]
                          )}
                          {fee.monthly ? "/月" : ""}
                          {fee.perRoom ? " (部屋毎)" : ""}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

             <Card className="border-gray-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-black">
                  追加オプション
                </CardTitle>
                <CardDescription className="text-gray-600">
                  必要に応じて選択できる追加サービス
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pricingData.optionalCosts.map((fee) => (
                  <div key={fee.id} className="flex items-start">
                    <Checkbox
                      id={`option-${fee.id}`}
                      checked={selectedOptions[fee.id]}
                      onCheckedChange={(checked) =>
                        handleOptionChange(fee.id, checked as boolean)
                      }
                      className="data-[state=checked]:bg-black data-[state=checked]:border-black"
                    />
                    <div className="ml-3">
                      <label
                        htmlFor={`option-${fee.id}`}
                        className="text-sm font-medium text-black cursor-pointer"
                      >
                        {fee.name}
                      </label>
                      <p className="text-xs text-gray-600 mt-1 whitespace-pre-line">
                        {fee.description}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        料金:{" "}
                        <span className="font-medium">
                          {formatPrice(
                            fee.prices[plan][businessType]
                          )}
                          {fee.monthly ? "/月" : ""}
                          {fee.perRoom ? " (部屋毎)" : ""}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              戻る
            </Button>
            <Button
              onClick={nextStep}
              className="bg-black hover:bg-gray-800 text-white px-6"
            >
              次へ
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Step 5: 見積り結果 */}
        <div className={`${currentStep === 5 ? "block" : "hidden"}`}>
          <h4 className="text-xl font-medium text-black mb-6">見積り結果</h4>

          <div className="space-y-6">
            {/* Result cards simplified */}
            <Card className="border-gray-300">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-black">
                  選択したプラン
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {plan === "fe" ? "ファミリー・エクスペリエンス" : "ワーケーション・ステイ"} /{" "}
                  {businessType === "minpaku" ? "民泊営業" : "旅館営業"} /
                  {roomCount}部屋 /
                  予想月売上: {formatPrice(estimatedMonthlyRevenue)}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-black">
                  初期費用
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {resultOptions
                    .filter(option => option.selected && !option.monthly && !option.isPercentage)
                    .map(option => (
                      <div key={`${option.id}-initial`} className="flex justify-between items-center py-1">
                        {/* Text colors simplified */}
                        <span className="text-gray-700">{option.name}</span>
                        <span className="font-medium text-gray-800">
                          {formatPrice(option.price)}
                        </span>
                      </div>
                    ))}

                  {resultOptions.some(option => option.selected && !option.monthly && !option.isPercentage && option.price === "別途見積") && (
                    <div className="flex justify-between items-center py-1 text-gray-600">
                      <span>別途見積もりが必要な項目が含まれます</span>
                      <span>-</span>
                    </div>
                  )}

                  {/* Separator simplified */}
                  <Separator className="my-2 bg-gray-200" />
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium text-black">初期費用合計</span>
                    <span className="font-bold text-black">
                      {resultOptions.some(option => option.selected && !option.monthly && !option.isPercentage && option.price === "別途見積")
                        ? "一部別途見積"
                        : `${initialCost.toLocaleString()}円`}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-black">
                  月額費用
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                   {/* Fixed costs */}
                   {resultOptions
                    .filter(option => option.selected && option.monthly && !option.isPercentage)
                    .map(option => (
                      <div key={`${option.id}-monthly`} className="flex justify-between items-center py-1">
                         <span className="text-gray-700">{option.name}</span>
                         <span className="font-medium text-gray-800">
                          {typeof option.price === "number"
                            ? `${(option.perRoom ? option.price * roomCount : option.price).toLocaleString()}円/月`
                            : option.price}
                          {option.perRoom && typeof option.price === 'number' && ` (${option.price.toLocaleString()}円/部屋)`}
                        </span>
                      </div>
                   ))}

                   {/* Percentage costs */}
                   {resultOptions.filter(option => option.selected && option.isPercentage).length > 0 && (
                    <div className="flex justify-between items-center py-1 text-gray-700">
                      <span>{resultOptions.find(o => o.selected && o.isPercentage)?.name} (予想売上 {formatPrice(estimatedMonthlyRevenue)} に対して)</span>
                      <span>
                        {formatPrice(monthlyCommission)}/月 ({resultOptions.find(o => o.selected && o.isPercentage)?.price}%)
                      </span>
                    </div>
                   )}

                  <Separator className="my-2 bg-gray-200" />
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium text-black">月額費用合計 (概算)</span>
                    <span className="font-bold text-black">
                      {`${(monthlyCost + monthlyCommission).toLocaleString()}円/月`}
                    </span>
                  </div>
                   <p className="text-xs text-gray-500 pt-2">
                      内訳: 固定費 {monthlyCost.toLocaleString()}円 + 成果報酬 (売上の{percentageCost}%) {monthlyCommission.toLocaleString()}円
                    </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Note box simplified */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700 text-sm">
              ※ 表示価格はすべて税抜きです。別途消費税がかかります。
              <br />※ こちらはシミュレーション結果であり、実際の料金は物件の状況や詳細な要件によって異なる場合があります。
              <br />※ 詳細なお見積りについては、お問い合わせください。
            </p>
          </div>

          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              戻る
            </Button>
            <Button
              onClick={resetSimulator}
              className="bg-black hover:bg-gray-800 text-white px-6"
            >
              もう一度見積る
            </Button>
          </div>
        </div>
      </div>

      {/* Footer kept neutral */}
      <CardFooter className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between">
        <div className="text-sm text-gray-500">
          ステップ {currentStep} / 5
        </div>
        {/* Link color simplified */}
        <Link href="/contact" className="text-black hover:text-gray-700 text-sm font-medium">
          詳細なお見積りを依頼
        </Link>
      </CardFooter>
    </div>
  )
}