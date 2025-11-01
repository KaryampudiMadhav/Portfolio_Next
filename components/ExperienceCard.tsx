"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  // Format date consistently for SSR and client
  const formatDate = (date: Date) => {
    if (!date) return "";
    const d = new Date(date);
    const month = d.toLocaleString('en-US', { month: 'short' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <article className="flex drop-shadow-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 flex-col rounded-3xl items-center flex-shrink-0 w-full max-w-[340px] md:max-w-[550px] xl:max-w-[650px] h-auto snap-center bg-[#FFFFFF] dark:bg-gray-800 bg-gradient-to-tr from-white to-darkGreen/20 dark:from-gray-800 dark:to-darkGreen/30 p-5 md:p-6 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 mx-auto md:mx-0">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover object-center relative shadow-lg mb-4"
      >
        {experience?.companyImage ? (
          <Image
            className="rounded-full object-cover"
            src={urlFor(experience.companyImage).url()}
            alt={experience?.company || "Company"}
            fill
            sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 160px"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-darkGreen to-lightGreen rounded-full flex items-center justify-center">
            <span className="text-5xl md:text-6xl">🏢</span>
          </div>
        )}
      </motion.div>

      <div className="w-full px-2 md:px-4">
        <h4 className="text-lg md:text-2xl font-normal text-black dark:text-white text-center mb-2 md:mb-3 line-clamp-2">
          {experience?.jobTitle}
        </h4>
        
        <p className="font-bold text-base md:text-xl text-center text-darkGreen dark:text-lightGreen mb-3 md:mb-4">
          {experience?.company}
        </p>

        {experience?.points && experience.points.length > 0 && (
          <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3 md:mb-4 line-clamp-4">
            {experience.points[0]}
          </p>
        )}

        <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4 justify-center md:justify-start">
          {experience?.technologies?.map((technology) => (
            technology?.image ? (
              <Image
                key={technology._id}
                className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover shadow-md"
                src={urlFor(technology.image).url()}
                alt={technology?.title || "Technology"}
                width={56}
                height={56}
              />
            ) : (
              <div key={technology._id} className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-gray-600 flex items-center justify-center shadow-md">
                <span className="text-xs md:text-sm">💻</span>
              </div>
            )
          ))}
        </div>

        <p className="uppercase text-gray-500 dark:text-gray-400 text-xs md:text-base font-medium text-center">
          {formatDate(experience?.dateStarted)} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : formatDate(experience?.dateEnded)}
        </p>
      </div>
    </article>
  );
}
