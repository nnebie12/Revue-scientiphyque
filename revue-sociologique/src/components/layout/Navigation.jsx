import React from "react";

export const Navigation = ({ className = "" }) => {
  const navItems = ["Accueil", "À propos", "Numéros", "Soumettre", "Contact"];
  
  return (
    <nav className={`${className} space-x-6`}>
      {navItems.map((item) => (
        <a 
          key={item}
          href="#" 
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};