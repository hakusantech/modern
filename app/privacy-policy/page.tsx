import { Metadata } from "next"

export const metadata: Metadata = {
  title: "プライバシーポリシー | CleanNest Hokkaido",
  description: "CleanNest Hokkaidoのプライバシーポリシーについてご案内します。",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ページの背景を白にして効果を無効化する要素 */}
      <div className="fixed inset-0 bg-white z-[-1]"></div>
      
      {/* 背景にグラデーションを追加 */}
      <main className="py-16 relative bg-gradient-to-b from-white to-gold-50">
        {/* コンテナに影を追加 */}
        <div className="container max-w-3xl mx-auto px-4 bg-white rounded-lg shadow-lg">
          {/* H1のスタイルを調整 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gold-600 pt-10">プライバシーポリシー</h1>
          
          {/* proseクラスを維持しつつ、子要素のスタイルを上書き */}
          <div className="prose prose-lg max-w-none px-6 pb-10">
            <p className="mb-6"> {/* 段落下のマージン調整 */}
              株式会社EHP（以下「当社」といいます）は、運営するウェブサイト「CleanNest Hokkaido」（以下「本サイト」といいます）において、お客様の個人情報を取り扱うにあたり、以下のプライバシーポリシーを定めております。
            </p>

            {/* H2のスタイル調整 */}
            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">1. 個人情報の取得について</h2>
            <p className="mb-4"> {/* 段落下のマージン調整 */}
              当社は、サービスの提供にあたり、適法かつ公正な手段で、必要な範囲の個人情報を取得いたします。具体的には、以下の方法で個人情報を取得することがあります。
            </p>
            {/* リストのスタイル調整 */}
            <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 mb-6">
              <li>お問い合わせフォームからのご連絡</li>
              <li>物件見学予約フォームからのお申し込み</li>
              <li>資料請求フォームからのご請求</li>
              <li>メールでのご連絡</li>
              <li>お電話でのご連絡</li>
              <li>当社サービスへの会員登録</li>
            </ul>

            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">2. 取得する個人情報の項目</h2>
            <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 mb-6">
              <li>氏名</li>
              <li>住所</li>
              <li>電話番号</li>
              <li>メールアドレス</li>
              <li>生年月日</li>
              <li>職業</li>
              <li>年収・資産状況（ローン審査に必要な場合）</li>
              <li>その他、不動産取引に必要となる情報</li>
            </ul>

            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">3. 個人情報の利用目的</h2>
            <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 mb-6">
              <li>不動産物件情報の提供のため</li>
              <li>お問い合わせ・ご相談への対応のため</li>
              <li>物件見学・内覧の調整のため</li>
              <li>不動産取引の契約手続きのため</li>
              <li>契約後のアフターフォローのため</li>
              <li>新サービスや物件情報のご案内のため</li>
              <li>サービス改善のための分析・調査のため</li>
              <li>法令等に基づく対応のため</li>
            </ul>

            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">4. 個人情報の第三者提供について</h2>
            <p className="mb-4">
              当社は、以下のいずれかに該当する場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供いたしません。
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 mb-6">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              <li>不動産取引の成立に必要な範囲内において、売主・買主、貸主・借主、その他取引関係者に提供する場合</li>
            </ul>

            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">5. 個人情報の委託について</h2>
            <p className="mb-6">
              当社は、利用目的の達成に必要な範囲内において、取得した個人情報の取扱いを外部に委託することがあります。その場合、委託先に対して必要かつ適切な監督を行います。
            </p>

            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">6. 個人情報の管理について</h2>
            <p className="mb-4">
              当社は、個人情報の漏えい、滅失、毀損等を防止するため、以下の安全管理措置を講じます。
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 mb-6">
              <li>個人情報へのアクセス制限</li>
              <li>情報システムのセキュリティ対策</li>
              <li>従業員に対する教育・監督</li>
              <li>個人情報の取扱いに関する内部規程の整備</li>
            </ul>

            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">7. 個人情報の開示・訂正・削除等について</h2>
            <p className="mb-6">
              ご本人からの個人情報の開示、訂正、削除、利用停止等のご請求があった場合、ご本人であることを確認の上、法令に基づき適切に対応いたします。手続きについては、「10. お問い合わせ窓口」までご連絡ください。
            </p>

            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">8. Cookieなどの使用について</h2>
            <p className="mb-6">
              本サイトでは、サービス向上のためにCookieやアクセスログなどの情報を取得・利用しています。これらの情報にはお客様個人を特定する情報は含まれておりません。また、ブラウザの設定によりCookieを無効にすることも可能です。
            </p>

            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">9. プライバシーポリシーの変更について</h2>
            <p className="mb-6">
              本ポリシーの内容は、法令の変更や当社のサービス内容の変更等により、必要に応じて変更することがあります。変更後の内容は、本サイト上に掲載いたします。
            </p>

            <h2 className="text-gray-800 text-xl md:text-2xl mt-10 mb-4">10. お問い合わせ窓口</h2>
            <p className="mb-4">
              個人情報の取扱いに関するお問い合わせは、以下の窓口までご連絡ください。
            </p>
            <p className="mb-4">
              株式会社EHP<br />
              〒062-0933 北海道札幌市豊平区平岸三条8-6-1 信和リッチ2階<br />
              TEL：011-827-7441<br />
              受付時間：9:30〜18:30（土日除く）<br />
              E-mail：info@ehpcorp.net
            </p>

            <p className="text-right text-sm text-gray-500 mt-8">制定日：2025年4月19日</p> {/* 日付のスタイル調整 */}
          </div>
        </div>
      </main>
    </>
  )
} 