import { experiences } from "../constants/helper";
import ExperienceCard from "./ui/experience-card";

export default function ExperienceSection() {
  return (
    <div className="border border-gray-900 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Experience</h3>
      <div className="text-6xl font-bold mb-6">03</div>

      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          name={exp.name}
          className={index < experiences.length - 1 ? "mb-4" : ""}
        />
      ))}
    </div>
  );
}
