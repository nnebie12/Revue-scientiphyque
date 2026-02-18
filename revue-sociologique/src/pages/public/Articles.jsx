import React, { useState, useEffect } from 'react';
import { ArticlesSection } from '../../components/sections/ArticlesSection';
import articleService from '../../services/articleService';
import { Search, Filter } from 'lucide-react';

const Articles = () => {
  const [activeTab, setActiveTab] = useState('articles'); // 'articles' ou 'apercu'
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ keyword: '', category: '' });

  // Récupération des articles depuis le Backend
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await articleService.getPublished({
          keyword: filters.keyword,
          category: filters.category,
          size: 20
        });
        // On récupère le contenu de la page (Spring Data Page)
        setArticles(response.data.content);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [filters]); // Relancer si les filtres changent

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* En-tête de la page */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Rechercher des articles</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explorez les dernières publications scientifiques de la revue ARME dans tous les domaines de la recherche sociologique.
        </p>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="Titre, mots-clés, auteurs..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setFilters({...filters, keyword: e.target.value})}
          />
        </div>
        <select 
          className="px-4 py-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFilters({...filters, category: e.target.value})}
        >
          <option value="">Toutes les catégories</option>
          <option value="Sociologie">Sociologie</option>
          <option value="Anthropologie">Anthropologie</option>
          <option value="Économie">Économie</option>
        </select>
      </div>

      {/* Section des onglets avec tes composants modifiés */}
      <ArticlesSection 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        articles={articles} 
        loading={loading}
      />
    </div>
  );
};

export default Articles;