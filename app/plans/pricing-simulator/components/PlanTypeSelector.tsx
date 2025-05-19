import React from "react";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // No longer needed
// import { Label } from "@/components/ui/label"; // No longer needed for RadioGroup
import { PlanType } from "../types";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { planDescriptions } from "../data";
import { Check, X } from "lucide-react";

interface PlanTypeSelectorProps {
  value: PlanType; // This is the currently selected plan
  onChange: (value: PlanType) => void;
}

// Helper type guard to check for the new detailed structure
function isDetailedPlan(plan: any): plan is typeof planDescriptions.premium {
  return 'feeCategories' in plan;
}

export function PlanTypeSelector({ value, onChange }: PlanTypeSelectorProps) {
  return (
    <div>
      <div className="mb-6 p-4 border rounded-md bg-slate-50">
        <h4 className="text-md font-semibold mb-2">料金表の見方</h4>
        <div className="flex items-center mb-1">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-800 mr-2">必須</span>
          <p className="text-sm text-slate-700">のラベルが付いている項目は各プランで必要な項目です。</p>
        </div>
        <div className="flex items-center">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-800 mr-2">任意</span>
          <p className="text-sm text-slate-700">のラベルが付いている項目はオプションとなります。</p>
        </div>
      </div>

      <h3 className="text-lg font-medium mb-4">プランを選択してください</h3>
      {/* RadioGroup removed - Accordion itself will handle plan selection */}

      <Accordion 
        type="single" 
        collapsible 
        className="w-full" 
        value={value} // Bind accordion's open item to the selected plan
        onValueChange={(selectedValue) => {
          if (selectedValue) { // Ensure a value is selected (accordion item opened)
            onChange(selectedValue as PlanType);
          }
        }}
      >
        {(['basic', 'standard', 'premium'] as const).map((plan_id) => {
          const planDetails = planDescriptions[plan_id];
          const isSelected = value === plan_id;

          return (
            <AccordionItem key={plan_id} value={plan_id} className={`border rounded-md mb-3 ${isSelected ? "bg-blue-50 border-blue-300 shadow-md" : "bg-white"}`}>
              <AccordionTrigger className={`px-4 py-3 hover:bg-slate-50 rounded-t-md ${isSelected ? "bg-blue-100" : ""}`}>
                <div className="flex items-center justify-between w-full">
                  <div className="text-left">
                    <div className={`font-semibold text-base ${isSelected ? "text-blue-700" : "text-slate-800"}`}>{planDetails.title}</div>
                    <div className={`text-sm ${isSelected ? "text-blue-600" : "text-gray-500"}`}>{planDetails.price}</div>
                  </div>
                  {/* "選択中" indicator can be more subtle or part of the AccordionTrigger styling if needed */}
                  {isSelected && (
                    <div className="text-xs mr-2 bg-blue-600 text-white rounded-full px-2.5 py-1 font-medium">
                      選択中
                    </div>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 bg-white rounded-b-md">
                <div className="space-y-2 py-4">
                  {isDetailedPlan(planDetails) ? (
                    // Render new detailed structure for 'premium' (Family Experience)
                    <>
                      <p className="text-sm text-gray-700 mb-6">{planDetails.mainDescription}</p>
                      <Accordion type="multiple" className="w-full space-y-3">
                        {planDetails.feeCategories.map((category, catIndex) => (
                          <AccordionItem key={catIndex} value={`${plan_id}-category-${catIndex}`} className="border rounded-md shadow-sm overflow-hidden">
                            <AccordionTrigger className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-left w-full">
                              <h4 className="font-semibold text-base text-slate-800">{category.categoryTitle}</h4>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pt-4 pb-2 bg-white">
                              <div className="space-y-4">
                                {category.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
                                    <div className="flex justify-between items-start mb-1">
                                      <h5 className="font-medium text-sm text-slate-700">{item.name}</h5>
                                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${item.status === "必須" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
                                        {item.status}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-1.5">{item.itemDescription}</p>
                                    <p className="text-sm font-semibold text-slate-900">{item.priceText}</p>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                      {planDetails.footnotes && planDetails.footnotes.length > 0 && (
                        <div className="mt-6 space-y-1.5">
                          {planDetails.footnotes.map((note, noteIndex) => (
                            <p key={noteIndex} className="text-xs text-slate-500">{note}</p>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    // Render existing simple features list for 'basic' and 'standard'
                    <>
                      <p className="text-sm text-gray-600">{planDetails.description}</p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">含まれる機能:</h4>
                        <ul className="space-y-2">
                          {planDetails.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              {feature.included ? (
                                <Check className="h-4 w-4 text-green-500 mr-2" />
                              ) : (
                                <X className="h-4 w-4 text-red-500 mr-2" />
                              )}
                              <span>{feature.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  {/* Button to select plan removed as AccordionTrigger now handles selection */}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        )}
      </Accordion>
    </div>
  );
}

export default PlanTypeSelector;