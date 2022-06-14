import React from 'react';
import { ILanguageSwitchProps } from './types';
import { Settings } from '../../utils/icons';

export default class LanguageSwitch extends React.Component<ILanguageSwitchProps> {
  render(): React.ReactNode {
    const { currentLanguage, changeLanguage, style }: ILanguageSwitchProps =
      this.props;
    return (
      <>
        <img className={style} src={Settings} onClick={changeLanguage} />{' '}
        {currentLanguage.toUpperCase()}
      </>
    );
  }
}
