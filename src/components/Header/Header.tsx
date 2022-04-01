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
      <header
        className={style.header}
        style={{
          top: shouldShowHeader ? 0 : -MOBILE_HEADER_HEIGHT + 100,
        }}>
        <div className={style.header__textWrapper}>
          <div className={style.header__textWrapper__text}>
            <h1 className={style.header__textWrapper__text__title}>
              Liliia Ivanska
            </h1>
            <h6 className={style.header__textWrapper__text__subtitle}>
              Front-End Developer
            </h6>
          </div>
          <Navbar />
        </div>
        <div className={style.header__imageWrapper}>
          <div className={style.header__imageWrapper__element} />
          <div className={style.header__imageWrapper__image} />
        </div>
        {IS_MOBILE && (
          <div
            className={cn(
              style.header__backContainer,
              !shouldShowHeader && style.header__backContainer_active,
            )}
            onClick={() => setHeaderVisible(true)}></div>
        )}
      </header>
    );
  }
}
