import React from "react";
import { Box, Bag, GraphBar, Telescope, Email } from "./../../utils/icons";
import style from "./Navbar.module.scss";
import { SECTION_TITLES } from "./../../utils/constants";

interface INavbarItem {
  icon: string;
  title: SECTION_TITLES;
}

const NAVBAR_ITEMS: INavbarItem[] = [
  {
    icon: GraphBar,
    title: SECTION_TITLES.skills,
  },
  {
    icon: Bag,
    title: SECTION_TITLES.expeAndEduc,
  },
  {
    icon: Box,
    title: SECTION_TITLES.projects,
  },
  {
    icon: Telescope,
    title: SECTION_TITLES.interests,
  },
  {
    icon: Email,
    title: SECTION_TITLES.contacts,
  },
];

export default class Navbar extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <nav className={style.navbar}>
        {NAVBAR_ITEMS.map(({ icon, title }: INavbarItem) => (
          <button className={style.navbarItem}>
            <img className={style.navbarItem__icon} src={icon} />
            <div className={style.navbarItem__textContainer}>
              <p className={style.navbarItem__text}>{title}</p>
            </div>
          </button>
        ))}
      </nav>
    );
  }
}
