import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigationBar } from "../constants";
import { Menu, SearchIcon } from "../images/svg";
import MobileMenu from "./MobileMenu";

const Navigation = ({ setOpenSearch }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 z-30 w-full py-4 px-3 bg-zinc-900 xl:hidden">
      <ul className="list-none w-full flex items-center justify-around">
        {navigationBar.map((icon) => (
          <li key={icon.name} className="relative">
            <Link to={icon.path}>
              <img width={25} height={25} src={icon.icon} alt={icon.name} />
            </Link>
          </li>
        ))}
        <li className="relative" onClick={() => setOpenSearch(true)}>
          <img width={25} height={25} src={SearchIcon} alt={"search"} />
        </li>
        <li className="relative" onClick={() => setShowMenu(true)}>
          <img width={25} height={25} src={Menu} alt={"search"} />
        </li>
      </ul>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  );
};

export default Navigation;
