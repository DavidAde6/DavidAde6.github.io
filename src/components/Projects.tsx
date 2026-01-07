import { SparkleIcon } from "lucide-react";
import { useRef } from "react";
import { motion } from "motion/react";
import { stagger, fadeUp, projects } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Projects = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger(0)}
      className="mt-50 scroll-mt-10"
      id="Projects"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-25"
      >
        <SparkleIcon size={15} />
        <span>Projects</span>
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="flex align-items-center justify-center mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold"
      >
        My Projects
      </motion.h2>
      <motion.div variants={fadeUp} className="m-15">
        <Carousel
          className="w-full"
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className=" lg:basis-1/1">
                <div className="p-4 border border-neutral-600 rounded-sm">
                  <div className="flex justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className=" h-100 object-cover rounded-sm"
                    />
                  </div>
                  <div className="mt-5 mb-5 flex flex-wrap justify-center items-center">
                    <h3 className="text-xl font-bold">{project.title} </h3>
                    <div className=" ml-4 flex flex-wrap gap-3 ">
                      {project.stack.map((logo, i) => (
                        <img
                          key={i}
                          src={logo}
                          alt={`${logo}`}
                          className="w-8 h-8 object-contain"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2">{project.description}</p>
                  <div className="flex">
                    <Button className="m-5 ml-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </motion.div>
    </motion.section>
  );
};
