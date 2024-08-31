import React from 'react';
import styles from './AdminNavbar.module.scss'
import Link from "next/link";

const AdminNavbar = ({children}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                <ul>
                    <li><Link href={`/terms/views`}>Views</Link></li>
                    <li><Link href={`/terms/charts`}>Charts</Link></li>
                    <li><Link href={`/terms/datasets`}>Datasets</Link></li>
                </ul>
            </div>
            <div className={styles.items_wrapper}>
                {children}
            </div>
        </div>
    );
};

export default AdminNavbar;