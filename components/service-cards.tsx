import Link from "next/link"
import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Info } from "lucide-react"
import { Building, FileText, Users, Wrench } from "lucide-react"

export function ServiceCards() {
  return (
    <div className="container py-12 md:py-16 lg:py-20 bg-white" id="services">
      <div className="text-center mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 inline-block relative pb-2">
          サービス一覧
          <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full"></span>
        </h2>
        <p className="text-gray-600 md:text-lg max-w-3xl mx-auto mt-4">
          CleanNest Hokkaidoでは、民泊・旅館運営に関する様々なサービスを提供しています。
          お客様のニーズに合わせて、最適なサービスをご提案いたします。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 旅館運営代行 - 一時的に非表示
        <Card className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-yellow-300">
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/traditional-ryokan.png" alt="旅館運営代行" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="rounded-full bg-yellow-100 p-2 inline-flex">
                <Building className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-gray-900">旅館運営代行</CardTitle>
            <CardDescription className="text-gray-600">
              伝統的な旅館の運営をトータルサポート。予約管理、接客対応、清掃、設備管理、料理の手配まで、
              旅館運営に必要なすべてのサービスを提供します。
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full group text-gray-700 border-gray-300 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700"
              asChild
            >
              <Link href="/services/ryokan-management">
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        */}

        {/* 民泊運営代行 */}
        <Card className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-yellow-300">
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/modern-traveler.png" alt="民泊運営代行" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="rounded-full bg-yellow-100 p-2 inline-flex">
                <Building className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-gray-900">民泊運営代行</CardTitle>
            <CardDescription className="text-gray-600">
              Airbnbなどの民泊物件の運営を完全代行。リスティング作成、予約管理、ゲスト対応、清掃、
              メンテナンスまで、民泊運営に必要なすべてのサービスを提供します。
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full group text-gray-700 border-gray-300 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700"
              asChild
            >
              <Link href="/services">
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* 民泊清掃 */}
        <Card className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-yellow-300">
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/cleaning-service.png" alt="民泊清掃" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="rounded-full bg-yellow-100 p-2 inline-flex">
                <Wrench className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-gray-900">民泊清掃</CardTitle>
            <CardDescription className="text-gray-600">
              プロのスタッフによる徹底的な清掃サービスを提供します。チェックアウト後の清掃からリネン交換、
              アメニティの補充まで、ゲストに最高の印象を与える清掃サービスを提供します。
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full group text-gray-700 border-gray-300 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700"
              asChild
            >
              <Link href="/services/cleaning">
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* 各種申請許可サポート */}
        <Card className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-yellow-300">
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/permit-application-support.png" alt="各種申請許可サポート" fill className="object-cover transition-transform duration-300 group-hover:scale-105"/>
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="rounded-full bg-yellow-100 p-2 inline-flex">
                <FileText className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-gray-900">各種申請許可サポート</CardTitle>
            <CardDescription className="text-gray-600">
              民泊営業に必要な各種許認可の申請をサポート。住宅宿泊事業法（民泊新法）の届出、旅館業法の許可申請など、
              複雑な手続きをサポートします。
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full group text-gray-700 border-gray-300 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700"
              asChild
            >
              <Link href="/services/permits">
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* プラン説明 */}
        <Card className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-yellow-300">
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/consultation-couple.png" alt="プラン説明" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="rounded-full bg-yellow-100 p-2 inline-flex">
                <Users className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-gray-900">プラン説明</CardTitle>
            <CardDescription className="text-gray-600">
              お客様のニーズに合わせた最適なプランをご提案します。
              ファミリー・エクスペリエンス・プランやワーケーション・スマート・プランなど、
              目的に応じたプランをご用意しています。
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full group text-gray-700 border-gray-300 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700"
              asChild
            >
              <Link href="/plans">
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* 導入の流れボタン - 視認性を高めたバージョン */}
      <div className="mt-16 mb-10 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-primary-600 to-primary-400 p-1 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="bg-white rounded-md p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">導入の流れ</h3>
            <p className="text-gray-600 mb-5">
              民泊・旅館運営を始める際のプロセスをご紹介。初回相談からサービス開始までの流れを
              シンプルな3ステップでスムーズに導入をサポートします。
            </p>
            <Button
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 py-6 h-auto transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/implementation-flow">
                <Info className="mr-3 h-6 w-6" />
                導入の流れを見る
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white" asChild>
          <Link href="/services">
            すべてのサービスを見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

