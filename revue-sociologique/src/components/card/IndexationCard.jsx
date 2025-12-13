import React from "react";
import { indexationData } from "../data/journalData";


export const IndexationCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Indexé par</h3>
      <div className="space-y-3">
        {indexationData.map((name) => (
          <div key={name} className="p-3 bg-gray-50 rounded-lg text-center">
            <p className="font-bold text-gray-900">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
