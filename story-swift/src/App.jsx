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
} from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden ">
      <NavBar />
      <Home />
      <Vsl />
      <CallToAction />
      <Dms />
      <SampleWork />
      {/* <Testimonial/> */}
      <YourWork/>
      <Calendly />
      <Footer />
      <SocialLinks/>
    </div>
  );
}

export default App;
