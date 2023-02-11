import React from "react";

// import about data
import { aboutData } from "../data";

const About = () => {
  // destructure about
  const { image, title, subtitle, span } = aboutData;
  return (
    <section
      id="features"
      className="bg-section min-h-[428px]  lg:pb-[150px] mt-[120px] lg:mt-[130px]"
    >
      <div className="container mx-auto">
        <div className=" rounded-[50px] min-h-[560px] px-10 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0">
          {/* image */}
          <div className="flex-1" data-aos="zoom-in-left">
            <img src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 xl:pr-12">
            <h2
              className=" h2 xl:max-w-[700px] mb-6 xl:mb-12 dark:text-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {title}
              <span className="color-primary">{span}</span>
            </h2>
            <p
              className="max-w-[474px] mx-auto xl:mx-0 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-primary my-8 xl:mb-0"
              data-aos="fade-left"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
