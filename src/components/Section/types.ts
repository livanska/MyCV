import React from 'react';
import { ITranslation } from '../types';

export interface ISectionContainerProps {
  title: string;
}

export interface ISectionContainerState {}

export interface ISectionProps extends ITranslation {
  title: string;
  content: React.ReactNode;
}

export interface ISectionState {}
