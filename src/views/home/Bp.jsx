import React from "react";

export default function Bp({ className, img }) {
  return (
    <div className={className}>
      <div>
        <img
          className={"w-full sm:shadow-lg shadow-primary"}
          src="https://roverscouts.daffodilvarsity.edu.bd/storage/photos/shares/history/MSc-in-CSE-Summer-2020.jpg"
          alt=""
        />
        <h1 className="bg-primary text-white rounded-b-lg p-5 text-sm shadow-lg md:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo
          ratione aut, quas ducimus nulla nemo facere molestias soluta natus?
        </h1>
      </div>
    </div>
  );
}
