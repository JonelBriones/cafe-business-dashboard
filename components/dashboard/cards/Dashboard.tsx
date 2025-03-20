"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const link = [
    "dashboard",
    "orders",
    "menu",
    "employees",
    "inventory",
    "analytics",
    "settings",
  ];
  const footerLink = ["settings", "help"];
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex w-screen">
      <div className="w-[310px] p-6 flex flex-col justify-between">
        <div className="px-4 py-2">LOGO</div>
        <span className="text-sm h-fit px-4 py-2 pt-4 border-t border-neutral-200">
          Main Menu
        </span>
        <ul className="flex-1">
          {link.map((link) => (
            <li
              key={link}
              className={`rounded-lg px-4 py-2 w-full cursor-pointer ${
                pathname.split("/")[1] == link
                  ? "bg-neutral-100"
                  : "hover:bg-neutral-50"
              } `}
            >
              <Link
                href={`/dashboard/${link == "dashboard" ? "" : link}`}
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
                pathname.split("/")[1] == link
                  ? "bg-neutral-100"
                  : "hover:bg-neutral-50"
              } `}
            >
              <Link
                href={`/dashboard/${link == "dashboard" ? "" : link}`}
                className="block"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-1 p-6 flex-col overflow-x-hidden border-l border-neutral-200 ">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
