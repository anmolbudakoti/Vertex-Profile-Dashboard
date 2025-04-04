import { MoreVertical } from "lucide-react";
import { Logo } from "../assets/images";

export default function MobileHeader() {
  return (
    <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-800 fixed top-0 left-0 right-0 bg-black z-20">
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <img src="#" alt="" />
      </div>
      <div className="w-8 h-8 rounded-full flex items-center justify-center">
        <img src={Logo} alt="logo" />
      </div>
      <button>
        <MoreVertical size={20} />
      </button>
    </header>
  );
}
