"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BusinessType } from "../types";
import { businessTypes } from "../data";

interface BusinessTypeSelectorProps {
  selectedType: BusinessType;
  onTypeChange: (type: BusinessType) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function BusinessTypeSelector({
  selectedType,
  onTypeChange,
  onNext,
  onPrev,
}: BusinessTypeSelectorProps) {
  return (
    <div>
      <h4 className="text-xl font-medium text-gray-800 mb-6">ステップ2: 営業タイプを選択</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {businessTypes.map((type) => (
          <Card
            key={type.id}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-md",
              selectedType === type.id
                ? "border-gold-500 bg-gold-50"
                : "border-gold-100 hover:border-gold-300"
            )}
            onClick={() => onTypeChange(type.id)}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Badge className="bg-gold-100 text-gold-700 hover:bg-gold-200 border-none">
                  {type.name}
                </Badge>
                {selectedType === type.id && (
                  <div className="h-6 w-6 rounded-full bg-gold-600 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <h5 className="text-lg font-medium text-gray-800 mb-2">
                {type.id === "minpaku" ? "住宅宿泊事業法（民泊）" : "旅館業法（簡易宿所）"}
              </h5>
              <p className="text-gray-600 text-sm">{type.description}</p>
            </CardContent>
          </Card>
        ))}
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
          disabled={!selectedType}
          className={cn(
            "px-6",
            selectedType
              ? "bg-gold-600 hover:bg-gold-700 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          )}
        >
          次へ
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 