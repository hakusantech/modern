import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PropertyBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-luxury-900 to-luxury-800 border-b border-silver-800/50">
      <div className="container py-4 px-4 md:px-6">
        <Link href="/property-recruitment" className="flex items-center justify-between group">
          <div className="flex-1">
            <p className="text-sm md:text-base font-medium text-white">
              <span className="text-gold-500 mr-2 font-semibold">不動産オーナー様へ:</span>
              収益を最大化する新しい運用方法のご提案 — 空室リスクを減らし、安定した高収益を実現
            </p>
          </div>
          <div className="flex items-center ml-4 bg-silver-700/10 hover:bg-silver-700/20 transition-colors px-3 py-1.5 rounded-full">
            <span className="text-sm hidden sm:inline-block mr-2 text-gold-500 font-medium">詳細を見る</span>
            <ArrowRight className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  )
}

