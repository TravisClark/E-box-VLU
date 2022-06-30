import React, { useState } from "react";
import Container from "../../../../student/components/UI/Container";
import classes from "./SideNav.module.css";
import { NavLink } from "react-router-dom";
function SideNav() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  let hamBtnClass = `${classes.hamburger} block z-20`;
  if (navbarIsOpen) {
    hamBtnClass = `${classes.open} ${classes.hamburger} block z-20 `;
  }
  const openNavHandler = () => {
    setNavbarIsOpen((prevState) => !prevState);
  };
  return (
    <nav>
      <Container
        className={`flex flex-col w-20 h-screen px-4 items-center bg-white z-30 transition duration-1000 ${
          navbarIsOpen && "w-56"
        }`}
      >
        {/* Mobile hamburger */}
        <div
          className={`flex items-center p-4 border-gray-300 flex-wrap-reverse ${
            navbarIsOpen && "flex-row-reverse"
          }`}
        >
          <button className={`${hamBtnClass} my-auto`} onClick={openNavHandler}>
            <span className={`${classes["hamburger-top"]} bg-black `}></span>
            <span className={`${classes["hamburger-middle"]} bg-black`}></span>
            <span className={`${classes["hamburger-bottom"]} bg-black`}></span>
          </button>
          {navbarIsOpen && (
            <h1
              className={`font-semibold mr-4 text-xl text-black
            }`}
            >
              E-Box VLU
            </h1>
          )}
        </div>
        <div className="w-4/5 border"></div>
        <NavLink
          to="/#"
          className={`flex space-x-4 py-2 rounded-lg mt-4 w-full justify-around cursor-pointer transition duration-300 ${
            navbarIsOpen && "px-8"
          }`}
          // activeClassName="bg-slate-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="#7f8c8d"
              d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"
            ></path>
          </svg>
          {navbarIsOpen && (
            <h1 to="/" className="font-medium text-gray-400">
              Thống Kê
            </h1>
          )}
        </NavLink>
        <NavLink
          to="/#"
          className={`flex space-x-4 py-2 rounded-lg mt-4 w-full justify-around cursor-pointer transition duration-300 ${
            navbarIsOpen && "px-8"
          }`}
          // activeClassName="bg-slate-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="#7f8c8d"
              d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"
            ></path>
          </svg>
          {navbarIsOpen && (
            <h1 to="/" className="font-medium text-gray-400">
              Câu Hỏi
            </h1>
          )}
        </NavLink>
        <NavLink
          to="/#"
          className={`flex space-x-4 py-2 rounded-lg mt-4 w-full justify-around cursor-pointer transition duration-300 ${
            navbarIsOpen && "px-8"
          }`}
          // activeClassName="bg-slate-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="#7f8c8d"
              d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z"
            ></path>
            <path
              fill="#7f8c8d"
              d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15-2 2-2-2H5V4h14l.002 13H14z"
            ></path>
          </svg>
          {navbarIsOpen && (
            <h1 to="/" className="font-medium text-gray-400">
              Tài Khoản
            </h1>
          )}
        </NavLink>
      </Container>
    </nav>
  );
}

export default SideNav;
