import React from "react";
import { NavLink } from "react-router-dom";

export default function UsersNav({className, LoginBg , LoginTx, userBg, closer}) {

  return (
    <div className={className}>
      <nav className={`${userBg} rounded-tl-xl rounded-br-xl flex hover:bg-primary/30`}>
        <NavLink
          className={`${LoginBg} ${LoginTx[0]} rounded-tl-xl rounded-br-xl py-1 px-2 `}
          onClick={() => closer ? closer() : false}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={`rounded-tl-xl rounded-br-xl py-1 px-2 ${LoginTx[1]}`}
          onClick={() => closer ? closer() : false}
          to="/register"
        >
          Register
        </NavLink>
      </nav>
    </div>
  );
}
