import React from "react";
import logo1 from "../assets/logos/1.webp";
import logo2 from "../assets/logos/2.png";
import logo3 from "../assets/logos/3.avif";
import logo4 from "../assets/logos/4.png";
import logo5 from "../assets/logos/5.png";
import logo6 from "../assets/logos/6.png";
import logo7 from "../assets/logos/7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const TrustedBy = () => {
  return (
    <div className="bg-[#090517] py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-5xl font-semibold bg-gradient-to-r from-[#FF8C37] to-[#F53803] bg-clip-text text-transparent text-center mb-12">
          Trusted By
        </h2>

        {/* Carousel container with mask */}
        <div className="relative overflow-hidden w-full">
          <div className="slider">
            {/* First set of logos */}
            <div className="slide-track">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="slide">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-16 object-contain filter brightness-0 invert transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider {
          position: relative;
          width: 100%;
          height: 100px;
          margin: 0 auto;
          overflow: hidden;
          background: transparent;
        }

        .slide-track {
          display: flex;
          width: calc(250px * 21); /* Width of each slide * number of slides */
          animation: scroll 35s linear infinite;
        }

        .slide {
          width: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(-250px * 7)
            ); /* Width of each slide * number of unique logos */
          }
        }

        /* Optional: pause animation on hover */
        .slide-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustedBy;
