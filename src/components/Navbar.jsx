import React from "react";

import { MdDashboard } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import { NavLink } from "react-router";
import { MdLogout } from "react-icons/md";

const navbar_elements = {
  header: [
    {
      tabName: "Weather App",
      icon: <FaCloudSun />,
      url: "/",
    },
  ],
  body: [
    {
      tabName: "Dashboard",
      icon: <MdDashboard />,
      url: "/",
    },
    {
      tabName: "Saved",
      icon: <FaNewspaper />,
      url: "/saved",
    },
  ],
  footer: [
    {
      tabName: "Logout",
      icon: <MdLogout />,
      url: "/",
    },
  ],
};

const Navbar = () => {
  
  return (
    <aside className="w-72 bg-blue-700 h-screen py-2 flex flex-col">
      {Object.entries(navbar_elements).map(([section, elements]) => (
        <ul
          key={section}
          className={`${
            section === "body"
              ? "flex-grow"
              : section === "footer"
                ? "mt-auto"
                : ""
          }`}
        >
          {elements.map((element) => (
            <li
              key={element.tabName}
              className="text-white px-4 py-2 text-center"
            >
              <NavLink to={element.url}>
                <div
                  className={`flex rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4 
                  ${section === "header" ? "mb-2" : "hover:bg-white hover:text-blue-700 transition-colors delay-250 ease-out"}`}
                >
                  {section === "header"
                    ? React.cloneElement(element.icon, {
                        size: 32,
                      })
                    : element.icon}
                  <span
                    className={`${section === "header" ? "text-xl font-bold" : ""}`}
                  >
                    {element.tabName}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      ))}
    </aside>
  );
};

export default Navbar;
