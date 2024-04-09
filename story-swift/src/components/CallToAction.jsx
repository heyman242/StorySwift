import React from "react";
import { Link } from "react-scroll";

const CallToAction = () => {
  return (
    <div className="bg-[#090517ff] ">
      <div
        className="bg-[#090517ff] flex flex-col items-center text-[#ffffff] text-3xl"
        data-aos="fade-right"
      >
        <Link
          to="Book A Discovery Call"
          smooth
          duration={500}
          className="cursor-pointer capitalize inline-block bg-[#a62321ff] py-2 px-6 rounded-xl hover:text-[#ffffff] hover:scale-110 transition duration-300"
        >
          Book A Discovery Call
        </Link>
        <p className="text-center text-xl text-[#f5c947] mt-4">
          And get a Video Edited, Thumbnail and a Video Script (For Free).
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
