import React from "react";
import { Link } from "react-scroll";

const AnimatedCTAButton = ({ text, className = "", onClick, to }) => {
  const ButtonContent = () => (
    <button
      className={`
        group relative inline-flex items-center justify-between
        rounded-full bg-gradient-to-r from-[#FF8C37] to-[#F53803]
        py-4 px-8 min-w-[200px] w-full sm:w-auto
        hover:shadow-lg transition-all duration-300
        ${className}
      `}
    >
      <span className="text-white text-xl font-medium flex-grow text-center">
        {text}
      </span>
      <span className="text-white text-2xl ml-2 transform transition-transform duration-300 group-hover:rotate-90">
        →
      </span>
    </button>
  );

  return to ? (
    <Link
      to={to}
      smooth
      duration={500}
      className="cursor-pointer w-full sm:w-auto"
    >
      <ButtonContent />
    </Link>
  ) : (
    <ButtonContent onClick={onClick} />
  );
};

export default AnimatedCTAButton;
