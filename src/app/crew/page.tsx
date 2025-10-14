"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../globals.css";
import Image from "next/image";
import NavBar from "../components/navbar";

export default function Carousel() {
  const crews = [
    {
      post: "Commander",
      name: "Douglas Hurley",
      text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: "/1st-crew.svg",
    },

    {
      post: "Mission specialist",
      name: "Mark Shuttleworth",
      text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img: "/2nd-crew.svg",
    },

    {
      post: "Pilot",
      name: "Victor Glover",
      text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      img: "/3rd-crew.svg",
    },

    {
      post: "Flight Engineer",
      name: "Anousheh Ansari",
      text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      img: "/4th-crew.svg",
    },
  ];
  return (
    <div className="p-4 bg-[url('/crew-background.jpg')] bg-center bg-cover bg-repeat">
      <NavBar />

      <div className="mt-[4rem] md:mx-[3rem] lg:mx-[3rem] text-center md:text-left lg:text-left">
        <h2 className="text-white text-lg tracking-[2px]">
          <span className="text-gray-600 mr-[1rem]">02</span>
          MEET YOUR CREW
        </h2>

        {/* the other side */}
        {/* nav */}
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="crewSwiper h-full"
        >
          {crews.map((crew, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className=" text-white mt-[3rem] mx-[2rem] flex flex-col md:flex-col lg:flex-row items-center lg:justify-between"
              >
                <div className="w-1/2 ml-[1.5rem] mt-[2rem] text-center lg:text-left">
                  <p className={`uppercase text-gray-600 mb-[0.5rem]`}>{crew.post}</p>

                  <h2 className={`uppercase mb-[2rem] text-5xl `}>{crew.name}</h2>
                  <p className="w-[100%] text-xs md:text-xs lg:text-md md:w-[100%] lg:w-[70%] leading-[1.8rem] mb-[2rem] md: mb-[2rem] lg:mb-[0rem]">{crew.text}</p>
                </div>

                <div className="w-1/2 mt-[3rem]">
                  <Image
                    src={crew.img}
                    alt="moon"
                    width={500}
                    height={500}
                    className="w-[100%] md:w-[90%] lg:w-[75%]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
