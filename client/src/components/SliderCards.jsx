import React from "react";
import Card from "./Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";


const SliderCards = ({ title, data }) => {
  return (
    <div className="mt-[100px] slider-cards">
      <div className="container">
        <div className="slider-cards-wraper">
          <h2 class="text-white py-10 pr-0 pl-10 text-3xl font-medium">{title}</h2>
          <Swiper
            className="mySwiper py-0 px-10"
            modules={[Navigation]}
            navigation={true}
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              350: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {
              data.length > 0 ? (
                data.map((item) => (
                  <SwiperSlide>
                    <Card data={item}/>
                  </SwiperSlide>
                ))
              ):null
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderCards;
