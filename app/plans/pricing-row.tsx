// Safe version of PricingRow/PricingCardRow that checks its context
// This component can safely be used in both table and div contexts
"use client";

import React, { useRef, useEffect, useState } from "react";

interface PricingRowProps {
  title: string;
  description: string;
  price: string;
  required?: boolean;
}

export function PricingRow({ title, description, price, required }: PricingRowProps) {
  const ref = useRef<HTMLElement>(null);
  const [isTrElement, setIsTrElement] = useState(false);

  // Detect if this component is being rendered inside a table
  useEffect(() => {
    if (ref.current) {
      // Check parent elements to see if we're inside a table
      let parent = ref.current.parentElement;
      while (parent) {
        if (parent.tagName === "TABLE" || parent.tagName === "TBODY" || parent.tagName === "THEAD") {
          setIsTrElement(true);
          break;
        }
        parent = parent.parentElement;
      }
    }
  }, []);

  // Common styling for both versions
  const rowBgClass = required === true 
    ? "border-b border-gray-100 hover:bg-gray-50 bg-gray-50" 
    : "border-b border-gray-100 hover:bg-gray-50";

  // Render a TR element when inside a table context
  if (isTrElement) {
    return (
      <tr ref={ref as React.RefObject<HTMLTableRowElement>} className={rowBgClass}>
        <td className="py-3 px-3 sm:px-4 align-top">
          <div className="flex flex-wrap items-center">
            <span className="font-medium text-gray-800">{title}</span>
            {required === true && (
              <span className="ml-1 sm:ml-2 text-xs bg-red-100 text-red-700 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">必須</span>
            )}
            {required === false && (
              <span className="ml-1 sm:ml-2 text-xs bg-blue-50 text-blue-600 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">任意</span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
        </td>
        <td className="py-3 px-3 sm:px-4 text-right align-middle font-medium text-gray-700 border-l border-gray-200 min-w-[100px]">{price}</td>
      </tr>
    );
  }

  // Render a DIV element when not inside a table context
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`${rowBgClass} flex flex-row mb-2`}>
      <div className="py-3 px-3 sm:px-4 flex-grow">
        <div className="flex flex-wrap items-center">
          <span className="font-medium text-gray-800">{title}</span>
          {required === true && (
            <span className="ml-1 sm:ml-2 text-xs bg-red-100 text-red-700 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">必須</span>
          )}
          {required === false && (
            <span className="ml-1 sm:ml-2 text-xs bg-blue-50 text-blue-600 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">任意</span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
      </div>
      <div className="py-3 px-3 sm:px-4 text-right align-middle font-medium text-gray-700 border-l border-gray-200 min-w-[100px]">{price}</div>
    </div>
  );
}