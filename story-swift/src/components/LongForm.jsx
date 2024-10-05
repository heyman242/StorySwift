import React from "react";
import { longform } from "../constants";

const LongForm = () => {
  return (
    <div className="bg-[#090517] flex justify-center">
      <div className="max-w-screen-xl w-full py-8">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-white text-center mb-12">
          Long Form Videos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
          {longform.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden w-full max-w-2xl mx-auto"
              data-aos={item.fade}
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${item.embedId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${item.name} - ${item.title}`}
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LongForm;
