import React from "react";

export const FooterColumn = ({ title, children }) => {
  return (
    <div>
      <h4 className="font-bold text-lg mb-4">{title}</h4>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};