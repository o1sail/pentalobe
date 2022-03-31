import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <>
            <div className="logoInnerC">
                <Link href="/">
                    <a className="logoA">
                        <h1 className="logoImgC">
                            <Image
                                src="/logo.png"
                                width={180}
                                height={30}
                                layout="responsive"
                                objectFit="contain"
                                quality={50}
                                unoptimized={true}
                                alt="出張 郵送 スマホ修理 ペンタローブ"
                            />
                        </h1>
                        {/* <div className="logoImgC">
                            <Image
                                src="/logo.png"
                                width={180}
                                height={30}
                                layout="responsive"
                                objectFit="contain"
                                quality={50}
                                unoptimized={true}
                                alt=""
                            />
                        </div> */}
                        <div>
                            <p>出張/郵送</p>
                            <p>スマホ修理</p>
                        </div>
                    </a>
                </Link>
                
            </div>

            <style jsx>{`
                .logoInnerC {
                    padding: 0 15px;
                }

                .logoImgC {
                    width: 180px;
                    height: 30px;
                }

                .logoA {
                    display: flex;
                    flex-direction: row-reverse;
                }

                p {
                    font-size: 15px;
                }

                //幅が960px以上かつ横画面 (タブレット横、pc)
                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .logoInnerC {
                        width: fit-content;
                        margin: 0 auto;
                    }

                    .logoImgC {
                        width: 240px;
                        height: 40px;
                    }

                    p {
                        font-size: 20px;
                    }
                }
            `}</style>
        </>
    );
}