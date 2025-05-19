"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

// Define types
type PlanType = "basic" | "standard" | "premium";
type BusinessType = "hotel" | "minpaku";
type Option = {
  id: string;
  label: string;
};

// Service options
const serviceOptions: Option[] = [
  { id: "cleaning", label: "清掃代行" },
  { id: "keyManagement", label: "鍵管理" },
  { id: "guestSupport", label: "ゲストサポート" },
  { id: "permitManagement", label: "民泊許可管理" },
];

export default function PricingSimulator() {
  // Plan types
  const [planType, setPlanType] = useState<PlanType>("standard");
  
  // Business type
  const [businessType, setBusinessType] = useState<BusinessType>("minpaku");
  
  // Room count and expected sales
  const [roomCount, setRoomCount] = useState<number>(1);
  const [expectedSales, setExpectedSales] = useState<number>(0);
  const [formattedExpectedSales, setFormattedExpectedSales] = useState<string>("");
  
  // Selected options
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  // Results
  const [calculatedFee, setCalculatedFee] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  // Handle option selection
  const handleOptionChange = (optionId: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions([...selectedOptions, optionId]);
    } else {
      setSelectedOptions(selectedOptions.filter(id => id !== optionId));
    }
  };

  // Calculate fee based on inputs
  const handleCalculateFee = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      // Fee calculation logic
      let baseFee = 0;
      
      // Base fee by plan type
      switch (planType) {
        case "basic":
          baseFee = 9800;
          break;
        case "standard":
          baseFee = 19800;
          break;
        case "premium":
          baseFee = 29800;
          break;
      }
      
      // Adjust by room count
      const roomMultiplier = roomCount > 1 ? 1 + ((roomCount - 1) * 0.5) : 1;
      baseFee = baseFee * roomMultiplier;
      
      // Adjust by business type
      if (businessType === "hotel") {
        baseFee = baseFee * 1.2;
      }
      
      // Add option fees
      let optionFee = 0;
      if (selectedOptions.includes("cleaning")) optionFee += 5000;
      if (selectedOptions.includes("keyManagement")) optionFee += 3000;
      if (selectedOptions.includes("guestSupport")) optionFee += 8000;
      if (selectedOptions.includes("permitManagement")) optionFee += 4000;
      
      // Apply revenue-based discount if applicable
      let revenueDiscount = 0;
      if (expectedSales > 500000) {
        revenueDiscount = 0.1; // 10% discount for high revenue
      } else if (expectedSales > 300000) {
        revenueDiscount = 0.05; // 5% discount for medium revenue
      }
      
      const totalFee = Math.round((baseFee + optionFee) * (1 - revenueDiscount));
      setCalculatedFee(totalFee);
      setIsCalculating(false);
      
      // Scroll to result
      setTimeout(() => {
        const resultElement = document.getElementById("result-section");
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }, 500);
  };

  // Handle expected sales input
  const handleExpectedSalesChange = (inputValue: string) => {
    const numericString = inputValue.replace(/,/g, "");
    if (/^\d*$/.test(numericString) || numericString === "") {
      const numericValue = numericString === "" ? 0 : parseInt(numericString, 10);
      setExpectedSales(numericValue);
      if (numericString === "") {
        setFormattedExpectedSales("");
      } else {
        setFormattedExpectedSales(numericValue.toLocaleString());
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-8">料金シミュレーター</h2>
      
      <Card className="p-6 shadow-lg">
        <div className="space-y-8">
          {/* Plan type selector */}
          <div>
            <h3 className="text-lg font-medium mb-4">プランタイプを選択</h3>
            <RadioGroup
              value={planType}
              onValueChange={(value) => setPlanType(value as PlanType)}
              className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="basic" id="basic" />
                <Label htmlFor="basic" className="cursor-pointer">ベーシック</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard" className="cursor-pointer">スタンダード</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="premium" id="premium" />
                <Label htmlFor="premium" className="cursor-pointer">プレミアム</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Business type selector */}
          <div>
            <h3 className="text-lg font-medium mb-4">事業タイプを選択</h3>
            <RadioGroup
              value={businessType}
              onValueChange={(value) => setBusinessType(value as BusinessType)}
              className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hotel" id="hotel" />
                <Label htmlFor="hotel" className="cursor-pointer">ホテル・旅館</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="minpaku" id="minpaku" />
                <Label htmlFor="minpaku" className="cursor-pointer">民泊</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Room count and expected sales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="roomCount" className="mb-2 block">部屋数</Label>
              <Input
                id="roomCount"
                type="number"
                min={1}
                value={roomCount.toString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value) && value > 0) {
                    setRoomCount(value);
                  }
                }}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="expectedSales" className="mb-2 block">月間想定売上（円）</Label>
              <Input
                id="expectedSales"
                type="text"
                value={formattedExpectedSales}
                onChange={(e) => handleExpectedSalesChange(e.target.value)}
                className="w-full"
                placeholder="例: 300,000"
              />
            </div>
          </div>
          
          {/* Options */}
          <div>
            <h3 className="text-lg font-medium mb-4">オプションサービス</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={selectedOptions.includes(option.id)}
                    onCheckedChange={(checked) => 
                      handleOptionChange(option.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Calculate button */}
          <div className="text-center">
            <Button 
              onClick={handleCalculateFee}
              disabled={isCalculating}
              className="px-8 py-2"
            >
              {isCalculating ? "計算中..." : "料金を計算する"}
            </Button>
          </div>
          
          {/* Result display */}
          {calculatedFee !== null && (
            <div id="result-section" className="mt-8 border-t pt-6">
              <h3 className="text-xl font-bold text-center mb-4">お見積り結果</h3>
              <div className="text-center">
                <p className="text-lg">月額料金（税抜）</p>
                <p className="text-3xl font-bold text-primary">
                  {calculatedFee.toLocaleString()} 円
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  ※実際の料金は、詳細なヒアリングの上で決定いたします。<br />
                  詳しくはお問い合わせください。
                </p>
                <div className="mt-6">
                  <Button asChild className="px-8 py-2">
                    <a href="/contact">お問い合わせ</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}