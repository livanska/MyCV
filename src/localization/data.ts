import uaLang from './translations/ua.json';
import enLang from './translations/en.json';

export enum LANGUAGES {
  en = 'en',
  ua = 'ua',
}

const resources = {
  en: enLang,
  ua: uaLang,
};

export default resources;
