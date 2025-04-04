export default function SidebarItem({
  icon,
  label,
  activeItem,
  setActiveItem,
}) {
  return (
    <button
      onClick={() => setActiveItem(label)}
      className={`cursor-pointer flex items-center py-4 px-10 ${activeItem === label ? "text-white" : "text-gray-600"}`}
    >
      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3 md:hidden">
        {icon}
      </div>
      <span>{label}</span>
    </button>
  );
}
