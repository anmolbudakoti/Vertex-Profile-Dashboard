import {
  LayoutDashboard,
  BarChart2,
  Users,
  Briefcase,
  User,
  Settings,
} from "lucide-react";
import SidebarItem from "./ui/sidebar-item";
import { useState } from "react";
import { Logo } from "../assets/images";
import { Link } from "react-router-dom";

export default function DesktopSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  return (
    <div className="hidden md:flex flex-col w-60 border-r border-gray-800 fixed top-0 left-0 h-full">
      <div className="flex items-center p-2 border-b border-gray-800 h-12">
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <img src={Logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="w-[190px] flex justify-center items-center">
          <Link to={"/"} className="manrope-medium text-lg">
            Vertxlabs, Inc
          </Link>
        </div>
      </div>

      <nav className="flex">
        <div className="w-12 hidden md:flex flex-col gap-4 items-center p-5 border-r border-gray-900 h-screen">
          <div className="cursor-pointer rounded-full bg-amber-50 w-10 h-10 p-2">
            <img
              src="#"
              alt="profile-1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="cursor-pointer rounded-full bg-amber-50 w-10 h-10 p-2">
            <img
              src="#"
              alt="profile-1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="cursor-pointer rounded-full bg-amber-50 w-10 h-10 p-2">
            <img
              src="#"
              alt="profile-1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-48 text-[16px] manrope-medium">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SidebarItem
            icon={<BarChart2 size={20} />}
            label="Analytics"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SidebarItem
            icon={<Users size={20} />}
            label="Connect"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SidebarItem
            icon={<Briefcase size={20} />}
            label="Dealroom"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SidebarItem
            icon={<User size={20} />}
            label="Profile"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            label="Settings"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      </nav>
    </div>
  );
}
