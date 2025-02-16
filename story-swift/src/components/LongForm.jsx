import React from "react";
import { longform } from "../constants";

const LongForm = () => {
  return (
    <div className="bg-[#090517] py-16">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold bg-gradient-to-r from-[#FF8C37] to-[#F53803] bg-clip-text text-transparent text-center mb-16">
          Long Form Videos
        </h1>

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
