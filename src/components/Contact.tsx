import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/constants";
import { SparkleIcon, Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger(0)}
      className="mt-50 scroll-mt-10"
      id="Contact"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-30"
      >
        <SparkleIcon size={15} />
        <span>Contact</span>
      </motion.p>

      <motion.div
        className="flex items-center justify-evenly mt-10 gap-10"
        variants={fadeUp}
      >
        <a href="mailto:dadeniyi54@gmail.com">
          <Mail
            size={60}
            className="text-primary hover:text-neutral-400 transition duration-300"
          />
        </a>
        <a
          href="https://github.com/DavidAde6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            size={60}
            className="text-primary hover:text-neutral-400 transition duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/adeniyi-david/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            size={60}
            className="text-primary hover:text-neutral-400 transition duration-300"
          />
        </a>
      </motion.div>
    </motion.section>
  );
};
