import { Option } from "./types";

// Service options
export const serviceOptions: Option[] = [
  { id: "cleaning", label: "清掃代行" },
  { id: "keyManagement", label: "鍵管理" },
  { id: "guestSupport", label: "ゲストサポート" },
  { id: "permitManagement", label: "民泊許可管理" },
];

// Plan descriptions
export const planDescriptions = {
  basic: {
    title: "ベーシックプラン",
    price: "9,800円/月〜",
    description: "必要最小限の機能を提供する、スタートアップに最適なプラン",
    features: [
      { name: "基本システム利用料", included: true },
      { name: "予約管理", included: true },
      { name: "カレンダー同期", included: true },
      { name: "メール通知", included: true },
      { name: "清掃管理", included: false },
      { name: "24時間サポート", included: false },
    ]
  },
  standard: {
    title: "スタンダードプラン",
    price: "19,800円/月〜",
    description: "バランスの取れた機能セットで、成長中の宿泊施設に最適",
    features: [
      { name: "基本システム利用料", included: true },
      { name: "予約管理", included: true },
      { name: "カレンダー同期", included: true },
      { name: "メール通知", included: true },
      { name: "清掃管理", included: true },
      { name: "ゲスト管理", included: true },
      { name: "売上レポート", included: true },
      { name: "24時間サポート", included: false },
    ]
  },
  premium: { // "ファミリー・エクスペリエンス" plan
    title: "ファミリー・エクスペリエンス",
    price: "最大180日営業プラン", // Subtitle for the trigger
    mainDescription: "家族での思い出作りに最適。北海道の自然や文化を体験できる施設の運営をサポートします。（年間最大180日まで）",
    feeCategories: [
      {
        categoryTitle: "基本料金",
        items: [
          { name: "企画料*", status: "必須", itemDescription: "宿泊施設の設計・インバウンド最適化・コンセプト立案", priceText: "150,000円" },
          { name: "許認可申請サポート", status: "必須", itemDescription: "旅館業法に関する申請", priceText: "70,000円〜" },
          { name: "調査代行料", status: "任意", itemDescription: "申請要件調査・消防法確認など", priceText: "100,000円" },
          { name: "運営代行料", status: "必須", itemDescription: "住宅宿泊管理業者として宿泊施設を管理運用する運営代行料。宿泊売上代金に対して一律20％を申し受けます（※OTA費用は別途必要）", priceText: "売上の20%" },
          { name: "家具家電・什器備品 設置", status: "必須", itemDescription: "コンセプトに合わせた家具家電・什器備品の選定・購入・設置（設置コスト含む）", priceText: "100万円" },
          { name: "消耗品 提供・交換", status: "必須", itemDescription: "運営に必要な消耗品（シャンプー、タオル等）の初期設置・定期補充", priceText: "10,000円" },
        ]
      },
      {
        categoryTitle: "初期システム費用",
        items: [
          { name: "アカウントセットアップ", status: "必須", itemDescription: "OTAアカウント作成、サイトコントローラー/PMS連携設定", priceText: "10,000円" },
          { name: "チェックイン用タブレット", status: "任意", itemDescription: "セルフチェックイン用端末（Lenovo推奨、9〜11インチ）", priceText: "45,000円" },
          { name: "スマートロック連携キー", status: "必須", itemDescription: "ゲスト用スマートロック連携デバイス（物理キー不要、キーステーション利用にも対応）", priceText: "30,000円" },
        ]
      },
      {
        categoryTitle: "ランニング費用（月額）",
        items: [
          { name: "ホスト用管理システム", status: "必須", itemDescription: "予約管理(PMS)、サイトコントローラー(SC)、レポート機能など", priceText: "3,000円" },
          { name: "ゲスト用システム", status: "必須", itemDescription: "自動チェックイン/アウト、本人確認（写真・パスポート）、ウェルカムメッセージ等", priceText: "2,000円" },
          { name: "鍵管理システム", status: "必須", itemDescription: "スマートロックおよび物理鍵の管理システム", priceText: "1,000円" },
          { name: "自動チェックインシステム", status: "必須", itemDescription: "ゲスト向け自動チェックインおよび施設案内システム", priceText: "2,000円" },
          { name: "ビデオ通話", status: "必須", itemDescription: "リモートチェックインおよびゲストサポート用ビデオ通話システム", priceText: "3,000円" },
          { name: "スマートロックシステム連携", status: "任意", itemDescription: "スマートロックシステム(OPELO等)の月額利用料", priceText: "300円/部屋" },
        ]
      },
      {
        categoryTitle: "オプション費用（月額）",
        items: [
          { name: "自社予約エンジン", status: "任意", itemDescription: "自社HP等で直接予約・決済を受ける機能（初期設定費別途）", priceText: "5,000円 + 100円/部屋" },
          { name: "決済連携機能", status: "任意", itemDescription: "自社予約エンジン利用時の決済システム連携費用", priceText: "300円/部屋" },
        ]
      }
    ],
    footnotes: [
      "※ 表示価格はすべて税抜きです。別途消費税がかかります。",
      "※ 運営代行料は最低利用料金が設定される場合があります。",
      "※ 「別途見積」項目は物件状況により変動。詳細はお問合せ下さい。",
      "※ *企画料には、許認可申請サポート（行政書士）費用の一部が含まれます。"
    ]
  }
};

// Fee multipliers and base rates
export const feeConfig = {
  baseFees: {
    basic: 9800,
    standard: 19800,
    premium: 29800 // Note: This base fee is for calculation logic, display uses the detailed structure above.
  },
  businessTypeMultiplier: {
    hotel: 1.2,
    minpaku: 1.0
  },
  optionFees: {
    cleaning: 5000,
    keyManagement: 3000,
    guestSupport: 8000,
    permitManagement: 4000
  },
  revenueDiscounts: {
    high: { threshold: 500000, rate: 0.1 },
    medium: { threshold: 300000, rate: 0.05 }
  }
};