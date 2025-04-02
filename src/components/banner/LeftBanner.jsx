import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "App Developer."],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 10,
    typeSpeed: 20,
  });
  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Kavya Shah</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorColor="#ff014f" />
        </h2>
        <p className="leading-6 text-bodyFont text-base tracking-wide">
          Enthusiastic full-stack developer with experience in React Native and
          web development. Built iNotebook, a cloud-based note-taking app, and a
          movie rating app showcasing trending films. Currently contributing to
          Study Mate, a web and mobile app for student collaboration.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me here
          </h2>
          <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kavya-shah-445160296/"
                target="_blank"
                rel="noopener noreferrer"
              >
            <span className="bannerIcon">
                <FaLinkedin />
            </span>
              </a>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <a
                href="https://github.com/kavyashah16"
                target="_blank"
                rel="noopener noreferrer"
              >
            <span className="bannerIcon">
              <FaGithub />
            </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            My expertise in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <RiNextjsLine />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
