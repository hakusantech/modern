"use client"

import { memo } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface BusinessTypeOption {
  id: string
  name: string
  description: string
}

interface BusinessTypeSelectorProps {
  options: BusinessTypeOption[]
  selectedType: string
  onChange: (type: string) => void
}

const BusinessTypeSelector = memo(({ options, selectedType, onChange }: BusinessTypeSelectorProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {options.map((option) => (
        <Card
          key={option.id}
          className={cn(
            "cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1",
            selectedType === option.id
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
                  option.id === "minpaku"
                    ? "bg-green-100 text-green-700 border-green-200 px-3 py-1"
                    : "bg-purple-100 text-purple-700 border-purple-200 px-3 py-1"
                }
              >
                {option.name}
              </Badge>
              {selectedType === option.id && (
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                  <Check className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">{option.description}</p>
            <h5 className="text-xl font-semibold text-gray-900 mb-3">
              {option.id === "minpaku" ? "住宅宿泊事業法（民泊）" : "旅館業法（簡易宿所）"}
            </h5>
            <div className="space-y-2 text-sm">
              {option.id === "minpaku" ? (
                <>
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-2" />
                    申請手続きが簡単
                  </div>
                  <div className="flex items-center text-orange-600">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    年間180日まで
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-2" />
                    年間日数制限なし
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Check className="h-4 w-4 mr-2" />
                    年中営業可能
                  </div>
                </>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
})

BusinessTypeSelector.displayName = "BusinessTypeSelector"

export default BusinessTypeSelector