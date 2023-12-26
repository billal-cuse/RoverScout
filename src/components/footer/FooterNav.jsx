import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterNav() {
  return (
    <nav className=" p-0 sm:pt-4">
      <h1 className=" font-bold">Top Reference</h1>
      <ul className="pl-1 text-white/60 flex flex-col gap-3 pt-3">
        <li>
          <NavLink className={({isActive}) => `${isActive ? "text-white pl-2" : ""} hover:text-white duration-300`} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => `${isActive ? "text-white pl-2" : ""} hover:text-white duration-300`} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => `${isActive ? "text-white pl-2" : ""} hover:text-white duration-300`} to="/gallary">Gallary</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => `${isActive ? "text-white pl-2" : ""} hover:text-white duration-300`} to="/members">Members</NavLink>
        </li>
      </ul>
    </nav>
  );
}
