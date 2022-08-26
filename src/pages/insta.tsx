import type { NextPage } from 'next';
import Head from 'next/head';
import { Global, css } from '@emotion/react';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Akira Hanashiro</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
                />
                <meta
                    name="description"
                    content="Akira Hanashiro - Front End Developer - Agile Development, test automation, responsive design, mobile, user experience"
                />
                <meta
                    name="keywords"
                    content="web designer, web developer, akira hanashiro, felipe hanashiro, web design, front end, desenvolvedor web, designer, developer, desenvolvedor, portfolio, ux, user experience, mobile, responsive, test automation, agile development, scrum"
                />
                <meta
                    name="author"
                    content="Akira Hanashiro, Felipe Hanashiro"
                />
                <meta name="robots" content="all" />
                <meta name="rating" content="general" />
                <meta name="theme-color" content="#151515" />
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="../favicon.png"
                />
                <link
                    rel="apple-touch-icon"
                    href="../favicon.png"
                    type="image/png"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossOrigin="anonymous"
                />
                <Global
                    styles={css`
                        html,
                        body {
                            margin: 0;
                        }
                        body {
                            --white: #f2f2f2;
                            --red: #c90003;
                            --black-gradient: radial-gradient(
                                circle,
                                rgba(44, 44, 44, 1) 0%,
                                rgba(9, 8, 8, 1) 77%
                            );
                            --black: rgb(44, 44, 44);
                            min-height: 100vh;
                            display: flex;
                            flex-direction: column;
                            font-family: 'Gill Sans', 'Gill Sans MT', Calibri,
                                'Trebuchet MS', sans-serif;
                            background: rgb(44, 44, 44);
                            background: var(--black-gradient);
                            color: var(--white);
                        }
                        footer {
                            margin: auto 0 24px;
                            padding: 4px 0;
                            text-align: center;
                            background: var(--black-gradient);
                            box-shadow: 0 -1px 0 var(--red), 0 3px 0 var(--red);
                        }
                        footer span {
                            position: relative;
                            top: 20px;
                            right: 6px;
                        }
                        a {
                            display: inline-block;
                            color: inherit;
                            text-decoration: none;
                            padding: 4px 0;
                            margin: 4px 0;
                        }
                        a:hover {
                            opacity: 0.8;
                        }
                        i {
                            margin-right: 8px;
                            vertical-align: middle;
                        }
                        nav {
                            display: flex;
                            justify-content: center;
                            margin-bottom: 16px;
                        }
                        ul {
                            list-style-type: none;
                            padding: 0;
                        }

                        img {
                            display: block;
                            border-radius: 100%;
                            width: 30vw;
                            max-width: 150px;
                            margin: 24px auto 16px;
                            border: 5px solid white;
                            box-shadow: 0 0 5px rgba(0, 0, 0, 0.9);
                        }
                    `}
                />
            </Head>

            <header>
                <img
                    src="https://github.com/hanashiro.png"
                    alt="Akira Hanashiro"
                />
            </header>

            <main>
                <nav>
                    <ul>
                        <li>
                            <a
                                href="https://www.treinaweb.com.br/multi-stack/cadastro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Workshop Multi-Stack"
                            >
                                <i className="fa-fw fas fa-star"></i> Workshop
                                Multi-Stack
                            </a>
                        </li>

                        <li style={{ height: '24px' }}></li>

                        <li>
                            <a
                                href="https://www.youtube.com/channel/UC4UsuAcJLvFfrRZKKMx9UiQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Canal Aki Funciona (YouTube)"
                            >
                                <i className="fa-fw fab fa-youtube"></i> Aki
                                Funciona
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/akirahanashiro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram Aki Funciona"
                            >
                                <i className="fa-fw fab fa-instagram"></i> Aki
                                Funciona
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/akifunciona"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook Aki Funciona"
                            >
                                <i className="fa-fw fab fa-facebook-f"></i> Aki
                                Funciona
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/akifunciona"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Aki Funciona"
                            >
                                <i className="fa-fw fab fa-github"></i> Aki
                                Funciona
                            </a>
                        </li>

                        <li style={{ height: '24px' }}></li>

                        <li>
                            <a
                                href="https://github.com/hanashiro"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Meu GitHub"
                            >
                                <i className="fa-fw fab fa-github"></i> Meu
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://treinaweb.com.br/blog"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-fw fas fa-newspaper"></i> Posts
                                do Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://youtube.com/treinaweb"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-fw fab fa-youtube"></i> Canal
                                TreinaWeb
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://treinaweb.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-fw fas fa-code"></i> Meus
                                Cursos
                            </a>
                        </li>
                    </ul>
                </nav>
            </main>

            <footer>&lt; akira hanashiro &gt;</footer>
        </>
    );
};

export default Home;
