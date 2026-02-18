import api from './api';

const articleService = {
  // --- ROUTES PUBLIQUES ---
  getPublished: async (params) => {
    const response = await api.get('/articles/public', { params }); // { keyword, category, year, page, size }
    return response.data;
  },

  getOne: async (id) => {
    const response = await api.get(`/articles/public/${id}`);
    return response.data;
  },
  
  getCategories: async () => {
    const response = await api.get('/articles/public/categories'); 
    return response.data;
  },
  
  getYears: async () => {
    const response = await api.get('/articles/public/years');
    return response.data;
  },
  
  getTopViewed: async (limit = 10) => {
    const response = await api.get('/articles/public/top-viewed', { params: { limit } });
    return response.data;
  },
  
  getRecent: async (limit = 5) => {
    const response = await api.get('/articles/public/recent', { params: { limit } });
    return response.data;
  },

  // --- ROUTES ADMIN ---
  getAllAdmin: async (params) => {
    const response = await api.get('/articles', { params });
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/articles', data);
    return response.data;
  },
  
  update: async (id, data) => {
    const response = await api.put(`/articles/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/articles/${id}`);
    return response.data;
  },
  
  getStats: async (id) => {
    const response = await api.get(`/articles/${id}/stats`);
    return response.data;
  },

  // Upload du fichier PDF (nécessite un FormData)
  uploadPdf: (id, file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post(`/articles/${id}/upload-pdf`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  getMetadata: async () => {
    const response = await api.get('/articles/metadata');
    return response.data;
  },
  
};

export default articleService;