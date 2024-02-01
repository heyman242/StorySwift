import React, { useEffect, useState } from "react";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import mail from "../assets/mail.svg";
import whatsapp from "../assets/whatsapp.svg";

const Footer = () => {
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
      name="Contact"
      className="mx-auto bg-[#090517ff] text-[#fdfcde] py-20 text-center"
    >
      <p className="text-3xl sm:text-5xl mb-8">
        <span className="text-[#fce54d]">100% RETURN&nbsp;</span> if we don't{" "}
        <span className="text-[#fce54d]">&nbsp;BEAT </span> your existing{" "}
        <span className="text-[#fce54d]">&nbsp;RESULT&nbsp;</span>
      </p>
      <div
        className={`flex ${
          isMobile ? "flex-col items-center" : "justify-center space-x-4"
        }`}
      >
        {/* Twitter Button */}
        <button
          className="text-[#fdfcde] bg-[#1da1f2] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-#1da1f2/55 me-2 mb-2"
          data-aos="fade-right"
        >
          <img
            src={twitter}
            alt="Connect on Twitter"
            className="img main-img mr-2"
          />
          Connect on Twitter
        </button>

        {/* YouTube Button */}
        <button
          className="text-[#fdfcde] bg-[#ff0000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-#ff0000/55 me-2 mb-2"
          data-aos="fade-down"
        >
          <img
            src={youtube}
            alt="Subscribe on YouTube"
            className="img main-img mr-2"
          />
          Subscribe on YouTube
        </button>
        <button
          className="text-[#fdfcde] bg-[#25d366] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-#ff0000/55 me-2 mb-2"
          data-aos="fade-down"
        >
          <img
            src={whatsapp}
            alt="Subscribe on YouTube"
            className="img main-img mr-2"
          />
          Connect on Whatsapp
        </button>
        <button
          className="text-[#fdfcde] bg-[#ff0000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-#ff0000/55 me-2 mb-2"
          data-aos="fade-left"
        >
          <img
            src={mail}
            alt="Subscribe on YouTube"
            className="img main-img mr-2"
          />
          Connect on Mail
        </button>
      </div>
    </div>
  );
};

export default Footer;
