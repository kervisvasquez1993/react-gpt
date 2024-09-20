import { menuRoutes } from "../../routers/router";
import { SidebarItem } from "./SidebarItem";

export const SidebarMenuItem = () => {
  return (
    <nav className="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
      <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
        StatupGPT<span className="text-indigo-500">.</span>
      </h1>
      <span className="text-xl">Bienvenido</span>
      <div className="border-gray-700 border my-3" />
      {menuRoutes.map((option) => (
        <SidebarItem
          key={option.to}
          to={option.to}
          icon={option.icon}
          title={option.title}
          description={option.description}
        />
      ))}
    </nav>
  );
};
