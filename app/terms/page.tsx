import { Metadata } from "next"

export const metadata: Metadata = {
  title: "利用規約 | CleanNest Hokkaido",
  description: "CleanNest Hokkaido のサービス利用規約（株式会社EHP）",
}

/**
 * 利用規約ページ
 * ―――――――――――――――――――――――――――――――――――――――――――
 * ◦ 文章は <section> ごとに区切り、見出し <h2> と本文 <p> だけで構成
 * ◦ Tailwind + @tailwindcss/typography（prose）で可読性を確保
 * ◦ レイアウトはシンプルに保持し、改修しやすいよう semantic なタグのみ
 */
export default function TermsOfServicePage() {
  return (
    <>
      {/* 背景グラデーション */}
      <div className="fixed inset-0 bg-gradient-to-b from-white to-gold-50 z-[-1]"></div>

      <main className="min-h-screen py-16 relative">
        {/* コンテンツコンテナ */}
        <article className="container max-w-3xl mx-auto bg-white rounded-lg shadow-lg px-6 sm:px-8 py-12 sm:py-16">
          {/* H1: mb-12 で調整 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gold-600">利用規約</h1>

          {/* 各セクション: mb-10 で調整 */}
          <section className="mb-10">
            {/* H2: border-b, pb-2, mb-5, mt-8 で調整 */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第1条（目的）</h2>
            {/* P: mb-5 で調整 */}
            <p className="text-gray-700 leading-relaxed mb-5">
              本利用規約（以下「本規約」といいます。）は、株式会社EHP（以下「当社」といいます。）が提供する
              「CleanNest&nbsp;Hokkaido」のサービス（以下「本サービス」といいます。）の利用条件を定めるものです。
              本サービスの利用者（以下「ユーザー」といいます。）は、本規約に同意した上で本サービスを利用するものとします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第2条（適用範囲）</h2>
            {/* OL: pl-6, space-y-2 で調整 */}
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。</li>
              <li>
                当社が本サービス上で掲載するプライバシーポリシーその他の個別規定は、本規約の一部を構成するものとします。
              </li>
              <li>
                本規約の内容と個別規定の内容が異なる場合には、個別規定の内容が優先して適用されるものとします。
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第3条（サービス内容）</h2>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                本サービスは、北海道内の不動産物件情報の提供、物件の検索、問い合わせ、内覧予約等の機能を提供する
                ウェブサイトです。
              </li>
              <li>
                当社は、ユーザーに通知することなく、本サービスの内容を変更、追加または廃止することができるものとします。
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第4条（利用登録）</h2>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                利用希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用契約が成立します。
              </li>
              <li>
                当社は、以下の場合には利用登録の申請を承認しないことがあります。
                {/* UL: ネストされたリストのインデント ml-4, mt-2 */}
                <ul className="list-disc list-inside pl-6 space-y-1 text-gray-700 mt-2 ml-4">
                  <li>申請内容に虚偽、誤記または記載漏れがあった場合</li>
                  <li>過去に本規約に違反したことがある場合</li>
                  <li>その他当社が利用登録を適当でないと判断した場合</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第5条（ユーザーIDおよびパスワードの管理）</h2>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                ユーザーは、自己の責任において本サービスのユーザーIDおよびパスワードを管理するものとします。
              </li>
              <li>
                ユーザーIDおよびパスワードの管理不十分、使用上の過誤、第三者の使用等による損害の責任はユーザー自身が負うものとし、当社は一切の責任を負いません。
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第6条（禁止事項）</h2>
            <p className="text-gray-700 leading-relaxed mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社、他のユーザーまたは第三者の権利・利益を侵害する行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>サーバーまたはネットワークの機能を破壊・妨害する行為</li>
              <li>不正アクセスまたはこれを試みる行為</li>
              <li>虚偽の情報を登録または提供する行為</li>
              <li>営利目的の行為（当社が認めたものを除く）</li>
              <li>反社会的勢力に関与する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第7条（物件情報の取扱い）</h2>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                当社は、本サービスにおいて提供する物件情報について、正確性・最新性を保つよう努めますが、その完全性を保証するものではありません。
              </li>
              <li>
                掲載物件については、すでに契約済みである場合や、価格・内容等が変更されている場合があります。
              </li>
              <li>
                ユーザーは、実際の取引にあたっては、必ず当社に直接お問い合わせの上、最新の情報をご確認ください。
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第8条（サービスの提供の停止等）</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができます。
            </p>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>システムの保守点検または更新を行う場合</li>
              <li>地震、火災、停電、天災等の不可抗力によりサービスの提供が困難となった場合</li>
              <li>コンピューターまたは通信回線等が事故により停止した場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第9条（著作権）</h2>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                本サービスおよび関連する情報・画像・データ等の著作権は、当社または正当な権利を有する第三者に帰属します。
              </li>
              <li>
                ユーザーは、当社の許可なく、これらの著作物を複製、転載、改変、販売、出版等の二次利用をすることはできません。
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第10条（免責事項）</h2>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                当社は、本サービスに事実上または法律上の瑕疵がないことを保証するものではありません。
              </li>
              <li>
                当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。
              </li>
              <li>
                当社は、ユーザーと他のユーザーまたは第三者との間で生じた取引・連絡・紛争等について一切責任を負いません。
              </li>
              <li>
                ユーザーと物件所有者等との間で行われる実際の取引について、当社は情報提供の立場であり、取引の当事者とはなりません。
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第11条（利用制限および登録抹消）</h2>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>
                当社は、以下の場合には事前通知なくユーザーの本サービス利用を制限または登録を抹消できます。
                <ul className="list-disc list-inside pl-6 space-y-1 text-gray-700 mt-2 ml-4">
                  <li>本規約に違反した場合</li>
                  <li>登録事項に虚偽が判明した場合</li>
                  <li>当社からの連絡に一定期間返答がない場合</li>
                  <li>その他、当社が適当でないと判断した場合</li>
                </ul>
              </li>
              <li>上記措置によりユーザーに生じた損害について、当社は一切の責任を負いません。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第12条（利用規約の変更）</h2>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed">
              <li>当社は、必要と判断した場合にはユーザーへの通知なく本規約を変更できます。</li>
              <li>変更後の規約は、本サービス上に掲載した時点で効力を生じます。</li>
              <li>ユーザーが変更後も本サービスを利用した場合、変更後の規約に同意したものとみなします。</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第13条（個人情報の取扱い）</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              本サービスにおける個人情報の取扱いについては、当社のプライバシーポリシーの定めによります。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第14条（通知または連絡）</h2>
            <p className="text-gray-700 leading-relaxed mb-5">ユーザーと当社との間の通知または連絡は、当社の定める方法によって行います。</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第15条（権利義務の譲渡禁止）</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              ユーザーは、当社の書面による事前承諾なく、利用契約上の地位または本規約に基づく権利・義務を第三者に譲渡し、または担保に供することはできません。
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-5 mt-8">第16条（準拠法および管轄）</h2>
            <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700 leading-relaxed mb-5">
              <li>本規約の解釈には日本法を準拠法とします。</li>
              <li>
                本サービスに関して紛争が生じた場合、札幌地方裁判所を第一審の専属的合意管轄裁判所とします。
              </li>
            </ol>
            {/* 制定日のスタイル調整: mt-12 */}
            <p className="text-right text-sm text-gray-500 mt-12">制定日：2025年4月19日</p>
          </section>
        </article>
      </main>
    </>
  )
}