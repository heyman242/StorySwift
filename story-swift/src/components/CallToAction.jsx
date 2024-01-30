import React from 'react'
import { Link } from "react-scroll";

const CallToAction = () => {
  return (
    <div className="bg-[#231F20] ">
      <br />
      <div
        className="bg-[#231F20] flex justify-center text-[#EFF1F3] text-3xl"
        data-aos="fade-right"
      >
        <Link
          to="Book A Discovery Call"
          smooth
          duration={500}
          className="cursor-pointer capitalize inline-block bg-[#D4AF37]  py-2 px-6 rounded-xl hover:text-[#EFF1F3] hover:scale-110 transition duration-300"
        >
          Book A Discovery Call
        </Link>
      </div>
    </div>
  );
}

export default CallToAction