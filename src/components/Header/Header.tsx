import React from 'react';
import cn from 'classnames';
import Navbar from '../Navbar';
import LanguageSwitch from '../LanguageSwitch';
import { IS_MOBILE } from '../../utils/constants';
import { IHeaderProps } from './types';
import style from './Header.module.scss';
export default class Header extends React.Component<IHeaderProps> {
  render() {
    const {
      name,
      position,
      shouldShowHeader,
      setHeaderVisible,
      topPosition,
    }: IHeaderProps = this.props;
    return (
      <header
        className={style.header}
        style={{
          top: topPosition,
        }}>
        <div className={style.header__textWrapper}>
          <div className={style.textWrapper__text}>
            <h1 className={style.text__title}>{name}</h1>
            <h6 className={style.text__subtitle}>
              {position}
              <LanguageSwitch style={style.header__icon} />
            </h6>
          </div>
          <Navbar />
        </div>
        <div className={style.header__imageWrapper}>
          <div className={style.imageWrapper__element} />
          <div className={style.imageWrapper__image} />
        </div>
        {IS_MOBILE && (
          <div
            className={cn(
              style.header__backContainer,
              !shouldShowHeader && style.header__backContainer_active,
            )}
            onClick={setHeaderVisible}></div>
        )}
      </header>
    );
  }
}
