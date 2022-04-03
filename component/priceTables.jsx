import {
    priceTableDataArray,
    priceTableDataKeyArray,
} from "../libs/priceChart";
import Image from "next/image";
import PriceTable from "./priceTable";

export default function PriceTables() {
    const smoothScroll = () => {
        const selectTag = document.getElementById("selectId");
        let targetElement = document.getElementById(selectTag.selectedIndex);
        if (selectTag.selectedIndex !== 0) {
            const rect = targetElement.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const target = rect + offset;
            window.scrollTo({
                top: target,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="selectC">
                <div className="selectImgC">
                    <Image
                        src="/tool/isesamo.png"
                        width={838}
                        height={142}
                        objectFit="contain"
                        quality={50}
                        unoptimized={true}
                        alt=""
                    />

                    <select
                        className="modelSelect"
                        id="selectId"
                        onChange={() => smoothScroll()}
                    >
                        <option value="0">タップしてモデルを検索</option>
                        {priceTableDataKeyArray.map((pd, index) => (
                            <option value={index + 1}>{pd}</option>
                        ))}
                    </select>
                </div>
            </div>

            <ul>
                {priceTableDataArray.map((pd, index) => (
                    <li id={index + 1}>
                        <PriceTable pd={pd} />
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .selectC {
                    width: 95vw;
                    height: fit-content;
                    margin: 0 auto;

                    position: fixed;
                    bottom: 1vh;
                    z-index: 5;
                    font-size: 0;
                }

                select {
                    width: fit-content;
                    height: 100%;
                    margin: 0 auto;

                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    z-index: 10;

                    text-align: center;
                    outline: none;
                    border: none;
                    font-weight: bold;
                    font-size: 20px;
                    appearance: none;
                    color: white;
                    background: transparent;
                }

                ul {
                    width: 100%;
                    margin: 0 auto 20vw auto; //20vw:selectの高さ
                }
                li {
                    margin-bottom: 5vh;
                }
                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .selectC {
                        width: 30vw; //(100-15-5-5)75vw以下
                        right: 0;
                        left: var(--min960l-nav-width);
                    }
                    ul {
                        width: 50vw;
                        margin: 0 auto 7vw auto; //7vw:selectの高さ
                    }
                }
            `}</style>
        </>
    );
}

/*

import {
    priceTableDataArray,
    priceTableDataKeyArray,
} from "../libs/priceChart";
import Image from "next/image";
import PriceTable from "./priceTable";

export default function PriceTables() {

    const smoothScroll = () => {
        const selectTag = document.getElementById("selectId");
        let targetElement = document.getElementById(selectTag.selectedIndex);
        if (selectTag.selectedIndex !== 0) {
            const rect = targetElement.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const target = rect + offset;
            window.scrollTo({
                top: target,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="selectC">
                <select
                    className="modelSelect"
                    id="selectId"
                    onChange={() => smoothScroll()}
                >
                    <option value="0">タップしてモデルを検索</option>
                    {priceTableDataKeyArray.map((pd, index) => (
                        <option value={index + 1}>{pd}</option>
                    ))}
                </select>

                <div className="selectImgC">
                    <Image
                        src="/tool/isesamo.png"
                        width={838}
                        height={142}
                        objectFit="contain"
                        quality={50}
                        unoptimized={true}
                        alt=""
                    />
                </div>
            </div>

            <ul>
                {priceTableDataArray.map((pd, index) => (
                    <li id={index + 1}>
                        <PriceTable pd={pd} />
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .selectC {
                    width: 95vw; //
                    margin: 0 auto;
                    text-align: center;
                    position: fixed;
                    bottom: 1vh; //
                    z-index: 5;
                }

                select {
                    width: 100%;
                    height: 50px;
                    margin: 0 auto;
                    position: fixed;
                    left: 0;
                    bottom: 2vh;
                    z-index: 10;
                    outline: none;
                    border: none;
                    text-align: center;
                    font-weight: bold;
                    font-size: 20px;
                    appearance: none;
                    color: white;
                    background: transparent;
                }

                ul {
                    width: 100%;
                    margin: 0 auto 20vw auto ; //20vw:selectの高さ

                }
                li {
                    margin-bottom: 5vh;
                }
                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .selectC {
                        width: 30vw; //(100-15-5-5)75vw以下
                        right: 0;
                        left: var(--min960l-nav-width);
                    }
                    select {
                        width: 50vw;
                        right: 0;
                        bottom: 3vh;
                        left: var(--min960l-nav-width);
                    }
                    ul {
                        width: 50vw;
                        margin: 0 auto 7vw auto ; //7vw:selectの高さ
                    }
                }
            `}</style>
        </>
    );
}

*/
