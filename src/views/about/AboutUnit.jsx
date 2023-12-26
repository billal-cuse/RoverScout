import React from "react";
import SectionTitle from "../../components/SectionTitle";
import ImageCard from "../../components/ImageCard";
// import aboutImage from '/public/World-scout-emblem-explained-Copyright-WOSM.jpg'

export default function AboutUnit() {
  return (
    <SectionTitle
      title="About Unit"
      info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur illo repudiandae? Culpa corporis facere consequuntur non cumque eligendi ipsa!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ImageCard
          image={
            "https://www.researchgate.net/profile/Roy-Terrazas/publication/349255623/figure/fig1/AS:990495773839361@1613164003666/World-scout-emblem-explained-Copyright-WOSM.ppm"
          }
        />

        <div className="flex flex-col gap-3 h-full justify-center">
          <h1 className="text-5xl font-bold">About</h1>
          <div className="flex flex-col gap-5 pl-2">
            <h1 className="text-3xl font-bold">title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus cum accusantium hic quis odit ea placeat possimus repellat repellendus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus cum accusantium hic quis odit ea placeat possimus repellat repellendus.</p>
          </div>
          <div className="flex flex-col gap-5 pl-2">
            <h1 className="text-3xl font-bold">title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus cum accusantium hic quis odit ea placeat possimus repellat repellendus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus cum accusantium hic quis odit ea placeat possimus repellat repellendus.</p>
          </div>
        </div>
      </div>
    </SectionTitle>
  );
}
