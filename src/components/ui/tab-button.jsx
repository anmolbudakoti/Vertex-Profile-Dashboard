export default function TabButton({ label, active, onClick }) {
  return (
    <button
      className={`px-6 h-full whitespace-nowrap  cursor-pointer ${active === label ? "text-white" : "text-gray-400 border-x border-gray-900"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
