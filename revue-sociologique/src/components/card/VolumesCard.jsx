import React from "react";
import { VolumeItem } from "../item/VolumeItem";
import { volumesData } from "../data/journalData";

export const VolumesCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Derniers numéros</h3>
      <div className="space-y-3">
        {volumesData.map((vol, i) => (
          <VolumeItem key={i} {...vol} />
        ))}
      </div>
    </div>
  );
};