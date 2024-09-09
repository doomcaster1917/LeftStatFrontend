import React from 'react';
import styles from './View.module.scss';

const View = ({children}) => {
    return (
        <div className={styles.main_wrapper}>
            <h1>{children.Title}</h1>
            <h2>{children.Description}</h2>
            <div className={styles.charts_area}>
                {children.BoundedCharts.map((chart, index) => (
                    <div key={index}>
                        <iframe  srcDoc={chart.HtmlChart} frameBorder="0"></iframe>
                        <p>{chart.Description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default View;