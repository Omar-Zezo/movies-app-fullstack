import React from "react";
import { Link } from "react-router-dom";
import {Play, Plus, Facebook, Twitter, Instagram} from "../images/svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Slider = ({ data, internal }) => {
  return (
    <>
      <div className="h-[700px] slider">
        <div className="w-full h-full slider-wraper">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full h-full"
          >
            {data.length > 0
              ? data.map((trend) => (
                  <SwiperSlide key={trend.id}>
                    <div className="w-full h-full relative" style={{
                      background: `url('https://image.tmdb.org/t/p/w1280${trend.backdrop_path}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                      }}>
                      <div className="w-full h-full absolute top-0 left-0 z-10 block bg-bgOverlay">
                        <div className="w-full absolute top-[70%] translate-y-[-70%] text-slate-100 pl-8">
                          <h2 className="w-[85%] text-3xl xl:text-5xl tracking-wider uppercase m-0 p-0">{trend.title}</h2>
                          <p className="text-base xl:leading-6 leading-5 xl:w-[50%] w-[90%] font-medium text-slate-100 mt-10">{trend.overview}</p>
                          <div>
                             <Link className="bg-mainColor btn" to= {`movie/${trend.id}`}>
                              <img src={Play} alt="play" className="w-5 mr-2"/>
                               {internal ? "play":"watch"}
                              </Link>
                              <Link to="" className="bg-black btn">
                              <img src={Plus} alt="plus" className="w-5 mr-2"/>
                              add to list
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
        {/* switch buttons */}
        <div className="switch">
          <i className="fas fa-circle active" data-switch="block-1"></i>
          <i className="fas fa-circle" data-switch="block-3"></i>
          <i className="fas fa-circle" data-switch="block-2"></i>
        </div>
      </div>
    </>
  );
};

export default Slider;
