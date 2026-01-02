import { SparkleIcon } from "lucide-react";
import { motion } from "motion/react";
import { stagger, fadeUp } from "@/lib/animations";

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
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-25"
      >
        <SparkleIcon size={15} />
        <span>Projects</span>
      </motion.p>
    </motion.section>
  );
};
