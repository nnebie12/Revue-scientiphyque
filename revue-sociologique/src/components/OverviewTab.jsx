import React, { useEffect, useState } from 'react';
import { BarChart3, Globe, Users, Award, Eye, ArrowUpRight, TrendingUp } from 'lucide-react';
import articleService from '../services/articleService';
import dashboardService from '../services/dashboardService';

const OverviewTab = () => {
  const [stats, setStats] = useState(null);
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    // Récupération des données réelles
    const loadOverview = async () => {
  try {
    const [statsRes, topRes] = await Promise.all([
      dashboardService.getStats(),
      articleService.getTopViewed(3)
    ]);

    // On vérifie que les réponses existent avant d'accéder à .data
    if (statsRes && statsRes.data) {
      setStats(statsRes.data);
    }
    
    if (topRes && topRes.data) {
      setTopArticles(topRes.data);
    }
    
  } catch (error) {
    console.error("Erreur détaillée dans l'overview :", error);
    // Optionnel : donner des valeurs par défaut pour éviter de bloquer l'UI
    setStats({ totalViews: 0, totalAuthors: 0, totalArticles: 0 });
    setTopArticles([]);
  }
};
    loadOverview();
  }, []);

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* 1. Mission & Portée */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="text-blue-600" /> À propos de la Revue ARME
          </h3>
          <p className="text-gray-600 leading-relaxed">
            La revue <strong>ARME</strong> (Afrique, Recherche, Migration, Environnement) est une publication 
            scientifique à comité de lecture dédiée à la diffusion de travaux originaux en sciences sociales. 
            Elle privilégie les analyses interdisciplinaires sur les mutations contemporaines du continent africain.
          </p>
        </div>
        <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-xl">
          <p className="text-sm opacity-80 mb-2">Impact de la revue</p>
          <p className="text-3xl font-bold mb-4">Indexation Internationale</p>
          <div className="flex gap-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Open Access</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Peer Reviewed</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">DOI System</span>
          </div>
        </div>
      </div>

      {/* 2. Indicateurs de diffusion (Metrics) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={<Eye size={20}/>} label="Vues totales" value={stats?.totalViews || "..."} />
        <MetricCard icon={<Globe size={20}/>} label="Pays lecteurs" value="45+" />
        <MetricCard icon={<Users size={20}/>} label="Contributeurs" value={stats?.totalAuthors || "120+"} />
        <MetricCard icon={<BarChart3 size={20}/>} label="Articles publiés" value={stats?.totalArticles || "..."} />
      </div>

      {/* 3. Articles Vedettes (Top 3) */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <TrendingUp className="text-blue-600" /> Articles les plus consultés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topArticles.map((article) => (
            <div key={article.id} className="group p-5 border border-gray-100 rounded-xl hover:shadow-md transition-all bg-white relative">
              <span className="text-[10px] uppercase font-bold text-blue-600 mb-2 block">{article.category}</span>
              <h4 className="font-bold text-gray-900 text-sm line-clamp-2 mb-3 group-hover:text-blue-600">
                {article.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1"><Eye size={12}/> {article.viewCount}</span>
                <button className="text-blue-600 flex items-center gap-1 font-semibold">
                  Lire <ArrowUpRight size={14}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Petit composant interne pour les cartes de métriques
const MetricCard = ({ icon, label, value }) => (
  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
    <div className="text-blue-600 mb-2">{icon}</div>
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</div>
  </div>
);

export { OverviewTab };