"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { PriceOption, SelectedOptions, PlanType, BusinessType } from "../types";
import { pricingData } from "../data";
import { formatPrice } from "../utils";

interface OptionSelectorProps {
  selectedOptions: SelectedOptions;
  onOptionChange: (id: string, checked: boolean) => void;
  plan: PlanType;
  businessType: BusinessType;
  onNext: () => void;
  onPrev: () => void;
}

export default function OptionSelector({
  selectedOptions,
  onOptionChange,
  plan,
  businessType,
  onNext,
  onPrev,
}: OptionSelectorProps) {
  return (
    <div>
      <h4 className="text-xl font-medium text-gray-800 mb-6">ステップ4: オプションを選択</h4>

      <div className="space-y-6">
        <OptionGroup
          title="基本料金"
          description="初期費用と基本サービス料金"
          options={pricingData.basicFees}
          selectedOptions={selectedOptions}
          onOptionChange={onOptionChange}
          plan={plan}
          businessType={businessType}
        />

        <OptionGroup
          title="システム費用"
          description="予約・管理システムの初期費用"
          options={pricingData.systemFees}
          selectedOptions={selectedOptions}
          onOptionChange={onOptionChange}
          plan={plan}
          businessType={businessType}
        />

        <OptionGroup
          title="ランニングコスト"
          description="毎月発生する費用"
          options={pricingData.runningCosts}
          selectedOptions={selectedOptions}
          onOptionChange={onOptionChange}
          plan={plan}
          businessType={businessType}
        />

        <OptionGroup
          title="オプションサービス"
          description="必要に応じて選択できるオプション"
          options={pricingData.optionalCosts}
          selectedOptions={selectedOptions}
          onOptionChange={onOptionChange}
          plan={plan}
          businessType={businessType}
        />
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
          結果を見る
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

interface OptionGroupProps {
  title: string;
  description: string;
  options: PriceOption[];
  selectedOptions: SelectedOptions;
  onOptionChange: (id: string, checked: boolean) => void;
  plan: PlanType;
  businessType: BusinessType;
}

function OptionGroup({
  title,
  description,
  options,
  selectedOptions,
  onOptionChange,
  plan,
  businessType,
}: OptionGroupProps) {
  return (
    <Card className="border-gold-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-gold-800">{title}</CardTitle>
        <CardDescription className="text-gold-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {options.map((option) => (
          <div key={option.id} className="flex items-start">
            <Checkbox
              id={`option-${option.id}`}
              checked={option.required || selectedOptions[option.id]}
              onCheckedChange={(checked) => onOptionChange(option.id, checked as boolean)}
              disabled={option.required}
              className={option.required ? "bg-white border-gold-300 data-[state=checked]:bg-gold-300" : "data-[state=checked]:bg-gold-500"}
            />
            <div className="ml-3">
              <label
                htmlFor={`option-${option.id}`}
                className="text-sm font-medium text-gold-800 cursor-pointer"
              >
                {option.name}{" "}
                {option.required && (
                  <span className="text-xs text-gold-500 ml-1">必須</span>
                )}
              </label>
              <p className="text-xs text-gold-600 mt-1 whitespace-pre-line">
                {option.description}
              </p>
              <p className="text-sm text-gold-700 mt-1">
                料金:{" "}
                <span className="font-medium">
                  {formatPrice(option.prices[plan][businessType])}
                </span>
                {option.monthly && " / 月"}
                {option.isPercentage && " (%)"}
                {option.perRoom && " / 部屋"}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 