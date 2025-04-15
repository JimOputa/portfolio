import Project from "./components/Project";
import { projects } from "./lib/data";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center bg-gradient-to-r from-[#0F0F0F] to-[#060021] text-white min-h-screen flex justify-center">
      <div className="max-w-[1920px]">
        <div className="py-16 lg:px-12 sm:px-8 px-4">
          <h2 className="sm:text-[36px] text-[32px] font-semibold">
            Jim Oputa
          </h2>
          <p className="sm:text-[18px] text-[16px] text-[#7456FF]">
            Front End Developer
          </p>
          <div className="flex justify-center gap-2 mt-2 sm:text-[20px] text-[18px]">
            <a href="https://www.linkedin.com/in/jim-oputa" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/JimOputa" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div className="py-10">
            <h4 className="sm:text-[28px] text-[24px] font-medium lg:mb-5 mb-8">
              About Me
            </h4>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px] lg:items-center">
              <div className="p-[20px] hover:outline-[#7456FF] hover:outline-2 rounded-[10px]">
                <img
                  src="./images/DP4.webp"
                  alt="Profile Picture"
                  className="rounded-[10px]"
                />
              </div>
              <div className="p-[20px] flex flex-col gap-y-[20px] text-start lg:col-span-2">
                <div>
                  <h6 className="font-medium sm:text-[18px]/[28px] text-[16px]/[24px] sm:mb-0 mb-[2px]">
                    Professional Summary
                  </h6>
                  <p className="sm:text-[14px]/[21px] text-[12px]/[18px] text-[#999999]">
                    Highly skilled and enthusiastic Front-End Developer with
                    expertise in creating visually appealing, responsive, and
                    user-friendly websites. Proficient in HTML, CSS, JavaScript,
                    React, and other modern web technologies. Adept at
                    collaborating with cross-functional teams to deliver
                    high-quality products, while ensuring the best user
                    experience and performance. Experienced in leading front-end
                    teams, integrating APIs, and building applications from
                    scratch. Passionate about continuous learning and applying
                    new technologies to solve complex problems.
                  </p>
                </div>
                <div>
                  <h6 className="font-medium sm:text-[18px]/[28px] text-[16px]/[24px] sm:mb-0 mb-[2px]">
                    Skills
                  </h6>
                  <p className="sm:text-[14px]/[21px] text-[12px]/[18px] text-[#999999]">
                    HTML, CSS, JavaScript, React, Sass, Tailwind, Bootstrap,
                    TypeScript, NextJs, Git/GitHub.{" "}
                  </p>
                </div>
                <div>
                  <h6 className="font-medium sm:text-[18px]/[28px] text-[16px]/[24px] sm:mb-0 mb-[2px]">
                    Education
                  </h6>
                  <p className="sm:text-[14px]/[21px] text-[12px]/[18px] text-[#999999]">
                    BSc. Computer Engineering, University of Benin, 2021.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <h4 className="sm:text-[28px] text-[24px] font-medium lg:mb-5 mb-8">
              Recent Projects
            </h4>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]">
              {projects.map((item, index) => {
                return <Project projects={item} key={index} />;
              })}
            </div>
          </div>
          <div className="py-10">
            <h4 className="sm:text-[28px] text-[24px] font-medium lg:mb-5 mb-8">
              Contact Me
            </h4>
            <p className="sm:text-[14px]/[21px] text-[12px]/[18px] text-[rgb(153,153,153)] lg:mb-5 mb-8">
              Let's work on a project together! Feel free to get in touch.
            </p>
            <div className="flex items-center justify-center">
              <a href="mailto:jimsartusa@gmail.com" target="_blank">
                <button className="flex items-center justify-center gap-x-[10px] bg-white text-[#0F0F0F] px-[20px] py-[10px] rounded-[10px] cursor-pointer">
                  <HiOutlineMail />
                  <span>Send Email</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="pb-8 pt-14 px-5 sm:text-[16px]/[24px] text-[14px]/[21px]">
          © Copright {currentYear} -{" "}
          <span className="font-medium">Jim Oputa</span>. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
