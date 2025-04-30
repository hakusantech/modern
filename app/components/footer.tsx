import Link from "next/link"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

export function Footer() {
  // フッターリンク構造
  const serviceLinks = [
    { href: "/about", label: "CleanNest Hokkaidoとは" },
    { href: "/services", label: "民泊代行サービス一覧" },
    { href: "/contact?subject=取材申込み", label: "取材申込みはこちら" },
  ];

  const companyLinks = [
    { href: "#company-hp", label: "運営会社（公式HP）", isExternal: true }, // 仮のリンク
    { href: "/about#company-profile", label: "会社概要" }, // /about 内の適切なIDに要変更
    { href: "/contact", label: "お問い合わせ" },
  ];

  const relatedLinks = [
    { href: "#hokkaido-portal", label: "北海道民泊ポータルサイト", isExternal: true }, // 仮の外部リンク
    { href: "#minpaku-portal", label: "民泊制度ポータルサイト", isExternal: true }, // 仮の外部リンク
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1 space-y-4">
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
            </p>
          </div>

          {/* Service Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-200">サービス情報</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-200">運営会社情報</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-gold-400 transition-colors inline-flex items-center"
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                    {link.isExternal && <ExternalLink className="ml-1.5 h-3 w-3 text-gray-400" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-200">関連情報</h3>
            <ul className="space-y-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-gold-400 transition-colors inline-flex items-center"
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                    {link.isExternal && <ExternalLink className="ml-1.5 h-3 w-3 text-gray-400" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-400">
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

