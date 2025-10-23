"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Certification } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  certification: Certification;
};

export default function CertificationCard({ certification }: Props) {
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
    <article className="flex drop-shadow-xl flex-col rounded-3xl items-center flex-shrink-0 w-[320px] md:w-[550px] xl:w-[650px] h-auto snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white to-darkGreen/20 p-4 md:p-6 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-center relative shadow-lg mb-4"
      >
        {certification?.companyImage ? (
          <Image
            className="rounded-full object-cover"
            src={urlFor(certification.companyImage).url()}
            alt={certification?.company || "Company"}
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
        <h4 className="text-xl md:text-2xl font-normal text-black text-center mb-3">
          {certification?.title}
        </h4>
        
        <p className="font-bold text-lg md:text-xl text-center text-darkGreen mb-4">
          {certification?.company}
        </p>

        {certification?.description && (
          <p className="text-base md:text-lg text-lightGreen leading-relaxed mb-4">
            {certification.description}
          </p>
        )}

        <div className="flex flex-wrap gap-3 mb-4">
          {certification?.skills?.map((skill) => (
            skill?.image ? (
              <Image
                key={skill._id}
                className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover shadow-md"
                src={urlFor(skill.image).url()}
                alt={skill?.title || "Skill"}
                width={56}
                height={56}
              />
            ) : (
              <div key={skill._id} className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gray-600 flex items-center justify-center shadow-md">
                <span className="text-sm">💻</span>
              </div>
            )
          ))}
        </div>

        <p className="uppercase text-gray-500 text-sm md:text-base font-medium mb-4">
          {formatDate(certification?.dateIssued)} -{" "}
          {certification?.doesNotExpire
            ? "No Expiration"
            : formatDate(certification?.dateExpired)}
        </p>

        {certification?.certificateUrl && (
          <a
            href={certification.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center text-darkGreen hover:text-lightGreen transition-colors font-semibold text-sm md:text-base"
          >
            View Certificate →
          </a>
        )}
      </div>
    </article>
  );
}
