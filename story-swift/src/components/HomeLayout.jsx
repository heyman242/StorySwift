import React from "react";
import {
  Calendly,
  CallToAction,
  Footer,
  Home,
  NavBar,
  SampleWork,
  Results,
  Vsl,
  HowItWorks,
  Thumbnails,
  LongForm,
  Team1,
  TrustedBy,
} from "./index";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-[#090517ff] relative">
      <NavBar />
      <main className="w-full pt-20">
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
        <Team1 />
        <Calendly />
        <Footer />
      </main>
    </div>
  );
};

export default HomeLayout;
