import React from "react";
import { Link } from "react-scroll";

const CallToAction = () => {
  return (
    <div className="bg-[#090517ff] ">
      <div
        className="bg-[#090517ff] flex justify-center text-[#ffffff] text-3xl"
        data-aos="fade-right"
      >
        <Link
          to="Book A Discovery Call"
          smooth
          duration={500}
          className="cursor-pointer capitalize inline-block bg-[#a62321ff]  py-2 px-6 rounded-xl hover:text-[#ffffff] hover:scale-110 transition duration-300"
        >
          Book A Discovery Call
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
