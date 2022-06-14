import React from 'react';
import { withTranslation } from 'react-i18next';
import { ISectionProps } from './types';
import style from './Section.module.scss';

class Section extends React.Component<ISectionProps> {
  render(): React.ReactNode {
    const { title, t, children }: ISectionProps = this.props;
    return (
      <div className={style.section}>
        <h2 className={style.section__title}>
          {t(`titles.${title.toLowerCase()}`)}
        </h2>
        {children}
      </div>
    );
  }
}
export default withTranslation()(Section);
