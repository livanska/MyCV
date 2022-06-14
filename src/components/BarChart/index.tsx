import React from 'react';
import { withTranslation } from 'react-i18next';
import BarChart from './BarChart';
import { IBarChartContainerProps } from './types';

class SectionContainer extends React.Component<IBarChartContainerProps> {
  render(): React.ReactNode {
    const { data, t }: IBarChartContainerProps = this.props;
    return <BarChart items={data} title={t('skills.basic')} />;
  }
}
export default withTranslation()(SectionContainer);
