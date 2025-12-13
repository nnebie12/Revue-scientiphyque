import React from "react";
import { ImpactFactorCard } from "../card/ImpactFactorCard";
import { VolumesCard } from "../card/VolumesCard";
import { IndexationCard } from "../card/IndexationCard";
import { CTACard } from "../card/CTACard";


const Sidebar = () => {
  return (
    <div className="space-y-6">
      <ImpactFactorCard />
      <VolumesCard />
      <IndexationCard />
      <CTACard />
    </div>
  );
};
export { Sidebar };