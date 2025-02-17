import React from "react";
import { longform } from "../constants";

const LongForm = () => {
  return (
    <div name="Long-Form" className="bg-[#090517] py-16">
      <div className="container mx-auto px-4">
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
                Long-Form Videos
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1800px] mx-auto">
          {longform.map((item) => (
            <div key={item.id} className="flex flex-col" data-aos={item.fade}>
              <div className="relative w-full pb-[56.25%] bg-black rounded-xl overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${item.embedId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${item.name} - ${item.title}`}
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-gray-400 mt-2 text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LongForm;
