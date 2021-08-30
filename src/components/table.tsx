import React, { useEffect, useRef } from 'react'
import { px } from './px'

export const Chart10 = () => {
    return (
        <table>
        <thead>
            <tr>
                <th>排名</th>
                <th>科室名称</th>
                <th>日门诊量</th>
                <th>占比</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>普通外科</td>
                <td>日门诊量</td>
                <td>25%</td>
            </tr>
            <tr>
                <td>2</td>
                <td>普通内科</td>
                <td>日门诊量</td>
                <td>18%</td>
            </tr>
            <tr>
                <td>3</td>
                <td>神经内科</td>
                <td>日门诊量</td>
                <td>15%</td>
            </tr>
            <tr>
                <td>4</td>
                <td>五官科</td>
                <td>日门诊量</td>
                <td>12%</td>
            </tr>
        </tbody>
    </table>
    )
}