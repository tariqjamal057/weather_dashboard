// "use client";

import Greeting from "@/components/utilities/Greeting";
import { MdMyLocation } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { ToggleTheme } from "./theme";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between mb-4">
      <Greeting />
      <div className="flex gap-x-2">
        <ToggleTheme />
        <button className="flex justify-between gap-2 items-center bg-blue-500 text-white px-2 rounded hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
          <span>
            <MdMyLocation />
          </span>{" "}
          Current Location
        </button>
        <div className="flex justify-between gap-2 items-center mx-2 bg-white rounded p-2 text-black">
          <span>
            <IoMdSearch size={20} />
          </span>
          <input
            type="text"
            placeholder="Enter city name.."
            className="border-none focus:outline-none !p-0"
          />
          <button className="py-1 px-2 bg-blue-500 text-white rounded relative cursor-pointer hover:bg-blue-600 transition-colors duration-200">
            search
          </button>
        </div>
      </div>
    </nav>
  );
};
