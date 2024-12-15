import React from "react";

export default function Header() {
  return (
    <div className="w-full flex justify-around items-center bg-[#000000] h-20 pt-14">
      <div>
        <h1
          className="text-4xl font-bold text-[#E65F78] font-serif
            md:text-[4vw]
            xl:text-[3.2vw]
           "
        >
          A.
        </h1>
      </div>
      <div>
        <ul
          className="hidden md:text-white md:flex md:gap-12 md:text-[2.3vw]
        lg:text-[2.7vw]
            xl:text-[1.5vw] xl:gap-24"
        >
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>

      <div
        className="bg-[#E65F78] w-24 h-9 text-center content-center text-lg text-white rounded-md
        md:w-[12vw] md:h-[4vw] md:text-[2vw]
        xl:w-[8vw] xl:h-[3vw] xl:text-[1.5vw]"
      >
        <button className="">Hire me</button>
      </div>
    </div>
  );
}
