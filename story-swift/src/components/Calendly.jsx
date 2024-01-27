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
      className="flex items-center justify-center bg-gradient-to-b from-black to-black"
    >
      <div
        className={`shadow-lg rounded-lg overflow-hidden`}
        // data-aos="fade-right"
      >
        <InlineWidget
          url="https://calendly.com/himanshu-hb/sample-event"
          styles={{
            height: isMobile ? "800px" : "700px",
            width: isMobile ? "350px" : "1200px",
          }}
        />
      </div>
    </div>
  );
};

export default Calendly;
