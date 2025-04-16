"use client"

export function BackgroundEffects() {
  return (
    <>
      {/* ゴールドグラデーションの光の効果 */}
      <div className="fixed inset-0 bg-base-950 z-[-2]"></div>
      <div className="fixed top-0 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] z-[-1]"></div>
      <div className="fixed bottom-0 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] z-[-1]"></div>
    </>
  )
} 