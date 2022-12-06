import React from 'react';
import {
  TitleProjects,
  ProjectsContainer,
  ProjectLink,
  ProjectsItem,
  ProjectsTech,
  ProjectsDescript,
} from './ProjectList.styled';

const Projects = [
  {
    name: 'IceCream',
    href: 'https://victor-rochnyak.github.io/IceCream/',
    technology: 'HTML5, CSS3, JavaScript',
    discription: `This is a team project that we did with my group mates (11 people). I was front-end developer. I made a section Hero-Head, and animation.`,
  },
  {
    name: 'WebStudio',
    href: 'https://oleksandrb93.github.io/goit-markup-hw-08/',
    technology: 'HTML5, CSS3, JavaScript',
    discription: `The landing page was created using only HTML and CSS. The layout is made for three breakpoints: 480px, 768px and 1200px.
All background and content raster images are responsive and support x1 and x2 screens.
BEM methodology, SASS preprocessor were also used.`,
  },
  {
    name: 'Filmotica',
    href: 'https://victor-rochnyak.github.io/Filmoteka/',
    technology: 'HTML5, CSS3, JavaScript',
    discription: `A short-term team project by 6 collaborators.
I was a Team Lead assistant & Front-end developer of the project. 
I implement closing of the modal window by pressing the ESC key and by clicking outside the modal window, do not forget to remove the listeners, Connect / spin Loader (spinner) for asynchronous requests, Slider to the movie library, implement search and display of movies by keyword`,
  },
  {
    name: 'MovieState',
    href: 'https://oleksandrb93.github.io/react-movie/',
    technology: 'React ',
    discription: `Create a Movie Watchlist with React Hooks, Routes.`,
  },
  {
    name: 'PhoneBollk',
    href: 'https://oleksandrb93.github.io/goit-react-hw-06-phonebook/',
    technology: 'React, Redux Tollkit ',
    discription: '',
  },
];

export default function ProjectList() {
  return (
    <ProjectsContainer>
      <TitleProjects>Projects</TitleProjects>
      {Projects.map(({ href, name, technology, discription }) => (
        <ProjectsItem key={href}>
          <ProjectLink href={href}>{name}</ProjectLink>
          <ProjectsDescript>{discription}</ProjectsDescript>
          <ProjectsTech>{technology}</ProjectsTech>
        </ProjectsItem>
      ))}
    </ProjectsContainer>
  );
}
