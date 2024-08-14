import React from "react";
import { longform } from "../constants";

const LongForm = () => {
  return (
    <div className="bg-[#090517ff] flex justify-center">
      <div className="max-w-screen-lg w-full px-4 py-8">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-white text-center mb-8">
          Long Form Videos
        </h1>
        <div>
          {longform.map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden mb-8"
              data-aos="flip-left"
            >
              <div className="relative pb-[56.25%] h-0">
                {" "}
                {/* Maintain 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${item.embedId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LongForm;
