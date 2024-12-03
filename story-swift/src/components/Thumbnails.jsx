import React, { useState, useEffect } from "react";
import thumbnail1 from "../assets/thumbnail-1.png";
import thumbnail2 from "../assets/thumbnail-2.png";
import thumbnail3 from "../assets/thumbnail-3.png";
import thumbnail4 from "../assets/thumbnail-4.png";
import thumbnail5 from "../assets/thumbnail-5.png";
import thumbnail6 from "../assets/thumbnail-6.png";
import thumbnail7 from "../assets/thumbnail-7.png";
import thumbnail8 from "../assets/thumbnail-8.png";
import thumbnail9 from "../assets/thumbnail-9.png";

const thumbnails = [
  { id: 1, image: thumbnail9, name: "Video 9", title: "Description 9" },
  { id: 2, image: thumbnail8, name: "Video 8", title: "Description 8" },
  { id: 3, image: thumbnail7, name: "Video 7", title: "Description 7" },
  { id: 4, image: thumbnail1, name: "Video 1", title: "Description 1" },
  { id: 5, image: thumbnail3, name: "Video 3", title: "Description 3" },
  { id: 6, image: thumbnail6, name: "Video 6", title: "Description 6" },
  { id: 7, image: thumbnail2, name: "Video 2", title: "Description 2" },
  { id: 8, image: thumbnail4, name: "Video 4", title: "Description 4" },
  { id: 9, image: thumbnail5, name: "Video 5", title: "Description 5" },
];

const Thumbnails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % thumbnails.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#090517] py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-white text-center mb-8">
          Youtube Thumbnails
        </h2>
        <div className="relative overflow-hidden w-7/12 mx-auto">
          {" "}
          {/* Reduced max-width */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {thumbnails.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 px-2">
                <div className="relative pb-[56.25%] bg-gray-800 rounded-lg overflow-hidden">
                  {" "}
                  {/* Adjusted aspect ratio */}
                  <img
                    src={item.image}
                    alt={`Thumbnail for ${item.name}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {thumbnails.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
