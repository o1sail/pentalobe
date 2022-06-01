import React, { useState } from "react";

import NavigationMenu from "../component/navigationMenu";
import NavigationButton from "../component/navigationButton";
import Logo from "./logo";

export default function Layout({ children }) {
    const [isNavOpened, setIsNavOpend] = useState(false);
    const menuFunction = () => {
        setIsNavOpend(!isNavOpened);
    };

    return (
        <>
            <div
                className={`baseC ${
                    isNavOpened ? "navIsOpened" : "navIsClosed"
                }`}
            >
                {/* メニュー */}
                <div
                    className={`navMenuC ${
                        isNavOpened ? "showNav" : "hideNav"
                    }`}
                    onClick={() => menuFunction()}
                >
                    <NavigationMenu />
                </div>

                {/* コンテンツ */}
                <div
                    className={`contentC ${
                        isNavOpened ? "hideContent" : "showContent"
                    }`}
                >
                    <div className="logoC">
                        <Logo />
                    </div>
                    {children}
                </div>

                {/* ロゴとボタン */}
                <div
                    className={`navButtonC ${
                        isNavOpened ? "openNavButton" : "closeNavButton"
                    }`}
                    onClick={() => menuFunction()}
                >
                    <NavigationButton isNavOpened={isNavOpened} />
                </div>
            </div>

            <style jsx>{`
                .baseC {
                    width: 100vw;
                    position: relative;
                }
                .navIsClosed {
                }
                .navIsOpened {
                }

                .navMenuC {
                    width: 100vw;
                    height: 100vh;

                    position: fixed;
                    top: 0;
                    z-index: 0;
                    overflow: hidden;
                }
                .showNav {
                }

                .contentC {
                    width: 100vw;
                    height: fit-content;
                    min-height: 100vh;
                    padding: calc(3vh + 30px + 3vh) 2.5vw 0 2.5vw;
                    position: absolute;
                    top: 0;
                    z-index: 10;

                    transition: 1s;
                    background-color: white;
                }
                .hideContent {
                    transform: translateX(-100%);
                    overflow: hidden;
                }

                .logoC {
                    position: absolute;
                    top: 3vh;
                    right: calc(6vw + 30px);
                }

                .navButtonC {
                    position: fixed;
                    top: 3vh;
                    right: 6vw;
                    z-index: 20;
                }

                /* 幅が959px未満かつ横画面 (スマホ横) */
                @media screen and (max-width: 959px) and (orientation: landscape) {
                    .contentC {
                        padding: calc(6vh + 30px + 3vh) 2.5vw 0 2.5vw;
                    }

                    .logoC {
                        top: 6vh;
                        right: auto;
                        left: calc(3vw + 30px);
                    }
                    .navButtonC {
                        right: auto;
                        top: 6vh;
                        left: 3vw;
                    }
                }

                /* 幅が520px以上かつ縦画面 (タブレット縦) */
                @media screen and (min-width: 520px) and (orientation: portrait) {
                    .contentC {
                        padding: calc(3vh + 30px + 3vh) 10vw 0 10vw;
                    }
                }

                /* 幅が960px以上かつ横画面 (タブレット横、pc) */
                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .navMenuC {
                        width: var(--min960l-nav-width);
                        position: fixed;
                        z-index: 0;
                        left: 0;
                    }

                    .navButtonC {
                        display: none;
                    }

                    .contentC {
                        width: calc(100vw - var(--min960l-nav-width));
                        height: fit-content;
                        margin-left: var(--min960l-nav-width);
                        padding: 2.5vh 5vw 0 5vw;
                        transition: none;
                    }
                    .hideContent {
                        transform: none;
                    }

                    .logoC {
                        position: static;
                        margin-bottom: 5vh;
                    }
                }
            `}</style>
        </>
    );
}



//--------------------------------------------
    // function handle(e) {
    //     e.preventDefault();
    //     console.log("ggg")
    //     console.log(isNavOpened)
    // }

    // useEffect(() => {

    //     console.log(isNavOpened)
    //     console.log("useEffect")

    //     if (isNavOpened === true) {
    //         document.addEventListener("wheel", handle, { passive: false });
    //         document.addEventListener("touchmove", handle, { passive: false });
    //         console.log("cant")
    //         console.log(isNavOpened)
    //     }
    //     if (isNavOpened === false) {
    //         document.removeEventListener("wheel", handle, { passive: false });
    //         document.removeEventListener("touchmove", handle, { passive: false });
    //         console.log("can")
    //         console.log(isNavOpened)
    //     }
    //     console.log(isNavOpened)
    // }, [isNavOpened])
//--------------------------------------------



    // useEffect(() => {
    //     isNavOpenedRef.current = isNavOpened //
    //     if (isNavOpenedRef.current === false) {
    //         document.removeEventListener("wheel", handle, { passive: false });
    //         document.removeEventListener("touchmove", handle, { passive: false });
    //         console.log("can")
    //         console.log(isNavOpenedRef)
    //     }
    //     if (isNavOpenedRef.current === true) {
    //         document.addEventListener("wheel", handle, { passive: false });
    //         document.addEventListener("touchmove", handle, { passive: false });
    //         console.log("cant")
    //         console.log(isNavOpenedRef)
    //     }
    // },[isNavOpened])

    // useEffect(() => {
    //     function handle(event) {
    //     event.preventDefault();
    //     console.log("ggg")
    //     console.log(isNavOpened)
    //     }
        

    //     console.log(isNavOpened)
    //     console.log("useEffect")
    //     if (isNavOpened === true) {
    //         document.addEventListener("wheel", handle, { passive: false });
    //         document.addEventListener("touchmove", handle, { passive: false });
    //         console.log("cant")
    //         console.log(isNavOpened)
    //     }
    //     if (isNavOpened === false) {
    //         document.removeEventListener("wheel", handle, { passive: false });
    //         document.removeEventListener("touchmove", handle, { passive: false });
    //         console.log("can")
    //         console.log(isNavOpened)
    //     }
    //     console.log(isNavOpened)
    // }, [isNavOpened])


    // function no_scroll() {
    //     document.addEventListener("wheel", handle, { passive: false });
    //     document.addEventListener("touchmove", handle, { passive: false });
    // }

    // function return_scroll() {
    //     document.removeEventListener("wheel", handle, { passive: true });
    //     document.removeEventListener("touchmove", handle, { passive: true });
    // }