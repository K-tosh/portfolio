"use client";

import { HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#dc26268b] opacity-[0.9]]"
        >
          <HeartIcon className="text-[#dc2626] mr-[10px] h-5 w-5 heartbeat" />
          <h1 className="Welcome-text text-[13px]">
            Medical Technology & Healthcare Innovation
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Advancing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              healthcare
            </span>{" "}
            through technology.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-200 my-5 max-w-[600px]"
        >
          I&apos;m a Medical Technology Specialist and Healthcare Innovation Leader with expertise in AI-powered diagnostics, telemedicine platforms, and clinical decision support systems. Explore my medical technology projects and healthcare solutions.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] font-medium medical-pulse"
        >
          View My Work
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="medical technology icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
