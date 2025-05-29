"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Building2, Users, Sparkles, MapPin, BarChart, Globe, TrendingUp, Target, Zap, Wind, Leaf, MountainSnow, ArrowDown, Shield } from "lucide-react"
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
        className="relative min-h-[80vh] sm:min-h-screen w-full overflow-hidden flex items-center justify-center text-center bg-gray-900"
      >
        {/* Background Image - Changed to Hurano */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/good.png" // Changed background image
            alt="北海道 富良野の美しい夏景色 - CleanNest Hokkaido"
            fill
            priority
            className="object-cover opacity-70 scale-105" // Slightly increased scale and adjusted opacity
          />
          {/* Gradient Overlay Removed */}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto -mt-16">
            <motion.h1 
              variants={heroFadeInUp} // Apply enhanced variant
              className="text-4xl leading-snug md:text-6xl font-medium mb-8 tracking-tight text-white [text-shadow:2px_2px_6px_rgb(0_0_0_/_60%)]"
            >
              北海道の魅力を世界へ<br />
              <br />
              あなたの物件を次の可能性へ
            </motion.h1>
            
            {/* Replaced Paragraphs with Workflow Visualization - TO BE REMOVED */}

            {/* 無料相談ボタン削除 */}
            {/* 
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
            */}
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

      {/* === NEW Problem / Goal / Solution Section START === */}
      <section 
        className="py-24 md:py-40 bg-black text-white overflow-hidden relative"
      >
        {/* 背景エフェクト - 高級感を演出 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500 opacity-5 transform -skew-x-12" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold-400 opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-center tracking-wide">
              <span className="text-gold-400">PROCESS</span>
              <span className="block mt-2 text-white text-3xl md:text-5xl font-light">価値創造の流れ</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-6" />
          </motion.div>

          {/* ワークフロー表現 */}
          <div className="max-w-6xl mx-auto">
            {/* ワークフローライン */}
            <div className="hidden md:block absolute left-1/2 top-1/3 bottom-1/3 w-0.5 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />

            {/* 課題ブロック */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col md:flex-row items-center mb-32"
            >
              <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-16">
                <div className="aspect-video relative overflow-hidden rounded-lg max-h-60">
                  <Image
                    src="/images/akiya.png"
                    alt="北海道の空き家問題"
                    fill
                    className="object-cover brightness-75 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-16 relative">
                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black border border-gold-500 text-gold-500 mb-6 text-4xl">
                    01
                  </div>
                  <h3 className="text-xl font-medium text-gold-400 mb-2 uppercase tracking-wider">Challenge</h3>
                  <h2 className="text-3xl font-light text-white mb-8">活用されずに眠る北海道の空き家</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      観光地として世界から注目される北海道。
                      その一方で、使われずに眠っている空き家が数多く存在しています。
                    </p>
                    <p>
                      <strong className="text-white">2024年時点で、北海道の空き家率は15.6%（約45万戸）</strong>にものぼり、全国平均（13.8%）を上回る深刻な状況です。
                    </p>
                    <p>
                      こうした未活用の不動産が各地に点在していることは、地域経済にとって大きな損失であり、同時に<strong className="text-gold-400">新たな価値を生み出す"ポテンシャル"</strong>でもあります。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 目的ブロック */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col md:flex-row-reverse items-center mb-32"
            >
              <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pl-16">
                <div className="aspect-video relative overflow-hidden rounded-lg max-h-60">
                  <Image
                    src="/images/u1749683721_Interior_of_a_cozy_Hokkaido_minpaku_guesthouse_at_b46beebe-d85d-4be3-836d-06dd18aa9523_3.png"
                    alt="北海道の価値創造"
                    fill
                    className="object-cover brightness-75 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-16 relative">
                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black border border-gold-500 text-gold-500 mb-6 text-4xl">
                    02
                  </div>
                  <h3 className="text-xl font-medium text-gold-400 mb-2 uppercase tracking-wider">Vision</h3>
                  <h2 className="text-3xl font-light text-white mb-8">北海道の魅力 × あなたの不動産で「次の可能性」へ</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      CleanNest Hokkaidoは、「北海道の魅力」と「あなたの物件」に新しい価値を吹き込み、世界中の旅行者と地域をつなぐ地方創生を目指しています。
                    </p>
                    <p>
                      ただの民泊運営ではありません。
                      私たちは、空き家という社会課題に向き合いながら、持続可能で地域と共に成長する宿泊モデルを実現しようとしています。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ソリューションブロック */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-16">
                <div className="aspect-video relative overflow-hidden rounded-lg max-h-60">
                  <Image
                    src="/images/hurano.png"
                    alt="世界の宿泊施設への変革"
                    fill
                    className="object-cover brightness-75 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-16 relative">
                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black border border-gold-500 text-gold-500 mb-6 text-4xl">
                    03
                  </div>
                  <h3 className="text-xl font-medium text-gold-400 mb-2 uppercase tracking-wider">Solution</h3>
                  <h2 className="text-3xl font-light text-white mb-8">空き家を"世界の宿泊施設"へ</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      CleanNest Hokkaidoは、空き家・未使用不動産を<strong className="text-white">「住まいのような快適さを備えた宿泊施設」</strong>として再生。
                      清掃・運営・プロモーションまですべてワンストップで支援し、不動産オーナー様の空室リスクを減らしながら、最大収益化を可能にします。
                    </p>
                    <p>
                      オーナー様には、"ただ貸すだけではない"新しい賃貸の形として、資産価値の向上と継続的な収益最大化をご提案。
                      その取り組みが、日本の地方を活性化し、次世代へとつなぐ使命にもつながります。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* === NEW Problem / Goal / Solution Section END === */}

      {/* --- Concept Messages Section - START --- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerChildren}
        className="py-16 md:py-32 bg-white"
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
                text: "空き家が、「世界の宿泊施設」になる。清掃、運営、プロモーションのすべてをトータルサポート。不動産の空室リスクを減らし、収益最大化を可能にします。"
              },
              {
                icon: Sparkles,
                title: "住まいのような居住空間",
                text: "CleanNestが企画する部屋づくりは単なる宿ではなく、滞在されるゲスト皆さまがお家で過ごすような快適さを重要視したお部屋をづくりを目指しています。さらに、衛生面を大切にした清潔で安心できる清掃を徹底します。"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemFadeIn}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <item.icon className="w-10 h-10 shrink-0 text-gold-500 mb-6"/>
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

      {/* 3つのS セクション */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-light text-gray-900">
              CleanNest Hokkaido が掲げる
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">
                3つのS
              </span>
            </h2>
            <div className="w-32 h-0.5 bg-gold-500 mx-auto mt-8 mb-16"></div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[
                {
                  icon: Sparkles,
                  title: "Sanitation",
                  subtitle: "衛生",
                  text: "宿泊施設としての清潔さを最優先に考え、ホテル品質の清掃基準と衛生管理を徹底しています。専門トレーニングを受けたスタッフによる徹底的な清掃と、高品質なリネン交換で、ゲストが安心して過ごせる空間を提供します。"
                },
                {
                  icon: Shield,
                  title: "Safety",
                  subtitle: "安心・安全",
                  text: "スマートロックやセキュリティシステムの導入により、物理的な安全を確保。24時間緊急対応体制と多言語サポートで、外国人旅行者も安心して滞在できる環境を整えています。地域の安全情報も提供し、安心な旅をサポートします。"
                },
                {
                  icon: Leaf,
                  title: "Sustainability",
                  subtitle: "持続可能性",
                  text: "地域社会との共生と環境への配慮を大切にし、長期的な視点で事業を展開しています。エコフレンドリーな清掃用品の使用、省エネルギー設備の導入、地域経済への貢献を通じて、持続可能な観光と不動産活用のモデルを目指します。"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-gold-300 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xl text-gold-500 mb-4 font-light">{item.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* なぜ民泊が注目されているか - Enhanced Visual Design */}
      <section className="py-16 md:py-32 lg:py-40 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* 装飾的な背景要素 */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Glass-morphism card with improved contrast */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-md p-6 md:p-10 lg:p-16 rounded-2xl border border-white/15 shadow-2xl w-full">
              {/* Main title with improved visibility */}
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extralight mb-6 md:mb-12 text-center tracking-wider leading-tight text-white [text-shadow:0_2px_5px_rgba(0,0,0,0.3)]"
              >
                なぜいま民泊なのか？
              </motion.h2>
              <div className="w-16 md:w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto mb-8 md:mb-16 rounded-full shadow-lg" />

              <div className="space-y-16 md:space-y-24">
                {/* Why Hokkaido Section - Enhanced Visual */}
                <div className="space-y-4 md:space-y-8">
                  <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                    なぜ北海道なのか？
                  </h3>
                  
                  <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-center text-blue-50 leading-relaxed px-2 max-w-4xl mx-auto">
                    2025年、日本の観光市場はかつてない追い風を受けています。訪日外国人観光客の数は過去最高を記録し、旅のスタイルもまた大きく変化しました。
                  </p>
                  <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-center font-light px-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                    彼らが求めるのは"ホテルライク"な旅ではありません。
                  </p>
                </div>
                
                {/* Inbound Travel Data - Enhanced Visual */}
                <div className="mx-auto w-full max-w-4xl">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 md:mb-12 uppercase tracking-widest text-center text-blue-50 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
                    北海道へのインバウンド旅行者推移
                  </h3>
                  
                  {/* Stats cards with dramatically improved visibility */}
                  <div className="flex flex-col space-y-4 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 max-w-sm mx-auto md:max-w-none">
                    {/* 2024 - Current year highlighted */}
                    <div className="bg-gradient-to-br from-amber-600/30 to-amber-700/20 backdrop-blur-md p-4 md:p-8 rounded-xl border border-amber-400/30 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="flex flex-col items-center">
                        <span className="text-sm md:text-base uppercase tracking-wider text-amber-200 font-bold mb-2">2024</span>
                        <span className="text-2xl md:text-5xl font-semibold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                          3,687<span className="text-xs md:text-sm text-white">万人</span>
                        </span>
                        <div className="mt-3 md:mt-4 bg-amber-400 text-amber-900 text-sm md:text-base uppercase tracking-wider font-bold py-1 px-3 rounded-full shadow-md">
                          過去最高を記録
                        </div>
                      </div>
                    </div>
                    
                    {/* 2014 - Mid point with distinct color */}
                    <div className="bg-gradient-to-br from-blue-600/30 to-blue-700/20 backdrop-blur-md p-4 md:p-8 rounded-xl border border-blue-400/30 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="flex flex-col items-center">
                        <span className="text-sm md:text-lg uppercase tracking-wider text-blue-200 font-bold mb-2">2014</span>
                        <span className="text-2xl md:text-5xl font-semibold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                          1,341<span className="text-xs md:text-base text-white">万人</span>
                        </span>
                      </div>
                    </div>
                    
                    {/* 2004 - Earliest data point */}
                    <div className="bg-gradient-to-br from-teal-600/30 to-teal-700/20 backdrop-blur-md p-4 md:p-8 rounded-xl border border-teal-400/30 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="flex flex-col items-center">
                        <span className="text-sm md:text-lg uppercase tracking-wider text-teal-200 font-bold mb-2">2004</span>
                        <span className="text-2xl md:text-5xl font-semibold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                          614<span className="text-xs md:text-base text-white">万人</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content with improved typography and contrast */}
                <div className="space-y-8 md:space-y-12 px-2 max-w-4xl mx-auto">
                  <div className="text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed">
                    <p className="mb-4 md:mb-6 text-blue-50 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                      求められているのは、地域の暮らしに溶け込むような、リアルな日本体験。
                    </p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                      そしてその受け皿となるのが、民泊です。
                    </p>
                  </div>
                  
                  <div className="text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed">
                    <p className="mb-4 md:mb-6 text-blue-50 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                      特に、世界有数の観光地でありながら、未開拓の可能性に満ちた北海道は、
                    </p>
                    <p className="mb-4 md:mb-6 text-blue-50 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                      "プライベートな宿"と"非日常の自然"を両立できる、極めて稀有なエリア。
                    </p>
                  </div>
                  
                  <div className="text-base sm:text-lg md:text-2xl lg:text-3xl font-light leading-relaxed">
                    <p className="mb-4 md:mb-6 text-blue-50 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                      ホテルでは成しえない、ローカルの「静寂」や「温かさ」、
                    </p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                      その価値に、世界中の旅行者が魅了され始めています。
                    </p>
                  </div>
                </div>
              </div>
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
                  description: "企画設計から家具家電手配、行政対応、集客、清掃管理まで。あらゆる場面で確かなサポートを提供し、開業から運営まで伴走します。"
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
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gold-200 hover:border-gold-400 transition-all duration-300 h-full transform hover:-translate-y-2">
                    <feature.icon className="w-10 h-10 md:w-12 md:h-12 shrink-0 text-gold-500 mb-6 md:mb-8 transform group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-medium mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed font-light text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* オーナー募集バナー - PCのみ表示 */}
      <section className="hidden md:block py-20 bg-gold-50 border-y-4 border-gold-500">
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

      {/* CTA - PCのみ表示 */}
      <section className="hidden md:block py-32 md:py-40 text-center relative bg-white">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* --- FINAL CONCLUDING TEXT - ENHANCED VERSION --- */}
      <motion.section 
        className="py-32 md:py-48 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Remove background image and replace with pure CSS gradient design */}
        <div className="absolute inset-0 z-0">
          {/* Subtle gradient pattern */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-black to-gray-800 opacity-80"></div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-gold-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-gold-500/10 to-transparent"></div>
        </div>
        
        {/* Elegant gold borders */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* メインメッセージ部分 - シンプル化 */}
            <div className="space-y-24">
              {/* 導入部 - 大きなインパクトのあるメッセージ */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <div className="px-6 sm:px-10 py-16 sm:py-20 mx-auto max-w-4xl">
                  <div className="bg-gradient-to-br from-gray-900 to-black p-10 sm:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
                    {/* Single elegant border with perfect corners */}
                    <div className="absolute inset-0 rounded-3xl border border-gold-400/50"></div>
                    
                    {/* Simple diagonal accent line */}
                    <div className="absolute top-0 right-0 w-16 h-16">
                      <div className="w-20 h-0.5 bg-gold-500/50 absolute top-6 right-0 rotate-45 origin-right"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-16 h-16">
                      <div className="w-20 h-0.5 bg-gold-500/50 absolute bottom-6 left-0 rotate-45 origin-left"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="space-y-12">
                        {/* Elegant label */}
                        <div>
                          <span className="inline-block px-4 py-1.5 border-b border-gold-500/40 text-gold-300 uppercase tracking-[0.25em] text-xs">Vision Statement</span>
                        </div>
                        
                        {/* Company name with perfect contrast */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gold-300 to-amber-200 bg-clip-text text-transparent leading-none tracking-tight">CleanNest Hokkaido</span>
                            <span className="text-white text-3xl sm:text-4xl md:text-5xl">は</span>
                          </div>
                        </div>
                        
                        {/* Clear middle section with improved spacing */}
                        <div className="text-2xl sm:text-3xl md:text-4xl text-white leading-relaxed tracking-tight">
                          <span>北海道の</span>
                          <span className="font-medium text-gold-300 border-b border-gold-400 mx-1">不動産</span>
                          <span>と</span>
                          <span className="font-medium text-gold-300 border-b border-gold-400 mx-1">地域の未来</span>
                          <span>に、</span>
                        </div>
                        
                        {/* Impactful final statement */}
                        <div className="pt-2">
                          <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 bg-clip-text text-transparent leading-tight inline-block">
                            新しい価値を創造
                          </div>
                          <div className="text-white text-2xl sm:text-3xl md:text-4xl mt-2">
                            します。
                          </div>
                        </div>
                      </div>
                      
                      {/* Simple elegant divider */}
                      <div className="mt-12 w-24 h-px bg-gold-500/50 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* 価値提案部分 - シンプル化したカードデザイン */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative">
                  {[
                    {
                      icon: <Building2 className="w-10 h-10 md:w-12 md:h-12 shrink-0 text-gold-600 mb-6 md:mb-8" />,
                      title: "空間の再生",
                      text: "使われていない物件を、世界中の旅行者を迎える特別な体験空間へと再生します"
                    },
                    {
                      icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12 shrink-0 text-gold-600 mb-6 md:mb-8" />,
                      title: "価値の向上",
                      text: "オーナー様の資産価値を高め、持続可能な収益モデルを実現します"
                    },
                    {
                      icon: <MountainSnow className="w-10 h-10 md:w-12 md:h-12 shrink-0 text-gold-600 mb-6 md:mb-8" />,
                      title: "地域との共創",
                      text: "北海道の地域活性化に貢献し、インバウンド観光と地方創生をつなぎます"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="flex flex-col items-center text-center p-8 md:p-10 bg-white rounded-2xl border-2 border-gray-300 hover:border-gold-500 transition-all duration-300 shadow-xl"
                    >
                      {item.icon}
                      <h3 className="text-2xl font-bold text-gold-600 mb-4">{item.title}</h3>
                      <p className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* クライマックスメッセージ - シンプル化したデザイン */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-center py-16 px-6 bg-white rounded-3xl border-2 border-gray-300 shadow-xl"
              >
                <h3 className="text-3xl md:text-5xl font-medium leading-tight mb-10 [text-shadow:1px_1px_2px_rgba(0,0,0,0.1)]">
                  <span className="text-gold-600">
                    "観光"と"収益"と"地方創生"が調和する、<br />
                    新しい宿泊事業の未来。
                  </span>
                </h3>
                <div className="w-32 h-1 bg-gold-500 mx-auto mb-10"></div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
                  それが、<span className="text-gold-600">CleanNest Hokkaido</span> の想いです。
                </p>
              </motion.div>
              
              {/* 最終CTA部分 - PCのみ表示 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
                className="hidden md:flex flex-col items-center"
              >
                <p className="text-2xl text-gray-900 mb-10 max-w-2xl mx-auto text-center leading-relaxed font-medium bg-white/90 py-4 px-6 rounded-lg shadow-lg">
                  あなたの物件が秘めている可能性を、私たちと一緒に最大限に引き出しませんか？
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gold-500 hover:bg-gold-600 text-white text-2xl font-bold h-16 px-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center">
                    <span>私たちと一緒に始めましょう</span>
                    <div className="ml-3 w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </Link>
                </Button>
                <div className="mt-8">
                  <Link href="/services" className="bg-white/90 py-2 px-6 rounded-lg text-gold-600 hover:text-gold-700 transition-colors text-xl font-bold shadow-lg hover:shadow-xl">
                    サービス詳細を見る
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* --- FINAL CONCLUDING TEXT - END --- */}

    </div>
  )
} 