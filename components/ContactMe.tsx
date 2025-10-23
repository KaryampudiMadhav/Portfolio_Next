"use client";

import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:karyampudimadhav@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-6 md:space-y-8 w-full max-w-2xl">
        <h4 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-darkGreen/50 underline">Lets talk.</span>
        </h4>

        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-darkGreen h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">+91 7416718982</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-darkGreen h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              karyampudimadhav@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-darkGreen h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              Andhra Pradesh, India
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-full mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-full"
            type="text"
            required
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput w-full h-32 resize-none"
            required
          />
          <button 
            type="submit"
            className="bg-lightGreen py-3 md:py-5 px-10 rounded-lg text-white font-bold text-lg hover:bg-darkGreen transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
