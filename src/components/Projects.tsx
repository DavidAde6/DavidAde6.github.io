import { SparkleIcon } from "lucide-react";
import { motion } from "motion/react";
import { stagger, fadeUp } from "@/lib/animations";

import python from "../assets/logos/python.jpg";
import pytorch from "../assets/logos/PyTorch.png";
import tensorflow from "../assets/logos/tensorflow.png";
import aws from "../assets/logos/AWS.png";
import docker from "../assets/logos/Docker.png";
import fastapi from "../assets/logos/FASTAPI.png";
import git from "../assets/logos/git.png";
import github from "../assets/logos/github.png";
import kub from "../assets/logos/Kubernetes.png";
import pillow from "../assets/logos/pillow.png";
import gee from "../assets/logos/earth-engine-logo.png";
import esa from "../assets/logos/esa.png";
import numpy from "../assets/logos/numpy-logo.png";
import pandas from "../assets/logos/pandas-logo.png";
import tail from "../assets/logos/tailwindcss.png";
import mot from "../assets/logos/motion.png";
import ts from "../assets/logos/Typescript_logo.png";
import react from "../assets/logos/React.png";
import html from "../assets/logos/html-logo.png";
import css from "../assets/logos/css-logo.png";
import flask from "../assets/logos/Flask.png";
import js from "../assets/logos/JavaScript-Logo.png";

export const Projects = () => {
  const projects = [
    {
      title: "Platter",
      description:
        "An AI-powered Nutrition Platform built to simplify food tracking for diabetics using image-based food analysis.",
      stack: [python, pytorch, fastapi, docker, aws, git, github, kub, pillow],
      link: "https://github.com/DavidAde6/Platter",
    },
    {
      title: "Atmospheric NO₂ level Forecaster ",
      description:
        "A machine learning model to predict atmospheric NO₂ levels using the europeans space agency's satellite data, and google earth engine.",
      stack: [python, tensorflow, gee, esa, numpy, pandas, git, github],
      link: "https://github.com/DavidAde6/Sentinel-5P-NO2-Prediction",
    },
    {
      title: "Developer Portfolio",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience.",
      stack: [react, tail, mot, ts, git, github, html, css],
      link: "https://github.com/DavidAde6/Developer-Portfolio",
    },
    {
      title: "Interactive Pathfinding Visualizer",
      description:
        "A web application built to understand and teach pathfinding algorithms learned in class.",
      stack: [python, js, flask, html, css],
      link: "https://davidxde.pythonanywhere.com/",
    },
    {
      title: "Old Portfolio",
      description: "A previous version of my personal portfolio website.",
      stack: [react, mot, ts, html, css],
      link: "#",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger(0)}
      className="mt-30 scroll-mt-10"
      id="Projects"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-25"
      >
        <SparkleIcon size={15} />
        <span>Projects</span>
      </motion.p>

      <img src={tensorflow} />
    </motion.section>
  );
};
