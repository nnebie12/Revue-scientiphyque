import api from './api';

const volumeService = {
  // --- ROUTES PUBLIQUES ---
  getPublished: async () => {
    const response = await api.get('/volumes/public');
    return response.data;
  },

  // --- ROUTES ADMIN ---
  getAll: async () => {
    const response = await api.get('/volumes');
    return response.data;
  },
  
  getOne: async (id) => {
    const response = await api.get(`/volumes/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await api.post('/volumes', data);
    return response.data;
  },
  
  
  update: async (id, data) => {
    const response = await api.put(`/volumes/${id}`, data);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/volumes/${id}`);
    return response.data;
  },
};

export default volumeService;