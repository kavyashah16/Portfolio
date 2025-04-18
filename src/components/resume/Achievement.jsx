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
              2023-Present
            </p>
            <h2 className="text-4xl font-bold">Education History</h2>
          </div>
          <div className="w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Sr. Software Engineer"
              subTitle="Google Out Tech - (2017 - Present)"
              result="USA"
              des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
            />
            <ResumeCard
              title="Web Developer & Trainer"
              subTitle="Apple Developer Team - (2012 - 2016)"
              result="MALAYSIA"
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
            <ResumeCard
              title="Front-end Developer"
              subTitle="Nike - (2020 - 2011)"
              result="Oman"
              des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
            />
          </div>
        </div>
        <div>
          <div className="py-12 font-titleFont ">
            <p className="text-sm text-designColor tracking-[4px]">
              2023-Present
            </p>
            <h2 className="text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Sr. Software Engineer"
              subTitle="Google Out Tech - (2017 - Present)"
              result="USA"
              des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
            />
            <ResumeCard
              title="Web Developer & Trainer"
              subTitle="Apple Developer Team - (2012 - 2016)"
              result="MALAYSIA"
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
            <ResumeCard
              title="Front-end Developer"
              subTitle="Nike - (2020 - 2011)"
              result="Oman"
              des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Education
