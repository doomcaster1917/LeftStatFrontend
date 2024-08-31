import React from 'react';
import useSWR from 'swr'
import $api from '/api/axios'
import {notFound, redirect} from "next/navigation";
import AdminNavbar from "../components/Admin/AdminNavbar/AdminNavbar";
import backendAddr from "../config/config"


const AdmPanel = () => {
    const fetcher = url => $api.get(url).then(res => res)
    const { data, error } = useSWR(`${backendAddr}/terms`, fetcher)

    if (data?.headers.get("Authorization") === "true") {
        return (
            <div>
                <AdminNavbar></AdminNavbar>
            </div>
        );
    }else if(data && data?.headers.get("Authorization") !== "true"){
        notFound()
    }
}

export default AdmPanel;

