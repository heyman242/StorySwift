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
      className="mx-auto bg-[#090517ff] text-[#ffffff] text-center"
    >
      <p className="text-base sm:text-base mb-6">
        {/* <span className="text-[#fce54d]">100% RETURN&nbsp;</span> if we don't{" "}
        <span className="text-[#fce54d]">&nbsp;BEAT </span> your existing{" "}
        <span className="text-[#fce54d]">&nbsp;RESULT!&nbsp;</span> */}
        © 2024 Story Swift. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
