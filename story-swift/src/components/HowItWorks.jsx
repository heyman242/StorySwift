import React from "react";
import image from "../assets/shooting.png";

const HowItWorks = () => {
  return (
    <div className="bg-[#090517ff]">
      <div classname="overflow-y-hidden bg-[#090517ff]">
        <div className="mx-auto container f-f-p px-4 xl:px-0 py-8 bg-[#090517ff]">
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white  text-center">
            How it works?
          </h1>
          <div className="md:mt-24 f-f-p">
            <div className="hidden md:flex justify-center w-full">
              <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
                <div aria-label="sign up" role="img">
                  <img
                    className="focus:outline-none mt-10"
                    src={image}
                    alt="how it work"
                  />
                </div>
                <div aria-label={2} role="img">
                  <img
                    className="focus:outline-none mt-24"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
                    alt
                  />
                </div>
                <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                  <h1 className="focus:outline-none text-xl font-bold leading-5 text-[#fce54d]">
                    We Edit The Videos
                  </h1>
                  <h2 className="focus:outline-none text-white mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">
                    Watch your recordings come to life as we transforms them
                    into both long and short-form videos. Enjoy a steady stream
                    of content, allowing you to post daily or multiple times a
                    day.{" "}
                  </h2>
                </div>
                <div aria-label="transactions" role="img">
                  <img
                    className="focus:outline-none mt-24"
                    src="https://res.cloudinary.com/dqdu2vnxa/image/upload/v1711954661/ndegepmdewtfp0nxsbls.png"
                    alt
                  />
                </div>
                {/* <img
                  className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
                  src={image}
                  alt
                /> */}
              </div>
              <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
                <div aria-label={1} role="img">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
                    alt
                  />
                </div>
                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                  <h1 className="focus:outline-none text-xl font-bold leading-5 text-[#fce54d]">
                    Get on Camera
                  </h1>
                  <h2 className="focus:outline-none text-white mt-3 text-base leading-6 tracking-wide">
                    Allocate time for recording, and let us handle the rest. we
                    will develop video ideas and scripts in advance. We'll guide
                    you through best practices for recording videos that drive
                    performance and conversions.{" "}
                  </h2>
                </div>
                <div aria-label="wallet" role="img">
                  <img
                    className="focus:outline-none mt-32"
                    src="https://res.cloudinary.com/dqdu2vnxa/image/upload/v1711956546/lwwjnduajiyyx6fxyspa.png"
                    alt
                  />
                </div>
                <div aria-label={3} role="img">
                  <img
                    className="focus:outline-none mt-20"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
                    alt
                  />
                </div>
                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                  <h1 className="focus:outline-none text-xl font-bold leading-5 text-[#fce54d]">
                    Propagate Onto All Platforms
                  </h1>
                  <h2 className="focus:outline-none text-white mt-3 text-base leading-6 tracking-wide">
                    Leave the distribution to us. We'll take your short-form
                    videos and share them across all platforms. Sit back, relax,
                    and witness the views and conversions roll in effortlessly.
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:hidden flex flex-col items-center w-full">
              <img
                className="focus:outline-none my-10"
                src={image}
                alt="how it work"
              />
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
                alt
              />
              <div className="mt-10">
                <h1 className="text-xl text-center tracking-wide leading-5 font-bold text-[#fce54d] ">
                  Get on Camera
                </h1>
                <h2 className="text-white mt-3 text-center text-base leading-6 tracking-wide">
                  Allocate time for recording, and let us handle the rest. we
                  will develop video ideas and scripts in advance. We'll guide
                  you through best practices for recording videos that drive
                  performance and conversions.{" "}
                </h2>
              </div>
              <img
                className="focus:outline-none my-10"
                src="https://res.cloudinary.com/dqdu2vnxa/image/upload/v1711956546/lwwjnduajiyyx6fxyspa.png"
                alt
              />
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
                alt
              />
              <div className="mt-10">
                <h1 className="text-xl tracking-wide text-center leading-5 font-bold text-[#fce54d]">
                  We Edit The Videos
                </h1>
                <h2 className="text-white mt-3 pl-3 text-center text-base leading-6 tracking-wide">
                  Watch your recordings come to life as we transforms them into
                  both long and short-form videos. Enjoy a steady stream of
                  content, allowing you to post daily or multiple times a day.{" "}
                </h2>
              </div>
              <img
                className="focus:outline-none my-10"
                src="https://res.cloudinary.com/dqdu2vnxa/image/upload/v1711954661/ndegepmdewtfp0nxsbls.png"
                alt
              />
              <img
                className
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
                alt
              />
              <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
                <h1 className="text-xl text-center tracking-wide leading-5 font-bold text-[#fce54d]">
                  Propagate Onto All Platforms
                </h1>
                <h2 className="text-white mt-3 text-center text-base leading-6 tracking-wide">
                  Leave the distribution to us. We'll take your short-form
                  videos and share them across all platforms. Sit back, relax,
                  and witness the views and conversions roll in effortlessly.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
