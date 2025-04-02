import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Achievement from "./Achievement";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <section
      id="resume"
      className="w-full pt-10 pb-20 flex flex-col border-b-[1px] border-b-black"
    >
      <div className="w-full flex flex-col items-center text-center">
        <Title
          title="One Year of experience"
          des={
            <a
              href="https://drive.google.com/file/d/1zQYqSJFQxxzA_AXT3p28rcp3NLnAOEmu/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          }
        />
      </div>

      <div>
        <ul className="w-full grid grid-cols-2 text-center">
          {[
            { id: "education", label: "Education" },
            { id: "skills", label: "Skills" },
            // { id: "experience", label: "Experience" },
            // { id: "achievement", label: "Achievement" },
          ].map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`resumeli p-3 cursor-pointer border-b-4 ${
                activeSection === item.id
                  ? "text-designColor "
                  : "border-transparent"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {activeSection === "education" && <Education />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "achievement" && <Achievement />}
        {activeSection === "skills" && <Skills />}
      </div>
    </section>
  );
};

export default Resume;
