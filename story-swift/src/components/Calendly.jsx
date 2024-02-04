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
      <div>
        <div className="flex justify-center text-white text-3xl sm:text-5xl">
          Become &nbsp;
          <span className="text-[#fce54d] underline">OmniPresent</span>&nbsp; on
          all&nbsp;
          <span className="text-[#fce54d] underline">Social Media</span> &nbsp;
          Platform
        </div>
        <div data-aos="fade-right">
          <InlineWidget
            url="https://calendly.com/himanshu-hb/sample-event"
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
