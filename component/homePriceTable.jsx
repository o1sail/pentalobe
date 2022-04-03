import React, { useState } from "react";
import { priceTableDataArray, priceTableDataKeyArray } from "../libs/priceChart";
import PriceTable from "./priceTable";

export default function HomePriceTable() {

    const [priceTableNumber, setPriceTableNumber] = useState(0);
    const selectingModel = () => {
        const selectTag = document.getElementById('selectId');
        if (selectTag.selectedIndex !== 0) {
            setPriceTableNumber(selectTag.selectedIndex - 1)
        }
    };

    return (
        <>
            <select className="modelSelect" id="selectId" onChange={() => selectingModel()}>
                <option value="0">モデルを選択して検索</option>
                {priceTableDataKeyArray.map((pd, index) => (
                    <option value={index}>{pd}</option>
                ))}
            </select>

            <div className="homePriceTableC">
                <PriceTable pd={priceTableDataArray[priceTableNumber]}/>
            </div>

            <style jsx>{`
                select {
                    width: fit-content;
                    margin: 0 auto 1vh auto;
                    outline: none;
                    border: 1px solid black;
                    border-radius: 5px;
                    text-align: center;
                    font-size: 20px;
                    color: var(--linkBlue);
                    background: transparent;
                }

                .homePriceTableC {
                    margin-bottom: 2.5vh;
                }
            `}</style>
        </>
    );
}