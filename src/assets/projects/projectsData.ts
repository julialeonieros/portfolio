import magazineimg from '../../assets/projects/magazine.png';
import moviesImg from '../../assets/projects/movies.png';
import recipesImg from '../../assets/projects/recipes.png';
import todoImg from '../../assets/projects/todo_app.png';
import { Tech } from '../../enums/Enums';

export interface ProjectsInterface {
  title: string;
  href: string;
  src: string;
  heading: string;
  description: string;
  tags: string[];
  gitHubHref: string;
}

export const projectsData: ProjectsInterface[] = [
  {
    title: 'link to recipe site',
    href: 'https://friluftsmat.netlify.app/',
    src: recipesImg,
    heading: 'the final project: recipe bank with post-function.',
    description:
      'The final project, done pair-programming. A recipe site with filtering and post-function. Frontend built with React, Redux, Styled components, Material UI, Cloudinary and HTML/CSS/JSX. Backend built with RESTful API, Express, MongoDB and Mongoose.',
    tags: [
      Tech.React,
      Tech.Redux,
      Tech.JSX,
      Tech.MUI,
      Tech.APIs,
      Tech.MongoDB,
      Tech.Design,
    ],
    gitHubHref: 'https://github.com/julialeonieros/outdoor-recipes',
  },
  {
    title: 'link to todo app',
    href: 'https://zealous-ardinghelli-8278dd.netlify.app/',
    src: todoImg,
    heading: 'todo app built with react.',
    description:
      'Responsive app where you can write your daily tasks. Built with React using HTML, CSS/Styled Components, JSX, Redux/Redux Toolkit and Lottie Animation.',
    tags: [Tech.React, Tech.Redux, Tech.JSX, Tech.CSS, Tech.Design],
    gitHubHref: 'https://github.com/julialeonieros/project-todos',
  },
  {
    title: 'link to popular movies site',
    href: 'https://top-moviess.netlify.app/',
    src: moviesImg,
    heading: 'movie site that fetches from api, built with react.',
    description:
      'A site that lists the most popular movies at the moment. Built with React using JSX and CSS.',
    tags: [Tech.React, Tech.JSX, Tech.CSS, Tech.APIs],
    gitHubHref: 'https://github.com/julialeonieros/project-movies',
  },
  {
    title: 'link to magazine site',
    href: 'https://hopeful-swanson-ec4034.netlify.app',
    src: magazineimg,
    heading: 'magazine site built with css/flexbox.',
    description:
      'My first web project: a responsive web site for a fictive magazine, using HTML and CSS.',
    tags: [Tech.HTML, Tech.CSS, Tech.Design],
    gitHubHref: 'https://github.com/julialeonieros/project-news-site',
  },
];
