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
  LongForm,
  Faq1,
  Team1,
  TrustedBy,
} from "./index";

const HomeLayout = () => {
  return (
    <div className="overflow-x-hidden bg-[#090517ff] ">
      <NavBar />
      <Home />
      <Vsl />
      <br />
      <CallToAction variant="vsl" />
      <br />
      <TrustedBy />
      <Results />
      <CallToAction variant="results" />
      {/*<Dms />*/}
      {/* <Offer /> */}
      <LongForm />
      <CallToAction variant="longform" />
      <Thumbnails />
      <CallToAction variant="thumbnail" />
      <SampleWork />
      <CallToAction variant="samplework" />
      <br />
      <br />
      <HowItWorks />
      {/* <Testimonial /> */}
      {/* <YourWork /> */}
      {/* <Team /> */}
      <Team1 />
      {/* <Faq1 /> */}
      <Calendly />
      {/* <NewTestimonials /> */}
      <Footer />

      {/* <SocialLinks /> */}
    </div>
  );
};

export default HomeLayout;
