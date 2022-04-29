import Image from "next/image";
import Link from "next/link";

import { client } from "../libs/client";

import SwiperMo from "../component/swiper";
import HomePriceTable from "../component/homePriceTable";
import BlogList from "../component/blogList";

export default function Home(props) {

    return (
        <>
            <div className="toolC">
                <Image
                    src="/tool/pentalobe_driver.png"
                    width={1340}
                    height={166}
                    objectFit="contain"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <div className="homeArticleC introductionC">
                <h3>hello 故障したApple製品。</h3>
                <p>
                    出張/郵送
                    スマホ修理ペンタローブです。現在は都内を中心に出張修理を行っております。
                    <br />
                    あいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねの
                </p>
            </div>

            <div className="toolC">
                <Image
                    src="/tool/spudger_nologo.png"
                    width={1050}
                    height={51}
                    objectFit="contain"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <div className="homeArticleC">
                <h4>修理の流れ</h4>
                <SwiperMo />

                <div className="learnMoreC">
                    <Link href="/repairingProcess">
                        <a>
                            <p className="learnMoreP">さらに詳しく</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="toolC">
                <Image
                    src="/tool/pinset.png"
                    width={558}
                    height={60}
                    objectFit="contain"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <div className="homeArticleC homePC">
                <h4>簡単お見積もり</h4>
                <HomePriceTable />

                <div className="learnMoreC">
                    <Link href="/price">
                        <a>
                            <p className="learnMoreP">全価格表を見る</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="toolC">
                <Image
                    src="/tool/keeper.png"
                    width={656}
                    height={77}
                    objectFit="contain"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <div className="homeArticleC homeBC">
                <h4>おすすめブログ</h4>
                <BlogList blog={props.recommendBlog} />

                <h4 className="titleH4">最新ブログ</h4>
                <BlogList blog={props.latestBlog} />

                <div className="learnMoreC">
                    <Link href="/blog/1">
                        <a>
                            <p className="learnMoreP">ブログ一覧へ</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="toolC">
                <Image
                    src="/tool/isesamo.png"
                    width={838}
                    height={142}
                    objectFit="contain"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <div className="homeArticleC">
                <h4>実績,ギャラリー</h4>
            </div>

            <div className="toolC">
                <Image
                    src="/tool/iopener.png"
                    width={679}
                    height={383}
                    objectFit="contain"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <style jsx>{`
                .homeArticleC {
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                }

                p {
                    text-align: center;
                }

                .learnMoreP {
                    width: fit-content;
                    margin: 0 auto;
                    color: var(--linkBlue);
                }

                .learnMoreP:hover {
                    text-decoration: underline;
                }

                .toolC {
                    width: 90vw;
                    margin: 5vh auto;
                }

                @media screen and (min-width: 520px) and (orientation: portrait) {
                    .toolC {
                        width: 70vw;
                    }
                }

                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .toolC {
                        width: 40vw;
                    }

                    .homePC {
                        width: 50vw;
                    }

                    .homeBC {
                        width: 60vw;
                    }
                }
            `}</style>
        </>
    );
}

export const getStaticProps = async () => {
    const recommendBlog = await client.get({
        endpoint: "blog?ids=pd5vti723ih,c9bbsdaz8,2px_scig7l1p",
    });
    const latestBlog = await client.get({ endpoint: "blog?limit=3" });

    return {
        props: {
            recommendBlog: recommendBlog.contents,
            latestBlog: latestBlog.contents,
        },
    };
};
