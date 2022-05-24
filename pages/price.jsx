import Seo from "../component/seo";
import PriceTables from "../component/priceTables";

export default function Price() {

    return (
        <>
            <Seo
                pageTitle={"Price"}
                pageDescription={"東京都内を中心とした出張iPhone修理サービス。価格表はこちらから。"}
            />

            <h3>価格表</h3>

            <PriceTables/>

            <style jsx>{`
                h3 {
                    margin-bottom: 5vh;
                }
            `}</style>
        </>
    );
}