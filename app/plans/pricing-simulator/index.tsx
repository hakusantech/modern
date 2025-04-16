"use client"

import type React from "react"

import { useState } from "react"
import {
  Building,
  Calculator,
  CalendarDays,
  CreditCard,
  Home,
  Hotel,
  Info,
  Lock,
  PenTool,
  Phone,
  Search,
  Server,
  Settings,
  ShoppingBag,
  Tablet,
  Video,
  Wallet,
  JapaneseYenIcon as Yen,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// 料金データ
const pricingData = {
  // 基本料金
  basicFees: {
    planning: {
      FE: { minpaku: 150000, ryokan: 200000 },
      WS: { minpaku: 100000, ryokan: 150000 },
    },
    research: {
      FE: { minpaku: 100000, ryokan: 100000 },
      WS: { minpaku: 100000, ryokan: 100000 },
    },
    operation: {
      FE: { minpaku: "20%", ryokan: "20%" },
      WS: { minpaku: "20%", ryokan: "20%" },
    },
    furniture: {
      FE: { minpaku: 1000000, ryokan: "別途見積" },
      WS: { minpaku: "別途見積", ryokan: "別途見積" },
    },
    consumables: {
      FE: { minpaku: 10000, ryokan: "別途見積" },
      WS: { minpaku: "別途見積", ryokan: "別途見積" },
    },
  },
  // 初期システム費用
  initialSystemFees: {
    accountSetup: {
      FE: { minpaku: 10000, ryokan: 10000 },
      WS: { minpaku: 10000, ryokan: 10000 },
    },
    tablet: {
      FE: { minpaku: 45000, ryokan: 45000 },
      WS: { minpaku: 45000, ryokan: 45000 },
    },
    smartLock: {
      FE: { minpaku: 30000, ryokan: "別途見積" },
      WS: { minpaku: "別途見積", ryokan: "別途見積" },
    },
    systemIntegration: {
      FE: { minpaku: 0, ryokan: 50000 },
      WS: { minpaku: 0, ryokan: 50000 },
    },
  },
  // ランニング費用（月額）
  monthlyFees: {
    hostSystem: {
      FE: { minpaku: 3000, ryokan: 3000 },
      WS: { minpaku: 3000, ryokan: 3000 },
    },
    guestSystem: {
      FE: { minpaku: 2000, ryokan: 2000 },
      WS: { minpaku: 2000, ryokan: 2000 },
    },
    videoCall: {
      FE: { minpaku: 5000, ryokan: 5000 },
      WS: { minpaku: 5000, ryokan: 5000 },
    },
    smartLockMonthly: {
      FE: { minpaku: 300, ryokan: 300 },
      WS: { minpaku: 300, ryokan: 300 },
    },
  },
  // オプション費用（月額）
  optionalFees: {
    bookingEngine1: {
      FE: { minpaku: 5000, ryokan: 5000 },
      WS: { minpaku: 5000, ryokan: 5000 },
    },
    bookingEngine2: {
      FE: { minpaku: 100, ryokan: 100 },
      WS: { minpaku: 100, ryokan: 100 },
    },
    paymentIntegration: {
      FE: { minpaku: 300, ryokan: 300 },
      WS: { minpaku: 300, ryokan: 300 },
    },
  },
}

// 必須項目
const requiredItems = {
  planning: true,
  operation: true,
  furniture: true,
  consumables: true,
  accountSetup: true,
  tablet: true,
  smartLock: true,
  hostSystem: true,
  guestSystem: true,
  smartLockMonthly: true,
}

// 旅館の場合の必須項目
const ryokanRequired = {
  videoCall: true,
}

// アイコンマッピング
const iconMap = {
  planning: <PenTool className="h-5 w-5 text-gold-600" />,
  research: <Search className="h-5 w-5 text-gold-600" />,
  operation: <Settings className="h-5 w-5 text-gold-600" />,
  furniture: <Home className="h-5 w-5 text-gold-600" />,
  consumables: <ShoppingBag className="h-5 w-5 text-gold-600" />,
  accountSetup: <Server className="h-5 w-5 text-gold-600" />,
  tablet: <Tablet className="h-5 w-5 text-gold-600" />,
  smartLock: <Lock className="h-5 w-5 text-gold-600" />,
  systemIntegration: <Settings className="h-5 w-5 text-gold-600" />,
  hostSystem: <Server className="h-5 w-5 text-gold-600" />,
  guestSystem: <Phone className="h-5 w-5 text-gold-600" />,
  videoCall: <Video className="h-5 w-5 text-gold-600" />,
  smartLockMonthly: <Lock className="h-5 w-5 text-gold-600" />,
  bookingEngine: <CalendarDays className="h-5 w-5 text-gold-600" />,
  bookingEngine1: <CalendarDays className="h-5 w-5 text-gold-600" />,
  bookingEngine2: <CalendarDays className="h-5 w-5 text-gold-600" />,
  paymentIntegration: <CreditCard className="h-5 w-5 text-gold-600" />,
}

// ツールチップテキスト
const tooltipText = {
  planning: "宿泊施設の設計・インバウンド最適化のための企画料金です",
  research: "申請要件調査・消防法確認などの調査代行サービスです",
  operation: "宿泊施設の運営代行サービスです。OTA費用は別途かかります",
  furniture: "家具家電の仕入・設置サービスです",
  consumables: "消耗品の提供・交換サービスです",
  accountSetup: "アカウント作成、SC/PMS連携設定のセットアップ料金です",
  tablet: "チェックイン用端末（Lenovo 9〜11インチ）の提供です",
  smartLock: "ゲスト用連携キー（営業形態で異なる）の提供です",
  systemIntegration: "旅館の場合に必要なシステム連携費用です（施設単位）",
  hostSystem: "SCやPMS、各種管理機能やレポート機能などのシステム利用料です",
  guestSystem: "自動チェックイン/アウト、セルフチェックイン機能、本人確認機能などのシステム利用料です",
  videoCall: "本人確認のためのビデオ通話サービスです（旅館のみ必須）",
  smartLockMonthly: "AirHostとの連携利用料（OPELO）です",
  bookingEngine: "自社サイトなどに宿泊予約機能を搭載しOTAを介さず予約から決済まで行えるサービスです",
}

export default function PricingSimulator() {
  const [planType, setPlanType] = useState<"FE" | "WS">("FE")
  const [accommodationType, setAccommodationType] = useState<"minpaku" | "ryokan">("minpaku")
  const [roomCount, setRoomCount] = useState<number>(1)
  const [expectedSales, setExpectedSales] = useState<number>(100000)

  // オプション選択
  const [options, setOptions] = useState({
    research: false,
    systemIntegration: false,
    videoCall: false,
    bookingEngine: false,
  })

  // 計算結果
  const [results, setResults] = useState<{
    initialCost: number
    monthlyCost: number
    estimateItems: Array<{
      category: string
      name: string
      price: string | number
      isRequired: boolean
      icon?: React.ReactNode
    }>
  } | null>(null)

  // オプション切り替え
  const handleOptionChange = (option: keyof typeof options) => {
    setOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }))
  }

  // 料金計算
  const calculateFees = () => {
    let initialCost = 0
    let monthlyCost = 0
    const estimateItems: Array<{
      category: string
      name: string
      price: string | number
      isRequired: boolean
      icon?: React.ReactNode
    }> = []

    // 基本料金の計算
    const addBasicFee = (key: keyof typeof pricingData.basicFees, name: string) => {
      const fee = pricingData.basicFees[key][planType][accommodationType]
      const isRequired =
        requiredItems[key as keyof typeof requiredItems] ||
        (accommodationType === "ryokan" && ryokanRequired[key as keyof typeof ryokanRequired])

      if ((isRequired || options[key as keyof typeof options]) && typeof fee === "number") {
        initialCost += fee
        estimateItems.push({
          category: "基本料金",
          name,
          price: fee.toLocaleString(),
          isRequired,
          icon: iconMap[key as keyof typeof iconMap],
        })
      } else if (isRequired || options[key as keyof typeof options]) {
        estimateItems.push({
          category: "基本料金",
          name,
          price: fee,
          isRequired,
          icon: iconMap[key as keyof typeof iconMap],
        })
      }
    }

    addBasicFee("planning", "企画料")
    if (options.research) {
      addBasicFee("research", "調査代行料")
    }

    // 運営代行料の計算（売上の20%）
    const operationFee = expectedSales * 0.2
    monthlyCost += operationFee
    estimateItems.push({
      category: "基本料金",
      name: "運営代行料",
      price: `${expectedSales.toLocaleString()}円の20% = ${operationFee.toLocaleString()}`,
      isRequired: true,
      icon: iconMap["operation"],
    })

    addBasicFee("furniture", "家具家電販売")
    addBasicFee("consumables", "消耗品販売")

    // 初期システム費用の計算
    const addInitialSystemFee = (key: keyof typeof pricingData.initialSystemFees, name: string) => {
      const fee = pricingData.initialSystemFees[key][planType][accommodationType]
      const isRequired =
        requiredItems[key as keyof typeof requiredItems] ||
        (accommodationType === "ryokan" && ryokanRequired[key as keyof typeof ryokanRequired])

      if ((isRequired || options[key as keyof typeof options]) && typeof fee === "number") {
        initialCost += fee
        estimateItems.push({
          category: "初期システム費用",
          name,
          price: fee.toLocaleString(),
          isRequired,
          icon: iconMap[key as keyof typeof iconMap],
        })
      } else if (isRequired || options[key as keyof typeof options]) {
        estimateItems.push({
          category: "初期システム費用",
          name,
          price: fee,
          isRequired,
          icon: iconMap[key as keyof typeof iconMap],
        })
      }
    }

    addInitialSystemFee("accountSetup", "アカウントセットアップ料金")
    addInitialSystemFee("tablet", "タブレット")
    addInitialSystemFee("smartLock", "Iotスマートロック連携キー")

    if (accommodationType === "ryokan" && options.systemIntegration) {
      addInitialSystemFee("systemIntegration", "システム連携費")
    }

    // 月額費用の計算
    const addMonthlyFee = (key: keyof typeof pricingData.monthlyFees, name: string) => {
      const fee = pricingData.monthlyFees[key][planType][accommodationType]
      const isRequired =
        requiredItems[key as keyof typeof requiredItems] ||
        (accommodationType === "ryokan" && ryokanRequired[key as keyof typeof ryokanRequired])

      if (isRequired || options[key as keyof typeof options]) {
        if (key === "smartLockMonthly") {
          const perRoomFee = fee * roomCount
          monthlyCost += perRoomFee
          estimateItems.push({
            category: "ランニング費用（月額）",
            name: `${name} (${roomCount}部屋)`,
            price: `${fee.toLocaleString()} × ${roomCount} = ${perRoomFee.toLocaleString()}`,
            isRequired,
            icon: iconMap[key as keyof typeof iconMap],
          })
        } else {
          monthlyCost += fee as number
          estimateItems.push({
            category: "ランニング費用（月額）",
            name,
            price: fee.toLocaleString(),
            isRequired,
            icon: iconMap[key as keyof typeof iconMap],
          })
        }
      }
    }

    addMonthlyFee("hostSystem", "ホスト用管理システム")
    addMonthlyFee("guestSystem", "ゲスト用管理システム")

    if (accommodationType === "ryokan" || options.videoCall) {
      addMonthlyFee("videoCall", "ビデオ通話")
    }

    addMonthlyFee("smartLockMonthly", "IoTスマートロック連携")

    // オプション費用の計算
    if (options.bookingEngine) {
      const bookingEngine1Fee = pricingData.optionalFees.bookingEngine1[planType][accommodationType]
      monthlyCost += bookingEngine1Fee
      estimateItems.push({
        category: "オプション費用（月額）",
        name: "ブッキングエンジン①",
        price: bookingEngine1Fee.toLocaleString(),
        isRequired: false,
        icon: iconMap["bookingEngine1"],
      })

      const bookingEngine2Fee = pricingData.optionalFees.bookingEngine2[planType][accommodationType] * roomCount
      monthlyCost += bookingEngine2Fee
      estimateItems.push({
        category: "オプション費用（月額）",
        name: `ブッキングエンジン② (${roomCount}部屋)`,
        price: `${pricingData.optionalFees.bookingEngine2[planType][accommodationType].toLocaleString()} × ${roomCount} = ${bookingEngine2Fee.toLocaleString()}`,
        isRequired: false,
        icon: iconMap["bookingEngine2"],
      })

      const paymentIntegrationFee = pricingData.optionalFees.paymentIntegration[planType][accommodationType] * roomCount
      monthlyCost += paymentIntegrationFee
      estimateItems.push({
        category: "オプション費用（月額）",
        name: `決済連携機能③ (${roomCount}部屋)`,
        price: `${pricingData.optionalFees.paymentIntegration[planType][accommodationType].toLocaleString()} × ${roomCount} = ${paymentIntegrationFee.toLocaleString()}`,
        isRequired: false,
        icon: iconMap["paymentIntegration"],
      })
    }

    setResults({
      initialCost,
      monthlyCost,
      estimateItems,
    })
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Card className="overflow-hidden border-0 bg-white shadow-md">
          <div className="h-1 w-full bg-gold-gradient"></div>
          <CardHeader className="border-b bg-white px-8 py-6">
            <CardTitle className="flex items-center gap-2 text-2xl font-light tracking-wide">
              <Settings className="h-6 w-6 text-gold-500" />
              <span className="gold-text">プラン設定</span>
            </CardTitle>
            <CardDescription className="text-sm font-light text-gray-500">
              料金を計算するプランを選択してください
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <Label className="text-base font-light tracking-wide text-gray-700">プランタイプ</Label>
                <RadioGroup
                  defaultValue="FE"
                  className="grid grid-cols-2 gap-4"
                  onValueChange={(value) => setPlanType(value as "FE" | "WS")}
                >
                  <div>
                    <RadioGroupItem value="FE" id="FE" className="peer sr-only" />
                    <Label
                      htmlFor="FE"
                      className="flex h-28 flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gold-200 hover:shadow-md peer-data-[state=checked]:border-gold-500 peer-data-[state=checked]:bg-gold-50 [&:has([data-state=checked])]:border-gold-500 [&:has([data-state=checked])]:bg-gold-50"
                    >
                      <Building className="h-8 w-8 text-gold-500" />
                      <span className="text-lg font-light tracking-wide text-gray-800">FEプラン</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="WS" id="WS" className="peer sr-only" />
                    <Label
                      htmlFor="WS"
                      className="flex h-28 flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gold-200 hover:shadow-md peer-data-[state=checked]:border-gold-500 peer-data-[state=checked]:bg-gold-50 [&:has([data-state=checked])]:border-gold-500 [&:has([data-state=checked])]:bg-gold-50"
                    >
                      <Building className="h-8 w-8 text-gold-500" />
                      <span className="text-lg font-light tracking-wide text-gray-800">WSプラン</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-light tracking-wide text-gray-700">宿泊施設タイプ</Label>
                <RadioGroup
                  defaultValue="minpaku"
                  className="grid grid-cols-2 gap-4"
                  onValueChange={(value) => setAccommodationType(value as "minpaku" | "ryokan")}
                >
                  <div>
                    <RadioGroupItem value="minpaku" id="minpaku" className="peer sr-only" />
                    <Label
                      htmlFor="minpaku"
                      className="flex h-28 flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gold-200 hover:shadow-md peer-data-[state=checked]:border-gold-500 peer-data-[state=checked]:bg-gold-50 [&:has([data-state=checked])]:border-gold-500 [&:has([data-state=checked])]:bg-gold-50"
                    >
                      <Home className="h-8 w-8 text-gold-500" />
                      <span className="text-lg font-light tracking-wide text-gray-800">民泊</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="ryokan" id="ryokan" className="peer sr-only" />
                    <Label
                      htmlFor="ryokan"
                      className="flex h-28 flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gold-200 hover:shadow-md peer-data-[state=checked]:border-gold-500 peer-data-[state=checked]:bg-gold-50 [&:has([data-state=checked])]:border-gold-500 [&:has([data-state=checked])]:bg-gold-50"
                    >
                      <Hotel className="h-8 w-8 text-gold-500" />
                      <span className="text-lg font-light tracking-wide text-gray-800">旅館</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-0 bg-white shadow-md">
          <div className="h-1 w-full bg-gold-gradient"></div>
          <CardHeader className="border-b bg-white px-8 py-6">
            <CardTitle className="flex items-center gap-2 text-2xl font-light tracking-wide">
              <Wallet className="h-6 w-6 text-gold-500" />
              <span className="gold-text">料金情報</span>
            </CardTitle>
            <CardDescription className="text-sm font-light text-gray-500">
              部屋数と想定売上を入力してください
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="roomCount" className="text-base font-light tracking-wide text-gray-700">
                  部屋数
                </Label>
                <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all focus-within:border-gold-400 focus-within:ring-1 focus-within:ring-gold-400">
                  <Home className="mr-2 h-4 w-4 text-gold-500" />
                  <Input
                    id="roomCount"
                    type="number"
                    min="1"
                    value={roomCount}
                    onChange={(e) => setRoomCount(Number.parseInt(e.target.value) || 1)}
                    className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectedSales" className="text-base font-light tracking-wide text-gray-700">
                  想定月間売上（円）
                </Label>
                <div className="flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all focus-within:border-gold-400 focus-within:ring-1 focus-within:ring-gold-400">
                  <Yen className="mr-2 h-4 w-4 text-gold-500" />
                  <Input
                    id="expectedSales"
                    type="number"
                    min="0"
                    value={expectedSales}
                    onChange={(e) => setExpectedSales(Number.parseInt(e.target.value) || 0)}
                    className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-0 bg-white shadow-md">
          <div className="h-1 w-full bg-gold-gradient"></div>
          <CardHeader className="border-b bg-white px-8 py-6">
            <CardTitle className="flex items-center gap-2 text-2xl font-light tracking-wide">
              <Settings className="h-6 w-6 text-gold-500" />
              <span className="gold-text">オプションサービス</span>
            </CardTitle>
            <CardDescription className="text-sm font-light text-gray-500">
              必要なオプションサービスを選択してください
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <TooltipProvider>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gold-200 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
                      {iconMap["research"]}
                    </div>
                    <div>
                      <Label htmlFor="research" className="text-base font-light tracking-wide text-gray-700">
                        調査代行料
                      </Label>
                      <p className="text-sm font-light text-gray-500">申請要件調査・消防法確認</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 cursor-pointer text-gold-400" />
                      </TooltipTrigger>
                      <TooltipContent className="border border-gold-100 bg-white text-gray-700">
                        <p className="max-w-xs">{tooltipText["research"]}</p>
                      </TooltipContent>
                    </Tooltip>
                    <Switch
                      id="research"
                      checked={options.research}
                      onCheckedChange={() => handleOptionChange("research")}
                      className="data-[state=checked]:bg-gold-500 data-[state=checked]:text-white"
                    />
                  </div>
                </div>

                {accommodationType === "ryokan" && (
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gold-200 hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
                        {iconMap["systemIntegration"]}
                      </div>
                      <div>
                        <Label htmlFor="systemIntegration" className="text-base font-light tracking-wide text-gray-700">
                          システム連携費
                        </Label>
                        <p className="text-sm font-light text-gray-500">旅館の場合のみ</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 cursor-pointer text-gold-400" />
                        </TooltipTrigger>
                        <TooltipContent className="border border-gold-100 bg-white text-gray-700">
                          <p className="max-w-xs">{tooltipText["systemIntegration"]}</p>
                        </TooltipContent>
                      </Tooltip>
                      <Switch
                        id="systemIntegration"
                        checked={options.systemIntegration}
                        onCheckedChange={() => handleOptionChange("systemIntegration")}
                        className="data-[state=checked]:bg-gold-500 data-[state=checked]:text-white"
                      />
                    </div>
                  </div>
                )}

                {accommodationType === "minpaku" && (
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gold-200 hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
                        {iconMap["videoCall"]}
                      </div>
                      <div>
                        <Label htmlFor="videoCall" className="text-base font-light tracking-wide text-gray-700">
                          ビデオ通話
                        </Label>
                        <p className="text-sm font-light text-gray-500">本人確認のためのビデオ通話</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 cursor-pointer text-gold-400" />
                        </TooltipTrigger>
                        <TooltipContent className="border border-gold-100 bg-white text-gray-700">
                          <p className="max-w-xs">{tooltipText["videoCall"]}</p>
                        </TooltipContent>
                      </Tooltip>
                      <Switch
                        id="videoCall"
                        checked={options.videoCall}
                        onCheckedChange={() => handleOptionChange("videoCall")}
                        className="data-[state=checked]:bg-gold-500 data-[state=checked]:text-white"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gold-200 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
                      {iconMap["bookingEngine"]}
                    </div>
                    <div>
                      <Label htmlFor="bookingEngine" className="text-base font-light tracking-wide text-gray-700">
                        ブッキングエンジン
                      </Label>
                      <p className="text-sm font-light text-gray-500">予約・決済機能</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 cursor-pointer text-gold-400" />
                      </TooltipTrigger>
                      <TooltipContent className="border border-gold-100 bg-white text-gray-700">
                        <p className="max-w-xs">{tooltipText["bookingEngine"]}</p>
                      </TooltipContent>
                    </Tooltip>
                    <Switch
                      id="bookingEngine"
                      checked={options.bookingEngine}
                      onCheckedChange={() => handleOptionChange("bookingEngine")}
                      className="data-[state=checked]:bg-gold-500 data-[state=checked]:text-white"
                    />
                  </div>
                </div>
              </TooltipProvider>
            </div>
          </CardContent>
          <CardFooter className="border-t bg-white p-8">
            <Button
              onClick={calculateFees}
              className="w-full gap-2 bg-gold-gradient text-base font-light tracking-wide text-white hover:opacity-90"
              size="lg"
            >
              <Calculator className="h-5 w-5" />
              料金を計算する
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <Card className="sticky top-6 overflow-hidden border-0 bg-white shadow-md">
          <div className="h-1 w-full bg-gold-gradient"></div>
          <CardHeader className="border-b bg-white px-8 py-6">
            <CardTitle className="flex items-center gap-2 text-2xl font-light tracking-wide">
              <Calculator className="h-6 w-6 text-gold-500" />
              <span className="gold-text">料金シミュレーション結果</span>
            </CardTitle>
            <CardDescription className="text-sm font-light text-gray-500">
              {results
                ? `${planType}プラン（${accommodationType === "minpaku" ? "民泊" : "旅館"}）の料金シミュレーション`
                : "計算ボタンを押して料金を確認してください"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            {results ? (
              <Tabs defaultValue="summary" className="w-full">
                <TabsList className="grid w-full grid-cols-2 border-b border-gray-200 bg-transparent p-0">
                  <TabsTrigger
                    value="summary"
                    className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-3 font-light data-[state=active]:border-gold-500 data-[state=active]:bg-transparent data-[state=active]:text-gold-600 data-[state=active]:shadow-none"
                  >
                    料金サマリー
                  </TabsTrigger>
                  <TabsTrigger
                    value="details"
                    className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-3 font-light data-[state=active]:border-gold-500 data-[state=active]:bg-transparent data-[state=active]:text-gold-600 data-[state=active]:shadow-none"
                  >
                    詳細内訳
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="summary" className="space-y-6 pt-6">
                  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="text-lg font-light tracking-wide text-gray-500">初期費用</div>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-light tracking-wide">{results.initialCost.toLocaleString()}</span>
                      <span className="ml-1 text-xl font-light">円</span>
                      <span className="ml-1 text-sm font-light text-gray-500">(税抜)</span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="text-lg font-light tracking-wide text-gray-500">月額費用</div>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-light tracking-wide">{results.monthlyCost.toLocaleString()}</span>
                      <span className="ml-1 text-xl font-light">円</span>
                      <span className="ml-1 text-sm font-light text-gray-500">(税抜)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-gold-100 bg-gold-50 p-4 text-gray-700">
                    <Info className="h-5 w-5 flex-shrink-0 text-gold-500" />
                    <p className="text-sm font-light">「別途見積」の項目は料金に含まれていません</p>
                  </div>
                </TabsContent>
                <TabsContent value="details" className="pt-6">
                  <div className="space-y-8">
                    {["基本料金", "初期システム費用", "ランニング費用（月額）", "オプション費用（月額）"].map(
                      (category) => {
                        const items = results.estimateItems.filter((item) => item.category === category)
                        if (items.length === 0) return null

                        return (
                          <div key={category} className="space-y-3">
                            <h3 className="font-light tracking-wide text-gray-700">{category}</h3>
                            <div className="space-y-2">
                              {items.map((item, index) => (
                                <div
                                  key={index}
                                  className={cn(
                                    "flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md",
                                    item.isRequired && "border-gold-200 bg-gold-50",
                                  )}
                                >
                                  <div className="flex items-center gap-3">
                                    {item.icon && (
                                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                                        {item.icon}
                                      </div>
                                    )}
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="font-light tracking-wide text-gray-700">{item.name}</span>
                                        {item.isRequired && (
                                          <span className="rounded-full bg-gold-100 px-2 py-0.5 text-xs font-light text-gold-600">
                                            必須
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="font-light tracking-wide text-gray-700">
                                    {typeof item.price === "string" && item.price === "別途見積" ? (
                                      <span className="text-gray-500">別途見積</span>
                                    ) : (
                                      <span>{item.price}円</span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      },
                    )}
                    <div className="flex items-center gap-2 rounded-lg border border-gold-100 bg-gold-50 p-4 text-gray-700">
                      <Info className="h-5 w-5 flex-shrink-0 text-gold-500" />
                      <p className="text-sm font-light">「別途見積」の項目は料金に含まれていません</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="flex h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-6 h-20 w-20 rounded-full bg-gold-50 p-5">
                  <Calculator className="h-full w-full text-gold-500" />
                </div>
                <h3 className="mb-2 text-xl font-light tracking-wide text-gray-700">料金を計算してみましょう</h3>
                <p className="max-w-md text-sm font-light text-gray-500">
                  左側のフォームでプラン、宿泊施設タイプ、部屋数、想定売上を入力し、「料金を計算する」ボタンを押してください
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
