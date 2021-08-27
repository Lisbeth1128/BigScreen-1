import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart2 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: ['脑梗', '心脏病', '糖尿病', '高血压'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: px(10),
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
            series: [{
                data: [270, {
                    value: 360,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#f19100'},
                                {offset: 0.5, color: '#9c5d00'},
                                {offset: 1, color: '#432600'}
                            ]
                        )
                    },
                    }, 320, 221],
                type: 'bar',
                barWidth: '50%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#00ffb7'},
                            {offset: 0.5, color: '#00a779'},
                            {offset: 1, color: '#004333'}
                        ]
                    )
                },
            }],
            grid: {
                top: px(45),
                left: px(50),
                right: px(30),
                bottom: px(30)
            }
        })
    }, [])

        return (
            <div className="门诊疾病">
                <h2 className="title">门诊疾病排行</h2>
                <div ref={divRef} className="chart2"></div>
            </div>
        )
}