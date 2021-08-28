import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import {px} from './px'

export const Chart1 = () => {
    const divRef = useRef(null)
    useEffect(() => {
      let myChart = echarts.init(divRef.current)
      // 绘制图表
      myChart.setOption({
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
            data: [
              { value: 780, name: '普通门诊' },
              { value: 420, name: '急诊' },
              { value: 540, name: '专家门诊' },
              { value: 600, name: '副主任' },
              { value: 660, name: '主任' }
            ],
            width: '60%'
          }
        ]
      });
    }, [])

    return (
        <div className="接诊医师">
            <h2 className="title">接诊医师人次</h2>
            <div ref={divRef} className="chart1"></div>
        </div>
    )
    
};