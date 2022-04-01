import React from 'react';
import style from './Section.module.scss';
import { ISectionProps, ISectionState } from './types';

export default class Section extends React.Component<
  ISectionProps,
  ISectionState
> {
  render(): React.ReactNode {
    const { title, content }: ISectionProps = this.props;
    return (
      <div className={title}>
        <h2 className={style.section__title}>{this.props.title}</h2>
        {content}
      </div>
    );
  }
}
