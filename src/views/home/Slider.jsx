import React from "react";
import { NavLink } from "react-router-dom";
import Bp from "./Bp";

export default function Slider() {
  const information = {
    title: "push pass your => limits , time is very inportent in our life ",
    information:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, excepturi neque totam, pariatur laborum doloremque iste ipsa quod, libero culpa quas consectetur quis assumenda quidem repellendus! Odio doloremque magni voluptatum!",
    image: "",
  };
  return (
    <section className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-20 ">
      <div className="">
        <div className="container m-auto text-white flex flex-col sm:flex-row gap-10 p-10 py-32">
          <div className="w-full sm:w-[50%] md:w-[65%]">
            <h1 className=" text-3xl md:text-4xl pb-5">{information.title}</h1>
            <p className="mb-8 text-sm">{information.information}</p>
            <NavLink
              className={
                "bg-primary py-3 px-5 rounded-lg text-sm md:text-lg lg:py-2 lg:px-4"
              }
              to="/about"
            >
              About us
            </NavLink>
          </div>
          <div className="">
            <Bp className="flex-col sm:w-[350px] rounded-md hidden md:flex absolute top-34 shadow right-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
