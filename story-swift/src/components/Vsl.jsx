import React from "react";
import WistiaPlayer from "./WistiaPlayer";

const Vsl = () => {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <div className="bg-[#090517ff] text-[#f5ebdcff] flex justify-center ">
      <div
        style={{
          width: isMobile ? "90%" : "50%", // Adjusted width for mobile
          height: isMobile ? "190px" : "500px", // Adjusted height for mobile
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "1px 4px 6px rgb(255, 255, 255)", // Fixed the boxShadow syntax
        }}
      >
        <WistiaPlayer
          videoId="vwyskdan8n"
          wrapper="wistia-player-container-1"
        />
      </div>
    </div>
  );
};

export default Vsl;
