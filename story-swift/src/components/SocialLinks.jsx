import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaSquareXTwitter,
  FaSquareWhatsapp,
  FaSquareEnvelope,
  FaSquareYoutube,
} from "react-icons/fa6";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "Connect on Twitter",
      icon: <FaSquareXTwitter size={50} color="#000000" />,
      href: "https://twitter.com/snipersaurabh",
      style: "rounded-tr-md bg ",
    },
    {
      id: 2,
      name: "Connect on Whatsapp",
      icon: <FaSquareWhatsapp size={60} color="#25d366" />,
      href: "https://www.whatsapp.com/",
    },
    {
      id: 3,
      name: "Connect on Mail",
      icon: <FaSquareEnvelope size={40} color="#1da1f2" />,
      href: "mailto:saurabh@storyswift.in",
    },
    {
      id: 4,
      name: "Connect on Youtube",
      icon: <FaSquareYoutube size={50} color="#ff0000" />,
      href: "https://www.youtube.com/",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed">
      {/* Desktop mode */}
      <ul className="hidden lg:block">
        {links.map(({ id, name, icon, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-16 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#ffffff]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-[##090517]"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {name}
              {icon}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile mode */}
      <div className="lg:hidden flex justify-center items-center fixed bottom-0 left-0 w-full">
        {links.map(({ id, icon, href, style, download }) => (
          <a
            key={id}
            href={href}
            className={
              "flex justify-center items-center w-20 h-10 mx-1 rounded-md duration-300 text-[#fdfcde] hover:bg-gray-400" +
              " " +
              style
            }
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
