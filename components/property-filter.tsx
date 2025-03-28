"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const propertyTypes = [
  { id: "for-sale", label: "売買物件" },
  { id: "for-rent", label: "賃貸物件" },
  { id: "land", label: "土地" },
  { id: "apartment", label: "マンション" },
  { id: "house", label: "戸建て" },
  { id: "commercial", label: "商業施設" },
]

export function PropertyFilter() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const handleTypeChange = (typeId: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, typeId])
    } else {
      setSelectedTypes(selectedTypes.filter((id) => id !== typeId))
    }
  }

  return (
    <div className="space-y-3">
      {propertyTypes.map((type) => (
        <div key={type.id} className="flex items-center space-x-2">
          <Checkbox
            id={type.id}
            checked={selectedTypes.includes(type.id)}
            onCheckedChange={(checked) => handleTypeChange(type.id, checked as boolean)}
          />
          <Label htmlFor={type.id} className="text-sm cursor-pointer">
            {type.label}
          </Label>
        </div>
      ))}
    </div>
  )
}

