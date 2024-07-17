"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-[#111] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          title="Fikri logo"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Logo.svg"
            alt="Fikri Aminuddin Logo"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto"
          />
        </a>

        <div className="flex flex-row gap-5 text-white">
          <a href="#about" className="hover:bg-[#2E2E2E] rounded-xl py-2 px-5">
            About
          </a>
          <a
            href="#experience"
            className="hover:bg-[#2E2E2E] rounded-xl py-2 px-5"
          >
            Experience
          </a>
          <a href="#projects" className="hover:bg-[#2E2E2E] rounded-xl py-2 px-5">
            Projects
          </a>
          {/* <div
            onClick={() => window.open("mailto:mdfikriaminuddin@gmail.com")}
            className="bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl py-2 px-5"
          >
            Contact
          </div> */}
          <a href="#contact" className="hover:bg-[#2E2E2E] rounded-xl py-2 px-5">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
