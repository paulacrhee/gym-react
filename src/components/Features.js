import React from "react";

// import data
import { features } from "../data";

const Features = () => {
  return (
    <section className="section-sm lg:section-lg pb-20">
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px] ">
        <div
          className="flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px] dark:text-gray-300"
          data-aos="fade-up"
        >
          {features.map((item, index) => {
            const { title, desc, unit } = item;
            return (
              <div className="w-[45%]" key={index}>
                <span className="h2 mb-2 lg:mb-4 color-primary">{unit}+</span>
                <div className="text-xl text-heading font-bold mb-3">
                  {title}
                </div>
                <p className="max-w-[240px]">{desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex-1 -order-1 lg:order-none">
          <div className="flex flex-col justify-center h-full lg:pl-[100px]">
            <h2
              className="h2 mb-12 max-w-[295px] md:max-w-none dark:text-white"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Enjoy a Personalized Workout Day With Us
            </h2>

            <div
              className="text-lg font-bold mb-6 text-heading"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              Tom Smith
              <span className="text-base text-paragraph font-normal">
                /Founder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
