import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import UsersNav from "./UsersNav";

export default function Header() {
  return (
    <header className="shadow-lg shadow-primary/40 z-50 sticky top-0 w-full bg-white">
      <div className=" container m-auto flex justify-between p-4 ">
        <NavLink
          to="/"
          className=" pl-5 brand text-2xl text-primary font-notoSans font-bold"
        >
          Rover
        </NavLink>
        <Nav />
      </div>
    </header>
  );
}
