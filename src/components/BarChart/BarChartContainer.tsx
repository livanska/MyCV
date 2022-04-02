import React from 'react';
import { IBarChartContainerProps, IBarChartContainerState } from './types';
import BarChart from './BarChart';

export default class SectionContainer extends React.Component<
  IBarChartContainerProps,
  IBarChartContainerState
> {
  render(): React.ReactNode {
    const items = this.props.data;
    return <BarChart items={items} />;
  }
}
