import React, {useState} from 'react';
import styles from './Charts.module.scss'
import Link from "next/link";
import $api from "../../../../api/axios";
import backendAddr from "/config/config"

const Charts = ({children}) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    async function sendValue(e){
        e.preventDefault();
        await $api.patch(`${backendAddr}/terms/create_chart`,
            {name: name, title: title}, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.creation_form}>
                <form onSubmit={sendValue}>
                <input placeholder={"Имя графика"} onChange={(e)=>setName(e.target.value)} type="text"/>
                <input placeholder={"Описание"} onChange={(e)=>setTitle(e.target.value)} type="text"/>
                <button type="submit">Создать</button>
                </form>
            </div>
            {children?.map((item) =>
                <Link href={{pathname: `/terms/charts/chart`, query: {id: item.Id}}} key={item.Id}
                      className={styles.item}>
                    {item.Id}
                    {item.Name} <br/>
                    {item.Title}
                    <div className={styles.chart_tables}>
                    <h2>Датасеты</h2>
                        {item.DataSets?.map((dataset) =>
                            <Link key={dataset.id} href={{
                                pathname: `/terms/datasets/${dataset.id}`,
                                query: {id: dataset.id}
                            }}>{dataset.name}</Link>
                        )}
                    </div>
                </Link>
            )}

        </div>

    );
};

export default Charts;