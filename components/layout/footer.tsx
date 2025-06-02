import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Clock, ExternalLink, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative bg-white">
      {/* 装飾的な要素 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] opacity-50 pointer-events-none"></div> */}
      
      {/* 上部セクション：お問い合わせ情報 - 二段構成に変更 */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-gray-50 text-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* タイトル部分 */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block mb-4">
                <div className="relative">
                  <span className="inline-block w-8 sm:w-12 h-1 bg-gold-500"></span>
                  <span className="inline-block w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gold-500 -mt-1 ml-1"></span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">お問い合わせ</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                札幌の民泊運営でお悩みの方はお気軽にご相談ください。<br className="hidden sm:block" />
                専門スタッフが丁寧にサポートいたします。
              </p>
            </div>
            
            {/* 二段構成のお問い合わせ情報 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
              {/* 左側：基本情報 */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">所在地</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">〒062-0933 北海道札幌市豊平区平岸三条8-6-1 信和リッチ2階</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">メールアドレス</h3>
                    <a href="mailto:info@cleannest-hokkaido.jp" className="text-gold-600 hover:text-gold-700 transition-colors text-sm sm:text-base md:text-lg font-medium underline break-all">
                      info@cleannest-hokkaido.jp
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 右側：連絡先 */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">電話番号</h3>
                    <a
                      href="tel:011-827-7441"
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-gold-600 hover:text-gold-700 transition-colors tracking-wider underline btn-mobile block"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      011-827-7441
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-gold-600 mt-1 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">営業時間</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">9:30〜18:30（土日除く）</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 駐車場セクション（大きめ・目立つ） */}
            <div className="my-6 sm:my-8 p-4 sm:p-6 rounded-xl border-2 border-gold-300 bg-gold-50 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gold-700 mb-4 sm:mb-6 text-center">駐車場・アクセス情報</h3>
              <p className="text-sm sm:text-base text-gold-800 mb-4 sm:mb-6 text-center">駐車場は「4番」をご利用ください。</p>
              
              {/* モバイル表示用のテキスト情報 */}
              <div className="md:hidden p-4 bg-white rounded-lg border border-gold-200 mb-4">
                <p className="text-gold-800 text-sm leading-relaxed">
                  <strong>駐車場案内:</strong> 駐車場は「4番」にお停めください。詳細な位置情報は下記のGoogleマップでご確認いただけます。
                </p>
              </div>

              {/* 2x2グリッドレイアウト（モバイルは縦一列） */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* 左上：Google マップ */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gold-700 mb-2 sm:mb-3">Google マップ</h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://maps.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E6%9C%AD%E5%B9%8C%E5%B8%82%E8%B1%8A%E5%B9%B3%E5%8C%BA%E5%B9%B3%E5%B2%B8%E4%B8%89%E6%9D%A18-6-1%20%E4%BF%A1%E5%92%8C%E3%83%AA%E3%83%83%E3%83%81&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: '8px' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* 右上：会社外観 */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gold-700 mb-2 sm:mb-3">会社外観</h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                    <Image
                      src="/company-exterior.webp"
                      alt="CleanNest Hokkaido 会社外観"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 左下：経路図・アクセスマップ */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gold-700 mb-2 sm:mb-3">経路図・アクセスマップ</h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/images/スクリーンショット 2025-06-02 18.24.58.png"
                      alt="駐車場までの経路図・アクセスマップ"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 右下：駐車場（ストリートビュー） */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gold-700 mb-2 sm:mb-3">駐車場（ストリートビュー）</h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1747225336270!6m8!1m7!1s7sA0RdTM1yAk4l47txq-9w!2m2!1d43.03411164587536!2d141.3678601232641!3f177.33!4f-6.359999999999999!5f0.4000000000000002"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: '8px' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* お問い合わせボタン */}
            <div className="text-center">
              <Button 
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 sm:px-12 py-4 sm:py-6 h-auto rounded-lg font-medium text-base sm:text-lg md:text-xl shadow-lg shadow-gold-400/30 hover:shadow-xl hover:shadow-gold-400/40 transition-all duration-300 btn-mobile" 
                asChild
              >
                <Link href="/contact">
                  お問い合わせフォーム
                  <ArrowUpRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 中間セクション：サイトマップ - 再構成 */}
      <div className="py-12 sm:py-16 border-t border-gray-200 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
              {/* ロゴ */}
              <div className="col-span-1 sm:col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Image 
                    src="/images/snowflake-logo.png" 
                    alt="CleanNest Hokkaido" 
                    width={32} 
                    height={32}
                    className="sm:w-10 sm:h-10"
                  />
                  <span className="text-lg sm:text-xl font-bold text-white leading-tight">CleanNest<br/>Hokkaido</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  札幌を中心に民泊運営代行サービスを提供。インバウンド旅行客に特化し、予約管理から清掃まで一括サポートします。
                </p>
              </div>
              
              {/* サービス情報 */}
              <div>
                <h3 className="text-white font-medium text-base sm:text-lg mb-4 sm:mb-5 border-b border-gold-500/30 pb-2">サービス情報</h3>
                <nav className="space-y-2 sm:space-y-3">
                  <Link href="/about" className="block text-sm sm:text-base !text-white hover:!text-gold-300 transition-colors">
                    CleanNest Hokkaidoとは
                  </Link>
                  <Link href="/services" className="block text-sm sm:text-base !text-white hover:!text-gold-300 transition-colors">
                    民泊代行サービス一覧
                  </Link>
                  <Link href="/contact" className="block text-sm sm:text-base !text-white hover:!text-gold-300 transition-colors">
                    取材申込みはこちら
                  </Link>
                </nav>
              </div>
              
              {/* 運営会社情報 */}
              <div>
                <h3 className="text-white font-medium text-base sm:text-lg mb-4 sm:mb-5 border-b border-gold-500/30 pb-2">運営会社情報</h3>
                <nav className="space-y-2 sm:space-y-3">
                  <a 
                    href="https://www.ehpcorp.net/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm sm:text-base !text-white hover:!text-gold-300 transition-colors"
                  >
                    運営会社 (株)EHP
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  <a 
                    href="https://www.ehpcorp.net/info" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm sm:text-base !text-white hover:!text-gold-300 transition-colors"
                  >
                    会社概要
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  <a 
                    href="https://www.ehpcorp.net/contact" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm sm:text-base !text-white hover:!text-gold-300 transition-colors"
                  >
                    お問い合わせ
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </nav>
              </div>
              
              {/* 関連情報 */}
              <div>
                <h3 className="text-white font-medium text-base sm:text-lg mb-4 sm:mb-5 border-b border-gold-500/30 pb-2">関連情報</h3>
                <nav className="space-y-2 sm:space-y-3">
                  <a 
                    href="https://www.pref.hokkaido.lg.jp/kz/kkd/minpaku/portal.html"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm sm:text-base !text-white hover:!text-gold-300 transition-colors"
                  >
                    北海道民泊ポータルサイト
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  <a 
                    href="https://www.mlit.go.jp/kankocho/minpaku/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm sm:text-base !text-white hover:!text-gold-300 transition-colors"
                  >
                    民泊制度ポータルサイト
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* コピーライトとポリシーリンク */}
      <div className="border-t border-gray-700/50 py-8 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-gray-300 text-center md:text-left">
              &copy; {new Date().getFullYear()} 株式会社EHP All Rights Reserved.
            </p>
            <nav className="flex gap-4 text-xs md:text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                利用規約
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}