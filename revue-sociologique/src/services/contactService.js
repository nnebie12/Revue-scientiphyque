import api from './api';

const contactService = {
  // --- ROUTE PUBLIQUE ---
  submitContact: async (formData) => {
    const response = await api.post('/contact/submit', formData);
    return response.data;
  },

  // --- ROUTES ADMIN ---
  getAllMessages: async (page = 0, size = 20) => {
    const response = await api.get('/contact', { params: { page, size } });
    return response.data;
  },

  getMessagesByStatus: async (status, page = 0, size = 20) => {
    const response = await api.get(`/contact/status/${status}`, { params: { page, size } });
    return response.data;
  },

    getUnreadCount: async () => {
      const response = await api.get('/contact/unread-count');
      return response.data;
    },

  markAsRead: async (id) => {
    const response = await api.put(`/contact/${id}/mark-read`);
    return response.data;
  },

  updateStatus: async (id, status) => {
    const response = await api.put(`/contact/${id}/status`, null, { params: { status } });
    return response.data;
  },

  deleteMessage: async (id) => {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
  },
  
};

export default contactService;