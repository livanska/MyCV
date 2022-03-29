import React from 'react';
import style from './Header.module.scss';
import Navbar from '../Navbar/NavbarContainer';
import { IS_MOBILE, MOBILE_HEADER_HEIGHT } from '../../utils/constants';
import cn from 'classnames';
import { IHeaderProps, IHeaderState } from './types';

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  render() {
    const { shouldShowHeader, setHeaderVisible }: IHeaderProps = this.props;
    return (
      <div
        className={style.header}
        style={{
          top: shouldShowHeader ? 0 : -MOBILE_HEADER_HEIGHT + 100,
        }}>
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
              !shouldShowHeader && style.isActive,
            )}
            onClick={() => setHeaderVisible(true)}></div>
        )}
      </div>
    );
  }
}
