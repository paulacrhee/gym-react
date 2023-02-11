import React from "react";

// import components
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative">
      <div className="container mx-auto">
        <div
          className=" min-h-[500px] rounded-[50px]"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px]">
            <div className="text-center mb-7 lg:mb-[70px]">
              <h2
                className="h2 mb-3 lg:mb-[18px] dark:text-white"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Testimonials
              </h2>
              <p
                className="max-w-[398px] mx-auto  dark:text-gray-300"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
