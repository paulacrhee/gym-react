import React from "react";

// import data
import { courses } from "../data";
// import icons
import { BsStarFill, BsStarHalf, BsArrowRight } from "react-icons/bs";

const Courses = () => {
  return (
    <section
      id="classes"
      className="bg-section min-h-[428px lg:pb-[100px] mt-[100px] lg:mt-[130px]"
    >
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center mb-30 lg:mb-32">
          <h2
            className="h2 mb-3 lg:mb-[18px] dark:text-white"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Popular <span>Courses</span>
          </h2>
          <p
            className="max-w-[480px] mx-auto dark:text-gray-300"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Practice anywhere, anytime. Explore a new way to exercise and learn
            more about yourself. We are providing the best.
          </p>
        </div>
        {/* course list */}
        <div className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 mt-16 lg:mb-14">
          {courses.map((item, index) => {
            const { image, title, desc, link, delay } = item;
            return (
              <div
                className="w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition dark:bg-gray-300"
                data-aos="fade-up"
                data-aos-delay={delay}
                key={index}
              >
                <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                  <img src={image} alt="" />
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                    {title}
                  </h4>
                  <p>{desc}</p>
                </div>
                <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0">
                  {/* stars */}
                  <div className="flex gap-x-2 text-third">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <button
                    className="btn btn-quaternary flex items-center gap-x-[20px] group"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {link}
                    <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
