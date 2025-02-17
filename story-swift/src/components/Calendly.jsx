import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      name="Book A Discovery Call"
      className="flex flex-col items-center justify-center bg-[#090517ff] py-12"
    >
      {/* Button Container */}
      <div className="relative group mb-6">
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
          <span className="text-4xl sm:text-4xl font-medium">
            Schedule A Call
          </span>
        </button>
      </div>

      {/* Subheading */}
      <div className="text-white text-xl sm:text-2xl">
        Let's talk about how we can help your business!
      </div>

      {/* Calendly Widget */}
      <div data-aos="fade-up" className="w-full max-w-7xl px-4">
        <InlineWidget
          url="https://calendly.com/story-swift/30min"
          styles={{
            height: isMobile ? "800px" : "700px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Calendly;
