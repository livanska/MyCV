import { SECTION_TITLES } from './../../utils/constants';
import { ITranslation } from './../types';
export interface INavbarContainerProps {}

export interface INavbarContainerState {
  activeIndex: number;
}

export interface INavbarItem {
  icon: string;
  title: SECTION_TITLES;
}

export interface INavbarProps extends ITranslation {
  items: INavbarItem[];
  activeIndex: number;
  setActiveIndex(activeIndex: number): void;
  activeStyle: object;
}

export interface INavbarState {}
