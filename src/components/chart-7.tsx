import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart7 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        // 绘制图表
        myChart.setOption({
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
                data: ['内镜科', 'X 光摄影', 'M R I', 'C T', '心电图', 'B 超'],
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
                    data: [90, 60, 70, 85, 95, 99],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 0,
                            [
                                {offset: 0, color: '#00ffb7'},
                                {offset: 0.5, color: '#00a779'},
                                {offset: 1, color: '#004333'}
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
    }, [])

    return (
        <div className="科技影像">
            <h2 className="title">科技影像人次对比</h2>
            <div ref={divRef} className="chart7"></div>
        </div>
    )
}