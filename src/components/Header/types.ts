import { LegacyRef } from 'react';
import { ITranslation } from './../types';
export interface IHeaderContainerProps extends ITranslation {}
export interface IHeaderProps {
  shouldShowHeader: boolean;
  setHeaderVisible(): void;
  topPosition: number;
  name: string;
  position: string;
}
