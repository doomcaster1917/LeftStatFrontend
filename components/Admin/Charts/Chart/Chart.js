import React, {useState} from 'react';
import styles from './Chart.module.scss';
import $api from "../../../../api/axios";
import {post} from "axios";
import backendAddr from "../../../../config/config";


const Chart = ({children, ...pageProps}) => {

    const [axis, setAxis] = useState(0)
    const [name, setName] = useState(children.Name)
    const [title, setTitle] = useState(children.Title)
    const [description, setDescription] = useState(children.Description)

    async function handleSubmit(e){
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data = [...formData.entries()];
        var arr = []
        for(let i=0; i<data.length; i++){
            arr.push(data[i][1]);
        }

        await $api.patch(`${backendAddr}/terms/select_datasets`,
            {selected_datasets: `[${arr.join(',')}]`, id: pageProps.id}, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
    }

    async function handleSubmitAxis(e){
        e.preventDefault();
        await $api.patch(`${backendAddr}/terms/set_axis`,
            {dataset_id: axis, chart_id: pageProps.id}, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
    }

    async function handleUpdateChartSubmit(e){
        e.preventDefault();
        await $api.patch(`${backendAddr}/terms/update_chart`,
            {name: name, title: title, description: description, chart_id: pageProps.id}, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
    }

    async function deleteChart(){
        await $api.post(`${backendAddr}/terms/charts/delete`,
            {id: pageProps.id}, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Request-Method': 'DELETE'
                },
                withCredentials: true
            })
    }

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.chart_edit}>
                    <form className={styles.form} onSubmit={handleUpdateChartSubmit}>
                        <label htmlFor="name">Name:</label>
                        <textarea id="name" onChange={(e) => {
                            setName(e.target.value)
                        }}
                                  value={name}/>
                        <textarea id="title" onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                                  value={title}/>
                        <textarea className={styles.description} id="description" onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                                  value={description}/>
                        <button type="submit">Сохранить</button>
                    </form>
                </div>
                <iframe srcDoc={children.HtmlChart}></iframe>
                <div className={styles.chart_edit}>
                    <form method={'post'} className={styles.select_form} onSubmit={handleSubmit}>
                        <label htmlFor="Form">Выбор данных для графика</label>
                        <select name="datasets" id="" multiple={true}>
                            {children?.AllDatasets?.map((item, index) => (
                                <option key={index} label={item.Name} value={item.Id}>{item.Name}</option>
                            ))}
                        </select>
                        <button type="submit">Сохранить</button>
                    </form>

                </div>
                <div className={styles.chart_edit}>
                    <form className={styles.select_form} action=""
                          onChange={(e) => {
                              setAxis(e.target.value)
                          }} onSubmit={handleSubmitAxis}>
                        <label htmlFor="Form">Выбор оси-X главного графика</label>
                        <select name="setAxis">
                            {children?.DataSets?.map((item) => (
                                <option key={item.Id} label={item.Name} value={item.Id}>{item.Name}</option>
                            ))}
                        </select>
                        <button type="submit">Сохранить</button>
                    </form>
                </div>
                <button onClick={deleteChart}>Удалить</button>
            </div>
        </>
    );
};

export default Chart;