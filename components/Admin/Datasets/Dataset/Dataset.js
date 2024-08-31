import React, {useState} from 'react';
import styles from './Dataset.module.scss';
import {useSearchParams} from "next/navigation";
import $api from "../../../../api/axios";
import backendAddr from "../../../../config/config";

const Dataset = ({children}) => {

    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [url, setUrl] = useState(children[0]?.RawUrl);
    const [data, setData] = useState(children[0]?.RawData);
    const [name, setName] = useState(children[0]?.Name);
    const [sendMode, setSendMode] = useState('');
    const [success, setSuccess] = useState(false);

    function changeUrl(url) {
        setUrl(url);
        setData('');
        setSendMode('raw_url')
    }

    function changeData(data) {
        setData(data);
        setUrl('');
        setSendMode('raw_data')
    }

    function changeName(name) {
        setName(name);
    }

    async function deleteDtSet(){
        await $api.post(`/terms/datasets/delete`,
            {id: id}, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Request-Method': 'DELETE'
                },
                withCredentials: true
            })
    }

    async function updateData(e) {
        e.preventDefault();
        if(sendMode === '') {
            alert("Сначала заполните поля")
        }
        else{
            const id = searchParams.get('id')
            console.log(sendMode)
            await $api.patch(`/terms/datasets/update`,
                {sendMode: sendMode, name: name, raw: url || data, id: id}, {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    withCredentials: true
                })
                .then(res => {
                    if (res.status === 200) {
                        setSuccess(true)
                    }
                })
        }
    }

    return (
        <>
            {children?.map((item, index) =>
                <div key={index} className={styles.main_container}>
                    <div className={styles.dataset_view}>
                        {JSON.stringify(item.Data)}
                    </div>
                    <div className={styles.dataset_edit}>
                        <form onSubmit={updateData} className={styles.form}>
                            <label htmlFor="name">Name:</label>
                            <textarea
                                id="name"
                                onChange={e => changeName(e.target.value)}
                                value={name}
                            />
                            <label htmlFor="link">Query:</label>
                            <textarea
                                id="url"
                                onChange={e => changeUrl(e.target.value)}
                                value={url}
                            />
                            <label htmlFor="text">Data:</label>
                            <textarea
                                id="raw_dataset"
                                onChange={e => changeData(e.target.value)}
                                value={data}
                            />
                            <button type="submit">Сохранить</button>
                        </form>
                    </div>
                    {success ? "Успешно" : ""}
                    <button onClick={deleteDtSet}>Удалить</button>
                </div>
            )}
        </>
    )
}

export default Dataset;