import { PriceOption, PlanType, BusinessType, SelectedOptions, ResultOption } from "./types";
import { pricingData } from "./data";

/**
 * 価格をフォーマットする関数
 */
export const formatPrice = (price: number | string): string => {
  if (typeof price === "number") {
    return new Intl.NumberFormat("ja-JP").format(price) + "円";
  }
  return price as string;
};

/**
 * 初期選択状態を生成する関数
 */
export const generateInitialOptions = (plan: PlanType, businessType: BusinessType): SelectedOptions => {
  const initialOptions: SelectedOptions = {};

  // 必須項目を選択状態に
  [
    ...pricingData.basicFees,
    ...pricingData.systemFees,
    ...pricingData.runningCosts,
    ...pricingData.optionalCosts,
  ].forEach((item: PriceOption) => {
    if (item.required) {
      initialOptions[item.id] = true;
    } else if (item.requiredFor && item.requiredFor[plan][businessType]) {
      initialOptions[item.id] = true;
    } else {
      initialOptions[item.id] = false;
    }
  });

  return initialOptions;
};

/**
 * 料金を計算し結果オプションを生成する関数
 */
export const calculatePricing = (
  selectedOptions: SelectedOptions,
  plan: PlanType,
  businessType: BusinessType,
  roomCount: number,
  estimatedMonthlyRevenue: number
) => {
  let initial = 0;
  let monthly = 0;
  let percentage = 0;
  const results: ResultOption[] = [];

  // 基本料金
  pricingData.basicFees.forEach((fee) => {
    if (selectedOptions[fee.id]) {
      const price = fee.prices[plan][businessType];
      if (typeof price === "number") {
        if (fee.isPercentage) {
          percentage += price;
        } else {
          initial += price;
        }
      }
      // 結果に追加
      results.push({
        id: fee.id,
        name: fee.name,
        price: price,
        selected: true,
        monthly: false,
        isPercentage: fee.isPercentage
      });
    }
  });

  // システム料金
  pricingData.systemFees.forEach((fee) => {
    if (selectedOptions[fee.id]) {
      const price = fee.prices[plan][businessType];
      if (typeof price === "number") {
        initial += price;
      }
      // 結果に追加
      results.push({
        id: fee.id,
        name: fee.name,
        price: price,
        selected: true,
        monthly: false
      });
    }
  });

  // ランニングコスト
  pricingData.runningCosts.forEach((fee) => {
    if (selectedOptions[fee.id]) {
      const price = fee.prices[plan][businessType];
      if (typeof price === "number") {
        if (fee.perRoom) {
          monthly += price * roomCount;
        } else {
          monthly += price;
        }
      }
      // 結果に追加
      results.push({
        id: fee.id,
        name: fee.name,
        price: price,
        selected: true,
        monthly: true
      });
    }
  });

  // オプションコスト
  pricingData.optionalCosts.forEach((fee) => {
    if (selectedOptions[fee.id]) {
      const price = fee.prices[plan][businessType];
      if (typeof price === "number") {
        if (fee.perRoom) {
          monthly += price * roomCount;
        } else {
          monthly += price;
        }
      }
      // 結果に追加
      results.push({
        id: fee.id,
        name: fee.name,
        price: price,
        selected: true,
        monthly: true
      });
    }
  });

  const commission = Math.round(estimatedMonthlyRevenue * (percentage / 100));

  return {
    initialCost: initial,
    monthlyCost: monthly,
    percentageCost: percentage,
    monthlyCommission: commission,
    totalMonthlyCost: monthly + commission,
    resultOptions: results
  };
}; 