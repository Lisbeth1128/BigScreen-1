import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart8 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        // 绘制图表
        myChart.setOption({
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
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: px(8),
                    color: 'white'
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
                    data: [10, 110, 90, 280, 200, 250, 290]
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
                    data: [110, 190, 180, 400, 290, 320, 190]
                }
            ],
            grid: {
                top: px(45),
                left: px(40),
                bottom: px(30),
                right: px(30)
            }
        })
    }, [])

    return (
        <div className="周人流量">
            <h2 className="title">每周人流流量分布情况</h2>
            <div ref={divRef} className="chart8"></div>
        </div>
    )
}