import React from "react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "../utils";

interface ResultDisplayProps {
  calculatedFee: number | null;
}

export function ResultDisplay({ calculatedFee }: ResultDisplayProps) {
  if (calculatedFee === null) return null;
  
  return (
    <div id="result-section" className="mt-8 border-t pt-6">
      <h3 className="text-xl font-bold text-center mb-4">お見積り結果</h3>
      <div className="text-center">
        <p className="text-lg">月額料金（税抜）</p>
        <p className="text-3xl font-bold text-primary">
          {formatCurrency(calculatedFee)} 円
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
  );
}

export default ResultDisplay;