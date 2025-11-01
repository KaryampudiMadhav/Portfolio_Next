"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Certification } from "../typings";
import CertificationCard from "./CertificationCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = { certifications: Certification[] };

export default function Certifications({ certifications }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-start mx-auto items-center px-4 md:px-10 py-20"
    >
      <h3 className="uppercase tracking-[8px] sm:tracking-[12px] md:tracking-[20px] text-gray-500 dark:text-gray-400 text-lg sm:text-xl md:text-2xl mb-16 md:mb-20 text-center">
        Certifications
      </h3>

      {/* Left Arrow */}
      {certifications && certifications.length > 1 && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2 z-30 bg-darkGreen/30 hover:bg-darkGreen/60 text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-50 hover:opacity-100"
          aria-label="Previous certification"
        >
          <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      )}

      {/* Certification cards */}
      <div 
        ref={scrollRef}
        className="w-full max-w-7xl text-left flex gap-6 md:gap-8 overflow-x-scroll overflow-y-visible px-4 md:px-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80 items-center pb-10"
      >
        {certifications
          ?.slice()
          .sort(
            (a, b) =>
              new Date(b.dateIssued).getTime() -
              new Date(a.dateIssued).getTime()
          )
          .map((certification) => (
            <CertificationCard key={certification._id} certification={certification} />
          ))}
      </div>

      {/* Right Arrow */}
      {certifications && certifications.length > 1 && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2 z-30 bg-darkGreen/30 hover:bg-darkGreen/60 text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-50 hover:opacity-100"
          aria-label="Next certification"
        >
          <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      )}
    </motion.div>
  );
}
