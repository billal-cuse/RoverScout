import React from "react";
import PageSlider from "../../components/PageSlider";
import image from '/7517.jpg'

export default function Gallery() {
  return (
    <div>
      <PageSlider img={image} title={"Working on it"} />
    </div>
  );
}
