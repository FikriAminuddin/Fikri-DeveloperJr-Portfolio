import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="min-h-screen py-10">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px] ">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/project1.svg"
                height={150}
                width={150}
                alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Transcript Co-curriculum KIAS System</p>
                <p className="text-gray-500 text-[12px]">
                Designed a module sub-system for the eKias system using PHP.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/project2.svg"
                height={150}
                width={150}
                alt="Second Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Leukemia Cancer Early Detection System using (CNN)</p>
                <p className="text-gray-500 text-[12px]">
                Developed a python system using Convolutional Neural Network (CNN) algorithm.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/project3.svg"
                height={150}
                width={150}
                alt="Third Project"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Hostel Management System
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Hostel Management System using PHP.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://standaloneapps.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/project4.svg"
                height={150}
                width={150}
                alt="Standalone"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Standalone Application</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern web-system using React.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
