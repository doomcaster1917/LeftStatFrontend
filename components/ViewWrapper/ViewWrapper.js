import React from 'react';
import MainContainer from "../MainContainer/MainContainer";
import MainContainerMB from "../../MobileComponents/MainContainerMB/MainContainerMB";
import CentralBody from "../CentralBody/CentralBody";
import View from "../View/View";
import ViewMB from "../../MobileComponents/ViewMB/ViewMB";
import styles from "./ViewWrapper.module.scss";

const ViewWrapper = ({children}) => {
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
                <MainContainerMB title={children.Name} description={children.SeoDescription}>
                    <CentralBody>
                        <ViewMB>{children}</ViewMB>
                    </CentralBody>
                </MainContainerMB>
            </div>
        </>
    );
};

export default ViewWrapper;