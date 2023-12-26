import React from "react";
import { NavLink } from "react-router-dom";

export default function MemberCards({ img, name, title, link, SLinks }) {
  // Scosial Links
  const style = {
    ul: "flex flex-col",
    li: "scale-0 group-hover:scale-100 m-1",
    a: ` bg-primary ring ring-blue-950 duration-300 w-5 h-5 rounded-full text-lg flex justify-center items-center p-3  text-sm m-1 text-white hover:bg-white hover:ring hover:ring-primary hover:ring-offset hover:ring-offset-red-950 hover:text-black cursor-pointer`,
  };

  return (
    <div className="w-64 shadow-lg  rounded-lg overflow-hidden shadow-primary group border border-primary/30">
      <div className="h-full">
        <div className="flex justify-center p-10 relative">
          <div className="absolute right-4 top-4">
            <ul className={style.ul}>
              <li className={`${style.li} duration-700`}>
                <a className={style.a} href={SLinks}>
                  F
                </a>
              </li>
              <li className={`${style.li} duration-500`}>
                <a className={style.a} href={SLinks}>
                  g
                </a>
              </li>
              <li className={`${style.li} duration-300`}>
                <a className={style.a} href={SLinks}>
                  in
                </a>
              </li>
            </ul>
          </div>
          <div className="w-28 rounded-full flex">
            <img
              className="w-28 ring ring-primary ring-offset-4 ring-offset-white h-28 rounded-full scale-95 duration-300 group-hover:scale-100"
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className=" p-5 bg-primary text-white h-full">
          <h1 className=" text-xl">{name}</h1>
          <p className="text-sm mb-5 uppercase">{title}</p>
          <NavLink
            className={"bg-white rounded text-primary py-1 px-3 hover:bg-blue-950 font-bold hover:text-white duration-300"}
            to={`/${link}`}
          >
            About...
          </NavLink>
        </div>
      </div>
    </div>
  );
}
