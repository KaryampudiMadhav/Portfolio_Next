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
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center pt-20"
    >
      <div className="absolute top-16 md:top-20 w-full flex justify-center z-20 mb-10">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
          Certifications
        </h3>
      </div>

      {/* Left Arrow */}
      {certifications && certifications.length > 1 && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-5 z-30 bg-darkGreen/30 hover:bg-darkGreen/60 text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-50 hover:opacity-100"
          aria-label="Previous certification"
        >
          <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      )}

      {/* Certification cards */}
      <div 
        ref={scrollRef}
        className="w-full text-left flex space-x-5 overflow-x-scroll overflow-y-visible py-8 px-10 md:px-20 snap-x snap-mandatory scrollbar-hide items-center mt-10"
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
          className="absolute right-2 md:right-5 z-30 bg-darkGreen/30 hover:bg-darkGreen/60 text-white p-2 md:p-3 rounded-full transition-all duration-300 opacity-50 hover:opacity-100"
          aria-label="Next certification"
        >
          <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      )}
    </motion.div>
  );
}
