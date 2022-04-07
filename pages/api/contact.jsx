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




    // // ゲストに送る自動受付メール
    // try {
    //     await transporter.sendMail({
    //         from: process.env.SMTP_USER,
    //         to: email,
    //         subject: `【お問い合わせ自動受付メール】`,
    //         html: `
    //         <p>
    //             お問い合わせありがとうございます。<br>
    //             以下の内容でお問い合わせを承りました。
    //         </p>
    //         <p>-----------------------------------------</p>
    //         <p>お問い合わせ内容</p>
    //         <p>【お名前】</p>
    //         <p>${req.body.name}</p>
    //         <p>【メールアドレス】</p>
    //         <p>${req.body.email}</p>
    //         <p>【修理モデルと色】</p>
    //         <p>${req.body.model}</p>
    //         <p>【修理内容もしくは不具合内容】</p>
    //         <p>${htmlMessage}</p>
    //         <p>【希望日時】</p>
    //         <p>${req.body.date}</p>
    //         <p>【希望修理場所】</p>
    //         <p>${req.body.place}</p>
    //         <p>【その他】</p>
    //         <p>${htmlOtherMessage}</p>
    //         <p>-----------------------------------------</p>
    //         `,
    //     });
    // } catch (error) {
    //     return res
    //         .status(500)
    //         .json({ error: error.message || error.toString() });
    // }
    // return res.status(200).json({ error: "" });





// export default function sendmail(req, res) {
//     //　改行のエスケープシーケンスをbrタグに置換
//     const htmlMessage = req.body.message.replaceAll("\n", "<br>");
//     const htmlOtherMessage = req.body.otherMessage.replaceAll("\n", "<br>");
//     let nodemailer = require("nodemailer");

//     // 送信用アカウントの設定（ここではGmail）
//     const transporter = nodemailer.createTransport({
//         port: 465,
//         host: "smtp.gmail.com",
//         secure: true,
//         auth: {
//             user: "pentalobe.repair@gmail.com",
//             // Googleアカウントでアプリパスワードを取得して入れる
//             pass: "kyxubgndoydesudo",
//         },
//     });

//     // 管理人に送るお問い合わせメッセージ通知メール
//     const toHostMailData = {
//         from: "pentalobe.repair@gmail.com",
//         to: "pentalobe.repair@gmail.com",
//         subject: `【お問い合わせ】${req.body.name}様より`,
//         text: req.body.message + " | Sent from: " + req.body.email,
//         html: `
//             <p>お問い合わせ内容</p>
//             <p>【お名前】</p>
//             <p>${req.body.name}</p>
//             <p>【メールアドレス】</p>
//             <p>${req.body.email}</p>
//             <p>【修理モデルと色】</p>
//             <p>${req.body.model}</p>
//             <p>【修理内容もしくは不具合内容】</p>
//             <p>${htmlMessage}</p>
//             <p>【希望日時】</p>
//             <p>${req.body.date}</p>
//             <p>【希望修理場所】</p>
//             <p>${req.body.place}</p>
//             <p>【その他】</p>
//             <p>${htmlOtherMessage}</p>
//         `,
//     };

//     // ゲストに送る自動受付メール
//     const toGuestMailData = {
//         from: "sender@mail.com",
//         // 入力されたゲストのメールアドレスが入る
//         to: `${req.body.email}`,
//         subject: `【お問い合わせ自動受付メール】`,
//         text: req.body.message + " | Sent from: " + req.body.email,
//         html: `
//             <p>
//                 お問い合わせありがとうございます。<br>
//                 以下の内容でお問い合わせを承りました。
//             </p>
//             <p>-----------------------------------------</p>
//             <p>お問い合わせ内容</p>
//             <p>【お名前】</p>
//             <p>${req.body.name}</p>
//             <p>【メールアドレス】</p>
//             <p>${req.body.email}</p>
//             <p>【修理モデルと色】</p>
//             <p>${req.body.model}</p>
//             <p>【修理内容もしくは不具合内容】</p>
//             <p>${htmlMessage}</p>
//             <p>【希望日時】</p>
//             <p>${req.body.date}</p>
//             <p>【希望修理場所】</p>
//             <p>${req.body.place}</p>
//             <p>【その他】</p>
//             <p>${htmlOtherMessage}</p>
//             <p>-----------------------------------------</p>
//         `,
//     };

//     // 送信する
//     transporter.sendMail(toHostMailData, function (err, info) {
//         if (err) console.log(err);
//         else console.log(info);
//     });
//     transporter.sendMail(toGuestMailData, function (err, info) {
//         if (err) console.log(err);
//         else console.log(info);
//     });

//     res.send("success");
// }
