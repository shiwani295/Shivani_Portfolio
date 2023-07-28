import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../content_option";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div>
        <h2 className=" text-center mb-12 mt-6 text-4xl font-bold">
          <span className="text-[#3CC84F] mr-3">Clients</span>
          {/* <span>
            <hr class="h-[3px] w-20 relative lg:left-[630px] md:left-0 my-3 bg-gray-200 border-0 dark:bg-gray-700" />
          </span> */}
        </h2>
      </div>
      <div className="lg:max-w-screen-lg md:max-w-screen-md  mx-auto relative gap-5 drop-shadow-md bg-white rounded-lg ">
        <Slider {...settings} className="h-[300px] ">
          {carouselData.map((data, index) => {
            return (
              <div className={`drop-shadow-md p-10`} key={index}>
                <div className="flex pl-6 pt-8 ">
                  <img
                    src={data.client}
                    alt="sharpner"
                    width={"40px"}
                    height={"40px"}
                    className={`mr-5  rounded-lg p-1 bg-gray-100`}
                  />
                  <div>
                    <h3 className={`text-xl font-bold`}>{data.h3title}</h3>
                    <span className={`text-sm`}>{data.spandata}</span>
                  </div>
                </div>
                <h3 className={`mt-3 pl-6 font-semibold`}>
                  {data.aboutheading}
                </h3>
                <p className={`pl-6 pb-3 font-serif`}>{data.aboutparagraph}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
