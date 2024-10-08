import React from 'react';
import ReactECharts from 'echarts-for-react'
import echarts from 'echarts'
import styles from './EnchartBuilder.module.scss'
import {useEffect} from 'react'

const EnchartBuilder = ({children, ...pageProps}) => {

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

    //
    // useEffect(() => {
    //     var myChart = echarts.init(document.getElementById('main'));
    //     window.addEventListener('resize', function() {
    //         myChart.resize();
    //     });
    //     myChart?.resize({
    //         width: 1800,
    //         height: 400
    //     });
    // })


    return (
        <ReactECharts option ={{
            title: pageProps.title,
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
export default EnchartBuilder;