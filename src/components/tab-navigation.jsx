import TabButton from "./ui/tab-button";

export default function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="flex text-[16px] manrope-light bg-black items-center border-b border-gray-800 overflow-x-auto sticky top-0 md:top-0 mt-16 md:mt-0 z-10 h-12">
      <TabButton
        label="Overview"
        active={activeTab}
        onClick={() => setActiveTab("Overview")}
      />
      <TabButton
        label="Portfolio"
        active={activeTab}
        onClick={() => setActiveTab("Portfolio")}
      />
      <TabButton
        label="Experience"
        active={activeTab}
        onClick={() => setActiveTab("Experience")}
      />
      <TabButton
        label="Media"
        active={activeTab}
        onClick={() => setActiveTab("Media")}
      />
      <div className="hidden md:block ml-auto">
        <button className={`px-6 h-full whitespace-nowrap  cursor-pointer`}>
          More
        </button>
      </div>
    </div>
  );
}
