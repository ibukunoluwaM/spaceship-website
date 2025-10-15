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

export default function Page() {
  const technologies = [
    {
      pre: "the terminology",
      header: "space capsule",
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. Lorem ipsum dolor.",
      img: "/spaceCapsule.svg",
    },

    {
      pre: "the terminology",
      header: "spaceport",
      text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img: "/spacePort.svg",
    },

    {
      pre: "the terminology",
      header: "launch vehicle",
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: "/launchVehicle.svg",
    },
  ];

  return (
    <div className="p-4 bg-[url('/technologies.jpg')] bg-center bg-cover bg-repeat min-h-screen ">
      <NavBar />

      <div className="mt-[2.5rem] md:mt-[1rem] text-center md:text-left lg:text-left">
        <h2 className="text-white ml-[2rem] text-center md:text-center lg:text-left text-lg tracking-[2px]">
          <span className="text-gray-600 mr-[1rem]">03</span>
          SPACE LAUNCH 101
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true, 
            renderBullet: function (index, className) {
              return `<span class="${className} border-[1px]">${index + 1}</span>`;
            },
          }}
          spaceBetween={50}
          slidesPerView={1}
          className="crewSwiper2 text-white"
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="w-full lg:w-[80%] lg:ml-auto text-white mt-[1rem] md:mt-[5rem] flex flex-col-reverse md:flex-col-reverse  lg:flex-row gap-[3rem] lg:gap-[0rem] items-center justify-center lg:justify-between"
              >
                <div className="w-1/2 mx-auto md:mx-auto lg:mx-[0] text-center lg:text-left h-auto">
                  <p className={`uppercase text-gray-600 mb-[0.5rem]`}>
                    {tech.pre}
                  </p>

                  <h2 className={`text-center lg:text-left uppercase mb-[2rem] text-5xl `}>
                    {tech.header}
                  </h2>
                  <p className="w-[100%] text-xs md:text-xs lg:text-md md:w-[100%] lg:w-[70%] leading-[1.8rem] mb-[2rem] md: mb-[2rem] lg:mb-[0rem]">
                    {tech.text}
                  </p>
                </div>

<div className="w-full lg:w-1/2 h-[20rem] md:h-[25rem] lg:h-auto flex justify-center lg:justify-end relative">
  <Image
    src={tech.img}
    alt="moon"
    fill
    className="object-cover lg:object-contain w-full h-full"
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
