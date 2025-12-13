import { List, X } from "@phosphor-icons/react";
import { Navigation } from "../layout/Navigation";

export const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Revue ARME (Revue Africaine de migration et Environnement)</h1>
            </div>
          </div>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>

          <Navigation className="hidden lg:flex" />
        </div>
      </div>
    </header>
  );
};