import React from 'react';
import AdminPanel from "../../components/Admin/AdminNavbar/AdminNavbar";
import $api from "../../api/axios";
import useSWR from "swr";
import {notFound} from "next/navigation";
import Charts from "../../components/Admin/Charts/Charts/Charts";
import backendAddr from "/config/config"

const ChartsAdmin = () => {
    const fetcher = url => $api.get(url).then(res => res)
    const { data, error } = useSWR(`${backendAddr}/terms/charts`, fetcher)

    if (data?.headers.get("Authorization") === "true") {
        return (
                <AdminPanel>
                    <Charts>{data.data}</Charts>
                </AdminPanel>
        );
    }else if(data && data?.headers.get("Authorization") !== "true"){
        notFound()
    }
}

export default ChartsAdmin;