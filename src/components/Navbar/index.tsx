import React from 'react';
import { withTranslation } from 'react-i18next';
import Navbar from './Navbar';
import { NAVBAR_ITEMS } from './NavbarItems';
import { IS_MOBILE, MOBILE_HEADER_HEIGHT } from '../../utils/constants';
import {
  INavbarContainerProps,
  INavbarContainerState,
  INavbarItem,
} from './types';

class NavbarContainer extends React.Component<
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
    const mobileStyle = {
      top:
        (this.state.activeIndex * MOBILE_HEADER_HEIGHT) / NAVBAR_ITEMS.length,
    };
    const tabletAndDesktopStyle = {
      left:
        (this.state.activeIndex * window.innerWidth) / NAVBAR_ITEMS.length + 5,
    };
    return IS_MOBILE ? mobileStyle : tabletAndDesktopStyle;
  };

  render(): React.ReactNode {
    const { t }: INavbarContainerProps = this.props;
    const navItems = NAVBAR_ITEMS.map((item: INavbarItem) => {
      return {
        title: t(`titles.${item.title.toLowerCase()}`),
        ...item,
      };
    });

    return (
      <Navbar
        items={navItems}
        activeIndex={this.state.activeIndex}
        setActiveIndex={this.handleActiveIndexChange}
        activeStyle={this.getLineActivePositionStyle()}
      />
    );
  }
}

export default withTranslation()(NavbarContainer);
