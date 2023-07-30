import React from "react";
import { Link } from "react-router-dom";
import style from "../page/About.module.css";

const Discussproject = () => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 ${style.bgimg}`}
    >
      <div class="p-4 flex items-center justify-center text-white text-4xl font-bold">
        Looking a Developer for your project let's discuss on ☕
      </div>
      <div class="p-4  flex items-center justify-center">
        <Link to={"/contact"}>
          <button className=" py-3 px-8 text-md font-bold text-center text-white rounded-lg bg-[#3CC84F] shadow-2xl	 shadow-gray-700">
            Let's Discuss
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Discussproject;
