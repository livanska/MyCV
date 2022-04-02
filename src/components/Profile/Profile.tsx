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
      <div className={style.profile} ref={backgroundElementRef}>
        <Header shouldShowHeader={shouldShowHeader} />
        <div className={style.profile__glassPanel}>
          <div className={style.profile__glassPanel__content}>
            <Section title={SECTION_TITLES.skills}>
              <BarChart data={skills.barChart} />
              <h3 className={style.profile__glassPanel__content__subtitle}>
                Additional:
              </h3>
              <ul className={style.profile__glassPanel__content__list}>
                {skills.additional.map((skill: string) => (
                  <li
                    className={style.profile__glassPanel__content__list__item}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    );
  }
}
