import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, A11y, Autoplay, Mousewheel } from "swiper";
import Image from "next/image";

SwiperCore.use([Pagination]);

export default function SwiperMo() {
    return (
        <>
            <div className="swiperC">
                <Swiper
                    modules={[Pagination, A11y, Autoplay, Mousewheel]}
                    slidesPerView={1}
                    autoplay={{delay: 7000, disableOnInteraction: false,}}
                    loop={true}
                    speed={1000}
                    pagination={{ clickable: true }}
                    //pagination={{el: ".swiper-pagination"},{ clickable: true }}
                    mousewheel={true}
                    style={{ width: "100%", height: "100%" }}
                >
                    <SwiperSlide
                        style={{ width: "100%", height: "100%" }}
                        className="swiperSlide"
                    >
                        <div className="swiperSlideInnerC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="fill"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide
                        style={{ width: "100%", height: "100%" }}
                        className="swiperSlide"
                    >
                        <div className="swiperSlideInnerC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="fill"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide
                        style={{ width: "100%", height: "100%" }}
                        className="swiperSlide"
                    >
                        <div className="swiperSlideInnerC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="fill"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide
                        style={{ width: "100%", height: "100%" }}
                        className="swiperSlide"
                    >
                        <div className="swiperSlideInnerC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="fill"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide
                        style={{ width: "100%", height: "100%" }}
                        className="swiperSlide"
                    >
                        <div className="swiperSlideInnerC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="fill"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide
                        style={{ width: "100%", height: "100%" }}
                        className="swiperSlide"
                    >
                        <div className="swiperSlideInnerC">
                            <Image
                                src="/iphoneFrame/iPhone_13_mini_frame.png"
                                width={2381}
                                height={4802}
                                layout="fill"
                                objectFit="contain"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <style jsx>{`
                .swiperC {
                    width: 95vw;
                    height: 95vw;
                    margin-bottom: 2.5vh;
                }
                .swiperSlideInnerC {
                    width: 100%;
                    height: 100%;
                }

                @media screen and (min-width: 520px) and (orientation: portrait) {
                    .swiperC {
                        width: 80vw;
                        height: 30vh;
                    }
                }

                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .swiperC {
                        width: 100%;
                        height: 50vh;
                    }
                }
            `}</style>
        </>
    );
}
