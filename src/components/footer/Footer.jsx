import React from "react";
import { NavLink } from "react-router-dom";
import FooterNav from './FooterNav';
import Info from './Info';
import AboutUs from "./AboutUs";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-sm">

      <div className="container m-auto">
        <div className=" p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-1 sm:col-span-2 p-3 pt-7 px-0 md:pt-3 sm:p-2 ">
            <Info />
          </div>
          <div className="col-span-1 p-3 pt-7 px-0 md:pt-3 sm:p-2 ">
            <FooterNav />
          </div>
          <div className="col-span-1  p-3 pt-7 px-0 md:pt-3 sm:p-2 ">
            <AboutUs />
          </div>
          <div className="col-span-1  p-3 pt-7 px-0 md:pt-3 sm:p-2 ">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-white/40">
        <div className="container m-auto flex justify-between py-3 px-6 text-sm flex-col items-center gap-2 sm:flex-row ">
          <div>Powered by Graphic Arts Institute Rover Scout Group</div>
          <div>Developed by Rover</div>
        </div>
      </div>

    </footer>
  );
}
