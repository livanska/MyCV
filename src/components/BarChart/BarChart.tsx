import React from 'react';
import { withTranslation } from 'react-i18next';
import style from './BarChart.module.scss';
import { IBarChartItem, IBarChartProps, IBarChartState } from './types';

class BarChart extends React.Component<IBarChartProps, IBarChartState> {
  render(): React.ReactNode {
    const { items, t } = this.props;
    return (
      <div className={style.chart}>
        <h3 className={style.chart__title}>{t('skills.basic')}:</h3>
        {items.map((skill: IBarChartItem, idx: number) => (
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
export default withTranslation()(BarChart);
