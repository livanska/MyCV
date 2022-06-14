import React from 'react';
import { ITranslation } from '../types';
export interface ISectionProps extends ITranslation {
  title: string;
  children: React.ReactNode;
}
