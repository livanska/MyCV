import React from 'react';
import EducationCard from './EducationCard';
import {
  IEducationCardContainerProps,
  IEducationCardContainerState,
} from './types';

export default class EducationCardContainer extends React.Component<
  IEducationCardContainerProps,
  IEducationCardContainerState
> {
  render(): React.ReactNode {
    return <EducationCard {...this.props} />;
  }
}
