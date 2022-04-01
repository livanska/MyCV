import React from 'react';
import style from './BarChart.module.scss';
import { IBarChartProps, IBarChartState } from './types';

export default class Section extends React.Component<
  IBarChartProps,
  IBarChartState
> {
  render(): React.ReactNode {
    const chartData = this.props.items;
    return (
      <>
        {chartData.map(a => (
          <div>
            <p>{a.name}</p>
            <div
              style={{ maxWidth: `${a.percent}%` }}
              className={style.barChart__item}></div>
            <span>{`${a.percent}%`}</span>
          </div>
        ))}
        {/* {items.additional.map(a => (
          <div>
            <p>{a}</p>
          </div>
        ))} */}
      </>
    );
  }
}
