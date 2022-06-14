import React from 'react';
import EducationCard from './EducationCard';
import { IEducationCardContainerProps } from './types';

export default class EducationCardContainer extends React.Component<IEducationCardContainerProps> {
  render(): React.ReactNode {
    const { startDate, endDate, ...props }: IEducationCardContainerProps =
      this.props;
    const duration = `${startDate} - ${endDate ? endDate : 'NOW'}`;
    return <EducationCard {...props} duration={duration} />;
  }
}
