import React from 'react';
import backendAddr from "../../config/config";
import axios from "axios";
import MainContainer from "../../components/MainContainer/MainContainer";
import CentralBody from "../../components/CentralBody/CentralBody";
import View from "../../components/View/View";

const ViewPage = ({Data}) => {

    return (
        <>
            <MainContainer title={Data.Name} description={Data.SeoDescription}>
                <CentralBody>
                    <View>{Data}</View>
                </CentralBody>
            </MainContainer>
        </>
    );
};

export default ViewPage;

export async function getServerSideProps(context) {
    const response = await axios.get(`${backendAddr}/views/get_view?id=${context.query.id}`)

    if (response.status === 200) {
        let data = await response.data;
        return {
            props: {Data: data},
        }
    }
    else{
        return {
            notFound: true //returns 404
        }
    }
}