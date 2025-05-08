// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

// ✅ Node.js runtime
export const runtime = 'nodejs';

// === CORS (OPTIONS) ===
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

// === メインハンドラ ===
export async function POST(req: Request) {
  try {
    // ------- フォームデータの取得 -------
    const formData = await req.formData();
    const name         = formData.get('name')        as string;
    const email        = formData.get('email')       as string;
    const phone        = formData.get('phone')       as string;
    const inquiryType  = formData.get('inquiryType') as string;
    const message      = formData.get('message')     as string;
    const files        = formData.getAll('attachments') as File[];

    // 必須チェック
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json({ error: '必須項目が欠けています' }, { status: 400 });
    }

    // 表示用マップ
    const map = {
      operation:   '民泊運営代行について',
      interview:   '取材依頼について',
      partnership: '業務提携について',
      other:       'その他',
    } as const;

    // ------- 添付ファイルを Base64 に変換 -------
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content:  buffer.toString('base64'), // Buffer のままでも可
        };
      })
    );

    // --- メール送信 ---
    try {
      // Resendを優先して使用
      if (process.env.RESEND_API_KEY) {
        await sendEmailWithResend(name, email, phone, inquiryType, message, attachments, map);
      } 
      // フォールバックとしてNodemailerを使用
      else if (process.env.MAIL_HOST && process.env.MAIL_USER && process.env.MAIL_PASSWORD) {
        await sendEmailWithNodemailer(name, email, phone, inquiryType, message, attachments, map);
      } 
      // 両方設定されていない場合はエラー
      else {
        console.error('Mail configuration not found in environment variables');
        return NextResponse.json(
          { success: false, error: 'メール設定が見つかりません', detail: 'Mail configuration not found' }, 
          corsHeaders(500)
        );
      }
    } catch (mailError) {
      console.error('Email sending error:', mailError);
      
      // エラーメッセージの詳細を取得
      let errorMessage = 'メール送信に失敗しました。';
      let errorDetail = '';
      
      if (mailError instanceof Error) {
        errorDetail = mailError.message;
      }
      
      return NextResponse.json(
        { success: false, error: errorMessage, detail: errorDetail }, 
        corsHeaders(500)
      );
    }

    return NextResponse.json(
      { success: true },
      corsHeaders(200)
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // エラーメッセージの詳細を取得
    let errorMessage = 'サーバーエラーが発生しました';
    let errorDetail = '';
    
    if (error instanceof Error) {
      errorDetail = error.message;
    }

    return NextResponse.json(
      { success: false, error: errorMessage, detail: errorDetail },
      corsHeaders(500)
    );
  }
}

// === Resendでメール送信 ===
async function sendEmailWithResend(
  name: string, 
  email: string, 
  phone: string, 
  inquiryType: string, 
  message: string, 
  attachments: any[],
  map: Record<string, string>
) {
  // Resendクライアント初期化
  const resend = new Resend(process.env.RESEND_API_KEY!);
  
  const mailFrom = process.env.MAIL_FROM || "お問い合わせ <info@cleannest-hokkaido.jp>";
  const mailTo = process.env.MAIL_TO || process.env.ADMIN_EMAIL || "info@cleannest-hokkaido.jp";
  
  // ------- 管理者向けメール -------
  const adminEmailRes = await resend.emails.send({
    from: mailFrom,
    to: mailTo.split(','),
    reply_to: email,
    subject: `【お問い合わせ】${map[inquiryType as keyof typeof map]}`,
    text: `
名前: ${name}
メール: ${email}
電話番号: ${phone || '未入力'}
お問い合わせ種類: ${map[inquiryType as keyof typeof map]}

メッセージ:
${message}

添付ファイル: ${attachments.length ? attachments.map(a => a.filename).join(', ') : 'なし'}
    `,
    attachments,
  });

  // ------- 自動返信メール（添付なし） -------
  const autoReplyRes = await resend.emails.send({
    from: mailFrom,
    to: email,
    subject: '【Clean Nest Hokkaido】お問い合わせありがとうございます',
    text: `
${name} 様

Clean Nest Hokkaido へのお問い合わせありがとうございます。
以下の内容でお問い合わせを受け付けました。

お問い合わせ種類: ${map[inquiryType as keyof typeof map]}
メッセージ:
${message}

内容を確認の上、担当者より回答させていただきます。
しばらくお待ちくださいますようお願いいたします。

※このメールは自動送信されています。
このメールに返信いただいても対応できかねますのでご了承ください。
    `,
  });

  console.log('Resend responses:', adminEmailRes, autoReplyRes);
  return { adminEmailRes, autoReplyRes };
}

// === Nodemailerでメール送信 ===
async function sendEmailWithNodemailer(
  name: string, 
  email: string, 
  phone: string, 
  inquiryType: string, 
  message: string, 
  attachments: any[],
  map: Record<string, string>
) {
  // ポート番号の処理
  const port = process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 587;
  
  // トランスポーター作成
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: port,
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  
  // Nodemailer用の添付ファイル形式に変換
  const nodemailerAttachments = attachments.map(attachment => ({
    filename: attachment.filename,
    content: Buffer.from(attachment.content, 'base64')
  }));
  
  const mailFrom = process.env.MAIL_FROM || process.env.MAIL_USER || "info@cleannest-hokkaido.jp";
  const adminEmail = process.env.MAIL_TO || process.env.ADMIN_EMAIL || "info@cleannest-hokkaido.jp";
  
  // 管理者宛メール（添付ファイル付き）
  const adminMailOptions = {
    from: mailFrom,
    to: adminEmail,
    subject: `【お問い合わせ】${map[inquiryType as keyof typeof map]}`,
    text: `
名前: ${name}
メール: ${email}
電話番号: ${phone || '未入力'}
お問い合わせ種類: ${map[inquiryType as keyof typeof map]}

メッセージ:
${message}

添付ファイル: ${nodemailerAttachments.length ? nodemailerAttachments.map(a => a.filename).join(', ') : 'なし'}
    `,
    attachments: nodemailerAttachments,
  };

  // 自動返信メール（添付なし）
  const autoReplyOptions = {
    from: mailFrom,
    to: email,
    subject: '【Clean Nest Hokkaido】お問い合わせありがとうございます',
    text: `
${name} 様

Clean Nest Hokkaido へのお問い合わせありがとうございます。
以下の内容でお問い合わせを受け付けました。

お問い合わせ種類: ${map[inquiryType as keyof typeof map]}
メッセージ:
${message}

内容を確認の上、担当者より回答させていただきます。
しばらくお待ちくださいますようお願いいたします。

※このメールは自動送信されています。
このメールに返信いただいても対応できかねますのでご了承ください。
    `,
  };

  // メール送信
  const info = await Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(autoReplyOptions),
  ]);
  
  console.log('Nodemailer responses:', info);
  return info;
}

// CORS設定を含むレスポンスヘッダーを生成するヘルパー関数
function corsHeaders(status: number) {
  return {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  };
}
