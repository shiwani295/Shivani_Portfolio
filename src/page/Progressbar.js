import React from "react";
import { aboutskill } from "../content_option";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const Progressbar = () => {
  const react = "80%";
  const Tailwindcss = "75%";
  const redux = "80%";
  const bootstrap = "85%";
  const javascript = "85%";
  const firebase = "50%";
  const git = "50%";
  const html = "95%";
  const css = "80%";
  const nextjs = "10%";
  return (
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 rounded-2xl bg-white mt-10 pl-10 py-10 "
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div
        class="p-4 flex items-center justify-center"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <CircularProgressbarWithChildren
          value={80}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.react}
            alt="react"
          />

          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{react}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      {/* ////////2 */}
      <div
        class="p-4 flex items-center justify-center"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <CircularProgressbarWithChildren
          value={75}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.tw}
            alt="tailwindcss"
          />
          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{Tailwindcss}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      {/* 3//////////////////// */}
      <div
        class="p-4 flex items-center justify-center"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <CircularProgressbarWithChildren
          value={80}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.redux}
            alt="redux"
          />
          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{redux}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      {/* 4//////////////////// */}
      <div
        class="p-4  flex items-center justify-center"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <CircularProgressbarWithChildren
          value={85}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.js}
            alt="javascript"
          />
          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{javascript}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      {/* 5////////////// */}
      <div
        class="p-4 flex items-center justify-center"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <CircularProgressbarWithChildren
          value={85}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.bs4}
            alt="boostrap"
          />
          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{bootstrap}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      {/* 6//////////////////////// */}
      <div
        class="p-4"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <CircularProgressbarWithChildren
          value={70}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.firebase}
            alt="Firebase"
          />
          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{firebase}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      {/* 7///////////////// */}
      <div
        class="p-4  flex items-center justify-center"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <CircularProgressbarWithChildren
          value={50}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.git}
            alt="Git"
          />
          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{git}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      {/* 8//////////////// */}
      <div
        class="p-4  flex items-center justify-center"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <CircularProgressbarWithChildren
          value={95}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.html5}
            alt="HTML"
          />
          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{html}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      {/* 9   /////// */}
      <div
        class="p-4  flex items-center justify-center"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <CircularProgressbarWithChildren
          value={95}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.cs3}
            alt="Css"
          />
          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{css}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div
        class="p-4  flex items-center justify-center"
        style={{ width: 150, height: 150 }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <CircularProgressbarWithChildren
          value={20}
          styles={buildStyles({
            pathColor: "#3CC84F",
            // trailColor: "#fff",
          })}
        >
          <img
            style={{ width: 40, marginTop: -2 }}
            src={aboutskill.next}
            alt="Nextjs"
          />
          <div style={{ fontSize: 20, marginTop: 4 }}>
            <strong>{nextjs}New</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default Progressbar;
{
  /* <div style={{position: 'relative', width: '100px', height: '100px'}}>
  <img style={{position: 'absolute', width: '100%', top: '10px'}} src="http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/3dDoge.gif" />
  <div style={{position: 'absolute'}}>
    <CircularProgressbar
      percentage={20}
      textForPercentage={null}
    />
  </div>
</div> */
}
