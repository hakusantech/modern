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
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u1749683721_A_clean_modern_bedroom_in_Sapporo_Japan_with_larg_5eefb095-9f66-4d95-bf04-cf2971b31ed1_1%20%281%29-qMsHP7HvvG1grkPwDId5lNZZ7cXr9p.png"
          alt="札幌の民泊物件 - 雪景色が見える清潔でモダンな寝室"
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
          民泊・旅館運営を始める際のプロセスをご紹介。初回相談からサービス開始までの流れを
          シンプルな3ステップでスムーズに導入をサポートします。
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

