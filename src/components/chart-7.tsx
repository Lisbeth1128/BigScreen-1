import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart7 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        { name: '内镜科', value: 90 },
        { name: 'X 光摄影', value: 60 },
        { name: 'M R I', value: 70 },
        { name: 'C T', value: 85 },
        { name: '心电图', value: 95 },
        { name: 'B 超', value: 99 }
    ]

    useEffect(() => {
        setInterval(() => {
            const newData = [
                { name: '内镜科', value: 100 * Math.random() },
                { name: 'X 光摄影', value: 100 * Math.random() },
                { name: 'M R I', value: 100 * Math.random() },
                { name: 'C T', value: 100 * Math.random() },
                { name: '心电图', value: 100 * Math.random() },
                { name: 'B 超', value: 100 * Math.random() },
            ]
            updateData(newData)
        }, 1000)
    }, [])

    const updateData = (data) => {
        myChart.current.setOption({
            xAxis: {
                type: 'value',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: data.map(i => i.name),
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: px(8),
                    color: 'white',
                    margin: px(25)
                }
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    barWidth: '50%',
                    data: data.map(i => i.value),
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 0,
                            [
                                { offset: 0, color: '#00ffb7' },
                                { offset: 0.5, color: '#00a779' },
                                { offset: 1, color: '#004333' }
                            ]
                        )
                    },
                }
            ],
            grid: {
                top: px(45),
                left: px(65),
                bottom: px(15)
            }
        })
    }

    useEffect(() => {
        myChart.current = echarts.init(divRef.current)
        updateData(data)
    }, [])

    return (
        <div className="科技影像">
            <h2 className="title">科技影像人次对比</h2>
            <div ref={divRef} className="chart7"></div>
        </div>
    )
}