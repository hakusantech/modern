// 営業タイプの定義
export type BusinessType = "minpaku" | "ryokan";

// プランタイプの定義
export type PlanType = "fe" | "ws";

// 料金オプションの型定義
export interface PriceOption {
  id: string;
  name: string;
  description: string;
  required: boolean;
  prices: {
    fe: {
      minpaku: number | string;
      ryokan: number | string;
    };
    ws: {
      minpaku: number | string;
      ryokan: number | string;
    };
  };
  isPercentage?: boolean;
  monthly?: boolean;
  perRoom?: boolean;
  requiredFor?: {
    fe: {
      minpaku: boolean;
      ryokan: boolean;
    };
    ws: {
      minpaku: boolean;
      ryokan: boolean;
    };
  };
}

// 選択オプションの型
export interface SelectedOptions {
  [key: string]: boolean;
}

// 結果表示用の型
export interface ResultOption {
  id: string;
  name: string;
  price: number | string;
  selected: boolean;
  monthly?: boolean;
  isPercentage?: boolean;
}

// 営業タイプ定義
export interface BusinessTypeOption {
  id: BusinessType;
  name: string;
  description: string;
  icon: string;
}

// プランタイプ定義
export interface PlanTypeOption {
  id: PlanType;
  name: string;
  description: string;
  icon: string;
}

// シミュレーション結果の型
export interface SimulationResult {
  initialCost: number;
  monthlyCost: number;
  percentageCost: number;
  monthlyCommission: number;
  totalMonthlyCost: number;
  resultOptions: ResultOption[];
} 