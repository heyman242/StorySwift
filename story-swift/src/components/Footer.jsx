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
      className="mx-auto bg-[#090517ff] text-[#ffffff] py-8 text-center"
    >
      <p className="text-3xl sm:text-5xl mb-8">
        <span className="text-[#fce54d]">100% RETURN&nbsp;</span> if we don't{" "}
        <span className="text-[#fce54d]">&nbsp;BEAT </span> your existing{" "}
        <span className="text-[#fce54d]">&nbsp;RESULT!&nbsp;</span>
      </p>
    </div>
  );
};

export default Footer;
