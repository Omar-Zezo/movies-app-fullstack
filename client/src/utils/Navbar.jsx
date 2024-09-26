import React from "react";
import { Logo } from "../images/imgs";
import { Bell, Search } from "../images/svg";
import { navLinks } from "../constants";


const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50">
      <div className="container">
        <div className="w-full h-[70px] flex items-center opacity-90">
          <div className="w-[12%] pl-8 inline-block">
            <a href="/">
              <img src={Logo} alt="logo" className="w-full"/>
            </a>
          </div>
          <ul className="w-[50%] p-10 flex justify-center items-center mx-auto">
            {
              navLinks.map(link=>(
            <li key={link.name} className="mr-12">
              <a href={link.path} className="text-white text-base font-medium capitalize last-of-type:mr-0 hover:text-mainColor">{link.name}</a>
            </li>
              ))
            }
          </ul>
          <div className="w-fit flex justify-end items-center">
            <img src={Search} alt="search" className="w-6 mr-10 last-of-type:mr-0 cursor-pointer"/>
            <img src={Bell} alt="bell" className="w-6 mr-0 cursor-pointer"/>
          </div>
          <a className="ml-auto bg-mainColor rounded-lg px-5 py-2 text-white text-base font-medium capitalize" href="pages/login.html">
            sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
