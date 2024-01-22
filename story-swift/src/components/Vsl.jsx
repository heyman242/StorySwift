import React from 'react'

const Vsl = () => {
  return (
    <div className="bg-gradient-to-b from-black to-black text-white flex justify-center ">
      <div
        style={{
          width: "60%",
          height: "486px",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "1 4px 6px rgb(232, 232, 232)",
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
}

export default Vsl