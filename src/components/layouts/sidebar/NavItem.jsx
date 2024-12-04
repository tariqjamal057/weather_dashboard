import React from "react";
import { NavLink } from "react-router";

const NavItem = ({ element, section, isSidebarOpen }) => {
  return (
    <li className="text-white px-4 py-2 text-center">
      <NavLink to={element.url}>
        <div
          className={`flex rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4 
        ${section === "header" ? "mb-2" : "hover:bg-white hover:text-blue-700 transition-colors delay-250 ease-out"}`}
        >
          {section === "header"
            ? React.cloneElement(element.icon, { size: 32 })
            : element.icon}
          {isSidebarOpen && (
            <span className={section === "header" ? "text-xl font-bold" : ""}>
              {element.tabName}
            </span>
          )}
        </div>
      </NavLink>
    </li>
  );
};

export default NavItem;
