import React from "react";
import {
  Calendly,
  CallToAction,
  Footer,
  Home,
  NavBar,
  SampleWork,
  Testimonial,
  Results,
  Vsl,
  Dms,
  YourWork,
  SocialLinks,
  NewTestimonials,
  HowItWorks,
  Team,
  Thumbnails,
  Offer,
} from "./index";

const HomeLayout = () => {
  return (
    <div className="overflow-x-hidden bg-[#090517ff] ">
      <NavBar />
      <Home />
      <Vsl />
      <br />
      <br />
      <CallToAction />
      <Results />
      <Dms />
      <Offer />
      <CallToAction />
      <SampleWork />
      <br />
      <br />
      <HowItWorks />
      {/* <Testimonial /> */}
      {/* <YourWork /> */}
      <Team />
      <Calendly />
      {/* <NewTestimonials /> */}
      <Footer />
      {/* <Thumbnails /> */}
      {/* <SocialLinks /> */}
    </div>
  );
};

export default HomeLayout;
