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
                    <NavigationMenu onHome="onHome" />
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
                    //background-color: green;
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
