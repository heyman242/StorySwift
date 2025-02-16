import React from "react";
import { thumbnails } from "../constants";

const Thumbnails = () => {
  return (
    <div className="bg-[#090517] py-12">
      <div className="max-w-auto mx-auto px-4">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 bg-gradient-to-r from-[#FF8C37] to-[#F53803] bg-clip-text text-transparent text-center mb-12">
          Youtube Thumbnails
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {thumbnails.map((thumbnail) => (
            <div
              key={thumbnail.id}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={(thumbnail.id % 4) * 100}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative pb-[56.25%]">
                  {" "}
                  {/* 16:9 aspect ratio */}
                  <img
                    src={thumbnail.link}
                    alt={`Thumbnail ${thumbnail.id}`}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
