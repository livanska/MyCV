import React from 'react';
import style from './Profile.module.scss';
import Header from '../Header/HeaderContainer';
import { SECTION_TITLES } from '../../utils/constants';
import Section from '../Section/SectionContainer';
import { IProfileState, IProfileProps } from './types';
export default class Profile extends React.Component<
  IProfileProps,
  IProfileState
> {
  render(): React.ReactNode {
    const { shouldShowHeader, skills, backgroundElementRef }: IProfileProps =
      this.props;
    return (
      <>
        <div className={style.background} ref={backgroundElementRef}>
          <Header shouldShowHeader={shouldShowHeader} />
          <div className={style.glassPanel}>
            <div className={style.content}>
              <Section title={SECTION_TITLES.skills}>
                {skills.barChart.map(a => (
                  <div>
                    <p>{a.name}</p>
                    <div
                      style={{ width: `${a.percent}%` }}
                      className={style.barChart__item}></div>
                    <span>{`${a.percent}%`}</span>
                  </div>
                ))}
                {skills.additional.map(a => (
                  <div>
                    <p>{a}</p>
                  </div>
                ))}
              </Section>
            </div>
          </div>
        </div>
      </>
    );
  }
}
