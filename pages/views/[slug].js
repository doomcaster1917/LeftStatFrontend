import React from 'react';
import backendAddr from "../../config/config";
import axios from "axios";
import ViewWrapper from "../../components/ViewWrapper/ViewWrapper";

const ViewPage = ({Data}) => {
    return (
        <>
            <ViewWrapper>{Data}</ViewWrapper>
        </>
    );
};

export default ViewPage;

export async function getServerSideProps(context) {
    //const response = await axios.get(`${backendAddr}/views/get_by_id/${context.query.id}`)
    const response = await axios.get(`${backendAddr}/views/get_by_id/${context.query.id}`)
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