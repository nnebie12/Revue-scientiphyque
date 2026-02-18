import React, { useEffect, useState } from 'react';
import { FileText, BookOpen, MessageSquare, Eye, Download, TrendingUp } from 'lucide-react';
import dashboardService from '../../services/dashboardService';
import articleService from '../../services/articleService';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [topArticles, setTopArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Appels parallèles pour gagner du temps au chargement
        const [statsRes, topArticlesRes] = await Promise.all([
          dashboardService.getStats(),
          articleService.getTopViewed(5)
        ]);
        
        setStats(statsRes.data);
        setTopArticles(topArticlesRes.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className="p-8 text-gray-500">Chargement des statistiques...</div>;

  // Configuration des cartes de statistiques
  const statCards = [
    { label: 'Articles', value: stats?.totalArticles || 0, icon: <FileText className="text-blue-600" />, bg: 'bg-blue-50' },
    { label: 'Volumes', value: stats?.totalVolumes || 0, icon: <BookOpen className="text-purple-600" />, bg: 'bg-purple-50' },
    { label: 'Messages', value: stats?.unreadMessages || 0, icon: <MessageSquare className="text-green-600" />, bg: 'bg-green-50' },
    { label: 'Vues Totales', value: stats?.totalViews || 0, icon: <Eye className="text-orange-600" />, bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
        <p className="text-gray-600">Bienvenue dans l'interface de gestion de votre revue scientifique.</p>
      </div>

      {/* Grille de statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`p-4 rounded-lg ${card.bg}`}>
              {card.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase">{card.label}</p>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Articles les plus consultés */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-blue-600" size={20} />
            <h2 className="text-lg font-semibold">Articles les plus consultés</h2>
          </div>
          <div className="space-y-4">
            {topArticles.map((article, index) => (
              <div key={article.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-1 pr-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                  </span>
                  <p className="text-sm font-medium text-gray-800 line-clamp-1">{article.title}</p>
                  <p className="text-xs text-gray-500">{article.category}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><Eye size={14} /> {article.viewCount}</span>
                  <span className="flex items-center gap-1"><Download size={14} /> {article.downloadCount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Rapides */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-6">Actions rapides</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-blue-100 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all text-sm font-medium">
              + Publier un article
            </button>
            <button className="p-4 border border-purple-100 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-all text-sm font-medium">
              + Créer un volume
            </button>
            <button className="p-4 border border-gray-100 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-all text-sm font-medium">
              Voir les messages
            </button>
            <button className="p-4 border border-gray-100 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-all text-sm font-medium">
              Paramètres site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;