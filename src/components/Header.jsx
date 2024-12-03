import React from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { toggleSidebar } from "../redux/slices/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { FaCloudSun } from "react-icons/fa6";

const Header = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex justify-between items-center pb-2 w-full rounded py-2">
      <div className="">
        <div className="flex items-center">
          <p className="me-2">
            {isSidebarOpen ? "" : <FaCloudSun size={40} color="#1d4ed8" />}
          </p>
          <button onClick={handleToggle}>
            {isSidebarOpen ? (
              <GoSidebarExpand size={26} color="#1d4ed8" />
            ) : (
              <GoSidebarCollapse size={26} color="#1d4ed8" />
            )}
          </button>
          <input
            type="search"
            name="default-search"
            id="default-search"
            className="ms-6 bg-white outline-none text-sm p-2 rounded lg:w-72"
          />
        </div>
      </div>
      <div className="bg-blue-700 border border-neutral-100 rounded-full w-10 h-full flex justify-center items-center text-white">
        U
      </div>
    </div>
  );
};

export default Header;
