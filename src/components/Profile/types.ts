import { LegacyRef } from 'react';
import { ITranslation } from '../types';

export interface IProfileContainerState {
  currentScrollPosition: number;
  shouldShowHeader: boolean;
}

export interface IProfileContainerProps {}

export interface IProfileState {}

export interface IProfileProps extends ITranslation {
  shouldShowHeader: boolean;
  skills: {
    barChart: { name: string; percent: number }[];
    additional: string[];
  };
  backgroundElementRef: LegacyRef<HTMLDivElement>;
}
