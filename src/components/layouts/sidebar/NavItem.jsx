import React from "react";
import { NavLink } from "react-router";
import PropTypes from "prop-types";

const NavItem = ({ element, section, isSidebarOpen }) => {
  return (
    <li className="text-white px-4 py-2 text-center">
      <NavLink to={element.url}>
        <div
          className={`flex rounded-md p-2 cursor-pointer text-sm items-center gap-x-4 
        ${section === "header" ? "mb-2" : "hover:bg-white hover:text-blue-700 transition-colors duration-300"} ${section == "footer"? "text-blue-700 bg-white hover:bg-slate-100" : ""}`}
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

NavItem.propTypes = {
  element: PropTypes.shape({
    url: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    tabName: PropTypes.string.isRequired,
  }).isRequired,
  section: PropTypes.string.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default NavItem;
