import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div
      name="Book A Discovery Call"
      className=" flex items-center justify-center bg-gradient-to-b from-black to-black"
    >
      <InlineWidget
        url="https://calendly.com/himanshu-hb/sample-event"
        styles={{
          height: "700px",
          width: "1000px",
          position: "relative",
        }}
      />
    </div>
  );
};

export default Calendly;
