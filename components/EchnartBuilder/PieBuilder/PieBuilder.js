import React from 'react';
import ReactECharts from 'echarts-for-react'

const LineBuilder = ({children, ...pageProps}) => {

    let legends = []
    let series = []


    function getObjValues(obj){
        let arr = []
        for(let key in obj){
            arr.push({name: key, value: obj[key]})
        }
        return arr
    }

    for (let item of children.datasets) {
        legends.push(item.name);
        series.push({data: getObjValues(item.data), type: pageProps.type, name: item.name});
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



    return (
        <ReactECharts option ={{
            title: {
                text: pageProps.title.text,
                subtext: pageProps.title.subtext,
                left: 'center'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            toolbox: pageProps.mobileTooltip?{}:tooltip,
            tooltip: {
                trigger: 'item',
            },
            series: series
        }}
                      style={{height: pageProps.height, width: pageProps.width}}

        ></ReactECharts>
    );
};
// {/*{{height: pageProps.height, width: pageProps.width}}*/}
export default LineBuilder;