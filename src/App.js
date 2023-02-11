import React from "react";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Video from "./components/Video";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 2000,
    offset: 0,
  });
  return (
    <div className="overflow-hidden dark:bg-gray-900">
      <Hero />
      <Video />
      <About />
      <Features />
      <Courses />
      <Pricing />
      <Testimonials />
      <Contact />
      <CtaSection />
      <Footer />
      <Modal />
    </div>
  );
};

export default App;
