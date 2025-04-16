"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlanType } from "../types";
import { planTypes } from "../data";

interface PlanTypeSelectorProps {
  selectedPlan: PlanType;
  onPlanChange: (plan: PlanType) => void;
  onNext: () => void;
}

export default function PlanTypeSelector({
  selectedPlan,
  onPlanChange,
  onNext,
}: PlanTypeSelectorProps) {
  return (
    <div>
      <h4 className="text-xl font-medium text-gold-900 mb-6">ステップ1: プランタイプを選択</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {planTypes.map((planType) => (
          <Card
            key={planType.id}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-md bg-white",
              selectedPlan === planType.id
                ? "border-gold-300 shadow-lg"
                : "border-gold-100 hover:border-gold-200"
            )}
            onClick={() => onPlanChange(planType.id)}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Badge className="bg-gold-50 text-gold-800 border border-gold-200">
                  {planType.name}
                </Badge>
                {selectedPlan === planType.id && (
                  <div className="h-6 w-6 rounded-full bg-gold-600 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <h5 className="text-lg font-medium text-gold-900 mb-2">
                {planType.id === "fe" ? "家族向け体験プラン" : "ワーケーション向けプラン"}
              </h5>
              <p className="text-gold-700 text-sm leading-relaxed">
                {planType.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          onClick={onNext}
          disabled={!selectedPlan}
          className={cn(
            "px-6 transition-colors",
            selectedPlan
              ? "bg-gold-600 hover:bg-gold-700 text-white shadow-md"
              : "bg-gold-50 text-gold-400 cursor-not-allowed border border-gold-200"
          )}
        >
          次へ
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 