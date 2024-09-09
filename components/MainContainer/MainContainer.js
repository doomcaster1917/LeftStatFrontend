import A from "../UIKit/A/A";
import Head from "next/head";
import styles from "./MainContainer.module.scss"
import Link from "next/link";
import React, {Suspense} from "react";
import {Metrica} from "../Scripts/YaMetrica";

const MainContainer = ({children, title, description, keywords}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} content={description}/>
                <meta name={"keywords"} content={keywords}/>
                <link rel="icon" type="image/x-icon" href="../static/images/logo120.svg"/>
                <meta name="yandex-verification" content="fd324c95d81fb05d"/>
            </Head>
            <Suspense>
                <Metrica/>
            </Suspense>
            <div className={styles.header}>
                <div className={styles.header_container}>
                    <div className={styles.navbar}>
                        <A href={'/aboutProject'} text={"О проекте"}/>
                    </div>
                    <div className={styles.subheader}>
                        <div className={styles.subheader_container}>
                            <Link href={'/'}><img src={'../static/images/main_size_logo.png'} className={styles.logo}></img></Link>
                            <h1> Объясняем на графиках, а не на пальцах </h1>
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

export default MainContainer;