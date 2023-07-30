import React from "react";
import { skillhomepagecontent, skillhomepage_img } from "../content_option";
const Skillhomepage = () => {
  const skillhomepageimg_array = [
    {
      gmailimg: <img src={skillhomepage_img.gmail} alt="gmail" />,
    },
    { ecomimg: <img src={skillhomepage_img.ecommerce} alt="ecommerce" /> },
    { foodimg: <img src={skillhomepage_img.food} alt="food" /> },
    { firebaseimg: <img src={skillhomepage_img.firebase} alt="firebase" /> },
  ];
  return (
    <>
      <div className="max-w-full grid lg:grid-cols-2 md:grid-cols-1 shadow-lg p-4 drop-shadow-lg mx-auto relative mt-10 mb-10 gap-5 bg-gradient-to-r from-[#3CC84F] to-[#6f9574] ">
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="text-2xl font-medium text-white">
            {skillhomepagecontent.text1} {skillhomepagecontent.text2}
          </p>
        </div>
        <div
          className="flex justify-center items-center "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {skillhomepageimg_array.map((images) => {
            return (
              <div className="border-1 rounded bg-white	w-12 mx-1 p-2  shadow-lg shadow-slate-800">
                {images.gmailimg} {images.ecomimg} {images.foodimg}{" "}
                {images.firebaseimg}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skillhomepage;
