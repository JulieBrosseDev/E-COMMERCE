// with next we should import their already built Head
import Head from 'next/head';

const Meta = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" tye="text/css" href="/static/nprogress.css" />
        <title>MyPage !</title>
    </Head>
)

export default Meta;