import React from 'react';
import { withTranslation } from 'react-i18next';
import EducationCard from '../EducationCard';
import { ITimeLineProps } from './types';
import { IEducationCardContainerProps } from '../EducationCard/types';
import style from './TimeLine.module.scss';

class TimeLine extends React.Component<ITimeLineProps> {
  render(): React.ReactNode {
    const { data }: ITimeLineProps = this.props;
    return (
      <div className={style.grid}>
        <div className={style.grid__timeline}></div>
        {data.map((card: IEducationCardContainerProps, idx: number) => (
          <EducationCard {...card} key={idx} />
        ))}
      </div>
    );
  }
}
export default withTranslation()(TimeLine);
