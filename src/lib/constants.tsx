export const stagger = (delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      staggerChildren: 0.4,
    },
  },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const projects = [
  {
    title: "Platter",
    description:
      "Platter helps you find meals that satisfy your cravings while fitting your preferences, dietary needs, and health goals.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker", "AWS"],
    link: "https://github.com/DavidAde6/Platter",
  },
  {
    title: "Atmospheric NO₂ level Forecaster ",
    description:
      "A machine learning model to predict atmospheric NO₂ levels using the europeans space agency's satellite data, and google earth engine.",
    technologies: ["Python", "TensorFlow", "Google Earth Engine"],
    link: "https://github.com/DavidAde6/Sentinel-5P-NO2-Prediction",
  },
  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/DavidAde6/Developer-Portfolio",
  },
  {
    title: "Interactive Pathfinding Visualizer",
    description:
      "A web application built to understand and teach pathfinding algorithms learned in class.",
    technologies: ["Python", "JavaScript", "Flask"],
    link: "https://github.com/DavidAde6/Interactive-Pathfinding-Algorithms",
  }
];

export const education = [
  {
    year: "2024 - 2028",
    title: "BSc. Computer Science, AI & ML",
    institute: "Carleton University",
    location: "Ottawa, ON",
  },
  {
    year: "2021 - 2024",
    title: "High School",
    institute: "Fort Richmond Collegiate",
    location: "Winnipeg, MB",
  },
  {
    year: "2023",
    title: "JavaScript Algorithms and Data Structures Certification",
    institute: "freeCodeCamp",
    location: "Online",
  },
  {
    year: "2021",
    title: "Microsoft Office Specialist Certification",
    institute: "Certiport",
    location: "Online",
  },
];
export const experience = [
  {
    year: "2024",
    title: "AI Platform Engineering Intern",
    institute: "Nokia",
    desc: "Built an end-to-end agentplatform, spanning agent life-cycle, memory, RAG, guardrails, and evaluation across GCP, AWS, Azure, and on-prem.",
  },
  {
    year: "2024",
    title: "Software Engineer - Business Solutions",
    institute: "African Foodways Market",
    desc: "Designed and maintained a responsive e-commerce website, managing both front-end and back-end as well as inventory management",
  },
  {
    year: "2023",
    title: "Math Tutor",
    institute: "United for Literacy",
    desc: "Provided one-on-one and group tutoring sessions to help students improve their math skills and build confidence in problem-solving.",
  },
];
