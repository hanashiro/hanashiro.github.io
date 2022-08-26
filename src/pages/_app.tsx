import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/globals.css';
import ThemeContainer from '@theme/ThemeContainer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContainer>
            <Head>
                <title>
                    Akira Hanashiro{pageProps.title && ` -  ${pageProps.title}`}
                </title>
                <meta
                    name="viewport"
                    id="viewport"
                    content="initial-scale=1, maximum-scale=1, user-scalable=0"
                ></meta>
                <meta name="theme-color" content="#0e77b3"></meta>
                <link rel="icon" href="/img/favicons/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                    crossOrigin="anonymous"
                />
            </Head>
            <Component {...pageProps} />
        </ThemeContainer>
    );
}

export default MyApp;
