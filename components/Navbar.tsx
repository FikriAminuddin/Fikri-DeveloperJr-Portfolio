"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#111] fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <Image
                  src="/Logo.svg"
                  alt="Fikri Aminuddin Logo"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="text-white hover:bg-[#2E2E2E] px-3 py-2 rounded-xl text-sm font-medium"
                  onClick={closeMenu} // Close menu when clicked
                >
                  About
                </a>

                <a
                  href="#experience"
                  className="text-white hover:bg-[#2E2E2E] px-3 py-2 rounded-xl text-sm font-medium"
                  onClick={closeMenu} // Close menu when clicked
                >
                  Experience
                </a>

                <a
                  href="#projects"
                  className="text-white hover:bg-[#2E2E2E] px-3 py-2 rounded-xl text-sm font-medium"
                  onClick={closeMenu} // Close menu when clicked
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="text-white hover:bg-[#2E2E2E] px-3 py-2 rounded-xl text-sm font-medium"
                  onClick={closeMenu} // Close menu when clicked
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-[#2E2E2E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111] focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#111] absolute top-16 w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2E2E2E]"
              onClick={closeMenu} // Close menu when clicked
            >
              About
            </a>

            <a
              href="#experience"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2E2E2E]"
              onClick={closeMenu} // Close menu when clicked
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2E2E2E]"
              onClick={closeMenu} // Close menu when clicked
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2E2E2E]"
              onClick={closeMenu} // Close menu when clicked
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
