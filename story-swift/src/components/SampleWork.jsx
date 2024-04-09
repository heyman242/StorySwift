import React, { useEffect, useState } from "react";
import { shortForm, longForm, thumbnails } from "../constants";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./css/SampleWorkCarousel.css";

const SampleWork = () => {
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
      name="Work"
      className="bg-[#090517ff] text-[#f5ebdcff] flex justify-center mx-auto"
    >
      <div className="flex flex-col items-center justify-center">
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white  text-center">
          Short From Videos
        </h1>
        <br />
        <br />
        <div
          className={`grid grid-cols-${
            isMobile ? "1" : "3"
          } gap-6 md:grid-cols-3`}
        >
          {shortForm.map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden border border-white dark:border-gray-800"
              data-aos="flip-left"
            >
              <iframe
                src={item.link}
                title={`Sample Work ${index + 1}`}
                width="100%"
                height={isMobile ? "530" : "530"} // Adjusted height for mobile
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        {/* <br />
        <br />
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white  text-center">
          Long From Videos
        </h1>
        <br />
        <br />
        <div
          className={`grid grid-cols-${
            isMobile ? "1" : "2"
          } gap-6 md:grid-cols-2`}
          style={{
            width: isMobile ? "100px" : "1500px", // Adjusted width for mobile
            height: isMobile ? "300px" : "414px", // Adjusted height for mobile
          }}
        >
          {longForm.map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden border border-white dark:border-gray-800"
              data-aos="flip-left"
            >
              <iframe
                src={item.link}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                title=""
              ></iframe>
            </div>
          ))}
        </div>

        <br />
        <br />
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white  text-center">
            Thumbnails
          </h1>
          <br />
          <br />
          <div className="carousel">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={thumbnails.length} // Total slides based on thumbnails data length
              visibleSlides={1} // Adjust the number of visible slides per view
              step={1}
              infinite={true}
              isPlaying={true} // Enable auto-sliding
              interval={3000}
            >
              <div className="w-full relative">
                <Slider>
                  {thumbnails.map((image, index) => (
                    <Slide key={index} index={index}>
                      <div className="flex justify-center items-center">
                        <img
                          src={image.link}
                          alt={`Slide ${index + 1}`}
                          className="object-cover object-center w-6/12 h-2/5" // Adjust the width and height as needed
                        />
                      </div>
                    </Slide>
                  ))}
                </Slider>
                <DotGroup className="carousel__dot-group" />
              </div>
            </CarouselProvider>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SampleWork;
