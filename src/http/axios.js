import axios from "axios";

export const API_URL = 'https://backend.aeep.ru';

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('access_token')}`;
    return config;
});

export default api;