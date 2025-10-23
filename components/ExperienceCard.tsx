"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-2 flex-shrink-0 w-[320px] md:w-[550px] xl:w-[650px] min-h-[420px] md:min-h-[480px] xl:min-h-[520px] snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white to-darkGreen/20 p-4 md:p-6 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200">
      {experience?.companyImage ? (
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
          src={urlFor(experience.companyImage).url()}
          alt={experience?.company || "Company"}
        />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-full xl:w-[150px] xl:h-[150px] bg-gray-700 flex items-center justify-center"
        >
          <span className="text-4xl">🏢</span>
        </motion.div>
      )}
      <div className="w-full px-0 md:px-6">
        <div className="md:flex md:justify-between items-start">
          <div className="flex-1">
            <h4 className="text-xl md:text-3xl font-light text-black leading-tight">
              {experience?.jobTitle}
            </h4>
            <p className="font-bold text-lg md:text-2xl mt-2 text-lightGreen">
              {experience?.company}
            </p>
            <div className="flex flex-wrap gap-2 my-3">
              {experience?.technologies?.map((technology) => (
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
          </div>
          {experience?.companyImage ? (
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28 rounded-full object-cover object-center"
              src={urlFor(experience.companyImage).url()}
              alt={experience?.company || "Company"}
            />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28 rounded-full bg-gray-700 flex items-center justify-center"
            >
              <span className="text-2xl">🏢</span>
            </motion.div>
          )}
        </div>
        <p className="uppercase py-3 md:py-4 text-gray-500 text-sm md:text-base font-medium">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>
      <ul className="px-0 md:px-6 list-disc text-black space-y-3 pr-5 text-justify text-sm md:text-base pl-5 flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80 leading-relaxed w-full">
        {experience?.points?.map((point, i) => (
          <li key={i} className="leading-relaxed">{point}</li>
        ))}
      </ul>
    </article>
  );
}
