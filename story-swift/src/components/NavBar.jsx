import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { links } from "../constants";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-4 px-4 md:px-0">
        <div className="flex justify-between items-center">
          {/* Name on the top left */}
          <h1 className="text-3xl md:text-5xl font-signature">Story Swift</h1>

          {/* Mobile navigation */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-white md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {/* Navigation links on the top right */}
          <ul className="hidden md:flex ml-auto">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-white hover:text-amber-500 hover:scale-110 transition duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile navigation */}
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
