import mainMenu from "../public/index.html"
import Head from 'next/head'

const wineMenu = () => {
    return (
        <div>
            <Head>
                <title>THE PALM HOUSE</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div dangerouslySetInnerHTML={{ __html: mainMenu }} />
        </div>
    )
}

export default wineMenu