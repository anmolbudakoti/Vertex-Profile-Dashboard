import SocialIcon from "./ui/social-icon";
import { User } from "lucide-react";
import { Logo } from "../assets/images";

export default function ProfileCard() {
  return (
    <div className="border border-gray-900 rounded-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-start">
        <User className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6" />
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center w-full justify-start md:justify-between">
            <h2 className="text-2xl manrope-medium">Mr A</h2>
            <img
              src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png"
              alt="verified"
              className="ml-10"
              width={20}
            />
          </div>

          <div className="flex items-center justify-start w-full text-sm mb-2">
            <span className="manrope-light text-sm">
              Co-Founder & CEO @Vertx
            </span>
            <img src={Logo} className="ml-1 w-5 h-5" />
          </div>

          <div className="md:block flex mt-1 justify-between w-full items-center gap-6">
            <div className="bg-white text-black text-xs px-2 jetbrains-light py-1 rounded md:mb-4 text-center flex justify-center items-center">
              Entrepreneur
            </div>

            <div className="flex space-x-2">
              <SocialIcon type="linkedin" />
              <SocialIcon type="twitter" />
              <SocialIcon type="email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
