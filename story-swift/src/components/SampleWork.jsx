import React from "react";
import { sampleWork } from "../constants";

const SampleWork = () => {
  return (
    <div
      name="work"
      className="bg-gradient-to-b from-black to-black text-white flex justify-center py-9 mx-auto"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {sampleWork.map((item, index) => (
            <iframe
              key={item.id}
              src={item.link}
              title={`Sample Work ${index + 1}`}
              width="80%"
              height="430"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mb-4"
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleWork;
