import React, { useRef, useState } from "react";
import styles from "../page/Contact.module.css";

const Contact = () => {
  const InputEmailref = useRef();
  const InputSubjectref = useRef();
  const InputTextarearef = useRef();
  const [message, setMessage] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    const data = {
      id: Math.random(),
      email: InputEmailref.current.value,
      sub: InputSubjectref.current.value,
      textarea: InputTextarearef.current.value,
    };
    console.log(data);
    let url =
      "https://portfoliocontactus-b4258-default-rtdb.firebaseio.com/contactdata.json";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) throw Error(`Network response was not ok`);
        else {
          setMessage(
            "Thank you for Submitting form I will connect with you soon..."
          );
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
      })

      .catch(() => console.log("error"));
  };
  return (
    <>
      <div className="py-8 md:py-10 lg:py-16 px-4 mx-auto max-w-screen-md relative">
        <h2 className="z-auto inset-3 absolute mt-6 text-6xl tracking-tight  font-extrabold text-center text-[#302f2fbd]">
          <span className="mr-3">CONTACT</span>US
        </h2>
        <h2 className="z-0 inset-4 absolute mt-6  text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-dark">
          <span className=" text-[#3CC84F] mr-2">Contact</span>
          <span className="text-white">Us</span>
        </h2>

        <p className="mt-20 mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue?Are you want to Discuss your project ? Need
          details about me? Let me know.
        </p>
        {message && (
          <div className="mb-6">
            <p className="border border-[green] p-3 text-sm font-medium text-[green]">
              {message}
            </p>
          </div>
        )}
        <form
          onSubmit={formHandler}
          className={`lg:space-y-8 p-5 rounded-lg ${styles.contactbg}`}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              ref={InputEmailref}
              className="shadow-sm border border-gray-300 bg-[#f1f1f1] text-sm rounded-lg block w-full p-2.5   "
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-black"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              ref={InputSubjectref}
              className="shadow-sm  border border-gray-300 bg-[#f1f1f1] text-sm rounded-lg  block w-full p-2.5 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              ref={InputTextarearef}
              className="shadow-sm  border border-gray-300  bg-[#f1f1f1] text-sm rounded-lg  block w-full p-2.5 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-8 text-md font-bold text-center text-white rounded-lg bg-[#3CC84F] cursor-pointer "
            style={{ marginTop: "20px" }}
          >
            Send message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
