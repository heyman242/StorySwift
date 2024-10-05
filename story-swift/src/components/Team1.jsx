import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/saurabh.jpeg";
import image2 from "../assets/himanshu.jpeg";

const team = [
  {
    avatar: image1,
    name: "Saurabh Agarwal ",
    title: "Content Engineer and Animator",
    desc: "Saurabh is responsible for Animating a static video and Give Life to frame. He is responsible for Scripting and ideating the content. He manages Sales and marketing.",
    linkedin: "javascript:void(0)",
    twitter: "https://twitter.com/snipersaurabh",
    youtube: "https://www.youtube.com/@MemoMagnetSA/featured",
    instagram: "https://www.instagram.com/snipersaurabh/",
  },
  {
    avatar: image2,
    name: "Himanshu Bobade",
    title: "Visual Thinker and Operator",
    desc: "Himanshu is responsible for Creating a Story-board for a video, Visualising and dumbing it down to the viewers in the form of a frame. He manages the operations and create systems.",
    linkedin: "https://www.linkedin.com/in/himanshu-bobade-9306ba321/",
    twitter: "https://x.com/hvnterhimanshu",
    youtube: "https://www.youtube.com/@himanshubobade6960/featured",
    instagram: "https://www.instagram.com/hvnterhimanshu/",
  },
];

const Team1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-5xl font-semibold text-white">About Us</h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 lg:grid-cols-2">
            {team.map((item, idx) => (
              <li
                key={idx}
                className="gap-8 sm:flex"
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="w-full h-65">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h4 className="text-3xl text-white font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-[#fce54d] text-xl">{item.title}</p>
                  <p className="text-white mt-2 text-lg">{item.desc}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <a href={item.twitter}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g clipPath="url(#clip0_17_80)">
                          <path
                            fill="currentColor"
                            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_80">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.instagram}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clipPath="url(#clip0_instagram)">
                          <path
                            fill="currentColor"
                            d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.694 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.12.722-4.454.825-2.53.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.53-.14-3.29-.14-9.694 0-6.413.028-7.172.14-9.694.103-2.343.497-3.61.825-4.453.431-1.116.957-1.922 1.79-2.756.844-.844 1.641-1.36 2.757-1.79.844-.329 2.119-.723 4.453-.826 2.522-.112 3.281-.14 9.694-.14zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.525-5.83 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.331-2.156 2.672-2.775 4.247-.591 1.527-1.003 3.28-1.116 5.83C.019 16.67 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.525 4.304 1.116 5.83.619 1.585 1.435 2.925 2.775 4.257 1.331 1.34 2.672 2.156 4.247 2.775 1.527.591 3.28 1.003 5.83 1.116 2.56.112 3.375.14 9.891.14 6.516 0 7.331-.028 9.89-.14 2.55-.113 4.304-.525 5.83-1.116 1.585-.619 2.925-1.434 4.257-2.775 1.34-1.331 2.156-2.672 2.775-4.247.591-1.526 1.003-3.28 1.116-5.83.112-2.56.14-3.375.14-9.89 0-6.516-.028-7.331-.14-9.89-.113-2.55-.525-4.304-1.116-5.83-.619-1.585-1.434-2.926-2.775-4.257-1.331-1.34-2.672-2.156-4.247-2.775-1.526-.591-3.28-1.003-5.83-1.116C31.331.019 30.516 0 24 0zm0 11.678c-6.806 0-12.322 5.516-12.322 12.322S17.194 36.322 24 36.322 36.322 30.806 36.322 24 30.806 11.678 24 11.678zm0 20.323a8 8 0 110-16 8 8 0 010 16zM39.694 11.184a2.879 2.879 0 11-5.758 0 2.879 2.879 0 015.758 0z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_instagram">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.youtube}>
                      <svg
                        className="w-6 h-6 duration-150 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clipPath="url(#clip0_youtube)">
                          <path
                            fill="currentColor"
                            d="M47.512 13.43a6.208 6.208 0 00-4.388-4.388C39.32 8 24 8 24 8S8.68 8 4.876 9.042a6.208 6.208 0 00-4.388 4.388C0 17.236 0 24 0 24s0 6.764.488 10.57a6.208 6.208 0 004.388 4.388C8.68 40 24 40 24 40s15.32 0 19.124-1.042a6.208 6.208 0 004.388-4.388C48 30.764 48 24 48 24s0-6.764-.488-10.57zM19.09 31.516V16.484L31.636 24l-12.546 7.516z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_youtube">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.linkedin}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clipPath="url(#clip0_17_68)">
                          <path
                            fill="currentColor"
                            d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_68">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team1;
