import React from 'react';
import { withTranslation } from 'react-i18next';
import style from './Section.module.scss';
import { ISectionProps, ISectionState } from './types';

class Section extends React.Component<ISectionProps, ISectionState> {
  render(): React.ReactNode {
    const { title, t, content }: ISectionProps = this.props;
    return (
      <div className={style.section}>
        <h2 className={style.section__title}>
          {' '}
          {t(`titles.${title.toLowerCase()}`)}
        </h2>
        {content}
      </div>
    );
  }
}
export default withTranslation()(Section);
