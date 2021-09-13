import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart3 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        { name: '外科', 上周: 370, 本周: 290},
        { name: '神经科', 上周: 220, 本周: 270},
        { name: '呼吸科', 上周: 300, 本周: 230},
        { name: '儿科', 上周: 390, 本周: 300},
        { name: '骨科', 上周: 260, 本周: 430},
        { name: '皮肤科', 上周: 270, 本周: 220},
    ]
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '外科', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '神经科', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '呼吸科', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '儿科', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '骨科', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '皮肤科', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
            ]
            updateData(newData)
        }, 1000)
    }, [])
    
    const updateData = (data) => {
        myChart.current.setOption({
            legend: {
                top: px(15),
                right: px(70),
                itemWidth: px(3),
                itemHeight: px(3),
                data: ['上周', '本周'],
                textStyle: {
                    color: 'white',
                    fontSize: px(10)
                }
            },
            xAxis: {
                type: 'category',
                data: data.map(i => i.name),
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: px(10),
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
                splitNumber: 4,
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
            series: [
                {
                    name: '上周',
                    type: 'bar',
                    barWidth: '20%',
                    barGap: 0,
                    data: data.map(i => i["上周"]),
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#f19100'},
                                {offset: 0.5, color: '#9c5d00'},
                                {offset: 1, color: '#432600'}
                            ]
                        )
                    }
                },
                {
                    name: '本周',
                    type: 'bar',
                    barWidth: '20%',
                    barGap: 0,
                    data: data.map(i => i["本周"]),
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#00ffb7'},
                                {offset: 0.5, color: '#00a779'},
                                {offset: 1, color: '#004333'}
                            ]
                        )
                    }
                },
            ],
            grid: {
                top: px(45),
                left: px(50),
                right: px(30),
                bottom: px(30)
            }
        })
    }

    useEffect(() => {
        myChart.current = echarts.init(divRef.current)
        updateData(data)
    }, [])

    return (
        <div className="住院重点手术">
            <h2 className="title">住院重点手术检测</h2>
            <div ref={divRef} className="chart3"></div>
        </div>
    )
}