import React from "react";
import WistiaPlayer from "./WistiaPlayer";

const Vsl = () => {
  return (
    <div className="relative w-full bg-[#090517ff] py-4">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FF8C37] via-transparent to-transparent opacity-60"></div>

      {/* Content Container */}
      <div className="relative max-w-[1200px] mx-auto px-4">
        {/* Video Container with Responsive Width */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* 16:9 Aspect Ratio Container */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-[0_0_180px_rgba(255,140,55,0.3)] hover:shadow-[0_0_240px_rgba(255,140,55,0.4)] transition-shadow duration-300">
            {/* Video Player */}
            <div className="relative pb-[56.25%]">
              <div className="absolute inset-0">
                <WistiaPlayer
                  videoId="uj3ezczwdq"
                  wrapper="wistia-player-container-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vsl;
