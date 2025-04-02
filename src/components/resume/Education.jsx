import React from 'react'
import ResumeCard from "./ResumeCard";
import {motion} from "framer-motion"

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}>
      <div className="w-full flex gap-10">
        <div>
          <div className="py-12 font-titleFont ">
            <p className="text-sm text-designColor tracking-[4px]">
              2010-Present
            </p>
            <h2 className="text-4xl font-bold">Education History</h2>
          </div>
          <div className="w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="St. John's High School"
              subTitle="2010-2021"
              result="Mumbai"
              des="I completed my schooling from St. John's High School, where I developed a strong academic foundation and actively participated in various curricular and extracurricular activities. "
            />
            <ResumeCard
              title="Prakash College of Engineering"
              subTitle="2021-2023"
              result="Mumbai"
              des="I completed my HSC from Prakash College of Engineering, where I strengthened my academic foundation and developed a keen interest in technology and problem-solving. "
            />
            <ResumeCard
              title="Dwarkadas J Sanghvi College of Engineering"
              subTitle="2023-Present"
              result="Mumbai"
              des="Pursing my BTech degree from Dwarkadas J Sanghvi College of Engineering, currently in second year."
            />
          </div>
        </div>
        {/* <div>
          <div className="py-12 font-titleFont ">
            <p className="text-sm text-designColor tracking-[4px]">
              2023-Present
            </p>
            <h2 className="text-4xl font-bold">Academic History</h2>
          </div>
          <div className="w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
              title="St. John's High School"
              subTitle="2010-2021"
              result="Mumbai"
              des="I completed my schooling from St. John's High School, where I developed a strong academic foundation and actively participated in various curricular and extracurricular activities. "
            />
            <ResumeCard
              title="Prakash College of Engineering"
              subTitle="2021-2023"
              result="Mumbai"
              des="I completed my HSC from Prakash College of Engineering, where I strengthened my academic foundation and developed a keen interest in technology and problem-solving. "
            />
            <ResumeCard
              title="Dwarkadas J Sanghvi College of Engineering"
              subTitle="2023-Present"
              result="Mumbai"
              des="Pursing my BTech degree from Dwarkadas J Sanghvi College of Engineering, currently in second year."
            />
          </div>
        </div> */}
      </div>
    </motion.div>
  )
}

export default Education
