import React from 'react';
import AdminPanel from "../../../components/Admin/AdminNavbar/AdminNavbar";
import Dataset from "../../../components/Admin/Datasets/Dataset/Dataset";
import $api from "../../../api/axios";
import useSWR from "swr";
import { useSearchParams } from 'next/navigation'
import {notFound} from "next/navigation";
import backendAddr from "/config/config"

const DatasetOnId = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const fetcher = url => $api.get(url).then(res => res)
    const { data, error } = useSWR(`${backendAddr}/terms/dataset/?id=${id}`, fetcher)

    if (data?.headers.get("Authorization") === "true") {
        return (
            <AdminPanel>
                <Dataset>{data.data}</Dataset>
            </AdminPanel>
        );
    }else if(data && data?.headers.get("Authorization") !== "true"){
        notFound()
    }

};

export default DatasetOnId;