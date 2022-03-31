import React, { useState } from "react";

import NavigationButton from "../component/navigationButton";
import NavigationMenu from "../component/navigationMenu";
import Logo from "../component/logo";
import PriceTables from "../component/priceTables";

export default function Price() {

    const [isNavOpened, setIsNavOpend] = useState(false);
    const menuFunction = () => {
        setIsNavOpend(!isNavOpened);
    };

    return (
        <>
            <div className={`baseC ${isNavOpened ? "navIsOpened" : "navIsClosed"}`}>

                <div className={`navMenuC ${isNavOpened ? "showNav" : "hideNav"}`} onClick={() => menuFunction()}>
                    <NavigationMenu onPrice="onPrice"/> {/*ページ別編集*/}
                </div>

                <div className={`contentC ${isNavOpened ? "hideContent" : "showContent"}`}>
                    <div className="logoC">
                        <Logo/>
                    </div>
                    <h3>価格表</h3>
                    <PriceTables/>
                </div>

                <div className={`navButtonC ${isNavOpened ? "openNavButton" : "closeNavButton"}`} onClick={() => menuFunction()}>
                    <NavigationButton isNavOpened={isNavOpened}/>
                </div>

            </div>

            <style jsx>{`
            `}</style>
        </>
    );
}