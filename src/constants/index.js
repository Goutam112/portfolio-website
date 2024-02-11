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
  jazari,
  findify,
  actnow,
  restify,
  wanderlodge,
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
    title: "Software Engineer Intern",
    company_name: "Oracle",
    icon: oracle,
    iconBg: "#E6DEDD",
    date: "May 2022 - April 2023",
    points: [
      "Collaborated in agile teams to build B2B platforms such as Jarvis CRM and Eloqua Marketing Automation",
      "Developed 12+ major features and efficient responsive app pages using HTML/CSS, TypeScript, React, and Oracle's OJET & Spectra libraries and VBCS, resulting in 43% better webpage performance versus previous release",
      "Developed & integrated Virtual Finite State Machine for application-wide user activity state management",
      "Ensured quality of 30+ features via bug fixes, QA-testing, and development of robust automated testcases using Selenium, Mocha & Chai catching over 91% of bugs, leading to 33% fewer bugs in bi-monthly Sprint reviews"
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Infinite Sourcing",
    icon: infinite,
    iconBg: "#E6DEDD",
    date: "June 2021 - Sept 2021t",
    points: [
      "Built a responsive and user-friendly company website using HTML/CSS, Sass, JavaScript and Bootstrap, leading to a 28% boost in firm's client outreach which resulted in an est. USD 900,000 boost to annual turnover",
      "Implemented backend REST API endpoints using JavaScript, Node.js and Express.js to seamlessly integrate EJS templates and components, leading to 35% faster webpage loading performance & development process",
      "Collaborated with cross-functional teams to conduct user testing and gather feedback for continuous website enhancements, resulting in 33% reduction in bounce rate and 45% increase in user engagement"
    ],
  },
  {
    title: "Junior Software Development Intern",
    company_name: "Jazari AI Research Institute",
    icon: jazari,
    iconBg: "#35AFBF",
    date: "May 2018 - August 2021",
    points: [
      "Did Object-Oriented-Programming in Python to develop classes and methods for the foundation of a security camera facial recognition algorithm",
      "Used Python libraries such as Matplotlib, Pandas, and Seaborn for graphing and visualizing statistical data to plot the accuracy of the algorithm.",
    ],
  },
];

const projects = [
  {
    name: "Findify",
    descrition:
      "Web application that revolutionizes the lost & found process exclusively for UofT students & staff, offering a streamlined and secure solution to reclaim lost items.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      }
    ],
    image: findify,
    source_code_link: "https://github.com/utmgdsc/Findify"
  },
  {
    name: "ActNow",
    description:
      "Mobile application that allows users to browse and attend events created by other users or web-scraped from other event-platforms, as well as create events of their own, in order to boost social interaction in a post-COVID world",
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
      "Online property rental platform for the UofT student community designed to simplify the process of listing, booking, and reviewing rental properties, addressing the unique accommodation needs of students",
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
    source_code_link: "https://github.com/Goutam112/csc309-restify/",
  },
  {
    name: "WanderLodge",
    description:
      "Web-based platform that allows users to view campgrounds on a clustermap and review them, along with upload camps of their own for other users to see",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: wanderlodge,
    source_code_link: "https://github.com/Goutam112/WanderLodge",
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