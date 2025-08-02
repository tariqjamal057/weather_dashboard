"use client";

import { MdDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { CgCopy } from "react-icons/cg";
import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

interface MenuItem {
  title: string;
  href: string;
  icon: JSX.Element;
}

const MenuItemList: MenuItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <MdDashboard />,
  },
  {
    title: "Saved Locations",
    href: "/",
    icon: <CgCopy />,
  },
  {
    title: "Notifications",
    href: "/",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Settings",
    href: "/",
    icon: <CiSettings />,
  },
  {
    title: "Help",
    href: "/",
    icon: <CiCircleQuestion />,
  },
];

export function MenuItems() {
  const pathname = usePathname();

  return (
    <ul>
      {MenuItemList.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.href} className="my-2">
            <Link
              href={item.href}
              className={`flex items-center gap-2 py-2 px-4 transition-colors duration-200 ${
                isActive
                  ? " text-blue-500 border-s-2 bg-gray-50"
                  : "hover:bg-white hover:text-blue-500"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
