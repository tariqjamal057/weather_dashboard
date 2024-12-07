import { MdDashboard, MdLogout } from "react-icons/md";
import { FaNewspaper, FaCloudSun } from "react-icons/fa6";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";

const NAVBAR_ELEMENTS = {
  header: [{ tabName: "Weather App", icon: <FaCloudSun />, url: "/" }],
  body: [
    { tabName: "Dashboard", icon: <MdDashboard />, url: "/" },
    { tabName: "Saved", icon: <FaNewspaper />, url: "/saved" },
  ],
  footer: [{ tabName: "Logout", icon: <MdLogout />, url: "/" }],
};

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
