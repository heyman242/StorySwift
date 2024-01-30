import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { links } from "../constants";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#231F20] text-[#EFF1F3]">
      <div className="container mx-auto py-4 px-4 md:px-0">
        <div className="flex items-center justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#EFF1F3]">
              Story Swift
            </span>
          </a>

          <ul
            className={`flex-grow text-center hidden md:flex items-center justify-center ${
              isMobile ? "hidden" : "block"
            }`}
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-[#EFF1F3] transition duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {!isMobile && (
            <Link
              to="Book A Discovery Call" // Replace with the correct target element ID
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer text-[#EFF1F3] bg-[#D4AF37]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-amber-600"
            >
              Book A Discovery Call
            </Link>
          )}

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        <ul className={`text-2xl md:hidden ${nav ? "block" : "hidden"}`}>
          {links.map(({ id, link }) => (
            <li key={id} className="py-2">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
