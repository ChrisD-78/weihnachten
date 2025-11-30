// Konfiguration für API
// Für Netlify: Setze VITE_API_URL in den Netlify Environment Variables
// Format: https://your-api-domain.com/api

export const API_CONFIG = {
    baseURL: import.meta.env?.VITE_API_URL || 'http://localhost:3000/api',
    useLocalStorage: import.meta.env?.VITE_USE_LOCALSTORAGE === 'true' || false
};

