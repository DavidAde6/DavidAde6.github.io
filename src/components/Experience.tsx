import { motion } from "framer-motion";
import { fadeUp, stagger, education, experience } from "@/lib/constants";
import { SparkleIcon } from "lucide-react";

export const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger(0)}
      className="mt-50 scroll-mt-10"
      id="Experience"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-30"
      >
        <SparkleIcon size={15} />
        <span>Experience</span>
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="flex justify-center mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold"
      >
        Career
      </motion.h2>
      <div className="grid gap-x-10 mt-32 md:grid-cols-2">
        <motion.div variants={fadeUp} className="mb-16 md:mb-0">
          <h2 className="text-3xl font-semibold mb-8">Education</h2>
          <div className="space-y-8 border-l border-neutral-700 pl-6">
            {education.map((item, i) => (
              <div key={i} className="mb-6">
                <div className="relative group">
                  <div className="absolute -left-7.5 top-2 size-3 bg-muted-foreground group-hover:bg-primary rounded-full transition duration-300"></div>

                  <span className="text-neutral-400 lining-nums group-hover:text-primary transition duration-300">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  <p className="text-sm text-neutral-400 mb-1">
                    {item.institute}
                  </p>
                  <p className="text-neutral-400">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-semibold mb-8">Experience</h2>
          <div className="space-y-8 border-l border-neutral-700 pl-6">
            {experience.map((item, i) => (
              <div key={i} className="mb-6">
                <div className="relative group">
                  <div className="absolute -left-7.5 top-2 size-3 bg-muted-foreground group-hover:bg-primary rounded-full transition duration-300"></div>

                  <span className="text-neutral-400 lining-nums group-hover:text-primary transition duration-300">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  <p className="text-sm text-neutral-400 mb-1">
                    {item.institute}
                  </p>
                  <p className="text-neutral-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
