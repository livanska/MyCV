import { SECTION_TITLES } from './../../utils/constants';
import { ITranslation } from './../types';

export interface INavbarContainerProps extends ITranslation {}

export interface INavbarContainerState {
  activeIndex: number;
}

export interface INavbarItem {
  icon: string;
  title: SECTION_TITLES | string;
}

export interface INavbarProps {
  items: INavbarItem[];
  activeIndex: number;
  setActiveIndex(activeIndex: number): void;
  activeStyle: object;
}
