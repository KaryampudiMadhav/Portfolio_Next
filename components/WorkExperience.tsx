"use client";

import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative overflow-hidden flex-col text-left max-w-full justify-start mx-auto items-center py-20 px-4 md:px-10"
    >
      <h3 className="uppercase tracking-[8px] sm:tracking-[12px] md:tracking-[20px] text-gray-500 dark:text-gray-400 text-lg sm:text-xl md:text-2xl mb-16 md:mb-20 text-center">
        Experience
      </h3>

      {/* Experience cards - Scrollable on mobile, side by side on desktop */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible overflow-y-visible justify-center items-stretch snap-x snap-mandatory md:snap-none scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80 pb-10">
        {experiences
          ?.slice() // make a shallow copy so we don't mutate the original array
          .sort(
            (a, b) =>
              new Date(b.dateStarted).getTime() -
              new Date(a.dateStarted).getTime()
          )
          .map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
}
