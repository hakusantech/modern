"use client"

import { CardFooter } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"

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
          minpaku: 1500000,
          ryokan: "別途見積",
        },
        ws: {
          minpaku: 1000000,
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
          minpaku: 20000,
          ryokan: "別途見積",
        },
        ws: {
          minpaku: 10000,
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
  perRoom?: boolean;
}

export default function PricingSimulator() {
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
          if ('isPercentage' in fee && fee.isPercentage === true) {
            percentage += price
          } else if ('monthly' in fee && fee.monthly === true) {
            if ('perRoom' in fee && fee.perRoom === true) {
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
          monthly: ('monthly' in fee) ? fee.monthly || false : false,
          isPercentage: ('isPercentage' in fee) ? fee.isPercentage || false : false,
          perRoom: ('perRoom' in fee) ? fee.perRoom || false : false,
        });
      }
    })

    const commission = Math.round(estimatedMonthlyRevenue * (percentage / 100))
    setInitialCost(initial)
    setMonthlyCost(monthly)
    setPercentageCost(percentage)
    setMonthlyCommission(commission)
    setTotalMonthlyCost(monthly + commission)
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

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">料金シミュレーター</h3>
              <p className="text-gray-600">
                お客様の条件に合わせた概算料金をシミュレーションできます。
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                        step < currentStep
                          ? "bg-green-500 text-white"
                          : step === currentStep
                          ? "bg-blue-500 text-white ring-4 ring-blue-200"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step < currentStep ? "✓" : step}
                    </div>
                    {step < 5 && (
                      <div
                        className={`w-8 h-1 mx-2 transition-all duration-300 ${
                          step < currentStep ? "bg-green-500" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-2">
                <span className="text-sm text-gray-500">
                  ステップ {currentStep} / {totalSteps}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className={`${currentStep === 1 ? "block" : "hidden"}`}>
          <div className="text-center mb-8">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">プランタイプを選択</h4>
            <p className="text-gray-600">あなたのニーズに最適なプランを選択してください</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
                plan === "fe"
                  ? "border-2 border-blue-500 bg-blue-50 shadow-lg ring-4 ring-blue-100"
                  : "border border-gray-200 hover:border-gray-300"
              )}
              onClick={() => setPlan("fe")}
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-gold-100 text-gold-700 border-gold-200 px-3 py-1">
                    ファミリー・エクスペリエンス
                  </Badge>
                  {plan === "fe" && (
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる宿泊施設の運営をサポートします。
                </p>
                <h5 className="text-xl font-semibold text-gray-900 mb-3">家族向け体験プラン</h5>
                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                  家族連れ・観光客向け
                </div>
              </CardContent>
            </Card>

            <Card
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
                plan === "ws"
                  ? "border-2 border-blue-500 bg-blue-50 shadow-lg ring-4 ring-blue-100"
                  : "border border-gray-200 hover:border-gray-300"
              )}
              onClick={() => setPlan("ws")}
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
                    ワーケーション・ステイ
                  </Badge>
                  {plan === "ws" && (
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  ワーケーションや長期滞在のビジネス利用に最適なプラン。快適な仕事環境と滞在空間を提供します。
                </p>
                <h5 className="text-xl font-semibold text-gray-900 mb-3">ワーケーション向けプラン</h5>
                <div className="mt-6 flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  ビジネス・長期滞在向け
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              onClick={nextStep}
              disabled={!plan}
              size="lg"
              className={cn(
                "px-8 py-3 text-base font-medium transition-all duration-300",
                plan
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              次のステップへ
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className={`${currentStep === 2 ? "block" : "hidden"}`}>
          <div className="text-center mb-8">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">営業タイプを選択</h4>
            <p className="text-gray-600">営業日数の制限に応じて適切なタイプを選択してください</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
                businessType === "minpaku"
                  ? "border-2 border-blue-500 bg-blue-50 shadow-lg ring-4 ring-blue-100"
                  : "border border-gray-200 hover:border-gray-300"
              )}
              onClick={() => setBusinessType("minpaku")}
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 px-3 py-1">
                    民泊営業
                  </Badge>
                  {businessType === "minpaku" && (
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  住宅宿泊事業法に基づく民泊営業。年間提供日数の上限があり、手続きが比較的簡単です。
                </p>
                <h5 className="text-xl font-semibold text-gray-900 mb-3">住宅宿泊事業法（民泊）</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-2" />
                    申請手続きが簡単
                  </div>
                  <div className="flex items-center text-orange-600">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    年間180日まで
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
                businessType === "ryokan"
                  ? "border-2 border-blue-500 bg-blue-50 shadow-lg ring-4 ring-blue-100"
                  : "border border-gray-200 hover:border-gray-300"
              )}
              onClick={() => setBusinessType("ryokan")}
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 px-3 py-1">
                    旅館営業
                  </Badge>
                  {businessType === "ryokan" && (
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  旅館業法に基づく営業。年間日数制限がなく、法人・個人を問わず営業が可能です。
                </p>
                <h5 className="text-xl font-semibold text-gray-900 mb-3">旅館業法（簡易宿所）</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-2" />
                    年間日数制限なし
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Check className="h-4 w-4 mr-2" />
                    年中営業可能
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex justify-between max-w-4xl mx-auto">
            <Button
              variant="outline"
              onClick={prevStep}
              size="lg"
              className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              前のステップ
            </Button>
            <Button
              onClick={nextStep}
              disabled={!businessType}
              size="lg"
              className={cn(
                "px-8 py-3 text-base font-medium transition-all duration-300",
                businessType
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              次のステップへ
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className={`${currentStep === 3 ? "block" : "hidden"}`}>
          <div className="text-center mb-8">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">規模と売上予想</h4>
            <p className="text-gray-600">運営する部屋数と予想売上を設定してください</p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
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

          <div className="mt-12 flex justify-between max-w-3xl mx-auto">
            <Button
              variant="outline"
              onClick={prevStep}
              size="lg"
              className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              前のステップ
            </Button>
            <Button
              onClick={nextStep}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 px-8 py-3"
            >
              次のステップへ
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className={`${currentStep === 4 ? "block" : "hidden"}`}>
          <div className="text-center mb-8">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">オプションを選択</h4>
            <p className="text-gray-600">必要なサービスを選択してください（必須項目は自動選択されています）</p>
          </div>

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
                {pricingData.basicFees.map((fee) => (
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
                        料金: {formatPrice(fee.prices[plan][businessType])}
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
          </div>

          <div className="mt-12 flex justify-between max-w-4xl mx-auto">
            <Button
              variant="outline"
              onClick={prevStep}
              size="lg"
              className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              前のステップ
            </Button>
            <Button
              onClick={nextStep}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 px-8 py-3"
            >
              見積り結果を見る
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className={`${currentStep === 5 ? "block" : "hidden"}`}>
          <div className="text-center mb-8">
            <h4 className="text-2xl font-semibold text-gray-900 mb-3">見積り結果</h4>
            <p className="text-gray-600">選択した条件に基づく概算料金をご確認ください</p>
          </div>

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
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-4xl mx-auto">
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

          <div className="mt-12 flex justify-between max-w-4xl mx-auto">
            <Button
              variant="outline"
              onClick={prevStep}
              size="lg"
              className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              前のステップ
            </Button>
            <Button
              onClick={resetSimulator}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 px-8 py-3"
            >
              もう一度見積りする
            </Button>
          </div>
        </div>
      </div>

      <CardFooter className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="text-sm text-gray-500 mb-3 sm:mb-0">
          お困りの際はお気軽にお問い合わせください
        </div>
        <Link href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center transition-colors duration-200">
          詳細なお見積りを依頼
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </div>
  )
}

const styles = `
.slider::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.slider::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
`