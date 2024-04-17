
import homeIcon from './assets/img/home.png';
import aboutIcon from './assets/img/about.png';
import projectsIcon from './assets/img/projects.png';
import contacIcon from './assets/img/contac.png';
import githubIcon from './assets/img/github.png';
import linkedinIcon from './assets/img/linkedin.png';
import cvIcon from './assets/img/cv.png';

export const BtnList = [
    { label: "Home", link: "/", icon: homeIcon, newTab: false },
    { label: "About", link: "/about", icon: aboutIcon, newTab: false },
    { label: "Projects", link: "/projects", icon: projectsIcon, newTab: false },
    { label: "Contact", link: "/contact", icon: contacIcon, newTab: false },
    {
      label: "Github",
      link: "https://github.com/johan-flowcode",
      icon: githubIcon,
      newTab: true,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/johanmescudero/",
      icon: linkedinIcon,
      newTab: true,
    },
    
    {
      label: "CV",
      link: "https://drive.google.com/drive/u/0/folders/1fLRvKZFrbfKWCupXoDhAa055ce2mVodz",
      icon: cvIcon,
      newTab: true,
    },
  ];

  