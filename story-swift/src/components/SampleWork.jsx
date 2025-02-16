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
      name="Work"
      className="bg-[#090517ff] text-[#f5ebdcff] flex justify-center mx-auto"
    >
      <div className="max-w-7xl w-full px-4 py-12">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold bg-gradient-to-r from-[#FF8C37] to-[#F53803] bg-clip-text text-transparent text-center mb-12">
          Short Form Videos
        </h1>

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
