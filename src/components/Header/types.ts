export interface IHeaderContainerProps {
  shouldShowHeader: boolean;
}

export interface IHeaderContainerState {
  isHeaderVisible: boolean;
}

export interface IHeaderProps {
  shouldShowHeader: boolean;
  setHeaderVisible(isVisible: boolean): void;
}

export interface IHeaderState {}
