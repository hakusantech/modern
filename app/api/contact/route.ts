import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // リクエストボディのJSONを解析
    const body = await request.json();
    const { name, email, phone, inquiryType, message } = body;

    // 必須フィールドの検証
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // お問い合わせ種別のマッピング
    const inquiryTypesMap: Record<string, string> = {
      'operation': '民泊運営代行について',
      'interview': '取材依頼について',
      'partnership': '業務提携について',
      'other': 'その他',
    };

    // メール送信設定
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.MAIL_PORT || '587'),
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // 管理者宛メール内容
    const adminMailOptions = {
      from: `"CleanNest Hokkaido" <${process.env.MAIL_FROM || 'noreply@cleannesthokkaido.com'}>`,
      to: process.env.ADMIN_EMAIL || 'contact@cleannesthokkaido.com',
      subject: `【お問い合わせ】${inquiryTypesMap[inquiryType] || inquiryType}`,
      text: `
        CleanNest Hokkaidoへのお問い合わせがありました。

        ■お名前
        ${name}

        ■メールアドレス
        ${email}

        ■電話番号
        ${phone || '未入力'}

        ■お問い合わせ種別
        ${inquiryTypesMap[inquiryType] || inquiryType}

        ■お問い合わせ内容
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #dca54c; padding-bottom: 10px;">CleanNest Hokkaidoへのお問い合わせ</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #eee; width: 30%;">お名前</th>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #eee;">メールアドレス</th>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #eee;">電話番号</th>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || '未入力'}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #eee;">お問い合わせ種別</th>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${inquiryTypesMap[inquiryType] || inquiryType}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">お問い合わせ内容</h3>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        </div>
      `,
    };

    // 自動返信メール内容
    const autoReplyOptions = {
      from: `"CleanNest Hokkaido" <${process.env.MAIL_FROM || 'noreply@cleannesthokkaido.com'}>`,
      to: email,
      subject: '【CleanNest Hokkaido】お問い合わせありがとうございます',
      text: `
        ${name} 様

        CleanNest Hokkaidoへのお問い合わせありがとうございます。
        以下の内容でお問い合わせを受け付けました。
        内容を確認次第、担当者よりご連絡いたします。

        ■お問い合わせ内容
        ============================
        お名前: ${name}
        メールアドレス: ${email}
        電話番号: ${phone || '未入力'}
        お問い合わせ種別: ${inquiryTypesMap[inquiryType] || inquiryType}
        お問い合わせ内容:
        ${message}
        ============================

        ※このメールは自動送信されています。
        ※このメールに返信されても対応できません。

        --
        CleanNest Hokkaido
        https://cleannesthokkaido.com
        Phone: 011-827-7441 (受付時間: 平日 9:30-18:30)
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">CleanNest Hokkaidoへのお問い合わせありがとうございます</h2>
          <p>${name} 様</p>
          <p>CleanNest Hokkaidoへのお問い合わせありがとうございます。<br>以下の内容でお問い合わせを受け付けました。<br>内容を確認次第、担当者よりご連絡いたします。</p>
          
          <div style="margin: 30px 0; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
            <h3 style="color: #dca54c; margin-top: 0;">お問い合わせ内容</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <th style="text-align: left; padding: 8px 5px; border-bottom: 1px solid #eee; width: 30%;">お名前</th>
                <td style="padding: 8px 5px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px 5px; border-bottom: 1px solid #eee;">メールアドレス</th>
                <td style="padding: 8px 5px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px 5px; border-bottom: 1px solid #eee;">電話番号</th>
                <td style="padding: 8px 5px; border-bottom: 1px solid #eee;">${phone || '未入力'}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px 5px; border-bottom: 1px solid #eee;">お問い合わせ種別</th>
                <td style="padding: 8px 5px; border-bottom: 1px solid #eee;">${inquiryTypesMap[inquiryType] || inquiryType}</td>
              </tr>
              <tr>
                <th style="text-align: left; padding: 8px 5px; vertical-align: top;">お問い合わせ内容</th>
                <td style="padding: 8px 5px; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #777; font-size: 0.9em;">※このメールは自動送信されています。<br>※このメールに返信されても対応できません。</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9em; color: #777;">
            <p style="margin: 0;">CleanNest Hokkaido</p>
            <p style="margin: 5px 0;"><a href="https://cleannesthokkaido.com" style="color: #dca54c;">https://cleannesthokkaido.com</a></p>
            <p style="margin: 5px 0;">Phone: 011-827-7441 (受付時間: 平日 9:30-18:30)</p>
          </div>
        </div>
      `,
    };

    // メール送信（管理者宛）
    await transporter.sendMail(adminMailOptions);
    
    // メール送信（自動返信）
    await transporter.sendMail(autoReplyOptions);

    // 成功レスポンス
    return NextResponse.json(
      { success: true, message: 'お問い合わせを受け付けました' },
      { status: 200 }
    );

  } catch (error) {
    console.error('お問い合わせ処理エラー:', error);
    
    // エラーレスポンス
    return NextResponse.json(
      { success: false, error: 'お問い合わせの処理中にエラーが発生しました' },
      { status: 500 }
    );
  }
} 