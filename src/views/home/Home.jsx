import React from "react";
import Slider from "./Slider";
import Bp from "./Bp";
import Services from "./Services";
import ChifMembers from "./ChifMembers";
import Members from "./Members";

export default function Home() {
  return (
    <>
      <Slider />
      <div className="w-full justify-center flex py-20 md:hidden bg-gray-200">
        <Bp className="w-[250px] rounded-md shadow-lg flex justify-center flex-col md:absolute sm:w-50" />
      </div>
    <Services />
    <ChifMembers />
    <Members />
    </>
  );
}
