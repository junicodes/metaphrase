import React from "react";
import logoDark from "../../images/logo-dark-sub.png";
import logoWhite from "../../images/logo-white-sub.png";

const Header = () => {
  return (
    <header className="headers-wrapper h-20 w-full flex justify-between items-center container-fluid px-20 2xl:px-0 2xl:container mx-auto">
      <img src={logoWhite} className="w-30 h-8" alt="logo" />
      <ul className="flex">
        <li className="mr-8">
          <a
            className="text-gray-300 font-medium cursor-pointer text-[14px] hover:text-black uppercase hover:underline decoration-4 underline-offset-8 animate__animated animate__bounce"
            href="/learn"
          >
            Learn
          </a>
        </li>
        <li className="mr-8">
          <a
            className="text-gray-300 font-medium cursor-pointer text-[14px] hover:text-black uppercase hover:underline decoration-4 underline-offset-8 animate__animated animate__bounce"
            href="/press"
          >
            Press
          </a>
        </li>
        <li className="mr-8">
          <a
            className="text-gray-300 font-medium cursor-pointer text-[14px] hover:text-black uppercase hover:underline decoration-4 underline-offset-8 animate__animated animate__bounce"
            href="/jobs"
          >
            Jobs
          </a>
        </li>
        <li className="mr-8">
          <a
            className="text-gray-300 font-medium cursor-pointer text-[14px] hover:text-black uppercase hover:underline decoration-4 underline-offset-8 animate__animated animate__bounce"
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
