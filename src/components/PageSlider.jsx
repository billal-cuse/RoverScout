import React from "react";

export default function PageSlider({ img, title }) {
  return (
    <section className="bg-black">
      <div className="w-full h-80 bg-center flex justify-center items-center text-white bg-blue-950 px-10 text-sm">
        <div>{title}</div>
      </div>
    </section>
  );
}
