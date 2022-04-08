import React from 'react';
import style from './Profile.module.scss';
import Header from '../Header/HeaderContainer';
import EducationCard from '../EducationCard/EducationCardContainer';
import { SECTION_TITLES } from '../../utils/constants';
import Section from '../Section/SectionContainer';
import { IProfileState, IProfileProps } from './types';
import BarChart from './../BarChart/BarChartContainer';
import { IEducationCardContainerProps } from '../EducationCard/types';
import IncoraLogo from '../../assets/images/incora-logo.png';
import NULPLogo from '../../assets/images/nulp-logo.jpg';

const Education = [
  {
    name: 'Software engineering',
    image: NULPLogo,
    location: 'Lviv Polytechnic National University',
    startDate: 'SEP 18',
    endDate: null,
    descriptionTitle: 'Key subjects:',
    topics:
      'Database development, Object-oriented Programming, Statistical Methods, Data Structure and Algorithms',
    link: 'https://lpnu.ua/en',
    about:
      'Lviv Polytechnic National University is the oldest technical higher educational institution in Ukraine and East Europe. It was founded in 1816. University consists of 17 institutes, more than 100 departments; autonomous, additional and general subdivisions.',
  },
  {
    name: 'Code Camp (React Course)',
    image: IncoraLogo,
    location: 'Incora',
    startDate: 'FEB 21',
    endDate: 'MAY 21',
    descriptionTitle: 'Key topics:',
    topics: 'React, Redux, Formik, React Hooks, TypeScript',
    link: 'https://incora.software/',
    about:
      '"As a full-service software company, we create a perfect synergy of processes to define, design and develop cutting-edge solutions from initial ideas. Possessing experience in deploying various challenging features and projects, we use the latest technologies and best management practices."',
  },
];
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
            <Section title={SECTION_TITLES.education}>
              <div className={style.profile__glassPanel__content__grid}>
                {Education.map((e: IEducationCardContainerProps) => (
                  <EducationCard {...e} />
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    );
  }
}
