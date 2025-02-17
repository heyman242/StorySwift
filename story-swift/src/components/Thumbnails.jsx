import React from "react";
import { thumbnails } from "../constants";

const Thumbnails = () => {
  return (
    <div className="bg-[#090517] py-12">
      <div className="max-w-auto mx-auto px-4">
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
                Thumbnails
              </span>
            </button>
          </div>
        </div>

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
