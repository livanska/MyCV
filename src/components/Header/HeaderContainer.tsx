import React from 'react';
import Header from './Header';
import { IHeaderContainerProps, IHeaderContainerState } from './types';

export default class HeaderContainer extends React.Component<
  IHeaderContainerProps,
  IHeaderContainerState
> {
  headerElement: HTMLDivElement;

  constructor(props) {
    super(props);
    this.state = {
      isHeaderVisible: this.props.shouldShowHeader,
    };
  }

  componentDidUpdate(prevProps: Readonly<IHeaderContainerProps>) {
    if (
      this.props.shouldShowHeader !== prevProps.shouldShowHeader &&
      !this.props.shouldShowHeader
    )
      this.setState({ isHeaderVisible: this.props.shouldShowHeader });
  }

  handleHeaderVisibleChange = (isVisible: boolean) =>
    this.setState({ isHeaderVisible: isVisible });

  render() {
    return (
      <Header
        shouldShowHeader={this.state.isHeaderVisible}
        setHeaderVisible={this.handleHeaderVisibleChange}
      />
    );
  }
}
