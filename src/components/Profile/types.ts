import { LegacyRef } from 'react';

export interface IProfileContainerState {
  currentScrollPosition: number;
  shouldShowHeader: boolean;
}

export interface IProfileContainerProps {}

export interface IProfileState {}

export interface IProfileProps {
  shouldShowHeader: boolean;
  skills: {
    barChart: { name: string; percent: number }[];
    additional: string[];
  };
  backgroundElementRef: LegacyRef<HTMLDivElement>;
}
