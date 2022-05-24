import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export const Pagination = ( blog ) => {

    const PER_PAGE = 20;

    const router = useRouter();
    const currentPageNumber = Number(router.asPath.substring(router.asPath.lastIndexOf('/') + 1))
    const selectedPage = (number) => {
        if (number === currentPageNumber) {
            return "currentPage"
        }
    };
    const backPage = () => {
        if (currentPageNumber === 1) {
            return "startPage"
        }
    };
    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
    const nextPage = () => {
        if (currentPageNumber === range.length || range.length === 1 || currentPageNumber === 1) {
            return "endPage"
        }
    };

    console.log(range.length)

    return (
        <>
            <div className="paginationC">
                <ul>
                    <li>
                        <div className="paginationImgC">
                            <Image
                                src="/screw/base_screw.png"
                                width={30}
                                height={30}
                                objectFit="cover"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                            <div className="xxx"></div>
                        </div>
                        <Link href={`/blog/${currentPageNumber - 1}`}>
                            <a>
                                <div className="pageNumberC">←</div>
                            </a>
                        </Link>
                        <div className={backPage()}></div>
                    </li>

                    {range(1, Math.ceil(blog.totalCount / PER_PAGE)).map(
                        (number, index) => (
                            <li key={index}>
                                <div className="paginationImgC">
                                    <Image
                                        src="/screw/base_screw.png"
                                        width={30}
                                        height={30}
                                        objectFit="cover"
                                        quality={20}
                                        unoptimized={true}
                                        alt=""
                                    />
                                </div>
                                <Link href={`/blog/${number}`}>
                                    <a>
                                        <div className="pageNumberC">{number}</div>
                                    </a>
                                </Link>
                                <div className={selectedPage(number)}></div>
                            </li>
                        )
                    )}

                    <li>
                        <div className="paginationImgC">
                            <Image
                                src="/screw/base_screw.png"
                                width={30}
                                height={30}
                                objectFit="cover"
                                quality={20}
                                unoptimized={true}
                                alt=""
                            />
                        </div>
                        <Link href={`/blog/${currentPageNumber + 1}`}>
                            <a>
                                <div className="pageNumberC">→</div>
                            </a>
                        </Link>
                        <div className={nextPage()}></div>
                    </li>
                </ul>
            </div>

            <style jsx>{`
                .paginationC {
                    width: fit-content;
                    margin: 0 auto 2.5vh auto;
                }
                ul {
                    display: flex;
                    flex-direction: row;
                }

                li {
                    position: relative;
                    margin: 0 5px;
                }

                .paginationImgC {
                    width: 30px; //
                    height: 30px; //
                }

                .pageNumberC {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    text-align: center;
                    line-height: 30px;
                    color: #aaaaaa;
                }

                .startPage, .currentPage, .endPage {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.5);
                }
            `}</style>
        </>
    );
};