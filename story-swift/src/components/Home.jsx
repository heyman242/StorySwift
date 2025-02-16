import React from "react";

const Home = () => {
  return (
    <div name="Home" className="bg-[#090517] text-white">
      <div className="mx-auto pt-10 sm:pt-10 py-10 px-6">
        {/* Target Audience Tag */}
        <div className="flex justify-center mb-8">
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
              <span className="text-xl sm:text-xl font-medium">
                Coaches, Agency Owners & SaaS Companies
              </span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold mb-4">
            We Will Add You{" "}
            <span className="bg-gradient-to-r from-[#FF8C37] to-[#F53803] bg-clip-text text-transparent inline-block">
              10-15 Qualified Sales Calls
            </span>
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Every Month Through A YouTube Content Funnel
          </h1>
          <h1 className="text-2xl sm:text-xl lg:text-2xl font-bold mb-4">
            <div className="relative group inline-block">
              <button
                className="px-4 py-2 bg-black text-white relative z-10 rounded-full
                               before:absolute before:inset-0 before:-z-10 before:rounded-full
                               before:bg-gradient-to-r before:from-[#FF8C37] before:to-[#F53803]
                               before:p-[2px] before:content-[''] after:absolute after:inset-[2px]
                               after:-z-10 after:rounded-full after:bg-black after:content-['']
                               group-hover:before:opacity-80 transition-all duration-300
                               [box-shadow:inset_0_2px_15px_rgba(0,0,0,0.7),0_0_10px_rgba(255,140,55,0.3)]
                               group-hover:[box-shadow:inset_0_2px_15px_rgba(0,0,0,0.7),0_0_20px_rgba(255,140,55,0.5)]
                               group-hover:scale-105"
              >
                <span>(Or You Don't Pay)</span>
              </button>
            </div>
          </h1>
          <p className="text-center text-xl sm:text-2xl lg:text-3xl mb-4">
            Without you having any experience on camera or scripting a single
            line
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
