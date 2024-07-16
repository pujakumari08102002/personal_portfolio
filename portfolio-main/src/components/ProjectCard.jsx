import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { projectDetails } from "../data/projects";
import { GoArrowUpRight } from "react-icons/go";
import React from 'react';

const Card = () => {
  return (
    <div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3500,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full"
        >
          {
            projectDetails.map((data, index) => {
              return (
                <SwiperSlide key={index} className="rounded-lg overflow-hidden">
                  <div className="rounded-lg lg:w-[350px] overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
                    <img src={data.image} className="lg:w-[350px]" alt={data.title} />
                    <div className="dark:bg-richblack-800 bg-richblack-5 min-h-[260px] py-3 px-3 lg:px-7 space-y-3 overflow-hidden">
                      <p className="text-2xl font-bold font-sans">{data.title}</p>
                      <div className="flex gap-7 underline">
                        <a href={data.git} target="_blank" rel="noopener noreferrer" className="flex items-center">GitHub <GoArrowUpRight /> </a>
                        <a href={data.live} target="_blank" rel="noopener noreferrer" className="flex items-center">Live <GoArrowUpRight /></a>
                      </div>
                      <p className="text-base font-thin overflow-hidden">{data.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Card;
