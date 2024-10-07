import React from 'react';
import ReactECharts from 'echarts-for-react'

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
        series.push({data: getValues(item.data), type: 'line', name: item.name});
    }


    return (
        <ReactECharts option ={{
            title: pageProps.title,
            legend: {
                data: legends
            },
            toolbox: {
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
            },
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

export default EnchartBuilder;