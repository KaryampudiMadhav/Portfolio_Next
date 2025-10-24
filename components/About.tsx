"use client";

import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <div className="w-full flex flex-col items-center mb-8 md:mb-10">
        <h3 className="uppercase tracking-[20px] text-gray-500 dark:text-gray-400 text-xl md:text-2xl text-center">
          About
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly w-full max-w-7xl">
        {pageInfo?.profilePic ? (
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            src={urlFor(pageInfo.profilePic).url()}
          />
        ) : (
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full bg-gray-700 flex items-center justify-center md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          >
            <span className="text-6xl text-gray-400">📸</span>
          </motion.div>
        )}
        <div className="space-y-5 md:space-y-10 px-0 md:px-10">
          <h4 className="text-xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            Here is a{" "}
            <span className=" underline decoration-darkGreen/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm md:text-lg lg:text-lg text-justify text-gray-700 dark:text-gray-300">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
