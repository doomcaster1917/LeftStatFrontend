import React from 'react';
import AdminPanel from "../../components/Admin/AdminNavbar/AdminNavbar";
import $api from "../../api/axios";
import useSWR from "swr";
import {notFound} from "next/navigation";
import Groups from "../../components/Admin/Groups/Groups/Groups";
import backendAddr from "/config/config"

const Groups = () => {
    const fetcher = url => $api.get(url).then(res => res)
    const { data, error } = useSWR(`${backendAddr}/terms/groups/get_all`, fetcher)

    if (data?.headers.get("Authorization") === "true") {
        console.log(data.data);
        return (
            <AdminPanel>
                <Groups>{data.data}</Groups>
            </AdminPanel>
        );
    }else if(data && data?.headers.get("Authorization") !== "true"){
        notFound()
    }
}

export default Groups;