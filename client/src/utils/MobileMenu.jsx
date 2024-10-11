import { Close } from "../images/svg";
import { Logo } from "../images/imgs";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const MobileMenu = ({showMenu, setShowMenu}) => {
  return (
    <div
      className={`bottom-nav fixed right-0 top-0 z-50 w-full h-screen bg-black/95 flex flex-col gap-5 items-center justify-start pt-10 ${
        showMenu ? "mr-0" : "mr-[-100%]"
      } duration-300`}
    >
      <img
        width={20}
        height={20}
        src={Close}
        alt="close"
        onClick={() => setShowMenu(false)}
      />
      <img width={150} src={Logo} alt="logo" className="mt-10" />
      <ul className="flex flex-col items-center gap-5">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="text-white text-xl pb-2 border-b border-zinc-300 font-Josefin"
          >
            <NavLink to={link.path} onClick={() => setShowMenu(false)}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
