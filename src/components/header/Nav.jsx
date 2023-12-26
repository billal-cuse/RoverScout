import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import UsersNav from "./UsersNav";

const barIcon = <FontAwesomeIcon icon={faBars} size="lg" />;
const closeIcon = <FontAwesomeIcon icon={faXmark} size="lg" />;

export default function Nav() {
  const NavStyle = {
    nav: "md:relative flex justify-between",

    button: "md:hidden text-primary px-2",

    ul: (isMenuOpen) =>
      `absolute md:flex bg-primary/85 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none top-0 h-screen md:h-full duration-500 p-4 ${
        isMenuOpen ? "left-0 md:left-0 " : "left-[-300px]"
      } items-center flex flex-col md:flex-row justify-between shadow-lg shadow-black/70 md:shadow-none`,

    navLink: ({ isActive }) =>
      `${
        isActive
          ? "text-white md:text-primary md:font-extrabold bg-gray-200/20 md:bg-transparent"
          : "bg-transparent text-gray-300 md:text-primary/70"
      } rounded py-2 md:py-3 px-3 md:px-2 text-lg sm:text-sm font-notoSans font-semibold flex ${
        isMenuOpen ? "w-60" : ""
      } md:hover:text-primary/90 duration-300 text-sm sm:text-[15px] shadow-lg md:shadow-none shadow-primary`,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickMenu = () => setIsMenuOpen(!isMenuOpen);
  const closer = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={NavStyle.nav}>
      <button className={NavStyle.button} onClick={clickMenu}>
        {isMenuOpen ? closeIcon : barIcon}
      </button>
      <ul className={NavStyle.ul(isMenuOpen)}>
        <div className="md:flex">
          <li>
            <NavLink
              className={NavStyle.navLink}
              onClick={() => closer()}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={NavStyle.navLink}
              onClick={() => closer()}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={NavStyle.navLink}
              onClick={() => closer()}
              to="/gallary"
            >
              Gallary
            </NavLink>
          </li>
          <li>
            <NavLink
              className={NavStyle.navLink}
              onClick={() => closer()}
              to="/members"
            >
              Members
            </NavLink>
          </li>
        </div>
        <div className="mb-16">
          <UsersNav
            closer={closer}
            className="md:hidden flex"
            LoginBg="bg-white"
            LoginTx={["text-black", "text-white"]}
            userBg={"bg-gray-200/10"}
          />
        </div>
      </ul>
      <UsersNav
        className={"hidden md:block"}
        LoginBg="bg-primary"
        LoginTx={["text-white", "text-Black"]}
        userBg={"bg-primary/10"}
      />
    </nav>
  );
}
