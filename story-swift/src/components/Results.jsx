import React, { useEffect, useState } from "react";
import image1 from "../assets/4.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

const Results = () => {
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
      className="bg-[#090517ff] flex justify-center items-center w-full pt-16"
    >
      <div className="flex flex-col items-center justify-center px-20 py-4">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white  text-center">
          Results
        </h1>
        <br />
        <br />

        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-2`}
        >
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image1}
              alt=""
              data-aos="fade-right"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image2}
              alt=""
              data-aos="fade-left"
            />
          </div>
          {/* <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image3}
              alt=""
              data-aos="fade-right"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image4}
              alt=""
              data-aos="fade-left"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Results;
