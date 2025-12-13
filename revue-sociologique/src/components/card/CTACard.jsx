import React from "react";

export const CTACard = () => {
  return (
    <div className="bg-blue-600 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-lg font-bold mb-2">Soumettre un article</h3>
      <p className="text-sm text-blue-100 mb-4">
        Partagez vos recherches avec la communauté scientifique
      </p>
      <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
        Soumettre maintenant
      </button>
    </div>
  );
};