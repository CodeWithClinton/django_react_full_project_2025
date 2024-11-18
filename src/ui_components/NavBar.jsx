import { Switch } from "@/components/ui/switch";
import { FaHamburger } from "react-icons/fa";
import ResponsiveNavBar from "./ResponsiveNavBar";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({darkMode, handleDarkMode}) => {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <>
      <nav className="max-container padding-x py-6 flex justify-between items-center  gap-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624]">
        <Link to="/" className="text-[#141624] text-2xl dark:text-[#FFFFFF]">
          DevFolio
        </Link>
        <ul className="flex items-center  justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
          {/* <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Hi, Clinton
            </NavLink>
          </li> */}

          <li>Logout</li>
          <li>Login</li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Register
            </NavLink>
          </li>
          <li className="font-semibold">Create post</li>
        </ul>

        <Switch onCheckedChange={handleDarkMode} checked={darkMode} />
        <FaHamburger
          className="text-2xl cursor-pointer hidden max-md:block dark:text-white"
          onClick={() => setShowNavBar((curr) => !curr)}
        />
      </nav>

      {showNavBar && <ResponsiveNavBar />}
    </>
  );
};

export default NavBar;
