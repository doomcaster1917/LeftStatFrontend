import React, {useState} from 'react';
import styles from './View.module.scss';
import $api from "../../../../api/axios";
import backendAddr from "/config/config"

const View = ({children, ...pageProps}) => {
    const genData = children.general_data
    const [name, setName] = useState(genData?.Name);
    const [slug, setSlug] = useState(genData?.Slug);
    const [title, setTitle] = useState(genData?.Title);
    const [description, setDescription] = useState(genData?.Description);
    const [seoDescription, setSeoDescription] = useState(genData?.SeoDescription);
    const [seoKeywords, setSeoKeywords] = useState(genData?.SeoKeywords);
    const [mainChartId, setMainChartId] = useState(children?.general_data?.BoundedCharts[0].Id||1);

    async function HandleDataSubmit(e) {
        e.preventDefault();
        await $api.patch(`${backendAddr}/terms/update_view`,
            {
                name: name,
                title: title,
                slug: slug,
                seoDescription: seoDescription,
                seoKeywords: seoKeywords,
                description: description,
                id: pageProps.id
            }, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
    }

    async function handleChooseChartsSubmit(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = [...formData.entries()];
        var arr = []
        for(let i=0; i<data.length; i++){
            arr.push(data[i][1]);
        }

        await $api.patch(`/terms/views/set_charts`,
            {selected_charts: `[${arr.join(',')}]`, id: pageProps.id}, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
    }

    async function handleMainChartIdSubmit(e){
        e.preventDefault();
        if(mainChartId === 0){
            alert("Please select a chart");
        }
        await $api.patch(`/terms/views/set_main_chart`,
            {main_chart_id: mainChartId, view_id: pageProps.id}, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
    }

    async function deleteView(){
        await $api.post(`/terms/views/delete`,
            {id: pageProps.id}, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Request-Method': 'DELETE'
                },
                withCredentials: true
            })
    }

    async function createImg(){
        await $api.post(`/terms/views/create_img`,
            {id: pageProps.id}, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                withCredentials: true
            })
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.view_edit}>
                <form className={styles.form} onSubmit={HandleDataSubmit}>
                    <label htmlFor="name">Имя:</label>
                    <textarea
                        id="name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                    />
                    <label htmlFor="slug">Slug:</label>
                    <textarea
                        id="slug"
                        onChange={(e) => {
                            setSlug(e.target.value);
                        }}
                        value={slug}
                    />
                    <label htmlFor="Title">Краткое описание:</label>
                    <textarea
                        id="title"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        value={title}
                    />
                    <label htmlFor="description">Полное описание:</label>
                    <textarea
                        id="description"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        value={description}
                    />
                    <label htmlFor="seo_description">SEO-описание:</label>
                    <textarea
                        id="seoDescription"
                        onChange={(e) => {
                            setSeoDescription(e.target.value);
                        }}
                        value={seoDescription}
                    />
                    <label htmlFor="seo_keywords">SEO-ключевые слова:</label>
                    <textarea
                        id="seoKeywords"
                        onChange={(e) => {
                            setSeoKeywords(e.target.value);
                        }}
                        value={seoKeywords}
                    />
                    <button type="submit">Сохранить</button>
                </form>
            </div>
            <div className={styles.view_edit}>
                <form method={'post'} className={styles.select_form} onSubmit={handleChooseChartsSubmit}>
                    <label htmlFor="Form">Выбор данных графиков</label>
                    <select name="datasets" id="" multiple={true}>
                        {children?.chars_shorts?.map((item, index) => (
                            <option key={index} label={item.Name} value={item.Id}>{item.Name}</option>
                        ))}
                    </select>
                    <button type="submit">Сохранить</button>
                </form>

            </div>
            <div className={styles.view_edit}>
                <form className={styles.select_form} action=""
                      onChange={(e) => {
                          setMainChartId(e.target.value)
                      }} onSubmit={handleMainChartIdSubmit}>
                    <label htmlFor="Form">Выбор главного графика</label>
                    <select name="setAxis">
                        {children?.general_data?.BoundedCharts?.map((item, index) => (
                            <option key={index} label={item.name} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                    <button type="submit">Сохранить</button>
                </form>
            </div>
            <button onClick={deleteView}>Удалить</button>
            <button onClick={createImg}>Создать изображение</button>
        </div>
    );
};

export default View;