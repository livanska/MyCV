import React from 'react';
import LanguageSwitch from './LanguageSwitch';
import i18n from '../../localization/i18n';
import { LANGUAGES } from '../../localization/data';
import { ILanguageSwitchContainerProps } from './types';

export default class LanguageSwitchContainer extends React.Component<ILanguageSwitchContainerProps> {
  changeLanguage = (): void => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(
      currentLanguage === LANGUAGES.en ? LANGUAGES.ua : LANGUAGES.en,
    );
  };

  render(): React.ReactNode {
    const { style }: ILanguageSwitchContainerProps = this.props;
    return (
      <LanguageSwitch
        currentLanguage={i18n.language}
        changeLanguage={this.changeLanguage}
        style={style}
      />
    );
  }
}
