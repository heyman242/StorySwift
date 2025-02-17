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
  HowItWorks,
  Thumbnails,
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
      <Team1 />
      <Calendly />
      {/* <Faq1 /> */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
