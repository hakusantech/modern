import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ✅ Node.js runtime 明示
export const runtime = 'nodejs';

// OPTIONSリクエスト用のハンドラ（CORS対策）
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

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const inquiryType = formData.get('inquiryType') as string;
    const message = formData.get('message') as string;
    const files = formData.getAll('attachments') as File[];

    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json({ error: '必須項目が欠けています' }, { status: 400 });
    }

    const map = {
      operation: '民泊運営代行について',
      interview: '取材依頼について',
      partnership: '業務提携について',
      other: 'その他',
    } as const;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // 添付ファイルの処理
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer
        };
      })
    );

    // 管理者宛メール（添付ファイル付き）
    const adminMailOptions = {
      from: 'info@cleannest-hokkaido.jp',
      to: process.env.ADMIN_EMAIL,
      subject: `【お問い合わせ】${map[inquiryType as keyof typeof map]}`,
      text: `
名前: ${name}
メール: ${email}
電話番号: ${phone || '未入力'}
お問い合わせ種類: ${map[inquiryType as keyof typeof map]}

メッセージ:
${message}

添付ファイル: ${files.length > 0 ? files.map(f => f.name).join(', ') : 'なし'}
      `,
      attachments: attachments
    };

    // 自動返信メール
    const autoReplyOptions = {
      from: 'info@cleannest-hokkaido.jp',
      to: email,
      subject: '【Clean Nest Hokkaido】お問い合わせありがとうございます',
      text: `
${name} 様

Clean Nest Hokkaidoへのお問い合わせありがとうございます。
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

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json(
      { success: true }, 
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false }, 
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}
