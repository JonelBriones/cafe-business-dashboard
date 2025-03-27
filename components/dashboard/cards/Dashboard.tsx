"use client";

import { store } from "@/app/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Provider } from "react-redux";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const link = [
    "Dashboard",
    "Pos",
    "Orders",
    "Reports",
    "Inventory",
    "Settings",
  ];
  const footerLink = ["Settings", "Help"];
  const pathname = usePathname();
  let currentPathname = pathname.split("/")[pathname.split("/").length - 1];
  console.log(currentPathname);
  return (
    <Provider store={store}>
      <div className="w-full  flex flex-col">
        <div className="h-15 w-full flex justify-between place-items-center p-6  border-b border-neutral-200">
          <span className="px-2">LOGO</span>
          <input
            type="text"
            placeholder="Search menu, orders and more"
            className="py-1 px-4 border border-neutral-200 rounded-lg w-100"
          />

          <div className="flex gap-4">
            <span>bell</span>
            <span>admin</span>
          </div>
        </div>
        <div className="flex h-full overflow-hidden">
          {currentPathname !== "/" && (
            <div className="w-[260px] p-6 flex flex-col justify-between">
              <span className="text-sm h-fit px-4 py-2 pt-4">Dashboard</span>
              <ul className="flex-1">
                {link.map((link) => (
                  <li
                    key={link}
                    className={`rounded-lg px-4 py-2 w-full cursor-pointer ${
                      link.toLowerCase() == currentPathname
                        ? "bg-neutral-100"
                        : "hover:bg-neutral-50"
                    } `}
                  >
                    <Link
                      href={`/dashboard/${
                        link == "Dashboard" ? "" : link.toLowerCase()
                      }`}
                      className="block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                {footerLink.map((link) => (
                  <li
                    key={link}
                    className={`rounded-lg px-4 py-2 w-full cursor-pointer ${
                      pathname == link
                        ? "bg-neutral-100"
                        : "hover:bg-neutral-50"
                    } `}
                  >
                    <Link
                      href={`/dashboard/${
                        link == "Dashboard" ? "" : link.toLowerCase()
                      }`}
                      className="block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="w-full pl-4 border-l  border-neutral-200 overflow-auto h-full">
            {children}
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Dashboard;
