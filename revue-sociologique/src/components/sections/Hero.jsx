import { InfoBadge } from "../layout/InfoBadge";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Revue ARME (Revue Africaine de migration et Environnement)</h2>
        <div className="flex flex-wrap gap-4">
          <InfoBadge label="ISSN-L" value="2958-2814" />
          <InfoBadge label="ISSN-P" value="3006-306X" />
          <InfoBadge label="SJIF 2024" value="5.214" highlight />
        </div>
      </div>
    </div>
  );
};