import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  icon: string;
  title: string;
  description: string;
}
export const SidebarItem = ({ to, icon, title, description }: Props) => {
  return (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        isActive
          ? " flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
          : "flex justify-center items-center rounded-md p-2 transition-colors"
      }
    >
      <i className={`${icon} text-2xl mr-4 text-indigo-400`}></i>
      <div className="flex flex-col flex-grow">
        <span className="text-white text-lg font-semibild">{title}</span>
        <span className="text-grey-400 text-sm">{description}</span>
      </div>
    </NavLink>
  );
};
