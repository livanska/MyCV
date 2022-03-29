import React from 'react';
import { Box, Bag, GraphBar, Telescope, Email, Study } from '../../utils/icons';
import Navbar from './Navbar';
import {
  IS_MOBILE,
  MOBILE_HEADER_HEIGHT,
  SECTION_TITLES,
} from '../../utils/constants';
import {
  INavbarContainerProps,
  INavbarContainerState,
  INavbarItem,
} from './types';

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

export default class NavbarContainer extends React.Component<
  INavbarContainerProps,
  INavbarContainerState
> {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
    };
  }

  handleActiveIndexChange = (idx: number) =>
    this.setState({ activeIndex: idx });

  getLineActivePositionStyle = (): object => {
    let activeStyle = {};
    if (IS_MOBILE)
      activeStyle = {
        top:
          (this.state.activeIndex * MOBILE_HEADER_HEIGHT) / NAVBAR_ITEMS.length,
      };
    else
      activeStyle = {
        left:
          (this.state.activeIndex * window.innerWidth) / NAVBAR_ITEMS.length +
          5,
      };
    return activeStyle;
  };

  render(): React.ReactNode {
    return (
      <Navbar
        items={NAVBAR_ITEMS}
        activeIndex={this.state.activeIndex}
        setActiveIndex={this.handleActiveIndexChange}
        activeStyle={this.getLineActivePositionStyle()}
      />
    );
  }
}
