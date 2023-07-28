import React from "react";
import { why_hire, why_hire_img } from "../content_option";

const Why_hired = () => {
  return (
    <>
      <div>
        <h2 className=" text-center mt-20  text-4xl font-bold">
          <span className="text-[#3CC84F] ">{why_hire.spantitle}</span>
          <span className="text-white">{why_hire.title}</span>
        </h2>
        <p className="text-center text-white">{why_hire.subtitle}</p>
      </div>

      <div className="max-w-[1200px] grid lg:grid-cols-4 md:grid-cols-4 lg:h-80 md:h-60 sm:h-30 p-4 mx-auto relative mt-10 gap-5 ">
        <div
          class="block max-w-sm h-60 pl-9 pt-6 bg-white  border border-gray-200 rounded-lg shadow-xl "
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img src={why_hire_img.cart} alt="" className="w-24 h-24" />
          <h5 class="text-2xl font-bold text-black mt-5 ">
            {why_hire.cart1title}
          </h5>
        </div>
        {/* 2nd */}
        <div
          class="block max-w-sm h-60 pl-9 pt-6  bg-white  border border-gray-200 rounded-lg shadow-xl "
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img src={why_hire_img.picuploadsrc} alt="" className="w-24 h-24" />
          <h5 class="text-2xl font-bold text-black mt-5 ">
            {why_hire.cart2title}
          </h5>
        </div>
        {/* 3rd */}
        <div
          class="block max-w-sm h-60 pl-9 pt-6  bg-white  border border-gray-200 rounded-lg shadow-xl"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img src={why_hire_img.emailsrc} alt="" className="w-24 h-24" />
          <h5 class="text-2xl font-bold text-black mt-5 ">
            {why_hire.cart3title}
          </h5>
        </div>
        {/* 4th */}
        <div
          class="block max-w-sm h-60 pl-9 pt-6  bg-white  border border-gray-200 rounded-lg shadow-xl "
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-easing="linear"
        >
          <img src={why_hire_img.fileuploadsrc} alt="" className="w-24 h-24" />
          <h5 class="text-2xl font-bold text-black mt-5 ">
            {why_hire.cart4title}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Why_hired;
