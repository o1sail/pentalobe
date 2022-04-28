import React, { useState, useEffect } from "react";

import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";


export default function NavigationMenu() {

    const [classNamePath, setClassNamePath] = useState("onhome")
    const router = useRouter();
    const path = router.pathname

    useEffect(() => {
        if (path === "/") {
            setClassNamePath("onhome")
        } else if (path.indexOf("/blog") === 0) {
            setClassNamePath("onblog")
        } else {
            const changedPath = path.replace("/", "on")
            setClassNamePath(changedPath)
            console.log(changedPath)
        }
        console.log(classNamePath)
    },)

    // const router = useRouter();
    // const path = router.pathname
    // useEffect(() => {
    //     if (path === "/") {
    //         setOnNav("onhome")
    //     } else if (path.indexOf("/blog") === 0) {
    //         setOnNav("onblog")
    //     } else {
    //         const classNamePath = path.replace("/", "on")
    //         setOnNav(classNamePath)
    //     }
    //     console.log(onNav)
    // },)

    return (
        <header>
            <div className="navBackgroundImg">
                <Image
                    src="/iPhone13mini_internals.png"
                    layout="fill"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <div className="navBackgroundImgL">
                <Image
                    src="/iPhone13mini_internals_landscape.png"
                    layout="fill"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <ul className="navTocC">

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <Link href="/">
                            <a onClick={() => { setClassNamePath("onhome") }}>
                                <h2 className={`navTocH2OnHome ${classNamePath}`}>ホーム</h2>
                            </a>
                        </Link>

                        <div className="navTocImgC">
                            <Image
                                src="/tool/pentalobe_driver_short_resize.png"
                                width={250}
                                height={50}
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </div>
                </li>


                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <Link href="/repairingProcess">
                            <a onClick={() => { setClassNamePath("onrepairingProcess") }}>
                                <h2 className={`navTocH2OnRepairingProcess ${classNamePath}`}>修理の流れ</h2>
                            </a>
                        </Link>

                        <div className="navTocImgC">
                            <Image
                                src="/tool/spudger_nologo_resize.png"
                                width={250}
                                height={50}
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </div>
                </li>

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <Link href="/price">
                            <a>
                                <h2 className={`navTocH2OnPrice ${classNamePath}`}>価格表</h2>
                            </a>
                        </Link>

                        <div className="navTocImgC">
                            <Image
                                src="/tool/isesamo_resize.png"
                                width={250}
                                height={50}
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </div>
                </li>

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <Link href="/blog/1">
                            <a>
                                <h2 className={`navTocH2OnBlog ${classNamePath}`}>ブログ</h2>
                            </a>
                        </Link>

                        <div className="navTocImgC">
                            <Image
                                src="/tool/pinset_resize.png"
                                width={250}
                                height={50}
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </div>
                </li>

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <Link href="/contact">
                            <a>
                                <h2 className={`navTocH2OnContact ${classNamePath}`}>お問い合わせ</h2>
                            </a>
                        </Link>

                        <div className="navTocImgC">
                            <Image
                                src="/tool/iHold_resize.png"
                                width={250}
                                height={50}
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </div>
                </li>

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <a className="navTocA" href="">Line</a>
                        <div className="navTocIconC">
                            <Image
                                src="/icon/screw_icon_line.png"
                                width={25}
                                height={25}
                                //objectFit="cover"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </div>
                </li>

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <a className="navTocA" href="tel:080-1234-5678">Tell</a>
                        <div className="navTocIconC">
                            <a href="tel:080-1234-5678">
                                <Image
                                    src="/icon/screw_icon_tell.png"
                                    width={25}
                                    height={25}
                                    //objectFit="cover"
                                    quality={20}
                                    unoptimized={true}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </li>

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <a className="navTocA" href="mailto:pentalobe.repair@gmail.com">Mail</a>
                        <div className="navTocIconC">
                            <a href="mailto:pentalobe.repair@gmail.com">
                                <Image
                                    src="/icon/screw_icon_mail.png"
                                    width={25}
                                    height={25}
                                    //objectFit="cover"
                                    quality={20}
                                    unoptimized={true}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </li>

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <a className="navTocA" href="">Instagram</a>
                        <div className="navTocIconC">
                            <Image
                                src="/icon/screw_icon_instagram.png"
                                width={25}
                                height={25}
                                //objectFit="cover"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </div>
                </li>

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <a className="navTocA" href="">Twitter</a>
                        <div className="navTocIconC">
                            <Image
                                src="/icon/screw_icon_twitter.png"
                                width={25}
                                height={25}
                                //objectFit="cover"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </div>
                </li>

                <li className="navTocLi">
                    <div className="navTocTitleC">
                        <a className="navTocA" href="">Facebook</a>
                        <div className="navTocIconC">
                            <Image
                                src="/icon/screw_icon_facebook.png"
                                width={25}
                                height={25}
                                //objectFit="cover"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </div>
                </li>

            </ul>

            <p className="copyrightP">©︎ 2022 Pentalobe</p>

            <style jsx>{`
                header {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }

                .navBackgroundImg {
                    width: 100vw;
                    height: 100vh;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    //z-index: 10;
                    z-index: 1;
                }
                .navBackgroundImgL {
                    display: none;
                }

                .navTocC {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    position: absolute;
                    top: 32vh;
                    right: 7vw;
                    bottom: 16vh;
                    left: 36vw;
                    //z-index: 20;
                    z-index: 2;
                }

                .navTocLi {
                    width: fit-content;
                    height: calc(100% / 12); //目次が増えれば変更
                    display: flex;
                    align-items: center;
                }

                .copyrightP {
                    color: grey;
                }

                .navTocH2OnHome,
                .navTocH2OnRepairingProcess,
                .navTocH2OnPrice,
                .navTocH2OnBlog,
                .navTocH2OnContact {
                    color: grey;
                    font-size: 20px;
                }

                .navTocImgC {
                    display: none;
                }

                .navTocA {
                    display: none;
                    font-size: 20px;
                }

                .copyrightP {
                    position: absolute;
                    bottom: 16vh;
                    left: 37vw;
                    //z-index: 20;
                    z-index: 2;
                    font-size: 15px;
                }

                //幅が959px未満かつ横画面 (スマホ横)
                @media screen and (max-width: 959px) and (orientation: landscape) {
                    .navBackgroundImg {
                        display: none;
                    }
                    .navBackgroundImgL {
                        width: 100vw;
                        height: 100vh;
                        display: block;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        //z-index: 10;
                        z-index: 1;
                    }
                    .navTocC {
                        top: 7vh;
                        right: 16vw;
                        bottom: 36vh;
                        left: 32vw;
                        flex-direction: row;
                    }

                    .navTocLi {
                        width: calc(100% / 12); //目次が増えれば変更
                        height: auto;
                        justify-content: center;
                    }

                    .navTocH2OnHome,
                    .navTocH2OnRepairingProcess,
                    .navTocH2OnPrice,
                    .navTocH2OnBlog,
                    .navTocH2OnContact {
                        writing-mode: vertical-rl;
                    }

                    .copyrightP {
                        right: 17vw;
                        bottom: 35vh;
                        left: auto;
                    }
                }

                //幅が960px以上かつ横画面 (タブレット横、pc)
                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .navBackgroundImg, .navBackgroundImgL {
                        display: none;
                    }

                    .navTocC {
                        top: 0;
                        left: auto;
                        bottom: 0;
                        right: 0;
                        z-index: auto;
                        align-items: flex-end; //大事
                    }

                    .navTocTitleC {
                        display: flex;
                        flex-direction: row-reverse;
                        align-items: center;
                    }

                    .navTocH2OnHome,
                    .navTocH2OnRepairingProcess,
                    .navTocH2OnPrice,
                    .navTocH2OnBlog,
                    .navTocH2OnContact {
                        width: 120px;
                        margin-left: var(--min960l-nav-h2-margin-left);
                        transition: .5s;
                        color: black;
                    }

                    .navTocH2OnHome:hover,
                    .navTocH2OnRepairingProcess:hover,
                    .navTocH2OnPrice:hover,
                    .navTocH2OnBlog:hover,
                    .navTocH2OnContact:hover,
                    .navTocH2OnHome.onhome,
                    .navTocH2OnRepairingProcess.onrepairingProcess,
                    .navTocH2OnPrice.onprice,
                    .navTocH2OnBlog.onblog,
                    .navTocH2OnContact.oncontact {
                        margin-left: 0px;
                    }

                    .navTocImgC {
                        width: calc(calc(100vh / 12) * 5);
                        height: calc(100vh / 12);
                        display: flex;
                        flex-direction: row-reverse;
                    }

                    .navTocA {
                        width: 120px; //
                        display: block;
                        margin-left: var(--min960l-nav-h2-margin-left);
                    }

                    .navTocIconC {
                        width: calc(var(--min960l-nav-width) - var(--min960l-nav-h2-margin-left) - 120px);
                        height: 25px;
                        text-align: center;
                    }

                    .navTocA:hover + .navTocIconC {
                        animation-name: roteteScrew;
                        animation-duration: 1.5s;
                        animation-iteration-count: infinite;
                        animation-timing-function: linear;
                    }

                    @keyframes roteteScrew {
                        0%{
                            transform: none;
                        }
                        100%{
                            transform: rotate(-360deg);
                        }
                    }

                    .copyrightP {
                        bottom: 0;
                        left: 0;
                        color: black;
                    }
                }
            `}</style>
        </header>
    );
}

// import Image from "next/image";
// import Link from "next/link";


// export default function NavigationMenu({
//     onHome,
//     onRepairingFlow,
//     onPrice,
//     onBlog,
//     onContact,
// }) {
//     return (
//         <header>
//             <div className="navBackgroundImg">
//                 <Image
//                     src="/iPhone13mini_internals.png"
//                     layout="fill"
//                     quality={20}
//                     unoptimized={true}
//                     alt=""
//                 />
//             </div>

//             <div className="navBackgroundImgL">
//                 <Image
//                     src="/iPhone13mini_internals_landscape.png"
//                     layout="fill"
//                     quality={20}
//                     unoptimized={true}
//                     alt=""
//                 />
//             </div>

//             <ul className="navTocC">

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <Link href="/">
//                             <a>
//                                 <h2 className={`navTocH2 ${onHome}`}>ホーム</h2>
//                             </a>
//                         </Link>

//                         <div className="navTocImgC">
//                             <Image
//                                 src="/tool/pentalobe_driver_short_resize.png"
//                                 width={250}
//                                 height={50}
//                                 objectFit="contain"
//                                 quality={20}
//                                 unoptimized={true}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </li>


//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <Link href="/repairingProcess">
//                             <a>
//                                 <h2 className={`navTocH2 ${onRepairingFlow}`}>修理の流れ</h2>
//                             </a>
//                         </Link>

//                         <div className="navTocImgC">
//                             <Image
//                                 src="/tool/spudger_nologo_resize.png"
//                                 width={250}
//                                 height={50}
//                                 objectFit="contain"
//                                 quality={20}
//                                 unoptimized={true}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </li>

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <Link href="/price">
//                             <a>
//                                 <h2 className={`navTocH2 ${onPrice}`}>価格表</h2>
//                             </a>
//                         </Link>

//                         <div className="navTocImgC">
//                             <Image
//                                 src="/tool/isesamo_resize.png"
//                                 width={250}
//                                 height={50}
//                                 objectFit="contain"
//                                 quality={20}
//                                 unoptimized={true}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </li>

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <Link href="/blog/1">
//                             <a>
//                                 <h2 className={`navTocH2 ${onBlog}`}>ブログ</h2>
//                             </a>
//                         </Link>

//                         <div className="navTocImgC">
//                             <Image
//                                 src="/tool/pinset_resize.png"
//                                 width={250}
//                                 height={50}
//                                 objectFit="contain"
//                                 quality={20}
//                                 unoptimized={true}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </li>

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <Link href="/contact">
//                             <a>
//                                 <h2 className={`navTocH2 ${onContact}`}>お問い合わせ</h2>
//                             </a>
//                         </Link>

//                         <div className="navTocImgC">
//                             <Image
//                                 src="/tool/iHold_resize.png"
//                                 width={250}
//                                 height={50}
//                                 objectFit="contain"
//                                 quality={20}
//                                 unoptimized={true}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </li>

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <a className="navTocA" href="">Line</a>
//                         <div className="navTocIconC">
//                             <Image
//                                 src="/icon/screw_icon_line.png"
//                                 width={25}
//                                 height={25}
//                                 //objectFit="cover"
//                                 quality={20}
//                                 unoptimized={true}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </li>

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <a className="navTocA" href="tel:080-1234-5678">Tell</a>
//                         <div className="navTocIconC">
//                             <a href="tel:080-1234-5678">
//                                 <Image
//                                     src="/icon/screw_icon_tell.png"
//                                     width={25}
//                                     height={25}
//                                     //objectFit="cover"
//                                     quality={20}
//                                     unoptimized={true}
//                                     alt=""
//                                 />
//                             </a>
//                         </div>
//                     </div>
//                 </li>

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <a className="navTocA" href="mailto:pentalobe.repair@gmail.com">Mail</a>
//                         <div className="navTocIconC">
//                             <a href="mailto:pentalobe.repair@gmail.com">
//                                 <Image
//                                     src="/icon/screw_icon_mail.png"
//                                     width={25}
//                                     height={25}
//                                     //objectFit="cover"
//                                     quality={20}
//                                     unoptimized={true}
//                                     alt=""
//                                 />
//                             </a>
//                         </div>
//                     </div>
//                 </li>

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <a className="navTocA" href="">Instagram</a>
//                         <div className="navTocIconC">
//                             <Image
//                                 src="/icon/screw_icon_instagram.png"
//                                 width={25}
//                                 height={25}
//                                 //objectFit="cover"
//                                 quality={20}
//                                 unoptimized={true}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </li>

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <a className="navTocA" href="">Twitter</a>
//                         <div className="navTocIconC">
//                             <Image
//                                 src="/icon/screw_icon_twitter.png"
//                                 width={25}
//                                 height={25}
//                                 //objectFit="cover"
//                                 quality={20}
//                                 unoptimized={true}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </li>

//                 <li className="navTocLi">
//                     <div className="navTocTitleC">
//                         <a className="navTocA" href="">Facebook</a>
//                         <div className="navTocIconC">
//                             <Image
//                                 src="/icon/screw_icon_facebook.png"
//                                 width={25}
//                                 height={25}
//                                 //objectFit="cover"
//                                 quality={20}
//                                 unoptimized={true}
//                                 alt=""
//                             />
//                         </div>
//                     </div>
//                 </li>

//             </ul>

//             <p className="copyrightP">©︎ 2022 Pentalobe</p>

            // <style jsx>{`
            //     header {
            //         width: 100%;
            //         height: 100%;
            //         position: relative;
            //     }

            //     .navBackgroundImg {
            //         width: 100vw;
            //         height: 100vh;
            //         position: absolute;
            //         top: 0;
            //         right: 0;
            //         bottom: 0;
            //         left: 0;
            //         //z-index: 10;
            //         z-index: 1;
            //     }
            //     .navBackgroundImgL {
            //         display: none;
            //     }

            //     .navTocC {
            //         display: flex;
            //         flex-direction: column;
            //         align-items: center;

            //         position: absolute;
            //         top: 32vh;
            //         right: 7vw;
            //         bottom: 16vh;
            //         left: 36vw;
            //         //z-index: 20;
            //         z-index: 2;
            //     }

            //     .navTocLi {
            //         width: fit-content;
            //         height: calc(100% / 12); //目次が増えれば変更
            //         display: flex;
            //         align-items: center;
            //     }

            //     .navTocH2, .copyrightP {
            //         color: grey;
            //     }

            //     .navTocH2, .navTocA {
            //         font-size: 20px;
            //     }

            //     .navTocImgC {
            //         display: none;
            //     }

            //     .navTocA {
            //         display: none;
            //     }

            //     .copyrightP {
            //         position: absolute;
            //         bottom: 16vh;
            //         left: 37vw;
            //         //z-index: 20;
            //         z-index: 2;
            //         font-size: 15px;
            //     }

            //     //幅が959px未満かつ横画面 (スマホ横)
            //     @media screen and (max-width: 959px) and (orientation: landscape) {
            //         .navBackgroundImg {
            //             display: none;
            //         }
            //         .navBackgroundImgL {
            //             width: 100vw;
            //             height: 100vh;
            //             display: block;
            //             position: absolute;
            //             top: 0;
            //             right: 0;
            //             bottom: 0;
            //             left: 0;
            //             //z-index: 10;
            //             z-index: 1;
            //         }
            //         .navTocC {
            //             top: 7vh;
            //             right: 16vw;
            //             bottom: 36vh;
            //             left: 32vw;
            //             flex-direction: row;
            //         }

            //         .navTocLi {
            //             width: calc(100% / 12); //目次が増えれば変更
            //             height: auto;
            //             justify-content: center;
            //         }

            //         .navTocH2 {
            //             writing-mode: vertical-rl;
            //         }

            //         .copyrightP {
            //             right: 17vw;
            //             bottom: 35vh;
            //             left: auto;
            //         }
            //     }

            //     //幅が960px以上かつ横画面 (タブレット横、pc)
            //     @media screen and (min-width: 960px) and (orientation: landscape) {
            //         .navBackgroundImg, .navBackgroundImgL {
            //             display: none;
            //         }

            //         .navTocC {
            //             top: 0;
            //             left: auto;
            //             bottom: 0;
            //             right: 0;
            //             z-index: auto;
            //             align-items: flex-end; //大事
            //         }

            //         .navTocTitleC {
            //             display: flex;
            //             flex-direction: row-reverse;
            //             align-items: center;
            //         }

            //         .navTocH2 {
            //             width: 120px;
            //             margin-left: var(--min960l-nav-h2-margin-left);
            //             transition: .5s;
            //             color: black;
            //         }

            //         .navTocH2:hover,
            //         .onHome,
            //         .onRepairingFlow,
            //         .onPrice,
            //         .onBlog,
            //         .onContact {
            //             margin-left: 0px;
            //         }

            //         .navTocImgC {
            //             width: calc(calc(100vh / 12) * 5);
            //             height: calc(100vh / 12);
            //             display: flex;
            //             flex-direction: row-reverse;
            //         }

            //         .navTocA {
            //             width: 120px; //
            //             display: block;
            //             margin-left: var(--min960l-nav-h2-margin-left);
            //         }

            //         .navTocIconC {
            //             width: calc(var(--min960l-nav-width) - var(--min960l-nav-h2-margin-left) - 120px);
            //             height: 25px;
            //             text-align: center;
            //         }

            //         .navTocA:hover + .navTocIconC {
            //             animation-name: roteteScrew;
            //             animation-duration: 1.5s;
            //             animation-iteration-count: infinite;
            //             animation-timing-function: linear;
            //         }

            //         @keyframes roteteScrew {
            //             0%{
            //                 transform: none;
            //             }
            //             100%{
            //                 transform: rotate(-360deg);
            //             }
            //         }

            //         .copyrightP {
            //             bottom: 0;
            //             left: 0;
            //             color: black;
            //         }
            //     }

            // `}</style>
//         </header>
//     );
// }