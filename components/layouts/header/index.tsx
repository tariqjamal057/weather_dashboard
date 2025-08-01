"use client";

import Greeting from "@/components/utilities/Greeting";
import { MdMyLocation } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { ToggleTheme } from "./theme";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSidebar } from "../sidebar/context";

export const Header = () => {
  const { setOpen } = useSidebar();

  return (
    <nav className="flex md:items-center flex-col md:flex-row justify-between gap-y-4 mb-4">
      <div className="flex gap-2 md:items-center">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden bg-white rounded shadow p-2 !relative"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          <RxHamburgerMenu size={24} />
        </button>
        <Greeting />
      </div>
      <div className="flex gap-x-2 flex-col md:flex-row gap-y-2 md:gap-y-0 md:items-center">
        <div className="flex gap-x-2">
          <ToggleTheme />
          <button className="flex justify-between gap-2 items-center bg-blue-500 text-white px-2 rounded hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
            <span>
              <MdMyLocation />
            </span>{" "}
            Current Location
          </button>
        </div>
        <div className="flex justify-between gap-2 items-center md:mx-2 bg-white rounded p-2 text-black">
          <span>
            <IoMdSearch size={20} />
          </span>
          <input
            type="text"
            placeholder="Enter city name.."
            className="border-none focus:outline-none !p-0 flex-1"
            name="search"
          />
          <button className="py-1 px-2 bg-blue-500 text-white rounded relative cursor-pointer hover:bg-blue-600 transition-colors duration-200">
            search
          </button>
        </div>
      </div>
    </nav>
  );
};
