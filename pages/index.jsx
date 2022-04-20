import React, { useState, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { client } from "../libs/client"
import NavigationMenu from "../component/navigationMenu";
import NavigationButton from "../component/navigationButton";
import Logo from "../component/logo";
import SwiperMo from "../component/swiper";
import HomePriceTable from "../component/homePriceTable";
import BlogList from "../component/blogList";

export default function Home(props) {

    const isNavOpened = useRef(false)
    const [isNavOpened2, setIsNavOpend2] = useState(isNavOpened.current);
    //const [isNavOpened, setIsNavOpend] = useState(false);
    const menuFunction = () => {
        isNavOpened.current = !isNavOpened.current
        setIsNavOpend2(!isNavOpened2);
        console.log(isNavOpened2)
    };

    return (
        <>
            <div className={`baseC ${isNavOpened.current ? "navIsOpened" : "navIsClosed"}`}>

                {/* メニュー */}
                <div className={`navMenuC ${isNavOpened.current ? "showNav" : "hideNav"}`} onClick={() => menuFunction()}>
                    <NavigationMenu onHome="onHome"/>
                </div>

                {/* コンテンツ */}
                <div className={`contentC ${isNavOpened.current ? "hideContent" : "showContent"}`}>

                    <div className="logoC">
                        <Logo/>
                    </div>

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
                        <h4>hello 故障したApple製品。</h4>
                        <p>
                            出張/郵送 スマホ修理ペンタローブです。現在は都内を中心に出張修理を行っております。<br />
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

                </div>

                {/* ロゴとボタン */}
                <div className={`navButtonC ${isNavOpened.current ? "openNavButton" : "closeNavButton"}`} onClick={() => menuFunction()}>
                    <NavigationButton isNavOpened={isNavOpened.current}/>
                </div>

            </div>

            <style jsx>{`
                .homeArticleC { //一時的
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                }

                h4 {
                    font-size: 20px;
                }

                p, h4 {
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
                    margin: 2.5vh auto;
                }

                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .toolC {
                        width: 30vw;
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
    const recommendBlog = await client.get({ endpoint: "blog?ids=pd5vti723ih,c9bbsdaz8,2px_scig7l1p" });
    const latestBlog = await client.get({ endpoint: "blog?limit=3" });

    return {
        props: {
            recommendBlog: recommendBlog.contents,
            latestBlog: latestBlog.contents,
        },
    };
};




// import React, { useState } from "react";

// import Image from "next/image";
// import Link from "next/link";
// import { client } from "../libs/client"
// import NavigationMenu from "../component/navigationMenu";
// import NavigationButton from "../component/navigationButton";
// import Logo from "../component/logo";
// import SwiperMo from "../component/swiper";
// import HomePriceTable from "../component/homePriceTable";
// import BlogList from "../component/blogList";

// export default function Home(props) {

//     const [isNavOpened, setIsNavOpend] = useState(false);
//     const menuFunction = () => {
//         setIsNavOpend(!isNavOpened);
//     };

//     return (
//         <>
//             <div className={`baseC ${isNavOpened ? "navIsOpened" : "navIsClosed"}`}>

//                 {/* メニュー */}
//                 <div className={`navMenuC ${isNavOpened ? "showNav" : "hideNav"}`} onClick={() => menuFunction()}>
//                     <NavigationMenu onHome="onHome"/>
//                 </div>

//                 {/* コンテンツ */}
//                 <div className={`contentC ${isNavOpened ? "hideContent" : "showContent"}`}>

//                     <div className="logoC">
//                         <Logo/>
//                     </div>

//                     <div className="toolC">
//                         <Image
//                             src="/tool/pentalobe_driver.png"
//                             width={1340}
//                             height={166}
//                             objectFit="contain"
//                             quality={20}
//                             unoptimized={true}
//                             alt=""
//                         />
//                     </div>

//                     <div className="homeArticleC introductionC">
//                         <h4>hello 故障したApple製品。</h4>
//                         <p>
//                             出張/郵送 スマホ修理ペンタローブです。現在は都内を中心に出張修理を行っております。<br />
//                             あいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねのあいうえおかきくけこさしすせそたちつてとなにぬねの
//                         </p>
//                     </div>

//                     <div className="toolC">
//                         <Image
//                             src="/tool/spudger_nologo.png"
//                             width={1050}
//                             height={51}
//                             objectFit="contain"
//                             quality={20}
//                             unoptimized={true}
//                             alt=""
//                         />
//                     </div>

//                     <div className="homeArticleC">
//                         <h4>修理の流れ</h4>
//                         <SwiperMo />

//                         <div className="learnMoreC">
//                             <Link href="/repairingProcess">
//                                 <a>
//                                     <p className="learnMoreP">さらに詳しく</p>
//                                 </a>
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="toolC">
//                         <Image
//                             src="/tool/pinset.png"
//                             width={558}
//                             height={60}
//                             objectFit="contain"
//                             quality={20}
//                             unoptimized={true}
//                             alt=""
//                         />
//                     </div>

//                     <div className="homeArticleC homePC">
//                         <h4>簡単お見積もり</h4>
//                         <HomePriceTable />

//                         <div className="learnMoreC">
//                             <Link href="/price">
//                                 <a>
//                                     <p className="learnMoreP">全価格表を見る</p>
//                                 </a>
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="toolC">
//                         <Image
//                             src="/tool/keeper.png"
//                             width={656}
//                             height={77}
//                             objectFit="contain"
//                             quality={20}
//                             unoptimized={true}
//                             alt=""
//                         />
//                     </div>

//                     <div className="homeArticleC homeBC">
//                         <h4>おすすめブログ</h4>
//                         <BlogList blog={props.recommendBlog} />

//                         <h4 className="titleH4">最新ブログ</h4>
//                         <BlogList blog={props.latestBlog} />

//                         <div className="learnMoreC">
//                             <Link href="/blog/1">
//                                 <a>
//                                     <p className="learnMoreP">ブログ一覧へ</p>
//                                 </a>
//                             </Link>
//                         </div>

//                     </div>

//                     <div className="toolC">
//                         <Image
//                             src="/tool/isesamo.png"
//                             width={838}
//                             height={142}
//                             objectFit="contain"
//                             quality={20}
//                             unoptimized={true}
//                             alt=""
//                         />
//                     </div>

//                     <div className="homeArticleC">
//                         <h4>実績,ギャラリー</h4>
//                     </div>

//                     <div className="toolC">
//                         <Image
//                             src="/tool/iopener.png"
//                             width={679}
//                             height={383}
//                             objectFit="contain"
//                             quality={20}
//                             unoptimized={true}
//                             alt=""
//                         />
//                     </div>

//                 </div>

//                 {/* ロゴとボタン */}
//                 <div className={`navButtonC ${isNavOpened ? "openNavButton" : "closeNavButton"}`} onClick={() => menuFunction()}>
//                     <NavigationButton isNavOpened={isNavOpened}/>
//                 </div>

//             </div>

//             <style jsx>{`
//                 .homeArticleC { //一時的
//                     margin: 0 auto;
//                     display: flex;
//                     flex-direction: column;
//                 }

//                 h4 {
//                     font-size: 20px;
//                 }

//                 p, h4 {
//                     text-align: center;
//                 }

//                 .learnMoreP {
//                     width: fit-content;
//                     margin: 0 auto;
//                     color: var(--linkBlue);
//                 }

//                 .learnMoreP:hover {
//                     text-decoration: underline;
//                 }

//                 .toolC {
//                     width: 90vw;
//                     margin: 2.5vh auto;
//                 }

//                 @media screen and (min-width: 960px) and (orientation: landscape) {
//                     .toolC {
//                         width: 30vw;
//                     }

//                     .homePC {
//                         width: 50vw;
//                     }

//                     .homeBC {
//                         width: 60vw;
//                     }
//                 }
//             `}</style>
//         </>
//     );
// }

// export const getStaticProps = async () => {
//     const recommendBlog = await client.get({ endpoint: "blog?ids=pd5vti723ih,c9bbsdaz8,2px_scig7l1p" });
//     const latestBlog = await client.get({ endpoint: "blog?limit=3" });

//     return {
//         props: {
//             recommendBlog: recommendBlog.contents,
//             latestBlog: latestBlog.contents,
//         },
//     };
// };