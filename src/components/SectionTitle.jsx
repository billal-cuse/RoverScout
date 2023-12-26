import React from "react";

export default function SectionTitle({ title, info, children }) {
  return (
    <section className=" py-20 font-lato">
      <div className="container m-auto flex flex-col items-center">
        <h1 className="font-bold font-lato text-3xl sm:text-4xl mb-2">
          {title}
        </h1>
        <span className="bg-primary w-10 h-1 rounded mb-6"></span>
        <p className=" text-center px-5">{info}</p>
        <div className="p-10 flex justify-around w-full flex-wrap gap-10 ">
          {children}
        </div>
      </div>
    </section>
  );
}
