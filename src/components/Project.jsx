import { FaGithub } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";
import StackItem from "./StackItem";

export default function Project({ projects }) {
  return (
    <div className="text-left bg-[#1B172A] px-[20px] pt-[30px] pb-[40px] rounded-[10px] hover:outline-[#7456FF] hover:outline-2">
      <img src={projects.image} alt="Project Image" className="mb-[20px] rounded-[2px]" />
      <div className="flex gap-x-[8px] mb-[10px]">
        {projects.stack.map((item, index) => {
          return <StackItem item={item} key={index}/>;
        })}
      </div>
      <span className="font-medium sm:text-[18px]/[28px] text-[16px]/[24px] sm:mb-0 mb-[2px] inline-block">
        {projects.title}
      </span>

      <p className="min-h-[60px] sm:text-[14px]/[21px] text-[12px]/[18px] text-[#999999]">
        {projects.description}
      </p>
      <div className="flex gap-x-[10px]">
        <a href={projects.github} target="_blank">
          <button className="flex items-center gap-x-[2px] bg-white text-[#0F0F0F] p-3 sm:text-[12px] text-[10px] rounded-[20px] px-[20px] cursor-pointer outline-0">
            <FaGithub />
            GitHub
          </button>
        </a>
        <a href={projects.liveDemo} target="_blank">
          <button className="flex items-center gap-x-[2px] bg-[#7456FF] text-white p-3 sm:text-[12px] text-[10px] rounded-[20px] px-[20px] cursor-pointer outline-0">
            <TbExternalLink />
            Live Demo
          </button>
        </a>
      </div>
    </div>
  );
}
