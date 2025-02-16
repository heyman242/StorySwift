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
      name="Testimonials"
      className="bg-[#090517ff] flex justify-center items-center w-full pt-16"
    >
      <div className="flex flex-col items-center justify-center px-20 py-4">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 bg-gradient-to-r from-[#FF8C37] to-[#F53803] bg-clip-text text-transparent">
          Results
        </h1>
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
