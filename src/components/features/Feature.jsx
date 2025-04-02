import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaMobileAlt } from "react-icons/fa";
import { PiAppWindowLight } from "react-icons/pi";
// import { FaBars, FaCodeBranch  } from "react-icons/fa6";
// import { FaGlobe } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Feature = () => {
  return (
    <section id="features" className="w-full py-20 flex flex-col  border-b-[1px] border-b-black">
      <Title title="features" des="what i do" />
      <div className="grid grid-cols-3 gap-6">
        <Card 
        title="Front-End Developer"
        icon={<PiAppWindowLight />}
        des='A Front-End Developer focuses on designing and building the user interface (UI) of websites and applications using technologies like HTML, CSS, and JavaScript. They ensure a seamless and interactive user experience with frameworks like React, Vite, Next.js etc.'
        />
        <Card 
        title="App Developer"
        icon={<FaMobileAlt />}
        des='An App Developer specializes in creating mobile or desktop applications. They work with platforms like Android (Java/Kotlin), iOS (Swift), or cross-platform frameworks like React Native to develop responsive and feature-rich apps.'
        />
        <Card 
        title="Back-End Developer"
        icon={<SiMongodb />}
        des='A Back-End Developer manages the server-side logic, databases, and APIs that power applications. Using technologies like Node.js this ensure efficient data processing, security, and communication between the front-end and database.'
        />
        {/* <Card 
        title="SEO Optimization"
        icon={<FaGlobe />}
        des='Understanding these data structures and their operations is crucial for effective programming, as they form the foundation for handling and manipulating data efficiently in Python.'
        />
        <Card 
        title="Professional Coder"
        icon={<FaCodeBranch />}
        des='Understanding these data structures and their operations is crucial for effective programming, as they form the foundation for handling and manipulating data efficiently in Python.'
        />
        <Card 
        title="App Developer"
        icon={<PiAppWindowLight />}
        des='Understanding these data structures and their operations is crucial for effective programming, as they form the foundation for handling and manipulating data efficiently in Python.'
        /> */}
      </div>
    </section>
  );
};

export default Feature;
