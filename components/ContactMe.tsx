"use client";

import React, { useState } from "react";
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
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        reset(); // Clear the form
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="flex flex-col space-y-6 md:space-y-10 w-full max-w-2xl mt-10 md:mt-0">
        <h4 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center leading-relaxed text-gray-900 dark:text-white">
          I have got just what you need.{" "}
          <span className="decoration-darkGreen/50 underline">Lets talk.</span>
        </h4>

        <div className="space-y-5 md:space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-darkGreen dark:text-lightGreen h-7 w-7 animate-pulse" />
            <p className="text-base md:text-xl lg:text-xl tracking-wide text-gray-700 dark:text-gray-300">+91 7416718982</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-darkGreen dark:text-lightGreen h-7 w-7 animate-pulse" />
            <p className="text-base md:text-xl lg:text-xl tracking-wide text-gray-700 dark:text-gray-300">
              karyampudimadhav@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-darkGreen dark:text-lightGreen h-7 w-7 animate-pulse" />
            <p className="text-base md:text-xl lg:text-xl tracking-wide text-gray-700 dark:text-gray-300">
              Andhra Pradesh, India
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-full mx-auto"
        >
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg text-center font-medium ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          
          <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
              required
              disabled={isSubmitting}
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
              required
              disabled={isSubmitting}
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-full"
            type="text"
            required
            disabled={isSubmitting}
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput w-full h-32 resize-none"
            required
            disabled={isSubmitting}
          />
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`py-3 md:py-5 px-10 rounded-lg text-white font-bold text-lg transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-lightGreen hover:bg-darkGreen"
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
