import { javascript } from "../assets";
import { typescript } from "../assets";
import { html } from "../assets";
import { css } from "../assets";
import { reactjs } from "../assets";
import { angular2 } from "../assets";
import { redux } from "../assets";
import { tailwind } from "../assets";
import { nodejs } from "../assets";
import { mongodb } from "../assets";
import { git } from "../assets";
import { figma } from "../assets";
import { docker } from "../assets";
import { meta } from "../assets";
import { starbucks } from "../assets";
import { libra } from "../assets";
import { carehub } from "../assets";
import { finflx } from "../assets";
import { tesla } from "../assets";
import { shopify } from "../assets";
import { carrent } from "../assets";
import { jobit } from "../assets";
import { tripguide } from "../assets";
import { threejs } from "../assets";
import { web } from "../assets";
import { mobile } from "../assets";
import { backend } from "../assets";
import creator from "../assets/creator.png";
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React Native Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "UI Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    hideOnMobile: true,
  },
  {
    name: "TypeScript",
    icon: typescript,
    hideOnMobile: true,
  },
  {
    name: "React JS",

    icon: reactjs,
    hideOnMobile: false,
  },
  {
    name: "Angular",

    icon: angular2,
    hideOnMobile: false,
  },
  {
    name: "Redux Toolkit",

    icon: redux,
    hideOnMobile: true,
  },
  {
    name: "Tailwind CSS",

    icon: tailwind,
    hideOnMobile: true,
  },
  {
    name: "Node JS",

    icon: nodejs,
    hideOnMobile: false,
  },
  {
    name: "MongoDB",

    icon: mongodb,
    hideOnMobile: false,
  },
  {
    name: "Three JS",

    icon: threejs,
    hideOnMobile: true,
  },
  {
    name: "git",

    icon: git,
    hideOnMobile: false,
  },
  {
    name: "figma",

    icon: figma,
    hideOnMobile: true,
  },
  {
    name: "docker",

    icon: docker,
    hideOnMobile: false,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Libra Soft",
    icon: libra,
    iconBg: "#269FD0",
    date: "July 2019 - February 2021",
    points: [
      `Developed and maintained various modules of the ERP system, ensuring smooth integration and functionality across different departments.`,
      `Implemented responsive design and optimized user experience for the ERP system's front-end using modern web technologies.`,
      `Collaborated with cross-functional teams to gather requirements, design database structures, and implement efficient backend solutions.`,
      `Conducted thorough testing and debugging to identify and resolve any issues, ensuring high-quality and reliable software delivery.`,
      `Actively participated in code reviews and provided constructive feedback to improve code quality and maintainability.`,
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Carehub",
    icon: carehub,
    iconBg: "#003D6E",
    date: "February 2021 - April 2022",
    points: [
      `Created a user-friendly reservation system for home health care services, streamlining the booking process and improving overall customer satisfaction.`,
      `Designed and developed a visually appealing and responsive landing page for the Carehub website, effectively showcasing their services and attracting potential clients.`,
      `Developed a CRM dashboard to centralize customer information, enhance communication, and improve the efficiency of client management.`,
      `Collaborated closely with UX designers and backend developers to ensure seamless integration of front-end components with the backend systems.`,
      `Conducted performance optimizations and implemented SEO best practices to improve the website's visibility and search engine ranking.`,
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Finflx",
    icon: finflx,
    iconBg: "#474aa6",
    date: "April 2022 - Current Position",
    points: [
      `Developed the corporate portal for Finflx, providing an intuitive and interactive interface for clients to access their financial data and analytics.`,
      `Created the admin portal to empower Finflx administrators with powerful tools for managing users, data, and system configurations.`,
      `Developed a mobile app for Finflx's SAAS platform, enabling users to access their financial information on-the-go and enhancing their overall user experience.`,
      `Collaborated closely with UI/UX designers to ensure consistency in the user interface and provide a seamless user journey across different platforms.`,
      `Implemented robust security measures and authentication mechanisms to safeguard sensitive financial data and ensure data privacy.`,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
