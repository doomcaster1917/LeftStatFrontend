import React from 'react';
import styles from "./CentralBody.module.scss"

const CentralBody = ({children}) => {
    return (
        <div className={styles.central_body}>
            {children}
        </div>
    );
};

export default CentralBody;