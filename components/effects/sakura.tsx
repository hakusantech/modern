"use client"

import { useEffect, useState, useRef, useCallback } from 'react'
import Image from 'next/image'

interface SakuraPetal {
  id: number
  left: number
  top: number
  size: number
  rotation: number
  delay: number
  duration: number
  opacity: number
  blur: boolean
  type: number
  swingStrength: number // 風による揺れの強さ
  fallingSpeed: number // 落下速度の係数
  rotationSpeed: number // 回転速度の係数
  scaleVariation: number // 大きさの変動係数
}

// 桜の花びら画像パス
const petalImages = [
  '/ChatGPT Image 2025年5月9日 03_16_11.png',
]

export function SakuraEffect({ 
  density = 25, // 60から25に減らす 
  zIndex = 30,
  minSize = 15, 
  maxSize = 35,
  disabled = false // アニメーション無効化オプション
}: { 
  density?: number, 
  zIndex?: number,
  minSize?: number,
  maxSize?: number,
  disabled?: boolean
}) {
  // デバイスパフォーマンスに基づく最適化
  const [optimizedDensity, setOptimizedDensity] = useState(density)
  const [petals, setPetals] = useState<SakuraPetal[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  
  // モバイルデバイスを検出して最適化
  useEffect(() => {
    // デバイスパフォーマンスに基づいて花びらの数を調整
    const isMobile = window.innerWidth < 768
    const isLowPerfDevice = window.navigator.hardwareConcurrency < 4
    
    if (isMobile && isLowPerfDevice) {
      // 低性能モバイル: 花びらを大幅に減らす
      setOptimizedDensity(Math.min(12, density))
    } else if (isMobile) {
      // モバイル: 花びらを減らす
      setOptimizedDensity(Math.min(18, density))
    } else if (isLowPerfDevice) {
      // 低性能デスクトップ: 花びらを少し減らす
      setOptimizedDensity(Math.min(20, density))
    } else {
      // 高性能デスクトップ: そのまま
      setOptimizedDensity(density)
    }
  }, [density])

  useEffect(() => {
    // アニメーションが無効化されている場合はスキップ
    if (disabled) {
      setPetals([])
      return
    }
    
    // コンテナのサイズを取得
    if (containerRef.current) {
      const updateSize = () => {
        setContainerWidth(window.innerWidth)
        setContainerHeight(window.innerHeight)
      }
      
      // 初期化時にサイズを設定
      updateSize()
      
      // スロットリングを適用したリサイズハンドラー
      let resizeTimeout: NodeJS.Timeout
      const throttledResize = () => {
        if (resizeTimeout) clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(updateSize, 200)
      }
      
      // リサイズイベントでサイズを更新（スロットリング適用）
      window.addEventListener('resize', throttledResize)
      
      return () => {
        window.removeEventListener('resize', throttledResize)
        if (resizeTimeout) clearTimeout(resizeTimeout)
      }
    }
  }, [disabled])

  useEffect(() => {
    // アニメーションが無効化されている場合はスキップ
    if (disabled) {
      setPetals([])
      return
    }
    
    if (containerWidth === 0 || containerHeight === 0) return
    
    const petalCount = optimizedDensity
    const newPetals: SakuraPetal[] = []

    for (let i = 0; i < petalCount; i++) {
      // 画面のサイズに基づいて花びらのサイズを調整
      const sizeFactor = Math.min(containerWidth, containerHeight) / 1000
      const baseSize = Math.random() * (maxSize - minSize) + minSize
      const size = baseSize * Math.max(1, sizeFactor)
      
      // サイズに応じた落下スピードの調整（小さい花びらは少し速く落ちる）
      const speedAdjustment = (maxSize - size) / maxSize * 0.3 + 0.7
      
      newPetals.push({
        id: i,
        left: Math.random() * 100, // ランダムな水平位置 (0-100%)
        top: Math.random() * -50 - 10, // 画面外上部からスタート (-10% to -60%)
        size: size,
        rotation: Math.random() * 360, // ランダムな初期回転
        delay: Math.random() * 20, // ランダムな遅延 (0-20s)
        duration: (Math.random() * 15 + 20) / speedAdjustment, // ランダムな期間 (20-35s)
        opacity: Math.random() * 0.3 + 0.6, // ランダムな透明度 (0.6-0.9)
        blur: Math.random() > 0.8, // 20%の確率でぼかし効果を適用
        type: 0, // 新しい花びら画像を使用
        swingStrength: Math.random() * 30 + 10, // ランダムな揺れの強さ
        fallingSpeed: Math.random() * 0.4 + 0.8, // 落下速度の個体差
        rotationSpeed: (Math.random() * 2 - 1) * 360, // 回転速度 (-360〜360度)
        scaleVariation: Math.random() * 0.2 + 0.9 // 大きさの変動 (0.9〜1.1)
      })
    }

    setPetals(newPetals)
  }, [containerWidth, containerHeight, optimizedDensity, minSize, maxSize, disabled])

  // パフォーマンス最適化: メモ化した風による揺れアニメーションのCSS変数を設定
  const getAnimationStyles = useCallback((petal: SakuraPetal) => {
    // より自然な動きのための複雑なキーフレームを計算
    const baseAmplitude = petal.swingStrength
    const translateXValues = [
      baseAmplitude, 
      -baseAmplitude * 0.8, 
      baseAmplitude * 0.6, 
      -baseAmplitude * 0.4, 
      baseAmplitude * 0, 
      -baseAmplitude * 0.2,
      baseAmplitude * 0.4,
      -baseAmplitude * 0.6,
      baseAmplitude * 0.8
    ]

    return {
      '--swing-x1': `${translateXValues[0]}px`,
      '--swing-x2': `${translateXValues[1]}px`,
      '--swing-x3': `${translateXValues[2]}px`, 
      '--swing-x4': `${translateXValues[3]}px`,
      '--swing-x5': `${translateXValues[4]}px`,
      '--swing-x6': `${translateXValues[5]}px`,
      '--swing-x7': `${translateXValues[6]}px`,
      '--swing-x8': `${translateXValues[7]}px`,
      '--swing-x9': `${translateXValues[8]}px`,
      '--fall-duration': `${petal.duration}s`,
      '--fall-delay': `${petal.delay}s`,
      '--rotation-speed': `${petal.rotationSpeed}deg`,
      '--scale-variation': `${petal.scaleVariation}`
    } as React.CSSProperties
  }, [])

  // 条件付きレンダリングのためのチェック
  if (disabled || petals.length === 0) {
    return null
  }

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex }}
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-sakura-fall will-change-transform"
          style={{
            ...getAnimationStyles(petal),
            left: `${petal.left}%`,
            top: `${petal.top}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            opacity: petal.opacity,
            filter: petal.blur ? 'blur(0.5px)' : 'none',
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`
          }}
        >
          {/* 最適化された桜の花びら画像 */}
          <div 
            className="relative w-full h-full transform-gpu"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
            }}
          >
            <Image
              src={petalImages[petal.type]}
              alt="桜の花びら"
              fill
              sizes={`${Math.ceil(petal.size)}px`}
              className="object-contain"
              style={{ 
                transform: petal.blur ? 'rotate3d(1, 1, 1, 15deg)' : 'rotate3d(1, 0.5, 0, 10deg)'
              }}
              priority={petal.delay < 2} // 最初に表示される花びらのみ優先的に読み込む
              loading={petal.delay < 5 ? "eager" : "lazy"} // 遅延読み込みを適用
              unoptimized={false} // Next.jsの画像最適化を使用
            />
          </div>
        </div>
      ))}
    </div>
  )
}