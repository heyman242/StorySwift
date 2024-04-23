import React from "react";

const Home = () => {
  return (
    <div
      name="Home"
      className="bg-gradient-to-b from-[#090517] to-[#090517] text-[#ffffff]"
    >
      <div className="mx-auto pt-10 sm:pt-10 py-10 px-6">
        <div>
          <h2 className="text-center text-3xl sm:text-5xl font-bold mb-4">
            We Will Deliver{" "}
            <span className="text-[#fce54d] underline">
              UNLIMITED SHORT FORM CONTENT
            </span>{" "}
            {/* <span className="text-[#fce54d]">&nbsp;30 Days&nbsp;</span> */}
          </h2>
          <h2 className="text-center text-3xl sm:text-5xl font-bold mb-4">
            Every Single Month
            {/* <span className="text-[#fce54d]">
              &nbsp;Organic Video Content&nbsp;
            </span> */}
          </h2>
          {/* <h2 className="text-center text-3xl sm:text-5xl font-bold mb-4">
            or you get a
            <span className="text-[#fce54d]">&nbsp;full refund</span>
          </h2> */}
          <p className="text-center text-2xl text-[#f5c947] mb-4">
            Without you having any experience on camera or scripting a single
            line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
