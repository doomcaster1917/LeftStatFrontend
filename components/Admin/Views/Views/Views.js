import React, {useState} from 'react';
import styles from './Views.module.scss'
import Link from "next/link";
import $api from "../../../../api/axios";
import backendAddr from "/config/config"

const ViewsComponent = ({children}) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    async function sendValue(e){
        e.preventDefault();
        await $api.post(`${backendAddr}/terms/views/create_view`,
            {name: name, title: title}, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.creation_form}>
                <form onSubmit={sendValue}>
                    <input placeholder={"Имя обзора"} onChange={(e)=>setName(e.target.value)} type="text"/>
                    <input placeholder={"Описание"} onChange={(e)=>setTitle(e.target.value)} type="text"/>
                    <button type="submit">Создать</button>
                </form>
            </div>
            {children?.map((item) =>
                <Link href={{pathname: `/terms/views/view`, query: {id: item.Id}}} key={item.Id}
                      className={styles.item}>
                    {item.Id}
                    {item.Name} <br/>
                    {item.Title}
                    <div className={styles.view_table}>
                        <h2>Графики</h2>
                        {item?.BoundedCharts?.map((chart, index) =>
                            <Link key={index} href={{
                                pathname: `/terms/charts/chart${chart.id}`,
                                query: {id: chart.id}
                            }}>{chart.name}</Link>
                        )}
                    </div>
                </Link>
            )}

        </div>

    );
};

export default ViewsComponent;