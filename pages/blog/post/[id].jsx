//個別ブログページ
import { client } from "../../../libs/client";
import Moment from "react-moment";
import Link from "next/link";
import Image from "next/image";
import Seo from "../../../component/seo";

export default function BlogId({
    blog,
    oldestBlog,
    latestBlog,
    prevBlog,
    nextBlog,
}) {

    const isOldestBlog = () => {
        if (blog.id === oldestBlog.id) {
            return "oldestBlog";
        }
    };

    const isLatestBlog = () => {
        if (blog.id === latestBlog.id) {
            return "latestBlog";
        }
    };

    return (
        <>
            <Seo
                pageTitle={blog.title}
                pageDescription={blog.previewtext}
            />

            <div className="blogUnitC">
                <h3 className="blogUnitTitle">{blog.title}</h3>
                <p className="blogUnitDate">
                    <Moment format="YYYY/MM/DD">{blog.publishedAt}</Moment>
                </p>
                <div
                    className="blogUnitArticle"
                    dangerouslySetInnerHTML={{ __html: `${blog.richtext}` }}
                />
                <ul className="blogHeadingCategory">
                    カテゴリー：
                    {blog.category.map((bc) => (
                        <li className="CategoryText" key={bc.category}>
                            {bc},
                        </li>
                    ))}
                </ul>
            </div>

            <div className="blogInductionC">
                <div className="blogInductionInnerC">
                    <Link href={`/blog/post/${prevBlog.id}`}>
                        <a>
                            <div className="blogInductionImgC">
                                <Image
                                    src="/tool/simpin.png"
                                    width={352}
                                    height={82}
                                    objectFit="contain"
                                    quality={20}
                                    unoptimized={true}
                                    alt=""
                                />
                                <p className="blogInductionLeft">前の記事へ</p>
                            </div>
                        </a>
                    </Link>
                    <div className={isOldestBlog()}></div>
                </div>

                <div className="blogInductionInnerC">
                    <Link href="/blog/1">
                        <a>
                            <p className="blogInductionCenter">一覧へ</p>
                        </a>
                    </Link>
                </div>

                <div className="blogInductionInnerC">
                    <Link href={`/blog/post/${nextBlog.id}`}>
                        <a>
                            <div className="blogInductionImgC">
                                <Image
                                    src="/tool/simpin2.png"
                                    width={352}
                                    height={82}
                                    objectFit="contain"
                                    quality={20}
                                    unoptimized={true}
                                    alt=""
                                />
                                <p className="blogInductionRight">次の記事へ</p>
                            </div>
                        </a>
                    </Link>
                    <div className={isLatestBlog()}></div>
                </div>
            </div>

            <style jsx>{`
                .blogUnitC {
                    width: 100%;
                    margin: 0 auto;
                }

                h3,
                p {
                    text-align: center;
                }

                .blogUnitTitle {
                    font-size: 30px;
                    margin-bottom: 2.5vh;
                }

                .blogUnitDate {
                    font-size: 15px;
                    margin-bottom: 2.5vh;
                }

                .blogUnitArticle {
                    width: 100%;
                    margin: 0 auto;
                }

                .blogHeadingCategory {
                    margin-top: 5px;
                    display: flex;
                    flex-wrap: wrap;
                    font-size: 15px;
                }

                .blogInductionC {
                    width: 100%;
                    display: flex;
                }

                .blogInductionInnerC {
                    width: calc(100% / 3);
                    position: relative;
                    justify-content: center;
                }

                .blogInductionLeft,
                .blogInductionCenter,
                .blogInductionRight {
                    position: absolute;
                    top: 50%;
                    font-size: 13px;
                }

                .blogInductionLeft {
                    right: 37%;
                    transform: translate(50%, -50%);
                }

                .blogInductionCenter {
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .blogInductionRight {
                    left: 37%;
                    transform: translate(-50%, -50%);
                }

                .oldestBlog,
                .latestBlog {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: rgba(255, 255, 255, 0.5);
                }

                /* 幅が960px以上かつ横画面 (タブレット横、pc) */
                @media screen and (min-width: 960px) and (orientation: landscape) {
                    .blogInductionC {
                        width: 60%; //
                        margin: 0 auto;
                    }
                }
            `}</style>
        </>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/blog/post/${content.id}`);
    return { paths, fallback: false }; //falseにするとgetStaticPathsで返されないパスは全て404ページへ
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    const oldest = await client.get({
        endpoint: "blog",
        queries: {
            limit: 1,
            orders: "publishedAt",
        },
    });
    const oldestBlog = oldest.contents[0] || {};

    const latest = await client.get({
        endpoint: "blog",
        queries: {
            limit: 1,
            orders: "-publishedAt",
        },
    });
    const latestBlog = latest.contents[0] || {};

    const prev = await client.get({
        endpoint: "blog",
        queries: {
            limit: 1,
            orders: "-publishedAt",
            filters: `publishedAt[less_than]${data.publishedAt}`,
        },
    });
    const prevBlog = prev.contents[0] || {};

    const next = await client.get({
        endpoint: "blog",
        queries: {
            limit: 1,
            orders: "publishedAt",
            filters: `publishedAt[greater_than]${data.publishedAt}`,
        },
    });
    const nextBlog = next.contents[0] || {};

    return {
        props: {
            blog: data,
            oldestBlog: oldestBlog,
            latestBlog: latestBlog,
            prevBlog: prevBlog,
            nextBlog: nextBlog,
        },
    };
};
