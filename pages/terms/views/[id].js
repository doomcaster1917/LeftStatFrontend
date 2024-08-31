import React from 'react';
import AdminPanel from "../../../components/Admin/AdminNavbar/AdminNavbar";
import $api from "../../../api/axios";
import useSWR from "swr";
import { useSearchParams } from 'next/navigation'
import {notFound} from "next/navigation";
import View from "../../../components/Admin/Views/View/View";
import backendAddr from "/config/config"

const ViewOnId = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const fetcher = url => $api.get(url).then(res => res)
    const { data, error } = useSWR(`${backendAddr}/terms/get_view?id=${id}`, fetcher)

    if (data?.headers.get("Authorization") === "true") {
        return (
            <AdminPanel>
                <View id={id}>{data.data}</View>
            </AdminPanel>
        );
    }else if(data && data?.headers.get("Authorization") !== "true"){
        notFound()
    }

};

export default ViewOnId;