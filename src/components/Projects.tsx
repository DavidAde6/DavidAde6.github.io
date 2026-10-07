import { ExternalLink, SparkleIcon } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, projects, stagger } from "@/lib/constants";

export const Projects = () => {
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
        className="flex w-25 items-center justify-center gap-2 rounded-sm border border-neutral-600 py-1"
      >
        <SparkleIcon size={15} />
        <span>Projects</span>
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-15 flex flex-wrap items-end justify-between gap-4"
      >
        <p className="max-w-md text-sm text-muted-foreground">
          A few things I have built and explored.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-8 grid gap-3 md:grid-cols-2"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative rounded-sm border border-neutral-600 p-5 transition-colors hover:bg-muted/50"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code`}
              className="absolute right-5 top-5 rounded-sm p-1 text-muted-foreground transition-colors hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <ExternalLink size={18} aria-hidden="true" />
            </a>
            <h3 className="pr-10 text-lg font-bold">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </article>
        ))}
      </motion.div>
    </motion.section>
  );
};
