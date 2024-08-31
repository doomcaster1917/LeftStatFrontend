import React, {useState} from 'react';
import styles from './Datasets.module.scss'
import Link from "next/link";
import $api from "../../../../api/axios";
import backendAddr from "/config/config"

const Datasets = ({children}) => {
    const [name, setName] = useState('');

    async function sendValue(e){
        e.preventDefault();
        await $api.patch(`${backendAddr}/terms/datasets/create`,
            {name: name}, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.creation_form}>
                <form onSubmit={sendValue}>
                    <input placeholder={"Название данных"} onChange={(e)=>setName(e.target.value)} type="text"/>
                    <button type="submit">Создать</button>
                </form>
            </div>
            {children?.map((item) =>
                <Link href={{pathname: `/terms/datasets/dataset`, query: {id: item.Id}}} key={item.Id} className={styles.item}>
                    {item.Id}
                    {item.Name} <br/>
                </Link>
            )}
        </div>
    );
};

export default Datasets;