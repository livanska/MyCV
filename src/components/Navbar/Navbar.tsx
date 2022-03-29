import React from 'react';
import style from './Navbar.module.scss';
import { INavbarItem, INavbarProps, INavbarState } from './types';

export default class Navbar extends React.Component<
  INavbarProps,
  INavbarState
> {
  render(): React.ReactNode {
    const { items, activeStyle, activeIndex, setActiveIndex }: INavbarProps =
      this.props;

    return (
      <nav className={style.navbar}>
        {items.map(({ icon, title }: INavbarItem, idx: number) => (
          <a className={style.navbarItem} onClick={() => setActiveIndex(idx)}>
            <img className={style.navbarItem__icon} src={icon} />
            <div className={style.navbarItem__textContainer}>
              <p className={style.navbarItem__text}>{title}</p>
            </div>
          </a>
        ))}
        {activeIndex != -1 && (
          <span
            className={style.navbarItem__line_active}
            style={activeStyle}></span>
        )}
      </nav>
    );
  }
}
