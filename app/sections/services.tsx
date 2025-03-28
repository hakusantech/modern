import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "プラン説明",
    description: "お客様のニーズに合わせた最適なプランをご提案します。",
    image: "/placeholder.svg?height=400&width=600",
    href: "/plans",
  },
  {
    title: "導入の流れ",
    description: "初回相談からサービス開始までの流れをご説明します。",
    image: "/placeholder.svg?height=400&width=600",
    href: "/implementation-flow",
  },
]

export function ServicesSection() {
  return (
    <section className="relative w-full">
      <div className="grid lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="bg-[#1a365d] text-white p-8 lg:p-16 xl:p-24">
          <div className="max-w-xl">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              Service<span className="text-orange-500">.</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-2xl sm:text-3xl font-medium leading-relaxed">安心の徹底サポート</p>
              <p className="text-gray-300">
                最新のテクノロジーと専門知識を駆使した最高級のサービスで、お客様の旅館・民泊ビジネスを最初から最後までトータルサポートいたします。予約管理システムの導入から、清掃スタッフの手配、ゲスト対応まで、すべてのプロセスを最高品質で提供し、オーナー様の収益最大化と負担軽減を実現します。
              </p>
            </div>
            <Button
              variant="outline"
              className="group text-white border-white hover:text-white hover:bg-white/10"
              asChild
            >
              <Link href="/services">
                View More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Column - Service Grid */}
        <div className="grid grid-cols-1 grid-rows-2 h-full">
          {services.map((service, index) => (
            <Link key={service.title} href={service.href} className="group relative h-full overflow-hidden bg-gray-100">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-xl">{service.title}</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

