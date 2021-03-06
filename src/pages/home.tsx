import React, { useEffect, useRef } from 'react';
import './home.scss';
import * as echarts from 'echarts'
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';
import { Chart6 } from '../components/chart-6';
import { Chart7 } from '../components/chart-7';
import { Chart8 } from '../components/chart-8';
import { Chart9 } from '../components/chart-9';
import { Beijing } from '../components/map-beijing';
import { Chart10 } from '../components/table';

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
        <section className="section2">
          <Beijing />
        </section>
        <section className="section3">
          <Chart3 />
        </section>
        <section className="section4">
          <Chart4 />
          <Chart5 />
        </section>
        <section className="section5">
          <Chart6 />
          <Chart7 />
        </section>
        <section className="section6">
          <Chart8 />
        </section>
        <section className="section7">
          <Chart10 />
        </section>
        <section className="section8">
          <Chart9 />
        </section>
      </main>
    </div>
  );
};
