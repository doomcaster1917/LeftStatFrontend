import React from 'react';
import styles from './ViewMB.module.scss';
import parse from 'html-react-parser';
import LineBuilder from "../../components/EchnartBuilder/LineBuilder/LineBuilder";

const ViewMB = ({children}) => {
    return (
        <div className={styles.main_wrapper}>
            <h1>{children.Title}</h1>
            <p>{children.Description}</p>
            <div className={styles.charts_area}>
                {children.BoundedCharts?.map((chart, index) => (
                    <div className={styles.charts_item} key={index}>
                         <LineBuilder type={chart.type} mobileTooltip={true} title={{text: '', subtext: ''}} width={'90%'} height={'370px'}>{chart}</LineBuilder>
                        {parse(`<p>${chart.description}</p>`)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewMB;