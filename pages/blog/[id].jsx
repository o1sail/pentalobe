import Image from "next/image";

import BlogList from "../../component/blogList";
import { Pagination } from "../../component/pagination";
import { client } from "../../libs/client";

import Seo from "../../component/seo";

const PER_PAGE = 20; //1ページの表示件数

export default function BlogPageId(props) {

    return (
        <>
            <Seo
                pageTitle={"Blog List"}
                pageDescription={"東京都内を中心とした出張iPhone修理サービス。ブログ一覧はこちらから。"}
            />

            <div className="blogIntroC">
                <h3>
                    <Image
                        src="/logo_blog.png"
                        width={240}
                        height={30}
                        objectFit="contain"
                        quality={100}
                        unoptimized={true}
                        alt="ペンタローブログ"
                    />
                </h3>
                <p className="blogIntroP">
                    修復不可能になった場合は Oh wow... と3回唱えます。
                    <br />
                    スティーブ・ジョークです。
                </p>
            </div>

            <BlogList blog={props.blog} />
            <Pagination totalCount={props.totalCount} />

            <h4 className="blogInductionP">おすすめブログ</h4>
            <BlogList blog={props.recommendBlog} />
            <h4 className="blogInductionP">人気ブログ</h4>
            <BlogList blog={props.popularBlog} />

            <style jsx>{`
                .blogIntroC {
                    text-align: center;
                    margin-bottom: 5vh;
                }

                h3 {
                    margin-bottom: 0;
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
        endpoint: `blog?offset=${(id - 1) * 20}&limit=20`, //1ページの表示件数
    });

    const recommendBlog = await client.get({
        endpoint: "blog?ids=pd5vti723ih,c9bbsdaz8,2px_scig7l1p",
    });
    const popularBlog = await client.get({
        endpoint: "blog?ids=pd5vti723ih,c9bbsdaz8,2px_scig7l1p",
    });

    return {
        props: {
            blog: data.contents,
            totalCount: data.totalCount,
            recommendBlog: recommendBlog.contents,
            popularBlog: popularBlog.contents,
        },
    };
};
