import { ITranslation } from './../types';
export interface IHeaderContainerProps {
  shouldShowHeader: boolean;
}

export interface IHeaderContainerState {
  isHeaderVisible: boolean;
}

export interface IHeaderProps extends ITranslation {
  shouldShowHeader: boolean;
  setHeaderVisible(isVisible: boolean): void;
  currentLanguage: string;
  changeLanguage(): void;
}

export interface IHeaderState {}
