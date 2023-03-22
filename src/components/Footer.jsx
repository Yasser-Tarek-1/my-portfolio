import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full py-4 flex justify-center flex-col items-center gap-4 border-t">
      <div className="flex mt-1 gap-4">
        <a
          href="https://www.linkedin.com/in/yasser-tarek-32b257242/"
          target="_blank"
          rel="noreferrer"
        >
          <div className=" bg-main p-3 cursor-pointer rounded-full sm:hover:scale-105 ease-in duration-200">
            <FaLinkedinIn />
          </div>
        </a>
        <a
          href="https://github.com/Yasser-Tarek-1"
          target="_blank"
          rel="noreferrer"
        >
          <div className=" bg-main p-3 cursor-pointer rounded-full sm:hover:scale-105 ease-in duration-200">
            <FaGithub />
          </div>
        </a>
        <a
          href="mailto:siryasser2020@gmail.com?subject=subject text"
          target="_blank"
          rel="noreferrer"
        >
          <div className=" bg-main p-3 cursor-pointer rounded-full sm:hover:scale-105 ease-in duration-200">
            <AiOutlineMail />
          </div>
        </a>
      </div>
      <div className="text-secondary font-semibold text-sm md:text-base">
        Copyright © 2023, All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
