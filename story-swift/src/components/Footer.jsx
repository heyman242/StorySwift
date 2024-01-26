import React, { useEffect } from "react";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialButton = ({
  color,
  hoverColor,
  focusColor,
  focusRingColor,
  icon,
  text,
  aosAnimation,
}) => {

  return (
    <button
      type="button"
      className={`text-white bg-black hover:bg-${hoverColor} focus:ring-4 focus:outline-none focus:ring-${focusColor} font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-${focusRingColor} me-2 mb-2`}
      style={{ backgroundColor: `var(${hoverColor})` }}
      data-aos={aosAnimation}
    >
      <img src={icon} alt={text} className="img main-img mr-2" />
      {text}
    </button>
  );
};

const Footer = () => {
  return (
    <div name="contact" className="mx-auto bg-black text-white py-20 text-center">
      <p className="text-5xl mb-8">
        100% REFUND if we don't beat your existing results
      </p>
      <div className="flex justify-center space-x-4">
        <SocialButton
          color="#1da1f2"
          hoverColor="#1da1f2/90"
          focusColor="#1da1f2/50"
          focusRingColor="#1da1f2/55"
          icon={twitter}
          text="Connect on Twitter"
          aosAnimation="fade-right"
        />

        <SocialButton
          color="#e4405f"
          hoverColor="#e4405f/90"
          focusColor="#e4405f/50"
          focusRingColor="#e4405f/55"
          icon={instagram}
          text="Connect on Instagram"
          aosAnimation="fade-up"
        />

        <SocialButton
          color="#ff0000"
          hoverColor="#ff0000/90"
          focusColor="#ff0000/50"
          focusRingColor="#ff0000/55"
          icon={youtube}
          text="Subscribe on YouTube"
          aosAnimation="fade-left"
        />
      </div>
    </div>
  );
};

export default Footer;