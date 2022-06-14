import React from 'react';
import { Skills } from '../../data';
import { IListProps } from './types';
import style from './List.module.scss';

export default class List extends React.Component<IListProps> {
  render(): React.ReactNode {
    const { title }: IListProps = this.props;
    return (
      <>
        <h3 className={style.subtitle}>{title}</h3>
        <ul className={style.list}>
          {Skills.additional.map((skill: string, idx: number) => (
            <li className={style.list__item} key={idx}>
              {skill}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
