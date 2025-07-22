"use client";

import { HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#dc26268b] opacity-[0.9]]"
      >
        <HeartIcon className="text-[#dc2626] mr-[10px] h-5 w-5 heartbeat" />
        <h1 className="Welcome-text text-[13px]">
          Powered by Medical AI & Innovation
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-slate-800 font-medium mt-[10px] text-center mb-[15px]"
      >
        Building healthcare solutions with cutting-edge technology.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-slate-600 mb-10 mt-[10px] text-center"
      >
        Improving patient outcomes through innovation.
      </motion.div>
    </div>
  );
};
