export const priceChartData = [
    {
        "iPhone": [
            {
                "iPhone 13 Pro Max": [
                    ["パネル修理", "1000", "~1h"],
                    ["バッテリー交換", "2000", "~1h"],
                    ["コネクター修理", "3000", "~2h"],
                    ["前面カメラ修理", "4000", "~1h"],
                    ["背面カメラ修理", "5000", "~1.5h"],
                    ["水没修理", "6000", "要確認"],
                    ["コメント1", "iPhone_13_mini_frame_landscape.png"],
                ],
            },
            {
                "iPhone 13 Pro": [
                    ["パネル修理", "", "~1h"],
                    ["バッテリー交換", "", "~1h"],
                    ["コネクター修理", "", "~2h"],
                    ["前面カメラ修理", "", "~1h"],
                    ["背面カメラ修理", "", "~1.5h"],
                    ["水没修理", "", "要確認"],
                    ["コメント2", "iPhone_13_mini_frame_landscape.png"],
                ],
            },
            {
                "iPhone 13 mini": [
                    ["パネル修理", "", "~1h"],
                    ["バッテリー交換", "", "~1h"],
                    ["コネクター修理", "", "~2h"],
                    ["前面カメラ修理", "", "~1h"],
                    ["背面カメラ修理", "", "~1.5h"],
                    ["水没修理", "", "要確認"],
                    ["コメント3", "iPhone_13_mini_frame_landscape.png"],
                ],
            },
            {
                "iPhone 13": [
                    ["パネル修理", "", "~1h"],
                    ["バッテリー交換", "", "~1h"],
                    ["コネクター修理", "", "~2h"],
                    ["前面カメラ修理", "", "~1h"],
                    ["背面カメラ修理", "", "~1.5h"],
                    ["水没修理", "", "要確認"],
                    ["コメント4", "iPhone_13_mini_frame_landscape.png"],
                ],
            },
        ],
    },

    {
        "ガラスコーティング": [
            {
                "ガラスコーティング": [
                    ["スマホ片面", "3000", "~0.5h"],
                    ["スマホ全面", "4500", "~1h"],
                    ["タブレット片面", "4000", "~1h"],
                    ["タブレット全面", "5000", "~1h"],
                    ["コーティングコメント", "iPhone_13_mini_frame_landscape.png"],
                ],
            },
        ],
    },
];

export const priceTableDataArray = []
for (let i = 0; i < priceChartData.length; i++) {
    const key = Object.keys(priceChartData[i])
    const priceCategoryValue = priceChartData[i][key]
    for (let i = 0; i < priceCategoryValue.length; i++) {
        priceTableDataArray.push(priceCategoryValue[i])
    }
}

export const priceTableDataKeyArray = []
for (let i = 0; i < priceTableDataArray.length; i++) {
    priceTableDataKeyArray.push(Object.keys(priceTableDataArray[i]))
}


/*
export const priceDataIphone = [
    {
        "iPhone 13 Pro Max": [
            ["パネル修理", "1000", "~1h"],
            ["バッテリー交換", "2000", "~1h"],
            ["コネクター修理", "3000", "~2h"],
            ["前面カメラ修理", "4000", "~1h"],
            ["背面カメラ修理", "5000", "~1.5h"],
            ["水没修理", "6000", "要確認"],
            ["コメント1", "iPhone-13-mini-frame.png"],
        ],
    },
    {
        "iPhone 13 Pro": [
            ["パネル修理", "", "~1h"],
            ["バッテリー交換", "", "~1h"],
            ["コネクター修理", "", "~2h"],
            ["前面カメラ修理", "", "~1h"],
            ["背面カメラ修理", "", "~1.5h"],
            ["水没修理", "", "要確認"],
            ["コメント2", "iPhone-13-mini-frame.png"],
        ],
    },
    {
        "iPhone 13 mini": [
            ["パネル修理", "", "~1h"],
            ["バッテリー交換", "", "~1h"],
            ["コネクター修理", "", "~2h"],
            ["前面カメラ修理", "", "~1h"],
            ["背面カメラ修理", "", "~1.5h"],
            ["水没修理", "", "要確認"],
            ["コメント3", "iPhone-13-mini-frame.png"],
        ],
    },
    {
        "iPhone 13": [
            ["パネル修理", "", "~1h"],
            ["バッテリー交換", "", "~1h"],
            ["コネクター修理", "", "~2h"],
            ["前面カメラ修理", "", "~1h"],
            ["背面カメラ修理", "", "~1.5h"],
            ["水没修理", "", "要確認"],
            ["コメント4", "iPhone-13-mini-frame.png"],
        ],
    },
];

export const priceDataGlassCoating = [
    {
        "ガラスコーティング": [
            ["スマホ片面", "3000", "~0.5h"],
            ["スマホ全面", "4500", "~1h"],
            ["タブレット片面", "4000", "~1h"],
            ["タブレット全面", "5000", "~1h"],
            ["コーティングコメント", "iPhone-13-mini-frame.png"],
        ],
    },
];
*/