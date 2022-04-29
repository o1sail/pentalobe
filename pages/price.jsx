import PriceTables from "../component/priceTables";

export default function Price() {

    return (
        <>
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