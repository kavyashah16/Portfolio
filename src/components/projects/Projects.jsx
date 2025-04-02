import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import projectOne from "../../assets/projectOne.jpg";
import projectTwo from "../../assets/projectThree.jpeg";
import projectThree from "../../assets/projectTwo.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full pt-10 pb-20 flex flex-col border-b-[1px] border-b-black"
    >
      <div className="w-full flex flex-col items-center text-center">
        <Title title="Visit My Portfolio" des="My Projects" />
      </div>
      <div className="grid grid-cols-3 gap-6">
      <ProjectCard
          title="iNoteBook"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectCard
          title="StudySmart"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectCard
          title="Portfolio"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        {/* <ProjectCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
};

export default Projects;
