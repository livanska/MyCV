import React from 'react';
import style from './Profile.module.scss';
import Header from '../Header/HeaderContainer';
import { SECTION_TITLES } from '../../utils/constants';
import Section from '../Section/SectionContainer';
import { IProfileState, IProfileProps } from './types';
import BarChart from './../BarChart/BarChartContainer';
export default class Profile extends React.Component<
  IProfileProps,
  IProfileState
> {
  render(): React.ReactNode {
    const { shouldShowHeader, skills, backgroundElementRef }: IProfileProps =
      this.props;
    return (
      <div className={style.background} ref={backgroundElementRef}>
        <Header shouldShowHeader={shouldShowHeader} />
        <div className={style.glassPanel}>
          <div className={style.glassPanel__content}>
            <Section title={SECTION_TITLES.skills}>
              <BarChart data={skills.barChart} />
            </Section>
          </div>
        </div>
      </div>
    );
  }
}
