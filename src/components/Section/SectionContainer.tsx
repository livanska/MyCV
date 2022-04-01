import React from 'react';
import Section from './Section';
import { ISectionContainerProps, ISectionContainerState } from './types';

export default class SectionContainer extends React.Component<
  ISectionContainerProps,
  ISectionContainerState
> {
  render(): React.ReactNode {
    return <Section title={this.props.title} content={this.props.children} />;
  }
}
