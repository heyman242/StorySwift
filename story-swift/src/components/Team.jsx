import React from "react";
// import image1 from "../assets/saurabh.jpeg";
// import image2 from "../assets/himanshu.jpeg";

const Team = () => {
  // return (
  //   <div>
  //     <div className="flex justify-center mx-auto py-24  bg-[#090517ff]">
  //       <div>
  //         <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white  text-center">
  //           About Us
  //         </h1>
  //         {/* <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
  //           The Talented People Behind the Scenes of the Organization
  //         </h1> */}
  //       </div>
  //     </div>
  //     <div className="w-full bg-[#090517ff] px-10 pt-10">
  //       <div className="container mx-auto">
  //         <div className="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-around sm:justify-around lg:justify-around gap-4">
  //           <div
  //             className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
  //             data-aos="fade-right"
  //           >
  //             <div className="rounded overflow-hidden shadow-md bg-white">
  //               <div className="absolute -mt-20 w-full flex justify-center">
  //                 <div className="h-32 w-32">
  //                   <img
  //                     src={image1}
  //                     alt
  //                     className="rounded-full object-cover h-full w-full shadow-md"
  //                   />
  //                 </div>
  //               </div>
  //               <div className="px-6 mt-16">
  //                 <div className="font-bold text-3xl text-center pb-1">
  //                   Saurabh Agarwal
  //                 </div>
  //                 <p className="text-gray-800 text-sm text-center">
  //                   Content Engineer and Animator
  //                 </p>
  //                 <p className="text-center text-gray-600 text-base pt-3 font-normal">
  //                   Saurabh is responsible for Animating a static video and Give
  //                   Life to frame. He is responsible for Scripting and ideating
  //                   the content. He manages Sales and marketing.
  //                 </p>
  //                 <div className="w-full flex justify-center pt-5 pb-5">
  //                   <a
  //                     href="https://twitter.com/snipersaurabh"
  //                     className="mx-5"
  //                   >
  //                     <div>
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width={24}
  //                         height={24}
  //                         viewBox="0 0 24 24"
  //                         fill="none"
  //                         stroke="#718096"
  //                         strokeWidth="1.5"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                         className="feather feather-twitter"
  //                       >
  //                         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  //                       </svg>
  //                     </div>
  //                   </a>
  //                   <a
  //                     href="https://www.instagram.com/snipersaurabh/"
  //                     className="mx-5"
  //                   >
  //                     <div>
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width={24}
  //                         height={24}
  //                         viewBox="0 0 24 24"
  //                         fill="none"
  //                         stroke="#718096"
  //                         strokeWidth="1.5"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                         className="feather feather-instagram"
  //                       >
  //                         <rect
  //                           x="2"
  //                           y="2"
  //                           width="20"
  //                           height="20"
  //                           rx="5"
  //                           ry="5"
  //                         />
  //                         <path d="M16 11.37a4 4 0 1 1-1.37-2.87 4 4 0 0 1 1.37 2.87z" />
  //                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  //                       </svg>
  //                     </div>
  //                   </a>
  //                   <a
  //                     href="https://www.youtube.com/@MemoMagnetSA/featured"
  //                     className="mx-5"
  //                   >
  //                     <div>
  //                       <svg
  //                         height="512pt"
  //                         viewBox="0 -77 512.00213 512"
  //                         width="512pt"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
  //                           fill="#f00"
  //                         />
  //                         <path
  //                           d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
  //                           fill="#fff"
  //                         />
  //                       </svg>
  //                     </div>
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div
  //             className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
  //             data-aos="fade-left"
  //           >
  //             <div className="rounded overflow-hidden shadow-md bg-white">
  //               <div className="absolute -mt-20 w-full flex justify-center">
  //                 <div className="h-32 w-32">
  //                   <img
  //                     src={image2}
  //                     alt
  //                     className="rounded-full object-cover h-full w-full shadow-md"
  //                   />
  //                 </div>
  //               </div>
  //               <div className="px-6 mt-16">
  //                 <div className="font-bold text-3xl text-center pb-1">
  //                   Himanshu Bobade
  //                 </div>
  //                 <p className="text-gray-800 text-sm text-center">
  //                   Visual Thinker and Operator
  //                 </p>
  //                 <p className="text-center text-gray-600 text-base pt-3 font-normal">
  //                   Himanshu is responsible for Creating a Story-board for a
  //                   video, Visualising and dumbing it down to the viewers in the
  //                   form of a frame. He manages the operations and create
  //                   Systems.
  //                 </p>
  //                 <div className="w-full flex justify-center pt-5 pb-5">
  //                   <a href="https://x.com/hvnterhimanshu" className="mx-5">
  //                     <div>
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width={24}
  //                         height={24}
  //                         viewBox="0 0 24 24"
  //                         fill="none"
  //                         stroke="#718096"
  //                         strokeWidth="1.5"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                         className="feather feather-twitter"
  //                       >
  //                         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  //                       </svg>
  //                     </div>
  //                   </a>
  //                   <a
  //                     href="https://www.instagram.com/hvnterhimanshu/"
  //                     className="mx-5"
  //                   >
  //                     <div>
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width={24}
  //                         height={24}
  //                         viewBox="0 0 24 24"
  //                         fill="none"
  //                         stroke="#718096"
  //                         strokeWidth="1.5"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                         className="feather feather-instagram"
  //                       >
  //                         <rect
  //                           x="2"
  //                           y="2"
  //                           width="20"
  //                           height="20"
  //                           rx="5"
  //                           ry="5"
  //                         />
  //                         <path d="M16 11.37a4 4 0 1 1-1.37-2.87 4 4 0 0 1 1.37 2.87z" />
  //                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  //                       </svg>
  //                     </div>
  //                   </a>
  //                   <a
  //                     href="https://www.youtube.com/@himanshubobade6960/featured"
  //                     className="mx-5"
  //                   >
  //                     <div>
  //                       <svg
  //                         xmlns="http://www.w3.org/2000/svg"
  //                         width={24}
  //                         height={24}
  //                         viewBox="0 0 24 24"
  //                         fill="none"
  //                         stroke="#718096"
  //                         strokeWidth="1.5"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                         className="feather feather-youtube"
  //                       >
  //                         <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96C23 15.87 23 12 23 12s0-3.87-.46-5.58z" />
  //                         <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  //                       </svg>
  //                     </div>
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Team;
