import React from "react";

const Vsl = () => {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <div className="bg-[#090517ff] text-[#f5ebdcff] flex justify-center ">
      <div
        style={{
          width: isMobile ? "90%" : "60%", // Adjusted width for mobile
          height: isMobile ? "190px" : "500px", // Adjusted height for mobile
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "1px 4px 6px rgb(255, 255, 255)", // Fixed the boxShadow syntax
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/A-1IgIk5vf4"
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "auto",
            border: "none",
            borderRadius: "15px",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          title=""
        ></iframe>
      </div>
    </div>
  );
};

export default Vsl;
