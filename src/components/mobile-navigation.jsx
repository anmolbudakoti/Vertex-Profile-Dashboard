import { Grid, BarChart2, Users, Bell, Briefcase } from "lucide-react";
import MobileNavItem from "./ui/mobile-nav-item";

export default function MobileNavigation() {
  return (
    <div className="md:hidden flex justify-between border-t border-gray-800 p-2 fixed bottom-0 left-0 right-0 bg-black z-10">
      <MobileNavItem icon={<Grid size={20} />} label="Dashboard" />
      <MobileNavItem icon={<BarChart2 size={20} />} label="Analytics" />
      <MobileNavItem icon={<Users size={20} />} label="Connect" />
      <MobileNavItem icon={<Bell size={20} />} label="Activity" />
      <MobileNavItem icon={<Briefcase size={20} />} label="Dealroom" />
    </div>
  );
}
