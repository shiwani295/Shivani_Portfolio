import React from "react";
import { footer } from "../content_option";
import { socialprofils } from "../content_option";
import { Link } from "react-router-dom";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  let social = [
    {
      icon: (
        <FiGithub
          className="mr-2 w-[30px] h-[30px] p-1 mt-5 bg-white-200 text-black shadow-2xl "
          target="_blank"
        />
      ),
      link: `${socialprofils.github}`,
    },
    {
      icon: (
        <FiLinkedin
          className="w-[30px] h-[30px] p-1 mt-5 bg-white-200 text-black shadow-2xl "
          target="_blank"
        />
      ),
      link: `${socialprofils.linkedin}`,
    },
    {
      icon: (
        <FiInstagram
          className="mx-2 w-[30px] h-[30px]  p-1 mt-5 bg-white-200 text-black shadow-2xl "
          target="_blank"
        />
      ),
      link: `${socialprofils.instagram} `,
    },
  ];
  return (
    <footer className=" bg-white w-full border-t-2 shadow-xl">
      <div className="w-full max-w-screen-xl pl-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-2xl font-bold">
            Get connected with us on social networks:
          </div>
          <ul className="flex flex-wrap items-center  text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 mr-5">
            {social.map((icons, index) => {
              return (
                <li>
                  <Link
                    to={icons.link}
                    key={index}
                    className=" mr-4 md:mr-6 cursor-pointer "
                    target="_blank"
                  >
                    {icons.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <span className="block text-sm font-serif pb-3  dark:text-black">
          {footer.reserved}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
//    box-shadow: inset 0px 5px 20px #5dcec5;
