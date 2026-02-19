import { Linkedin, Github, Instagram } from "lucide-react";

// ===================================
// SITE CONFIGURATION
// ===================================
// This file contains all the data for the website.
// You can modify the content here to update the website without touching the code.

export const siteConfig = {
  title: "Mahesh Portfolio Template 3", // The title that appears in the browser tab
  description:
    "A professional portfolio template for developers and designers.", // Meta description for SEO
};

// ===================================
// NAVIGATION LINKS
// ===================================
// These are the links that appear in the navbar.
// src: The id of the section to scroll to (must match the id in the component).
// text: The text to display in the navbar.
export const Navlinks = [
  {
    src: "#home",
    text: "Home",
  },
  {
    src: "#experience",
    text: "Experience",
  },
  {
    src: "#projects",
    text: "Projects",
  },
  {
    src: "#contact",
    text: "Contact",
  },
];

// ===================================
// HERO SECTION
// ===================================
// This is the first section users see.
export const hero = {
  name: "Adam Johns", // Your name
  role: "Designer", // Your main role
  quote: "Who judges a book by its cover...", // A quote or tagline
  currentlyWorking: "facebook", // Where you are currently working
  // The 'about' text in the About Me section
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio doloremque eos dolorum, asperiores architecto quibusdam neque incidunt pariatur veniam ipsam sequi vitae provident, earum odit nobis quisquam unde nesciunt facere inventore qui enim minus! A nisi, voluptatem optio tempora vitae delectus odio, quasi distinctio harum officia et nam itaque magnam. Vero aliquam tenetur at sequi dolore nulla sint placeat soluta, obcaecati quibusdam ad nemo quae asperiores omnis voluptas temporibus animi provident excepturi, ratione fugit molestiae, laboriosam deleniti. Porro repellendus quasi quidem perspiciatis corporis eum dolorem! Sunt ipsum voluptate quis enim voluptatum nostrum corporis consequatur. Aspernatur corporis cupiditate dolore accusantium!",
};

// ===================================
// SECTION TITLES
// ===================================
// These are the headings for each section.
export const sectionTitles = {
  about: "About Me",
  experience: "Experience",
  projects: "Projects",
  skills: "Skills",
  contact: "Contact Me",
};

// ===================================
// HOME CONTENT
// ===================================
// Specific text on the home page.
export const homeContent = {
  workingIn: "I'm Currently working in ",
};

// ===================================
// EXPERIENCE SECTION
// ===================================
// List your work experience here.
// icon: The filename of the icon in the public folder (e.g., "we1.svg").
// To add images: Place your image in the 'public' folder and reference it here.
export const works = [
  {
    icon: "we1.svg",
    title: "Frontend Developer",
    company: "TechVision",
    desc: "Built and maintained responsive user interfaces with React, improving load time, accessibility, and overall user experience across multiple devices.",
  },
  {
    icon: "we2.svg",
    title: "Backend Developer",
    company: "CloudCore",
    desc: "Designed and optimized REST APIs using Node.js and MongoDB, ensuring scalability, security, and smooth integration with third-party services.",
  },
  {
    icon: "we3.svg",
    title: "UI/UX Designer",
    company: "PixelCraft",
    desc: "Created wireframes and interactive prototypes, enhancing user satisfaction by focusing on intuitive design, consistent branding, and usability testing.",
  },
  // Add more experiences by copying the object structure above
];

// ===================================
// SKILLS SECTION
// ===================================
// List your skills here.
// src: The path to the icon image (e.g., "/tech/html.png").
// All images should be placed in the 'public/tech' folder or simply 'public'.
export const skills = [
  {
    src: "/tech/html.png",
    name: "HTML",
  },
  {
    src: "/tech/css.png",
    name: "CSS",
  },
  {
    src: "/tech/javascript.png",
    name: "JavaScript",
  },
  {
    src: "/tech/reactjs.png",
    name: "ReactJS",
  },
  {
    src: "/tech/tailwind.png",
    name: "TailwindCSS",
  },
  {
    src: "/tech/github.png",
    name: "Github",
  },
  {
    src: "/tech/mongodb.png",
    name: "MongoDB",
  },
  // Add more skills...
];

// ===================================
// PROJECTS SECTION
// ===================================
// List your projects here.
// img: Path to the project screenshot in the 'public' folder.
export const projects = [
  {
    title: "Example Project",
    img: "/exProject.png",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur cum quidem, libero illum culpa officiis reiciendis laborum at molestiae asperiores? Hic nisi aliquam quis, totam sint autem, beatae ipsam delectus sit placeat a ipsa enim ullam temporibus cupiditate. Ducimus eum, quisquam maxime incidunt asperiores error! Non fugiat eveniet excepturi?",
    github: "#", // Github repository link
    link: "https://via.placeholder.com/600x400.png?text=Project+1", // Live demo link
  },
  {
    title: "Example Project",
    img: "/exProject.png",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur cum quidem, libero illum culpa officiis reiciendis laborum at molestiae asperiores? Hic nisi aliquam quis, totam sint autem, beatae ipsam delectus sit placeat a ipsa enim ullam temporibus cupiditate. Ducimus eum, quisquam maxime incidunt asperiores error! Non fugiat eveniet excepturi?",
    github: "#",
    link: "https://via.placeholder.com/600x400.png?text=Project+2",
  },
  {
    title: "Example Project",
    img: "/exProject.png",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur cum quidem, libero illum culpa officiis reiciendis laborum at molestiae asperiores? Hic nisi aliquam quis, totam sint autem, beatae ipsam delectus sit placeat a ipsa enim ullam temporibus cupiditate. Ducimus eum, quisquam maxime incidunt asperiores error! Non fugiat eveniet excepturi?",
    github: "#",
    link: "https://via.placeholder.com/600x400.png?text=Project+3",
  },
];

export const projectButtons = {
  code: "Code",
  live: "Live",
};

// ===================================
// CONTACT SECTION
// ===================================
// Your contact information.
export const ContactContent = {
  line: "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. or have a project in mind? Let's connect.",
  email: "example@gmail.com",
  links: [
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
    },
    {
      name: "Github",
      url: "#",
      icon: Github,
    },
    {
      name: "Instagram",
      url: "#",
      icon: Instagram,
    },
  ],
};
