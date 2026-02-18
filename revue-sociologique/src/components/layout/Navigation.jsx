import React from "react";
import { BarChart3, Globe, Users, Award, Eye, ArrowUpRight } from 'lucide-react';
import Home from "../../pages/public/Home";

export const Navigation = ({ className = "" }) => {
  const navItems = ["Accueil", "À propos", "Numéros", "Soumettre", "Contact"];
  
  return (
    <nav className={`${className} space-x-6`}>
      {navItems.map((item) => (
        <a 
          key={item}
          href="/Home" 
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};