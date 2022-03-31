import React, { useState } from "react";
import NavigationMenu from "../component/navigationMenu";
import NavigationButton from "../component/navigationButton";
import Logo from "../component/logo";

export default function Custom404() {

    const [isNavOpened, setIsNavOpend] = useState(false);
    const menuFunction = () => {
        setIsNavOpend(!isNavOpened);
    };

    return (
        <>
            <div className={`baseC ${isNavOpened ? "navIsOpened" : "navIsClosed"}`}>

                {/* メニュー */}
                <div className={`navMenuC ${isNavOpened ? "showNav" : "hideNav"}`} onClick={() => menuFunction()}>
                    <NavigationMenu onHome="onHome"/>
                </div>

                {/* コンテンツ */}
                <div className={`contentC ${isNavOpened ? "hideContent" : "showContent"}`}>
                    <div className="logoC">
                        <Logo/>
                    </div>
                    <h3>このページは存在しません</h3>
                </div>

                {/* ボタン */}
                <div className={`navButtonC ${isNavOpened ? "openNavButton" : "closeNavButton"}`} onClick={() => menuFunction()}>
                    <NavigationButton isNavOpened={isNavOpened}/>
                </div>

            </div>

            <style jsx>{`
            `}</style>
        </>
    );
}