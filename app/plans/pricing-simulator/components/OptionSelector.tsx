import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Option } from "../types";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { feeConfig } from "../data";
import { formatCurrency } from "../utils";

interface OptionSelectorProps {
  options: Option[];
  selectedOptions: string[];
  onChange: (optionId: string, checked: boolean) => void;
}

// オプションの詳細説明
const optionDetails = {
  cleaning: {
    description: "お部屋の清掃サービスを代行します。予約前後の清掃、定期清掃などに対応。",
    benefits: [
      "予約の前後に専門スタッフが清掃",
      "清掃状況のオンライン管理",
      "緊急時の臨時清掃対応",
      "消耗品の補充管理"
    ]
  },
  keyManagement: {
    description: "鍵の受け渡し、管理をすべて代行。スマートロックの導入も可能です。",
    benefits: [
      "24時間対応のキー管理",
      "スマートロックとの連携",
      "セキュリティ管理",
      "緊急時のバックアップ対応"
    ]
  },
  guestSupport: {
    description: "ゲストからの問い合わせに対応。多言語対応、24時間サポートも可能です。",
    benefits: [
      "多言語対応（英語・中国語など）",
      "24時間チャットサポート",
      "緊急時の電話対応",
      "地域情報の提供"
    ]
  },
  permitManagement: {
    description: "民泊許可申請の代行や必要書類の管理、行政との連絡などを代行します。",
    benefits: [
      "許可申請手続きの代行",
      "必要書類の作成サポート",
      "定期的な更新管理",
      "法令変更の通知と対応"
    ]
  }
};

export function OptionSelector({ options, selectedOptions, onChange }: OptionSelectorProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">追加オプション</h3>
      
      <Accordion type="multiple" className="w-full">
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option.id);
          const optionPrice = feeConfig.optionFees[option.id as keyof typeof feeConfig.optionFees];
          
          return (
            <AccordionItem 
              key={option.id} 
              value={option.id}
              className={isSelected ? "border mb-3 p-2 rounded-md bg-blue-50" : "border mb-3"}
            >
              <div className="flex items-center px-4 py-2">
                <Checkbox
                  id={option.id}
                  checked={isSelected}
                  onCheckedChange={(checked) => onChange(option.id, checked === true)}
                  className="mr-3 border-gray-400 bg-white data-[state=checked]:bg-blue-600"
                />
                <Label htmlFor={option.id} className="cursor-pointer flex-1">
                  <span className="font-medium">{option.label}</span>
                  <span className="ml-2 text-sm text-blue-600">+{formatCurrency(optionPrice)}円/月</span>
                </Label>
                <AccordionTrigger className="flex-none" />
              </div>
              
              <AccordionContent className="px-4 ml-7">
                <div className="text-sm text-gray-700 mb-3">
                  {optionDetails[option.id as keyof typeof optionDetails].description}
                </div>
                
                <div className="mt-2">
                  <h4 className="text-xs font-medium text-gray-500 mb-2">主なメリット:</h4>
                  <ul className="space-y-1">
                    {optionDetails[option.id as keyof typeof optionDetails].benefits.map((benefit, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default OptionSelector;