import { useForm } from "react-hook-form";
import Image from "next/image";

import Seo from "../component/seo";

export default function Contact() {

    const onSubmitForm = async (data) => {
        try {
            const res = await fetch(`api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } catch (error) {
            alert("送信できませんでした。");
            return;
        }
    };

    const formReset = () => {
        document.form.reset();
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onConfirm = (data) => {
        let confirmResult = window.confirm(`
${data.name}様、お問い合わせありがとうございます。
以下の内容で送信してよろしいでしょうか。
ご確認よろしくお願いいたします。
\r\n
お名前：${data.name}\r\n
メールアドレス：${data.email}\r\n
修理モデルと色：${data.model}\r\n
修理内容もしくは不具合内容：${data.message}\r\n
希望日時：${data.date}\r\n
希望修理場所：${data.place}\r\n
その他：${data.otherMessage}\r\n
        `);

        if (confirmResult) {
            onSubmitForm(data);
            formReset();
            alert(
                "送信完了いたしました。\r\nこの度はお問い合わせいただきありがとうございました。"
            );
        }
    };

    return (
        <>
            <Seo
                pageTitle={"Contact"}
                pageDescription={"東京都内を中心とした出張iPhone修理サービス。お問い合わせはこちらから。"}
            />

            <h3>お問い合わせ</h3>

            <ul className="contactUl">
                {/* tell */}
                <li className="contactLi">
                    <div className="cableImgC">
                        <Image
                            src="/cable/lightning_1x.png"
                            width={781}
                            height={90}
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <div className="cableLongImgC">
                        <Image
                            src="/cable/lightning_4x.png"
                            width={3423}
                            height={152}
                            objectFit="contain"
                            quality={50}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <h4>Tell</h4>
                    <p className="contactLinkP">
                        <a href="tel:080-1234-5678">080-1234-5678</a>
                    </p>
                    <p>24時間、受け付けております。</p>
                </li>

                {/* line */}
                <li className="contactLi">
                    <div className="cableImgC">
                        <Image
                            src="/cable/typec_1x.png"
                            width={781}
                            height={109}
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <div className="cableLongImgC">
                        <Image
                            src="/cable/typec_4x.png"
                            width={3335}
                            height={152}
                            objectFit="contain"
                            quality={50}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <h4>Line</h4>
                    {/* <div className="lineqrImgC">
                                <Image
                                    src="/lineqr.png"
                                    width={600}
                                    height={600}
                                    objectFit="contain"
                                    quality={50}
                                    unoptimized={true}
                                    alt=""
                                />
                            </div> */}
                    <p className="contactLinkP">
                        <a href="">友達に追加</a>
                    </p>
                    <p>
                        LINE電話でのご相談も受け付けております。
                        <br />
                        当アカウントの方から宣伝や勧誘のメッセージを送信することはございません
                        <br />
                        当アカウントへの勧誘や宣伝、その他の迷惑メッセージを送信された場合はブロックさせていただきます。
                    </p>
                </li>

                {/* mail */}
                <li className="contactLi">
                    <div className="cableImgC">
                        <Image
                            src="/cable/usb_1x.png"
                            width={781}
                            height={127}
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <div className="cableLongImgC">
                        <Image
                            src="/cable/usb_4x.png"
                            width={3439}
                            height={152}
                            objectFit="contain"
                            quality={50}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <h4>Mail</h4>
                    <p className="contactLinkP">
                        <a href="mailto:pentalobe.repair@gmail.com">
                            pentalobe.repair@gmail.com
                        </a>
                    </p>
                    <p>
                        フィルタリングをかけている場合はpentalobe.repair@gmail.comからのメールを受信できるようお願いいたします。
                    </p>
                </li>

                {/* insta */}
                <li className="contactLi">
                    <div className="cableImgC">
                        <Image
                            src="/cable/magsafe2adapter_1x.png"
                            width={781}
                            height={181}
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <div className="cableLongImgC">
                        <Image
                            src="/cable/magsafe2adapter_4x.png"
                            width={3357}
                            height={194}
                            objectFit="contain"
                            quality={50}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <h4>Instagram</h4>
                    <p className="contactLinkP">
                        <a href="">@xxxxxxxxxx</a>
                    </p>
                    <p>準備中</p>
                </li>

                {/* Twitter */}
                <li className="conatctUnitLi">
                    <div className="cableImgC">
                        <Image
                            src="/cable/earphone_1x.png"
                            width={782}
                            height={127}
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <div className="cableLongImgC">
                        <Image
                            src="/cable/earphone_4x.png"
                            width={3582}
                            height={152}
                            objectFit="contain"
                            quality={50}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <h4>Twitter</h4>
                    <p className="contactLinkP">
                        <a href="">@xxxxxxxxxx</a>
                    </p>
                    <p>準備中</p>
                </li>

                {/* facebook */}
                <li className="contactLi">
                    <div className="cableImgC">
                        <Image
                            src="/cable/magsafeadapter_1x.png"
                            width={781}
                            height={109}
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <div className="cableLongImgC">
                        <Image
                            src="/cable/magsafeadapter_4x.png"
                            width={3435}
                            height={194}
                            objectFit="contain"
                            quality={50}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <h4>Facebook</h4>
                    <p className="contactLinkP">
                        <a href="">@xxxxxxxxxx</a>
                    </p>
                    <p>準備中</p>
                </li>

                {/* mailform */}
                <li className="contactLi">
                    <div className="cableImgC">
                        <Image
                            src="/cable/30pin_1x.png"
                            width={781}
                            height={271}
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <div className="cableLongImgC">
                        <Image
                            src="/cable/30pin_4x.png"
                            width={3445}
                            height={351}
                            objectFit="contain"
                            quality={50}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <h4>HPからお問い合わせ</h4>

                    <form name="form" onSubmit={handleSubmit(onConfirm)}>
                        <label>お名前(必須)</label>
                        {errors.name && (
                            <p className="validateP">
                                お名前を入力してください。
                            </p>
                        )}
                        <input
                            type="text"
                            name="name"
                            placeholder="ペン太郎"
                            {...register("name", { required: true })}
                        />

                        <label>メールアドレス(必須)</label>
                        {errors.email && (
                            <p className="validateP">
                                メールアドレスを入力してください。
                            </p>
                        )}
                        <input
                            type="text"
                            name="email"
                            placeholder="pentalobetokyo@gmail.com"
                            {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                        />

                        <label>修理モデルと色(必須)</label>
                        {errors.model && (
                            <p className="validateP">
                                修理モデルと色を入力してください。
                            </p>
                        )}
                        <input
                            type="text"
                            name="model"
                            placeholder="iPhone13mini グリーン"
                            {...register("model", { required: true })}
                        />

                        <label>修理内容もしくは不具合内容(必須)</label>
                        {errors.message && (
                            <p className="validateP">
                                修理内容もしくは不具合内容を入力してください。
                            </p>
                        )}
                        <textarea
                            rows="3"
                            name="message"
                            placeholder="画面に縦線が入り、タッチが効かない"
                            {...register("message", { required: true })}
                        ></textarea>

                        <label>希望日時</label>
                        <input
                            type="text"
                            name="date"
                            placeholder="今日一番早い時間"
                            {...register("date")}
                        />

                        <label>希望修理場所</label>
                        <input
                            type="text"
                            name="place"
                            placeholder="東京都渋谷区りんご町"
                            {...register("place")}
                        />

                        <label>その他</label>
                        <textarea
                            rows="3"
                            name="otherMessage"
                            placeholder="お見積もりよろしくお願いします。"
                            {...register("otherMessage")}
                        ></textarea>

                        <input
                            className="submitButton"
                            type="submit"
                            value="送信"
                        ></input>
                    </form>
                </li>

                <li className="contactLi">
                    <div className="cableImgC">
                        <Image
                            src="/cable/magsafe_1x.png"
                            width={781}
                            height={271}
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                    <div className="cableLongImgC">
                        <Image
                            src="/cable/magsafe_4x.png"
                            width={3811}
                            height={580}
                            objectFit="contain"
                            quality={50}
                            unoptimized={true}
                            alt=""
                        />
                    </div>
                </li>
            </ul>

            <style jsx>{`
                .cableImgC {
                    width: 97.5vw;
                    margin-right: -2.5vw;
                }
                .cableLongImgC {
                    display: none;
                }

                h4,
                p {
                    text-align: center;
                }
                h4 {
                    font-size: 20px;
                }
                a {
                    color: var(--linkBlue);
                }
                .contactLinkP {
                    margin-bottom: 1vh;
                }

                label {
                    display: flex;
                    justify-content: center;
                }
                input,
                textarea {
                    width: 100%;
                    display: flex;
                    margin-bottom: 5vh;
                    padding: 0;
                    text-align: center;
                    font-family: sans-serif;
                    font-size: 15px;
                    outline: none;
                    border-top: none;
                    border-right: none;
                    border-bottom: 1px solid lightgrey;
                    border-left: none;
                    border-radius: 0;
                }

                input:focus,
                textarea:focus {
                    outline: none;
                    border-bottom: 1px solid var(--linkBlue);
                }

                .validateP {
                    font-size: 5px;
                    color: red;
                }

                .lineqrImgC {
                    width: 50vw;
                    margin: 0 auto;
                }

                .submitButton {
                    width: fit-content;
                    margin: 0 auto 2.5vh auto;
                    border-bottom: none;
                    color: var(--linkBlue);
                    background-color: white;
                }

                @media screen and (min-width: 520px) and (orientation: portrait) {
                    .cableImgC {
                        display: none;
                    }
                    .cableLongImgC {
                        display: block;
                        width: 90vw;
                        margin-right: -10vw;
                    }
                }

                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .cableImgC {
                        display: none;
                    }
                    .cableLongImgC {
                        display: block;
                        width: 80vw;
                    }

                    .lineqrImgC {
                        width: 25%;
                    }
                }
            `}</style>
        </>
    );
}
