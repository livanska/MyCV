import { SECTION_TITLES } from './../../utils/constants';
export interface INavbarContainerProps {}

export interface INavbarContainerState {
  activeIndex: number;
}

export interface INavbarItem {
  icon: string;
  title: SECTION_TITLES;
}

export interface INavbarProps {
  items: INavbarItem[];
  activeIndex: number;
  setActiveIndex(activeIndex: number): void;
  activeStyle: object;
}

export interface INavbarState {}
