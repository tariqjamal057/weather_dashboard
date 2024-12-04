import React from "react";
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaNewspaper, FaCloudSun } from "react-icons/fa6";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

const NAVBAR_ELEMENTS = {
  header: [{ tabName: "Weather App", icon: <FaCloudSun />, url: "/" }],
  body: [
    { tabName: "Dashboard", icon: <MdDashboard />, url: "/" },
    { tabName: "Saved", icon: <FaNewspaper />, url: "/saved" },
  ],
  footer: [{ tabName: "Logout", icon: <MdLogout />, url: "/" }],
};

const NavItem = ({ element, section, isSidebarOpen }) => (
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

const Navbar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <aside
    className={`transition-all duration-300 ease-in-out flex-shrink-0
      ${isSidebarOpen ? "w-72" : "w-16"} bg-blue-700 min-h-screen py-2 flex flex-col`}
    >
      {Object.entries(NAVBAR_ELEMENTS).map(([section, elements]) => (
        <ul
          key={section}
          className={
            section === "body"
              ? "flex-grow"
              : section === "footer"
                ? "mt-auto"
                : ""
          }
        >
          {elements.map((element) => (
            <NavItem
              key={element.tabName}
              element={element}
              section={section}
              isSidebarOpen={isSidebarOpen}
            />
          ))}
        </ul>
      ))}
    </aside>
  );
};

export default Navbar;
