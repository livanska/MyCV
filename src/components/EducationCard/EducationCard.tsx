import React, { MouseEvent, MouseEventHandler } from 'react';
import { IEducationCardProps, IEducationCardState } from './types';
import style from './EducationCard.module.scss';
import cn from 'classnames';
import { IS_MOBILE } from '../../utils/constants';

export default class EducationCard extends React.Component<
  IEducationCardProps,
  IEducationCardState
> {
  render(): React.ReactNode {
    const {
      name,
      image,
      location,
      startDate,
      endDate,
      about,
      descriptionTitle,
      topics,
      link,
    }: IEducationCardProps = this.props;
    return (
      <div className={style.card}>
        <div className={style.card__logoContainer}>
          <div className={style.card__logoContainer__description}>
            <h5>{location}</h5>
            <p>{about}</p>
          </div>
        </div>
        <img className={style.card__logo} src={image} />

        <div className={style.card__content}>
          <div className={style.card__content__headings}>
            <h3>{name}</h3>
            <h5>
              <a href={link}>{location}</a>
            </h5>
            <p>{`${startDate} - ${endDate ? endDate : 'NOW'}`}</p>
          </div>
          <p>{descriptionTitle}</p>
          <ul className={style.card__content__list}>
            <span>{topics}</span>
          </ul>
        </div>
      </div>
    );
  }
}
