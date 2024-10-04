import React, { useState } from "react";
import { Heart, Search } from "../images/svg";
import { navLinks } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../images/imgs";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()

  const onSubmit = (e)=> {
    e.preventDefault()
    navigate(`/search?keyword=${searchValue}&page=${1}`)
  }

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
          <div className="w-fit max-xl:hidden flex justify-end items-center"
          onClick={()=> setOpenSearch(true)}
          >
            <img
              src={Search}
              alt="search"
              className="w-6 mr-10 last-of-type:mr-0 cursor-pointer"
            />
            <img src={Heart} alt="bell" className="w-6 mr-0 cursor-pointer" />
          </div>
          <Link
            className="ml-auto bg-mainColor rounded-lg xl:px-5 xl:py-2 py-1 px-3 text-white text-base font-medium capitalize"
            to="/user/login"
          >
            sign in
          </Link>
        </div>
      </div>
      {/* Search Page */}
      <div
        className={`fixed w-full min-h-screen top-0 left-0 z-50 bg-black/90 ${
          openSearch ? "block" : "hidden"
        }`}
        onClick={() => setOpenSearch(false)}
      >
        <form
          className="w-[95%] xl:w-1/2 mt-[80px] mx-auto flex flex-col items-center gap-5"
          onSubmit={onSubmit}
        >
          <input
            className="w-full rounded-md outline-none border-none py-5 px-3 bg-zinc-800 text-white"
            type="search"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
          <input
            type="submit"
            value={"Search"}
            className="p-3 w-[25%] cursor-pointer rounded-md bg-mainColor text-white"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
