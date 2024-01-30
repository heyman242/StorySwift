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
} from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Home />
      <Vsl />
      <CallToAction />
      <SampleWork />
      <Dms />
      {/* <Testimonial/> */}
      <Calendly />
      <Footer />
    </div>
  );
}

export default App;
