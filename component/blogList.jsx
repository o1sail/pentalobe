import Link from "next/link";
import Moment from "react-moment";

export default function BlogList({ blog }) {
    return (
        <>
            <ul>
                {blog.map((blog) => (
                    <li className="blogContentLi" key={blog.id}>
                        <Link href={`/blog/post/${blog.id}`}>
                            <a>
                                <img className="blogHeadingImg" src={blog.heroimage.url} alt="" />
                                <div className="blogHeadingText">
                                    <p className="blogHeadingDate">
                                        <Moment format="YYYY/MM/DD">
                                            {blog.publishedAt}
                                        </Moment>
                                    </p>
                                    <p className="blogHeadingTitle">
                                        {blog.title}
                                    </p>
                                    <ul className="blogHeadingCategory">
                                        カテゴリー：
                                        {blog.category.map((bc) => (
                                            <li className="CategoryText">
                                                {bc},
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="blogPreviewText">
                                        {blog.previewtext}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                ul {
                    width: 100%;
                    height: fit-content;
                    margin-bottom: 2.5vh;
                }

                a {
                    display: flex;
                    align-items: center;
                }
                .blogContentLi {
                    width: 100%;
                    height: 30vw;
                    margin-bottom: 2.5vw; /* 要調整 */

                    overflow: hidden;
                }

                .blogHeadingImg {
                    width: 30vw;
                    height: 30vw;
                    object-fit: contain;
                }

                .blogHeadingText {
                    width: calc(100vw - 5vw - 30vw);
                    max-height: 30vw;
                }

                .blogHeadingDate {
                    font-size: 12.5px;
                }

                .blogHeadingTitle {
                    font-size: 20px;
                    line-height: 1.2;
                }

                .blogHeadingCategory {
                    margin-top: 5px;
                    display: flex;
                    flex-wrap: wrap;
                    font-size: 15px;
                }

                .blogPreviewText {
                    display: none;
                }

                @media screen and (min-width: 520px) and (orientation: portrait) {
                    .blogHeadingText {
                        width: calc(100vw - 20vw - 30vw);
                    }
                }

                /* 幅が960px以上かつ横画面 (タブレット横、pc) */
                @media screen and (min-width: 960px) and (orientation: landscape) {
                    ul {
                        margin-bottom: auto;
                    }

                    .blogContentLi {
                        height: 15vw;
                        border-bottom: 5vh;
                    }

                    .blogHeadingImg {
                        width: 15vw;
                        height: 15vw;
                    }

                    .blogHeadingText {
                        width: calc(100% - 15vw);
                        max-height: 15vw;
                    }

                    .blogPreviewText {
                        display: block;
                    }
                }

            `}</style>
        </>
    );
}