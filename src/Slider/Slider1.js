import React from "react";
import MyVideo from "../Asset/img/slider3.mp4";
import { BiSolidDownload } from "react-icons/bi";
import { sliderbtn, sliderResume, sliderheader } from "../content_option";
import { Link } from "react-router-dom";
const Slider1 = () => {
  return (
    <>
      {/* <div className={`${styles.overlay}`}></div> */}
      <div>
        <video loop muted autoPlay className={`object-cover w-full  h-[600px]		`}>
          <source src={MyVideo} type="video/mp4" className="mt-6" />
        </video>
      </div>
      <div
        className={`text-white absolute inset-x-16	 inset-0 top-24 flex flex-col justify-center items-center	`}
      >
        <div
          className="slidertext "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h3 className="font-semibold text-6xl text-center text-white font-serif ">
            {sliderheader.text}
          </h3>
          <p className="lg:font-medium lg:text-md text-center text-white font-serif mt-3 md:text-lg		">
            {sliderheader.peratext1}
            <br></br>
            <span className="text-[#3CC84F] font-extrabold md:font-normal mx-1">
              {sliderheader.peraspan}
            </span>
            {/* {sliderheader.paratest2} */}
          </p>
        </div>
        {/* <div class="grid grid-cols-7 md:grid-cols-4 gap-4"> */}
        <div className="button flex place-content-center lg:mt-3 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-7 gap-1 lg:gap-1 ">
          {sliderbtn.map((btns, index) => {
            return (
              <>
                <img
                  src={btns.icon}
                  key={index}
                  alt=" btn "
                  className=" w-12 h-12 mt-2 border-solid border-2 border-[#3CC84F] rounded-xl	p-2 bg-black mr-3 shadow-2xl "
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                />
              </>
            );
          })}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex justify-center"
        >
          <Link to={sliderResume} download="Shivani CV " target="_Blank">
            <button className=" flex mt-10  py-3 px-8 text-md font-bold text-center  text-black rounded-lg bg-[#3CC84F] shadow-2xl	 shadow-gray-700">
              Get Resume{" "}
              <span className="mt-1 ml-3">
                <BiSolidDownload />
              </span>
            </button>
          </Link>
        </div>
      </div>{" "}
    </>
  );
};

export default Slider1;
