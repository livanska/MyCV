import React from 'react';
import style from './BarChart.module.scss';
import { IBarChartItem, IBarChartProps, IBarChartState } from './types';

export default class Section extends React.Component<
  IBarChartProps,
  IBarChartState
> {
  render(): React.ReactNode {
    const chartData = this.props.items;
    return (
      <div className={style.chart}>
        <p className={style.chart__title}>Basic:</p>
        {chartData.map((skill: IBarChartItem, idx: number) => (
          <div key={idx} className={style.chart__item}>
            <div
              style={{ maxWidth: `${skill.percent}%` }}
              className={style.chart__item__column}>
              <span className={style.chart__item__column__title}>
                {skill.name}
              </span>
            </div>
            <span
              className={
                style.chart__item__percent
              }>{`${skill.percent}%`}</span>
          </div>
        ))}
      </div>
    );
  }
}
