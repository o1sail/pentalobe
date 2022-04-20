import React, { useState } from "react";
import Image from "next/image";

import NavigationMenu from "../../component/navigationMenu";
import NavigationButton from "../../component/navigationButton";
import Logo from "../../component/logo";
import BlogList from "../../component/blogList";
import { Pagination } from "../../component/pagination";
import { client } from "../../libs/client";

const PER_PAGE = 4; //1ページの表示件数

export default function BlogPageId(props) {
    const [isNavOpened, setIsNavOpend] = useState(false);
    const menuFunction = () => {
        setIsNavOpend(!isNavOpened);
    };

    return (
        <>
            <div className={`baseC ${isNavOpened ? "navIsOpened" : "navIsClosed"}`}>

                {/* メニュー */}
                <div className={`navMenuC ${isNavOpened ? "showNav" : "hideNav"}`} onClick={() => menuFunction()}>
                    <NavigationMenu onBlog="onBlog"/>
                </div>

                {/* コンテンツ */}
                <div className={`contentC ${isNavOpened ? "hideContent" : "showContent"}`}>
                    <div className="logoC">
                        <Logo/>
                    </div>

                    <div className="blogIntroC">
                        <h3>
                            <Image
                                src="/logo_blog.png"
                                width={240}
                                height={30}
                                objectFit="contain"
                                quality={100}
                                unoptimized={true}
                                alt="ペンタローブログ" />
                        </h3>
                        <h4 className="blogIntroP">修復不可能なときは Oh wow... と3回唱えます。
                            <br/>スティーブ・ジョークです。
                        </h4>
                    </div>

                    <BlogList blog={props.blog} />
                    <Pagination totalCount={props.totalCount} />
                    
                    <h4 className="blogInductionP">おすすめブログ</h4>
                    <BlogList blog={props.recommendBlog} />
                    <h4 className="blogInductionP">人気ブログ</h4>
                    <BlogList blog={props.popularBlog} />


                </div>

                {/* ボタン */}
                <div className={`navButtonC ${isNavOpened ? "openNavButton" : "closeNavButton"}`} onClick={() => menuFunction()}>
                    <NavigationButton isNavOpened={isNavOpened}/>
                </div>

            </div>

            <style jsx>{`
                .blogIntroC {
                    text-align: center;
                }

                .blogIntroP {
                    font-size: 15px;
                }

                .blogInductionP {
                    text-align: center;
                    font-size: 20px;
                }
            `}</style>
        </>
    );
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
        (repo) => `/blog/${repo}`
    );

    return { paths, fallback: false }; //falseにするとgetStaticPathsで返されないパスは全て404ページへ
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({
        endpoint: `blog?offset=${(id - 1) * 4}&limit=4`, //1ページの表示件数
    });

    const recommendBlog = await client.get({ endpoint: "blog?ids=pd5vti723ih,c9bbsdaz8,2px_scig7l1p" });
    const popularBlog = await client.get({ endpoint: "blog?ids=pd5vti723ih,c9bbsdaz8,2px_scig7l1p" });

    return {
        props: {
            blog: data.contents,
            totalCount: data.totalCount,
            recommendBlog: recommendBlog.contents,
            popularBlog: popularBlog.contents,
        },
    };
};


// export default function BlogPageId({ blog, totalCount, recommendBlog, latestBlog }) {
//     const [isNavOpened, setIsNavOpend] = useState(false);
//     const menuFunction = () => {
//         setIsNavOpend(!isNavOpened);
//     };

//     return (
//         <>
//             <div className={`baseC ${isNavOpened ? "navIsOpened" : "navIsClosed"}`}>

//                 {/* メニュー */}
//                 <div className={`navMenuC ${isNavOpened ? "showNav" : "hideNav"}`} onClick={() => menuFunction()}>
//                     <NavigationMenu onBlog="onBlog"/>
//                 </div>

//                 {/* コンテンツ */}
//                 <div className={`contentC ${isNavOpened ? "hideContent" : "showContent"}`}>
//                     <div className="logoC">
//                         <Logo/>
//                     </div>

//                     <div className="blogIntroC">
//                         <Image
//                             src="/logo_blog.png"
//                             width={240}
//                             height={30}
//                             objectFit="contain"
//                             quality={100}
//                             unoptimized={true}
//                             alt="" />
//                         <p className="blogIntroP">修復不可能なときは"Oh wow..."と3回唱えます。
//                             <br/>スティーブ・ジョークです。
//                         </p>
//                     </div>

//                     <BlogList blog={blog} />
//                     <Pagination totalCount={totalCount} />
                    
//                     <BlogList blog={recommendBlog} />
//                     <BlogList blog={latestBlog} />


//                 </div>

//                 {/* ボタン */}
//                 <div className={`navButtonC ${isNavOpened ? "openNavButton" : "closeNavButton"}`} onClick={() => menuFunction()}>
//                     <NavigationButton isNavOpened={isNavOpened}/>
//                 </div>

//             </div>

//             <style jsx>{`
//                 .blogIntroC {
//                     text-align: center;
//                 }

//                 .blogIntroP {
//                     font-size: 15px;
//                 }
//             `}</style>
//         </>
//     );
// }

// export const getStaticPaths = async () => {
//     const data = await client.get({ endpoint: "blog" });
//     const range = (start, end) =>
//         [...Array(end - start + 1)].map((_, i) => start + i);
//     const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map(
//         (repo) => `/blog/${repo}`
//     );

//     return { paths, fallback: false }; //falseにするとgetStaticPathsで返されないパスは全て404ページへ
// };

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const data = await client.get({
//         endpoint: `blog?offset=${(id - 1) * 4}&limit=4`, //1ページの表示件数
//     });

//     const recommendBlog = await client.get({ endpoint: "blog?ids=pd5vti723ih,c9bbsdaz8,2px_scig7l1p" });
//     const latestBlog = await client.get({ endpoint: "blog?limit=3" });

//     return {
//         props: {
//             blog: data.contents,
//             totalCount: data.totalCount,
//             recommendBlog: recommendBlog.contents,
//             latestBlog: latestBlog.contents,
//         },
//     };
// };