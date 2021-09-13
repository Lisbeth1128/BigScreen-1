import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart9 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        { name: '', value: 27 },
        { name: '1月', value: 31 },
        { name: '2月', value: 21 },
        { name: '3月', value: 24 },
        { name: '4月', value: 35 },
        { name: '5月', value: 50 },
        { name: '6月', value: 40 },
        { name: '7月', value: 31 },
        { name: '8月', value: 33 },
        { name: '9月', value: 38 },
        { name: '10月', value: 48 },
        { name: '11月', value: 45 },
        { name: '12月', value: 49 },
        { name: '', value: 50 }
    ]

    useEffect(() => {
        setInterval(() => {
            const newData = [
                { name: '', value: 50 * Math.random() },
                { name: '1月', value: 50 * Math.random() },
                { name: '2月', value: 50 * Math.random() },
                { name: '3月', value: 50 * Math.random() },
                { name: '4月', value: 50 * Math.random() },
                { name: '5月', value: 50 * Math.random() },
                { name: '6月', value: 50 * Math.random() },
                { name: '7月', value: 50 * Math.random() },
                { name: '8月', value: 50 * Math.random() },
                { name: '9月', value: 50 * Math.random() },
                { name: '10月', value: 50 * Math.random() },
                { name: '11月', value: 50 * Math.random() },
                { name: '12月', value: 50 * Math.random() },
                { name: '', value: 50 * Math.random() },
            ]
            updateData(newData)
        }, 1000)
    }, [])

    const updateData = (data) => {
        myChart.current.setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                //data: ['', '1月', '2月', '3月', '4月', '5月', '6月',
                //    '7月', '8月', '9月', '10月', '11月', '12月', ''],
                data: data.map(i => i.name),
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: px(8),
                    color: 'white',
                    interval: 0
                },
                axisLine: {
                    lineStyle: {
                        color: '#282f4b',
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#282f4b',
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    fontSize: px(10),
                    color: 'white'
                },
                splitLine: {
                    lineStyle: {
                        color: '#282f4b',
                        type: 'dashed'
                    }
                }
            },
            series: [{
                /* data: [27, 31, 21, 24, 35,
                    {
                        value: 50,
                        symbol: 'circle',
                        symbolSize: px(7),
                    },
                    40, 31, 33, 38, 48, 45, 49, 50], */
                data: maxNum(data),
                type: 'line',
                color: '#00c7ff',
                symbol: 'none',
                smooth: true,
                lineStyle: {
                    width: px(1.5)
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#0054a0' },
                            { offset: 0.5, color: '#05336a' },
                            { offset: 1, color: '#091134' }
                        ]
                    )
                }
            }],
            grid: {
                top: px(45),
                left: px(40),
                bottom: px(30),
                right: px(30)
            }
        })
    }

    function maxNum(data) {
        let newData = data.map(i => i.value)
        let maxData = Math.max(...newData)
        let index = newData.indexOf(maxData)
        return data.map((x, i) => ({
            ...x,
            symbol: index === i ? 'circle' : null,
            symbolSize: index === i ? px(7) : null
        }))
    }

    useEffect(() => {
        myChart.current = echarts.init(divRef.current)
        updateData(data)
    }, [])

    return (
        <div className="重点疾病">
            <h2 className="title">住院重点疾病检测</h2>
            <div ref={divRef} className="chart9"></div>
        </div>
    )
}