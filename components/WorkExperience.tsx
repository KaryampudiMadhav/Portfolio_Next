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
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center pt-20 px-5"
    >
      <div className="absolute top-16 md:top-20 w-full flex justify-center z-20 mb-10">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
          Experience
        </h3>
      </div>

      {/* Experience cards - Two columns side by side */}
      <div className="w-screen md:w-full text-left flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 overflow-x-visible overflow-y-visible py-8 px-10 justify-center items-center mt-10">
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
