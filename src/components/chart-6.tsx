import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart6 = () => {
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
                data: ['门诊收入', '住院收入', '全院收入', '挂号收入', '药品收入', '医疗收入'],
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
                    data: [80000, 60000, 120000, 90000, 70000, 40000],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 0,
                            [
                                {offset: 0, color: '#f19100'},
                                {offset: 0.5, color: '#9c5d00'},
                                {offset: 1, color: '#432600'}
                            ]
                        )
                    },
                }
            ],
            grid: {
                top: px(45),
                left: px(70),
                bottom: px(15)
            }
        })
    }, [])

    return (
        <div className="收入占比">
            <h2 className="title">全院收入占比</h2>
            <div ref={divRef} className="chart6"></div>
        </div>
    )
}