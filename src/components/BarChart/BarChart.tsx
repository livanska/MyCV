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
      <>
        {chartData.map((skill: IBarChartItem, idx: number) => (
          <div key={idx}>
            <p>{skill.name}</p>
            <div
              style={{ maxWidth: `${skill.percent}%` }}
              className={style.barChart__item}></div>
            <span>{`${skill.percent}%`}</span>
          </div>
        ))}
      </>
    );
  }
}
