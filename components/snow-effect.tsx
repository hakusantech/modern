"use client"

import { useEffect, useRef } from "react"

interface SnowEffectProps {
  count?: number
  size?: number
  speed?: number
}

export function SnowEffect({ count = 150, size = 3, speed = 0.2 }: SnowEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // キャンバスサイズをウィンドウサイズに設定
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // 雪の粒子を作成
    const snowflakes: {
      x: number
      y: number
      radius: number
      speed: number
      wind: number
      opacity: number
    }[] = []

    for (let i = 0; i < count; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * size + 0.5,
        speed: Math.random() * speed + 0.05, // Slower minimum speed
        wind: Math.random() * 0.1 - 0.05, // Less wind effect
        opacity: Math.random() * 0.3 + 0.2, // More transparent (0.2-0.5 range)
      })
    }

    // アニメーションループ
    const animate = () => {
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

      requestAnimationFrame(animate)
    }

    animate()

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [count, size, speed])

  return <canvas ref={canvasRef} className="fixed inset-0 z-20 pointer-events-none" style={{ overflow: "hidden" }} />
}

