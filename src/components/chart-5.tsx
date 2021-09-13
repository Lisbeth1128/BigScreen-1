import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'

export const Chart5 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        { name: '外科', value: 7 },
        { name: '神经科', value: 4.5 },
        { name: '呼吸科', value: 4.7 },
        { name: '儿科', value: 1.8 },
        { name: '骨科', value: 2.8 }
    ]

    useEffect(() => {
        setInterval(() => {
            const newData = [
                { name: '外科', value: 8 * Math.random() },
                { name: '神经科', value: 8 * Math.random() },
                { name: '呼吸科', value: 8 * Math.random() },
                { name: '儿科', value: 8 * Math.random() },
                { name: '骨科', value: 8 * Math.random() }
            ]
            updateData(newData)
        }, 1000)
    }, [])

    const updateData = (data) => {
        myChart.current.setOption({
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
                data: maxNum(data),
                type: 'bar',
                barWidth: '50%',
            }],
            grid: {
                top: px(45),
                left: px(50),
                right: px(30),
                bottom: px(30),
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
        return data.map((x, i) => ({
            ...x,
            itemStyle: index === i ? maxColor : otherColor
        }))
    }

    useEffect(() => {
        myChart.current = echarts.init(divRef.current)
        updateData(data)
    }, [])

    return (
        <div className="床位使用">
            <h2 className="title">各科室床位使用情况及平均住院日</h2>
            <div ref={divRef} className="chart5"></div>
        </div>
    )
}