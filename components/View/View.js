import React from 'react';
import styles from './View.module.scss';
import parse from 'html-react-parser';
import EnchartBuilder from "../EchnartBuilder/EnchartBuilder";

const View = ({children}) => {
    console.log(children);
    return (
        <div className={styles.main_wrapper}>
            <h1>{children.Title}</h1>
            <p>{children.Description}</p>
            <div className={styles.charts_area}>
                {children.BoundedCharts.map((chart, index) => (
                    <div className={styles.charts_item} key={index}>
                        <EnchartBuilder width={'56vw'} height={'50vh'}>{chart}</EnchartBuilder>
                        {/*<p>{chart.Description}*/}
                        {/*    /!*<hr/>*!/*/}
                        {/*</p>*/}
                        {parse(`<p>${chart.description}</p>`)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default View;