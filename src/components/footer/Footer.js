import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-2 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/coderrohan14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:rnpradha@ucsc.edu">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/rohan-pradhan1406/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a
              href="https://drive.google.com/file/d/10SovbczXOm7WiX_n_32TJelxshnC6Hi7/view?usp=sharing"
              target="_blank"
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Resume
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/coderrohan14/" target="_blank">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Leetcode
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://scholar.google.com/citations?user=4F6GeTUAAAAJ&hl=en"
              target="_blank"
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Google Scholar
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a href="https://github.com/coderrohan14" target="_blank">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Github
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rohan-pradhan1406/"
              target="_blank"
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                LinkedIn
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
