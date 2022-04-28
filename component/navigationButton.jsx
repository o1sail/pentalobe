import Image from "next/image";

export default function NavigationButton({ isNavOpened }) {

    return (
        <div className="navButtonInnerC">
            <div className={`screwC ${ isNavOpened ? "navOpenScrew" : "navCloseScrew" } ${ isNavOpened ? "hidePentalobeScrew" : "showPentalobeScrew" }`}>
                <Image
                    src="/screw/pentalobe_screw2.png"
                    width={100}
                    height={100}
                    objectFit="cover"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <div className={`screwC ${ isNavOpened ? "navOpenScrew" : "navCloseScrew" } ${ isNavOpened ? "showPlusScrew" : "hidePlusScrew" }`}>
                <Image
                    src="/screw/plus_screw2.png"
                    width={100}
                    height={100}
                    objectFit="cover"
                    quality={20}
                    unoptimized={true}
                    alt=""
                />
            </div>

            <style jsx>{`
                .navButtonInnerC {
                    width: 30px; //
                    height: 30px; //
                    position: relative;

                    animation-name: roteteScrew;
                    animation-duration: 8s;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }

                @keyframes roteteScrew {
                    0%{
                        transform: none;
                    }
                    100%{
                        transform: rotate(-360deg);
                    }
                }

                .screwC {
                    height: 30px; //
                    position: absolute;
                    top: 0;
                    transition: 1s;
                }
                .showPentalobeScrew {
                    z-index: 10;
                }
                .hidePentalobeScrew {
                    z-index: 0;
                }
                .showPlusScrew {
                    z-index: 10;
                }
                .hidePlusScrew {
                    z-index: 0;
                }
                .navOpenScrew { //navCloseScrewは未記入→シンプルにできるはず
                    transform: rotate(-360deg);
                }
            `}</style>
        </div>
    );
}

// import Image from "next/image";

// export default function NavigationButton({ isNavOpened }) {

//     console.log(isNavOpened)

//     return (
//         <div className="navButtonInnerC">
//             <div className={`screwC ${ isNavOpened.isNavOpened ? "navOpenScrew" : "navCloseScrew" } ${ isNavOpened.isNavOpened ? "hidePentalobeScrew" : "showPentalobeScrew" }`}>
//                 <Image
//                     src="/screw/pentalobe_screw2.png"
//                     width={100}
//                     height={100}
//                     objectFit="cover"
//                     quality={20}
//                     unoptimized={true}
//                     alt=""
//                 />
//             </div>

//             <div className={`screwC ${ isNavOpened.isNavOpened ? "navOpenScrew" : "navCloseScrew" } ${ isNavOpened.isNavOpened ? "showPlusScrew" : "hidePlusScrew" }`}>
//                 <Image
//                     src="/screw/plus_screw2.png"
//                     width={100}
//                     height={100}
//                     objectFit="cover"
//                     quality={20}
//                     unoptimized={true}
//                     alt=""
//                 />
//             </div>

//             <style jsx>{`
//                 .navButtonInnerC {
//                     width: 30px; //
//                     height: 30px; //
//                     position: relative;

//                     animation-name: roteteScrew;
//                     animation-duration: 8s;
//                     animation-iteration-count: infinite;
//                     animation-timing-function: linear;
//                 }

//                 @keyframes roteteScrew {
//                     0%{
//                         transform: none;
//                     }
//                     100%{
//                         transform: rotate(-360deg);
//                     }
//                 }

//                 .screwC {
//                     height: 30px; //
//                     position: absolute;
//                     top: 0;
//                     transition: 1s;
//                 }
//                 .showPentalobeScrew {
//                     z-index: 10;
//                 }
//                 .hidePentalobeScrew {
//                     z-index: 0;
//                 }
//                 .showPlusScrew {
//                     z-index: 10;
//                 }
//                 .hidePlusScrew {
//                     z-index: 0;
//                 }
//                 .navOpenScrew { //navCloseScrewは未記入→シンプルにできるはず
//                     transform: rotate(-360deg);
//                 }
//             `}</style>
//         </div>
//     );
// }