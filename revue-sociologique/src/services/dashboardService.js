import api from './api';

const dashboardService = {
  /**
   * Récupère les statistiques globales (nombre d'articles, volumes, messages, etc.)
   */
    getStats: async () => {
  try {
    const response = await api.get('/dashboard/stats');
    return response.data || {}; 
  } catch (error) {
    console.error("Erreur API Stats:", error);
    return { totalViews: 0, totalAuthors: 0, totalArticles: 0 }; 
  }
}
};

export default dashboardService;