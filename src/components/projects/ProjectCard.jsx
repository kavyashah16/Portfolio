import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


const ProjectCard = ({ title, des, src }) => {
  return (
    <div className="w-full h-auto px-12 py-10 shadow-shadowOne rounded-lg flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="mt-5 w-full flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-designColor font-normal uppercase text-base">{title}</h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"><FaGithub /></span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"><FaGlobe /></span>
          </div>
        </div>
        <div>
            <p className="tracking-wide text-sm mt-3 hover:text-gray-100 duration-300">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
