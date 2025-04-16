"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// 1. SnowEffectコンポーネントをインポートします
import { SnowEffect } from "./snow-effect"

// スライドのデータを更新
const slides = [
  {
    id: 1,
    image: "/images/sapporo-clock-tower.jpeg",
    title: "インバウンド専門民泊運営代行",
    subtitle: "CleanNest Hokkaido",
    description: "北海道No.1を目指す",
    cta: {
      text: "詳しく見る",
      url: "/services",
    },
  },
  {
    id: 2,
    image: "/images/modern-traveler.png",
    title: "インバウンド専門民泊運営代行",
    subtitle: "CleanNest Hokkaido",
    description: "北海道No.1を目指す",
    cta: {
      text: "詳しく見る",
      url: "/property-introduction",
    },
  },
  {
    id: 3,
    image: "/images/sapporo-tv-tower-illumination.jpg",
    title: "インバウンド専門民泊運営代行",
    subtitle: "CleanNest Hokkaido",
    description: "北海道No.1を目指す",
    cta: {
      text: "詳しく見る",
      url: "/property-introduction",
    },
  },
]

const SLIDE_INTERVAL = 6000 // 6秒

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalSlides = slides.length

  // 自動スライド切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, SLIDE_INTERVAL)

    return () => clearInterval(interval)
  }, [currentSlide])

  // 次のスライドへ
  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning, totalSlides])

  // 前のスライドへ
  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning, totalSlides])

  // インジケーターをクリックしてスライド移動
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return

      setIsTransitioning(true)
      setCurrentSlide(index)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    },
    [isTransitioning, currentSlide],
  )

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* スライド */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {/* 背景画像 */}
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`札幌の民泊代行サービス - ${slide.title}。CleanNest Hokkaidoは札幌エリアの民泊運営を完全サポート。`}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-paleblue-900/30" />
            <SnowEffect />
          </div>

          {/* コンテンツ */}
          <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl">
              <div className="mb-4">
                <span className="hero-subtitle font-mplus">{slide.subtitle}</span>
              </div>
              <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">{slide.title}</h1>
              <p className="text-white text-xl md:text-2xl mt-6 font-light font-sans">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* ナビゲーションボタン */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-paleblue-800 p-2 rounded-full transition-colors border border-paleblue-100 hover:border-paleblue-300 w-10 h-10 flex items-center justify-center"
        aria-label="前のスライド"
      >
        <span className="sr-only">前へ</span>
        <span className="block w-2 h-2 border-l-2 border-b-2 border-current transform -rotate-45"></span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-paleblue-800 p-2 rounded-full transition-colors border border-paleblue-100 hover:border-paleblue-300 w-10 h-10 flex items-center justify-center"
        aria-label="次のスライド"
      >
        <span className="sr-only">次へ</span>
        <span className="block w-2 h-2 border-r-2 border-t-2 border-current transform -rotate-45"></span>
      </button>

      {/* インジケーターとプログレスバー */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentSlide ? "bg-white w-8" : "bg-paleblue-200 hover:bg-paleblue-300",
              )}
              aria-label={`スライド ${index + 1} へ移動`}
            />

            {index === currentSlide && (
              <div
                className="absolute bottom-0 left-0 h-full bg-gold-600 rounded-full"
                style={{
                  width: "0%",
                  animation: `progressAnimation ${SLIDE_INTERVAL}ms linear forwards`,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* 右下のプロパティバナー - 視認性を向上 */}
      <div className="absolute bottom-0 right-0 z-30 bg-darkgray-900/90 backdrop-blur-sm text-white p-4 md:p-6 max-w-xs md:max-w-md border-t border-l border-gold-600/30">
        <div className="flex flex-col">
          <div className="flex-1">
            <p className="text-sm md:text-base font-medium text-white">
              <span className="text-gold-500 mr-2 font-bold">札幌の不動産オーナー様へ:</span>
              <span className="font-bold text-white">インバウンド対応で収益最大化</span>
            </p>
            <p className="text-xs md:text-sm text-white mt-2">札幌の民泊代行サービスで安定した高収益を実現</p>
          </div>
        </div>
      </div>

      {/* 雪のエフェクト - パラメータを調整 */}
      <SnowEffect count={120} size={2.5} speed={0.15} />
    </div>
  )
}

