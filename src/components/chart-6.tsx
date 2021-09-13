import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart6 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        { name: '门诊收入', value: 80000 },
        { name: '住院收入', value: 60000 },
        { name: '全院收入', value: 120000 },
        { name: '挂号收入', value: 90000 },
        { name: '药品收入', value: 70000 },
        { name: '医疗收入', value: 40000 }
    ]
    useEffect(() => {
        setInterval(() => {
            const newData = [
                { name: '门诊收入', value: 150000 * Math.random() },
                { name: '住院收入', value: 150000 * Math.random() },
                { name: '全院收入', value: 150000 * Math.random() },
                { name: '挂号收入', value: 150000 * Math.random() },
                { name: '药品收入', value: 150000 * Math.random() },
                { name: '医疗收入', value: 150000 * Math.random() }
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
                                { offset: 0, color: '#f19100' },
                                { offset: 0.5, color: '#9c5d00' },
                                { offset: 1, color: '#432600' }
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
    }

    useEffect(() => {
        myChart.current = echarts.init(divRef.current)
        updateData(data)
    }, [])

    return (
        <div className="收入占比">
            <h2 className="title">全院收入占比</h2>
            <div ref={divRef} className="chart6"></div>
        </div>
    )
}