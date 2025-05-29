"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface SnowEffectProps {
  count?: number
  size?: number
  speed?: number
  disabled?: boolean // アニメーション無効化オプション
}

export function SnowEffect({ 
  count = 80, // 150から80に削減
  size = 3, 
  speed = 0.2,
  disabled = false 
}: SnowEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [optimizedCount, setOptimizedCount] = useState(count)
  const lastFrameTimeRef = useRef<number>(0)
  const targetFPS = 30 // 目標フレームレート

  // デバイス性能に基づくパーティクル数の最適化
  useEffect(() => {
    if (disabled) return

    // デバイス性能に基づいてパーティクル数を調整
    const isMobile = window.innerWidth < 768
    const isLowPerfDevice = window.navigator.hardwareConcurrency < 4
    
    if (isMobile && isLowPerfDevice) {
      // 低性能モバイル: パーティクルを大幅に減らす
      setOptimizedCount(Math.min(30, count))
    } else if (isMobile) {
      // モバイル: パーティクルを減らす
      setOptimizedCount(Math.min(50, count))
    } else if (isLowPerfDevice) {
      // 低性能デスクトップ: パーティクルを少し減らす
      setOptimizedCount(Math.min(60, count))
    } else {
      // 高性能デスクトップ: そのまま
      setOptimizedCount(count)
    }
  }, [count, disabled])

  // メイン描画関数をメモ化
  const drawSnowflakes = useCallback((
    ctx: CanvasRenderingContext2D, 
    canvas: HTMLCanvasElement,
    snowflakes: {
      x: number
      y: number
      radius: number
      speed: number
      wind: number
      opacity: number
    }[]
  ) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    snowflakes.forEach((snowflake) => {
      ctx.beginPath()
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`
      ctx.fill()

      // 雪を下に移動
      snowflake.y += snowflake.speed
      snowflake.x += snowflake.wind

      // 画面外に出たら上に戻す
      if (snowflake.y > canvas.height) {
        snowflake.y = -5
        snowflake.x = Math.random() * canvas.width
      }

      // 左右の画面外に出たら反対側から出現
      if (snowflake.x > canvas.width) {
        snowflake.x = 0
      } else if (snowflake.x < 0) {
        snowflake.x = canvas.width
      }
    })
  }, [])

  useEffect(() => {
    if (disabled) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // キャンバスサイズをウィンドウサイズに設定（スロットリング適用）
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    
    // スロットリングを適用したリサイズハンドラー
    let resizeTimeout: NodeJS.Timeout
    const throttledResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
        // リサイズ時に雪の位置を再調整
        snowflakes.forEach((snowflake) => {
          if (snowflake.x > canvas.width) {
            snowflake.x = Math.random() * canvas.width
          }
        })
      }, 200)
    }
    
    window.addEventListener("resize", throttledResize)

    // 雪の粒子を作成
    const snowflakes: {
      x: number
      y: number
      radius: number
      speed: number
      wind: number
      opacity: number
    }[] = []

    for (let i = 0; i < optimizedCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * size + 0.5,
        speed: Math.random() * speed + 0.05, // Slower minimum speed
        wind: Math.random() * 0.1 - 0.05, // Less wind effect
        opacity: Math.random() * 0.3 + 0.2, // More transparent (0.2-0.5 range)
      })
    }

    // 最適化されたアニメーションループ（フレームレート制限付き）
    const animate = (timestamp: number) => {
      if (!canvas) return
      
      // フレームレート制限
      const elapsed = timestamp - lastFrameTimeRef.current
      if (elapsed > 1000 / targetFPS) { // 指定FPSに基づく間隔
        lastFrameTimeRef.current = timestamp - (elapsed % (1000 / targetFPS))
        
        // 雪を描画
        drawSnowflakes(ctx, canvas, snowflakes)
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", throttledResize)
      if (resizeTimeout) clearTimeout(resizeTimeout)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [optimizedCount, size, speed, disabled, drawSnowflakes])

  // 無効化されている場合は何もレンダリングしない
  if (disabled) {
    return null
  }

  return <canvas ref={canvasRef} className="fixed inset-0 z-20 pointer-events-none" style={{ overflow: "hidden" }} />
}

