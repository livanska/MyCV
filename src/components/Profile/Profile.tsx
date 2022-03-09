import React from 'react';
import style from './Profile.module.scss';
import Header from './../Header/Header';
import { IS_MOBILE, SECTION_TITLES } from '../../utils/constants';
import Section from './../Section/Section';
const HEADER_HIDE_SCROLL_POSITION = 10;
interface IProfileState {
  currentScrollPosition: number;
  shouldShowHeader: boolean;
}

interface IProfileProps {}

const Skills = {
  barChart: [
    {
      name: 'JavaScript/TypeScript',
      percent: 70,
    },
    {
      name: 'HTML,CSS(SASS,SCSS)',
      percent: 70,
    },
    {
      name: 'React & Redux',
      percent: 50,
    },
    {
      name: 'Lightning.js',
      percent: 60,
    },
    {
      name: 'Database development(MSSQL)',
      percent: 30,
    },
    {
      name: 'C#',
      percent: 20,
    },
    {
      name: 'GitHub, GitLab, BitBucket',
      percent: 60,
    },
  ],
  additional: [
    'Advanced Windows, Linux OS user',
    'OS administration basis',
    'Figma basis',
    'Development patterns',
  ],
};
export default class Profile extends React.Component<
  IProfileProps,
  IProfileState
> {
  BackgroundElement: HTMLDivElement;

  constructor(props) {
    super(props);
    this.state = {
      currentScrollPosition: 0,
      shouldShowHeader: true,
    };
  }

  setScrollPosition = (): void => {
    this.setState({
      currentScrollPosition: this.BackgroundElement.scrollTop,
    });
  };

  componentDidMount() {
    this.BackgroundElement.addEventListener('scroll', this.setScrollPosition);
  }

  componentWillUnmount() {
    this.BackgroundElement.removeEventListener(
      'scroll',
      this.setScrollPosition,
    );
  }

  componentDidUpdate(
    prevProps: Readonly<IProfileProps>,
    prevState: Readonly<IProfileState>,
  ): void {
    if (this.state.currentScrollPosition !== prevState.currentScrollPosition)
      this.setState({
        shouldShowHeader:
          this.state.currentScrollPosition - prevState.currentScrollPosition >
          HEADER_HIDE_SCROLL_POSITION,
      });
  }

  shouldShowHeader = (): boolean =>
    !IS_MOBILE || (IS_MOBILE && this.state.shouldShowHeader);

  render(): React.ReactNode {
    return (
      <>
        <div
          className={style.background}
          ref={(elem: HTMLDivElement) => (this.BackgroundElement = elem)}>
          <Header shouldShowHeader={this.shouldShowHeader()} />
          <div className={style.glassPanel}>
            <div className={style.content}>
              <Section title={SECTION_TITLES.skills}>
                {Skills.barChart.map(a => (
                  <div>
                    <p>{a.name}</p>
                    <div
                      style={{ width: `${a.percent}%` }}
                      className={style.barChart__item}></div>
                    <span>{`${a.percent}%`}</span>
                  </div>
                ))}
                {Skills.additional.map(a => (
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
