"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Building2, Users, Sparkles, MapPin, BarChart, Globe, TrendingUp, Target, Zap, Wind, Leaf, MountainSnow, ArrowDown } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

// Enhanced Animation variants
const heroFadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const heroStaggerChildren = {
  visible: { 
    transition: { staggerChildren: 0.15, delayChildren: 0.3 } // Stagger children slightly later
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
const staggerChildren = {
  visible: { transition: { staggerChildren: 0.2 } }
};
const itemFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">

      {/* --- Enhanced Hero Section - START --- */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroStaggerChildren} // Apply stagger to the section
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center bg-gray-900"
      >
        {/* Background Image - Changed to Hurano */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurano.png" // Changed background image
            alt="北海道 富良野の美しい夏景色 - CleanNest Hokkaido"
            fill
            priority
            className="object-cover opacity-40 scale-105" // Slightly increased scale and opacity
          />
          {/* Refined Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              variants={heroFadeInUp} // Apply enhanced variant
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-10 leading-tight tracking-tight text-shadow-md"
            >
              <span className="text-gold-300">“北海道の魅力”</span>を世界へ。<br />
              そしてあなたの物件を<br className="md:hidden"/>
              <span className="font-medium text-white">次の可能性へ。</span>
            </motion.h1>
            
            <motion.div variants={heroFadeInUp} className="space-y-6 text-lg md:text-xl text-gray-200 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              <p> 
                観光地として世界から注目される北海道。
                その一方で、使われずに眠る物件や空き家が数多く存在しています。
              </p>
              <p>
                CleanNest Hokkaidoは、「北海道の魅力」と「あなたの不動産」に新しい価値を吹き込み、
                世界中の旅行者を通じた<span className="font-medium text-gold-400">"地方創生"</span>の一翼を担います。
              </p>
              <p> 
                不動産オーナーの皆さまには、ただ貸すだけではない、
                <span className="font-medium text-gold-400">"資産価値の向上"</span>と<span className="font-medium text-gold-400">"安定した収益最大化"</span>をご提案。
                そしてその先には、日本の地方を活性化し、次世代へとつなぐ使命があります。
              </p>
            </motion.div>

            <motion.div variants={heroFadeInUp} className="mt-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white text-lg h-16 px-12 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border-none transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 focus:ring-offset-gray-900"
              >
                <Link href="/contact">
                  無料相談はこちら
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
         {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 z-10"
        >
          <span className="text-xs mb-2 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }} // Bounce effect
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-gold-400" />
          </motion.div>
        </motion.div>
      </motion.section>
      {/* --- Enhanced Hero Section - END --- */}

      {/* --- Concept Messages Section - START --- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
        className="py-24 md:py-32 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeIn}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                icon: Globe,
                title: "地方創生 × インバウンド",
                text: "世界中の旅行者が、地域経済の起爆剤になる。私たちは北海道を訪れる理由を創り出し、地方に活力をもたらします。インバウンドを通じた地域経済への波及効果を、オーナー様と共に実現します。"
              },
              {
                icon: TrendingUp, // Changed from Building2 for better fit
                title: "不動産の収益最大化",
                text: "空き家が、「世界の宿泊施設」になる。清掃、運営、プロモーションのすべてをトータルサポート。不動産の空室リスクを減らし、安定収益化を可能にします。"
              },
              {
                icon: Sparkles,
                title: "北海道の価値を世界へ",
                text: "日本の「美しさと快適さ」を世界標準に。清潔で快適な空間、安心の無人チェックイン、日本らしいおもてなし。CleanNestが創る宿泊体験は、単なる宿を超え、北海道のブランドを世界へ伝えます。"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemFadeIn}
                className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <item.icon className="h-12 w-12 text-gold-500 mb-6"/>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* --- Concept Messages Section - END --- */}

      {/* ミッションステートメント */}
      <section className="py-32 md:py-40 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-light text-center mb-24 text-gray-900">
              CleanNest Hokkaido が掲げる
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">
                3つのS
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustain",
                  subtitle: "持続可能な運営",
                  description: "適切な価値で長く続く運用を実現。資産価値の向上と安定した収益を両立します。",
                },
                {
                  title: "Sanitary",
                  subtitle: "清潔な環境",
                  description: "徹底した清掃と管理で、常に清潔で快適な空間を提供します。",
                },
                {
                  title: "Select",
                  subtitle: "選ばれる品質",
                  description: "世界中のゲストから信頼され、選ばれ続ける施設品質を維持します。",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gold-200 hover:border-gold-400 transition-all duration-300 h-full transform hover:-translate-y-2">
                    <div className="text-6xl font-medium text-gold-500 mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </div>
                    <h3 className="text-2xl font-medium mb-4 text-gray-900">{item.subtitle}</h3>
                    <p className="text-gray-700 leading-relaxed font-light text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* なぜ民泊が注目されているか */}
      <section className="py-32 md:py-40 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-24 text-center text-gray-900">
              なぜ"いま"、民泊なのか？
              <span className="block mt-6 text-2xl md:text-3xl text-gold-500 font-light">
                そして、なぜ北海道なのか？
              </span>
            </h2>
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white shadow-xl rounded-2xl p-12 border border-gold-200 transform hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                  2025年、日本の観光市場はかつてない追い風を受けています。訪日外国人観光客の数は過去最高を記録し、旅のスタイルもまた大きく変化しました。
                  <span className="block mt-6 text-gold-600 text-2xl md:text-3xl font-medium">
                    彼らが求めるのは、もはや"ホテルライク"な旅ではありません。
                  </span>
                  <span className="block mt-6">
                    求められているのは、地域の暮らしに溶け込むような、リアルな日本体験。
                    そしてその受け皿となるのが、民泊です。
                  </span>
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white shadow-xl rounded-2xl p-12 border border-gold-200 transform hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                  特に、世界有数の観光地でありながら、未開拓の可能性に満ちた北海道は、
                  <span className="text-gold-600">"プライベートな宿"</span>と
                  <span className="text-gold-600">"非日常の自然"</span>
                  を両立できる、極めて稀有なエリア。
                  <span className="block mt-6 text-2xl font-medium text-gold-500">
                    ホテルでは成しえない、ローカルの「静寂」や「温かさ」、その価値に、世界中の旅行者が魅了され始めています。
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 私たちの強み */}
      <section className="py-32 md:py-40 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-24 text-center text-gray-900">
              私たちの強み
              <span className="block mt-6 text-2xl md:text-3xl text-gold-500 font-light">
                CleanNestの特徴
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Building2,
                  title: "ワンストップで全てを支援",
                  description: "物件の企画・収支設計から、家具家電手配、行政対応、OTA集客、清掃・レビュー管理まで。開業から運用・拡大まで、すべて私たちが伴走します。"
                },
                {
                  icon: Users,
                  title: "不動産×民泊のプロフェッショナルチーム",
                  description: "代行専業業者ではできない、不動産の視点と管理力。売却益・資産価値の向上までを見据えた運営が可能です。"
                },
                {
                  icon: Sparkles,
                  title: "無人化・スマート化による安心運営",
                  description: "スマートロックやビデオ通話、多言語サポートを活用し、オーナーが現地にいなくても、世界中のゲストを迎えられる運営体制を実現します。"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gold-200 hover:border-gold-400 transition-all duration-300 h-full transform hover:-translate-y-2">
                    <feature.icon className="h-16 w-16 text-gold-500 mb-8 transform group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-medium mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed font-light text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* オーナー募集バナーを追加 */}
      <section className="py-20 bg-gold-50 border-y-4 border-gold-500">
        <div className="container mx-auto px-4">
          <Link href="/owner-recruitment/" className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-2xl hover:shadow-2xl transition-shadow duration-300 bg-white border-2 border-gold-500">
              <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-gold-600 mb-4">民泊オーナー様募集中</h3>
                  <p className="text-xl md:text-2xl text-gray-800 font-medium">所有不動産を民泊として活用し、収益を最大化しませんか？</p>
                  <p className="mt-2 text-lg text-gray-700">-戸建てやアパートを貸し出して賃料UP-</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg text-xl font-medium group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    詳細を見る
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 text-center relative bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-12 text-gray-900">
              まずはお気軽に
              <span className="block mt-6 text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">
                ご相談ください
              </span>
            </h2>
            <p className="text-2xl text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
              民泊運営を始めたい方も、物件の活用にお悩みの方も――<br />
              あなたの物件に秘められた可能性を、私たちが引き出します。
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-white text-xl h-16 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  無料相談・お問い合わせはこちら
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold-500 text-gray-800 hover:bg-gold-50 text-xl h-16 px-12 rounded-full"
              >
                <Link href="/services">
                  サービス内容を詳しく見る
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CONCLUDING TEXT - START --- */}
      <motion.section 
        className="py-24 md:py-32 bg-gradient-to-t from-gold-100 via-white to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg md:text-xl leading-relaxed font-light space-y-6">
            <p>
              CleanNest Hokkaidoは、北海道の不動産と地域の未来に、新しい風を吹き込みます。
            </p>
            <p>
              私たちは、使われていない物件を、世界中の旅行者を迎える空間へと再生し、
              オーナー様の資産価値を高めると同時に、北海道の地域活性化に貢献しています。
            </p>
            <p className="font-medium text-gold-700">
              "観光"と"収益"と"地方創生"をつなぐ、新しい宿泊事業のかたち。
            </p>
            <p>
              それが、CleanNest Hokkaidoの想いです。
            </p>
          </div>
        </div>
      </motion.section>
      {/* --- FINAL CONCLUDING TEXT - END --- */}

    </div>
  )
} 