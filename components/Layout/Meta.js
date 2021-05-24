import Head from 'next/head'

const Meta = ({ title, kw, desc }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta name="author" content="DoCoGen" />
                <meta name="keywords"
                    content={kw} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                    crossOrigin="anonymous" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
                <script defer src="/site.js"></script>
                <script defer src="/sw.js"></script>
            </Head>
        </>
    )
}

export default Meta

Meta.defaultProps = {
    title: "DoCoNation - Student Community",
    kw: "docogen.com,docogen,dotcomgenerations,dot com generations, website,webdev, app dev, app, web development, DoCoGen",
    desc: "Kickstart your Career, with DoCoGen's LIVE Classes in all the major skills!"
}