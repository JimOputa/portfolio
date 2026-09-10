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
            Full Stack Developer
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
