import React from "react";
import { menuRoutes } from "../../routers/router";
import { NavLink } from "react-router-dom";

export const SidebarMenuItem = () => {
  return (
    <nav className="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
      <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
        ReactGPT<span className="text-indigo-500">.</span>
      </h1>
      <span className="text-xl">Bienvenido</span>

      <div className="border-gray-700 border my-3" />

      {menuRoutes.map((option) => (
        <NavLink
          key={option.to}
          to={option.to}
          className={({ isActive }) =>
            isActive
              ? " flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
              : "flex justify-center items-center rounded-md p-2 transition-colors"
          }
        >
          <i className={`${option.icon} text-2xl mr-4 text-indigo-400`}></i>
          <div className="flex flex-col flex-grow">
            <span className="text-white text-lg font-semibild">
              {option.title}
            </span>
            <span className="text-grey-400 text-sm">{option.description}</span>
          </div>
        </NavLink>
      ))}
    </nav>
  );
};
