import React, { useEffect, useState } from "react";
import { sampleWork } from "../constants";

const SampleWork = () => {
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
      name="Work"
      className="bg-[#090517ff] text-[#f5ebdcff] flex justify-center py-20 mx-auto"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative inline-flex items-center justify-center p-0.5 mb-8 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative text-2xl px-5 py-2.5 transition-all ease-in duration-75 bg-[#EFF1F3] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Short Form Edits
          </span>
        </div>
        <div
          className={`grid grid-cols-${
            isMobile ? "1" : "3"
          } gap-8 md:grid-cols-3`}
        >
          {sampleWork.map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden border border-white dark:border-gray-800"
              data-aos="flip-left"
            >
              <iframe
                src={item.link}
                title={`Sample Work ${index + 1}`}
                width="100%"
                height={isMobile ? "530" : "530"} // Adjusted height for mobile
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleWork;
