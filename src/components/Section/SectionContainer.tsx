import React from 'react';
import style from './Section.module.scss';
import { ISectionContainerProps, ISectionContainerState } from './types';

export default class SectionContainer extends React.Component<
  ISectionContainerProps,
  ISectionContainerState
> {
  render(): React.ReactNode {
    return (
      <div className={style.section}>
        <h2 className={style.section__title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
