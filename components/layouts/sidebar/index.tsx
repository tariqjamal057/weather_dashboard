"use client";

import React from "react";
import { MenuItems } from "./menuItem";
import { useSidebar } from "./context";
import { IoClose } from "react-icons/io5";

const SideBar = () => {
  const { open, setOpen } = useSidebar();

  return (
    <>
      <aside
        className={`
          flex flex-col w-86 bg-white text-black rounded shadow-sm
          fixed top-0 left-0 h-full z-40 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:h-auto md:flex
        `}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <h2 className="text-lg font-semibold border-gray-100 text-blue-500">
            TJ.Weather
          </h2>
          {/* Close button for mobile */}
          <button
            className="md:hidden hover:text-blue-500 cursor-pointer"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className="py-4">
          <MenuItems />
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default SideBar;
