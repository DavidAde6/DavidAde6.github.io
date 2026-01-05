import { motion } from "motion/react";
import { stagger, fadeUp } from "@/lib/animations";
import { SparkleIcon } from "lucide-react";

export const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger(0)}
      className="mt-50 scroll-mt-10"
      id="About"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-25"
      >
        <SparkleIcon size={15} />
        <span>About</span>
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="flex mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold"
      >
        Building with intent, not noise.
      </motion.h2>

      <motion.p className="mt-5 text-lg" variants={fadeUp}>
        I am a passionate software developer with a knack for tackling complex
        problems, an interest I developed in middle school through math and
        computing competitions. That curiosity led me to software development,
        where I found the same satisfaction in building systems that solve
        real-world problems.
      </motion.p>
      <motion.p className="mt-5 text-lg" variants={fadeUp}>
        Outside of programming, I love playing the guitar, hitting the gym,
        music production, exploring new tech trends, and spending quality time
        with friends.
      </motion.p>
    </motion.section>
  );
};
