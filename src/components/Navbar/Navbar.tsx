import React from 'react';
import { withTranslation } from 'react-i18next';
import style from './Navbar.module.scss';
import { INavbarItem, INavbarProps, INavbarState } from './types';

class Navbar extends React.Component<INavbarProps, INavbarState> {
  render(): React.ReactNode {
    const { items, activeStyle, t, activeIndex, setActiveIndex }: INavbarProps =
      this.props;

    return (
      <nav className={style.navbar}>
        {items.map(({ icon, title }: INavbarItem, idx: number) => (
          <li
            key={idx}
            className={style.navbar__item}
            onClick={() => setActiveIndex(idx)}>
            <img className={style.navbar__item__icon} src={icon} />
            <div className={style.navbar__item__textWrapper}>
              <p className={style.navbar__item__textWrapper__text}>
                {t(`titles.${title.toLowerCase()}`)}
              </p>
            </div>
          </li>
        ))}
        {activeIndex != -1 && (
          <span className={style.navbar__activeLine} style={activeStyle}></span>
        )}
      </nav>
    );
  }
}
export default withTranslation()(Navbar);
