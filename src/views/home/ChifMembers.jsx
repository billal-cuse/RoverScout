import React from "react";

function ChifMemeberProfile({img, name, title}) {
  return (
    <li className="flex flex-col items-center">
      <div>
        <img
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring ring-white p-1 bg-white ring-offset-4 ring-offset-primary "
          src={img}
          alt=""
        />
      </div>
      <h1 className="text-[16px] sm:text-lg text-center mt-2">{name}</h1>
      <p className="text-[12px] text-center">{title}</p>
    </li>
  );
}

export default function ChifMembers() {
  return (
    <section className="bg-gradient-to-r from-blue-950 to-blue-950/80 pt-20 text-white font-lato">
      <div className=" py-20 backdrop-blur-lg w-full z-20">
        <ul className="flex gap-5 sm:gap-0 justify-around px-10 sm:px-28">
          <ChifMemeberProfile img="https://www.gai.gov.bd/uploads/db/staff/staff_1529431539_1652771098.jpg" name='Tanmoy Das Sohag' title='Rover Scout Leader' />
          <ChifMemeberProfile img="https://www.gai.gov.bd/uploads/db/staff/staff_912736024_1619611395.jpg" name='Engr. Niher Ronjon Das' title='SL' />
          <ChifMemeberProfile img="https://www.gai.gov.bd/uploads/db/staff/staff_1158702412_1653204573.jpg" name='Tahmina Akter' title='Girl Guide Scout leader' />
        </ul>
      </div>
    </section>
  );
}
