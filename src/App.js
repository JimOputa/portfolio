import "./styles/output.css";
import pCover1 from "./images/Cover1.webp";
import pCover2 from "./images/Cover2.webp";
import pCover3 from "./images/Cover3.webp";
import Project from "./Project";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function App() {
  const projects = [
    {
      image: pCover1,
      title: "LeadGen",
      description:
        "LeadGen is a conversion ratio and speed optimized multi-purpose marketing landing page template.",
      link: "https://jimchuma.github.io/leadgen-online-shopping/",
    },
    {
      image: pCover2,
      title: "Nautix",
      description:
        "Nautix is an ecommerce store product marketing multi-page template",
      link: "https://ecommerce-store-gules-rho.vercel.app/",
    },
    {
      image: pCover3,
      title: "Arist",
      description:
        "Arist is a conversion ratio and speed optimized multi-purpose marketing landing page template",
      link: "https://jimchuma.github.io/arist/",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center bg-gradient-to-r from-[#0F0F0F] to-[#060021] text-white min-h-screen">
      <div className="py-16 sm:px-12 px-4">
        <h2 className="sm:text-[36px] text-[32px] font-semibold">Jim Oputa</h2>
        <p className="sm:text-[18px] text-[16px] text-[#7456FF]">
          Front End Developer
        </p>
        <div className="flex justify-center gap-2 mt-2 sm:text-[20px] text-[18px]">
          <a href="https://www.linkedin.com/in/jim-oputa-172b11180">
            <FaLinkedin />
          </a>
          <a href="https://github.com/JimChuma">
            <FaGithub />
          </a>
        </div>
        <div className="py-10">
          <h4 className="sm:text-[28px] text-[24px] font-medium lg:mb-5 mb-8">
            Projects
          </h4>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
            {projects.map((item, index) => {
              return (
                <Project
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="pb-8 px-5 sm:text-[16px] text-[14px]">© Copright {currentYear} - <span className="font-medium">Jim Oputa</span>. All rights reserved.</div>
    </div>
  );
}

export default App;
