import React from 'react';
import styles from './ViewMB.module.scss';
import parse from 'html-react-parser';
import EnchartBuilder from "../../components/EchnartBuilder/EnchartBuilder";

const ViewMB = ({children}) => {
    return (
        <div className={styles.main_wrapper}>
            <h1>{children.Title}</h1>
            <p>{children.Description}</p>
            <div className={styles.charts_area}>
                {children.BoundedCharts?.map((chart, index) => (
                    <div key={index}>
                        <EnchartBuilder>{chart}</EnchartBuilder>
                        {/*<p>{chart.Description}*/}
                        {/*    /!*<hr/>*!/*/}
                        {/*</p>*/}
                        {parse(`<p>${chart.Description}</p>`)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewMB;