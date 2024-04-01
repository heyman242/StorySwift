"use client";
import {
  Calendly,
  CallToAction,
  Footer,
  Home,
  NavBar,
  SampleWork,
  Testimonial,
  Vsl,
  Dms,
  YourWork,
  SocialLinks,
  NewTestimonials,
  HowItWorks,
  Team,
  Thumbnails,
  Offer,
} from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 200,
    });
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#090517ff] ">
      <NavBar />
      <Home />
      <Vsl />
      <br />
      <br />
      <CallToAction />
      <Dms />
      <Offer />
      <CallToAction />
      <SampleWork />
      <HowItWorks />
      {/* <Testimonial /> */}
      {/* <YourWork /> */}
      <Team />
      <Calendly />
      {/* <NewTestimonials /> */}
      <Footer />
      {/* <Thumbnails /> */}
      <SocialLinks />
    </div>
  );
}

export default App;
