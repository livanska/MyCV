import React from 'react';
import { IBarChartItem, IBarChartProps } from './types';
import style from './BarChart.module.scss';
export default class BarChart extends React.Component<IBarChartProps> {
  render(): React.ReactNode {
    const { items, title }: IBarChartProps = this.props;
    return (
      <div className={style.chart}>
        <h3 className={style.chart__title}>{title}</h3>
        {items.map((skill: IBarChartItem, idx: number) => (
          <div key={idx} className={style.chart__item}>
            <div
              style={{ maxWidth: `${skill.percent}%` }}
              className={style.item__column}>
              <span className={style.column__title}>{skill.name}</span>
            </div>
            <span className={style.item__percent}>{`${skill.percent}%`}</span>
          </div>
        ))}
      </div>
    );
  }
}
