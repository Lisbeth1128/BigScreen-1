import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart5 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: ['外科', '神经科', '呼吸科', '儿科', '骨科'],
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
                    color: 'white',
                },
                splitLine: {
                    lineStyle: {
                        color: '#282f4b',
                        type: 'dashed'
                    }
                }
            },
            series: [{
                data: [{
                    value: 7,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#f19100' },
                                { offset: 0.5, color: '#9c5d00' },
                                { offset: 1, color: '#432600' }
                            ]
                        )
                    },
                }, 4.5, 4.7, 1.8, 2.8],
                type: 'bar',
                barWidth: '50%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#00ffb7' },
                            { offset: 0.5, color: '#00a779' },
                            { offset: 1, color: '#004333' }
                        ]
                    )
                },
            }],
            grid: {
                top: px(45),
                left: px(50),
                right: px(30),
                bottom: px(30),
            }
        })
    }, [])

    return (
        <div className="床位使用">
            <h2 className="title">各科室床位使用情况及平均住院日</h2>
            <div ref={divRef} className="chart5"></div>
        </div>
    )
}