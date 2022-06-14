import React from 'react';
import Header from '../Header';
import Section from '../Section';
import BarChart from '../BarChart';
import List from '../List';
import TimeLine from '../TimeLine';
import { SECTION_TITLES } from '../../utils/constants';
import { Skills, EducationAndExperience } from '../../data';
import { IProfileProps } from './types';
import style from './Profile.module.scss';
export default class Profile extends React.Component<IProfileProps> {
  render(): React.ReactNode {
    const { backgroundElementRef }: IProfileProps = this.props;
    return (
      <div className={style.profile} ref={backgroundElementRef}>
        <Header />
        <div className={style.profile__glassPanel}>
          <div className={style.glassPanel__content}>
            <Section title={SECTION_TITLES.skills}>
              <BarChart data={Skills.barChart} />
              <List data={Skills.additional} />
            </Section>
            <Section title={SECTION_TITLES.expeAndEduc}>
              <TimeLine data={EducationAndExperience} />
            </Section>
            <Section title={SECTION_TITLES.projects}>
              <div className={style.content__grid}></div>
            </Section>
          </div>
        </div>
      </div>
    );
  }
}
