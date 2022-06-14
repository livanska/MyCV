import { ITranslation } from './../types';
export interface IBarChartContainerProps extends ITranslation {
  data: IBarChartItem[];
}
export interface IBarChartProps {
  items: IBarChartItem[];
  title: string;
}
export interface IBarChartItem {
  name: string;
  percent: number;
}
