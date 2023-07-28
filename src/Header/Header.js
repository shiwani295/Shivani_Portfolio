import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about" },
    { name: "Project", link: "/my-portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-black">
        <div className=" p-1 flex flex-wrap items-center justify-between">
          <NavLink to="/" className="flex items-center ml-4">
            <div className="flex ">
              <span className="text-2xl	font-extrabold	text-white">Shivani</span>
              <span className="mt-3.5 ml-1 text-[#3CC84F]">
                <GoDotFill />
              </span>
            </div>
          </NavLink>

          <div onClick={() => setOpen(!open)} className="md:hidden">
            <span className="">
              {open ? (
                <AiOutlineClose className="text-3xl text-[#57ccc3]" />
              ) : (
                <AiOutlineMenu className="text-3xl text-[#57ccc3]" />
              )}
            </span>
          </div>
          <div className={`w-full md:flex md:w-auto md:static `}>
            <ul
              className={`
            font-medium md:flex md:item-center bg-[#171b2a] text-white 
            ${open ? `block` : `hidden`}
            `}
            >
              {Links.map((link) => {
                return (
                  <li>
                    <NavLink
                      to={link.link}
                      className="font-serif block py-2 pl-3 pr-4 text-white bg-black md:text-white hover:text-[#fb923c] hover:text-white "
                      aria-current="page"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
