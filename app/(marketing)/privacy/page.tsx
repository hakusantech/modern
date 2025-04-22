import { Metadata } from "next"

export const metadata: Metadata = {
  title: "プライバシーポリシー | CleanNest Hokkaido",
  description: "株式会社EHP が管理する CleanNest Hokkaido におけるプライバシーポリシー",
}

/**
 * プライバシーポリシーページ
 * ──────────────────────────────────────────────
 * ◦ 文章は <section> ごとに区切り、見出し <h2> と本文 <p> だけで構成
 * ◦ Tailwind + @tailwindcss/typography（prose）で可読性を確保
 * ◦ レイアウトはシンプルに保持し、改修しやすいよう semantic なタグのみ
 */
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="prose prose-sm md:prose-base lg:prose-lg mx-auto px-4 py-12">
        <h1 className="mb-6 text-center">プライバシーポリシー</h1>

        {/* 前文 */}
        <p>
          株式会社EHP（以下「当社」といいます）は、運営するウェブサイト
          「CleanNest&nbsp;Hokkaido」（以下「本サイト」といいます）において、
          お客様の個人情報を取り扱うにあたり、以下のプライバシーポリシーを定めております。
        </p>

        {/* 1 */}
        <section>
          <h2>1. 個人情報の取得について</h2>
          <p>
            当社は、サービス提供にあたり適法かつ公正な手段で、必要な範囲の個人情報を取得します。
            具体的な取得方法は以下のとおりです。
          </p>
          <ul className="space-y-1">
            <li>お問い合わせフォームからのご連絡</li>
            <li>物件見学予約フォームからのお申し込み</li>
            <li>資料請求フォームからのご請求</li>
            <li>メールでのご連絡</li>
            <li>お電話でのご連絡</li>
            <li>当社サービスへの会員登録</li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2>2. 取得する個人情報の項目</h2>
          <ul className="space-y-1">
            <li>氏名</li>
            <li>住所</li>
            <li>電話番号</li>
            <li>メールアドレス</li>
            <li>生年月日</li>
            <li>職業</li>
            <li>年収・資産状況（ローン審査に必要な場合）</li>
            <li>その他、不動産取引に必要となる情報</li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2>3. 個人情報の利用目的</h2>
          <ul className="space-y-1">
            <li>不動産物件情報の提供</li>
            <li>お問い合わせ・ご相談への対応</li>
            <li>物件見学・内覧の調整</li>
            <li>不動産取引の契約手続き</li>
            <li>契約後のアフターフォロー</li>
            <li>新サービスや物件情報のご案内</li>
            <li>サービス改善のための分析・調査</li>
            <li>法令等に基づく対応</li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2>4. 個人情報の第三者提供について</h2>
          <p>
            当社は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供しません。
          </p>
          <ol className="space-y-1">
            <li>法令に基づく場合</li>
            <li>
              人の生命・身体・財産の保護のために必要で、ご本人の同意が困難な場合
            </li>
            <li>
              公衆衛生の向上または児童の健全育成推進で、ご本人の同意が困難な場合
            </li>
            <li>
              国または地方公共団体が法令の定める事務を遂行するため協力が必要な場合
            </li>
            <li>
              不動産取引の成立に必要な範囲内で売主・買主・貸主・借主等へ提供する場合
            </li>
          </ol>
        </section>

        {/* 5 */}
        <section>
          <h2>5. 個人情報の委託について</h2>
          <p>
            当社は、利用目的達成に必要な範囲で個人情報の取扱いを外部に委託することがあります。
            委託先には適切な監督を行います。
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2>6. 個人情報の管理について</h2>
          <p>当社は、漏えい・滅失・毀損等を防止するため、以下の措置を講じます。</p>
          <ul className="space-y-1">
            <li>個人情報へのアクセス制限</li>
            <li>情報システムのセキュリティ対策</li>
            <li>従業員への教育・監督</li>
            <li>個人情報取扱いに関する内部規程の整備</li>
          </ul>
        </section>

        {/* 7 */}
        <section>
          <h2>7. 個人情報の開示・訂正・削除等について</h2>
          <p>
            ご本人から開示・訂正・削除・利用停止等の請求があった場合は、ご本人確認の上、
            法令に基づき適切に対応します。詳細は「10. お問い合わせ窓口」へご連絡ください。
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2>8. Cookieなどの使用について</h2>
          <p>
            本サイトはサービス向上のためにCookieやアクセスログを利用します。
            これらには個人を特定する情報は含まれません。ブラウザ設定でCookieを無効化できます。
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2>9. プライバシーポリシーの変更について</h2>
          <p>
            法令変更やサービス内容の変更等により、本ポリシーを改定する場合があります。
            変更後の内容は本サイトに掲載します。
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2>10. お問い合わせ窓口</h2>
          <address className="not-italic space-y-1">
            <div>株式会社EHP</div>
            <div>〒062-0933 北海道札幌市豊平区平岸三条8-6-1 信和リッチ2階</div>
            <div>TEL：011-827-7441（9:30〜18:30&nbsp;土日除く）</div>
            <div>E-mail：info@ehpcorp.net</div>
          </address>
          <p className="mt-4">制定日：2025年4月19日</p>
        </section>
      </article>
    </main>
  )
}