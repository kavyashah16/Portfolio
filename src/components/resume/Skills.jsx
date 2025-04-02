import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="w-full flex gap-10">
        <div className="w-1/2">
          <div className="py-12 font-titleFont ">
            <p className="text-sm text-designColor tracking-[4px]">
              2023-Present
            </p>
            <h2 className="text-4xl font-bold">Design Skills</h2>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">Photoshot</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">Figma</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">90%</span>
                </motion.span>
              </span>
            </div>
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">UI/UX</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">Design</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">Photoshot</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="py-12 font-titleFont ">
            <p className="text-sm text-designColor tracking-[4px]">
              2023-Present
            </p>
            <h2 className="text-4xl font-bold">Development Skill</h2>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">Photoshot</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">Figma</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">90%</span>
                </motion.span>
              </span>
            </div>
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">UI/UX</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">Design</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="w-full overflow-x-hidden">
              <p className="uppercase font-medium text-sm">Photoshot</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
