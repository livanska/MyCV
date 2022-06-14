import { LegacyRef } from 'react';
export interface IProfileContainerState {
  currentScrollPosition: number;
  shouldShowHeader: boolean;
}
export interface IProfileContainerProps {}
export interface IProfileProps {
  shouldShowHeader: boolean;
  backgroundElementRef: LegacyRef<HTMLDivElement>;
}
