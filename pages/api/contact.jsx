import nodemailer from "nodemailer";

export default async (req, res) => {
    const { name, email, model, message, date, place, otherMessage } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    
    try {
        // 管理人に送るお問い合わせメッセージ通知メール
        await transporter.sendMail({
            from: email,
            to: "pentalobe.repair@gmail.com",
            subject: `【お問い合わせ】${name}様より`,
            html: `
            <p>お問い合わせ内容</p>
            <p>【お名前】</p>
            <p>${name}</p>
            <p>【メールアドレス】</p>
            <p>${email}</p>
            <p>【修理モデルと色】</p>
            <p>${model}</p>
            <p>【修理内容もしくは不具合内容】</p>
            <p>${message}</p>
            <p>【希望日時】</p>
            <p>${date}</p>
            <p>【希望修理場所】</p>
            <p>${place}</p>
            <p>【その他】</p>
            <p>${otherMessage}</p>
            `,
        });

        // ゲストに送る自動受付メール
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: `【お問い合わせ自動受付メール】`,
            html: `
            <p>
                お問い合わせありがとうございます。<br>
                以下の内容でお問い合わせを承りました。
                追ってまたご連絡いたしますのでしばらくお待ちください。
                当メールは自動で送信しております。
            </p>
            <p>-----------------------------------------</p>
            <p>お問い合わせ内容</p>
            <p>【お名前】</p>
            <p>${name}</p>
            <p>【メールアドレス】</p>
            <p>${email}</p>
            <p>【修理モデルと色】</p>
            <p>${model}</p>
            <p>【修理内容もしくは不具合内容】</p>
            <p>${message}</p>
            <p>【希望日時】</p>
            <p>${date}</p>
            <p>【希望修理場所】</p>
            <p>${place}</p>
            <p>【その他】</p>
            <p>${otherMessage}</p>
            <p>-----------------------------------------</p>
            `,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ error: error.message || error.toString() });
    }
    return res.status(200).json({ error: "" });
};