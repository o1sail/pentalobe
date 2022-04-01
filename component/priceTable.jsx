import Image from "next/image";

export default function PriceTable({ pd }) {
    //キー
    const modelName = Object.keys(pd);
    //キー値
    const modelValue = pd[modelName];
    //最後の値を除いたキー値配列
    const modelRepairValue = modelValue.slice(0, modelValue.length - 1);
    //最後の配列
    const modelValueEnd = modelValue[modelValue.length - 1];

    return (
        <>
            <div className="priceTableC">
                <h4 className="modelName">{Object.keys(pd)}</h4>

                <div className="priceTableFrameC">
                    <div className="frameImgC">
                        <Image
                            src={`/iphoneFrame/${modelValueEnd[1]}`}
                            width={200}
                            height={100}
                            layout="responsive"
                            objectFit="contain"
                            quality={20}
                            unoptimized={true}
                            alt=""
                        />
                    </div>

                    <table>
                        <tr>
                            <th>修理内容</th>
                            <th>価格</th>
                            <th>所要時間</th>
                        </tr>

                        {modelRepairValue.map((mrv) => (
                            <tr>
                                {mrv.map((mrvRow) => (
                                    <td>{mrvRow}</td>
                                ))}
                            </tr>
                        ))}
                    </table>
                </div>

                <p className="modelComment">{modelValueEnd[0]}</p>
            </div>

            <style jsx>{`
                .priceTableC {
                    margin: 0 auto;
                }
                .modelName {
                    text-align: center;
                    //font-family: BlinkMacSystemFont;
                    font-weight: bold;
                    font-size: 20px;
                }

                .priceTableFrameC {
                    width: 100%;
                    height: fit-content;
                    margin: 0 auto 1vh auto;
                }

                .frameImgC {
                    display: none;
                }

                table {
                    width: 100%;
                    border-spacing: 0; //要
                }

                th, td {
                    margin: 0;
                    padding: 0;
                    font-size: 15px;
                    line-height: 30px; /*一時(fontsize)*/
                    color: black;
                }

                th {
                    border-bottom: double;
                }

                th:nth-of-type(1) {
                    text-align: left;
                }

                th:nth-of-type(2),
                th:nth-of-type(3),
                td:nth-of-type(2),
                td:nth-of-type(3) {
                    white-space: nowrap;;
                    text-align: center;
                }

                .modelComment {
                    text-align: center;
                    font-size: 15px;
                }

                //幅が960px以上かつ横画面 (タブレット横、pc)
                @media screen and (min-width: 960px) and (orientation: landscape) {

                    .priceTableFrameC {
                        position: relative;
                    }

                    .frameImgC {
                        display: block;
                    }

                    table {
                        width: 85%;
                        margin: auto;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                    }
                    tr, th, td {
                        width: 100%;
                    }
                    /*
                    .priceTableFrameC {
                        width: 60vw; //要調整
                        height: fit-content;
                        margin: 0 auto;
                        position: relative;
                    }
                    
                    table {
                        margin: auto;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                    }
                    */
                }
            `}</style>
        </>
    );
}