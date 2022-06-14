import { Box, Bag, GraphBar, Telescope, Email, Study } from '../../utils/icons';
import { SECTION_TITLES } from '../../utils/constants';
import { INavbarItem } from './types';

export const NAVBAR_ITEMS: INavbarItem[] = [
  {
    icon: GraphBar,
    title: SECTION_TITLES.skills,
  },
  {
    icon: Study,
    title: SECTION_TITLES.education,
  },
  {
    icon: Box,
    title: SECTION_TITLES.projects,
  },
  {
    icon: Bag,
    title: SECTION_TITLES.experience,
  },
  {
    icon: Telescope,
    title: SECTION_TITLES.interests,
  },
  {
    icon: Email,
    title: SECTION_TITLES.contacts,
  },
];
