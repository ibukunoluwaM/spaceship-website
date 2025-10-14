"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Hero() {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-col lg:flex-row text-white mt-[5rem] md:mt-[5rem] lg:mt-[13rem] lg:w-[90%] p-8 md:p-[0] mx-auto font-barlow">
      <div className="text-left md:mb-6 w-full lg:w-1/2">
        <h2 className="uppercase lg:w-full md:w-[70%] md:mx-auto md:tracking-[1.4px] text-center md:text-center lg:text-left text-xs lg:text-xs md:text-xl pb-3">
          So, you want to travel to <br />
          <span className="block md:mt-2 text-7xl md:text-8xl lg:text-9xl">
            space
          </span>
        </h2>

        <p className="mt-4  md:w-[60%] lg:w-[70%] mx-[0] md:mx-auto lg:mx-[0] text-xs leading-[18px] tracking-[1.4px] text-center md:text-center lg:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience.
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        {/* <div className="text-black bg-white w-[150px] h-[150px] rounded-full text-center">
            <span className="flex justify-center text-center my-auto ">explore</span>
        </div> */}
        <div
          className="group relative mt-[4.5rem] md:mt-[2rem] lg:mt-0 cursor-pointer w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center text-black text-lg font-semibold"
          onClick={() => router.push("/destination")}
        >
          Explore
          <span className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.1)] scale-0 group-hover:scale-150 transition-transform duration-700"></span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
