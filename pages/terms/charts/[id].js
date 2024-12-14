import React from 'react';
import AdminPanel from "../../../components/Admin/AdminNavbar/AdminNavbar";
import $api from "../../../api/axios";
import useSWR from "swr";
import { useSearchParams } from 'next/navigation'
import {notFound} from "next/navigation";
import Chart from "../../../components/Admin/Charts/Chart/Chart";
import backendAddr from "/config/config"

const ChartOnId = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const fetcher = url => $api.get(url).then(res => res)
    const { data, error } = useSWR(`${backendAddr}/terms/charts/get_by_id/${id}`, fetcher)

    if (data?.headers.get("Authorization") === "true") {
        return (
            <AdminPanel>
                <Chart id={id}>{data.data}</Chart>
            </AdminPanel>
        );
    }else if(data && data?.headers.get("Authorization") !== "true"){
        notFound()
    }

};

export default ChartOnId;