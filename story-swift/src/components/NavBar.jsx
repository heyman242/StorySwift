import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { links } from "../constants";
import main from "../assets/main.svg";
import AnimatedCTAButton from "./AnimatedCTAButton";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(progress);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#FF8C37] to-[#F53803] transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="w-full transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "justify-center py-2" : "py-4"
            }`}
          >
            {/* Logo Section - Hidden on scroll */}
            {!scrolled && (
              <div className="flex items-center">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF8C37] to-[#F53803] rounded-full opacity-50 group-hover:opacity-70 transition duration-300 blur"></div>
                  <div className="relative flex items-center bg-[#090517] rounded-full p-1">
                    <img
                      src={main}
                      className="h-8 w-8"
                      alt="Story Swift Logo"
                    />
                    <span className="text-2xl font-semibold text-white ml-2 pr-3">
                      Story Swift
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Links - Always Centered */}
            <div
              className={`hidden md:flex items-center justify-center relative ${
                scrolled ? "mx-auto" : "mx-4"
              }`}
            >
              {/* Only the navigation section has background and outline */}
              <div className="relative px-8 py-2 rounded-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8C37] to-[#F53803] rounded-full opacity-20"></div>
                <div className="absolute inset-0 bg-[#090517] rounded-full"></div>
                <div className="relative flex items-center justify-center space-x-12">
                  {links.map(({ id, link }) => (
                    <Link
                      key={id}
                      to={link}
                      smooth
                      duration={500}
                      className="text-white hover:text-[#FF8C37] cursor-pointer transition-all duration-300 text-lg  uppercase tracking-wider font-bold"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Book a Call Button - Hidden on scroll */}
            {!scrolled && (
              <div className="flex-shrink-0">
                <AnimatedCTAButton
                  text="Book a Call"
                  to="Book A Discovery Call"
                  className="hidden md:flex scale-90"
                />
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#090517] shadow-lg">
            {links.map(({ id, link }) => (
              <Link
                key={id}
                to={link}
                smooth
                duration={500}
                className="block px-6 py-3 text-white hover:bg-gray-800 last:border-none"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            <div className="p-4">
              <AnimatedCTAButton
                text="Book a Call"
                to="Book A Discovery Call"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
