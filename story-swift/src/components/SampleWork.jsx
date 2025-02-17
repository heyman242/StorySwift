import React, { useEffect, useState } from "react";
import { DawnnaSF, JackSF, shortForm } from "../constants";
import { Link } from "react-router-dom";

const VideoRow = ({ videos, name, dataAos = "flip-left" }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full mb-16">
      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-4"} gap-4`}>
        {videos.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden border border-white dark:border-gray-800 max-w-[280px] mx-auto w-full"
            data-aos={dataAos}
          >
            <div
              className="relative w-full"
              style={{ paddingBottom: "177.78%" }}
            >
              <iframe
                src={item.link}
                title={`Video ${item.id}`}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        ))}
      </div>
      {name && (
        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
        </div>
      )}
    </div>
  );
};

const SampleWork = () => {
  return (
    <div
      name="Short-Form"
      className="bg-[#090517ff] text-[#f5ebdcff] flex justify-center mx-auto"
    >
      <div className="max-w-7xl w-full px-4 py-12">
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
              <span className="text-2xl sm:text-2xl font-medium">
                Short-Form Videos
              </span>
            </button>
          </div>
        </div>
        <VideoRow videos={DawnnaSF} name="Dawnna's Short Form Videos" />
        <VideoRow videos={JackSF} name="Jack's Short Form Videos" />

        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          More Short Form Videos
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 mb-12`}>
          {shortForm.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden border border-white dark:border-gray-800 max-w-[280px] mx-auto w-full"
              data-aos="flip-left"
            >
              <div
                className="relative w-full"
                style={{ paddingBottom: "177.78%" }}
              >
                <iframe
                  src={item.link}
                  title={`Sample Work ${item.id}`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/portfolio"
            className="inline-block bg-[#a62321ff] py-3 px-8 rounded-xl text-lg font-semibold text-white uppercase tracking-wide hover:text-[#ffffff] hover:bg-[#8e1f1c] transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#a62321ff] focus:ring-opacity-50"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SampleWork;
