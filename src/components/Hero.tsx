import { motion } from "motion/react";
import { SparkleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import cvUrl from "../assets/CV.pdf";

export const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section>
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32"
      >
        <SparkleIcon size={15} />
        <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16"
      >
        👋 Hi , I'm <span className="text-primary">David Adeniyi</span>{" "}
        Cloud-Native AI&ML Developer
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className="mt-6 text-lg md:text-xl text-neutral-400 gap-2 flex max-w-3xl"
      >
        <Button asChild>
          <a href="#Projects">My Projects</a>
        </Button>

        <Button variant="outline">
          <a href={cvUrl} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};
