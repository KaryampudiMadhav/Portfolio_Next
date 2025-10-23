"use client";

import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center max-w-[2000px] xl:px-10 min-h-screen mx-auto items-center justify-center"
    >
      <div className="w-full flex flex-col items-center space-y-3 mb-10 md:mb-16">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl text-center">
          Skills
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm md:text-base text-center px-4">
          Hover over a skill for current proficiency
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-4 md:gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
