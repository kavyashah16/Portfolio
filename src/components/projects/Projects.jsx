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
          des=" iNotebook is a secure note-taking web application built with React, Node.js, Express, and MongoDB. It allows users to create, edit, and manage notes with authentication using JWT. With a clean and responsive UI, users can access their notes from any device while ensuring data privacy."
          src={projectOne}
        />
        <ProjectCard
          title="StudySmart"
          des=" StudyMate is a collaborative study app that enables students to share notes, engage in live chat, participate in video conferencing, and conduct group study sessions. Built with React Native, TypeScript, and Firebase, it also includes a to-do list for task management, making it an all-in-one platform for efficient and interactive learning."
          src={projectTwo}
        />
        <ProjectCard
          title="Portfolio"
          des=" My Portfolio is a personal website built using React and Tailwind CSS, showcasing skills, projects, and experience in a visually appealing and responsive design. It includes sections like About Me, Projects, Skills, and Contact, along with smooth animations and easy navigation for visitors."
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
