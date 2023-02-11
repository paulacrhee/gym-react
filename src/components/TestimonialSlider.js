import React from "react";

// import testimonials data
import { testimonialsData } from "../data";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

// import required modules
import { Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      autoplay={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[250px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
          >
            {/* avatar image */}
            <img
              className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={image}
              alt=""
            />
            {/* text */}
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>

              <p className="max-w-[340px]">{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
