import React from 'react';
import styles from './View.module.scss';
import parse from 'html-react-parser';
import LineBuilder from "../EchnartBuilder/LineBuilder/LineBuilder";
import PieBuilder from "../EchnartBuilder/PieBuilder/PieBuilder";

const View = ({children}) => {
    console.log(children);
    return (
        <div className={styles.main_wrapper}>
            <h1>{children.Title}</h1>
            <p>{children.Description}</p>
            <div className={styles.charts_area}>
                {children.BoundedCharts.map((chart, index) => (
                    <div className={styles.charts_item} key={index}>
                        {chart.type === 'pie'?<PieBuilder type={chart.type} title={{text: chart.name, subtext: children.title}} width={'56vw'} height={'50vh'}>{chart}</PieBuilder>:
                        <LineBuilder type={chart.type} title={{text: chart.name, subtext: children.title}} width={'56vw'} height={'50vh'}>{chart}</LineBuilder>}
                        {parse(`<p>${chart.description}</p>`)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default View;