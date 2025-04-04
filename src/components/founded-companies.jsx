import { companies } from "../constants/helper";
import CompanyCard from "./ui/company-card";

export default function FoundedCompanies() {
  return (
    <div className="border border-gray-900 rounded-lg p-6">
      <h3 className="text-lg manrope-bold mb-4">Founded Companies</h3>
      <div className="text-6xl manrope-medium mb-6">02</div>

      {companies.map((company, index) => (
        <CompanyCard
          key={index}
          logo={company.logo}
          name={company.name}
          status={company.status}
          description={company.description}
          className={index < companies.length - 1 ? "mb-4" : ""}
        />
      ))}
    </div>
  );
}
