import React from "react";
import { sampleWork } from "../constants";

const SampleWork = () => {
  return (
    <div
      name="work"
      className="bg-gradient-to-b from-black to-black text-white flex justify-center py-20 mx-auto"
    >
      <div className="flex flex-col items-center justify-center">
        <div class="relative inline-flex items-center justify-center p-0.5 mb-8 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span class="relative text-2xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Short Form Edits
          </span>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {sampleWork.map((item, index) => (
            <iframe
              key={item.id}
              src={item.link}
              title={`Sample Work ${index + 1}`}
              width="100%"
              height="535"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mb-4"
              data-aos="zoom-in-up"
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SampleWork;
