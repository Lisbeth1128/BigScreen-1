import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import {px} from './px'

export const Chart4 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [90, 75, 50, 99, 90, 48, 120, 40]
    useEffect(() => {
      setInterval(() => {
          const newData = [120 * Math.random(),
                           120 * Math.random(), 
                           120 * Math.random(),
                           120 * Math.random(),
                           120 * Math.random(),
                           120 * Math.random(),
                           120 * Math.random(),
                           120 * Math.random()]
          updateData(newData)
      }, 1000)
    }, [])

    const updateData = (data) => {
        myChart.current.setOption({
            radar: [
                {
                    indicator: [
                        { text: '高血压', max: 100 },
                        { text: '气管炎', max: 100 },
                        { text: '关节炎', max: 100 },
                        { text: '胃炎', max: 100 },
                        { text: '糖尿病', max: 100 },
                        { text: '呼吸道感染', max: 100 },
                        { text: '白内障', max: 100 },
                        { text: '妊娠反应', max: 100 }
                    ],
                    center: ['50%', '55%'],
                    radius: 40,
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    axisNameGap: px(8),
                    name: {
                        formatter: '{value}',
                        textStyle: {
                            color: 'white',
                            fontSize: px(8)
                        }
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'white',
                            type: 'dashed'
                        }
                    }
                },
            ],
            series: [
                {
                    name: '雷达图',
                    type: 'radar',
                    data: [
                        {
                            value: data,
                            name: 'Data A',
                            symbol: 'none',
                            areaStyle: {
                                color: '#0077a3'
                            }
                        },
                    ],
                    color: '#0077a3'
                },
            ]
          });
    }
      
    useEffect(() => {
        myChart.current = echarts.init(divRef.current)
        updateData(data)
    }, [])

    return (
        <div className="一周病例">
            <h2 className="title">近一周病例情况</h2>
            <div ref={divRef} className="chart4"></div>
        </div>
    )
    
};