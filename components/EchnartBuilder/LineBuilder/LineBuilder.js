import React from 'react';
import ReactECharts from 'echarts-for-react'

const LineBuilder = ({children, ...pageProps}) => {

    let legends = []
    let series = []

    function getValues(obj){
        let arr = []
        for(let key in obj){
            arr.push(obj[key])
        }
        return arr
    }


    for (let item of children.datasets) {
        legends.push(item.name);
        series.push({data: getValues(item.data), type: pageProps.type, name: item.name});
        }


    console.log(series)

    const tooltip = {
        show: true,
            feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
        }
    }

    const mobileTooltip = {
        show: true,
        feature: {
            magicType: { type: ['line', 'bar'] },
        }}



    return (
        <ReactECharts option ={{
            title: pageProps.title.text,
            legend: {
                data: legends
            },
            toolbox: pageProps.mobileTooltip?{}:tooltip,
            tooltip: {
                trigger: 'item',
            },
            xAxis: {
                type: 'category',
                data: Object.keys(children.datasets[0]?.data)
            },
            yAxis: {
                type: 'value'
            },
            series: series
        }}
                      style={{height: pageProps.height, width: pageProps.width}}

        ></ReactECharts>
    );
};
// {/*{{height: pageProps.height, width: pageProps.width}}*/}
export default LineBuilder;