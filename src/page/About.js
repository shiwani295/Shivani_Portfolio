import React from "react";
import { sliderheader } from "../content_option";
import { sliderResume } from "../content_option";
import { Link } from "react-router-dom";
import Discussproject from "./Discussproject";
import Progressbar from "./Progressbar";

const About = () => {
  return (
    <>
      <div className="py-8 md:py-10 lg:py-16 px-4 mx-auto  relative">
        <h2 className="z-auto inset-3 absolute mt-6 text-6xl tracking-tight  font-extrabold text-center text-[#302f2fbd]">
          <span className="mr-3">ABOUT US</span>
        </h2>
        <h2 className="z-0 inset-4 absolute mt-6  text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-dark">
          <span className="text-[#3CC84F] mr-2">About</span>
          <span className="text-white">Me</span>
        </h2>
        <div
          className={`grid lg:grid-cols-1  mx-auto  relative top-24 md:top-20  gap-5`}
        >
          <div className="mx-4  mb-10">
            <div
              className="slidertext mt-10 "
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <h3 className="font-semibold text-3xl text-white font-serif ">
                A Bit About My Self
              </h3>
              <p className="lg:font-medium text-md text-white font-serif mt-3 md:text-lg		">
                {sliderheader.peratext1}
                <span className="text-[#3CC84F] font-extrabold md:font-normal mx-1">
                  {sliderheader.peraspan}
                </span>
                <span className="text-white"> {sliderheader.paratest2}</span>
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <Link to={sliderResume} download="Shivani CV ">
                <button className=" mt-10  py-3 px-8 text-md font-bold text-center text-white rounded-lg bg-[#3CC84F] shadow-2xl	 shadow-gray-700">
                  Hire Me
                </button>
              </Link>
              <Link to={"/contact"} className="ml-3">
                <button className=" mt-10 py-3 px-8 text-md font-bold text-center text-white rounded-lg bg-[#3CC84F] shadow-2xl	 shadow-gray-700">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className=" text-center mt-[40px]  text-4xl font-bold">
            <span className="text-[#3CC84F] mr-3">My</span>
            <span className="text-white">Skills</span>
          </h2>
          <p className="text-center dark:text-gray-400 mt-10">
            I am a Front-end Developer with strong experience in building web
            applications with strong skills
          </p>
          <Progressbar />
        </div>
      </div>
      <Discussproject />
    </>
  );
};

export default About;
