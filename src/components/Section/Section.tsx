import React from 'react';
import style from './Section.module.scss';

interface ISectionProps {
  title: string;
}

interface ISectionState {}

export default class Section extends React.Component<
  ISectionProps,
  ISectionState
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
