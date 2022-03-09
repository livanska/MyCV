export enum SECTION_TITLES {
  skills = 'Skills',
  experience = 'Experience',
  education = 'Education',
  expeAndEduc = 'Experience & Education',
  projects = 'Projects',
  interests = 'Interests',
  contacts = 'Contacts',
}

export enum SCREEN_SIZES {
  maxPhoneWidth = 600,
  minDesktopWidth = 1200,
}

const IS_MOBILE = window.innerWidth <= SCREEN_SIZES.maxPhoneWidth;
const IS_TABLET =
  window.innerWidth > SCREEN_SIZES.maxPhoneWidth &&
  window.innerWidth <= SCREEN_SIZES.minDesktopWidth;
const IS_DESKTOP = window.innerWidth > SCREEN_SIZES.minDesktopWidth;

export { IS_MOBILE, IS_TABLET, IS_DESKTOP };
