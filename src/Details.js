import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
import profile from "./assets/profile.jpg";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";

export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "SHREYAS SANDEEP NARKE",
  tagline: "I build things for web",
  img: profile,
  about: ``,
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `PraiseArray`,
    Location: "Pune",
    Type: "Part Time",
    Duration: "",
  },
];
export const eduDetails = [
  {
    Position: "Master in Computer Application",
    Company: "Haribhai V. Desai,Pune University",
    Location: "Pune",
    Type: "Full Time",
    Duration: "Dec 2022 - Present",
  },
  {
    Position: "Bachelor in Computer Application",
    Company: `Haribhai V. Desai,Savitribai Phule Pune University(SPPU)`,
    Location: "Pune",
    Type: "Full Time",
    Duration: "July 2019 - Oct 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
};

export const projectDetails = [
  {
    title: "Spotify music-clone",
    image: projectImage1,
    description: `The Spotify Music App Clone project aims to recreate the popular music streaming platform using HTML and CSS. 
    this project will provide users with a familiar and immersive music streaming experience.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/shreyasnarke/smusic-spotify-clone-",
  },
  {
    title: "Calculator-react",
    image: projectImage2,
    description: `The Calculator App project implemented using React aims to create a fully functional calculator with an intuitive user interface. 
    This app will allow users to perform basic arithmetic operations like addition, subtraction, multiplication, and division`,
    techstack: "HTML/CSS, JavaScript ,React",
    previewLink: "https://google.com",
    githubLink: "https://github.com/shreyasnarke/calculator-react",
  },
  {
    title: "Movie Search",
    image: projectImage3,
    description: `This ReactJS project aims to create a simple and interactive Movie Search application. Users can input a movie title, and the 
    application fetches relevant movie information using the Open Movie Database (OMDb) API..`,
    techstack: "HTML/CSS, JavaScript,reactjs",
    previewLink: "https://google.com",
    githubLink: "https://github.com/shreyasnarke/movies-search",
  },
  {
    title: "Photo Competition",
    image: projectImage4,
    description: `The Photo Competition Javascript,jsp Application is a desktop application that facilitates the organization and management of a 
    photo competition. The application allows participants to submit their photos, which are then stored and categorized by different criteria.`,
    techstack: "HTML/CSS, JavaScript,SCSS,JAVA",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  
];
export const contactDetails = {
  email: "narkeshreyas44@gmail.com",
  phone: "+91 9767710596",
};