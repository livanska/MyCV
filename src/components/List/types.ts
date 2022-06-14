import { ITranslation } from './../types';

export interface IListProps {
  title: string;
  items: string[];
}

export interface IListContainerProps extends ITranslation {
  data: string[];
}
