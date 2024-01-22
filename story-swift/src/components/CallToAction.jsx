import React from 'react'
import { Link } from "react-scroll";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-b from-black to-black ">
      <br />
      <div className="bg-gradient-to-b from-black to-black flex justify-center text-white text-3xl">
        <Link
          to="Book A Discovery Call"
          smooth
          duration={500}
          className="cursor-pointer capitalize inline-block bg-gradient-to-r from-amber-500 to-amber-500  py-2 px-6 rounded-xl hover:text-white hover:scale-110 transition duration-300"
        >
          Book A Discovery Call
        </Link>
      </div>
    </div>
  );
}

export default CallToAction