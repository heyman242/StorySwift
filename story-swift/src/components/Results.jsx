import React, { useEffect, useState } from "react";
import { result } from "../constants";

const Results = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
      name="Results"
      className="bg-[#090517ff] flex justify-center items-center w-full"
    >
      <div className="flex flex-col items-center justify-center px-20 py-4">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <button
              className="px-8 py-3 bg-black text-white relative z-10 rounded-full
                             before:absolute before:inset-0 before:-z-10 before:rounded-full
                             before:bg-gradient-to-r before:from-[#FF8C37] before:to-[#F53803]
                             before:p-[2px] before:content-[''] after:absolute after:inset-[2px]
                             after:-z-10 after:rounded-full after:bg-black after:content-['']
                             group-hover:before:opacity-80 transition-all duration-300
                             shadow-[0_0_10px_rgba(255,140,55,0.3)]
                             group-hover:shadow-[0_0_20px_rgba(255,140,55,0.5)]
                             group-hover:scale-105
                             [box-shadow:inset_0_2px_15px_rgba(0,0,0,0.7),0_0_10px_rgba(255,140,55,0.3)]
                             group-hover:[box-shadow:inset_0_2px_15px_rgba(0,0,0,0.7),0_0_20px_rgba(255,140,55,0.5)]"
            >
              <span className="text-2xl sm:text-2xl font-medium">Results</span>
            </button>
          </div>
        </div>
        <br />
        <br />

        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-6`}
        >
          {result.slice(0, 6).map((item, index) => (
            <div key={item.id}>
              <img
                className="h-auto max-w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                src={item.link}
                alt={`Result ${item.id}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
