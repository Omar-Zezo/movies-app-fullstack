import React, { useState } from "react";
import { Heart, SearchIcon } from "../images/svg";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { Logo } from "../images/imgs";
import Navigation from './Navigation'
import Search from "./Search";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <nav className="absolute top-0 left-0 z-50">
      <div className="container">
        <div className="w-full h-[70px] flex items-center opacity-90">
          <div className="w-[18%] max-md:w-[35%] xl:pl-8 p-4 inline-block">
            <a href="/">
              <img src={Logo} alt="logo" className="w-full" />
            </a>
          </div>
          <ul className="w-[50%] max-xl:hidden flex p-10 justify-center items-center mx-auto">
            {navLinks.map((link) => (
              <li key={link.name} className="mr-12">
                <Link
                  to={link.path}
                  className="text-white text-base font-medium capitalize last-of-type:mr-0 hover:text-mainColor"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-fit max-xl:hidden flex justify-end items-center">
            <img
              src={SearchIcon}
              alt="search"
              className="w-6 mr-10 cursor-pointer"
              onClick={()=> setOpenSearch(true)}
            />
            <Link to="/wishlist">
              <img src={Heart} alt="bell" className="w-6 cursor-pointer" />
            </Link>
          </div>
          <Link
            className="ml-auto bg-mainColor rounded-lg xl:px-5 xl:py-2 py-1 px-3 text-white text-base font-medium capitalize"
            to="/user/login"
          >
            sign in
          </Link>
        </div>
      </div>
      <Search openSearch={openSearch} setOpenSearch={setOpenSearch}/>
      <Navigation setOpenSearch={setOpenSearch}/>
    </nav>
  );
};

export default Navbar;
