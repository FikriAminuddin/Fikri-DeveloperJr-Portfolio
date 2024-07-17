import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience" className="min-h-screen py-10">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/possimo.svg"}
              height={30}
              width={30}
              alt={"experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Possimo Technologies Sdn. Bhd. </span>
              <br />System Engineer - Contract
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Dec 2023 - May 2024
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          As a System Engineer with a few months of experience and a fresh graduate in Computer Science, 
          I have built a strong foundation in creating dynamic and responsive web development applications.
          My experience with React.js and Next.js has enabled me to contribute to the development of client systems, 
          ensuring seamless functionality and integration. Additionally, my skills in PHP, Node.js, and PostgreSQL 
          have equipped me with the ability to handle backend development efficiently. I possess a deep understanding 
          of component-based architecture, state management, and am well-versed in the latest web development trends and technologies.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PostgreSQL
          </div>
        </div>
      </div>

<br />
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/kias.svg"}
              height={30}
              width={30}
              alt={"experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Kolej Universiti Antarabangsa Islam Sultan Ismail Petra (KIAS)</span> 
              <br />IT Support System / Programmer - Internship
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            March 2023 - June 2023
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          Previously, I worked as part of the IT support/programmer team for the eKias system, 
          where I was responsible for fixing and maintaining the system. During this time, 
          I also developed a new system for eKias, the Transcript Co-curriculum KIAS, using 
          HTML, CSS, Bootstrap, PHP for the backend, and MySQL for the database.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            HTML
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            CSS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PHP
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            MySQL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
