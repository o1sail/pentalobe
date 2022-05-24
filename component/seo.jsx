import Head from "next/head";

export default function Seo({ pageTitle, pageDescription }) {

    const defaultTitle = "ペンタローブ";
    const defaultDescription = "東京都内を中心とした出張/郵送iPhone修理サービス。お客様のご自宅や外出先に赴いて最短30分で修理いたします!";
    const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
    const description = pageDescription ? pageDescription : defaultDescription;
    const url = "https://pentalobe.vercel.app/";
    const imgUrl = "https://pentalobe.vercel.app/logo.png";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={imgUrl} />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap" rel="stylesheet" />
                <link rel="canonical" href={url} />

                <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/favicons/site.webmanifest"/>
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
        </>
    );
}
