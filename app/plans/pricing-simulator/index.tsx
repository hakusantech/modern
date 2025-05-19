"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlanType, BusinessType } from "./types";
import { parseNumericInput, calculateFee } from "./utils";
import { serviceOptions } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Components
import PlanTypeSelector from "./components/PlanTypeSelector";
import BusinessTypeSelector from "./components/BusinessTypeSelector";
import RoomAndRevenueSelector from "./components/RoomAndRevenueSelector";
import OptionSelector from "./components/OptionSelector";
import ResultDisplay from "./components/ResultDisplay";

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

  // Options from data file
  const options = serviceOptions;

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
      const totalFee = calculateFee(
        planType,
        businessType, 
        roomCount, 
        expectedSales, 
        selectedOptions
      );
      
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

  // Handle expected sales change
  const handleExpectedSalesChange = (inputValue: string) => {
    // Remove commas first
    const numericString = inputValue.replace(/,/g, "");
    
    // Check if input is empty or contains only digits
    if (numericString === "" || /^\d+$/.test(numericString)) {
      const numericValue = numericString === "" ? 0 : parseInt(numericString, 10);
      
      // Update state with numeric value
      setExpectedSales(numericValue);
      
      // Format for display (empty string or formatted number)
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
        <Accordion 
          type="multiple" 
          defaultValue={["item-1", "item-2", "item-3", "item-4"]} 
          className="w-full space-y-1" // Reduced space-y for tighter packing
        >
          <AccordionItem value="item-1" className="border-none"> 
            <AccordionTrigger className="py-3 hover:no-underline">
              <h3 className="text-lg font-semibold">1. プランを選択</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <PlanTypeSelector 
                value={planType} 
                onChange={setPlanType} 
              />
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="py-3 hover:no-underline">
              <h3 className="text-lg font-semibold">2. 営業タイプを選択</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <BusinessTypeSelector 
                value={businessType}
                onChange={setBusinessType}
              />
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="py-3 hover:no-underline">
              <h3 className="text-lg font-semibold">3. 部屋数と月間売上を入力</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <RoomAndRevenueSelector
                roomCount={roomCount}
                setRoomCount={setRoomCount}
                formattedExpectedSales={formattedExpectedSales}
                onExpectedSalesChange={handleExpectedSalesChange}
              />
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="py-3 hover:no-underline">
              <h3 className="text-lg font-semibold">4. 追加オプションを選択</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <OptionSelector
                options={options}
                selectedOptions={selectedOptions}
                onChange={handleOptionChange}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
          
        {/* Calculate button */}
        <div className="mt-8 text-center">
          <Button
            onClick={handleCalculateFee}
            disabled={isCalculating}
            className="px-8 py-2 text-base"
          >
            {isCalculating ? "計算中..." : "料金を計算する"}
          </Button>
        </div>

        {/* Result display */}
        {calculatedFee !== null && (
          <ResultDisplay calculatedFee={calculatedFee} />
        )}
      </Card>
    </div>
  );
}