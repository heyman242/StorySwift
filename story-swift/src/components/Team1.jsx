import React from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const team = [
  {
    avatar: "image1",
    name: "Saurabh Agarwal",
    title: "Content Engineer and Animator",
    desc: "Creative animator and strategic thinker with a passion for bringing stories to life.",
    social: {
      twitter: "https://twitter.com/snipersaurabh",
      instagram: "https://www.instagram.com/snipersaurabh/",
      youtube: "https://www.youtube.com/@snipersaurabhh",
      linkedin: "https://www.linkedin.com/in/snipersaurabh/",
    },
  },
  {
    avatar: "image2",
    name: "Himanshu Bobade",
    title: "Visual Thinker and Operator",
    desc: "Visual storyteller and systems architect focused on creating impactful content experiences.",
    social: {
      twitter: "https://x.com/hvnterhimanshu",
      instagram: "https://www.instagram.com/hvnterhimanshu/",
      youtube: "https://www.youtube.com/@himanshubobade6960/featured",
      linkedin: "https://www.linkedin.com/in/himanshu-bobade-9306ba321/",
    },
  },
];

const Team1 = () => {
  return (
    <div className="bg-[#090517] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <button
              className="px-8 py-3 bg-black text-white relative z-10 rounded-full
                             before:absolute before:inset-0 before:-z-10 before:rounded-full
                             before:bg-gradient-to-r before:from-[#FF8C37] before:to-[#F53803]
                             before:p-[2px] before:content-[''] after:absolute after:inset-[2px]
                             after:-z-10 after:rounded-full after:bg-black after:content-['']
                             group-hover:before:opacity-80 transition-all duration-300
                             shadow-[0_0_10px_rgba(255,140,55,0.3)]
                             group-hover:shadow-[0_0_20px_rgba(255,140,55,0.5)]
                             group-hover:scale-105
                             [box-shadow:inset_0_2px_15px_rgba(0,0,0,0.7),0_0_10px_rgba(255,140,55,0.3)]
                             group-hover:[box-shadow:inset_0_2px_15px_rgba(0,0,0,0.7),0_0_20px_rgba(255,140,55,0.5)]"
            >
              <span className="text-2xl sm:text-2xl font-medium">About Us</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="relative group"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
            >
              <div className="relative overflow-hidden rounded-3xl p-0.5 bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#ffffff] transition-all duration-500">
                <div className="bg-[#151515] rounded-3xl relative backdrop-blur-xl overflow-hidden group-hover:bg-[#1a1a1a] transition-all duration-500">
                  {/* Glowing orb effect in background */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF8C37] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

                  <div className="flex flex-col md:flex-row p-6 relative z-10">
                    {/* Left side - Image */}
                    <div className="relative mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                      <div className="w-48 h-64 overflow-hidden rounded-xl transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,140,55,0.3)]">
                        <img
                          src={
                            member.avatar === "image1"
                              ? "https://res.cloudinary.com/drdom0aht/image/upload/f_auto,q_auto/alxj0hnhdasc8lr9ki3a"
                              : "https://res.cloudinary.com/drdom0aht/image/upload/f_auto,q_auto/qqqep8nqemhhgjkibb19"
                          }
                          alt={member.name}
                          className="w-full h-full object-cover object-center  transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-[#FF8C37] font-medium mb-4 text-lg">
                          {member.title}
                        </p>
                        <p className="text-white mb-6 text-base leading-relaxed">
                          {member.desc}
                        </p>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center space-x-6">
                        <a
                          href={member.social.twitter}
                          className="transform hover:scale-125 transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter className="w-12 h-12 text-[#1DA1F2] hover:text-[#1DA1F2]/80" />
                        </a>
                        <a
                          href={member.social.instagram}
                          className="transform hover:scale-125 transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram className="w-12 h-12 text-[#E1306C] hover:text-[#E1306C]/80" />
                        </a>
                        <a
                          href={member.social.youtube}
                          className="transform hover:scale-125 transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaYoutube className="w-12 h-12 text-[#FF0000] hover:text-[#FF0000]/80" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="transform hover:scale-125 transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin className="w-12 h-12 text-[#0077B5] hover:text-[#0077B5]/80" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team1;
