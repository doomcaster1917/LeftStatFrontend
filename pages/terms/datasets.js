import React from 'react';
import AdminPanel from "../../components/Admin/AdminNavbar/AdminNavbar";
import $api from "../../api/axios";
import useSWR from "swr";
import {notFound} from "next/navigation";
import Datasets from "../../components/Admin/Datasets/Datasets/Datasets";
import backendAddr from "/config/config"

const ChartsAdmin = () => {
    const fetcher = url => $api.get(url).then(res => res)
    const { data, error } = useSWR(`${backendAddr}/terms/datasets/get_all`, fetcher)

    if (data?.headers.get("Authorization") === "true") {
        console.log(data.data)
        return (
            <AdminPanel>
                <Datasets>{data.data}</Datasets>
            </AdminPanel>
        );
    }else if(data && data?.headers.get("Authorization") !== "true"){
        notFound()
    }
}

export default ChartsAdmin;