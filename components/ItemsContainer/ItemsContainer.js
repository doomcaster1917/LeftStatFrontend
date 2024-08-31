import React from 'react';
import styles from "./ItemsContainer.module.scss"
import backendAddr from "../../config/config"
import Link from "next/link";

const ItemsContainer = ({children}) => {
    return (
        <div className={styles.container}>
            {children?.map((item, index) => (
                <Link href={{pathname: `views/${item.Id}`, query: {id: item.Id}}} key={index} className={styles.Item}>
                    <img src={`${backendAddr}/static/${item.ImgAddr}`} className={styles.ItemImg}/>
                    <span className={styles.ItemName}>{item.Name}</span>
                    <span className={styles.ItemTitle}>{item.Title}</span>
                </Link>
            ))}
        </div>
    );
};

export default ItemsContainer;