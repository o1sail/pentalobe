export const priceChartData = [
    {
        "iPhone": [
            {
                "iPhone 13 Pro Max": [
                    ["パネル修理", "A000", "~1h"],
                    ["バッテリー交換", "A000", "~1h"],
                    ["コネクター修理", "A000", "~2h"],
                    ["前面カメラ修理", "A000", "~1h"],
                    ["背面カメラ修理", "A000", "~1.5h"],
                    ["水没修理", "A000", "要確認"],
                    ["コメントA", "iPhone_13_mini_frame_landscape.png"],
                ],
            },
            {
                "iPhone 13 Pro": [
                    ["パネル修理", "B000", "~1h"],
                    ["バッテリー交換", "B000", "~1h"],
                    ["コネクター修理", "B000", "~2h"],
                    ["前面カメラ修理", "B000", "~1h"],
                    ["背面カメラ修理", "B000", "~1.5h"],
                    ["水没修理", "B000", "要確認"],
                    ["コメントB", "iPhone_13_mini_frame_landscape.png"],
                ],
            },
            {
                "iPhone 13 mini": [
                    ["パネル修理", "C000", "~1h"],
                    ["バッテリー交換", "C000", "~1h"],
                    ["コネクター修理", "C000", "~2h"],
                    ["前面カメラ修理", "C000", "~1h"],
                    ["背面カメラ修理", "C000", "~1.5h"],
                    ["水没修理", "C000", "要確認"],
                    ["コメントC", "iPhone_13_mini_frame_landscape.png"],
                ],
            },
            {
                "iPhone 13": [
                    ["パネル修理", "D000", "~1h"],
                    ["バッテリー交換", "D000", "~1h"],
                    ["コネクター修理", "D000", "~2h"],
                    ["前面カメラ修理", "D000", "~1h"],
                    ["背面カメラ修理", "D000", "~1.5h"],
                    ["水没修理", "D000", "要確認"],
                    ["コメントD", "iPhone_13_mini_frame_landscape.png"],
                ],
            },
        ],
    },

    {
        "ガラスコーティング": [
            {
                "ガラスコーティング": [
                    ["スマホ片面", "X000", "~0.5h"],
                    ["スマホ全面", "X000", "~1h"],
                    ["タブレット片面", "X000", "~1h"],
                    ["タブレット全面", "X000", "~1h"],
                    ["コメントX", "iPhone_13_mini_frame_landscape.png"],
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