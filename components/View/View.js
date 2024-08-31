import React from 'react';
import styles from './View.module.scss';

const View = ({children}) => {
    return (
        <div>
            <h1>{children.Title}</h1>
            <div className={styles.charts_area}>
                {children.BoundedCharts.map((chart, index) => (
                    <iframe srcDoc={chart.HtmlChart} frameBorder="0"></iframe>
                ))}
            </div>
        </div>
    );
};

export default View;