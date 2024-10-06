import React from 'react';
import styles from "./CentralBodyMB.module.scss"

const CentralBodyMB = ({children}) => {
    return (
        <div className={styles.central_body}>
            {children}
        </div>
    );
};

export default CentralBodyMB;