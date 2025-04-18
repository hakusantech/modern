import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 group">
                <Logo size={24} onDark={true} />
                <div className="text-xl font-bold">
                  <span className="text-gray-100 group-hover:text-gray-300 transition-colors">CleanNest</span>
                  <span className="text-gold-400 group-hover:text-gold-300 transition-colors">Hokkaido</span>
                </div>
              </Link>
            </div>
            <p className="text-sm text-gray-300">
              北海道で旅館・民泊を運営されているオーナー様に代わって、運営代行を一気通貫でサポートします。
              最高品質のサービスで、お客様の大切な資産を最大限に活用します。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ryokan-management"
                  className="text-sm text-gray-300 hover:text-gold-400 transition-colors"
                >
                  旅館運営代行
                </Link>
              </li>
              <li>
                <Link
                  href="/services/minpaku-management"
                  className="text-sm text-gray-300 hover:text-gold-400 transition-colors"
                >
                  民泊運営代行
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cleaning"
                  className="text-sm text-gray-300 hover:text-gold-400 transition-colors"
                >
                  民泊清掃
                </Link>
              </li>
              <li>
                <Link
                  href="/services/permits"
                  className="text-sm text-gray-300 hover:text-gold-400 transition-colors"
                >
                  各種申請許可サポート
                </Link>
              </li>
              <li>
                <Link
                  href="/implementation-flow"
                  className="text-sm text-gray-300 hover:text-gold-400 transition-colors"
                >
                  導入の流れ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">お問い合わせ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">000-0000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@cleannest-hokkaido.jp</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">北海道札幌市〇〇区〇〇町0-0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CleanNest Hokkaido. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-gold-400 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-gold-400 transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

