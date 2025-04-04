export default function MobileNavItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div className="p-2">{icon}</div>
      <span className="text-xs">{label}</span>
    </div>
  );
}
