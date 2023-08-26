"use client";

import FilledButton from "./buttons/FilledButton";
import UnFilledButton from "./buttons/UnFilledButton";
import NavbarMenus from "../data/NavbarMenus.json";
import TextButton from "./buttons/TextButton";
import { useState } from "react";

export default function Navbar() {
  const [toogleNavbar, setToggleNavbar] = useState(false);

  return (
    <main className=" bg-navBar border-b-0 z-20 md:border-b border-white/10 backdrop-blur-sm w-full py-2 md:py-4 relative">
      <div className="flex container place-content-between flex-wrap">
        <a href="/" className="flex gap-0.5 md:gap-2 place-items-center">
          <div className="boundless text-lg font-poppins bg-black p-2 rounded-lg flex w-fit h-auto">
            SIMON TEST
          </div>
        </a>

        <div className="md:hidden flex place-content-center relative">
          <div
            onClick={(e) => setToggleNavbar(!toogleNavbar)}
            className={`${
              toogleNavbar && "opacity-0 animate-spin"
            } transition-all duration-500 ease-in-out flex col-start-1 bg-[#121521] text-xs rounded-lg p-1.5 place-content-center place-items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 12H3"
                stroke="#C9CCD9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 6H3"
                stroke="#C9CCD9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 18H3"
                stroke="#C9CCD9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            onClick={(e) => setToggleNavbar(!toogleNavbar)}
            className={`${
              !toogleNavbar && " opacity-0 animate-spin"
            } transition-all duration-500 ease-in-out flex absolute left-0 bg-[#121521] text-xs rounded-full p-1.5 place-content-center place-items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18"
                stroke="#C9CCD9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#C9CCD9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div
          className={`${
            toogleNavbar
              ? "opacity-100 z-20 drop-shadow-md shadow-[rgba(23, 25, 60, 0.30] rounded-xl"
              : "opacity-0"
          } px-[23px] py-[24px] transition-all duration-500 ease-in-out flex flex-col gap-[16px] w-full absolute top-full left-0 bg-navBar_Dark rounded-lg`}
        >
          {NavbarMenus.map((menu) => (
            <a
              key={menu.link}
              onClick={(e) => setToggleNavbar(false)}
              href={menu.link}
            >
              <TextButton> {menu.title} </TextButton>
            </a>
          ))}

          <hr className="w-full h-[1px] my-[6px] border-divider" />

          <UnFilledButton classNames="text-start w-fit">
            {" "}
            Log in{" "}
          </UnFilledButton>
          <FilledButton classNames="text-start w-fit px-5 py-3">
            {" "}
            Create account{" "}
          </FilledButton>
        </div>

        <div className="md:flex hidden">
          {NavbarMenus.map((menu) => (
            <a key={menu.link} href={menu.link}>
              <TextButton> {menu.title} </TextButton>
            </a>
          ))}
        </div>

        <div className="md:flex hidden gap-4 justify-self-end place-self-end tabw:grow place-content-end mdw:w-full mdw:mt-2">
          <UnFilledButton> Log in </UnFilledButton>
          <FilledButton> Create account </FilledButton>
        </div>
      </div>
    </main>
  );
}
