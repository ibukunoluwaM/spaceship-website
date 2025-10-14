"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavBar() {
  const pathName = usePathname();
  const [sideNav, setSideNav] = useState(false);

  const navs = [
    { index: 0, name: "Home", path: "/" },
    { index: 1, name: "Destination", path: "/destination" },
    { index: 2, name: "Crew", path: "/crew" },
    { index: 3, name: "Technologies", path: "/technologies" },
  ];

  return (
    <div className="relative p-5 md:p-[0] flex justify-between items-center">
      <div>
        <Image src="/Logo.svg" alt="logo" width={40} height={40} />
      </div>

      <nav>
        <ul className="w-xl hidden md:flex lg:flex justify-end backdrop-blur-md bg-[rgba(255,_255,_255,_0.05)] p-5">
          {navs.map((nav, index) => (
            <li
              key={index}
              className="relative group text-xs p-2 cursor-pointer tracking-[2px] text-white ml-4"
            >
              <Link href={nav.path}>
                <span className="mr-2">{`0${nav.index}`}</span>
                {nav.name}
              </Link>

              {/* animation for on hover */}
              <span className="absolute right-0 bottom-[-10px]  w-0 h-[3px]  bg-gray-500 transition-all duration-300 group-hover:w-full"></span>

              <span
                className={`absolute right-0 bottom-[-10px] w-0 h-[3px] bg-white ${
                  pathName === nav.path ? "w-full" : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>
        <div className="flex md:hidden lg:hidden">
          <Image
            src="/menu.svg"
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={() => setSideNav(!sideNav)}
          />
        </div>
      </nav>

      {/* navmenu */}
      {sideNav && (
        <div className="fixed inset flex flex-col  md:hidden lg:hidden mt-0 absolute top-0 right-0 w-1/2 z-10 flex h-[100vh] p-4 backdrop-blur-md bg-[rgba(255,_255,_255,_0.05)] ">
          <Image
            src="/Close.svg"
            alt="close"
            width={30}
            height={30}
            onClick={() => setSideNav(false)}
            className="ml-auto mb-[5rem] cursor-pointer"
          />
          <ul className=" flex-col justify-center  p-5">
            {navs.map((nav, index) => (
              <li
                key={index}
                className="group relative text-sm mb-4 p-2 cursor-pointer tracking-[2px] text-white ml-4"
              >
                <Link href={nav.path}>
                  <span className="mr-2">{`0${nav.index}`}</span>
                  {nav.name}
                </Link>
                <span className="absolute right-[-25px]  w-0 h-[10px]  bg-white transition-all duration-300 group-hover:w-[4px]"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
