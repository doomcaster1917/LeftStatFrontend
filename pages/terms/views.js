import React from 'react';
import AdminPanel from "../../components/Admin/AdminNavbar/AdminNavbar";
import $api from "../../api/axios";
import useSWR from "swr";
import {notFound} from "next/navigation";
import Views from "../../components/Admin/Views/Views/Views";
import backendAddr from "/config/config"

const ViewsPage = () => {
    const fetcher = url => $api.get(url).then(res => res)
    const { data, error } = useSWR(`${backendAddr}/terms/views/get_views`, fetcher)

    if (data?.headers.get("Authorization") === "true") {
        console.log(data.data);
        return (
            <AdminPanel>
                <Views>{data.data}</Views>
            </AdminPanel>
        );
    }else if(data && data?.headers.get("Authorization") !== "true"){
        notFound()
    }
}

export default ViewsPage;