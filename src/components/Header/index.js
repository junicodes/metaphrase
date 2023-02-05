import React from "react";
import logoDark from "../../images/logo-dark-sub.png";
import logoWhite from "../../images/logo-white-sub.png";
import "./Header.css";

const Header = ({ scrollPosition }) => {
  
  const isScrolled = (scrollPosition > 50)
  return (
    <header className="headers-wrapper h-20 w-full flex justify-between items-center container-fluid px-4 md:px-14 2xl:px-0 2xl:container mx-auto">
      <img src={logoDark} className={`w-30 h-8 ${isScrolled ? "pl-20" : "pl-0"}`} alt="logo" />
      <ul className="flex pr-10">
        <li className="mr-8 nav-list">
          <a
            className={`${isScrolled ? "text-black hover:text-[#e81d78]" : "text-white hover:text-white"} font-medium cursor-pointer text-[14px] uppercase hover:underline decoration-4 underline-offset-4`}
            href="/learn"
          >
            Learn
          </a>
        </li>
        <li className="mr-8 nav-list">
          <a
            className={`${isScrolled ? "text-black hover:text-[#e81d78]" : "text-white hover:text-white"} font-medium cursor-pointer text-[14px] uppercase hover:underline decoration-4 underline-offset-4`}
            href="/press"
          >
            Press
          </a>
        </li>
        <li className="mr-8 nav-list">
          <a
            className={`${isScrolled ? "text-black hover:text-[#e81d78]" : "text-white hover:text-white"} font-medium cursor-pointer text-[14px] uppercase hover:underline decoration-4 underline-offset-4`}
            href="/jobs"
          >
            Jobs
          </a>
        </li>
        <li className="mr-8 nav-list">
          <a
            className={`${isScrolled ? "text-black hover:text-[#e81d78]" : "text-white hover:text-white"} font-medium cursor-pointer text-[14px] uppercase hover:underline decoration-4 underline-offset-4`}
            href="/contacts"
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
