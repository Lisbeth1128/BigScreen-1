import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart9 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['', '1月', '2月', '3月', '4月', '5月', '6月',
                    '7月', '8月', '9月', '10月', '11月', '12月', ''],
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
                data: [27, 31, 21, 24, 35, 
                    {value: 50,
                    symbol: 'circle',
                    symbolSize: px(7),}, 
                    40, 31, 33, 38, 48, 45, 49, 50],
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
    }, [])

    return (
        <div className="重点疾病">
            <h2 className="title">住院重点疾病检测</h2>
            <div ref={divRef} className="chart9"></div>
        </div>
    )
}