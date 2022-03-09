import React from 'react';
import style from './Header.module.scss';
import Navbar from './../Navbar/Navbar';
import { IS_MOBILE } from '../../utils/constants';
import cn from 'classnames';
interface IHeaderProps {
  shouldShowHeader: boolean;
}

interface IHeaderState {
  isHeaderVisible: boolean;
}

export const MOBILE_HEADER_HEIGHT = 480;

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  headerElement: HTMLDivElement;

  constructor(props) {
    super(props);
    this.state = {
      isHeaderVisible: this.props.shouldShowHeader,
    };
  }

  componentDidUpdate(prevProps: Readonly<IHeaderProps>) {
    if (
      this.props.shouldShowHeader !== prevProps.shouldShowHeader &&
      !this.props.shouldShowHeader
    )
      this.setState({ isHeaderVisible: this.props.shouldShowHeader });
  }

  render() {
    return (
      <>
        <div
          className={style.header}
          style={{
            top: this.state.isHeaderVisible ? 0 : -MOBILE_HEADER_HEIGHT + 100,
          }}
          ref={(elem: HTMLDivElement) => (this.headerElement = elem)}>
          <div className={style.header__infoContainer}>
            <div className={style.header__textContainer}>
              <h1 className={style.header__title}>Liliia Ivanska</h1>
              <h6 className={style.header__subtitle}>Front-End Developer</h6>
            </div>
            <Navbar />
          </div>
          <div className={style.header__imageContainer}>
            <div className={style.header__element} />
            <div className={style.header__image} />
          </div>
          {IS_MOBILE && (
            <div
              className={cn(
                style.headerBackContainer,
                !this.state.isHeaderVisible && style.isActive,
              )}
              onClick={() => this.setState({ isHeaderVisible: true })}></div>
          )}
        </div>
      </>
    );
  }
}
