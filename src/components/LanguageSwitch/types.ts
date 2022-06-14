export interface ILanguageSwitchProps {
  currentLanguage: string;
  changeLanguage(): void;
  style?: string;
}

export interface ILanguageSwitchContainerProps {
  style?: string;
}
