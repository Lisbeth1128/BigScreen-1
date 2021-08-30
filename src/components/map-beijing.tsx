import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from './px'
import beijing from '../geo/beijing.json'
import { use } from 'echarts'

export const Beijing = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current)
        // @ts-ignore
        echarts.registerMap('BJ', beijing)
        myChart.setOption({
            series: [{
                type: 'map',
                map: 'BJ',
                data: [
                    { name: '东城区', value: 1 }
                ],
                label: { show: true, color: 'white', fontSize: px(6) },
                itemStyle: {
                    areaColor: '#0a0b34',
                    borderColor: '#01A7F7',
                    emphasis: {
                        label: { color: 'white' },
                        areaColor: '#5470C6',
                    },
                },
            }]
        })
    }, [])

    return (
        <div className="北京地图">
            <div className="mapHeader">
                <div>
                    <div className="today">今日门诊数</div>
                    <div className="count 门诊">3285</div>
                </div>
                <div>
                    <div className="today ">今日急诊数</div>
                    <div className="count 急诊">1023</div>
                </div>
                <div>
                    <div className="today">今日住院数</div>
                    <div className="count 住院">653</div>
                </div>
                <div>
                    <div className="today">今日出院数</div>
                    <div className="count 出院">408</div>
                </div>
            </div>
            <div ref={divRef} className="beijing"></div>
            <div className="label">北京市</div>
        </div>
    )
}