import Image from "next/image";
import Link from "next/link";

import Seo from "../component/seo";

export default function RepairingProcess() {
    return (
        <>
            <Seo
                pageTitle={"Repairing Process"}
                pageDescription={"東京都内を中心とした出張iPhone修理サービス。修理の流れはこちらから。"}
            />

            <h3>修理の流れ</h3>

            <ul className="rpC">
                {/* 1 */}
                <li className="rpLi">
                    <div className="rpNumberImgC">
                        <Image
                            src="/tool/pick.png"
                            width={565}
                            height={565}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                        <p className="rpNumberP">1</p>
                    </div>

                    <div className="rpContentC">
                        <div className="rpImgC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="responsive"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>

                        <div className="rpArticleC">
                            <p className="rpArticleTitleP">トラブル発生</p>
                            <p className="rpArticleP">
                                ・液晶画面が割れてしまった
                                <br />
                                ・バッテリーが弱くなった
                                <br />
                                ・背面ガラスが割れてしまった
                                <br />
                                ・充電できない
                                <br />
                                ・カメラが壊れた
                                <br />
                                ・操作してないのに勝手に動く
                                <br />
                                ・水没した
                                <br />
                                ・自分で修理したら治らなくなった…など
                                <br />
                                <br />
                                対応している修理一覧は
                                <Link href="/">
                                    <a>こちら</a>
                                </Link>
                                から
                            </p>
                        </div>
                    </div>
                </li>

                {/* 2 */}
                <li className="rpLi">
                    <div className="rpNumberImgC">
                        <Image
                            src="/tool/pick.png"
                            width={565}
                            height={565}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                        <p className="rpNumberP">2</p>
                    </div>

                    <div className="rpContentC">
                        <div className="rpImgC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="responsive"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>

                        <div className="rpArticleC">
                            <p className="rpArticleTitleP">
                                ペンタローブにご相談
                            </p>
                            <p className="rpArticleP">
                                ・<a href="tel:080-1234-5678">お電話</a>
                                <br />・
                                <a href="mailto:pentalobe.repair@gmail.com">
                                    メール
                                </a>
                                <br />
                                ・LINEトーク
                                <br />
                                ・LINE電話
                                <br />
                                ・Instagram DM
                                <br />
                                ・Facebook
                                <br />・
                                <Link href="/contact">
                                    <a>HPのお問い合わせフォーム</a>
                                </Link>
                                <br />
                                <br />
                                お問い合わせ先一覧は
                                <Link href="/contact">
                                    <a>こちら</a>
                                </Link>
                                から
                            </p>
                        </div>
                    </div>
                </li>

                {/* 3 */}
                <li className="rpLi">
                    <div className="rpNumberImgC">
                        <Image
                            src="/tool/pick.png"
                            width={565}
                            height={565}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                        <p className="rpNumberP">3</p>
                    </div>

                    <div className="rpContentC">
                        <div className="rpImgC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="responsive"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>

                        <div className="rpArticleC">
                            <p className="rpArticleTitleP">
                                ご依頼内容を確認して、お見積もり
                            </p>
                            <p className="rpArticleP">
                                ・修理したい機種
                                <br />
                                ・修理内容
                                <br />
                                ・希望日時
                                <br />
                                ・修理場所
                                <br />
                                などをお伺いしたのち、修理可能であればお見積もり金額を提示させていただきます。
                                <br />
                                <br />
                                この際に、修理部品の欠品やスケジュールの都合でリスケジュール、もしくはお断りさせていただく場合もございますので、ご了承下さい。
                            </p>
                        </div>
                    </div>
                </li>

                {/* 4 */}
                <li className="rpLi">
                    <div className="rpNumberImgC">
                        <Image
                            src="/tool/pick.png"
                            width={565}
                            height={565}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                        <p className="rpNumberP">4</p>
                    </div>

                    <div className="rpContentC">
                        <div className="rpImgC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="responsive"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>

                        <div className="rpArticleC">
                            <p className="rpArticleTitleP">
                                指定された場所に伺います
                            </p>
                            <p className="rpArticleP">
                                「こんにちは、ペンタローブのペン太郎です！」
                            </p>
                        </div>
                    </div>
                </li>

                {/* 5 */}
                <li className="rpLi">
                    <div className="rpNumberImgC">
                        <Image
                            src="/tool/pick.png"
                            width={565}
                            height={565}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                        <p className="rpNumberP">5</p>
                    </div>

                    <div className="rpContentC">
                        <div className="rpImgC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="responsive"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>

                        <div className="rpArticleC">
                            <p className="rpArticleTitleP">
                                修理物の状態を確認、修理同意書にサイン
                            </p>
                            <p className="rpArticleP">
                                ・ガラス
                                <br />
                                ・フロントパネル
                                <br />
                                ・スピーカー
                                <br />
                                ・カメラ
                                <br />
                                ・近接センサー
                                <br />
                                ・バッテリー
                                <br />
                                ・充電コネクタ
                                <br />
                                ・バイブレーション
                                <br />
                                などの修理前状態を確認して、改めて正確な値段を提示させていただきます。
                                <br />
                                問題がないようでしたら同意書にサインしていただき、修理を開始させていただきます。
                                <br />
                                修理許可書の内容は
                                <Link href="/contact">
                                    <a>こちら</a>
                                </Link>
                                からご確認いただけます
                            </p>
                        </div>
                    </div>
                </li>

                {/* 6 */}
                <li className="rpLi">
                    <div className="rpNumberImgC">
                        <Image
                            src="/tool/pick.png"
                            width={565}
                            height={565}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                        <p className="rpNumberP">6</p>
                    </div>

                    <div className="rpContentC">
                        <div className="rpImgC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="responsive"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>

                        <div className="rpArticleC">
                            <p className="rpArticleTitleP">修理開始</p>
                            <p className="rpArticleP">
                                修理工程は自由に撮影いただいて大丈夫です。
                                <br />
                                もし、修理の解説が聞きたい場合は喜んで解説いたします。
                            </p>
                        </div>
                    </div>
                </li>

                {/* 7 */}
                <li className="rpLi">
                    <div className="rpNumberImgC">
                        <Image
                            src="/tool/pick.png"
                            width={565}
                            height={565}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                        <p className="rpNumberP">7</p>
                    </div>

                    <div className="rpContentC">
                        <div className="rpImgC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="responsive"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>

                        <div className="rpArticleC">
                            <p className="rpArticleTitleP">修復成功</p>
                            <p className="rpArticleP">
                                おめでとうございます、修理が成功しました！
                                <br />
                                <br />
                                …修復不可だった場合は⑨へ
                            </p>
                        </div>
                    </div>
                </li>

                {/* 8 */}
                <li className="rpLi">
                    <div className="rpNumberImgC">
                        <Image
                            src="/tool/pick.png"
                            width={565}
                            height={565}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                        <p className="rpNumberP">8</p>
                    </div>

                    <div className="rpContentC">
                        <div className="rpImgC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="responsive"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>

                        <div className="rpArticleC">
                            <p className="rpArticleTitleP">お会計</p>
                            <p className="rpArticleP">
                                ・現金
                                <br />
                                ・peypey
                                <br />
                                のみでの支払いが可能です。
                                <br />
                                <br />
                                また、色々な割引をご用意しておりますので適用される際は一言よろしくお願いいたします。
                                割引一覧は
                                <Link href="/contact">
                                    <a>こちら</a>
                                </Link>
                                から
                            </p>
                        </div>
                    </div>
                </li>

                {/* 9 */}
                <li className="rpLi">
                    <div className="rpNumberImgC">
                        <Image
                            src="/tool/pick.png"
                            width={565}
                            height={565}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                        <p className="rpNumberP">9</p>
                    </div>

                    <div className="rpContentC">
                        <div className="rpImgC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="responsive"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>

                        <div className="rpArticleC">
                            <p className="rpArticleTitleP">
                                修復できなかった場合
                            </p>
                            <p className="rpArticleP">
                                ③で提示させていただいたお見積もり金額のうちの交通費のみお支払いいただきます。
                                <br />
                                ご了承よろしくお願いいたします。
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <style jsx>{`
                .rpC {
                    width: 100%;
                    margin-bottom: 2.5vh;
                }

                .rpLi {
                    display: flex;
                    flex-direction: column;
                }

                .rpNumberImgC {
                    width: 30%;
                    margin: 0 auto 2.5vh auto;
                    position: relative;
                }

                .rpNumberP {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-family: Helvetica;
                    font-size: 30px;
                    font-weight: 500;
                    color: #0088ff;
                }

                .rpContentC {
                    display: flex;
                }
                .rpArticleTitleP {
                    margin-bottom: 20px;
                    font-size: 20px;
                }
                .rpArticleP {
                    font-size: 15px;
                }

                a {
                    font-size: 15px;
                    color: var(--linkBlue);
                }

                .rpImgC {
                    width: 40%;
                }

                .rpArticleC {
                    width: 60%;
                    padding-left: 2.5vw;
                }

                //幅が960px以上かつ横画面 (タブレット横、pc)
                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .rpC {
                        padding: 0 5vw;
                    }
                    .rpNumberImgC {
                        width: 10%;
                    }

                    .rpImgC {
                        width: 20%;
                    }

                    .rpArticleC {
                        width: 80%;
                        padding-left: 5vw;
                    }
                }
            `}</style>
        </>
    );
}
