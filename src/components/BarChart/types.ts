import React from 'react';

export interface IBarChartContainerProps {
  data: IBarChartItem[];
}

export interface IBarChartContainerState {}

export interface IBarChartProps {
  items: IBarChartItem[];
}

export interface IBarChartState {}

export interface IBarChartItem {
  name: string;
  percent: number;
}
