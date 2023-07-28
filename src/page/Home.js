import React from "react";
import Afterarrow from "../Layout/Afterarrow";
import Skillhomepage from "../Layout/Skillhomepage";
import Why_hired from "../Layout/Why_hired";
import Carousel from "../Layout/Carousel";
import Slider1 from "../Slider/Slider1";

const Home = () => {
  return (
    <>
      <Slider1 />
      <Afterarrow />
      <Why_hired />
      <Carousel />
      <Skillhomepage />
    </>
  );
};

export default Home;
