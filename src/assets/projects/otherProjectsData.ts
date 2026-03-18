import { Tag } from '../../enums/Enums';

export interface OtherProjectsInterface {
  title: string;
  href: string;
  heading: string;
  description: string;
  comment?: string;
  tags: string[];
  gitHubHref: string;
}

export const OtherProjectsData: OtherProjectsInterface[] = [
  {
    title: 'link to this portfolio',
    href: 'https://julia-ros-portfolio.netlify.app/',
    heading: 'this portfolio.',
    description: 'The portfolio was originally made during the bootcamp with HTML and CSS. This is an updated version made with React and TypeScript.',
    tags: [Tag.React, Tag.JSX, Tag.MUI, Tag.TS, Tag.Styled_Components],
    gitHubHref: 'https://github.com/julialeonieros/portfolio',
  },
  {
    title: 'link to Happy Thoughts app',
    href: 'https://determined-engelbart-a7f7f6.netlify.app/',
    heading: 'happy thoughts.*',
    description:
      'A more positive version of Twitter/X where you can post and read others happy thoughts. Built with React and using API:s.',
    comment: 'The backend is currently down due to hosting issues.',
    tags: [Tag.React, Tag.JSX, Tag.CSS, Tag.APIs],
    gitHubHref: 'https://github.com/julialeonieros/project-happy-thoughts',
  },
  // {
  //   title: 'link to book tips-site',
  //   href: 'https://focused-sammet-d2a2f0.netlify.app/',
  //   heading: 'form site.',
  //   description:
  //     'Responsive site with a form designed to create book tips. Built with React.',
  //   tags: [Tag.React, Tag.JSX, Tag.CSS, Tag.Design],
  //   gitHubHref: 'https://github.com/julialeonieros/project-survey',
  // },
  // {
  //   title: 'link to weather app',
  //   href: 'https://clever-murdock-6c222e.netlify.app/',
  //   heading: 'weather app.',
  //   description:
  //     'Responsive web site that shows the weather, using HTML, CSS, vanilla JS and API:s.',
  //   tags: [Tag.HTML, Tag.CSS, Tag.JS, Tag.APIs],
  //   gitHubHref: '',
  // },
  {
    title: 'link to popular movies site',
    href: 'https://top-movies-us.netlify.app/',
    heading: 'movie site that fetches from api, built with react.',
    description:
      'A site that lists the most popular movies at the moment. Built with React using JSX and CSS.',
    tags: [Tag.React, Tag.JSX, Tag.CSS, Tag.APIs],
    gitHubHref: 'https://github.com/julialeonieros/project-movies',
  },
];
