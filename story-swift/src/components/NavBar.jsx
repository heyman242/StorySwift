import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { links } from "../constants";
import main from '../assets/main.svg'

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
    <div className="bg-[#090517ff] text-[#f5ebdcff]">
      <div className="container mx-auto py-4 px-4 md:px-0">
        <div className="flex items-center justify-between">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={main} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#ffffff]">
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
                className="px-4 cursor-pointer capitalize font-medium text-gray-100 hover:text-[#fdfcde] hover:scale-110 transition duration-200"
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
              className="cursor-pointer text-[#f5ebdcff] bg-[#a62321ff]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-amber-600"
            >
              Book A Discovery Call
            </Link>
          )}

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-[#ffffff] md:hidden"
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
