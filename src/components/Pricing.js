import React from "react";

// import data
import { pricing } from "../data";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-section min-h-[428px] lg:pb-[100px] ">
      <div className="container mx-auto">
        <div className="text-center mb-7 lg:mb-[70px]">
          <h2
            className="h2 mb-3 lg:mb-[18px] dark:text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Pick a <span>Pricing</span> Plan
          </h2>
          <p
            className="max-w-[398px] mx-auto  dark:text-gray-300"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Pick a pricing plan and get started your journey with us for build
            your body and mind
          </p>
        </div>
        {/* pricing cards */}
        <div className="flex flex-col mx-auto items-center gap-y-5 lg:flex-row lg:gap-x-[33px]">
          {pricing.map((card, currentIndex) => {
            const { title, price, list, buttonText, delay } = card;
            return (
              <div
                className="border rounded-md  w-full max-w-[368px] min-h-[668px] h-full bg-white cursor-pointer relative dark:bg-gray-200"
                key={currentIndex}
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay={delay}
              >
                {/* card top */}
                <div
                  className={
                    " text-center pb-[34px] pt-[70px] border-b border-stroke-3 transition"
                  }
                >
                  <div className="text-[24px] font-medium mb-[10px]">
                    {title}
                  </div>
                  <div className="text-[34px] font-semibold">
                    <span>{price}</span>
                  </div>
                </div>
                <div className="px-[30px] pt-[18px] pb-[30px]">
                  <p className="text-center mb-6 text-sm">
                    Discover your favorite class!
                  </p>
                  {/* card list */}
                  <ul className="flex flex-col gap-3 mb-10 ">
                    {list.map((item, index) => {
                      const { icon, name } = item;
                      return (
                        <li
                          className="p-4 rounded-md flex items-center gap-4"
                          key={index}
                        >
                          <div className="flex justify-center items-center w-3 h-3 text-2xl text-primary-300 rounded-full">
                            {icon}
                          </div>
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                  {/* btn */}
                  <div className="absolute bottom-[30px] left-0 right-0 w-full px-[30px]">
                    <button className="btn btn-primary flex items-center gap-x-[20px] group">
                      {buttonText}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
