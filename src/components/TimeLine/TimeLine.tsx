import React from 'react';
import style from './TimeLine.module.scss';
import { ITimeLineProps, ITimeLineState } from './types';
import EducationCard from './../EducationCard/EducationCardContainer';
import { IEducationCardContainerProps } from './../EducationCard/types';
import { withTranslation } from 'react-i18next';
class TimeLine extends React.Component<ITimeLineProps, ITimeLineState> {
  render(): React.ReactNode {
    const { educationAndExperience }: ITimeLineProps = this.props;
    return (
      <div className={style.grid}>
        <div className={style.grid__timeline}></div>
        {educationAndExperience.map((e: IEducationCardContainerProps) => (
          <EducationCard {...e} />
        ))}
      </div>
    );
  }
}
export default withTranslation()(TimeLine);
