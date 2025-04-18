import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Clock, ExternalLink, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative text-gray-300 bg-black">
      {/* 装飾的な要素 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] opacity-50 pointer-events-none"></div> */}
      
      {/* 上部セクション：お問い合わせと地図 - 背景を白に */}
      <div className="relative py-20 bg-white text-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* お問い合わせ情報 - テキスト色調整 */}
              <div className="p-0">
                <div className="mb-8">
                  <div className="inline-block mb-4">
                    <div className="relative">
                      <span className="inline-block w-12 h-1 bg-gold-500"></span>
                      <span className="inline-block w-3 h-3 rounded-full bg-gold-500 -mt-1 ml-1"></span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">お問い合わせ</h2>
                  <p className="text-gray-600 max-w-md">
                    札幌の民泊運営でお悩みの方はお気軽にご相談ください。
                    専門スタッフが丁寧にサポートいたします。
                  </p>
                </div>
                
                <div className="space-y-5 mb-10">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gold-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">所在地</h3>
                      <p className="text-gray-700">〒062-0933 北海道札幌市豊平区平岸三条8-6-1 信和リッチ2階</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gold-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">メールアドレス</h3>
                      <a href="mailto:info@cleannest-hokkaido.com.jp" className="text-gray-700 hover:text-gold-700 transition-colors">
                        info@cleannest-hokkaido.com.jp
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gold-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">電話番号</h3>
                      <a href="tel:011-827-7441" className="text-gray-700 hover:text-gold-700 transition-colors">
                        011-827-7441
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gold-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">営業時間</h3>
                      <p className="text-gray-700">9:30〜18:30（土日除く）</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-6 h-auto rounded-lg font-medium text-lg shadow-lg shadow-gold-400/30 hover:shadow-xl hover:shadow-gold-400/40 transition-all duration-300" 
                  asChild
                >
                  <Link href="/contact">
                    お問い合わせフォーム
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* 地図 - そのまま */}
              <div className="relative h-[400px] lg:h-full rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E6%9C%AD%E5%B9%8C%E5%B8%82%E8%B1%8A%E5%B9%B3%E5%8C%BA%E5%B9%B3%E5%B2%B8%E4%B8%89%E6%9D%A18-6-1%20%E4%BF%A1%E5%92%8C%E3%83%AA%E3%83%83%E3%83%81&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10 grayscale contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 中間セクション：サイトマップ - テキスト色調整 */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* 会社情報 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Image 
                    src="/images/snowflake-logo.png" 
                    alt="CleanNest Hokkaido" 
                    width={40} 
                    height={40}
                  />
                  <span className="text-xl font-bold text-white">CleanNest<br/>Hokkaido</span>
                </div>
                <p className="text-white mb-6">
                  札幌を中心に民泊運営代行サービスを提供。
                  インバウンド対応に特化し、予約管理から清掃まで一括サポートします。
                </p>
              </div>
              
              {/* サービス */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-gold-500/30 pb-2">サービス</h3>
                <nav className="space-y-3">
                  <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                    CleanNest Hokkaidoとは
                  </Link>
                  <Link href="/services/minpaku" className="block text-gray-300 hover:text-white transition-colors">
                    民泊運営代行
                  </Link>
                </nav>
              </div>
              
              {/* 会社情報 */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-gold-500/30 pb-2">会社情報</h3>
                <nav className="space-y-3">
                  <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                    CleanNest Hokkaidoとは
                  </Link>
                  <Link href="/plans" className="block text-gray-300 hover:text-white transition-colors">
                    料金プラン
                  </Link>
                  <Link href="/owner-recruitment" className="block text-gray-300 hover:text-white transition-colors">
                    オーナー様募集
                  </Link>
                  <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                  <a 
                    href="https://www.mlit.go.jp/kankocho/minpaku/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 hover:text-white transition-colors pt-2 border-t border-gray-700/50 mt-3"
                  >
                    民泊制度総合サイト (観光庁)
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </nav>
              </div>
              
              {/* 関連情報 */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-gold-500/30 pb-2">関連情報</h3>
                <nav className="space-y-3">
                  <Link href="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                  <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors">
                    利用規約
                  </Link>
                  <a 
                    href="https://www.mlit.go.jp/kankocho/minpaku/overview/minpaku/law1.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    住宅宿泊事業法について
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  <a 
                    href="https://www.jnto.go.jp/ja/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    日本政府観光局
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* コピーライト - テキスト色調整 */}
      <div className="py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} 株式会社EHP All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

