export default function DesktopHeader() {
  return (
    <header className="hidden md:flex items-center justify-between border-b border-gray-800 h-12">
      <div className="px-6">
        <span className="text-[16px] manrope-light">Profile</span>
      </div>
      <div className="flex text-[16px] manrope-light">
        <button className="px-6 py-4 border-l border-gray-900 cursor-pointer">
          Activity
        </button>
        <button className="px-6 py-4 border-l border-gray-900 cursor-pointer">
          Log out
        </button>
      </div>
    </header>
  );
}
