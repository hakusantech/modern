"use client"

import { useState, useEffect, useMemo, useCallback, memo } from "react"
import { CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

// 最適化されたコンポーネントをインポート
import PlanSelector from "./components/PlanSelector"
import BusinessTypeSelector from "./components/BusinessTypeSelector"
import RoomAndRevenueSelector from "./components/RoomAndRevenueSelector"
import OptionSelector from "./components/OptionSelector"
import ResultDisplay from "./components/ResultDisplay"

// 静的データ
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

export default function PricingSimulatorOptimized() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5
  const [plan, setPlan] = useState<"fe" | "ws">("fe")
  const [businessType, setBusinessType] = useState<"minpaku" | "ryokan">("minpaku")
  const [roomCount, setRoomCount] = useState<number>(1)
  const [estimatedMonthlyRevenue, setEstimatedMonthlyRevenue] = useState<number>(300000)
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: boolean}>({})
  const [initialCost, setInitialCost] = useState<number>(0)
  const [monthlyCost, setMonthlyCost] = useState<number>(0)
  const [percentageCost, setPercentageCost] = useState<number>(0)
  const [monthlyCommission, setMonthlyCommission] = useState<number>(0)
  const [totalMonthlyCost, setTotalMonthlyCost] = useState<number>(0)
  const [resultOptions, setResultOptions] = useState<any[]>([])

  // メモ化した初期オプション設定
  const initializeOptions = useCallback(() => {
    const initialOptions: {[key: string]: boolean} = {}
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
    return initialOptions
  }, [plan, businessType])

  // 初期化
  useEffect(() => {
    setSelectedOptions(initializeOptions())
  }, [plan, businessType, initializeOptions])

  // メモ化した結果計算
  const calculateResults = useCallback(() => {
    let initial = 0
    let monthly = 0
    let percentage = 0
    const results: any[] = []
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
    return {
      initialCost: initial,
      monthlyCost: monthly,
      percentageCost: percentage,
      monthlyCommission: commission,
      totalMonthlyCost: monthly + commission,
      resultOptions: results
    }
  }, [selectedOptions, plan, businessType, roomCount, estimatedMonthlyRevenue])

  // 結果を更新
  useEffect(() => {
    const results = calculateResults()
    setInitialCost(results.initialCost)
    setMonthlyCost(results.monthlyCost)
    setPercentageCost(results.percentageCost)
    setMonthlyCommission(results.monthlyCommission)
    setTotalMonthlyCost(results.totalMonthlyCost)
    setResultOptions(results.resultOptions)
  }, [calculateResults])

  // オプション変更ハンドラー
  const handleOptionChange = useCallback((id: string, checked: boolean) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }, [])

  // 進行制御
  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }, [currentStep, totalSteps])

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep])

  const resetSimulator = useCallback(() => {
    setCurrentStep(1)
    setPlan("fe")
    setBusinessType("minpaku")
    setRoomCount(1)
    setEstimatedMonthlyRevenue(300000)
  }, [])

  // ステップインジケーター
  const StepIndicator = memo(({ current, total }: { current: number, total: number }) => (
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
                  step < current
                    ? "bg-green-500 text-white"
                    : step === current
                    ? "bg-blue-500 text-white ring-4 ring-blue-200"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step < current ? "✓" : step}
              </div>
              {step < 5 && (
                <div
                  className={`w-8 h-1 mx-2 transition-all duration-300 ${
                    step < current ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-2">
          <span className="text-sm text-gray-500">
            ステップ {current} / {total}
          </span>
        </div>
      </div>
    </div>
  ))
  
  StepIndicator.displayName = "StepIndicator"

  // 最適化: 必要なコンテンツのみレンダリング
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <div className="text-center mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">プランタイプを選択</h4>
              <p className="text-gray-600">あなたのニーズに最適なプランを選択してください</p>
            </div>
            
            <PlanSelector 
              options={planOptions}
              selectedPlan={plan}
              onChange={(newPlan) => setPlan(newPlan as "fe" | "ws")}
            />

            <div className="mt-12 flex justify-center">
              <Button
                onClick={nextStep}
                disabled={!plan}
                size="lg"
                className="px-8 py-3 text-base font-medium transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                次のステップへ
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )
      case 2:
        return (
          <div>
            <div className="text-center mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">営業タイプを選択</h4>
              <p className="text-gray-600">営業日数の制限に応じて適切なタイプを選択してください</p>
            </div>
            
            <BusinessTypeSelector 
              options={businessTypeOptions}
              selectedType={businessType}
              onChange={(newType) => setBusinessType(newType as "minpaku" | "ryokan")}
            />

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
                className="px-8 py-3 text-base font-medium transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                次のステップへ
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )
      case 3:
        return (
          <div>
            <div className="text-center mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">規模と売上予想</h4>
              <p className="text-gray-600">運営する部屋数と予想売上を設定してください</p>
            </div>

            <RoomAndRevenueSelector 
              roomCount={roomCount}
              setRoomCount={setRoomCount}
              estimatedMonthlyRevenue={estimatedMonthlyRevenue}
              setEstimatedMonthlyRevenue={setEstimatedMonthlyRevenue}
            />

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
        )
      case 4:
        return (
          <div>
            <div className="text-center mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">オプションを選択</h4>
              <p className="text-gray-600">必要なサービスを選択してください（必須項目は自動選択されています）</p>
            </div>

            <OptionSelector 
              basicFees={pricingData.basicFees}
              systemFees={pricingData.systemFees}
              runningCosts={pricingData.runningCosts}
              optionalCosts={pricingData.optionalCosts}
              selectedOptions={selectedOptions}
              plan={plan}
              businessType={businessType}
              handleOptionChange={handleOptionChange}
            />

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
        )
      case 5:
        return (
          <div>
            <div className="text-center mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">見積り結果</h4>
              <p className="text-gray-600">選択した条件に基づく概算料金をご確認ください</p>
            </div>

            <ResultDisplay 
              plan={plan}
              businessType={businessType}
              roomCount={roomCount}
              estimatedMonthlyRevenue={estimatedMonthlyRevenue}
              initialCost={initialCost}
              monthlyCost={monthlyCost}
              percentageCost={percentageCost}
              monthlyCommission={monthlyCommission}
              totalMonthlyCost={totalMonthlyCost}
              resultOptions={resultOptions}
            />

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
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <StepIndicator current={currentStep} total={totalSteps} />
        </div>
      </div>

      <div className="p-8">
        {renderCurrentStep()}
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

// メモ化用のインポートは上部で行っています
// import { memo } from "react"