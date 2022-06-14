import React from 'react';
import { IEducationCardProps } from './types';
import style from './EducationCard.module.scss';
export default class EducationCard extends React.Component<IEducationCardProps> {
  render(): React.ReactNode {
    const {
      name,
      image,
      location,
      duration,
      about,
      descriptionTitle,
      topics,
      link,
    }: IEducationCardProps = this.props;
    return (
      <div className={style.card}>
        <span className={style.card__cardLine} />
        <div className={style.card__logoContainer}>
          <div className={style.card__logoContainer__description}>
            <h5>{location}</h5>
            <p>{about}</p>
          </div>
        </div>
        <img className={style.card__logo} src={image} />
        <div className={style.card__content}>
          <div className={style.content__headings}>
            <h3>{name}</h3>
            <h5>
              <a href={link}>{location}</a>
            </h5>
            <p>{duration}</p>
          </div>
          <p>{descriptionTitle}</p>
          <ul className={style.content__list}>
            <span>{topics}</span>
          </ul>
        </div>
      </div>
    );
  }
}
