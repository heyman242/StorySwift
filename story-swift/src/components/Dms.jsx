import React, { useEffect, useState } from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

const Dms = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

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
    <div
      name="Testimonials"
      className="bg-black flex justify-center items-center w-full pt-16"
    >
      <div className="flex flex-col items-center justify-center px-10 py-4">
        <div className="relative inline-flex items-center justify-center p-0.5 mb-8 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative text-2xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Testimonials
          </span>
        </div>

        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-2`}
        >
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image1}
              alt=""
              // data-aos="fade-right"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image2}
              alt=""
              //  data-aos="fade-left"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image3}
              alt=""
              // data-aos="fade-right"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image4}
              alt=""
              // data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dms;
