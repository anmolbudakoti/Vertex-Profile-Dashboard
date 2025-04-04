import { Logo } from "../../assets/images";
export default function CompanyCard({
  logo,
  name,
  status,
  description,
  className = "",
}) {
  const descLines = description.split("\n");

  return (
    <div className={`flex items-start ${className}`}>
      <div
        className={`w-10 h-10 bg-white rounded-sm flex items-center justify-center mr-3`}
      >
        {logo === "vertx" && <img src={Logo} alt="logo" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <span className="manrope-medium text-sm">{name}</span>
          <span
            className={`ml-2 text-xs jetbrains-light bg-[${status.color}] px-1 rounded`}
          >
            {status.text}
          </span>
        </div>
        {descLines.map((line, index) => (
          <p key={index} className="text-xs manrope-light">
            {line}
          </p>
        ))}
      </div>
      <button className="text-xs cursor-pointer manrope-light">
        View Profile
      </button>
    </div>
  );
}
