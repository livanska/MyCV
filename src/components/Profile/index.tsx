import React from 'react';
import Profile from './Profile';
import cvContext from '../../context/context';
import { IS_MOBILE } from '../../utils/constants';
import { IProfileContainerProps, IProfileContainerState } from './types';

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

  setHeaderVisible = (isVisible: boolean): void =>
    this.setState((prevState: IProfileContainerState) => ({
      ...prevState,
      shouldShowHeader: isVisible,
    }));

  setScrollPosition = (): void =>
    this.setState((prevState: IProfileContainerState) => ({
      ...prevState,
      currentScrollPosition: this.BackgroundElement.scrollTop,
    }));

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
      this.setState((prev: IProfileContainerState) => ({
        ...prev,
        shouldShowHeader:
          this.state.currentScrollPosition - prev.currentScrollPosition > 10,
      }));
  }

  shouldShowHeader = (): boolean =>
    !IS_MOBILE || (IS_MOBILE && this.state.shouldShowHeader);

  render(): React.ReactNode {
    return (
      <cvContext.Provider
        value={{
          setHeaderVisible: this.setHeaderVisible,
          isHeaderVisible: this.shouldShowHeader(),
        }}>
        <Profile
          shouldShowHeader={this.shouldShowHeader()}
          backgroundElementRef={(elem: HTMLDivElement) =>
            (this.BackgroundElement = elem)
          }
        />
      </cvContext.Provider>
    );
  }
}
