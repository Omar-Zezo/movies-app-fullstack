import { Facebook, Twitter, Instagram } from "../images/svg";
import Slide from "./Slide";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Slider = ({ data }) => {
  
  return (
    <>
      <div className="h-[750px] slider">
        <div className="w-full h-full slider-wraper">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full h-full"
          >
            {data.length > 0
              ? data.map((trend) => (
                  <SwiperSlide key={trend.id}>
                    <Slide data={trend}/>
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </div>
        {/* social icons */}
        <div className="social max-xl:hidden">
          <a href="">
            <img className="size-9" src={Facebook} alt="facebook" />
          </a>
          <a href="">
            <img className="size-9" src={Twitter} alt="twitter" />
          </a>
          <a href="">
            <img className="size-9" src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Slider;
