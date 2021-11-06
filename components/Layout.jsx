import Head from 'next/head'

export const Layout = ({ children }) => {
    return (
        <>

            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="shortcut icon" href="/favicon.ico" />

                <title>Bass Trainer</title>
                <meta name="description" content="wee" />
            </Head>

            <main className="m-2">
                {children}
            </main>
        </>
    )
}