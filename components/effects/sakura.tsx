"use client"

import { useEffect, useState } from 'react'

interface SakuraPetal {
  id: number
  left: number
  top: number
  size: number
  rotation: number
  delay: number
  duration: number
  opacity: number
  color: string
  blur: boolean
  type: number
  swingStrength: number // 風による揺れの強さ
  fallingSpeed: number // 落下速度の係数
}

// 桜の花びら画像パス
const petalImages = [
  '/images/sakura-petal1.png',
  '/images/sakura-petal2.png', 
  '/images/sakura-petal3.png',
]

export function SakuraEffect() {
  const [petals, setPetals] = useState<SakuraPetal[]>([])

  useEffect(() => {
    const petalCount = 60
    const newPetals: SakuraPetal[] = []
    // 自然なピンク色のバリエーション
    const colors = [
      '#ff8fa3', '#ff97a8', '#ffa1b0', '#ffaab8', '#ffb4c0', '#ffbdc8', '#ffc7d0'
    ]

    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100, // ランダムな水平位置 (0-100%)
        top: Math.random() * -15 - 5, // 画面外上部からスタート (-5% to -20%)
        size: Math.random() * 15 + 15, // ランダムなサイズ (15-30px)
        rotation: Math.random() * 360, // ランダムな初期回転
        delay: Math.random() * 20, // ランダムな遅延 (0-20s)
        duration: Math.random() * 15 + 10, // ランダムな期間 (10-25s)
        opacity: Math.random() * 0.4 + 0.5, // ランダムな透明度 (0.5-0.9)
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() > 0.8, // 20%の確率でぼかし効果を適用
        type: Math.floor(Math.random() * 3), // 3種類の花びら形状
        swingStrength: Math.random() * 20 + 10, // ランダムな揺れの強さ
        fallingSpeed: Math.random() * 0.4 + 0.8 // 落下速度の個体差
      })
    }

    setPetals(newPetals)
  }, [])

  // 花びらの形状を取得（CSSのborder-radius用）
  const getPetalShape = (type: number) => {
    switch(type) {
      case 0:
        return '70% 30% 70% 30% / 50% 50% 50% 50%';
      case 1:
        return '50% 50% 30% 70% / 50% 30% 70% 50%';
      case 2:
      default:
        return '60% 40% 50% 50% / 40% 50% 50% 60%';
    }
  }

  // 風による揺れアニメーションのCSS変数を設定
  const getSwingKeyframes = (petal: SakuraPetal) => {
    // より自然な動きのための複雑なキーフレームを計算
    const translateXValues = [
      petal.swingStrength, 
      -petal.swingStrength * 0.8, 
      petal.swingStrength * 0.6, 
      -petal.swingStrength * 0.4, 
      petal.swingStrength * 0.2
    ]

    return {
      '--swing-x1': `${translateXValues[0]}px`,
      '--swing-x2': `${translateXValues[1]}px`,
      '--swing-x3': `${translateXValues[2]}px`, 
      '--swing-x4': `${translateXValues[3]}px`,
      '--swing-x5': `${translateXValues[4]}px`,
      '--fall-duration': `${petal.duration}s`,
      '--fall-delay': `${petal.delay}s`,
    } as React.CSSProperties
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-enhanced-fall will-change-transform"
          style={{
            ...getSwingKeyframes(petal),
            left: `${petal.left}%`,
            top: `${petal.top}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 0.9}px`,
            transform: `rotate(${petal.rotation}deg)`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`
          }}
        >
          {/* CSSで作成した花びら */}
          <div 
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: petal.color,
              borderRadius: getPetalShape(petal.type),
              boxShadow: `0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.5)`,
              position: 'relative',
              overflow: 'hidden',
              transform: petal.blur ? 'rotate3d(1, 1, 1, 15deg)' : 'rotate3d(1, 0.5, 0, 10deg)',
              filter: petal.blur ? 'blur(1px)' : 'none',
              opacity: petal.opacity
            }}
          >
            {/* 花びらの中央部分 */}
            <div style={{
              position: 'absolute',
              width: '35%',
              height: '35%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: `${petal.color}dd`,
              borderRadius: '50%'
            }} />
            
            {/* ハイライト部分 */}
            <div style={{
              position: 'absolute',
              width: '15%',
              height: '15%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#ffffff80',
              borderRadius: '50%'
            }} />
          </div>
        </div>
      ))}
    </div>
  )
}