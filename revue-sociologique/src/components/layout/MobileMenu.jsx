import React from "react";
import { Navigation } from "./Navigation";

export const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <div className="lg:hidden bg-white border-b border-gray-200 py-4">
      <Navigation className="max-w-7xl mx-auto px-4 flex flex-col space-y-3" />
    </div>
  );
};