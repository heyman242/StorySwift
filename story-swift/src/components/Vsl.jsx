import React from "react";
import WistiaPlayer from "./WistiaPlayer";

const Vsl = () => {
  //const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <div className="bg-[#090517ff] text-[#f5ebdcff] flex justify-center ">
      <div
        style={{
          width: "75%",
          height: "100%",
          overflow: "hidden",
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
