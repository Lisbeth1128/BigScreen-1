import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart3 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        // 绘制图表
        myChart.setOption({
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
                data: ['外科', '神经科', '呼吸科', '儿科', '骨科', '皮肤科'],
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
                    data: [370, 220, 300, 390, 260, 270],
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
                    data: [290, 270, 230, 300, 430, 220],
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
    }, [])

    return (
        <div className="住院重点手术">
            <h2 className="title">住院重点手术检测</h2>
            <div ref={divRef} className="chart3"></div>
        </div>
    )
}