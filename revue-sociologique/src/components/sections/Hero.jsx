import { InfoBadge } from "../layout/InfoBadge";
import { BookOpen, Send } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 shadow-inner">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Revue ARME <span className="text-blue-300 block text-2xl mt-2 font-light italic text-wrap">Revue Africaine de Migration et Environnement</span>
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <InfoBadge label="ISSN-L" value="2958-2814" />
            <InfoBadge label="ISSN-P" value="3006-306X" />
            <InfoBadge label="SJIF 2024" value="5.214" highlight />
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/articles" className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
              <BookOpen size={20} /> Explorer les articles
            </Link>
            <Link to="/soumettre" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-500 transition-all border border-blue-400">
              <Send size={20} /> Soumettre un manuscrit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};