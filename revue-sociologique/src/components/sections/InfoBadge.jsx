import React from "react";

export const InfoBadge = ({ label, value, highlight = false }) => {
  return (
    <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
      <p className="text-sm text-blue-200">{label}</p>
      <p className={`font-bold ${highlight ? 'text-yellow-300' : ''}`}>{value}</p>
    </div>
  );
};