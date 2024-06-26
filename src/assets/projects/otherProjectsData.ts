import { Tag } from '@enums/Enums';

export interface OtherProjectsInterface {
  title: string;
  href: string;
  heading: string;
  description: string;
  tags: string[];
  gitHubHref: string;
}

export const OtherProjectsData: OtherProjectsInterface[] = [
  {
    title: 'link to React Native app',
    href: 'https://snack.expo.io/@julialeonieros/magic-8-ball',
    heading: 'react native app.',
    description:
      'A minimalist version of the magic 8-ball. Built with React Native using JSX, Styled Components and shake sensor.',
    tags: [Tag.React_Native, Tag.Styled_Components, Tag.JSX, Tag.Design],
    gitHubHref:
      'https://github.com/julialeonieros/project-react-native-app/tree/shake-sensor',
  },
  {
    title: 'link to Happy Thoughts app',
    href: 'https://determined-engelbart-a7f7f6.netlify.app/',
    heading: 'happy thoughts.',
    description:
      'A more positive version of Twitter/X where you can post and read others happy thoughts. Built with React and using API:s.',
    tags: [Tag.React, Tag.JSX, Tag.CSS, Tag.APIs],
    gitHubHref: 'https://github.com/julialeonieros/project-happy-thoughts',
  },
  {
    title: 'link to book tips-site',
    href: 'https://focused-sammet-d2a2f0.netlify.app/',
    heading: 'form site.',
    description:
      'Responsive site with a form designed to create book tips. Built with React',
    tags: [Tag.React, Tag.JSX, Tag.CSS, Tag.Design],
    gitHubHref: 'https://github.com/julialeonieros/project-survey',
  },
  {
    title: 'link to weather app',
    href: 'https://clever-murdock-6c222e.netlify.app/',
    heading: 'weather app.',
    description:
      'Responsive web site that shows the weather, using HTML, CSS, vanilla JS and API:s.',
    tags: [Tag.HTML, Tag.CSS, Tag.JS, Tag.APIs],
    gitHubHref: '',
  },
];
