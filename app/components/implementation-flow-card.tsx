import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function ImplementationFlowCard() {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-28%2019.36.34-piAq1dtJIRgMhVu1jmlwIMoykLqAkJ.png"
          alt="民泊・旅館運営の導入フロー - 簡単オンライン相談"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkgray-900/90 to-darkgray-800/50 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white">導入の流れ</h3>
          <p className="text-white/80">民泊・旅館運営を始める際のプロセスをご紹介</p>
        </div>
      </div>
      <CardContent className="pt-6 bg-darkgray-900 text-snow-100">
        <p className="text-snow-300">
          CleanNest Hokkaidoなら、民泊・旅館運営の複雑なプロセスをシンプルな3ステップで実現できます。
          無料相談から運営開始まで、スムーズな導入をサポートします。
        </p>
      </CardContent>
      <CardFooter className="bg-darkgray-900">
        <Button variant="outline" className="w-full text-snow-100 border-darkgray-700 hover:bg-darkgray-800" asChild>
          <Link href="/implementation-flow">
            <ArrowRight className="h-10 w-10 mx-auto text-ice-400" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

