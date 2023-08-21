import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  htmlcss,
  reactjs,
  redux,
  nextjs,
  bootstrap,
  nodejs,
  expressjs,
  mongodb,
  git,
  infinite,
  oracle,
  yelpcamp,
  actnow,
  restify,
  threejs,
  linkedin,
  github,
  instagram
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend UI Builder",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Science and AI",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML+CSS",
    icon: htmlcss,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "Infinite Sourcing",
    icon: infinite,
    iconBg: "#E6DEDD",
    date: "June 2021 - Sept 2021, August 2023 - Present",
    points: [
      "Built a responsive and user-friendly company website using HTML/CSS, Sass, JavaScript and Bootstrap",
      "Implemented RESTful API endpoints using JavaScript, Node.js and Express.js to support and use EJS templates and components for better webpage efficiency",
      "Collaborated closely with the CEO and in-house designers to ensure all website specifications were satisfied",
      "Rebuilt website from the ground up to incorporate React.js in order to implement advanced frontend functionality and update layout + content"
    ],
  },
  {
    title: "Software Engineer - Co-op",
    company_name: "Oracle",
    icon: oracle,
    iconBg: "#E6DEDD",
    date: "May 2022 - April 2023",
    points: [
      "Worked in a team setting to build B2B marketing automation platforms: Jarvis CRM and Eloqua",
      "Contributed in SCRUMs and bi-weekly Sprint Review discussions with team for sprint planning and problem-solving",
      "Developed features and efficient responsive app pages using HTML/CSS, TypeScript, Preact, and Oracle proprietary technologies resulting in significantly improved webpage performance compared to previous release",
      "Created and updated robust & extensive automated testcases for newly integrated features using Selenium and Chai",
      "Debugged and QA-tested several features to ensure bug-free functionality for sprint reviews",
    ],
  },
];

const projects = [
  {
    name: "YelpCamp",
    description:
      "Web-based platform that allows users to view campgrounds on a clustermap and review them, along with upload camps of their own for other users to see",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: yelpcamp,
    source_code_link: "https://github.com/",
  },
  {
    name: "ActNow",
    description:
      "Mobile application that allows users to browse and attend events created by other users or web-scraped from other event-platforms, as well as create events of their own, in order to boost social interaction in a post-pandemic world",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "purple-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },

      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: actnow,
    source_code_link: "https://github.com/utmgdsc/ActNow",
  },
  {
    name: "Restify",
    description:
      "Online property rental platform for users to browse, rent, and review properties, as well as list their own properties as rentals for other users",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: restify,
    source_code_link: "https://github.com/Goutam112/csc309-restify/tree/master",
  },
];

const social = [
  {
    name: "LinkedIn",
    tag: "goutam-singh-uoft",
    link: "https://www.linkedin.com/in/goutam-singh-uoft/",
    logo: linkedin,
  },
  {
    name: "GitHub",
    tag: "Goutam112",
    link: "https://github.com/Goutam112",
    logo: github,
  },
  {
    name: "Instagram",
    tag: "goutamsingh_",
    link: "https://www.instagram.com/goutamsingh_",
    logo: instagram,
  },
];

export { services, technologies, experiences, projects, social };