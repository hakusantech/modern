import { BusinessTypeOption, PlanTypeOption, PriceOption } from "./types";

// 料金データ
export const pricingData = {
  basicFees: [
    {
      id: "planning",
      name: "企画料",
      description:
        "・宿泊施設となる部屋の企画設計料\n・独自の取材データをもとにしたインバウンドに最適な宿泊施設をデザイン",
      required: true,
      prices: {
        fe: {
          minpaku: 150000,
          ryokan: 200000,
        },
        ws: {
          minpaku: 100000,
          ryokan: 150000,
        },
      },
    },
    {
      id: "research",
      name: "調査代行料",
      description:
        "・住宅宿泊事業者に必要な申請事項および申請書類等の調査料\n・民泊業または旅館業、および付随する消防法や関連法令に基づきます",
      required: false,
      prices: {
        fe: {
          minpaku: 100000,
          ryokan: 100000,
        },
        ws: {
          minpaku: 100000,
          ryokan: 100000,
        },
      },
    },
    {
      id: "management",
      name: "運営代行料",
      description:
        "・住宅宿泊管理業者として宿泊施設を管理運用する運営代行料\n・宿泊売上代金に対して一律20％を申し受けます（※OTA費用は別途必要）",
      required: true,
      isPercentage: true,
      prices: {
        fe: {
          minpaku: 20,
          ryokan: 20,
        },
        ws: {
          minpaku: 20,
          ryokan: 20,
        },
      },
    },
    {
      id: "furniture",
      name: "家具家電販売",
      description:
        "・指定業者より企画に適合する家具や家電を弊社が仕入・設置\n・企画に合わせた家電と家具を一括まとめて仕入れて設置まで行います",
      required: true,
      prices: {
        fe: {
          minpaku: 1000000,
          ryokan: "別途見積",
        },
        ws: {
          minpaku: "別途見積",
          ryokan: "別途見積",
        },
      },
    },
    {
      id: "supplies",
      name: "消耗品販売",
      description:
        "・事業用ゴミ袋、トイレットペーパー、調理油などの消耗品を弊社が補充・交換\n・企画に合わせた家電と家具を一括まとめて仕入れて設置まで行います",
      required: true,
      prices: {
        fe: {
          minpaku: 10000,
          ryokan: "別途見積",
        },
        ws: {
          minpaku: "別途見積",
          ryokan: "別途見積",
        },
      },
    },
  ] as PriceOption[],
  systemFees: [
    {
      id: "initial",
      name: "初期費用",
      description: "・アカウント初期セットアップ料金\n・各オンラインシステムの連携および初期設定（SC/PMS/OTA）",
      required: true,
      prices: {
        fe: {
          minpaku: 10000,
          ryokan: 10000,
        },
        ws: {
          minpaku: 10000,
          ryokan: 10000,
        },
      },
    },
    {
      id: "tablet",
      name: "タブレット",
      description: "・ゲストが利用するタブレット料（端末セットアップ込）\n・Lenovo9インチ（※KEEYLSの場合のみ11インチ対応可）",
      required: false,
      prices: {
        fe: {
          minpaku: 45000,
          ryokan: 45000,
        },
        ws: {
          minpaku: 45000,
          ryokan: 45000,
        },
      },
    },
    {
      id: "smartlock",
      name: "IoTスマートロック連携キー",
      description: "・システムと自動連携できるゲスト用キー（複数選択可）\n・民泊営業の場合と旅館営業の場合でシステムとキーが異なります",
      required: true,
      prices: {
        fe: {
          minpaku: 30000,
          ryokan: "別途見積",
        },
        ws: {
          minpaku: 30000,
          ryokan: "別途見積",
        },
      },
    },
    {
      id: "keeyls-integration",
      name: "予約システム連携費用",
      description: "・複数の予約システム間の連携機能\n・施設単位で必要（※部屋単位ではない）",
      required: false,
      prices: {
        fe: {
          minpaku: 0,
          ryokan: 50000,
        },
        ws: {
          minpaku: 0,
          ryokan: 50000,
        },
      },
    },
  ] as PriceOption[],
  runningCosts: [
    // 実際のデータから必要なものをここに追加
    {
      id: "airhost-hms",
      name: "ホスト管理システム（Premium）",
      description: "・SC+PMS機能（予約情報連携、レポートなど）",
      required: true,
      monthly: true,
      perRoom: false,
      prices: {
        fe: {
          minpaku: 3000,
          ryokan: 3000,
        },
        ws: {
          minpaku: 3000,
          ryokan: 3000,
        },
      },
      requiredFor: {
        fe: {
          minpaku: true,
          ryokan: true,
        },
        ws: {
          minpaku: true,
          ryokan: true,
        },
      }
    },
  ] as PriceOption[],
  optionalCosts: [
    // 実際のデータから必要なものをここに追加
    {
      id: "cleaning-service",
      name: "清掃サービス",
      description: "・予約ごとの清掃（チェックアウト後）",
      required: false,
      monthly: true,
      perRoom: true,
      prices: {
        fe: {
          minpaku: 5000,
          ryokan: 5000,
        },
        ws: {
          minpaku: 5000,
          ryokan: 5000,
        },
      },
    },
  ] as PriceOption[],
};

// プランタイプ定義
export const planTypes: PlanTypeOption[] = [
  {
    id: "fe",
    name: "ファミリー・エクスペリエンス",
    description:
      "家族での思い出作りに最適なプラン。北海道の自然や文化を体験できる宿泊施設の運営をサポートします。",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: "ws",
    name: "ワーケーション・ステイ",
    description:
      "ワーケーションや長期滞在のビジネス利用に最適なプラン。快適な仕事環境と滞在空間を提供します。",
    icon: "💼",
  },
];

// 営業タイプ定義
export const businessTypes: BusinessTypeOption[] = [
  {
    id: "minpaku",
    name: "民泊営業",
    description:
      "住宅宿泊事業法に基づく民泊営業。年間提供日数の上限があり、手続きが比較的簡単です。",
    icon: "🏠",
  },
  {
    id: "ryokan",
    name: "旅館営業",
    description:
      "旅館業法に基づく営業形態です。年間提供日数の制限はありませんが、より厳格な基準を満たす必要があります。",
    icon: "🏮",
  },
]; 