import Link from "next/link"
import { Home, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-silver-300" />
              <span className="text-xl font-bold">
                <span className="text-white">CleanNest</span>
                <span className="text-silver-300">Hokkaido</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              北海道で旅館・民泊を運営されているオーナー様に代わって、運営代行を一気通貫でサポートします。
              最高品質のサービスで、お客様の大切な資産を最大限に活用します。
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-silver-300">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ryokan-management"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  旅館運営代行
                </Link>
              </li>
              <li>
                <Link
                  href="/services/minpaku-management"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  民泊運営代行
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cleaning"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  民泊清掃
                </Link>
              </li>
              <li>
                <Link
                  href="/services/permits"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  各種申請許可サポート
                </Link>
              </li>
              <li>
                <Link
                  href="/implementation-flow"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  導入の流れ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-silver-300">お問い合わせ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-silver-300" />
                <span className="text-sm text-muted-foreground">000-0000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-silver-300" />
                <span className="text-sm text-muted-foreground">info@cleannest-hokkaido.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-silver-300 mt-0.5" />
                <span className="text-sm text-muted-foreground">北海道札幌市〇〇区〇〇町0-0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 py-6">
        <div className="container flex flex-col items-center justify-center md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CleanNest Hokkaido. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-white transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

