import { ITranslation } from './../types';

export interface IBarChartContainerProps {
  data: IBarChartItem[];
}

export interface IBarChartContainerState {}

export interface IBarChartProps extends ITranslation {
  items: IBarChartItem[];
}

export interface IBarChartState {}

export interface IBarChartItem {
  name: string;
  percent: number;
}
