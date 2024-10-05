import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

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
      className="flex items-center justify-center bg-[#090517ff]"
    >
      <div className="py-6">
        <div className="flex justify-center text-white text-3xl sm:text-5xl">
          Get Your First Video Done COMPLETELY For Free!
        </div>
        <div data-aos="fade-right">
          <InlineWidget
            url="https://calendly.com/story-swift/30min"
            styles={{
              height: isMobile ? "800px" : "700px",
              width: isMobile ? "300px" : "1200px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendly;
