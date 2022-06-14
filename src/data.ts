import { IS_MOBILE } from './utils/constants';
import GlobalLogicLogo from './assets/images/globallogic-logo.jpg';
import IncoraLogo from './assets/images/incora-logo.png';
import NULPLogo from './assets/images/nulp-logo.jpg';

export const EducationAndExperience = [
  {
    name: 'Associate Software Engineer',
    image: GlobalLogicLogo,
    location: 'GlobalLogic',
    startDate: 'OCT 21',
    endDate: null,
    descriptionTitle: 'Used technologies:',
    topics: 'Lightning.js, GitHub',
    link: 'https://www.globallogic.com',
    about:
      'GlobalLogic, a Hitachi Group Company, is a leader in digital product engineering. In an increasingly digital world, we show businesses how they can better engage their consumers and bring the next generation of digital products and services to market in the shortest possible time.',
  },
  {
    name: 'Trainee Frontend Developer',
    image: GlobalLogicLogo,
    location: 'GlobalLogic',
    startDate: 'JUN 21',
    endDate: 'OCT 21',
    descriptionTitle: 'Used technologies:',
    topics: 'React, CSS, Leaflet, BitBucket',
    link: 'https://www.globallogic.com',
    about:
      'GlobalLogic, a Hitachi Group Company, is a leader in digital product engineering. In an increasingly digital world, we show businesses how they can better engage their consumers and bring the next generation of digital products and services to market in the shortest possible time.',
  },
  {
    name: 'Code Camp (React Course)',
    image: IncoraLogo,
    location: 'Incora',
    startDate: 'FEB 21',
    endDate: 'MAY 21',
    descriptionTitle: 'Key topics:',
    topics: 'React, Redux, Formik, React Hooks, TypeScript',
    link: 'https://incora.software/',
    about:
      '"As a full-service software company, we create a perfect synergy of processes to define, design and develop cutting-edge solutions from initial ideas. Possessing experience in deploying various challenging features and projects, we use the latest technologies and best management practices."',
  },
  {
    name: 'Software engineering',
    image: NULPLogo,
    location: 'Lviv Polytechnic National University',
    startDate: 'SEP 18',
    endDate: null,
    descriptionTitle: 'Key subjects:',
    topics:
      'Database development, Object-oriented Programming, Statistical Methods, Data Structure and Algorithms',
    link: 'https://lpnu.ua/en',
    about:
      'Lviv Polytechnic National University is the oldest technical higher educational institution in Ukraine and East Europe. It was founded in 1816. University consists of 17 institutes, more than 100 departments; autonomous, additional and general subdivisions.',
  },
];

export const Skills = {
  barChart: [
    {
      name: 'JavaScript/TypeScript',
      percent: 70,
    },
    {
      name: 'HTML, CSS(SASS, SCSS)',
      percent: 70,
    },
    {
      name: 'React & Redux',
      percent: 50,
    },
    {
      name: 'Lightning.js',
      percent: 60,
    },
    {
      name: IS_MOBILE ? 'MSSQL' : 'Database development(MSSQL)',
      percent: 30,
    },
    {
      name: 'C#',
      percent: 20,
    },
    {
      name: 'GitHub, GitLab, BitBucket',
      percent: 60,
    },
  ],
  additional: [
    'Advanced Windows, Linux OS user',
    'OS administration basis',
    'Figma basis',
    'Development patterns',
  ],
};
