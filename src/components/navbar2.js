import "./navbar2.css";
import logo from "./retinoscanImg.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { navLinks } from "./navlinks";

import React, { useState } from "react";

const Navbar2 = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="mb-10 flex   gap-10 justify-around items-center w-full">
        <div className="">
          <img
            src={logo}
            alt="Company logo"
            className="w-[100%]  h-[5rem] object-fit overflow-hidden"
          />
        </div>
        <div className=" ">
          <ul className="list-none hidden md:flex flex-row gap-20">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-blue"
                    : "text-secondary text-2xl "
                }
              hover:text-customBlueHover text-[25px]
              font-medium cursor-pointer

              `}
                onClick={() => setActive(link.title)}
              >
                <a href={link.id}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex flex-col  justify-center items-center">
            <div
              className=" object-contain cursor-pointer  flex m-2 my-5 w-full justify-end"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <IoMdClose className="text-4xl mx-20" />
              ) : (
                <GiHamburgerMenu className="text-4xl" />
              )}
            </div>

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              }  black-gradient     z-10 w-screen justify-center items-center mb-10`}
            >
              <ul className="list-none  flex  flex-col justify-center items-center gap-10 bg-white ">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                        ? "text-customBlueHover"
                        : "text-secondary"
                    }
              hover:text-customBlueHover text-3xl
              font-poppins 
              font-medium cursor-pointer

              `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={link.id}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
