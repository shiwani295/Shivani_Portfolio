import React from "react";
import { Afterarrowcontent } from "../content_option";
import styles from "../Layout/Afterarrow.module.css";
const Afterarrow = () => {
  return (
    <div
      className={`grid lg:grid-cols-2 md:grid-cols-1 w-full p-10 space-y-3 mx-auto relative mt-4 gap-5 ${styles.Afterarrowbg}`}
    >
      <div className="flex justify-center items-center">
        <img
          src={Afterarrowcontent.part1}
          alt="afterarrow"
          className="lg:w-1/2  md:w-4/5"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
      </div>
      <div data-aos="fade-left" data-aos-duration="2000">
        <p className="font-bold text-4xl pt-10 text-gray-800">
          {Afterarrowcontent.part2uppertext}
          <span className="text-[#3CC84F]">
            {Afterarrowcontent.part2uppertextspan}
          </span>
        </p>
        <p className="text-lg font-serif mt-3">
          {Afterarrowcontent.part2lowercontent}
        </p>
      </div>
    </div>
  );
};

export default Afterarrow;
//#fb923c
