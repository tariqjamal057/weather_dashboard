import React from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { FaCloudSun } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebar";

const Header = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between items-center w-full rounded py-2 pb-2">
      <div className="flex items-center">
        <button 
          onClick={() => dispatch(toggleSidebar())}
          className="transform transition-transform duration-300 hover:scale-110"
        >
          <div className={`transition-transform duration-300`}>
            {isSidebarOpen ? (
              <GoSidebarExpand size={26} color="#1d4ed8" />
            ) : (
              <GoSidebarCollapse size={26} color="#1d4ed8" />
            )}
          </div>
        </button>
        <input
          type="search"
          placeholder="Search..."
          className="ms-6 bg-white outline-none text-sm p-2 rounded lg:w-72"
        />
      </div>
      <div className="bg-blue-700 border border-neutral-100 rounded-full w-10 h-10 flex justify-center items-center text-white">
        U
      </div>
    </header>
  );
};

export default Header;
