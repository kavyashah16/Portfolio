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
        des='Understanding these data structures and their operations is crucial for effective programming, as they form the foundation for'
        />
        <Card 
        title="App Developer"
        icon={<FaMobileAlt />}
        des='Understanding these data structures and their operations is crucial for effective programming, as they form the foundation for'
        />
        <Card 
        title="Back-End Developer"
        icon={<SiMongodb />}
        des='Understanding these data structures and their operations is crucial for effective programming, as they form the foundation for handling and manipulating data efficiently in Python.'
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
