import React, { useEffect, useRef } from 'react';
import './home.scss';
import * as echarts from 'echarts'
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';

export const Home = () => {
  return (
    <div className="home">
      <header>
        <span>北京市实时医疗数据统计</span>
        <div className="halo"></div>
      </header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2"></section>
        <section className="section3"></section>
        <section className="section4"></section>
        <section className="section5"></section>
        <section className="section6"></section>
        <section className="section7"></section>
        <section className="section8"></section>
      </main>
    </div>
  );
};
