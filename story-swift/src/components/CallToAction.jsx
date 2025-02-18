import React from "react";
import AnimatedCTAButton from "./AnimatedCTAButton";

const CallToAction = ({ variant = "default" }) => {
  const buttonText = {
    nav: "Book a Call",
    vsl: "Get Started",
    results: "I Want Same Results",
    longform: "Get A Free YouTube Video",
    thumbnail: "Get A Free Thumbnail",
    samplework: "Get A Free Short Form Video",
    default: "Book A Discovery Call",
  };

  return (
    <div className="bg-[#090517ff] w-full px-4">
      <div className="max-w-7xl mx-auto flex justify-center py-4">
        <AnimatedCTAButton
          text={buttonText[variant]}
          to="Book A Discovery Call"
        />
      </div>
    </div>
  );
};

export default CallToAction;
