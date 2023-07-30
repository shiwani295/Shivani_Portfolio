import React from "react";
import { Link } from "react-router-dom";
import styles from "../page/Portfolio.module.css";
import { project } from "../content_option";
import Discussproject from "./Discussproject";

const Portfolio = () => {
  return (
    <>
      <div className="py-8  mx-auto max-w-screen-lg relative">
        <h2 className="z-auto inset-3 absolute mt-6 text-6xl tracking-tight  font-extrabold text-center text-[#302f2fbd]">
          <span className="mr-3">{project.title}</span>
        </h2>
        <h2 className="z-0 inset-4 absolute mt-6  text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-dark">
          <span className="text-[#3CC84F] mr-2">My</span>
          <span className="text-white">Work</span>
        </h2>
        <p className="mt-20 mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          {project.projectparagraph}
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-8>
 mt-10 mb-10"
        >
          {/* /////////////////////////////////// first one /////////////////////////////////////// */}
          <div
            class=" flex items-center justify-center   shadow-xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="bg-[#3CC84F] group">
              <img
                src={project.projectimg1}
                alt=" E-commerce Project"
                className={`group-hover:opacity-0`}
              />
              <div
                className={`transition-all transform
                              translate-y-4 opacity-0
                              group-hover:opacity-100
                              group-hover:translate-y-0 relative  `}
              >
                <div class="absolute inset-x-32  bottom-16 h-16">
                  <p
                    class={`text-2xl text-black font-bold ${styles.projectName}`}
                  >
                    Expense tracker Project
                  </p>

                  <Link
                    class="px-2 py-1 mr-3 text-sm text-black border font-bold border-black"
                    to={
                      "https://expense-tracker-redux-sbj1.vercel.app/my-expense"
                    }
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="px-8 py-1 text-sm font-bold text-black border border-black"
                    to={"https://github.com/shiwani295/expense-tracker-redux"}
                    target="_blank"
                  >
                    Git
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /////////////////////////////////// second one /////////////////////////////////////// */}
          <div
            class=" flex items-center justify-center shadow-xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="bg-[#3CC84F] group">
              <img
                src={project.projectimg2}
                alt=" Mail Box"
                className={`group-hover:opacity-0`}
              />
              <div
                className={`transition-all transform
                              translate-y-4 opacity-0
                              group-hover:opacity-100
                              group-hover:translate-y-0 relative  `}
              >
                <div class="absolute inset-x-32  bottom-16 h-16">
                  <p
                    class={`text-2xl text-black font-bold ${styles.projectName}`}
                  >
                    Mail Box Project
                  </p>

                  <Link
                    class="px-2 py-1 mr-3  text-sm text-black border border-black font-bold"
                    to={"https://mail-box-redux.vercel.app/"}
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="px-8 py-1 text-sm font-bold text-black border border-black"
                    to={"https://github.com/shiwani295/MailBox_Redux"}
                    target="_blank"
                  >
                    Git
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /////////////////////////////////// third one /////////////////////////////////////// */}
          <div
            class=" flex items-center justify-center shadow-xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="bg-[#3CC84F] group">
              <img
                src={project.projectimg3}
                alt=" E-commerce Project"
                className={`group-hover:opacity-0`}
              />
              <div
                className={`transition-all transform
                              translate-y-4 opacity-0
                              group-hover:opacity-100
                              group-hover:translate-y-0 relative  `}
              >
                <div class="absolute inset-x-32  bottom-[100px] h-16">
                  <p
                    class={`text-2xl text-black font-bold ${styles.projectName}`}
                  >
                    E-commerce App Project{" "}
                  </p>

                  <Link
                    class="px-2 py-1  text-sm text-black border border-black font-bold mr-3"
                    to={"https://e-commercewebsite25.netlify.app/login"}
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className=" px-8 py-1 text-sm font-bold text-black border border-black"
                    to={"https://github.com/shiwani295/EcommerceWebsite"}
                    target="_blank"
                  >
                    Git
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /////////////////////////////////// fourth one /////////////////////////////////////// */}
          <div
            class="flex shadow-xl "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="bg-[#3CC84F]  group">
              <img
                src={project.projectimg4}
                alt="Restaurant App  Project"
                className={`group-hover:opacity-0`}
              />
              <div
                className={`transition-all transform
                              translate-y-4 opacity-0
                              group-hover:opacity-100
                              group-hover:translate-y-0 relative  `}
              >
                <div class="absolute inset-x-32 bottom-[100px] h-16">
                  <p
                    class={`text-2xl text-black font-bold ${styles.projectName}`}
                  >
                    Restaurant App Project
                  </p>

                  <Link
                    className="px-2 py-1 mr-3 text-sm text-black border border-black font-bold"
                    to={"https://restaurant-app-delta-sandy.vercel.app/"}
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="px-8 py-1 text-sm font-bold text-black border border-black"
                    to={"https://github.com/shiwani295/foodApp"}
                    target="_blank"
                  >
                    Git
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Discussproject />
    </>
  );
};

export default Portfolio;
