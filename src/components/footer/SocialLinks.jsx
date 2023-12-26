import React from "react";

export default function SocialLinks() {
  return (
    <div>
      <h1 className=" p-0 sm:pt-4 font-bold">Social links</h1>
      <ul className="pl-1 text-white/70 flex flex-row gap-3 pt-4 md:pt-8 duration-300">
        <li className="hover:bottom-1 duration-500">
          <a
            className={` bg-blue-600 hover:bg-white hover:text-blue-600 font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg`}
            href="#"
          >
            f
          </a>
        </li>
        <li className="hover:bottom-1 duratio-500">
          <a
            className={` bg-blue-800 hover:bg-white hover:text-blue-800 font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg`}
            href="#"
          >
            in
          </a>
        </li>
      </ul>
    </div>
  );
}
