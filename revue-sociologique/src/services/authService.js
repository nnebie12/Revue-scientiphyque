import api from './api';
import { jwtDecode } from 'jwt-decode';

const TOKEN_KEY = 'token';

const authService = {
    /**
     * Connecte l'utilisateur et stocke le token
     */
    login: async (username, password) => {
        try {
            const response = await api.post('/auth/login', { username, password });
            if (response.data.token) {
                localStorage.setItem(TOKEN_KEY, response.data.token);
            }
            return response.data;
        } catch (error) {
            console.error("Erreur d'authentification", error);
            throw error;
        }
    },

    /**
     * Déconnecte l'utilisateur en supprimant le token
     */
    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
        // Redirection vers la page de login
        window.location.href = '/login';
    },

    /**
     * Récupère le token stocké
     */
    getToken: () => {
        return localStorage.getItem(TOKEN_KEY);
    },

    /**
     * Vérifie si l'utilisateur est connecté et si le token n'est pas expiré
     */
    isAuthenticated: () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) return false;

        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            
            // Si le token est expiré, on déconnecte
            if (decoded.exp < currentTime) {
                authService.logout();
                return false;
            }
            return true;
        } catch (error) {
            console.error("Erreur lors de la vérification du token", error);
            return false;
        }
    },

    /**
     * Récupère les infos de l'utilisateur à partir du token
     */
    getCurrentUser: () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) return null;
        try {
            return jwtDecode(token);
        } catch (error) {
            console.error("Erreur lors du décodage du token", error);
            return null;
        }
    }
};

export default authService;