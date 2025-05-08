/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // モダンでプレミアムなカラースキーム
        primary: {
          DEFAULT: "#D4AF37", // リッチゴールド
          50: "#FBF7E4",
          100: "#F7EFC5",
          200: "#F0E087",
          300: "#E9D04A",
          400: "#E2C01C",
          500: "#D4AF37", // プライマリ
          600: "#B28E1B",
          700: "#906D13",
          800: "#6E4C0B",
          900: "#4C2B03",
          950: "#2A1801",
        },
        // ベースとなる黒系
        base: {
          DEFAULT: "#121212", // ほぼ黒
          50: "#2C2C2C",
          100: "#262626",
          200: "#202020",
          300: "#1A1A1A",
          400: "#161616",
          500: "#121212", // ダークベース
          600: "#0E0E0E",
          700: "#0A0A0A",
          800: "#060606",
          900: "#020202",
          950: "#000000",
        },
        // コンテンツ背景用白系
        content: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#F9F9F9",
          200: "#F5F5F5",
          300: "#F0F0F0",
          400: "#E6E6E6",
          500: "#DADADA",
          600: "#CCCCCC",
          700: "#ABABAB",
          800: "#8A8A8A",
          900: "#636363",
          950: "#303030",
        },
        // アクセントカラー
        accent: {
          DEFAULT: "#D4AF37", // ゴールド
          light: "#F0E087",
          dark: "#906D13",
        },
        // テキストカラー
        text: {
          DEFAULT: "#2C2C2C", // ほぼ黒（コンテンツエリア上）
          light: "#F9F9F9", // ほぼ白（暗い背景上）
          muted: "#8A8A8A", // グレー（控えめなテキスト）
          gold: "#D4AF37", // ゴールド（強調）
        },
        
        // 既存のカラーは残しておく
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // 以下は既存のカラー定義
        paleblue: {
          50: "#f2f8ff",
          100: "#e6f1ff",
          200: "#d1e2ff",
          300: "#a6c7ff",
          400: "#759ef8",
          500: "#4c82f0",
          600: "#3366df",
          700: "#254ecc",
          800: "#1f41a6",
          900: "#0e2057",
          950: "#091337",
        },
        darkgray: {
          50: "#f6f6f7",
          100: "#e1e3e5",
          200: "#c2c5ca",
          300: "#9ca1aa",
          400: "#777e8c",
          500: "#5c6372",
          600: "#484d5a",
          700: "#3a3e49",
          800: "#2e3239",
          900: "#282a30",
          950: "#171920",
        },
        snow: {
          50: "#ffffff",
          100: "#f9faff",
          200: "#f3f5ff",
          300: "#e8ebff",
          400: "#d1d7ff",
          500: "#b9c2ff",
          600: "#a2aeff",
          700: "#7c8efd",
          800: "#5a6ef9",
          900: "#3a4dd6",
          950: "#131c50",
        },
        ice: {
          50: "#eefbfd",
          100: "#d5f3fa",
          200: "#b0e8f5",
          300: "#76d6ed",
          400: "#33bade",
          500: "#17a0c7",
          600: "#147fa8",
          700: "#166788",
          800: "#195571",
          900: "#1a475f",
          950: "#0e2c3d",
        },
        gold: {
          50: "#fbf7e4",
          100: "#f7efc5",
          200: "#f0e087",
          300: "#e9d04a",
          400: "#e2c01c",
          500: "#d4af37",
          600: "#b28e1b",
          700: "#906d13",
          800: "#6e4c0b",
          900: "#4c2b03",
          950: "#2a1801",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        progressAnimation: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        fall: {
          '0%': {
            transform: 'translateY(0) rotate(0deg) translateX(10px)',
            opacity: 0
          },
          '5%': {
            opacity: 0.3
          },
          '15%': {
            opacity: 0.7
          },
          '25%': {
            transform: 'translateY(25vh) translateX(-20px) rotate(90deg)',
          },
          '50%': {
            transform: 'translateY(50vh) translateX(20px) rotate(180deg)',
          },
          '75%': {
            transform: 'translateY(75vh) translateX(-20px) rotate(270deg)',
            opacity: 0.8
          },
          '90%': {
            opacity: 0.3
          },
          '100%': {
            transform: 'translateY(110vh) translateX(10px) rotate(360deg)',
            opacity: 0
          }
        },
        "enhanced-fall": {
          '0%': {
            transform: 'translateY(0) rotate(0deg) translateX(var(--swing-x1))',
            opacity: 0
          },
          '5%': {
            opacity: 0.3,
            transform: 'translateY(5vh) rotate(20deg) translateX(var(--swing-x2))'
          },
          '15%': {
            opacity: 0.7,
            transform: 'translateY(15vh) rotate(60deg) translateX(var(--swing-x3))'
          },
          '30%': {
            transform: 'translateY(30vh) rotate(120deg) translateX(var(--swing-x4))'
          },
          '50%': {
            transform: 'translateY(50vh) rotate(180deg) translateX(var(--swing-x5))'
          },
          '65%': {
            transform: 'translateY(65vh) rotate(240deg) translateX(var(--swing-x4))'
          },
          '80%': {
            transform: 'translateY(80vh) rotate(300deg) translateX(var(--swing-x3))',
            opacity: 0.8
          },
          '90%': {
            transform: 'translateY(90vh) rotate(340deg) translateX(var(--swing-x2))',
            opacity: 0.4
          },
          '100%': {
            transform: 'translateY(110vh) rotate(360deg) translateX(var(--swing-x1))',
            opacity: 0
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "floatUp 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        'fall': 'fall 15s ease-in-out infinite',
        'enhanced-fall': 'enhanced-fall var(--fall-duration) ease-in-out infinite var(--fall-delay)'
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "var(--font-noto-serif)", "serif"],
        serif: ["var(--font-noto-serif)", "serif"],
        body: ["var(--font-noto-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

