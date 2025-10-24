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
      className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-start mx-auto items-center z-0 pt-12 md:pt-16"
    >
      {/* Moved heading slightly higher */}
      <h3 className="absolute top-3 md:top-10 uppercase tracking-[20px] text-gray-500 dark:text-gray-400 text-2xl md:text-3xl z-30 left-1/2 transform -translate-x-1/2 font-semibold">
        Projects
      </h3>

      {/* Reduced extra padding to bring content closer */}
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80 pt-20 md:pt-24">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 md:space-y-4 items-center justify-center px-8 md:px-20 pb-10 h-screen"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-48 sm:h-56 md:h-80 lg:h-96 xl:h-[420px] relative w-full max-w-5xl"
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
                <div className="w-full h-full bg-gray-700 dark:bg-gray-800 flex items-center justify-center rounded-lg">
                  <span className="text-6xl">🚀</span>
                </div>
              )}
            </motion.div>

            <div className="space-y-2 md:space-y-4 px-0 md:px-10 max-w-5xl">
              <h4 className="text-lg md:text-2xl lg:text-3xl font-semibold text-center text-gray-900 dark:text-white">
                <span className="underline decoration-darkGreen/50">
                  Project {i + 1}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) =>
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
                    <div
                      key={technology._id}
                      className="h-10 w-10 rounded-full bg-gray-600 dark:bg-gray-700 flex items-center justify-center"
                    >
                      <span className="text-xs">💻</span>
                    </div>
                  )
                )}
              </div>

              <p className="text-sm md:text-base lg:text-lg text-justify text-gray-700 dark:text-gray-300">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[25%] md:top-[35%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
