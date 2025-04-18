import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Clock, ExternalLink, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative text-text-light overflow-hidden bg-gray-900">
      {/* 装飾的な要素 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] opacity-50 pointer-events-none"></div> */}
      
      {/* 上部セクション：お問い合わせと地図 */}
      <div className="relative pt-20 pb-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* お問い合わせ情報 - 背景白に変更 */}
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg text-gray-800">
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
              
              {/* 地図 - URL更新 */} 
              <div className="relative h-[400px] lg:h-full rounded-xl overflow-hidden shadow-xl border border-gray-700">
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
      
      {/* 中間セクション：サイトマップ */}
      <div className="py-16 bg-gray-900">
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
                    className="drop-shadow-[0_0_4px_rgba(212,175,55,0.3)]"
                  />
                  <span className="text-xl font-bold text-white">CleanNest<br/>Hokkaido</span>
                </div>
                <p className="text-text-light/70 mb-6">
                  札幌を中心に民泊運営代行サービスを提供。
                  インバウンド対応に特化し、予約管理から清掃まで一括サポートします。
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-base-400 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-base-400 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-base-400 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* サービス */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-primary-500/30 pb-2">サービス</h3>
                <nav className="space-y-3">
                  <Link href="/services" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    サービス一覧
                  </Link>
                  <Link href="/implementation-flow" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    導入の流れ
                  </Link>
                  <Link href="/services/cleaning" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    民泊清掃代行
                  </Link>
                  <Link href="/services/permits" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    各種申請許可
                  </Link>
                </nav>
              </div>
              
              {/* 会社情報 */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-primary-500/30 pb-2">会社情報</h3>
                <nav className="space-y-3">
                  <Link href="/about" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    CleanNest Hokkaidoとは
                  </Link>
                  <Link href="/plans" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    料金プラン
                  </Link>
                  <Link href="/owner-recruitment" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    オーナー様募集
                  </Link>
                  <Link href="/contact" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    お問い合わせ
                  </Link>
                </nav>
              </div>
              
              {/* 関連情報 */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-primary-500/30 pb-2">関連情報</h3>
                <nav className="space-y-3">
                  <Link href="/privacy-policy" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    プライバシーポリシー
                  </Link>
                  <Link href="/terms" className="block text-text-light/70 hover:text-primary-300 transition-colors">
                    利用規約
                  </Link>
                  <a 
                    href="https://www.mlit.go.jp/kankocho/minpaku/overview/minpaku/law1.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-text-light/70 hover:text-primary-300 transition-colors"
                  >
                    住宅宿泊事業法について
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  <a 
                    href="https://www.jnto.go.jp/ja/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-text-light/70 hover:text-primary-300 transition-colors"
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
      
      {/* コピーライト */}
      <div className="py-6 bg-black text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-text-light/50">
            &copy; {new Date().getFullYear()} 株式会社EHP All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

