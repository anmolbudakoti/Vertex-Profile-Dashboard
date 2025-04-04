import { useState } from "react";
import DesktopSidebar from "../components/desktop-sidebar";
import MobileHeader from "../components/mobile-header";
import DesktopHeader from "../components/desktop-header";
import TabNavigation from "../components/tab-navigation";
import ProfileCard from "../components/profile-card";
import FoundedCompanies from "../components/founded-companies";
import ExperienceSection from "../components/experience-section";
import MobileNavigation from "../components/mobile-navigation";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      <DesktopSidebar />
      <div className="flex-1 flex flex-col md:ml-60">
        <MobileHeader />
        <DesktopHeader />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 p-6 pb-20 md:pb-6">
          <h1 className="text-3xl manrope-bold mb-6">Overview</h1>
          <ProfileCard />
          <div className="grid md:grid-cols-2 gap-6">
            <FoundedCompanies />
            <ExperienceSection />
          </div>
        </div>
        <MobileNavigation />
      </div>
    </div>
  );
}
