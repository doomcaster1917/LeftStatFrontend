import React from 'react';
import MainContainer from "../MainContainer/MainContainer";
import MainContainerMB from "../../MobileComponents/MainContainerMB/MainContainerMB";
import CentralBody from "../CentralBody/CentralBody";
import View from "../View/View";
import ViewMB from "../../MobileComponents/ViewMB/ViewMB";
import styles from "./ViewWrapper.module.scss";

const ViewWrapper = ({children}) => {

    function setViewPort(){
        for(let item of children.BoundedCharts){
            if(item.type === 'pie')
                return 0.3
        }
        return 0.6
    }

    return (
        <>
            <div className={styles.desktop}>
                <MainContainer title={children.Name} description={children.SeoDescription}>
                    <CentralBody>
                        <View>{children}</View>
                    </CentralBody>
                </MainContainer>
            </div>
            <div className={styles.mobile}>
                <MainContainerMB title={children.Name} viewport={setViewPort()} description={children.SeoDescription}>
                    <CentralBody>
                        <ViewMB>{children}</ViewMB>
                    </CentralBody>
                </MainContainerMB>
            </div>
        </>
    );
};

export default ViewWrapper;