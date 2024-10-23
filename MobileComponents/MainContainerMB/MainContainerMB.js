import Head from "next/head";
import styles from "./MainContainerMB.module.scss"
import Link from "next/link";
import React, {Suspense} from "react";
import {Metrica} from "../../components/Scripts/YaMetrica";

const MainContainerMB = ({children, title, description, keywords, viewport}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} content={description}/>
                <meta name={"keywords"} content={keywords}/>
                <link rel="icon" type="image/svg+xml" href="https://leftstat.ru/favicon.svg"/>
                <meta name="yandex-verification" content="fd324c95d81fb05d"/>
                <meta name="viewport" content={`width=device-width, initial-scale=${viewport?viewport:0.6}`}/>
            </Head>
            <Suspense>
                <Metrica/>
            </Suspense>
            <div className={styles.header}>
                <div className={styles.header_container}>
                    <div className={styles.navbar}>
                        {/*<A href={'/aboutProject'} text={"О проекте"}/>*/}
                    </div>
                    <div className={styles.subheader}>
                        <div className={styles.subheader_container}>
                            <Link href={'/'}><img src={'../static/images/main_size_logo.png'} className={styles.logo}></img></Link>
                            <h1> Объясняем на графиках </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body_container}>
                {children}
            </div>

        </>
    );
};

export default MainContainerMB;