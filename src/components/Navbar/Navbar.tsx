import React from "react";
import {
  Box,
  Bag,
  GraphBar,
  Telescope,
  Email,
  Study,
} from "./../../utils/icons";
import style from "./Navbar.module.scss";
import { IS_MOBILE, SECTION_TITLES } from "./../../utils/constants";
import { MOBILE_HEADER_HEIGHT } from "../Header/Header";

interface INavbarState {
  activeIndex: number;
}
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
    icon: Study,
    title: SECTION_TITLES.education,
  },
  {
    icon: Box,
    title: SECTION_TITLES.projects,
  },
  {
    icon: Bag,
    title: SECTION_TITLES.experience,
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

export default class Navbar extends React.Component<{}, INavbarState> {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
    };
  }

  getLineActivePositionStyle = (): object =>
    IS_MOBILE
      ? {
          top:
            (this.state.activeIndex * MOBILE_HEADER_HEIGHT) /
            NAVBAR_ITEMS.length,
        }
      : {
          left:
            (this.state.activeIndex * window.innerWidth) / NAVBAR_ITEMS.length +
            5,
        };

  render(): React.ReactNode {
    return (
      <nav className={style.navbar}>
        {NAVBAR_ITEMS.map(({ icon, title }: INavbarItem, idx: number) => (
          <a
            className={style.navbarItem}
            onClick={() => this.setState({ activeIndex: idx })}
          >
            <img className={style.navbarItem__icon} src={icon} />
            <div className={style.navbarItem__textContainer}>
              <p className={style.navbarItem__text}>{title}</p>
            </div>
          </a>
        ))}
        {this.state.activeIndex != -1 && (
          <span
            className={style.navbarItem__line_active}
            style={this.getLineActivePositionStyle()}
          ></span>
        )}
      </nav>
    );
  }
}
