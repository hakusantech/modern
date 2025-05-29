"use client"

import { memo } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PlanOption {
  id: string
  name: string
  description: string
}

interface PlanSelectorProps {
  options: PlanOption[]
  selectedPlan: string
  onChange: (plan: string) => void
}

const PlanSelector = memo(({ options, selectedPlan, onChange }: PlanSelectorProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {options.map((option) => (
        <Card
          key={option.id}
          className={cn(
            "cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
            selectedPlan === option.id
              ? "border-2 border-blue-500 bg-blue-50 shadow-lg ring-4 ring-blue-100"
              : "border border-gray-200 hover:border-gray-300"
          )}
          onClick={() => onChange(option.id)}
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <Badge 
                variant="secondary" 
                className={
                  option.id === "fe" 
                    ? "bg-gold-100 text-gold-700 border-gold-200 px-3 py-1"
                    : "bg-blue-100 text-blue-700 border-blue-200 px-3 py-1"
                }
              >
                {option.id === "fe" ? "ファミリー・エクスペリエンス" : "ワーケーション・ステイ"}
              </Badge>
              {selectedPlan === option.id && (
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                  <Check className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
            <p className="text-gray-600 leading-relaxed mb-3">{option.description}</p>
            <h5 className="text-xl font-semibold text-gray-900 mb-3">
              {option.id === "fe" ? "家族向け体験プラン" : "ワーケーション向けプラン"}
            </h5>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <div 
                className={`w-2 h-2 rounded-full mr-2 ${
                  option.id === "fe" ? "bg-gold-500" : "bg-blue-500"
                }`}
              ></div>
              {option.id === "fe" ? "家族連れ・観光客向け" : "ビジネス・長期滞在向け"}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
})

PlanSelector.displayName = "PlanSelector"

export default PlanSelector