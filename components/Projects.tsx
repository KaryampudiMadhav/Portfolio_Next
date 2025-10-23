"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className=" h-28 xl:h-80 md:h-72 relative w-full"
            >
              {project?.image ? (
                <Image
                  className="object-contain"
                  src={urlFor(project.image).url()}
                  alt={project?.title || "Project image"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-lg">
                  <span className="text-6xl">🚀</span>
                </div>
              )}
            </motion.div>

            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-darkGreen/50">
                  Project {i + 1}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center ">
                {project?.technologies.map((technology) => (
                  technology?.image ? (
                    <Image
                      key={technology._id}
                      className="h-10 w-10 rounded-full object-cover"
                      src={urlFor(technology.image).url()}
                      alt={technology?.title || "Technology"}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div key={technology._id} className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
                      <span className="text-xs">💻</span>
                    </div>
                  )
                ))}
              </div>

              <p className="text-sm md:text-md lg:text-lg text-justify ">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] md:top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
