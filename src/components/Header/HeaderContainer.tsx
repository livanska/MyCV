import React from 'react';
import Header from './Header';
import { IHeaderContainerProps, IHeaderContainerState } from './types';
import i18n from '../../localization/i18n';
import { LANGUAGES } from '../../localization/data';

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

  changeLanguage = (): void => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(
      currentLanguage === LANGUAGES.en ? LANGUAGES.ua : LANGUAGES.en,
    );
  };

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
        currentLanguage={i18n.language}
        changeLanguage={this.changeLanguage}
        shouldShowHeader={this.state.isHeaderVisible}
        setHeaderVisible={this.handleHeaderVisibleChange}
      />
    );
  }
}
