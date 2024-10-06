import React from 'react';
import styles from './LayOut.module.scss';
import CentralBodyMB from "../../MobileComponents/CentralBodyMB/CentralBodyMB";
import CentralBody from "../CentralBody/CentralBody";
import ItemsContainerMB from "../../MobileComponents/ItemsContainer/ItemsContainerMB";
import ItemsContainer from "../ItemsContainer/ItemsContainer";
import MainContainer from "../MainContainer/MainContainer";
import MainContainerMB from "../../MobileComponents/MainContainerMB/MainContainerMB";

const LayOut = ({children}) => {
    return (
        <>
            <div className={styles.desktop}>
                <MainContainer title={"Аналитика российской и мировой статистики"}
                               description={"Анализ российской и мировой статистики " +
                                   "с левым уклоном"}
                               keywords={"статистика, по годам, рост цен по годам, экономика России по годам"}>
                    <CentralBody>
                        <ItemsContainer>{children}</ItemsContainer>
                    </CentralBody>
                </MainContainer>
            </div>
            <div className={styles.mobile}>
                <MainContainerMB title={"Аналитика российской и мировой статистики"}
                               description={"Анализ российской и мировой статистики " +
                                   "с левым уклоном"}
                               keywords={"статистика, по годам, рост цен по годам, экономика России по годам"}>
                    <CentralBodyMB>
                        <ItemsContainerMB>{children}</ItemsContainerMB>
                    </CentralBodyMB>
                </MainContainerMB>
            </div>
        </>
    );
};

export default LayOut;