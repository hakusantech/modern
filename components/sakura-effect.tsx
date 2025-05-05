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
}

export function SakuraEffect() {
  const [petals, setPetals] = useState<SakuraPetal[]>([])

  useEffect(() => {
    const petalCount = 60
    const newPetals: SakuraPetal[] = []
    // More vivid pink colors for better visibility
    const colors = [
      '#ff8fa3', '#ff97a8', '#ffa1b0', '#ffaab8', '#ffb4c0', '#ffbdc8', '#ffc7d0'
    ]

    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100, // Random horizontal position (0-100%)
        top: Math.random() * -15 - 5, // Start above viewport (-5% to -20%)
        size: Math.random() * 15 + 15, // Random size (15-30px)
        rotation: Math.random() * 360, // Random initial rotation
        delay: Math.random() * 20, // Random delay (0-20s)
        duration: Math.random() * 15 + 10, // Random duration (10-25s)
        opacity: Math.random() * 0.4 + 0.5, // Random opacity (0.5-0.9)
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() > 0.8, // 20% chance to have blur effect
        type: Math.floor(Math.random() * 3) // 3 different petal shapes
      })
    }

    setPetals(newPetals)
  }, [])

  // Function to get the specific shape for each petal type
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

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall will-change-transform"
          style={{
            left: `${petal.left}%`,
            top: `${petal.top}%`, // Start above the viewport
            width: `${petal.size}px`,
            height: `${petal.size * 0.9}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            transform: `rotate(${petal.rotation}deg)`,
            filter: petal.blur ? 'blur(1px)' : 'none'
          }}
        >
          <div 
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: petal.color,
              borderRadius: getPetalShape(petal.type),
              boxShadow: `0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.5)`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
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