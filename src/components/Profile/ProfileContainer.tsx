import React from 'react';
import { IS_MOBILE } from '../../utils/constants';
import Profile from './Profile';
import { IProfileContainerProps, IProfileContainerState } from './types';

const HEADER_HIDE_SCROLL_POSITION = 10;

const Skills = {
  barChart: [
    {
      name: 'JavaScript/TypeScript',
      percent: 70,
    },
    {
      name: 'HTML, CSS(SASS, SCSS)',
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
      name: IS_MOBILE ? 'MSSQL' : 'Database development(MSSQL)',
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
export default class ProfileContainer extends React.Component<
  IProfileContainerProps,
  IProfileContainerState
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
    this.BackgroundElement?.addEventListener('scroll', this.setScrollPosition);
  }

  componentWillUnmount() {
    this.BackgroundElement?.removeEventListener(
      'scroll',
      this.setScrollPosition,
    );
  }

  componentDidUpdate(
    prevProps: Readonly<IProfileContainerProps>,
    prevState: Readonly<IProfileContainerState>,
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
      <Profile
        shouldShowHeader={this.shouldShowHeader()}
        skills={Skills}
        backgroundElementRef={(elem: HTMLDivElement) =>
          (this.BackgroundElement = elem)
        }
      />
    );
  }
}
