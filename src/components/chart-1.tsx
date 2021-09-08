import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import {px} from './px'

export const Chart1 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
      { value: 780, name: '普通门诊' },
      { value: 420, name: '急诊' },
      { value: 540, name: '专家门诊' },
      { value: 600, name: '副主任' },
      { value: 660, name: '主任' }
    ]
    useEffect(() => {
      setInterval(()=>{
        const newData = [
          { value: 1000 * Math.random(), name: '普通门诊' },
          { value: 1000 * Math.random(), name: '急诊' },
          { value: 1000 * Math.random(), name: '专家门诊' },
          { value: 1000 * Math.random(), name: '副主任' },
          { value: 1000 * Math.random(), name: '主任' }
        ]
        refresh(newData)
      }, 1000)
    }, [])

    const refresh = (data) => {
      myChart.current.setOption({
        //animation: false,
        color: [
          '#00bcfc',
          '#ff6a00',
          '#00d48b',
          '#ffcf00',
          '#0055b7'
        ],
        legend: {
          top: 'center',
          right: 0,
          width: '40%',
          orient: 'vertical',
          itemWidth: px(3),
          itemHeight: px(3),
          textStyle: {
            color: 'inherit',
            fontSize: px(10)
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: data,
            width: '60%'
          }
        ]
      })
    }

    useEffect(()=>{
      myChart.current = echarts.init(divRef.current)
      refresh(data)
    }, [])
      


    return (
        <div className="接诊医师">
            <h2 className="title">接诊医师人次</h2>
            <div ref={divRef} className="chart1"></div>
        </div>
    )
    
};