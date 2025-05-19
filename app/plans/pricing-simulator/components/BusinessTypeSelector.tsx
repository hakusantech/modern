import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { BusinessType } from "../types";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface BusinessTypeSelectorProps {
  value: BusinessType;
  onChange: (value: BusinessType) => void;
}

const businessTypeDetails = {
  minpaku: {
    title: "民泊",
    description: "民泊施設（Airbnb、Vrboなど）や短期賃貸物件に最適なプラン",
    features: [
      "民泊サイトとの連携が可能",
      "鍵管理サポート",
      "予約者とのコミュニケーションツール",
      "料金は民泊の一般的な規模に最適化"
    ]
  },
  hotel: {
    title: "ホテル・旅館",
    description: "従来型のホテルや旅館、ゲストハウスに適したプラン",
    features: [
      "複数部屋の一括管理",
      "フロント業務のシステム化",
      "予約サイトとの連携",
      "スタッフ管理機能",
      "大規模施設向けの拡張性"
    ]
  }
};

export function BusinessTypeSelector({ value, onChange }: BusinessTypeSelectorProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">営業タイプを選択</h3>
      <RadioGroup
        value={value}
        onValueChange={(value) => onChange(value as BusinessType)}
        className="mb-6 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="minpaku" id="minpaku" />
          <Label htmlFor="minpaku" className="cursor-pointer">民泊</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="hotel" id="hotel" />
          <Label htmlFor="hotel" className="cursor-pointer">ホテル・旅館</Label>
        </div>
      </RadioGroup>

      <Accordion type="single" collapsible className="w-full">
        {(["minpaku", "hotel"] as const).map((type) => (
          <AccordionItem key={type} value={type} className={value === type ? "border p-2 rounded-md bg-gray-50" : "border"}>
            <AccordionTrigger className="px-4">
              <div className="flex items-center justify-between w-full">
                <div className="text-left">
                  <div className="font-medium">{businessTypeDetails[type].title}</div>
                </div>
                {value === type && (
                  <div className="text-sm mr-6 bg-blue-100 text-blue-800 rounded-full px-2 py-1">
                    選択中
                  </div>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">{businessTypeDetails[type].description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">主な特徴:</h4>
                  <ul className="space-y-2">
                    {businessTypeDetails[type].features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onChange(type as BusinessType)}
                  className={`mt-4 px-4 py-2 text-sm rounded-md ${
                    value === type
                      ? "bg-gray-200 text-gray-800"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  disabled={value === type}
                >
                  {value === type ? "選択中" : "このタイプを選択"}
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default BusinessTypeSelector;