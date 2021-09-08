import React, { isValidElement, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart2 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        { value: 270, name: '脑梗' },
        { value: 360, name: '心脏病' },
        { value: 320, name: '糖尿病' },
        { value: 221, name: '高血压' }
    ]

    useEffect(() => {
        setInterval(() => {
            const newData = [
                { value: 400 * Math.random(), name: '脑梗' },
                { value: 400 * Math.random(), name: '心脏病' },
                { value: 400 * Math.random(), name: '糖尿病' },
                { value: 400 * Math.random(), name: '高血压' }
            ]
            x(newData)
        }, 1000)
    }, [])

    const x = (data) => {
        myChart.current.setOption({
                xAxis: {
                    type: 'category',
                    //data: ['脑梗', '心脏病', '糖尿病', '高血压'],
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
                series: [{
                    data: maxNum(data),
                    type: 'bar',
                    barWidth: '50%',
                }],
                grid: {
                    top: px(45),
                    left: px(50),
                    right: px(30),
                    bottom: px(30)
                }
        })
    }
    function maxNum(data) {
        let maxColor = {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#f19100' },
                    { offset: 0.5, color: '#9c5d00' },
                    { offset: 1, color: '#432600' }
                ]
            )
        }
        let otherColor = {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#00ffb7' },
                    { offset: 0.5, color: '#00a779' },
                    { offset: 1, color: '#004333' }
                ]
            )
        }
        let newData = data.map(i => i.value)
        let maxData = Math.max(...newData)
        let index = newData.indexOf(maxData)
        console.log(data[index])
        return data.map((x, i) => ({
            ...x,
            itemStyle: index === i ? maxColor : otherColor
        }))
    }
    useEffect(() => {
        myChart.current = echarts.init(divRef.current)
        x(data)
    }, [])

    return (
        <div className="门诊疾病">
            <h2 className="title">门诊疾病排行</h2>
            <div ref={divRef} className="chart2"></div>
        </div>
    )
}