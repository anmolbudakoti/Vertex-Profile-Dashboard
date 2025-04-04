export default function ExperienceCard({ name, className = "" }) {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="w-10 h-10 bg-white rounded-sm mr-3"></div>
      <div className="flex-1">
        <span className="manrope-medium">{name}</span>
      </div>
      <button className="text-xs cursor-pointer manrope-light">
        View Profile
      </button>
    </div>
  );
}
