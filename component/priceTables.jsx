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
                    font-family: BlinkMacSystemFont;
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

/*
import { priceDataIphone, priceDataGlassCoating } from "../libs/priceChart";
import PriceTable from "./priceTable";


export default function PriceTables() {

    const modelNameIphone = []
    for (let i = 0; i < priceDataIphone.length; i++) {
        modelNameIphone.push(Object.keys(priceDataIphone[i]))
    }

    const modelNameGlassCoating = []
    for (let i = 0; i < priceDataGlassCoating.length; i++) {
        modelNameGlassCoating.push(Object.keys(priceDataGlassCoating[i]))
    }

    const smoothScroll = () => {
        const selectTag = document.getElementById('selectId');
        let targetElement = document.getElementById(selectTag.value);
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const target = rect + offset;
        window.scrollTo({
            top: target,
            behavior: "smooth",
        });
    };

    return (
        <>
            <select className="modelSelect" id="selectId" onChange={() => smoothScroll()}>

                <option value="0">aaa</option>
                {modelNameIphone.map((mn, index) => (
                    <option value={index}>{mn}</option>
                ))}

                <option value={priceDataIphone.length}>ガラスコーティング</option>
                {modelNameGlassCoating.map((mn, index) => (
                    //既出のmodelName数をindexに足す
                    <option value={index + priceDataIphone.length}>{mn}</option>
                ))}

            </select>

            <ul>
                {priceDataIphone.map((pd, index) => (
                    <li id={index}>
                        <PriceTable pd={pd}/>
                    </li>
                ))}
            </ul>

            <ul>
                {priceDataGlassCoating.map((pd, index) => (
                    //既出のmodelName数をindexに足す
                    <li id={index + priceDataIphone.length}>
                        <PriceTable pd={pd}/>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                select {
                    width: 100%;
                    outline: none;
                    border: none;
                }

                ul {
                    width: 100%;
                    margin: 0 auto;
                }
                li {
                    margin-bottom: 5vh;
                }
                @media screen and (min-width: 960px) and (orientation: landscape) {
                    ul {
                        width: 50vw;
                    }
                }
            `}</style>
        </>
    );
}
*/
