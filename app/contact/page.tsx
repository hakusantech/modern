import type { Metadata } from "next"
import { ContactForm } from "@/app/components/contact-form"

export const metadata: Metadata = {
  title: "お問い合わせ | CleanNest Hokkaido",
  description:
    "北海道の民泊・旅館運営代行サービス「CleanNest Hokkaido」へのお問い合わせページです。サービスに関するご質問、お見積もり依頼など、お気軽にお問い合わせください。",
}

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-darkgray-950">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">お問い合わせ</h1>
          <p className="text-snow-300 max-w-2xl mx-auto">
            CleanNest Hokkaidoへのお問い合わせは、以下のフォームからお願いいたします。
            サービスに関するご質問、お見積もり依頼など、お気軽にお問い合わせください。
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  )
}

