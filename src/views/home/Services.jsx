import React from "react";
import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <section className=" py-20 font-lato">
      <div className="container m-auto flex flex-col items-center">
        <h1 className="font-bold font-lato text-3xl sm:text-4xl mb-2">
          Our Services
        </h1>
        <span className="bg-primary w-10 h-1 rounded mb-6"></span>
        <p className=" text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
          suscipit provident accusantium quidem perferendis.
        </p>
        <div className="p-10 flex justify-around w-full flex-wrap gap-10 ">
          <ServicesCard
            image="https://www.scouts.org.za/wp-content/uploads/2023/08/2023-Social-media-61-267x267.png"
            title="Services1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
          suscipit provident accusantium quidem perferendis."
            link=""
          />
          <ServicesCard
            image="https://www.scouts.org.za/wp-content/uploads/2023/08/2023-Social-media-61-267x267.png"
            title="Services1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
          suscipit provident accusantium quidem perferendis."
            link=""
          />
          <ServicesCard
            image="https://www.scouts.org.za/wp-content/uploads/2023/08/2023-Social-media-61-267x267.png"
            title="Services1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
          suscipit provident accusantium quidem perferendis."
            link=""
          />
          <ServicesCard
            image="https://www.scouts.org.za/wp-content/uploads/2023/08/2023-Social-media-61-267x267.png"
            title="Services1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
          suscipit provident accusantium quidem perferendis."
            link=""
          />
        </div>
      </div>
    </section>
  );
}
