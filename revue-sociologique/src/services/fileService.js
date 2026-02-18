import api from './api';

const fileService = {
  /**
   * Télécharge le PDF d'un article et déclenche l'enregistrement
   */
  downloadArticlePdf: async (articleId, fileName = 'article.pdf') => {
    try {
      const response = await api.get(`/files/download/${articleId}`, {
        responseType: 'blob', // Crucial pour les fichiers binaires
      });

      // Création d'un lien temporaire pour le téléchargement
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      
      // Nettoyage
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors du téléchargement du PDF", error);
      throw error;
    }
  },
};

export default fileService;