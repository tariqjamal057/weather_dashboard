import React from "react";
import { MenuItems } from "./menuItem";
import { RxHamburgerMenu } from "react-icons/rx";

const SideBar = () => {
  return (
    <aside className="flex flex-col w-86 bg-white text-black rounded shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 p-4">
        <h2 className="text-lg font-semibold  border-gray-100 text-blue-500">
          TJ.Weather
        </h2>
        <button className=" hover:text-blue-500 block md:hidden">
          <RxHamburgerMenu size={24} />
        </button>
      </div>
      <div className="py-4">
        <MenuItems />
      </div>
    </aside>
  );
};

export default SideBar;
