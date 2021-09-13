import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart8 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        { name: '周一', 上周: 10, 本周: 110 },
        { name: '周二', 上周: 110, 本周: 190 },
        { name: '周三', 上周: 90, 本周: 180 },
        { name: '周四', 上周: 280, 本周: 400 },
        { name: '周五', 上周: 200, 本周: 290 },
        { name: '周六', 上周: 250, 本周: 320 },
        { name: '周日', 上周: 290, 本周: 190 },
    ]

    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '周一', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '周二', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '周三', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '周四', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '周五', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '周六', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
                {name: '周日', 上周: 400 * Math.random(), 本周: 400 * Math.random()},
            ]
            updateData(newData)
        }, 1000)
    }, [])

    const updateData = (data) => {
        myChart.current.setOption({
            legend: {
                top: px(10),
                right: px(50),
                itemWidth: px(3),
                itemHeight: px(3),
                data: ['本周', '上周'],
                textStyle: {
                    color: 'inherit',
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
            series: [
                {
                    name: '上周',
                    type: 'line',
                    color: '#ffcf00',
                    symbol: 'circle',
                    symbolSize: px(5),
                    lineStyle: {
                        width: px(1)
                    },
                    //data: [10, 110, 90, 280, 200, 250, 290]
                    data: data.map(i => i['上周'])
                },
                {
                    name: '本周',
                    type: 'line',
                    color: '#00ff9c',
                    symbol: 'circle',
                    symbolSize: px(5),
                    lineStyle: {
                        width: px(1)
                    },
                    //data: [110, 190, 180, 400, 290, 320, 190]
                    data: data.map(i => i['本周'])
                }
            ],
            grid: {
                top: px(45),
                left: px(40),
                bottom: px(30),
                right: px(30)
            }
        })
    }
     
    useEffect(() => {
        myChart.current = echarts.init(divRef.current)
        updateData(data)
    }, [])

    return (
        <div className="周人流量">
            <h2 className="title">每周人流流量分布情况</h2>
            <div ref={divRef} className="chart8"></div>
        </div>
    )
}