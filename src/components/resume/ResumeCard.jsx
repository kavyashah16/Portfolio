import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bg-black bg-opacity-40 mt-[10%] relative">
        <span className="rounded-full bg-black absolute w-5 h-5 -left-3 -top-2 bg-opacity-60 flex justify-center items-center">
          <span className="w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor inline-flex "></span>
        </span>
      </div>
      <div className=" w-full bg-black bg-opacity-20 hover:bg-opacity-30 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 font-semibold group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>{result}</div>
        </div>
        <p className="text-base font-medium text-gray-400 group-hover:text-gray-300">{des}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
