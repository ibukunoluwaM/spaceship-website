"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import NavBar from "../components/navbar";

function Page() {
  const destination = [
    {
      number: "01",
      name: "moon",
      img: "/moon.svg",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 DAYS",
    },
    {
      number: "02",
      name: "mars",
      img: "/mars.svg",
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
    },
    {
      number: "03",
      name: "Europa",
      img: "/europa.svg",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travelTime: "3 YEARS",
    },
    {
      number: "04",
      name: "titan",
      img: "/titan.svg",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "2.6 BIL. KM",
      travelTime: "7 YEARS",
    },
  ];
  const [selectedDestination, setSelectedDestination] = useState(
    destination[0]
  );
  return (
    <div className="p-4 bg-[url('/destination.jpg')] bg-center bg-cover bg-repeat">
      <NavBar />

      {/* pick your destination */}
      <div className="mt-[4rem] md:mx-[3rem] lg:mx-[3rem] text-center md:text-left lg:text-left">
        <h2 className="text-white text-lg tracking-[2px]">
          <span className="text-gray-600 mr-[1rem]">01</span>
          PICK YOUR DESTINATION
        </h2>

        <div className="mt-[8rem] mx-[2rem] flex flex-col md:flex-col lg:flex-row items-center lg:justify-between">
          {/* the moon */}
          <div className="w-1/2">

            <img
              src={selectedDestination.img}
              alt="moon"
              className="w-[100%] md:w-[90%] lg:w-[75%]"
            />
          </div>

          {/* the other side */}
          <div className="w-1/2 ml-[1.5rem] mt-[2rem]">
            {/* nav */}
            <ul className="flex justify-center lg:justify-start text-white uppercase text-center md:text-center lg:text-left">
              {destination.map((d, index) => (
                <li
                  key={index}
                  className={`relative group cursor-pointer mr-[1.5rem] text-[10px] md:text-sm lg:text-md
                  `}
                  onClick={() => setSelectedDestination(d)}
                >
                  {d.name}
                  <span
                    className={`absolute right-0 bottom-[-10px] w-0 h-[3px] bg-white ${
                      selectedDestination.name === d.name ? "w-full" : ""
                    }`}
                  ></span>
                </li>
              ))}
            </ul>

            <h2 className="text-5xl uppercase mt-[3rem]  mb-[1.5rem] text-white text-center md:text-center lg:text-left">
              {selectedDestination.name}
            </h2>
            <p className="text-white text-xs md:text-sm lg:text-sm text-center md:text-center lg:text-left">{selectedDestination.text}</p>
            <hr className="bg-white h-[2px] my-[3rem]" />

            <div className="text-white flex flex-col  md:flex-row lg:flex-row justify-between mt-[1.2rem]">
              {/* 1 */}
              <div className="mb-[1rem] md:mt-0 lg:mt-0">
                <span className="text-xs text-[#D0D6F9]">AVG. DISTANCE</span>
                <p className="text-md md:text-lg lg:text-xl">
                  {selectedDestination.distance}
                </p>
              </div>

              {/* 2 */}
              <div className="">
                <span className="text-[10px] md:text-xs lg:text-xs text-[#D0D6F9]">EST. TRAVEL TIME</span>
                <p className="text-md md:text-lg lg:text-xl">{selectedDestination.travelTime}</p>
              </div>
            </div>
          </div>
          {/* nav */}
        </div>
      </div>
    </div>
  );
}

export default Page;
